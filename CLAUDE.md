# Ortho Study Hub (R2 Articles)

Continuous-learning system for orthodontic residency: every journal article becomes a fixed set of study files (summary, key numbers, conflicts, critical appraisal, questions to ask attendings, exam questions, clinical implications) plus spaced-repetition flashcards, all served by a static site on GitHub Pages. The goal is promotion-exam prep and looking sharp at journal club, not general reading.

## Structure

- `index.html`, `style.css`, `script.js` — the app: Dashboard, Review (spaced repetition), Browse, Library (reads every article's study files in-app). Static site, no build step.
- `data/cards.js` — the flashcard deck. A single `CARDS` array; every card is `{ id, front, back, topic, tags, source }`.
- `data/articles.js` — the Library manifest. A single `ARTICLES` array; one object per processed article (`slug, title, authors, journal, year, citation, topics, tags, processed, note, docs`). The Library tab and the reader are driven by it.
- `articles/inbox/` — drop new article files (PDF or text) here, unprocessed.
- `articles/<slug>/` — one folder per processed article, always the same seven files plus the source:
  - `source.<ext>` — the original file, moved here (git-ignored: PDFs are copyrighted, the notes are what we publish)
  - `summary.md` — bottom line, what they did, what they found, why it matters, mechanism table
  - `key-numbers.md` — every important number in one place: identity, sample, protocol, all tables, derived numbers (effect sizes, differences), plus literature numbers to keep beside them
  - `conflicts.md` — A. internal inconsistencies (paper vs itself), B. agreements/conflicts with other studies, C. conflicts with Proffit, D. open questions, E. verdict
  - `critical-appraisal.md` — design, bias direction, power, stats, confounding, validity checklist, level of evidence, journal-club one-liners
  - `discussion-questions.md` — tiered questions to ask attendings (with why it lands, what you'll hear, follow-up, naive version to avoid), questions to NOT ask, questions they may fire back with model answers
  - `exam-questions.md` — MCQs + short answers + one case-based oral prompt, with answer key
  - `clinical-implications.md` — what changes at the chair, decision table by patient scenario, protocol notes, what the paper does not tell you
- `registry/claims.md` — cross-article claims registry: one line per key claim/number from every article. Read it when processing a new article to find conflicts with articles already in the hub.
- `progress.md` — running index of every article processed (date, title, slug, topics, one-line note). Read this first in any new session.

## Conventions

- **Slugs**: lowercase, hyphenated — `year-firstauthor-topic` (e.g. `2026-khaleel-deep-bite-turbos-rcos-elastics`). The same slug names the folder, the `source` field of its cards, and the `slug` in `data/articles.js`.
- **Topics**: reuse an existing topic name from `data/cards.js` whenever the content fits one. Only introduce a new topic when it genuinely doesn't fit. Keep the topic name identical across `data/cards.js`, `data/articles.js`, `exam-questions.md`, and `progress.md`.
- **Categorization**: once a topic reaches roughly 15+ cards or 4+ articles, propose a split into subtopics and ask before restructuring existing content.
- **Flashcards**: append new cards to `CARDS`; never remove or rewrite existing ones while processing a new article. One card per distinct fact; back ≤ 40 words; exact numbers with units.
- **Numbers**: every number in any study file must be traceable to a table or section of the paper. Derived numbers (differences, percentages, Cohen's d) are labelled "derived". Anything taken from memory about another paper or Proffit is marked UNVERIFIED unless it was checked against a source.
- **Conflicts** have three layers and all three are always checked: the paper against itself (abstract vs text vs tables), the paper against other articles (the registry first, then the literature), and the paper against Proffit's Contemporary Orthodontics.
- **Copyright**: never commit `source.*` files; never quote more than ~15 words verbatim from any source.

## Processing a new article

Use the `process-article` skill (`.claude/skills/process-article/SKILL.md`) rather than improvising — it keeps the seven files, the manifest, the registry, and the deck consistent. It runs automatically when relevant, or invoke it with `/process-article`.

## Exam question style

Default mix: MCQ (4–5 options, single best answer, board style, with answer and one-line rationale), short answer, and one case-based oral-defence prompt per article. Tag each question by what it tests (recall / application / analysis). If told the actual exam leans oral or case-defence style, shift future questions toward case-based prompts.

## Deploy

Static site on GitHub Pages from the `main` branch root. After processing an article: commit, push, and the Library updates within a minute or two.
