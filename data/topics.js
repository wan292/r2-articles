// Topic manifest for the year's literature-review programme. One entry per topic folder
// (the folders live locally in "Literature Review/", which is git-ignored because the PDFs
// are copyrighted). A topic with an empty `articles` list has not been processed yet.
// Topic documents live under topics/<slug>/<doc>.md; keys match TOPIC_DOC_TYPES in script.js.

const TOPICS = [
  {
    n: 1,
    slug: "01-superimposition-methods",
    name: "Superimposition Methods",
    folder: "1- Superimposion Methods",
    articles: [
      "1989-nielsen-maxillary-superimposition-three-methods",
      "1994-doppel-maxillary-superimposition-implants",
      "2018-nguyen-3d-mandibular-regional-superimposition",
    ],
    docs: ["overview", "handout", "prep", "deck-outline"],
    pdfs: ["handout", "prep"],
    deck: "deck.pptx",
    presenter: null,
    date: null,
    note: "Which structures are stable enough to superimpose on: implant studies of the maxilla (Nielsen 1989, Doppel 1994) and 3D voxel-based registration of the mandible (Nguyen 2018).",
  },
  {
    n: 2,
    slug: "02-speech-respiration-osa-1",
    name: "Speech, Respiratory Function and OSA (1)",
    folder: "2- Speech, Respiratory Function , and Obstructive Sleep Apnea",
    articles: [],
    docs: ["present", "explainer"],
    pdfs: ["present", "explainer"],
    deck: null,
    presenter: null,
    date: "2026-10-22",
    note: "Tooth position and speech (Johnson & Sandy 1999), sucking-habit duration and the primary dentition (Warren & Bishara 2002), and myofunctional therapy for tongue thrust (Proffit & Mason 1975).",
  },
  { n: 3, slug: "03-speech-respiration-osa-2", name: "Speech, Respiratory Function and OSA (2)", folder: "3- Speech, Respiratory Function , and Obstructive Sleep Apnea", articles: [], docs: [], pdfs: [], deck: null, presenter: null, date: null, note: "" },
  { n: 4, slug: "04-tissue-reactions", name: "Tissue Reactions to Tooth Movement", folder: "4-Tissue Reactions to Tooth Movement", articles: [], docs: [], pdfs: [], deck: null, presenter: null, date: null, note: "" },
  { n: 5, slug: "05-treatment-rationale-1", name: "Treatment Rationale (1)", folder: "5-Treatment Rationale", articles: [], docs: [], pdfs: [], deck: null, presenter: null, date: null, note: "" },
  { n: 6, slug: "06-anchorage-1", name: "Anchorage in Orthodontics (1)", folder: "6-Anchorage in Orthodontics", articles: [], docs: [], pdfs: [], deck: null, presenter: null, date: null, note: "" },
  { n: 7, slug: "07-treatment-rationale-2", name: "Treatment Rationale (2)", folder: "7- Treatment Rationale", articles: [], docs: [], pdfs: [], deck: null, presenter: null, date: null, note: "" },
  { n: 8, slug: "08-anchorage-2", name: "Anchorage in Orthodontics (2)", folder: "8- Anchorage in Orthodontics", articles: [], docs: [], pdfs: [], deck: null, presenter: null, date: null, note: "" },
  { n: 9, slug: "09-orthopedics-class-ii-part-1", name: "Orthopedics and Class II Treatment, Part I", folder: "9-Orthopedics and Class II Treatment Part I", articles: [], docs: [], pdfs: [], deck: null, presenter: null, date: null, note: "" },
  { n: 10, slug: "10-class-ii-1", name: "Class II Malocclusion (1)", folder: "10-Class II Malocclusion 1", articles: [], docs: [], pdfs: [], deck: null, presenter: null, date: null, note: "" },
  { n: 11, slug: "11-class-ii-2", name: "Class II Malocclusion (2)", folder: "11-Class II Malocclusion 2", articles: [], docs: [], pdfs: [], deck: null, presenter: null, date: null, note: "" },
  { n: 12, slug: "12-interdisciplinary-adult", name: "Interdisciplinary Treatment and Adult Orthodontics", folder: "12- Interdisciplinary Treatment & Adult Orthodontics", articles: [], docs: [], pdfs: [], deck: null, presenter: null, date: null, note: "" },
  { n: 13, slug: "13-orthognathic-surgery", name: "Orthognathic Surgery", folder: "13-Orthagnathic Surgery", articles: [], docs: [], pdfs: [], deck: null, presenter: null, date: null, note: "" },
  { n: 14, slug: "14-transverse-expansion-1", name: "Transverse Discrepancy and Maxillary Expansion (1)", folder: "14-Transverse Discrepancy (Maxillary Expansion) 1", articles: [], docs: [], pdfs: [], deck: null, presenter: null, date: null, note: "" },
  { n: 15, slug: "15-transverse-expansion-2", name: "Transverse Discrepancy and Maxillary Expansion (2)", folder: "15-Transverse Discrepancy (Maxillary Expansion) 2", articles: [], docs: [], pdfs: [], deck: null, presenter: null, date: null, note: "" },
  { n: 16, slug: "16-class-iii", name: "Class III Malocclusion", folder: "16- Class III Malocclusion", articles: [], docs: [], pdfs: [], deck: null, presenter: null, date: null, note: "" },
  { n: 17, slug: "17-vertical-1", name: "Vertical Discrepancy (1)", folder: "17-Vertical Discrepancy 1", articles: [], docs: [], pdfs: [], deck: null, presenter: null, date: null, note: "" },
  { n: 18, slug: "18-vertical-2", name: "Vertical Discrepancy (2)", folder: "18-Vertical Discrepancy 2", articles: [], docs: [], pdfs: [], deck: null, presenter: null, date: null, note: "" },
  { n: 19, slug: "19-retention-stability", name: "Retention, Relapse and Long-Term Stability", folder: "19-Retention, Relapse, and Long- Term Stability", articles: [], docs: [], pdfs: [], deck: null, presenter: null, date: null, note: "" },
];
