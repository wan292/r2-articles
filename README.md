# Ortho Study Hub — R2 Articles

A study system for an orthodontic residency year built around article reviews: each article handed out for group discussion becomes the same eight study files, a two-page handout PDF, and spaced-repetition flashcards, all served as a static site. No backend, no build step.

**Live site:** https://wan292.github.io/r2-articles/

## What each article gets

| File | What it is for |
|------|----------------|
| `handout.md` / `handout.pdf` | The two pages you hold in the room: 30-second opening, eight numbers, what each arm did, strengths and weaknesses, three questions to ask, five you'll be asked, exam radar, prep timeline |
| `summary.md` | Bottom line, what they did, what they found, why it matters, mechanism table |
| `key-numbers.md` | Every important number in one place, all tables reproduced, derived numbers, literature numbers beside them |
| `conflicts.md` | The paper vs itself, vs other studies, vs Proffit; open questions; verdict |
| `critical-appraisal.md` | Design, bias direction, power, statistics, validity checklist, level of evidence, journal-club one-liners |
| `discussion-questions.md` | Questions to ask attendings that show you read the tables, what not to ask, and what they may ask you back |
| `exam-questions.md` | MCQs, short answers and a case-based oral prompt, with answer key |
| `clinical-implications.md` | What changes at the chair, a decision table by patient scenario, protocol notes |

Plus 10–20 flashcards, lines in `registry/claims.md` (so the next article is checked against this one), and a line in `progress.md`.

## The app
- **Library** (home) — cards due today, every article with its study files as colour-coded chips, per-article progress, Practise and Handout PDF buttons
- **Review** — tap-to-flip cards on a 5-box spaced-repetition schedule (Again / Good / Easy; keyboard: space, 1, 2, 3); practise a single article any time
- **Cards** — search every card by text, tag or article
- **Reader** — every study file rendered in-app with a contents list; deep links work: `#read/<slug>/<doc>`
- Dark theme by default, light theme via the toggle; progress and theme are saved in your browser

## Adding an article
This repo is driven by [Claude Code](https://claude.com/product/claude-code):

1. Open a terminal in this folder and run `claude`.
2. Drop the article (PDF or text) into `articles/inbox/`.
3. Say "process the new article" (or run `/process-article`), and mention the discussion date if you know it.

Claude Code reads `CLAUDE.md`, which points it at the `process-article` skill (`.claude/skills/process-article/SKILL.md`): read and check the tables against the rendered pages, research the literature and Proffit, audit the paper against itself, draft the seven files, fact-check them adversarially, distil the handout, export the PDF, write the cards, then file everything and update the manifest, registry and progress log. Commit and push, and the Library updates.

`progress.md` and `registry/claims.md` are worth opening first in any new session.

## Notes
- Original PDFs live at `articles/<slug>/source.pdf` locally and are git-ignored while the repo is public (journal articles are copyrighted).
- `print.html?slug=<slug>&doc=handout` is the print view used to export `handout.pdf` with headless Chrome (command in `CLAUDE.md`).
- The only external dependency is `marked` (loaded from cdnjs) to render markdown. If it fails to load, the reader falls back to plain text and links to the file on GitHub.
- Flashcard schema, if you ever add a card by hand:

```js
{ id: "unique-id", front: "Question", back: "Answer", topic: "Topic name", tags: ["optional"], source: "article-slug" }
```
