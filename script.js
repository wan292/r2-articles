// ---- Config ----
const BOX_INTERVALS_DAYS = [0, 1, 3, 7, 16, 30]; // days until next review, per box
const STORAGE_KEY = 'orthoFlashcardsProgress';
const THEME_KEY = 'orthoTheme';

// Study documents every processed article can have, in display order.
// Keys match the file names under articles/<slug>/<key>.md and the .c-<key> colour classes in style.css.
const DOC_TYPES = [
  { key: 'handout', label: 'Handout' },
  { key: 'prep', label: 'Prep sheet' },
  { key: 'summary', label: 'Summary' },
  { key: 'key-numbers', label: 'Key numbers' },
  { key: 'conflicts', label: 'Conflicts' },
  { key: 'critical-appraisal', label: 'Critical appraisal' },
  { key: 'discussion-questions', label: 'Questions to ask' },
  { key: 'exam-questions', label: 'Exam questions' },
  { key: 'clinical-implications', label: 'Clinical implications' },
];

// ---- State ----
let currentView = 'library';
let reviewQueue = [];
let reviewIndex = 0;
let reviewFlipped = false;
let reviewSource = null;      // slug when practising one article's cards, else null (due cards from all)
let browseFilter = '';        // prefilled search text for the Cards view
let readerTarget = null;      // { slug, doc } when the reader is open

// ---- Theme ----
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  try { localStorage.setItem(THEME_KEY, theme); } catch (e) { /* ignore */ }
}
function toggleTheme() {
  const cur = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  applyTheme(cur === 'light' ? 'dark' : 'light');
}

// ---- Progress persistence ----
function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Could not save progress', e);
  }
}

function getCardState(cardId, progress) {
  return progress[cardId] || { box: 0, nextReview: new Date(0).toISOString(), lastReviewed: null };
}

function isDue(state) {
  return new Date(state.nextReview) <= new Date();
}

function rateCard(cardId, rating) {
  const progress = loadProgress();
  const state = getCardState(cardId, progress);
  let newBox;
  if (rating === 'again') newBox = 0;
  else if (rating === 'good') newBox = Math.min(state.box + 1, BOX_INTERVALS_DAYS.length - 1);
  else newBox = Math.min(state.box + 2, BOX_INTERVALS_DAYS.length - 1); // easy
  const next = new Date();
  next.setDate(next.getDate() + BOX_INTERVALS_DAYS[newBox]);
  progress[cardId] = { box: newBox, nextReview: next.toISOString(), lastReviewed: new Date().toISOString() };
  saveProgress(progress);
}

// ---- Derived data ----
function getArticles() {
  return (typeof ARTICLES !== 'undefined' && Array.isArray(ARTICLES)) ? ARTICLES : [];
}

function getArticle(slug) {
  return getArticles().find(a => a.slug === slug) || null;
}

function shortLabel(slug) {
  const a = getArticle(slug);
  return a ? (a.short || `${a.authors.split(',')[0]} ${a.year}`) : (slug || '');
}

function getAllCardStates() {
  const progress = loadProgress();
  return CARDS.map(c => ({ card: c, state: getCardState(c.id, progress) }));
}

function getDueCards() {
  return getAllCardStates().filter(x => isDue(x.state)).map(x => x.card);
}

function cardsForSource(slug) {
  return CARDS.filter(c => c.source === slug);
}

function articleStats(slug) {
  const progress = loadProgress();
  const cards = cardsForSource(slug);
  const states = cards.map(c => getCardState(c.id, progress));
  const mastered = states.filter(s => s.box >= BOX_INTERVALS_DAYS.length - 1).length;
  const due = states.filter(isDue).length;
  const started = states.filter(s => s.lastReviewed).length;
  return { total: cards.length, mastered, due, started };
}

function getMasteryStats() {
  const all = getAllCardStates();
  const mastered = all.filter(x => x.state.box >= BOX_INTERVALS_DAYS.length - 1).length;
  return { total: all.length, mastered, due: all.filter(x => isDue(x.state)).length };
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str == null ? '' : String(str);
  return div.innerHTML;
}

function docsFor(article) {
  const list = article && article.docs && article.docs.length ? article.docs : DOC_TYPES.map(d => d.key);
  return DOC_TYPES.filter(d => list.includes(d.key));
}

