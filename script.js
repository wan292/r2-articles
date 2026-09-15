// ---- Config ----
const BOX_INTERVALS_DAYS = [0, 1, 3, 7, 16, 30]; // days until next review, per box
const STORAGE_KEY = 'orthoFlashcardsProgress';

// Study documents every processed article can have, in display order.
// Keys match the file names under articles/<slug>/<key>.md.
const DOC_TYPES = [
  { key: 'summary', label: 'Summary' },
  { key: 'key-numbers', label: 'Key numbers' },
  { key: 'conflicts', label: 'Conflicts' },
  { key: 'critical-appraisal', label: 'Critical appraisal' },
  { key: 'discussion-questions', label: 'Questions to ask' },
  { key: 'exam-questions', label: 'Exam questions' },
  { key: 'clinical-implications', label: 'Clinical implications' },
];

// ---- State ----
let currentView = 'dashboard';
let reviewQueue = [];
let reviewIndex = 0;
let reviewFlipped = false;
let reviewSource = null;      // slug when practising one article's cards, else null
let browseFilter = '';        // prefilled search text for the Browse view
let readerTarget = null;      // { slug, doc } when the reader is open

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
function getAllCardStates() {
  const progress = loadProgress();
  return CARDS.map(c => ({ card: c, state: getCardState(c.id, progress) }));
}

function getDueCards() {
  return getAllCardStates().filter(x => isDue(x.state)).map(x => x.card);
}

function getTopics() {
  return [...new Set(CARDS.map(c => c.topic))];
}

function getMasteryStats() {
  const all = getAllCardStates();
  const mastered = all.filter(x => x.state.box >= BOX_INTERVALS_DAYS.length - 1).length;
  return { total: all.length, mastered, due: all.filter(x => isDue(x.state)).length };
}

function getArticles() {
  return (typeof ARTICLES !== 'undefined' && Array.isArray(ARTICLES)) ? ARTICLES : [];
}

function cardsForSource(slug) {
  return CARDS.filter(c => c.source === slug);
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str == null ? '' : String(str);
  return div.innerHTML;
}

