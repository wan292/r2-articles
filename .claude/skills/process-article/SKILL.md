---
name: process-article
description: Process a new orthodontic journal article into the study hub. Reads the article fully, researches the surrounding literature and Proffit, audits the paper against itself, then generates the seven study files (summary, key numbers, conflicts, critical appraisal, discussion questions, exam questions, clinical implications), distils them into a two-page discussion handout with an exam radar (markdown + PDF), writes flashcards, files everything under articles/<slug>/, and updates the Library manifest, the claims registry and progress.md. Use whenever the user adds a file to articles/inbox/, or asks to process, add, study, or file a new article.
argument-hint: [optional filename in articles/inbox/]
---

Process one new article into the study hub. The output is always the same eight files plus a PDF and flashcards, so every article in the Library reads the same way.

## 1. Find the article
- If an argument was given, use that file.
- Otherwise look in `articles/inbox/` for a file not yet referenced in `progress.md`. If there are several, process the oldest first, or ask which one.
- If nothing unprocessed is found, say so and stop rather than reprocessing something already filed.
- Ask (or read from the request) the date of the group discussion, if known; it goes into the manifest as `discussion`.

## 2. Read it fully, then check the tables against the page images
- Extract the text (`pdftotext -layout` and plain) into the scratchpad. Extraction garbles symbols: "±" often becomes "6", "×" becomes "3", "<" becomes ",", ">" becomes ".". Do not trust a number until you have checked it against the rendered page.
- Render the pages that contain tables to PNG (PyMuPDF `get_pixmap(dpi=150)`) and read them. The images are authoritative for every table value.
- Read the whole article before writing anything. Never generate output from the abstract or a skim.

## 3. Create the slug and folder
Slug format: `year-firstauthor-shorttopic`, lowercase and hyphenated (e.g. `2026-khaleel-deep-bite-turbos-rcos-elastics`). Create `articles/<slug>/`.

## 4. Research before drafting (run these in parallel; use a Workflow when available)
Each of these produces notes that the drafting step distils. Mark every fact from another paper VERIFIED only if it was seen in a source; otherwise UNVERIFIED.
- **Prior work by the same group** — the authors' own earlier trials on the same question; get their actual numbers, and compare their tables value-by-value with this paper's (identical means and SDs across supposedly different samples are a finding).
- **Classic literature map** — the landmark studies the paper cites or should cite; for each: design, n, key numbers, AGREES / CONFLICTS / PARTIAL with this paper.
- **Recent literature (last ~7 years)** — RCTs, prospective studies, systematic reviews; also search for letters, comments or errata on the paper itself.
- **Proffit (Contemporary Orthodontics)** — every relevant textbook position, with chapter/section, marked AGREES / CONFLICTS / NUANCE. Check the user's Proffit notes at https://github.com/wan292/proffit-study-pages when relevant.
- **Registry check** — read `registry/claims.md` and list every existing claim in the hub that this paper confirms or contradicts.
- **Internal-consistency audit** — abstract vs results text vs tables; sign conventions; arithmetic (do the group counts add up?); typos that change meaning; claims about the sample that the data contradict; between-group claims without a between-group test.
- **Methods and statistics audit** — allocation and the direction of its bias, blinding, sample size, endpoint definition, multiplicity, confounders, growth/controls, measurement error, generalisability, level of evidence (Oxford CEBM + GRADE-style), effect sizes computed from the reported means/SDs. Recompute what can be recomputed (ANOVA P values from means/SDs, Tukey SEs, paired t) and keep the script as `articles/<slug>/checks.py`.

## 5. Generate the seven study files in `articles/<slug>/`
Write for a resident preparing for a group discussion and a promotion exam. Precise numbers with units and the table they come from. Plain sentences. No preamble; each file starts with its H1. Use ° and ±, never "deg".

**`summary.md`** — 250–400 words: bottom line (2–3 sentences you could say out loud), what they did, what they found (with the defining numbers), why it matters, one-line caveat, and a "mechanism at a glance" table.