// ---- Routing ----
// Hash routes: #library, #review, #cards, #read/<slug>/<doc>
function routeFromHash() {
  const h = (location.hash || '').replace(/^#/, '');
  if (!h) return { view: 'library' };
  const parts = h.split('/');
  if (parts[0] === 'read' && parts[1]) {
    return { view: 'reader', slug: decodeURIComponent(parts[1]), doc: parts[2] ? decodeURIComponent(parts[2]) : 'summary' };
  }
  if (parts[0] === 'dashboard' || parts[0] === 'browse') return { view: parts[0] === 'browse' ? 'cards' : 'library' };
  if (['library', 'review', 'cards'].includes(parts[0])) return { view: parts[0] };
  return { view: 'library' };
}

function updateHash(hash) {
  if (location.hash === '#' + hash) return;
  history.replaceState(null, '', '#' + hash);
}

// ---- Rendering ----
const app = document.getElementById('app');
const navButtons = document.querySelectorAll('.nav-tab');
const toTopBtn = document.getElementById('to-top');

function setView(view, opts = {}) {
  currentView = view;
  if (view !== 'review') reviewSource = null;
  if (view === 'cards') browseFilter = opts.filter || '';
  if (view === 'reader') readerTarget = { slug: opts.slug, doc: opts.doc || 'summary' };
  const navView = view === 'reader' ? 'library' : view;
  navButtons.forEach(b => b.classList.toggle('active', b.dataset.view === navView));
  if (view === 'reader') updateHash(`read/${encodeURIComponent(opts.slug)}/${encodeURIComponent(opts.doc || 'summary')}`);
  else updateHash(view);
  render();
  if (view !== 'reader') window.scrollTo({ top: 0 });
}

function render() {
  if (currentView === 'library') renderLibrary();
  else if (currentView === 'review') renderReview();
  else if (currentView === 'cards') renderBrowse();
  else if (currentView === 'reader') renderReader();
}

function bindOpenButtons() {
  document.querySelectorAll('[data-open]').forEach(btn => {
    btn.addEventListener('click', () => setView('reader', { slug: btn.dataset.open, doc: btn.dataset.doc || 'summary' }));
  });
  document.querySelectorAll('[data-practice]').forEach(btn => btn.addEventListener('click', () => {
    reviewSource = btn.dataset.practice;
    setView('review');
  }));
  document.querySelectorAll('[data-browse]').forEach(btn => btn.addEventListener('click', () => setView('cards', { filter: btn.dataset.browse })));
}

// ---- Library (home) ----
function renderLibrary() {
  const stats = getMasteryStats();
  const articles = getArticles().slice().reverse(); // newest first

  const hero = `
    <section class="card hero">
      <div class="hero-left">
        <div class="hero-number">${stats.due}</div>
        <div class="hero-label">${stats.due === 1 ? 'card due today' : 'cards due today'}</div>
      </div>
      ${stats.due > 0
        ? `<button class="btn-primary" id="start-review">Start review</button>`
        : `<p class="hero-note">All caught up. Practise any article below.</p>`}
    </section>
    <section class="stats-row">
      <div class="stat"><span class="stat-value">${articles.length}</span><span class="stat-label">${articles.length === 1 ? 'article' : 'articles'}</span></div>
      <div class="stat"><span class="stat-value">${stats.total}</span><span class="stat-label">cards</span></div>
      <div class="stat"><span class="stat-value">${stats.mastered}</span><span class="stat-label">mastered</span></div>
    </section>`;

  const list = articles.length === 0
    ? `<p class="empty-note">No articles yet. Drop a PDF in <code>articles/inbox/</code> and run the process-article skill.</p>`
    : articles.map(a => {
      const s = articleStats(a.slug);
      const pct = s.total ? Math.round((s.mastered / s.total) * 100) : 0;
      return `
        <article class="card article-card">
          <div class="article-meta">
            <span>${escapeHtml(a.authors)}</span>
            <span>${escapeHtml(a.journal)} ${escapeHtml(a.year)}</span>
            ${a.processed ? `<span>filed ${escapeHtml(a.processed)}</span>` : ''}
            ${a.discussion ? `<span>discussion ${escapeHtml(a.discussion)}</span>` : ''}
          </div>
          <h3 class="article-title">${escapeHtml(a.title)}</h3>
          ${a.note ? `<p class="article-note">${escapeHtml(a.note)}</p>` : ''}
          <div class="doc-links">
            ${docsFor(a).map(d => `<button class="chip c-${d.key}" data-open="${escapeHtml(a.slug)}" data-doc="${d.key}"><span class="dot"></span>${d.label}</button>`).join('')}
          </div>
          ${s.total ? `
          <div class="progress">
            <span>${s.mastered}/${s.total} mastered</span>
            <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
            ${s.due ? `<span class="due">${s.due} due</span>` : `<span>up to date</span>`}
          </div>` : ''}
          <div class="article-actions">
            ${s.total ? `<button class="btn-ghost" data-practice="${escapeHtml(a.slug)}">Practise ${s.total} cards</button>` : ''}
            ${s.total ? `<button class="btn-ghost" data-browse="${escapeHtml(a.slug)}">Browse cards</button>` : ''}
            ${(a.pdfs || []).map(k => { const d = DOC_TYPES.find(x => x.key === k); return `<a class="btn-ghost" href="articles/${encodeURIComponent(a.slug)}/${encodeURIComponent(k)}.pdf" target="_blank" rel="noopener">${d ? d.label : k} PDF</a>`; }).join('')}
          </div>
          ${a.tags && a.tags.length ? `<div class="tag-row">${a.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}</div>` : ''}
        </article>`;
    }).join('');

  app.innerHTML = hero + `<h2 class="section-title">Articles</h2>` + list;
  const startBtn = document.getElementById('start-review');
  if (startBtn) startBtn.addEventListener('click', () => setView('review'));
  bindOpenButtons();
}

// ---- Review ----
function renderReview() {
  reviewQueue = reviewSource ? cardsForSource(reviewSource) : getDueCards();
  reviewIndex = 0;
  reviewFlipped = false;

  if (reviewQueue.length === 0) {
    const articles = getArticles().filter(a => cardsForSource(a.slug).length);
    app.innerHTML = `
      <section class="review-done">
        <h2>Nothing due right now</h2>
        <p>Practise an article's cards anyway, or come back tomorrow.</p>
        <div class="review-filter">
          ${articles.map(a => `<button class="chip" data-practice="${escapeHtml(a.slug)}">${escapeHtml(a.short || a.slug)} · ${cardsForSource(a.slug).length}</button>`).join('')}
        </div>
        <button class="btn-ghost" id="back-home">Back to library</button>
      </section>`;
    document.getElementById('back-home').addEventListener('click', () => setView('library'));
    bindOpenButtons();
    return;
  }
  renderReviewCard();
}

function renderReviewCard() {
  if (reviewIndex >= reviewQueue.length) {
    app.innerHTML = `
      <section class="review-done">
        <h2>Session complete</h2>
        <p>You reviewed ${reviewQueue.length} card${reviewQueue.length === 1 ? '' : 's'}.</p>
        <button class="btn-primary" id="back-home">Back to library</button>
      </section>`;
    document.getElementById('back-home').addEventListener('click', () => setView('library'));
    return;
  }

  const card = reviewQueue[reviewIndex];
  app.innerHTML = `
    <section class="review-area">
      <div class="review-progress">${reviewSource ? `Practice · ${escapeHtml(shortLabel(reviewSource))} · ` : ''}${reviewIndex + 1} of ${reviewQueue.length}</div>
      <div class="flashcard ${reviewFlipped ? 'flipped' : ''}" id="flashcard" role="button" tabindex="0" aria-label="${reviewFlipped ? 'Answer shown' : 'Tap to show answer'}">
        <div class="flashcard-inner">
          <div class="flashcard-face flashcard-front">
            <span class="card-source-chip">${escapeHtml(shortLabel(card.source))}</span>
            <span class="card-topic-chip">${escapeHtml(card.topic)}</span>
            <p>${escapeHtml(card.front)}</p>
            <span class="tap-hint">Tap or press space to reveal</span>
          </div>
          <div class="flashcard-face flashcard-back">
            <span class="card-source-chip">${escapeHtml(shortLabel(card.source))}</span>
            <p>${escapeHtml(card.back)}</p>
          </div>
        </div>
      </div>
      ${reviewFlipped ? `
        <div class="rating-row">
          <button class="btn-rate btn-again" data-rating="again">Again<small>1 · today</small></button>
          <button class="btn-rate btn-good" data-rating="good">Good<small>2 · next box</small></button>
          <button class="btn-rate btn-easy" data-rating="easy">Easy<small>3 · skip a box</small></button>
        </div>` : ''}
    </section>
  `;

  const flashcardEl = document.getElementById('flashcard');
  if (!reviewFlipped) {
    const flip = () => { reviewFlipped = true; renderReviewCard(); };
    flashcardEl.addEventListener('click', flip);
    flashcardEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flip(); }
    });
    flashcardEl.focus({ preventScroll: true });
  } else {
    document.querySelectorAll('.btn-rate').forEach(btn => {
      btn.addEventListener('click', () => rate(btn.dataset.rating));
    });
  }

  function rate(rating) {
    rateCard(card.id, rating);
    reviewIndex++;
    reviewFlipped = false;
    renderReviewCard();
  }
}

