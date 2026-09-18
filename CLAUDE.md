# Ortho Study Hub (R2 Articles)

Continuous-learning system for orthodontic residency: every journal article becomes a fixed set of study files (handout, summary, key numbers, conflicts, critical appraisal, questions to ask attendings, exam questions, clinical implications) plus spaced-repetition flashcards, all served by a static site. The year's format is an article-review group discussion a few days after each article is handed out, and a promotion exam that draws on those articles. Everything on the site is article-based: no general textbook decks.

## Structure

- `index.html`, `style.css`, `script.js` — the app: Library (home: due cards, articles, per-article progress and study files), Review (spaced repetition, also per-article practice), Cards (search every card, grouped by article), and the in-app reader. Dark theme by default with a light toggle; colours are per document type (`.c-<doc-key>` classes in `style.css`). Static site, no build step.
- `print.html` — print view of one study document (`print.html?slug=<slug>&doc=handout`), used to export the handout PDF (see Deploy).
- `data/cards.js` — the flashcard deck. A single `CARDS` array; every card is `{ id, front, back, topic, tags, source }` and belongs to an article via `source`.
- `data/articles.js` — the Library manifest. One object per processed article: `slug, short, title, authors, journal, year, citation, topics, tags, processed, discussion, note, docs, pdfs`. `short` is the label on cards and chips (first author + year); `discussion` is the group-discussion date once known; `docs` lists the study-file keys in display order (handout first); `pdfs` lists the keys that have a `<key>.pdf` (normally `["handout", "prep"]`).
- `articles/inbox/` — drop new article files (PDF or text) here, unprocessed.
- `articles/<slug>/` — one folder per processed article, always the same nine files plus the source, two PDFs and a figures folder:
  - `source.<ext>` — the original file, moved here (git-ignored while the repo is public: PDFs are copyrighted)
  - `handout.md` and `handout.pdf` — the CONSULTANT-FACING two-page article brief that is handed out at the group discussion: bottom line, what was done, Figure 1 (mechanism schematic), what was found with a compact results table, Figure 2 (results by arm), strengths, limitations, points for discussion, clinical implications with a decision table, how it sits with previous evidence, reporting notes. Neutral third-person tone; no coaching, no exam material, no second person; the data-overlap and unequal-arm findings are deliberately excluded.
  - `prep.md` and `prep.pdf` — the resident's PRIVATE two-page prep sheet: 30-second opening, eight numbers, what each arm did, strengths and weaknesses, chairside implications, three questions to ask, five questions you will be asked, exam radar, prep timeline, one-line verdict. Never handed out.
  - `figures/` — SVG figures referenced from `handout.md` with relative paths (`figures/mechanism.svg`, `figures/results.svg`); the reader and `print.html` resolve them and show the alt text as a caption. Arm colours in every figure: I amber `#B7791F`, II teal `#0F8F7A`, III violet `#6D4FD1` (validated categorical palette).
  - `summary.md` — bottom line, what they did, what they found, why it matters, mechanism table
  - `key-numbers.md` — every important number in one place: identity, sample, protocol, all tables, derived numbers (effect sizes, differences), plus literature numbers to keep beside them
  - `conflicts.md` — A. internal inconsistencies (paper vs itself), B. agreements/conflicts with other studies, C. conflicts with Proffit, D. open questions, E. verdict
  - `critical-appraisal.md` — design, bias direction, power, stats, confounding, validity checklist, level of evidence, journal-club one-liners
  - `discussion-questions.md` — tiered questions to ask attendings (with why it lands, what you'll hear, follow-up, naive version to avoid), questions to NOT ask, questions they may fire back with model answers
  - `exam-questions.md` — MCQs + short answers + one case-based oral prompt, with answer key
  - `clinical-implications.md` — what changes at the chair, decision table by patient scenario, protocol notes, what the paper does not tell you
  - `checks.py` (when the appraisal recomputed statistics) — the arithmetic behind any recomputed P value, standard error or effect size, so a claim in `conflicts.md` can be rerun
- `registry/claims.md` — cross-article claims registry: one line per key claim/number from every article. Read it when processing a new article to find conflicts with articles already in the hub.
- `progress.md` — running index of every article processed (date, title, slug, topics, one-line note). Read this first in any new session.

## Conventions

- **Slugs**: lowercase, hyphenated — `year-firstauthor-topic` (e.g. `2026-khaleel-deep-bite-turbos-rcos-elastics`). The same slug names the folder, the `source` field of its cards, and the `slug` in `data/articles.js`.
- **Article-only content**: every card and every document belongs to an article. Never add textbook or starter cards.
- **Topics**: reuse an existing topic name from `data/cards.js` whenever the content fits one. Only introduce a new topic when it genuinely doesn't fit. Keep the topic name identical across `data/cards.js`, `data/articles.js`, `exam-questions.md`, and `progress.md`.
- **Flashcards**: append new cards to `CARDS`; never remove or rewrite existing ones while processing a new article. One card per distinct fact; back ≤ 40 words; exact numbers with units. Use ° and ±, never "deg".
- **Numbers**: every number in any study file must be traceable to a table or section of the paper. Derived numbers (differences, percentages, Cohen's d) are labelled "derived". Anything taken from memory about another paper or Proffit is marked UNVERIFIED unless it was checked against a source.
- **Conflicts** have three layers and all three are always checked: the paper against itself (abstract vs text vs tables), the paper against other articles (the registry first, then the literature), and the paper against Proffit's Contemporary Orthodontics.
- **Two audiences, two documents**: `handout.md` is for consultants (neutral, third person, 750–900 words outside tables plus two figures, two A4 pages; printed text-vs-table discrepancies may appear under "Reporting notes"; data-overlap and unequal-arm findings never appear). `prep.md` is for the resident only (spoken register, under 1100 words outside tables, two A4 pages; integrity findings in one neutral weakness line pointing to `conflicts.md`). Neither is ever phrased as an accusation.
- **Copyright**: never quote more than ~15 words verbatim from any source. `source.*` stays git-ignored while the repo is public.

## Processing a new article

Use the `process-article` skill (`.claude/skills/process-article/SKILL.md`) rather than improvising — it keeps the eight files, the PDF, the manifest, the registry, and the deck consistent. It runs automatically when relevant, or invoke it with `/process-article`.

## Exam question style

Default mix: MCQ (4–5 options, single best answer, board style, with answer and one-line rationale), short answer, and one case-based oral-defence prompt per article. Tag each question by what it tests (recall / application / analysis). If told the actual exam leans oral or case-defence style, shift future questions toward case-based prompts.

## Deploy

Static site from the `main` branch root (GitHub Pages today; Cloudflare Pages with Access if the site goes private). After processing an article: export the handout PDF, commit, push.

PDF export for `handout` and `prep` (needs the local server from `.claude/launch.json` on port 8765; Chrome works, Edge headless does not on this machine; write to a space-free path with a throwaway profile, then copy into the article folder, because Chrome silently fails on paths with spaces and reuses a cached page from an existing profile):

```bash
SCR='C:\Users\<user>\AppData\Local\Temp\claude\...\scratchpad'; rm -rf "$SCR/chrome-profile"
"/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --disable-gpu --no-first-run --user-data-dir="$SCR\\chrome-profile" --no-pdf-header-footer --virtual-time-budget=10000 --print-to-pdf="$SCR\\out.pdf" "http://localhost:8765/print.html?slug=<slug>&doc=handout&v=$(date +%s)"
cp "$SCR/out.pdf" "articles/<slug>/handout.pdf"
```

Check the page count with pypdf (target 2) and render page images with PyMuPDF to eyeball them. SVG figures must use inline presentation attributes and per-colour arrow markers (no `<style>` classes, no `context-stroke`); check them with a headless Chrome `--screenshot`, not PyMuPDF, which ignores CSS and markers.
