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

  // --- Topic 1: Superimposition methods (Nielsen 1989, Doppel 1994, Nguyen 2018) ---
  {
    id: "1994-doppel-maxillary-superimposition-implants-1",
    front: "Doppel 1994: what was the design and sample?",
    back: "50 implanted adolescents (23 M, 27 F) from ≈ 700 University of Washington implant records; serial cephalograms ≥ 3 y apart, mean 4.2 ± 0.96 y; T1 11.9 ± 1.4 y, T2 16.0 ± 1.7 y; mostly treated (Table I).",
    topic: "Diagnosis & Cephalometrics",
    tags: ["superimposition", "cephalometrics", "implants", "maxilla", "study design"],
    source: "1994-doppel-maxillary-superimposition-implants"
  },
  {
    id: "1994-doppel-maxillary-superimposition-implants-2",
    front: "Doppel 1994: what was the reference standard and what was measured against it?",
    back: "Three tantalum implants per subject (below ANS, zygomatic process, palate medial to the first molar); T1 and T2 tracings registered on all three, then the maximum T1–T2 deviation of each of the 17 Table II entries measured in mm.",
    topic: "Diagnosis & Cephalometrics",
    tags: ["superimposition", "implants", "maxilla", "cephalometrics"],
    source: "1994-doppel-maxillary-superimposition-implants"
  },
  {
    id: "1994-doppel-maxillary-superimposition-implants-3",
    front: "Doppel 1994: which maxillary structures deviated least after implant superimposition (Table II)?",
    back: "Internal palate 0.85 ± 0.43 mm (lowest mean), anterior zygomatic process 0.95 ± 0.57 mm (traceable in 80 %), posterior zygomatic process (key ridge) 0.97 ± 0.43 mm (traceable in 100 %); palatal borders next at 1.05 and 1.14 mm.",
    topic: "Diagnosis & Cephalometrics",
    tags: ["superimposition", "maxilla", "implants", "growth"],
    source: "1994-doppel-maxillary-superimposition-implants"
  },
  {
    id: "1994-doppel-maxillary-superimposition-implants-4",
    front: "Doppel 1994: how far did the classic maxillary point landmarks drift from the implant fit over ≈ 4 years (Table II)?",
    back: "ANS 1.29 vertical / 1.43 horizontal; PTM 2.39 vertical / 1.52 horizontal; infraorbital foramen 1.67 ± 1.31 (n = 34); A point 2.13 ± 1.63; PNS 2.27 ± 1.75 mm (n = 27): all too unreliable for clinical use.",
    topic: "Diagnosis & Cephalometrics",
    tags: ["superimposition", "maxilla", "implants", "growth", "cephalometrics"],
    source: "1994-doppel-maxillary-superimposition-implants"
  },
  {
    id: "1994-doppel-maxillary-superimposition-implants-5",
    front: "Doppel 1994: in which direction did the two zygomatic surfaces change relative to the implants?",
    back: "Posterior zygomatic surface moved posteriorly (apposition) in all 50 cases; anterior zygomatic surface (40 films traceable): 27.5 % anterior, 35 % posterior, 37.5 % no mean change.",
    topic: "Diagnosis & Cephalometrics",
    tags: ["superimposition", "maxilla", "growth", "implants"],
    source: "1994-doppel-maxillary-superimposition-implants"
  },
  {
    id: "1994-doppel-maxillary-superimposition-implants-6",
    front: "Doppel 1994: how much did the palatal plane and SN rotate relative to the implant line (Table III)?",
    back: "Palatal plane (ANS–PNS) +0.92° ± 2.10°, range −5° to +8°; SN −0.56° ± 2.19°, range −6° to +9°; positive = downward-and-backward rotation relative to the lateral–anterior implant line (Table III, text).",
    topic: "Diagnosis & Cephalometrics",
    tags: ["superimposition", "maxilla", "growth", "cephalometrics"],
    source: "1994-doppel-maxillary-superimposition-implants"
  },
  {
    id: "1994-doppel-maxillary-superimposition-implants-7",
    front: "Doppel 1994 (Fig. 1): what does registering on the palatal plane at ANS do to the apparent movement of the implants and teeth?",
    back: "The implants appear to move posteriorly and superiorly; incisors appear to move lingually and molars to descend vertically; the occlusal plane appears to rotate up and forward (Fig. 1).",
    topic: "Diagnosis & Cephalometrics",
    tags: ["superimposition", "maxilla", "cephalometrics"],
    source: "1994-doppel-maxillary-superimposition-implants"
  },
  {
    id: "1994-doppel-maxillary-superimposition-implants-8",
    front: "Doppel 1994: what did the authors conclude about the reliability of maxillary structures for superimposition?",
    back: "No maxillary area was completely reliable; the posterior and anterior zygomatic process were the most reliable; ANS, PNS, PTM, A point, infraorbital foramen and the palatal borders were unreliable; the internal palate was of limited value.",
    topic: "Diagnosis & Cephalometrics",
    tags: ["superimposition", "maxilla", "implants", "cephalometrics"],
    source: "1994-doppel-maxillary-superimposition-implants"
  },
  {
    id: "1994-doppel-maxillary-superimposition-implants-9",
    front: "Doppel 1994: what maxillary superimposition method did the authors recommend?",
    back: "Superimpose on the anterior and posterior contours of the zygomatic process, letting the orbital floor rise 1.5 mm for every 1 mm the palatal plane lowers (1.5 : 1; Discussion and Fig. 7; the ratio is Conclusion 2).",
    topic: "Diagnosis & Cephalometrics",
    tags: ["superimposition", "maxilla", "growth", "cephalometrics"],
    source: "1994-doppel-maxillary-superimposition-implants"
  },
  {
    id: "1994-doppel-maxillary-superimposition-implants-10",
    front: "Doppel 1994: what is the main limitation of calling a structure 'reliable' in this study?",
    back: "Tracing error 0.5 mm (10 films retraced at 2 weeks) against best mean deviations of 0.85–0.97 mm; no inferential statistics or stated threshold, so 'reliable' is one operator's descriptive judgement of best fit (Methods, Discussion).",
    topic: "Diagnosis & Cephalometrics",
    tags: ["superimposition", "study design", "cephalometrics", "implants"],
    source: "1994-doppel-maxillary-superimposition-implants"
  },
  {
    id: "1989-nielsen-maxillary-superimposition-three-methods-1",
    front: "Nielsen 1989: what was the design and sample?",
    back: "Retrospective comparison of three maxillary superimpositions on the same serial cephalograms of 18 implanted subjects (6 boys, 12 girls; usable of 35), T1 10 ± 0.37 y, interval 4 ± 0.56 y; treated and untreated, mostly Class II.",
    topic: "Diagnosis & Cephalometrics",
    tags: ["superimposition", "cephalometrics", "implants", "maxilla", "study design"],
    source: "1989-nielsen-maxillary-superimposition-three-methods"
  },
  {
    id: "1989-nielsen-maxillary-superimposition-three-methods-2",
    front: "Nielsen 1989: what were the three superimposition methods compared?",
    back: "(1) Best fit: hard palate and nasal floor aligned, registered at ANS; (2) implant (reference); (3) structural (Björk–Skieller): anterior surface of the zygomatic process, with orbital-floor apposition set equal to nasal-floor resorption.",
    topic: "Diagnosis & Cephalometrics",
    tags: ["superimposition", "maxilla", "cephalometrics"],
    source: "1989-nielsen-maxillary-superimposition-three-methods"
  },
  {
    id: "1989-nielsen-maxillary-superimposition-three-methods-3",
    front: "Nielsen 1989: what was the reference standard, and how was bias at the superimposition step limited?",
    back: "Metallic implants placed surgically in the maxilla; a film pair was used only if at least 3–4 stable implants in the zygomatic process showed on both films; best-fit and structural tracings omitted the implants to avoid bias (Methods).",
    topic: "Diagnosis & Cephalometrics",
    tags: ["superimposition", "implants", "maxilla", "study design"],
    source: "1989-nielsen-maxillary-superimposition-three-methods"
  },
  {
    id: "1989-nielsen-maxillary-superimposition-three-methods-4",
    front: "Nielsen 1989: how much did best fit underestimate the vertical displacement of skeletal landmarks compared with implants (Table III, implant minus best fit)?",
    back: "PNS 1.08 mm, ANS (Harvold) 1.87 mm, ANS 1.88 mm, A point 2.24 mm over 4 years, all P < .001; best fit even showed ANS and PNS moving slightly upward (Table I).",
    topic: "Diagnosis & Cephalometrics",
    tags: ["superimposition", "maxilla", "growth", "implants", "cephalometrics"],
    source: "1989-nielsen-maxillary-superimposition-three-methods"
  },
  {
    id: "1989-nielsen-maxillary-superimposition-three-methods-5",
    front: "Nielsen 1989: by how much did best fit underestimate vertical tooth displacement (Table IV, implant minus best fit)?",
    back: "U6 cusp 1.33 mm, U6 apex 1.46 mm, U1 edge 1.84 mm, U1 apex 1.71 mm over 4 years (P < .0001): about 30 % of molar eruption and 50 % of incisor eruption missed.",
    topic: "Diagnosis & Cephalometrics",
    tags: ["superimposition", "maxilla", "growth", "implants", "cephalometrics"],
    source: "1989-nielsen-maxillary-superimposition-three-methods"
  },
  {
    id: "1989-nielsen-maxillary-superimposition-three-methods-6",
    front: "Nielsen 1989: with implant superimposition, how did the vertical descent of ANS compare with PNS over 4 years (Table I)?",
    back: "ANS descended 1.62 mm and PNS 0.70 mm: about twice as much anteriorly, so resorptive lowering of the nasal floor is greater anteriorly than posteriorly (agrees with Björk & Skieller).",
    topic: "Diagnosis & Cephalometrics",
    tags: ["superimposition", "maxilla", "growth", "implants"],
    source: "1989-nielsen-maxillary-superimposition-three-methods"
  },
  {
    id: "1989-nielsen-maxillary-superimposition-three-methods-7",
    front: "Nielsen 1989: how much growth in maxillary length did best fit miss (Table I, PNS horizontal)?",
    back: "PNS moved 2.34 mm posteriorly with implants versus 1.18 mm with best fit, so best fit underestimated maxillary growth in length (sutural growth plus tuberosity apposition) by about 50 %.",
    topic: "Diagnosis & Cephalometrics",
    tags: ["superimposition", "maxilla", "growth", "implants"],
    source: "1989-nielsen-maxillary-superimposition-three-methods"
  },
  {
    id: "1989-nielsen-maxillary-superimposition-three-methods-8",
    front: "Nielsen 1989: how did the structural (Björk–Skieller) method compare with implants?",
    back: "Vertical differences not significant (implant minus structural −0.33 to −0.04 mm skeletal, −0.29 to −0.20 mm dental); horizontal differences small but systematic, 0.41–0.66 mm (P < .01 skeletal, P < .001 dental; A point 0.41 not significant).",
    topic: "Diagnosis & Cephalometrics",
    tags: ["superimposition", "maxilla", "implants", "cephalometrics"],
    source: "1989-nielsen-maxillary-superimposition-three-methods"
  },
  {
    id: "1989-nielsen-maxillary-superimposition-three-methods-9",
    front: "Nielsen 1989: how reproducible was the structural method between two observers?",
    back: "Significant interobserver differences only in the vertical plane at ANS (0.88 mm), A point (0.77 mm) and the upper incisor (edge 0.86, apex 0.52 mm); none horizontally; variability attributed mainly to landmark location, not the method.",
    topic: "Diagnosis & Cephalometrics",
    tags: ["superimposition", "maxilla", "cephalometrics", "study design"],
    source: "1989-nielsen-maxillary-superimposition-three-methods"
  },
  {
    id: "1989-nielsen-maxillary-superimposition-three-methods-10",
    front: "Nielsen 1989: what was the conclusion, and why were PTM and infratemporal-fossa registrations rejected?",
    back: "The structural (Björk–Skieller) method is valid and reliable; best fit at ANS underestimates vertical change; PTM and infratemporal-fossa registrations also err because the maxilla lengthens at PNS and the posterior zygomatic surface is appositional.",
    topic: "Diagnosis & Cephalometrics",
    tags: ["superimposition", "maxilla", "growth", "cephalometrics"],
    source: "1989-nielsen-maxillary-superimposition-three-methods"
  },
  {
    id: "1989-nielsen-maxillary-superimposition-three-methods-11",
    front: "Nielsen 1989: name a key limitation of the study.",
    back: "Only 18 of 35 implant subjects were usable, chosen on film quality (clear zygomatic process, matched double contours); treated and untreated pooled without counts; no method error reported despite double determinations.",
    topic: "Diagnosis & Cephalometrics",
    tags: ["superimposition", "study design", "implants", "cephalometrics"],
    source: "1989-nielsen-maxillary-superimposition-three-methods"
  },
  {
    id: "2018-nguyen-3d-mandibular-regional-superimposition-1",
    front: "Nguyen 2018: what served as the reference standard for testing regional stability, and in whom?",
    back: "Bone plates and screws placed around the lower incisor apices (between lateral incisor and canine) for Class III bone-anchor treatment in 20 patients (T1 12.1 ± 1.3 y, T2 13.3 ± 1.1 y), used as regional implants.",
    topic: "Diagnosis & Cephalometrics",
    tags: ["superimposition", "mandible", "3d", "cbct", "implants", "study design"],
    source: "2018-nguyen-3d-mandibular-regional-superimposition"
  },
  {
    id: "2018-nguyen-3d-mandibular-regional-superimposition-2",
    front: "Nguyen 2018: what imaging and registration method was used?",
    back: "CBCT (i-CAT or NewTom 3G, 0.3 mm voxels, same machine at T1 and T2); voxel-based registration in Slicer CMF after rough manual approximation; segmentation by thresholding, refined in ITK-SNAP; error = absolute mean surface distance between T1 and T2 models.",
    topic: "Diagnosis & Cephalometrics",
    tags: ["superimposition", "3d", "cbct", "mandible"],
    source: "2018-nguyen-3d-mandibular-regional-superimposition"
  },
  {
    id: "2018-nguyen-3d-mandibular-regional-superimposition-3",
    front: "Nguyen 2018: what were the registration errors of the three candidate regions after plate registration (Table)?",
    back: "Anterior chin 0.37 ± 0.16 mm (P = .765); internal symphysis 0.40 ± 0.14 mm (P = .698; text prints SD 0.15); third-molar crypt contour 1.94 ± 0.06 mm (P = .0025, significant) (Table).",
    topic: "Diagnosis & Cephalometrics",
    tags: ["superimposition", "mandible", "3d", "cbct", "growth"],
    source: "2018-nguyen-3d-mandibular-regional-superimposition"
  },
  {
    id: "2018-nguyen-3d-mandibular-regional-superimposition-4",
    front: "Nguyen 2018: which mandibular regions were concluded to be stable and reliable for 3D regional superimposition in growing patients?",
    back: "Anterior chin (pogonion to B point) plus the internal cortical bone of the lingual symphysis (inferior border to the level of the mental foramina); near-identical errors, so the two were merged into one registration region.",
    topic: "Diagnosis & Cephalometrics",
    tags: ["superimposition", "mandible", "3d", "cbct", "growth"],
    source: "2018-nguyen-3d-mandibular-regional-superimposition"
  },
  {
    id: "2018-nguyen-3d-mandibular-regional-superimposition-5",
    front: "Nguyen 2018: which of Björk's 2D mandibular reference structures were rejected for 3D voxel registration, and why?",
    back: "The third-molar crypt (largest error of the three regions; Ruellas 2016: 16 of 18 registrations failed when crypts were included) and the mandibular canal (excluded a priori because it changes with growth, Krarup 2005).",
    topic: "Diagnosis & Cephalometrics",
    tags: ["superimposition", "mandible", "3d", "growth"],
    source: "2018-nguyen-3d-mandibular-regional-superimposition"
  },
  {
    id: "2018-nguyen-3d-mandibular-regional-superimposition-6",
    front: "Nguyen 2018: who were the 25 subjects in the reproducibility sample, and what did the observers do?",
    back: "10 Class II Herbst, 10 Class II elastics, 5 Class III bone-anchor patients; mean age 12.7 ± 1.4 y; CVM stages 2–5; T1–T2 interval 12.6 ± 0.9 months; two observers independently registered T2 to T1 on chin + symphysis.",
    topic: "Diagnosis & Cephalometrics",
    tags: ["superimposition", "mandible", "3d", "cbct", "study design"],
    source: "2018-nguyen-3d-mandibular-regional-superimposition"
  },
  {
    id: "2018-nguyen-3d-mandibular-regional-superimposition-7",
    front: "Nguyen 2018: how reproducible was chin + symphysis registration between two observers?",
    back: "Absolute mean interobserver error 0.12 ± 0.11 mm (Results; the abstract misprints ± 1.1), below the 0.3 mm voxel size; ICC 0.998 (95 % CI 0.995–1.000).",
    topic: "Diagnosis & Cephalometrics",
    tags: ["superimposition", "mandible", "3d", "cbct"],
    source: "2018-nguyen-3d-mandibular-regional-superimposition"
  },
  {
    id: "2018-nguyen-3d-mandibular-regional-superimposition-8",
    front: "Nguyen 2018 (Figs 7–8): for the illustrated subject, how large was the interexaminer difference across the mandibular surface?",
    back: "Less than 0.25 mm over the entire mandibular surface, and within 0.12 mm for 75 % of the surface (one subject's colour map, not a group statistic).",
    topic: "Diagnosis & Cephalometrics",
    tags: ["superimposition", "mandible", "3d", "cbct"],
    source: "2018-nguyen-3d-mandibular-regional-superimposition"
  },
  {
    id: "2018-nguyen-3d-mandibular-regional-superimposition-9",
    front: "Nguyen 2018: what remodelling pattern was seen on the registered models, and does it agree with Björk?",
    back: "Chin contour at pogonion stable, deposition at the inferior symphysis (about 2 mm near menton, Fig 4) and resorption posteroinferiorly, as Björk described; ramus resorbed anteriorly and deposited posteriorly (Fig 6), as Enlow & Harris described.",
    topic: "Diagnosis & Cephalometrics",
    tags: ["superimposition", "mandible", "growth", "3d"],
    source: "2018-nguyen-3d-mandibular-regional-superimposition"
  },
  {
    id: "2018-nguyen-3d-mandibular-regional-superimposition-10",
    front: "Nguyen 2018: name a key limitation of the stability (aim 1) evidence.",
    back: "Plates judged immobile clinically only; they lie near the chin and symphysis but far from the third-molar crypts (a proximity argument the authors raise and rebut); all 20 were Class III bone-anchor patients in active treatment.",
    topic: "Diagnosis & Cephalometrics",
    tags: ["superimposition", "mandible", "3d", "implants", "study design"],
    source: "2018-nguyen-3d-mandibular-regional-superimposition"
  },
  {
    id: "2004-kokich-impacted-maxillary-canines-1",
    front: "Kokich 2004 (AJO-DO): maxillary canines are the most commonly impacted permanent teeth after third molars. What share of impacted maxillary canines are labial or intra-alveolar versus palatal?",
    back: "About one third labial or within the alveolus, two thirds palatal (p.278, citing Johnston 1969). Palatal to labial is roughly 2:1 (derived).",
    topic: "Treatment Planning",
    tags: ["impacted canine", "prevalence", "palatal impaction", "labial impaction"],
    source: "2004-kokich-impacted-maxillary-canines"
  },
  {
    id: "2004-kokich-impacted-maxillary-canines-2",
    front: "Williams 1981 (cited in Kokich 2004): from what age can extracting the maxillary deciduous canine help a labial or intra-alveolar canine impaction self-correct?",
    back: "As early as 8 or 9 years of age, to enhance eruption and self-correction (p.278). If this and orthodontic space opening (Olive) fail, the canine is uncovered surgically.",
    topic: "Treatment Planning",
    tags: ["impacted canine", "labial impaction", "deciduous canine extraction", "interceptive treatment"],
    source: "2004-kokich-impacted-maxillary-canines"
  },
  {
    id: "2004-kokich-impacted-maxillary-canines-3",
    front: "Kokich 2004: to choose between excisional uncovering, an apically positioned flap and closed eruption for a labial or intra-alveolar maxillary canine, which 4 criteria are assessed?",
    back: "1. Labiolingual position of the crown. 2. Vertical position relative to the mucogingival junction. 3. Amount of gingiva in the area. 4. Mesiodistal position of the crown (pp.278-279).",
    topic: "Treatment Planning",
    tags: ["impacted canine", "labial impaction", "uncovering technique", "decision criteria"],
    source: "2004-kokich-impacted-maxillary-canines"
  },
  {
    id: "2004-kokich-impacted-maxillary-canines-4",
    front: "Kokich 2004, criterion 1: how does the labiolingual position of an impacted maxillary canine crown affect the choice of uncovering technique?",
    back: "Labial crown: any of the 3 techniques, since little if any bone covers it. Crown in the centre of the alveolus: excision and apically positioned flap are harder, as extensive labial bone may need removal (p.278).",
    topic: "Treatment Planning",
    tags: ["impacted canine", "intra-alveolar impaction", "uncovering technique", "closed eruption"],
    source: "2004-kokich-impacted-maxillary-canines"
  },
  {
    id: "2004-kokich-impacted-maxillary-canines-5",
    front: "Kokich 2004, criterion 2: how does the canine crown's vertical position relative to the mucogingival junction (MGJ) guide uncovering?",
    back: "Mostly coronal to the MGJ: any of the 3 techniques. Apical to the MGJ: excision is inappropriate (no gingiva left labially). Significantly apical: apically positioned flap is also inappropriate (instability, reintrusion), so use closed eruption (pp.278-279).",
    topic: "Treatment Planning",
    tags: ["impacted canine", "mucogingival junction", "closed eruption", "apically positioned flap", "excisional uncovering"],
    source: "2004-kokich-impacted-maxillary-canines"
  },
  {
    id: "2004-kokich-impacted-maxillary-canines-6",
    front: "Kokich 2004, criterion 3: how much gingiva makes any uncovering technique acceptable, and which technique is needed when gingiva is insufficient?",
    back: "Enough to leave at least 2 to 3 mm of attached gingiva over the canine crown after eruption: any of the 3 techniques. Insufficient gingiva: apically positioned flap, the only technique that predictably produces more gingiva (p.279).",
    topic: "Treatment Planning",
    tags: ["impacted canine", "attached gingiva", "apically positioned flap", "uncovering technique"],
    source: "2004-kokich-impacted-maxillary-canines"
  },
  {
    id: "2004-kokich-impacted-maxillary-canines-7",
    front: "Kokich 2004, criterion 4: which uncovering technique for a labial canine whose crown lies mesially over the lateral incisor root, and how is it then moved?",
    back: "Apically positioned flap for complete exposure; closed eruption or excision generally not recommended. An elastomeric chain directed to the centre of the edentulous ridge guides the crown into the arch (p.279; Fig 2).",
    topic: "Treatment Planning",
    tags: ["impacted canine", "apically positioned flap", "mesiodistal position", "elastomeric chain"],
    source: "2004-kokich-impacted-maxillary-canines"
  },
  {
    id: "2004-kokich-impacted-maxillary-canines-8",
    front: "Kokich 2004: after closed-eruption uncovering of a labial canine, in which direction should it be erupted, and with what appliance?",
    back: "Into the centre of the alveolar ridge with a vertical force, e.g. a ballista loop. Pulling the tooth labially risks a bony dehiscence, faster migration of the labial gingival margin and recession (p.279; Fig 4).",
    topic: "Treatment Planning",
    tags: ["impacted canine", "closed eruption", "ballista loop", "gingival recession", "orthodontic mechanics"],
    source: "2004-kokich-impacted-maxillary-canines"
  },
  {
    id: "2004-kokich-impacted-maxillary-canines-9",
    front: "Vermette et al 1995 (cited in Kokich 2004): how did closed eruption and the apically positioned flap compare for labially impacted teeth?",
    back: "No significant differences in gingival index, plaque index, pocket depth or bone level, but significant esthetic differences: apically positioned flap crowns were longer than normal; closed-eruption crowns matched contralateral teeth (p.279; no values reported).",
    topic: "Treatment Planning",
    tags: ["impacted canine", "closed eruption", "apically positioned flap", "periodontal outcome", "esthetics"],
    source: "2004-kokich-impacted-maxillary-canines"
  },
  {
    id: "2004-kokich-impacted-maxillary-canines-10",
    front: "Kokich 2004: why do high labial canine impactions uncovered with an apically positioned flap tend to reintrude after treatment?",
    back: "The flap heals to the mucosa next to the tooth; erupting the tooth draws that mucosa coronally, and after treatment the mucosal attachment pulls the crown apically. Not seen with closed eruption (pp.279-281).",
    topic: "Treatment Planning",
    tags: ["impacted canine", "apically positioned flap", "reintrusion", "relapse"],
    source: "2004-kokich-impacted-maxillary-canines"
  },
  {
    id: "2004-kokich-impacted-maxillary-canines-11",
    front: "Kokich 2004: how does the buccal object (SLOB) rule locate an impacted canine crown?",
    back: "Take 2 adjacent periapical radiographs at slightly different horizontal angles. A buccal crown moves opposite to the x-ray beam shift; a palatal crown moves the same way: Same Lingual, Opposite Buccal (p.281, citing Richards).",
    topic: "Treatment Planning",
    tags: ["impacted canine", "buccal object rule", "slob", "radiographic localisation"],
    source: "2004-kokich-impacted-maxillary-canines"
  },
  {
    id: "2004-kokich-impacted-maxillary-canines-12",
    front: "Ericson & Kurol 1988 (cited in Kokich 2004): when does extracting the deciduous canine let a palatally displaced maxillary canine self-correct?",
    back: "When the permanent canine crown overlaps the lateral incisor root but not past its mesial surface: self-correction with high predictability. Well beyond the mesial surface: no self-correction; surgical uncovering needed (pp.281-282; no percentage given).",
    topic: "Treatment Planning",
    tags: ["impacted canine", "palatal impaction", "deciduous canine extraction", "interceptive treatment"],
    source: "2004-kokich-impacted-maxillary-canines"
  },
  {
    id: "2004-kokich-impacted-maxillary-canines-13",
    front: "Kokich 2004: when is a palatally impacted canine uncovered conventionally, and when in Kokich & Mathews' early approach?",
    back: "Conventional: after the first 6 to 9 months of maxillary alignment, once space is made, then dragged toward the edentulous site (p.282). Early: before orthodontic treatment, sometimes in the late mixed dentition (p.283).",
    topic: "Treatment Planning",
    tags: ["impacted canine", "palatal impaction", "timing", "early uncovering"],
    source: "2004-kokich-impacted-maxillary-canines"
  },
  {
    id: "2004-kokich-impacted-maxillary-canines-14",
    front: "Kokich 2004: why may a conventionally uncovered palatal canine appear not to move, mimicking ankylosis?",
    back: "Too little bone removed over the crown. Enamel has no cells to resorb bone, so bone in contact with the crown resorbs only slowly by pressure necrosis. Ankylosis incidence of maxillary canines is low (p.282).",
    topic: "Treatment Planning",
    tags: ["impacted canine", "palatal impaction", "ankylosis", "bone removal", "pressure necrosis"],
    source: "2004-kokich-impacted-maxillary-canines"
  },
  {
    id: "2004-kokich-impacted-maxillary-canines-15",
    front: "Woloshyn et al 1994 (cited in Kokich 2004): what happened in 32 patients whose palatal canines were conventionally uncovered and dragged across the lateral incisor roots?",
    back: "Versus contralateral controls: bone levels more apical on the distal of the lateral incisor and mesial of the canine; root resorption of lateral incisor and canine was typical; judges could identify the previously impacted canine (p.283).",
    topic: "Treatment Planning",
    tags: ["impacted canine", "palatal impaction", "root resorption", "bone level", "periodontal outcome"],
    source: "2004-kokich-impacted-maxillary-canines"
  },
  {
    id: "2004-kokich-impacted-maxillary-canines-16",
    front: "Kokich & Mathews' early uncovering of a palatal canine (Kokich 2004): what are the surgical steps?",
    back: "Full-thickness mucoperiosteal flap; all bone over the crown removed down to the cementoenamel junction; flap repositioned with a hole cut over the crown; a dressing occasionally if the canine is high in the palate (p.283; Fig 5).",
    topic: "Treatment Planning",
    tags: ["impacted canine", "palatal impaction", "early uncovering", "surgical technique"],
    source: "2004-kokich-impacted-maxillary-canines"
  },
  {
    id: "2004-kokich-impacted-maxillary-canines-17",
    front: "After early uncovering (bone removed to the CEJ), how long until a palatal canine erupts on its own to the occlusal plane, and what happens next (Kokich 2004)?",
    back: "About 6 to 8 months, without orthodontic force. Then a bracket is placed and the root is moved through bone as the crown is translated into the arch (p.283; Fig 5E-G).",
    topic: "Treatment Planning",
    tags: ["impacted canine", "palatal impaction", "autonomous eruption", "early uncovering"],
    source: "2004-kokich-impacted-maxillary-canines"
  },
  {
    id: "2004-kokich-impacted-maxillary-canines-18",
    front: "What evidence does Kokich 2004 give that early palatal uncovering beats conventional uncovering, and how strong is it?",
    back: "Schmidt 2004, an unpublished University of Washington thesis: improved bone and attachment levels on canine and lateral incisor, little to no lateral incisor root resorption. No n or values given; shorter treatment time is stated without data (p.283).",
    topic: "Treatment Planning",
    tags: ["impacted canine", "early uncovering", "level of evidence", "expert opinion"],
    source: "2004-kokich-impacted-maxillary-canines"
  },
  {
    id: "2005-stephens-long-term-profile-extraction-nonextraction-1",
    front: "Stephens 2005: what sample was studied?",
    back: "40 white Class I and Class II patients treated by one orthodontist in one private practice: 20 four-premolar extraction and 20 nonextraction, each group 6 males and 14 females (Table I).",
    topic: "Treatment Planning",
    tags: ["extraction", "nonextraction", "study design", "sample"],
    source: "2005-stephens-long-term-profile-extraction-nonextraction"
  },
  {
    id: "2005-stephens-long-term-profile-extraction-nonextraction-2",
    front: "Stephens 2005: on what were the extraction and nonextraction groups matched?",
    back: "Age, sex and three posttreatment ceph values: U1-SN and L1-NB (dental protrusion) and Holdaway's H-line (lip protrusion independent of nose length). Extraction cases were selected first, with values in the normal range.",
    topic: "Treatment Planning",
    tags: ["matching", "study design", "h-line", "incisor position"],
    source: "2005-stephens-long-term-profile-extraction-nonextraction"
  },
  {
    id: "2005-stephens-long-term-profile-extraction-nonextraction-3",
    front: "Stephens 2005: ages at the posttreatment and long-term records, and length of follow-up?",
    back: "Group mean ages 14.8–15.6 y at posttreatment and 28.9–30.3 y at long-term follow-up; mean interval 14.1–15.0 y, average 15 years (Table I). Profiles were followed from about 15 to 30 years of age.",
    topic: "Treatment Planning",
    tags: ["long-term follow-up", "age", "study design"],
    source: "2005-stephens-long-term-profile-extraction-nonextraction"
  },
  {
    id: "2005-stephens-long-term-profile-extraction-nonextraction-4",
    front: "Stephens 2005: did extraction vs nonextraction treatment affect long-term soft-tissue profile change?",
    back: "No. No group difference at posttreatment, at long-term follow-up or in change for any of the 9 measures (Table III). If finished to the same incisor position and lip line, treatment modality does not affect long-term profile change.",
    topic: "Treatment Planning",
    tags: ["extraction", "nonextraction", "soft tissue profile", "long-term follow-up"],
    source: "2005-stephens-long-term-profile-extraction-nonextraction"
  },
  {
    id: "2005-stephens-long-term-profile-extraction-nonextraction-5",
    front: "Stephens 2005: how did the soft-tissue facial convexity angle N'-Sn-Pg' change over 15 years, and what does that mean?",
    back: "It increased: extraction +4.0 ± 3.5°, nonextraction +2.9 ± 3.7° (both P < .05; between groups P = .33; Table III). Larger angle = less convex, flatter profile. Caveat: the Results text calls this an \"increase in facial convexity\".",
    topic: "Treatment Planning",
    tags: ["facial convexity", "soft tissue profile", "extraction", "cephalometrics"],
    source: "2005-stephens-long-term-profile-extraction-nonextraction"
  },
  {
    id: "2005-stephens-long-term-profile-extraction-nonextraction-6",
    front: "Stephens 2005: long-term change in upper and lower lip to Ricketts' E-line, extraction vs nonextraction?",
    back: "Upper lip (LS-E) −1.5 ± 1.5 mm extraction vs −1.6 ± 2.5 mm nonextraction (P = .82); lower lip (LI-E) −1.3 ± 1.5 vs −1.6 ± 2.2 mm (P = .66). All significant within groups: lips more retrusive (Table III).",
    topic: "Treatment Planning",
    tags: ["e-line", "lip retrusion", "extraction", "long-term follow-up"],
    source: "2005-stephens-long-term-profile-extraction-nonextraction"
  },
  {
    id: "2005-stephens-long-term-profile-extraction-nonextraction-7",
    front: "Stephens 2005: long-term change in upper and lower lip to Steiner's S-line, extraction vs nonextraction?",
    back: "Upper lip (LS-S) −1.0 ± 1.4 mm extraction vs −1.2 ± 2.0 mm nonextraction (P = .70); lower lip (LI-S) −0.9 ± 1.4 vs −1.2 ± 1.8 mm (P = .56). All four within-group changes significant (Table III).",
    topic: "Treatment Planning",
    tags: ["s-line", "lip retrusion", "extraction", "long-term follow-up"],
    source: "2005-stephens-long-term-profile-extraction-nonextraction"
  },
  {
    id: "2005-stephens-long-term-profile-extraction-nonextraction-8",
    front: "Stephens 2005: which 5 of the 9 cephalometric measures changed significantly from posttreatment to long-term follow-up?",
    back: "N'-Sn-Pg' (soft-tissue facial convexity) and the four lip measures to the E- and S-lines. Total facial convexity (N'-Pn-Pg'), H-line, U1-SN and L1-NB did not change significantly in either group (Table III).",
    topic: "Treatment Planning",
    tags: ["cephalometrics", "soft tissue profile", "long-term follow-up"],
    source: "2005-stephens-long-term-profile-extraction-nonextraction"
  },
  {
    id: "2005-stephens-long-term-profile-extraction-nonextraction-9",
    front: "Stephens 2005: why do the authors attribute the long-term lip retrusion to nose and chin growth?",
    back: "Lip fullness on the H-line (to superior labial sulcus) did not change (extraction +0.1 mm, nonextraction −0.4 mm, NS; Table III), so lip retrusion relative to the E- and S-lines was ascribed mainly to nose and chin growth (Conclusion 2).",
    topic: "Treatment Planning",
    tags: ["h-line", "nose growth", "chin growth", "lip retrusion"],
    source: "2005-stephens-long-term-profile-extraction-nonextraction"
  },
  {
    id: "2005-stephens-long-term-profile-extraction-nonextraction-10",
    front: "Stephens 2005: sex difference in long-term lip change to the E-line?",
    back: "Males' lips retruded more: upper lip LS-E −3.2 ± 2.1 mm vs females −0.9 ± 1.5 mm (P < .01); lower lip LI-E −3.0 ± 1.7 vs −0.8 ± 1.5 mm (P < .01) (Table IV).",
    topic: "Treatment Planning",
    tags: ["sex differences", "e-line", "lip retrusion", "growth"],
    source: "2005-stephens-long-term-profile-extraction-nonextraction"
  },
  {
    id: "2005-stephens-long-term-profile-extraction-nonextraction-11",
    front: "Stephens 2005: sex difference in the N'-Sn-Pg' angle change and long-term value?",
    back: "Change +5.5 ± 3.6° in males vs +2.6 ± 3.3° in females (P = .02); long-term angle 169.8° vs 165.8° (P = .02), so male profiles became straighter. Posttreatment values did not differ (P = .48; Table IV).",
    topic: "Treatment Planning",
    tags: ["sex differences", "facial convexity", "soft tissue profile"],
    source: "2005-stephens-long-term-profile-extraction-nonextraction"
  },
  {
    id: "2005-stephens-long-term-profile-extraction-nonextraction-12",
    front: "Stephens 2005: how far did the soft-tissue nose and chin move forward in males vs females?",
    back: "Pn-h (nose forward) 6.7 ± 4.8 vs 3.1 ± 3.3 mm; Pg'-h (chin forward) 7.9 ± 4.2 vs 4.0 ± 3.9 mm (both P = .01; Table V). Authors: males at ~15 y are ~1 y past peak velocity.",
    topic: "Treatment Planning",
    tags: ["sex differences", "nose growth", "chin growth", "growth"],
    source: "2005-stephens-long-term-profile-extraction-nonextraction"
  },
  {
    id: "2005-stephens-long-term-profile-extraction-nonextraction-13",
    front: "Stephens 2005: who rated the profile photos and how was perceived change scored?",
    back: "105 orthodontists and 225 laypeople (115 laywomen, 110 laymen) compared each patient's posttreatment and long-term profile photos; perceived change = mark on a 106-mm visual analog scale ÷ 106. Each of 2 survey versions showed 20 patients.",
    topic: "Treatment Planning",
    tags: ["profile perception", "visual analog scale", "laypeople", "study design"],
    source: "2005-stephens-long-term-profile-extraction-nonextraction"
  },
  {
    id: "2005-stephens-long-term-profile-extraction-nonextraction-14",
    front: "Stephens 2005: how much profile change did raters perceive, and did it differ by treatment?",
    back: "33.9–39.2% of the scale, small to moderate (all P < .01; Table VI). No extraction vs nonextraction difference (combined 36.5% vs 36.3%, P = .95), and no significant difference by patient sex or rater group.",
    topic: "Treatment Planning",
    tags: ["profile perception", "extraction", "laypeople", "orthodontists"],
    source: "2005-stephens-long-term-profile-extraction-nonextraction"
  },
  {
    id: "2005-stephens-long-term-profile-extraction-nonextraction-15",
    front: "Stephens 2005: how closely did orthodontists and laypeople agree on the amount of change perceived?",
    back: "r = 0.89 (P < .001) between the amount of change perceived by orthodontists and by laypeople; the authors call it a moderately high positive correlation.",
    topic: "Treatment Planning",
    tags: ["profile perception", "laypeople", "orthodontists", "correlation"],
    source: "2005-stephens-long-term-profile-extraction-nonextraction"
  },
  {
    id: "2005-stephens-long-term-profile-extraction-nonextraction-16",
    front: "Stephens 2005: did perceived profile change relate to cephalometric change?",
    back: "Essentially no: only 1 of 18 correlations was significant, total facial convexity N'-Pn-Pg' with orthodontists' perceived change (r = 0.34, P = .03). Patients perceived to change most were not those with the largest ceph changes.",
    topic: "Treatment Planning",
    tags: ["profile perception", "cephalometrics", "correlation", "facial convexity"],
    source: "2005-stephens-long-term-profile-extraction-nonextraction"
  },
  {
    id: "2005-stephens-long-term-profile-extraction-nonextraction-17",
    front: "Stephens 2005: did raters prefer the posttreatment or the 15-year profile photo?",
    back: "No overall pattern: about 30% each preferred posttreatment, long-term or neither (text; Table VII cells 26.5–42.3%), with no significant difference by treatment, sex or rater group. Individual patients drew clear but case-specific preferences.",
    topic: "Treatment Planning",
    tags: ["profile preference", "profile perception", "extraction", "laypeople"],
    source: "2005-stephens-long-term-profile-extraction-nonextraction"
  },
  {
    id: "2005-stephens-long-term-profile-extraction-nonextraction-18",
    front: "Stephens 2005: design, power and level of evidence?",
    back: "Retrospective matched cohort (one practice, 20 per arm) plus a cross-sectional photo survey; no untreated controls, no sample-size calculation. 80% power only for d ≥ 0.91 (derived), so no difference ≠ equivalence. Appraised as Oxford CEBM level 3.",
    topic: "Treatment Planning",
    tags: ["critical appraisal", "study design", "power", "level of evidence"],
    source: "2005-stephens-long-term-profile-extraction-nonextraction"
  },
];