// Keyboard shortcuts in review: space flips, 1/2/3 rate.
document.addEventListener('keydown', (e) => {
  if (currentView !== 'review' || e.target.tagName === 'INPUT') return;
  if (reviewIndex >= reviewQueue.length) return;
  if (!reviewFlipped && e.key === ' ') { e.preventDefault(); reviewFlipped = true; renderReviewCard(); return; }
  if (reviewFlipped && ['1', '2', '3'].includes(e.key)) {
    const rating = { '1': 'again', '2': 'good', '3': 'easy' }[e.key];
    const btn = document.querySelector(`.btn-rate[data-rating="${rating}"]`);
    if (btn) btn.click();
  }
});

// ---- Cards (browse) ----
function renderBrowse() {
  app.innerHTML = `
    <section class="browse-area">
      <input type="search" id="search-input" placeholder="Search cards by text, tag or article…" class="search-input" aria-label="Search flashcards" value="${escapeHtml(browseFilter)}">
      <div id="browse-list"></div>
    </section>
  `;
  const listEl = document.getElementById('browse-list');
  const searchInput = document.getElementById('search-input');

  function renderList(filter = '') {
    const f = filter.trim().toLowerCase();
    const articles = getArticles().slice().reverse();
    const sources = [...new Set(CARDS.map(c => c.source))];
    // Articles in manifest order first, then any card sources not in the manifest.
    const ordered = articles.map(a => a.slug).filter(s => sources.includes(s)).concat(sources.filter(s => !getArticle(s)));
    const html = ordered.map(slug => {
      const label = shortLabel(slug);
      const cards = CARDS.filter(c => c.source === slug && (
        !f ||
        c.front.toLowerCase().includes(f) ||
        c.back.toLowerCase().includes(f) ||
        (c.source || '').toLowerCase().includes(f) ||
        label.toLowerCase().includes(f) ||
        (c.topic || '').toLowerCase().includes(f) ||
        (c.tags || []).some(t => t.toLowerCase().includes(f))
      ));
      if (cards.length === 0) return '';
      const a = getArticle(slug);
      return `
        <div class="browse-group">
          <h3>${escapeHtml(a ? a.title : slug)} <span class="count">${label} · ${cards.length}</span></h3>
          ${cards.map(c => `
            <details class="browse-card">
              <summary>${escapeHtml(c.front)}</summary>
              <p>${escapeHtml(c.back)}</p>
              <div class="tag-row">${(c.tags || []).map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}</div>
            </details>
          `).join('')}
        </div>`;
    }).join('');
    listEl.innerHTML = html || '<p class="empty-note">No cards match your search.</p>';
  }

  renderList(browseFilter);
  searchInput.addEventListener('input', (e) => { browseFilter = e.target.value; renderList(e.target.value); });
}