**`key-numbers.md`** — every important number in one place: top numbers to memorise; study identity (journal, DOI, dates, IRB, funding); sample and inclusion/exclusion thresholds; protocol numbers (appliances, wire sizes, forces, review interval, endpoint); measurement method and reliability; sample-size calculation and tests; every results table reproduced in full; derived numbers (differences, % changes, Cohen's d) labelled as derived; literature numbers to keep beside these, each VERIFIED/UNVERIFIED.

**`conflicts.md`** — A. internal inconsistencies as a table (where A says / where B says / likely truth / severity / why it matters) plus how to raise them politely; B. agreements and conflicts with other studies, grouped by theme, each with numbers and a one-sentence journal-club line; C. conflicts with Proffit as a table with how to reconcile each in an exam answer; D. open questions; E. one-paragraph verdict. Include any conflict with an article already in the hub (from the registry) under B, naming its slug.

**`critical-appraisal.md`** — verdict in three lines (design, level of evidence, biggest limitation); PICO; design and allocation with bias direction; sample, power, attrition; outcome definition and measurement; statistics with effect sizes; confounding and growth; STROBE/CONSORT-style validity checklist; external validity (who it does NOT apply to); strengths; what would have made it better; 8–10 journal-club one-liners.

**`discussion-questions.md`** — questions to ask attendings that show you read the tables, in tiers (safe and sharp; mechanics and biology; methodology; Proffit and the exam). For each: the question as you would say it, why it lands, what you will probably hear, a follow-up, and the naive version to avoid. Then: questions NOT to ask (with why), questions they may fire back at you with model answers, and a ten-second opening summary.

**`exam-questions.md`** — 12 questions: 7 MCQs (4–5 options, single best answer, answer + one-line rationale citing the table/section + what it tests), 4 short-answer with model answers and marking points, 1 case-based oral-defence prompt with examiner questions and model answers. Mix recall / application / analysis. Answer key table at the end. Every question must be based on something stated in the article.

**`clinical-implications.md`** — what changes or confirms at the chair (each with the number behind it and the caveat); a decision table by patient scenario; practical protocol notes; what the paper does NOT tell you; one-sentence patient explanations. If the article is purely mechanistic or lab-based with no real clinical takeaway, say so plainly instead of inventing one.

## 6. Verify adversarially before filing
For every file, run a hostile fact-check against the article text and the page images: every number, group attribution, direction of effect, table reference; every MCQ has exactly one defensible answer and the key matches; flashcard backs are exact. Then a completeness pass across all files: contradictions between files, table numbers missing from key-numbers, conflicts from the research not in conflicts.md, discussion questions whose answer is plainly in the paper. Patch what it finds.

## 7. Distil the handout (after the seven files are final)
**`handout.md`** — the two-page discussion brief, distilled from the seven files only, under 1100 words outside tables, with exactly these sections: 30-second opening; bottom line; eight numbers to remember (table); what each arm/group did (table); strengths and weaknesses (three each); what it changes at the chair (five); three questions to ask (with a one-line "why it lands"); five questions you will be asked (with one-line answers); exam radar (ten facts most likely tested, three likely MCQ stems with answers, one likely oral question with a model answer); before the session (prep timeline table); verdict in one line. Verify it with two independent hostile checks (numbers; usefulness in the room) and merge. Integrity findings go in one neutral weakness line pointing to `conflicts.md`.

**`handout.pdf`** — export through `print.html` with headless Chrome (the local server from `.claude/launch.json` must be running on port 8765; Edge headless does not work on this machine):

```bash
"/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=10000 --print-to-pdf="H:\DRIVE\SBO\R2 Articles\articles\<slug>\handout.pdf" "http://localhost:8765/print.html?slug=<slug>&doc=handout"
```

Check the page count (target 2, never more than 3) and render page 1 to PNG to eyeball it.

## 8. Flashcards
10–20 new cards appended to `CARDS` in `data/cards.js`:

```js
{ id: "<slug>-<n>", front: "...", back: "...", topic: "...", tags: ["..."], source: "<slug>" }
```

One fact per card, back ≤ 40 words, exact numbers. Reuse an existing `topic`; only add a new one when nothing fits. Do not make cards out of the paper's internal inconsistencies, except one card on the integrity caveats if they are material.

## 9. File the source and register the article
- Move the original file from `articles/inbox/` to `articles/<slug>/source.<ext>` (git-ignored while the repo is public).
- Append an object to `ARTICLES` in `data/articles.js`: `slug, short ("Firstauthor Year"), title, authors, journal, year, citation, topics, tags, processed (date), discussion (date or null), note (one line), docs (all eight keys, handout first), pdf: true`.
- Append the article's key claims (8–12 lines, each with the number and unit) to `registry/claims.md`, filling "Conflicts with" from what the research found.
- Append one line to `progress.md`: date, title, slug, topic(s), one-sentence note.

## 10. Report back, commit, push
Summarize what was created — slug, topics used, number of cards added, the number of internal inconsistencies and literature conflicts found, the handout page count — and flag if any topic now looks ready to split per the categorization rule in CLAUDE.md. Commit and push so the Library updates, then confirm the handout PDF and the reader load on the live site.
