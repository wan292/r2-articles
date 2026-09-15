// Article manifest for the Library tab. One entry per processed article.
// Append a new object when an article is processed (the process-article skill does this).
// `docs` lists which study files exist under articles/<slug>/ — keep the keys in
// sync with DOC_TYPES in script.js.

const SITE = {
  repo: "https://github.com/wan292/r2-articles",
};

const ARTICLES = [
  {
    slug: "2026-khaleel-deep-bite-turbos-rcos-elastics",
    title: "Assessment of three different techniques in correcting deep overbite: a prospective clinical study",
    authors: "Khaleel R, Al-Nimri K",
    journal: "Angle Orthodontist",
    year: 2026,
    citation: "Angle Orthod. 2026;96(5):528–535. doi:10.2319/100925-850.1",
    topics: ["Biomechanics & Appliances"],
    tags: ["deep bite", "bite turbos", "RCOS", "posterior elastics", "intrusion", "extrusion"],
    processed: "2026-09-16",
    note: "Prospective non-randomised trial (n = 80): anterior bite turbos alone vs turbos + RCOS NiTi wire vs turbos + posterior box elastics. Elastics fastest (44 d), RCOS 56 d, turbos alone 94 d; RCOS proclines lower incisors 7.5°.",
    docs: ["summary", "key-numbers", "conflicts", "critical-appraisal", "discussion-questions", "exam-questions", "clinical-implications"],
  },
];
