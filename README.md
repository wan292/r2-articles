# Ortho Study Hub — R2 Articles

A continuous study system for orthodontic residency, built around journal articles. Every article becomes the same seven study files plus spaced-repetition flashcards, and everything is served as a static site on GitHub Pages — no backend, no build step.

**Live site:** https://wan292.github.io/r2-articles/

## What each article gets

| File | What it is for |
|------|----------------|
| `summary.md` | Bottom line, what they did, what they found, why it matters, mechanism table |
| `key-numbers.md` | Every important number in one place, all tables reproduced, derived numbers, literature numbers beside them |
| `conflicts.md` | The paper vs itself, vs other studies, vs Proffit; open questions; verdict |
| `critical-appraisal.md` | Design, bias direction, power, statistics, validity checklist, level of evidence, journal-club one-liners |
| `discussion-questions.md` | Questions to ask attendings that show you read the tables, what not to ask, and what they may ask you back |
| `exam-questions.md` | MCQs, short answers and a case-based oral prompt, with answer key |
| `clinical-implications.md` | What changes at the chair, a decision table by patient scenario, protocol notes |

Plus 10–15 flashcards appended to the deck, one line in `registry/claims.md` per key claim (so the next article can be checked against this one), and one line in `progress.md`.

## The app
- **Dashboard** — cards due today, mastery stats, latest article, breakdown by topic
- **Review** — tap-to-flip cards on a 5-box spaced-repetition schedule (Again / Good / Easy)
- **Browse** — search every card by text, tag or article slug
- **Library** — every processed article with its seven study files rendered in-app, plus "Practise" for that article's cards
- Progress is saved locally in your browser — no account, no server. Deep links work: `#read/<slug>/<doc>`.

## Adding an article
This repo is meant to be driven by [Claude Code](https://claude.com/product/claude-code):

1. Open a terminal in this folder and run `claude`.
2. Drop the article (PDF or text) into `articles/inbox/`.
3. Say "process the new article" (or run `/process-article`).

Claude Code reads `CLAUDE.md`, which points it at the `process-article` skill (`.claude/skills/process-article/SKILL.md`). The skill reads the article and checks the tables against the rendered pages, researches the surrounding literature and Proffit, audits the paper against itself, drafts the seven files and the cards, fact-checks them adversarially, then files everything, updates the Library manifest (`data/articles.js`), the claims registry and `progress.md`. Commit and push, and the Library updates.

`progress.md` and `registry/claims.md` are worth opening first in any new session — they are the running record of what is already covered and what each article claimed.

## Notes
- Original PDFs live at `articles/<slug>/source.pdf` locally but are git-ignored: journal articles are copyrighted, and the study notes are what gets published.
- The only external dependency is `marked` (loaded from cdnjs) to render markdown in the Library. If it fails to load, the reader falls back to plain text and links to the file on GitHub.
- Flashcard schema, if you ever add a card by hand:

```js
{ id: "unique-id", front: "Question", back: "Answer", topic: "Topic name", tags: ["optional"], source: "article-slug" }
```