// ---- Reader ----
function renderMarkdown(md) {
  if (typeof marked !== 'undefined' && marked && typeof marked.parse === 'function') {
    try { return marked.parse(md, { gfm: true, breaks: false }); } catch (e) { /* fall through */ }
  }
  return `<pre class="md-fallback">${escapeHtml(md)}</pre>`;
}

// Relative image paths in a study file are relative to articles/<slug>/, but the page lives at the site root.
// Also turns `![caption](src)` into a figure with a visible caption.
function localiseFigures(root, slug) {
  root.querySelectorAll('img').forEach(img => {
    const src = img.getAttribute('src') || '';
    if (src && !/^(https?:|data:|\/)/.test(src)) img.src = `articles/${encodeURIComponent(slug)}/${src}`;
    img.loading = 'lazy';
    const alt = img.getAttribute('alt');
    const p = img.parentElement;
    if (alt && p && p.tagName === 'P' && p.childNodes.length === 1) {
      const fig = document.createElement('figure');
      fig.className = 'md-figure';
      p.replaceWith(fig);
      fig.appendChild(img);
      const cap = document.createElement('figcaption');
      cap.textContent = alt;
      fig.appendChild(cap);
    }
  });
}

function buildToc(body) {
  const h2s = [...body.querySelectorAll('h2')];
  if (h2s.length < 3) return '';
  const items = h2s.map((h, i) => {
    const id = 'sec-' + (i + 1);
    h.id = id;
    return `<li><a href="#${id}" data-scroll="${id}">${escapeHtml(h.textContent)}</a></li>`;
  }).join('');
  return `<details class="toc"><summary>Contents · ${h2s.length} sections</summary><ol>${items}</ol></details>`;
}

