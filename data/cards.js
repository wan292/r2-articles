// The full flashcard deck. One object per card; every card belongs to an article via `source`
// (the article slug in data/articles.js). Append new cards when an article is processed;
// never rewrite existing ones.

const CARDS = [
  // --- Khaleel & Al-Nimri 2026 (deep bite: ABT alone vs ABT+RCOS vs ABT+posterior elastics) ---
  {
    id: "2026-khaleel-deep-bite-turbos-rcos-elastics-1",
    front: "Khaleel & Al-Nimri 2026 (Angle Orthod): mean days to deep-bite correction with anterior bite turbos plus a NiTi RCOS wire, plus posterior box elastics, or turbos alone?",
    back: "Table 2: RCOS + ABT 55.72 ± 10.52 d; elastics + ABT 44.42 ± 10.88 d; ABT alone 94.15 ± 7.08 d. ANOVA P < .001; all pairwise differences significant (I vs II P = .010).",
    topic: "Biomechanics & Appliances",
    tags: ["deep bite", "bite turbos", "rcos", "posterior elastics"],
    source: "2026-khaleel-deep-bite-turbos-rcos-elastics"
  },
  {
    id: "2026-khaleel-deep-bite-turbos-rcos-elastics-2",
    front: "In the 2026 JUST bite-turbo study, did the amount of overbite reduction differ between the three protocols?",
    back: "Comparable; no between-group test reported. Reduction 3.92 ± 0.90 mm (RCOS + ABT), 3.65 ± 0.92 (elastics + ABT), 3.57 ± 0.94 (ABT alone) from baselines of 5.1-5.5 mm. Groups differed in speed and mechanism, not amount.",
    topic: "Biomechanics & Appliances",
    tags: ["deep bite", "bite turbos"],
    source: "2026-khaleel-deep-bite-turbos-rcos-elastics"
  },
  {
    id: "2026-khaleel-deep-bite-turbos-rcos-elastics-3",
    front: "What did a cinched 0.016 × 0.022 NiTi reverse-curve-of-Spee wire with bite turbos do to the lower incisors (Khaleel 2026, Group I)?",
    back: "Proclination 7.46 ± 2.52° (Table 3). Incisal tip: 2.46 mm vertical (printed −2.46; paper calls it intrusion; sign convention unstated) and 1.01 mm forward. Point I 0.99 ± 0.38 mm (printed +0.99, opposite sign, also called intrusion) (Table 4).",
    topic: "Biomechanics & Appliances",
    tags: ["rcos", "intrusion", "cephalometrics"],
    source: "2026-khaleel-deep-bite-turbos-rcos-elastics"
  },
  {
    id: "2026-khaleel-deep-bite-turbos-rcos-elastics-4",
    front: "Side effect on the lower molars when a 0.016 × 0.022 NiTi RCOS wire is cinched distal to the second molars (Khaleel 2026)?",
    back: "Distal crown tipping: first molar 5.99 ± 4.75°, second molar 8.94 ± 3.45° to the corpus axis (Table 3; P < .001 vs Groups II and III). Only the second-molar distal cusp did not extrude (-0.64 mm).",
    topic: "Biomechanics & Appliances",
    tags: ["rcos", "deep bite"],
    source: "2026-khaleel-deep-bite-turbos-rcos-elastics"
  },
  {
    id: "2026-khaleel-deep-bite-turbos-rcos-elastics-5",
    front: "Dental effects of bilateral 3/16-inch medium box elastics (premolars to molars) with bite turbos on 0.014 NiTi wires (Khaleel 2026, Group II)?",
    back: "Extrusion of lower posteriors 0.90-1.19 mm and upper posteriors 0.28-0.42 mm (Table 4); upper extrusion significantly exceeded Groups I and III (~0.1 mm). Lower incisor change small: 3.46° proclination, tip 1.02 mm; upper incisor -0.34°.",
    topic: "Biomechanics & Appliances",
    tags: ["posterior elastics", "extrusion"],
    source: "2026-khaleel-deep-bite-turbos-rcos-elastics"
  },
  {
    id: "2026-khaleel-deep-bite-turbos-rcos-elastics-6",
    front: "Which between-group vertical skeletal differences reached significance in Khaleel 2026, and in which direction?",
    back: "Only elastics (II) vs turbos-alone (III): Mn-Mx +1.84° vs +0.69° (difference 1.15°, P = .011) and FH-Mn +1.31° vs +0.32° (0.98°, P = .026). RCOS group (+1.35°) differed from neither. LFH: no significant pairwise difference (Table 5).",
    topic: "Biomechanics & Appliances",
    tags: ["posterior elastics", "vertical", "cephalometrics"],
    source: "2026-khaleel-deep-bite-turbos-rcos-elastics"
  },
  {
    id: "2026-khaleel-deep-bite-turbos-rcos-elastics-7",
    front: "How did bite turbos alone (with 0.014 NiTi in both arches) correct the deep bite in Khaleel 2026, and at what cost?",
    back: "Mainly passive eruption of lower posterior teeth (0.86-1.30 mm, Table 4) after posterior disocclusion. Least lower incisor proclination: LI-CA +1.55 ± 1.39°; tip 1.25 mm. Cost: slowest, 94.15 d, about 40-50 days longer than the other groups.",
    topic: "Biomechanics & Appliances",
    tags: ["bite turbos", "extrusion", "deep bite"],
    source: "2026-khaleel-deep-bite-turbos-rcos-elastics"
  },
  {
    id: "2026-khaleel-deep-bite-turbos-rcos-elastics-8",
    front: "What magnitude of vertical skeletal change occurred during leveling in all three groups of Khaleel 2026, and what did the authors conclude from it?",
    back: "Within-group increases all significant but small: Mn-Mx +0.69° to +1.84°, FH-Mn +0.32° to +1.31°, LFH ratio +0.41% to +1.56% (Table 5). Authors: changes reflect dentoalveolar extrusion; deep-bite correction is primarily dentoalveolar, skeletal effects secondary.",
    topic: "Biomechanics & Appliances",
    tags: ["vertical", "deep bite"],
    source: "2026-khaleel-deep-bite-turbos-rcos-elastics"
  },
  {
    id: "2026-khaleel-deep-bite-turbos-rcos-elastics-9",
    front: "How was 'overbite corrected' (the T2 endpoint) defined and monitored in Khaleel 2026?",
    back: "Reviewed every 14 days. Corrected when overbite < 30% of the lower incisor crown AND upper-lower posterior contact was confirmed with Shimstock foil. Duration = days from start of treatment (T1) to that visit.",
    topic: "Biomechanics & Appliances",
    tags: ["deep bite", "study design"],
    source: "2026-khaleel-deep-bite-turbos-rcos-elastics"
  },
  {
    id: "2026-khaleel-deep-bite-turbos-rcos-elastics-10",
    front: "How were patients allocated to the three groups in Khaleel 2026, and why does that weaken the duration comparison?",
    back: "Not randomized: operator judgment based on lower incisor alignment/inclination and patient cooperation. Cooperative patients could be steered to elastics, whose effect depends on wear; well-aligned incisors to RCOS. Confounding by indication; a step down from the group's 2022 RCT.",
    topic: "Biomechanics & Appliances",
    tags: ["study design"],
    source: "2026-khaleel-deep-bite-turbos-rcos-elastics"
  },
  {
    id: "2026-khaleel-deep-bite-turbos-rcos-elastics-11",
    front: "How does Khaleel 2026 relate to the same group's 2022 RCT (Al-Zoubi & Al-Nimri, Angle Orthod 92:36-44, its reference 4)?",
    back: "The 2022 RCT compared RCOS wires against anterior bite turbos alone. Khaleel 2026 tested adding RCOS or posterior elastics to turbos, claiming no prior study had. The paper itself makes no cross-study duration comparison.",
    topic: "Biomechanics & Appliances",
    tags: ["study design", "bite turbos", "rcos"],
    source: "2026-khaleel-deep-bite-turbos-rcos-elastics"
  },
  {
    id: "2026-khaleel-deep-bite-turbos-rcos-elastics-12",
    front: "What is Point I (Greig 1983) and why did Khaleel 2026 use it to measure lower incisor intrusion?",
    back: "A point on the lower incisor long axis 0.66 × T1 tooth length from the tip, transferred to T2 on superimposition. Used for 'accurate evaluation of true intrusion': tip displacement is inflated by proclination (Greig's utility-arch method).",
    topic: "Biomechanics & Appliances",
    tags: ["intrusion", "cephalometrics"],
    source: "2026-khaleel-deep-bite-turbos-rcos-elastics"
  },
  {
    id: "2026-khaleel-deep-bite-turbos-rcos-elastics-13",
    front: "Which superimpositions were used to measure mandibular and maxillary tooth movement in Khaleel 2026?",
    back: "Mandibular: corpus axis (Xi-Pm, Ricketts) registered at Pm, as Xi shifts with growth. Maxillary: palatal vault (Broadbent). Lower teeth angled to corpus axis, upper incisor to maxillary plane; linear changes referenced to S-line 7° below SN and its perpendicular.",
    topic: "Biomechanics & Appliances",
    tags: ["cephalometrics"],
    source: "2026-khaleel-deep-bite-turbos-rcos-elastics"
  },
  {
    id: "2026-khaleel-deep-bite-turbos-rcos-elastics-14",
    front: "Who was eligible for the Khaleel 2026 deep-bite study (inclusion thresholds)?",
    back: "Overbite > 40% of lower incisor crown; ANB 1-5°; average or reduced lower face height; average smile line; lower incisors well aligned or crowded ≤ 3 mm; intact lower dentition (erupted second molars); overjet ≤ 6 mm.",
    topic: "Biomechanics & Appliances",
    tags: ["study design", "deep bite"],
    source: "2026-khaleel-deep-bite-turbos-rcos-elastics"
  },
  {
    id: "2026-khaleel-deep-bite-turbos-rcos-elastics-15",
    front: "State the clinical trade-off rule from Khaleel 2026 for choosing between box elastics, an RCOS wire, or bite turbos alone.",
    back: "Elastics + turbos: fastest (44 d), most upper-posterior extrusion and mandibular-plane opening; caution if hyperdivergent. RCOS + turbos: 56 d but 7.5° lower incisor proclination and molar tipping. Turbos alone: slowest (94 d), fewest side effects.",
    topic: "Biomechanics & Appliances",
    tags: ["deep bite", "posterior elastics", "rcos", "bite turbos", "vertical"],
    source: "2026-khaleel-deep-bite-turbos-rcos-elastics"
  },
  {
    id: "2026-khaleel-deep-bite-turbos-rcos-elastics-16",
    front: "Khaleel 2026: how much of the ~1 mm 'true intrusion' (Point I) in the RCOS group is actually attributable to the RCOS wire?",
    back: "Point I change: 0.99 mm (RCOS + turbos) vs 0.71 (elastics + turbos) and 0.86 (turbos alone), Table 4. No between-group test reported. The RCOS-specific increment is only 0.1-0.3 mm and untested, so 'RCOS produces true intrusion' is unsupported here.",
    topic: "Biomechanics & Appliances",
    tags: ["rcos", "intrusion", "critical appraisal"],
    source: "2026-khaleel-deep-bite-turbos-rcos-elastics"
  },
  {
    id: "2026-khaleel-deep-bite-turbos-rcos-elastics-17",
    front: "Al-Zoubi & Al-Nimri 2022 RCT (Angle Orthod 92:36-44) vs Khaleel 2026: how do durations, Point I and lower incisor proclination compare?",
    back: "2022: ABT alone 3.15 mo vs RCOS alone 4.85 mo; Point I 0.28 vs 1.01 mm; LI proclination 2.82° vs 5.74°. 2026: ABT alone 94 d (≈3.1 mo, matches 2022); RCOS + ABT 56 d, Point I 0.99 mm, 7.46°.",
    topic: "Biomechanics & Appliances",
    tags: ["rcos", "bite turbos", "intrusion", "critical appraisal"],
    source: "2026-khaleel-deep-bite-turbos-rcos-elastics"
  },
  {
    id: "2026-khaleel-deep-bite-turbos-rcos-elastics-18",
    front: "What does Proffit (Ch 15, alignment and leveling) warn about a reverse curve of Spee bent into a rectangular lower archwire, and how does Khaleel 2026 Group I illustrate it?",
    back: "Proffit: bending a reverse curve into a rectangular continuous wire torques lower incisor crowns labially (the classic torque error); continuous-arch RCOS levels mostly by posterior extrusion. Khaleel Group I used that wire: 7.46° flare, Point I 0.99 mm.",
    topic: "Biomechanics & Appliances",
    tags: ["rcos", "proffit", "intrusion"],
    source: "2026-khaleel-deep-bite-turbos-rcos-elastics"
  },
  {
    id: "2026-khaleel-deep-bite-turbos-rcos-elastics-19",
    front: "Why is the Khaleel 2026 claim that the sample 'included nongrowing patients' doubtful?",
    back: "Mean ages 15.82, 16.00 and 17.35 y (SD 2.1-2.9), consent from 'participants or their guardians', no CVM or hand-wrist staging. Group III, the oldest, showed the smallest skeletal change, so growth may confound the vertical comparison; no untreated control.",
    topic: "Biomechanics & Appliances",
    tags: ["study design", "vertical", "critical appraisal"],
    source: "2026-khaleel-deep-bite-turbos-rcos-elastics"
  },
  {
    id: "2026-khaleel-deep-bite-turbos-rcos-elastics-20",
    front: "What integrity caveats apply when quoting Khaleel 2026 (especially Group III, turbos alone)?",
    back: "Group III shares 14 identical values with the 2022 RCT's ABT arm (possible reuse). Tukey SEs imply unequal arms ≈29/31/20. Group I duration SD 10.52 (Table 2) vs 20.5 (text). LFH post-hoc rows do not match group means (misprint).",
    topic: "Biomechanics & Appliances",
    tags: ["study design", "critical appraisal"],
    source: "2026-khaleel-deep-bite-turbos-rcos-elastics"
  },
];