// ---- Routing ----
// Hash routes: #dashboard, #review, #browse, #library, #read/<slug>/<doc>
function routeFromHash() {
  const h = (location.hash || '').replace(/^#/, '');
  if (!h) return { view: 'dashboard' };
  const parts = h.split('/');
  if (parts[0] === 'read' && parts[1]) {
    return { view: 'reader', slug: decodeURIComponent(parts[1]), doc: parts[2] ? decodeURIComponent(parts[2]) : 'summary' };
  }
  if (['dashboard', 'review', 'browse', 'library'].includes(parts[0])) return { view: parts[0] };
  return { view: 'dashboard' };
}

function updateHash(hash) {
  if (location.hash === '#' + hash) return;
  history.replaceState(null, '', '#' + hash);
}

// ---- Rendering ----
const app = document.getElementById('app');
const navButtons = document.querySelectorAll('.nav-tab');

function setView(view, opts = {}) {
  currentView = view;
  if (view !== 'review') reviewSource = null;
  if (view === 'browse') browseFilter = opts.filter || '';
  if (view === 'reader') readerTarget = { slug: opts.slug, doc: opts.doc || 'summary' };
  const navView = view === 'reader' ? 'library' : view;
  navButtons.forEach(b => b.classList.toggle('active', b.dataset.view === navView));
  if (view === 'reader') updateHash(`read/${encodeURIComponent(opts.slug)}/${encodeURIComponent(opts.doc || 'summary')}`);
  else updateHash(view);
  render();
}

function render() {
  if (currentView === 'dashboard') renderDashboard();
  else if (currentView === 'review') renderReview();
  else if (currentView === 'browse') renderBrowse();
  else if (currentView === 'library') renderLibrary();
  else if (currentView === 'reader') renderReader();
}

function renderDashboard() {
  const stats = getMasteryStats();
  const topics = getTopics();
  const progress = loadProgress();
  const articles = getArticles();
  const topicRows = topics.map(t => {
    const cardsInTopic = CARDS.filter(c => c.topic === t);
    const dueInTopic = cardsInTopic.filter(c => isDue(getCardState(c.id, progress))).length;
    return `
      <div class="topic-row">
        <span class="topic-name">${escapeHtml(t)}</span>
        <span class="topic-count">${cardsInTopic.length} cards${dueInTopic ? ` · ${dueInTopic} due` : ''}</span>
      </div>`;
  }).join('');

  const latest = articles.length ? articles[articles.length - 1] : null;

  app.innerHTML = `
    <section class="hero">
      <div class="hero-number">${stats.due}</div>
      <div class="hero-label">${stats.due === 1 ? 'card due today' : 'cards due today'}</div>
      ${stats.due > 0
        ? `<button class="btn-primary" id="start-review">Start review</button>`
        : `<p class="hero-note">All caught up. Come back tomorrow, or browse below.</p>`}
    </section>
    <section class="stats-row">
      <div class="stat"><span class="stat-value">${stats.total}</span><span class="stat-label">total cards</span></div>
      <div class="stat"><span class="stat-value">${stats.mastered}</span><span class="stat-label">mastered</span></div>
      <div class="stat"><span class="stat-value">${topics.length}</span><span class="stat-label">topics</span></div>
      <div class="stat"><span class="stat-value">${articles.length}</span><span class="stat-label">${articles.length === 1 ? 'article' : 'articles'}</span></div>
    </section>
    ${latest ? `
    <section class="latest-article">
      <h2>Latest article</h2>
      <div class="article-card compact">
        <div class="article-meta">${escapeHtml(latest.authors)} · ${escapeHtml(latest.journal)} ${latest.year}</div>
        <div class="article-title">${escapeHtml(latest.title)}</div>
        <div class="article-actions">
          <button class="btn-link" data-open="${escapeHtml(latest.slug)}" data-doc="summary">Read summary</button>
          <button class="btn-link" data-open="${escapeHtml(latest.slug)}" data-doc="key-numbers">Key numbers</button>
          <button class="btn-link" data-open="${escapeHtml(latest.slug)}" data-doc="discussion-questions">Questions to ask</button>
        </div>
      </div>
    </section>` : ''}
    <section class="topics-list">
      <h2>By topic</h2>
      ${topicRows}
    </section>
  `;
  const startBtn = document.getElementById('start-review');
  if (startBtn) startBtn.addEventListener('click', () => setView('review'));
  bindOpenButtons();
}

function bindOpenButtons() {
  document.querySelectorAll('[data-open]').forEach(btn => {
    btn.addEventListener('click', () => setView('reader', { slug: btn.dataset.open, doc: btn.dataset.doc || 'summary' }));
  });
}

function renderReview() {
  reviewQueue = reviewSource ? cardsForSource(reviewSource) : getDueCards();
  reviewIndex = 0;
  reviewFlipped = false;

  if (reviewQueue.length === 0) {
    app.innerHTML = `
      <section class="review-done">
        <h2>Nothing due right now</h2>
        <p>Check back later, or browse the full deck anytime.</p>
        <button class="btn-primary" id="back-dashboard">Back to dashboard</button>
      </section>`;
    document.getElementById('back-dashboard').addEventListener('click', () => setView('dashboard'));
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
        <button class="btn-primary" id="back-dashboard">Back to dashboard</button>
      </section>`;
    document.getElementById('back-dashboard').addEventListener('click', () => setView('dashboard'));
    return;
  }

  const card = reviewQueue[reviewIndex];
  app.innerHTML = `
    <section class="review-area">
      <div class="review-progress">${reviewSource ? 'Practice · ' : ''}${reviewIndex + 1} of ${reviewQueue.length}</div>
      <div class="flashcard ${reviewFlipped ? 'flipped' : ''}" id="flashcard" role="button" tabindex="0" aria-label="${reviewFlipped ? 'Answer shown' : 'Tap to show answer'}">
        <div class="flashcard-inner">
          <div class="flashcard-face flashcard-front">
            <span class="card-topic">${escapeHtml(card.topic)}</span>
            <p>${escapeHtml(card.front)}</p>
            <span class="tap-hint">Tap to reveal</span>
          </div>
          <div class="flashcard-face flashcard-back">
            <p>${escapeHtml(card.back)}</p>
            <span class="card-source-tag">${escapeHtml(card.source || '')}</span>
          </div>
        </div>
      </div>
      ${reviewFlipped ? `
        <div class="rating-row">
          <button class="btn-rate btn-again" data-rating="again">Again</button>
          <button class="btn-rate btn-good" data-rating="good">Good</button>
          <button class="btn-rate btn-easy" data-rating="easy">Easy</button>
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
  } else {
    document.querySelectorAll('.btn-rate').forEach(btn => {
      btn.addEventListener('click', () => {
        rateCard(card.id, btn.dataset.rating);
        reviewIndex++;
        reviewFlipped = false;
        renderReviewCard();
      });
    });
  }
}

function renderBrowse() {
  app.innerHTML = `
    <section class="browse-area">
      <input type="search" id="search-input" placeholder="Search cards…" class="search-input" aria-label="Search flashcards" value="${escapeHtml(browseFilter)}">
      <div id="browse-list"></div>
    </section>
  `;
  const listEl = document.getElementById('browse-list');
  const searchInput = document.getElementById('search-input');

  function renderList(filter = '') {
    const f = filter.trim().toLowerCase();
    const topics = getTopics();
    const html = topics.map(topic => {
      const cardsInTopic = CARDS.filter(c => c.topic === topic && (
        !f ||
        c.front.toLowerCase().includes(f) ||
        c.back.toLowerCase().includes(f) ||
        (c.source || '').toLowerCase().includes(f) ||
        (c.tags || []).some(t => t.toLowerCase().includes(f))
      ));
      if (cardsInTopic.length === 0) return '';
      return `
        <div class="browse-topic">
          <h3>${escapeHtml(topic)}</h3>
          ${cardsInTopic.map(c => `
            <details class="browse-card">
              <summary>${escapeHtml(c.front)}</summary>
              <p>${escapeHtml(c.back)}</p>
              <span class="card-source">${escapeHtml(c.source || '')}</span>
            </details>
          `).join('')}
        </div>`;
    }).join('');
    listEl.innerHTML = html || '<p class="empty-note">No cards match your search.</p>';
  }

  renderList(browseFilter);
  searchInput.addEventListener('input', (e) => { browseFilter = e.target.value; renderList(e.target.value); });
}

// ---- Library ----
function renderLibrary() {
  const articles = getArticles().slice().reverse(); // newest first
  if (articles.length === 0) {
    app.innerHTML = `<section class="library-area"><p class="empty-note">No articles processed yet. Drop a PDF in <code>articles/inbox/</code> and run the process-article skill.</p></section>`;
    return;
  }
  app.innerHTML = `
    <section class="library-area">
      <p class="library-intro">${articles.length} ${articles.length === 1 ? 'article' : 'articles'} processed. Each one has the same seven study files.</p>
      ${articles.map(a => {
        const n = cardsForSource(a.slug).length;
        const docs = (a.docs && a.docs.length ? a.docs : DOC_TYPES.map(d => d.key));
        return `
        <article class="article-card">
          <div class="article-meta">${escapeHtml(a.authors)} · ${escapeHtml(a.journal)} ${escapeHtml(a.year)}${a.processed ? ` · filed ${escapeHtml(a.processed)}` : ''}</div>
          <h3 class="article-title">${escapeHtml(a.title)}</h3>
          ${a.note ? `<p class="article-note">${escapeHtml(a.note)}</p>` : ''}
          <div class="doc-links">
            ${DOC_TYPES.filter(d => docs.includes(d.key)).map(d =>
              `<button class="doc-link" data-open="${escapeHtml(a.slug)}" data-doc="${d.key}">${d.label}</button>`).join('')}
          </div>
          <div class="article-actions">
            ${n ? `<button class="btn-link" data-practice="${escapeHtml(a.slug)}">Practise ${n} card${n === 1 ? '' : 's'}</button>` : ''}
            ${n ? `<button class="btn-link" data-browse="${escapeHtml(a.slug)}">Browse cards</button>` : ''}
            ${typeof SITE !== 'undefined' && SITE.repo ? `<a class="btn-link" href="${escapeHtml(SITE.repo)}/tree/main/articles/${encodeURIComponent(a.slug)}" target="_blank" rel="noopener">Files on GitHub</a>` : ''}
          </div>
          ${a.tags && a.tags.length ? `<div class="tag-row">${a.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}</div>` : ''}
        </article>`;
      }).join('')}
    </section>
  `;
  bindOpenButtons();
  document.querySelectorAll('[data-practice]').forEach(btn => btn.addEventListener('click', () => {
    reviewSource = btn.dataset.practice;
    setView('review');
  }));
  document.querySelectorAll('[data-browse]').forEach(btn => btn.addEventListener('click', () => setView('browse', { filter: btn.dataset.browse })));
}

// ---- Reader ----
function renderMarkdown(md) {
  if (typeof marked !== 'undefined' && marked && typeof marked.parse === 'function') {
    try { return marked.parse(md, { gfm: true, breaks: false }); } catch (e) { /* fall through */ }
  }
  return `<pre class="md-fallback">${escapeHtml(md)}</pre>`;
}

async function renderReader() {
  const { slug, doc } = readerTarget || {};
  const article = getArticles().find(a => a.slug === slug);
  const docType = DOC_TYPES.find(d => d.key === doc) || DOC_TYPES[0];
  const docs = article && article.docs && article.docs.length ? article.docs : DOC_TYPES.map(d => d.key);
  const n = cardsForSource(slug).length;

  app.innerHTML = `
    <section class="reader">
      <button class="btn-back" id="reader-back">← Library</button>
      ${article ? `
        <div class="article-meta">${escapeHtml(article.authors)} · ${escapeHtml(article.journal)} ${escapeHtml(article.year)}</div>
        <h2 class="reader-title">${escapeHtml(article.title)}</h2>` : `<h2 class="reader-title">${escapeHtml(slug)}</h2>`}
      <nav class="doc-tabs" aria-label="Study documents">
        ${DOC_TYPES.filter(d => docs.includes(d.key)).map(d =>
          `<button class="doc-tab ${d.key === docType.key ? 'active' : ''}" data-doc="${d.key}">${d.label}</button>`).join('')}
        ${n ? `<button class="doc-tab practice" id="reader-practice">Practise ${n} cards</button>` : ''}
      </nav>
      <article class="md-body" id="reader-body"><p class="loading">Loading…</p></article>
    </section>
  `;
  document.getElementById('reader-back').addEventListener('click', () => setView('library'));
  document.querySelectorAll('.doc-tab[data-doc]').forEach(btn => btn.addEventListener('click', () => setView('reader', { slug, doc: btn.dataset.doc })));
  const practiceBtn = document.getElementById('reader-practice');
  if (practiceBtn) practiceBtn.addEventListener('click', () => { reviewSource = slug; setView('review'); });

  const body = document.getElementById('reader-body');
  const path = `articles/${encodeURIComponent(slug)}/${encodeURIComponent(docType.key)}.md`;
  try {
    const res = await fetch(path, { cache: 'no-cache' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const md = await res.text();
    // Guard against a stale response if the user switched documents while loading.
    if (!readerTarget || readerTarget.slug !== slug || readerTarget.doc !== docType.key) return;
    body.innerHTML = renderMarkdown(md);
    body.querySelectorAll('a[href^="http"]').forEach(a => { a.target = '_blank'; a.rel = 'noopener'; });
    window.scrollTo({ top: 0 });
  } catch (e) {
    const gh = (typeof SITE !== 'undefined' && SITE.repo) ? `${SITE.repo}/blob/main/articles/${encodeURIComponent(slug)}/${docType.key}.md` : null;
    body.innerHTML = `
      <p class="empty-note">Could not load <code>${escapeHtml(path)}</code> (${escapeHtml(e.message)}).
      ${location.protocol === 'file:' ? 'Browsers block local file reads; open the site from GitHub Pages or a local server.' : ''}
      ${gh ? `<br><a href="${escapeHtml(gh)}" target="_blank" rel="noopener">Open it on GitHub instead</a>.` : ''}</p>`;
  }
}

// ---- Init ----
navButtons.forEach(btn => btn.addEventListener('click', () => setView(btn.dataset.view)));
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