async function renderReader() {
  const { slug, doc } = readerTarget || {};
  const article = getArticle(slug);
  const docType = DOC_TYPES.find(d => d.key === doc) || DOC_TYPES[1];
  const docs = docsFor(article);
  const n = cardsForSource(slug).length;

  app.innerHTML = `
    <section class="reader c-${docType.key}">
      <button class="btn-back" id="reader-back">← Library</button>
      ${article ? `
        <div class="article-meta"><span>${escapeHtml(article.authors)}</span><span>${escapeHtml(article.journal)} ${escapeHtml(article.year)}</span></div>
        <h2 class="reader-title">${escapeHtml(article.title)}</h2>` : `<h2 class="reader-title">${escapeHtml(slug)}</h2>`}
      <nav class="doc-tabs" aria-label="Study documents">
        ${docs.map(d => `<button class="chip c-${d.key} ${d.key === docType.key ? 'active' : ''}" data-doc="${d.key}"><span class="dot"></span>${d.label}</button>`).join('')}
      </nav>
      <div class="reader-actions">
        ${n ? `<button class="btn-ghost" id="reader-practice">Practise ${n} cards</button>` : ''}
        ${article && (article.pdfs || []).includes(docType.key) ? `<a class="btn-ghost" href="articles/${encodeURIComponent(slug)}/${encodeURIComponent(docType.key)}.pdf" target="_blank" rel="noopener">Download PDF</a>` : ''}
        ${typeof SITE !== 'undefined' && SITE.repo ? `<a class="btn-ghost" href="${escapeHtml(SITE.repo)}/blob/main/articles/${encodeURIComponent(slug)}/${docType.key}.md" target="_blank" rel="noopener">On GitHub</a>` : ''}
      </div>
      <div id="reader-toc"></div>
      <article class="md-body" id="reader-body"><p class="loading">Loading…</p></article>
    </section>
  `;
  document.getElementById('reader-back').addEventListener('click', () => setView('library'));
  document.querySelectorAll('.doc-tabs [data-doc]').forEach(btn => btn.addEventListener('click', () => setView('reader', { slug, doc: btn.dataset.doc })));
  const practiceBtn = document.getElementById('reader-practice');
  if (practiceBtn) practiceBtn.addEventListener('click', () => { reviewSource = slug; setView('review'); });

  const body = document.getElementById('reader-body');
  const tocEl = document.getElementById('reader-toc');
  const path = `articles/${encodeURIComponent(slug)}/${encodeURIComponent(docType.key)}.md`;
  try {
    const res = await fetch(path, { cache: 'no-cache' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const md = await res.text();
    // Guard against a stale response if the user switched documents while loading.
    if (!readerTarget || readerTarget.slug !== slug || readerTarget.doc !== docType.key) return;
    body.innerHTML = renderMarkdown(md);
    body.querySelectorAll('a[href^="http"]').forEach(a => { a.target = '_blank'; a.rel = 'noopener'; });
    localiseFigures(body, slug);
    tocEl.innerHTML = buildToc(body);
    tocEl.querySelectorAll('[data-scroll]').forEach(a => a.addEventListener('click', (e) => {
      e.preventDefault();
      const el = document.getElementById(a.dataset.scroll);
      if (el) el.scrollIntoView({ block: 'start' });
    }));
    window.scrollTo({ top: 0 });
  } catch (e) {
    const gh = (typeof SITE !== 'undefined' && SITE.repo) ? `${SITE.repo}/blob/main/articles/${encodeURIComponent(slug)}/${docType.key}.md` : null;
    body.innerHTML = `
      <p class="empty-note">Could not load <code>${escapeHtml(path)}</code> (${escapeHtml(e.message)}).
      ${location.protocol === 'file:' ? 'Browsers block local file reads; open the site from its host or a local server.' : ''}
      ${gh ? `<br><a href="${escapeHtml(gh)}" target="_blank" rel="noopener">Open it on GitHub instead</a>.` : ''}</p>`;
  }
}

// ---- Init ----
navButtons.forEach(btn => btn.addEventListener('click', () => setView(btn.dataset.view)));
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
window.addEventListener('scroll', () => { toTopBtn.hidden = window.scrollY < 600; }, { passive: true });
toTopBtn.addEventListener('click', () => window.scrollTo({ top: 0 }));
window.addEventListener('hashchange', () => {
  const r = routeFromHash();
  if (r.view === 'reader') setView('reader', { slug: r.slug, doc: r.doc });
  else if (r.view !== currentView) setView(r.view);
});
(function init() {
  const r = routeFromHash();
  if (r.view === 'reader') setView('reader', { slug: r.slug, doc: r.doc });
  else setView(r.view);
})();
