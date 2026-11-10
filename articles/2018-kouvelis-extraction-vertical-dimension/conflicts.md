# Conflicts and disagreements — Kouvelis 2018

Use this file when you need to challenge a number, a claim or a citation in Kouvelis G, Dritsas K, Doulis I, Kloukos D, Gkantidis N. Effect of orthodontic treatment with 4 premolar extractions compared with nonextraction treatment on the vertical dimension of the face: a systematic review. *Am J Orthod Dentofacial Orthop* 2018;154(2):175-87 (doi:10.1016/j.ajodo.2018.03.007).

How this file is organised:

- **A** is the paper against itself: abstract vs Results text vs tables vs Discussion.
- **B** is the paper against other studies (including the included studies' own abstracts) and the hub registry.
- **C** is the paper against Proffit, with the past-exam questions that touch the same point.
- **D** lists what stays open.
- **E** is the one-paragraph verdict.

Where the numbers come from:

- **Pages** are journal pages:
  - abstract p 175; Methods pp 176-177; flow chart (the "Figure") p 177
  - Results p 178 and p 181; Table I pp 179-181; Table II (ROBINS-I) p 182; Table III pp 183-184
  - Discussion pp 181 and 184-185; Limitations and Conclusions p 185; MEDLINE strategy (Appendix) p 187
- **Table values** were all read on the page images. The text layer prints "+" as "1" and "±" as "6" (so "11.5 mm" means +1.5 mm), and it was not used for numbers.
- **Recomputations** are mine and are labelled "derived": P values, mean differences (MD, always extraction minus nonextraction), Cohen's d, minimum detectable differences and exploratory pooled estimates. They were run from the Table I group sizes and the Table III means and SDs with `checks.py` (the script filed with this article). The review itself pooled nothing.
- **Other papers** carry VERIFIED (seen this run, usually the PubMed abstract) or UNVERIFIED.
- **Proffit** points are from the 7th-edition text searched this run (printed page numbers; V = VERIFIED there). Chapters 1-17 carry the same numbers in the 6th edition; 7th-edition Ch 22 is 6th-edition Ch 20.

**Conventions you need first:**

- **Table III** reports T1 − T0 change (end of active treatment minus start). A positive angle change means the mandibular plane steepened (opening, backward rotation); a negative one means it flattened (closing, forward rotation).
- **"Expected direction"** (the wedge hypothesis): the extraction group closes more, or opens less, than the nonextraction group, so MD < 0 for an angle or a face height.
- **The wedge effect** as the paper defines it (p 175, p 184): mesial movement of the posterior teeth during space closure lets the mandible rotate forward (counterclockwise) and reduces face height.

## A. Internal inconsistencies (the paper vs itself)

Severity scale:

- **High:** changes what a reader takes from the paper.
- **Moderate:** a number, direction or claim a consultant could challenge.
- **Low:** a reporting slip.
- **Trivial:** cosmetic.

| # | Where A says | Where B says | Likely truth | Severity | Why it matters |
|---|---|---|---|---|---|
| A1 | Results p 178 (normodivergent): Paquette found a significant mandibular-plane decrease of "1.7°" in the nonextraction group compared with extraction | Table III p 184: FMA +0.3 (Ex) vs −2.0° (Nonex), P < .010, and the effect column says 2.3°. Discussion p 181: a "2°" decrease in FMA in the nonextraction group | **2.3° between groups** (+0.3 − (−2.0), derived). The 2° is the nonextraction within-group change. The 1.7° matches Porto's SN-GoGn difference, reported later on the same page (hyperdivergent Class II paragraph) | Moderate | Three numbers for one result; an easy exam trap. Say "Paquette: FMA +0.3 vs −2.0°, a 2.3° difference favouring nonextraction" |
| A2 | Abstract p 175 and Table III p 184: Kumari & Fida is one of the two studies with a significant nonextraction increase, N-Me +1.5 vs +5.5 mm, P < .05. Discussion p 185 calls this 4 mm increase "clinically significant" | Table II p 182, same study: selection of the reported result rated Serious because "only posttreatment values compared". Kumari's own abstract (VERIFIED, PubMed 20141687): a "cross-sectional comparative study" with independent t tests for pre- and posttreatment comparisons between groups, and **no significant difference in vertical changes** between groups | The P < .05 probably belongs to a posttreatment (or other) comparison, not to the change scores printed beside it. Kumari's full text was not seen, so this stays UNVERIFIED | Moderate | One of the abstract's two "pro-extraction" headline results may not be a between-group test of change at all. If so, the evidence for the wedge is weaker than the abstract shows, which strengthens the review's conclusion |
| A3 | Results p 178: three studies (refs 15, 18, 21) included "mainly nongrowing" participants, and "most studies included growing patients" | Discussion p 185: the same three included "only nongrowing" patients, and most studies included "both growing and nongrowing" patients. Table I mean ages: Kumari 15.4 ± 1.2 / 15.8 ± 1.5 y (sex not reported), Hosseinzadeh-Nik 16.4 ± 0.4 y (both groups, all female), Sivakumar 17.2 ± 3.9 / 18.5 ± 3.6 y | "Mainly" is the defensible word. Proffit Ch 4 p 97 (V) says facial growth does not end in the late teens, and Ch 14 p 508 (V) puts long-face vertical growth into the late teens or early 20s. A 15-year-old sample of unknown sex is unlikely to be nongrowing | Moderate | The conclusion "regardless of age" (A5) leans on this group. The same pattern appears in a hub paper (B6, Khaleel) |
| A4 | Discussion p 185: studies controlled sex by including only females, refs 13, 22, 24 (three studies) | Table I: four female-only studies: Kirschneck (25 F / 25 F), Bravo (16 F / 15 F), Katsaros (33 F / 29 F) **and Hosseinzadeh-Nik (18 F / 18 F)** | Four | Low | Counting |
| A5 | Discussion p 185: no influence on the skeletal vertical dimension "regardless of age, sex, malocclusion type, or vertical growth pattern" | Methods p 177: sex distribution was "ignored". Results p 178: no study reported growing and nongrowing patients separately, and no subgroup analysis by age or sex was done. Class III appears only inside Kirschneck's mixed sample, not reported separately (p 185), and Kirschneck's own abstract describes 6-9 mm overjet cases (B1). No extraction group was hypodivergent (p 185). The steepest sample's mean baseline SN-GoGn is 40.0° (Porto, Table I) | The data support "no difference detected in mostly adolescent Class I and II samples, normodivergent or moderately hyperdivergent". They cannot support "regardless of" four factors that were never analysed as factors | Moderate | Limits who the result can be applied to (`critical-appraisal.md`, external validity) |
| A6 | Discussion p 181: "No study clearly confirmed" the expected effect, and the conclusions of refs 17 and 18 were "not supported by their data". The review "clearly demonstrates" no evidence for the belief | Table III p 184: Porto (ref 17) SN-GoGn −0.9 ± 2.4 vs +0.8 ± 2.3°, P = .020, in the expected direction. Sivakumar (ref 18) N-Me +2.3 ± 3.0 vs +0.9 ± 2.1 mm, P = .033, in the opposite direction. Discussion p 185: Kumari's 4 mm N-Me difference, also in the expected direction, is called "clinically significant" | Each of these studies found one significant difference that a second vertical measure in the same study did not confirm (Porto FMA P = .240; Sivakumar FMA and ANS-Me not significant; Kumari FMA and ratio P > .050). Discounting them is a defensible judgement, but it is a judgement, not something the data "clearly" show | Moderate | Two of the four significant results in Table III point toward the wedge idea (Porto; Kumari, if A2 is set aside) and two point against it (Paquette, Sivakumar). The honest summary is "split and small", not "none" |
| A7 | Discussion pp 181/184: apart from Paquette, no study showed a within-group angular change above 1.2°, so the changes "cannot be considered" clinically significant | The quantity that answers the question is the between-group difference. Porto 1.7°, Hayasaki Class I 1.6° (P = .071) and Paquette 2.3° all exceed 1.2° (derived, Table III), because the two groups moved in opposite directions | The clinical-significance argument should be made on the between-group difference and its CI | Low-Moderate | The argument is correct in spirit (every between-group difference is 2.3° or less) but uses the wrong yardstick |
| A8 | Results p 178: clinical heterogeneity was high, so "no quantitative synthesis was possible" | Table III: 12 comparisons report a mandibular-plane-angle change (SN-GoGn, FMA, SN-GoMe or MP-HP) with SDs. Pooled, fixed effect (derived): **−0.32° (95% CI −0.68 to 0.04), I² 0%**. Sensitivity sets (derived): without the 3 critical-risk comparisons −0.52° (−0.97 to −0.08); moderate-risk studies only −0.60° (−1.17 to −0.04); hyperdivergent samples only −0.60° (−1.14 to −0.06); normodivergent only −0.20° (−0.81 to 0.41) | Pooling the mandibular-plane angle was feasible, with the caveat that the reference lines differ. It supports "no clinically meaningful effect" more firmly than vote counting does. In the better-rated and hyperdivergent subsets it also shows a possible effect of about half a degree in the wedge direction. That effect is smaller than the baseline imbalances in those studies (the extraction group started 1.6-4.6° steeper in 5 of the 6 hyperdivergent comparisons, Table I, derived) and far below any clinical threshold | Moderate | The defensible conclusion is "any skeletal effect is under about 1°", not "no effect at all". Vote counting hid both the precision of the null and the small directional signal |
| A9 | Abstract p 175 and Conclusions p 185: the quality of evidence was "moderate to low" (p 185: "low to moderate") | Results p 178 and Table II: risk of bias moderate in 5 studies, serious in 5, critical in 3, and serious/critical in 1 (Basciftci). No GRADE or other certainty method is described in the Methods | The certainty wording is informal. Applying GRADE to 14 non-randomised studies with this risk-of-bias profile would most likely give low to very low certainty (my judgement; `critical-appraisal.md`) | Moderate | "Moderate" quality is the word most likely to be quoted back, and nothing in the Methods produces it |
| A10 | Flow chart p 177: additional records from other sources "n = 29" | Same box: "19 studies identified after hand searching". Results p 178 describes only 927 → 34 and leaves out the other-source records | 29: the arithmetic 231 + 29 = 260 screened works only with 29 (derived) | Low | Search reproducibility |
| A11 | Table III p 184: Sivakumar FMA +0.5 ± 1.7 vs +0.1 ± 2.0°, P = 0.985 | Recomputed from n 31/29: P = .41 (Student t; derived) | A transcription slip in the P value. Non-significant either way | Low | None for the conclusion |
| A12 | Table I p 180 and Results p 178: Kirschneck included "all patterns" (Class I, II and III) | Table III p 183, effect column: "hyperdivergent patients of varying malocclusion" | All patterns (mean SN-GoGn 35.1 / 34.2°) | Low | Subgroup counting: Kirschneck is not one of the six hyperdivergent studies |
| A13 | Results p 178: a judgement between "serious" and "critical" was made for any study with "no information" in at least one domain | Table II p 182: the rule for choosing between the two is not given. Staggers (no information on confounding and on deviations, serious outcome measurement, **no critical domain**) is critical overall. Paquette, Bravo, Katsaros and Hosseinzadeh-Nik (one "no information" domain each) are serious | A reasonable ad hoc rule, applied without a stated threshold. In the published ROBINS-I method, an overall critical rating needs at least one critical domain, and missing information gives an overall "no information" rating (both UNVERIFIED this run) | Moderate | The serious/critical split decides which studies a reader will discount |
| A14 | Table II confounding: baseline-angle imbalance of 1.6-2.3° (Basciftci Class I, Kocadereli, Porto, Katsaros) is moderate; 4.6° plus a 4.7-y age gap (Basciftci Class II) and 5.8° (Luppanapornlarp) are critical (all derived from Table I). Sivakumar is critical for treatment time (1.5 vs 2.9 y) and sex (26 F / 5 M vs 18 F / 11 M) | Paquette's sex imbalance is as large (20 F / 13 M vs 11 F / 19 M: 61% vs 37% female, derived; Sivakumar 84% vs 62%) and is rated moderate. Hosseinzadeh-Nik's groups were defined by different diagnoses (bimaxillary protrusion vs none, Table I) and are rated moderate | The baseline-angle judgements follow a consistent implicit threshold. The sex and diagnosis judgements do not. The Methods statement that sex was "ignored" (p 177) concerns *between-study* heterogeneity, so it does not by itself contradict within-study sex judgements | Moderate | Weakens the reliability of the moderate/serious/critical labels used throughout the Results |
| A15 | Introduction p 175 attributes the wedge-type effect to refs 3-5 (Isaacson 1971; Fränkel 1983; Pearson 1978) | Discussion p 184 attributes the wedge concept to ref 25 (Fields, Proffit et al 1984, on facial pattern differences in long-faced children and adults) | Whether ref 25 proposes the wedge concept is UNVERIFIED. The term does not appear in Proffit's 7th- or 6th-edition text (searched this run; section C) | Low | Do not attribute the wedge effect to Proffit in an exam answer |
| A16 | Discussion p 184: a preliminary search found studies of 4 first or second molar extractions, refs 7, 19, 26, without a treated nonextraction control | Ref 19 is Staggers 1994, an included first-premolar study (Table I). Ref 7 (Aras 2002) compared first-premolar, second-premolar and first-molar extraction groups (VERIFIED abstract) | Probably Staggers 1990 (22 second-molar vs 22 first-premolar cases, no nonextraction group; VERIFIED abstract) was intended (derived) | Low | Citation slip |
| A17 | Methods p 176: mean differences and SDs would summarise each study; P printed as 0.000 would be imputed as 0.0004 | Table III gives only group means ± SD and the original P. No MD, CI or imputation appears anywhere | Planned methods not applied | Low | The reader has to compute the MDs; they are in `key-numbers.md` |
| A18 | Table I lists Porto's outcomes as SN-GoGn, FMA and N-S-Gn, and Sivakumar's angle as GoMe-FH | Table III reports Porto's SN-GoGn and FMA only, and labels Sivakumar's angle FMA | N-S-Gn (Y-axis) was listed but not reported. GoMe-FH and FMA are the same construct | Low | Selective presentation within a study, minor |
| A19 | Table I: Hosseinzadeh-Nik both groups 16.4 ± 0.4 y. Table III: "Pog-SN7" −0.4 ± 9.8 vs −1.0 ± 6.9 mm and "B-SN7" +2.0 ± 8.3 vs −0.4 ± 6.5 mm. Effect column p 183: no difference "in dental Class I bimaxillary protrusion patients" | The SDs (6.5-9.8 mm) are larger than every other linear change SD in Table III (1.3-5.1 mm). Identical age summaries in two groups are possible but unusual. Only the extraction group had bimaxillary protrusion (Table I) | UNVERIFIED against the original. The comparison is protrusive extraction cases vs non-protrusive nonextraction cases | Low | This study contributes landmark positions, not a face-height measure, and its groups differ by diagnosis; it adds little either way |
| A20 | Table I and III footnotes define "Class II, 1" as "Class II Subdivision 1" | The text uses Division 1 throughout. Table III, Hayasaki: "Class II, 1" in the intervention column, "Class II" in the results column | Division 1 | Trivial | Typo |
| A21 | Gkantidis ANS-Me SD printed "4.5′"; Katsaros "PP-GoME"; Hosseinzadeh-Nik "SN7" | — | 4.5 mm; PP-GoMe. "SN7" is not defined in the review; a reference line at S-N −7° is one possible reading (my inference, UNVERIFIED) | Trivial | Typesetting |
| A22 | Text and tables spell "Luppanapornlap" | Reference 16 (p 186) spells "Luppanapornlarp" | Luppanapornlarp (the hub registry uses this spelling) | Trivial | Searchability |

**Checks that passed** (say so if challenged):

- **Flow chart arithmetic (p 177):** 183 + 43 = 226 excluded at screening; 260 − 226 = 34 full texts; 4 + 2 + 3 + 4 + 6 + 1 = 20 excluded; 34 − 20 = 14 included (all derived).
- **Risk-of-bias counts:** the text (p 178) matches Table II: moderate 5 (refs 8, 9, 13, 14, 17), serious 5 (15, 20-22, 24), critical 3 (16, 18, 19), split 1 (23). The risk-of-bias statements in each subgroup paragraph (pp 178, 181) match Table II too.
- **Subgroup bookkeeping:** normodivergent 4 + hyperdivergent 6 + all patterns 1 + normodivergent-vs-hypodivergent 1 + undefined 2 = 14.
- **Abstract numbers match Table III:** Kumari +1.5 vs +5.5 mm; Porto −0.9 vs +0.8°; Sivakumar +2.3 vs +0.9 mm; Paquette +0.3 vs −2.0°. The "ten studies with no difference" also matches the Table III effect column.
- **Results-text differences** for Porto (1.7°), Sivakumar (1.4 mm) and Kumari (4 mm) match Table III (derived). Paquette is the exception (A1).
- **Table III P values reproduce** from the printed means, SDs and Table I group sizes with no significance flip, except A11.
  - Porto: .018 vs printed .020. Sivakumar N-Me: .042 vs .033. Hayasaki Class I SN-GoGn: .069 vs .071.
  - The largest gaps are Gkantidis SN-GoGn (.73 vs .62) and ANS-Me (.50 vs .64). Rounding of differences of only 0.2-0.7, or a different test in the original, could explain them (UNVERIFIED).
- **The "no within-group angular change above 1.2°" statement** (pp 181/184) is true of Table III: the largest are Katsaros PP-GoMe −1.2° and Kirschneck PP-GoGn −1.2°, apart from Paquette's −2.0°.
- **Totals (derived):** 857 patients (extraction 430, nonextraction 427); group sizes 14-45; studies published 1992-2016; 42 between-group tests in Table III.

**How to raise these politely.** Lead with what holds:

- The flow chart, risk-of-bias counts and abstract numbers are internally consistent.
- Every Table III P value except one reproduces from the printed data.
- The conclusion survives, and tightens, when the review's own data are pooled: mandibular-plane MD −0.32°, 95% CI −0.68 to 0.04 (derived; A8).

Then ask three questions, each as a question, not a finding:

1. **A1:** "For Paquette, the Results say 1.7° and Table III says 2.3°. I read it as +0.3 against −2.0°. Is 2.3° the number to quote?"
2. **A2:** "The risk-of-bias table says Kumari compared only posttreatment values, and their own abstract reports no significant vertical difference. Is the 4 mm N-Me result really a comparison of change?"
3. **A5:** "The conclusion says 'regardless of age, sex, malocclusion type or vertical pattern', but no subgroup analysis was done and the steepest sample averaged 40°. Would you apply it to a severe open-bite case?"

Keep A8 (the pooled sensitivity sets) and A13-A14 (risk-of-bias consistency) for a methods-minded consultant, and leave A15-A22 out of the room. None of this is an accusation: these are reporting slips and judgement calls in a narrative review, and the main conclusion does not depend on any of them.

## B. Against other studies and the hub registry

### B1. The included studies, read against their own abstracts

| Included study (Kouvelis ref) | What Kouvelis reports | What the study's own abstract says (VERIFIED, PubMed) | Verdict |
|---|---|---|---|
| Kocadereli 1999 (14) | 40 vs 40 Class I, "hyperdivergent (tendency)"; no difference (Table III) | 40 vs 40 (23 girls / 17 boys vs 24 / 16); 6 linear and 8 angular measures; vertical changes not different | AGREES |
| Staggers 1994 (19) | 38 vs 45 Class I; no difference | 38 Class I first-premolar extraction vs 45 Class I nonextraction; no significant difference in vertical change, which increased in both groups. The study was framed around the proposal that first-premolar extraction reduces the vertical dimension of occlusion and contributes to TMJ disorders | AGREES |
| Kumari & Fida 2010 (15) | N-Me +1.5 vs +5.5 mm, P < .05: a significant nonextraction increase | 40 vs 41, mean ages 15.4 / 15.8 y, Karachi 2003-2005; **no significant difference in vertical changes**; design described as cross-sectional. Molar heights (upper molar to palatal plane, lower molar to mandibular plane) were measured | **CONFLICTS** (A2). The molar heights are the mechanism data the review did not extract |
| Sivakumar & Valiathan 2008 (18) | N-Me +2.3 vs +0.9 mm, P = .033; FMA and ANS-Me not significant | 31 normodivergent Class I Indian subjects (26 F / 5 M, 17.19 ± 3.89 y) vs 29 (18 F / 11 M, 18.48 ± 3.61 y). Linear vertical rose more with extraction (P < .05); the posterior teeth extruded as they moved mesially; mandibular plane unchanged. Authors' conclusion: extracting only to increase overbite or flatten the mandibular plane might not be justified | AGREES with Kouvelis' account. Its conclusion is the review's own conclusion, which sits awkwardly with p 181 listing ref 18 among studies whose conclusions were "not supported by their data" |
| Gkantidis 2011 (8), the senior author's study | No difference despite opposite mechanics by design (Table I: "non-extrusive" vs "extrusive") | 29 vs 28 hyperdivergent Class II/1 from two offices. Extraction with "intrusive" mechanics (e.g. high-pull headgear); nonextraction with no regard to vertical control (e.g. cervical headgear, Class II elastics). The extraction-group molars translated mesially, yet molar and incisor vertical positions were similar between groups, and no skeletal vertical difference was found | AGREES. It is also the only included study whose abstract reports the wedge mechanism directly: the molars came forward and the face did not close. Self-citation noted in `critical-appraisal.md` |
| Kirschneck 2015 (13) | All vertical patterns, Class I, II and III; the review's only Class III source (p 185) | 25 vs 25 juvenile borderline cases with 6-9 mm overjet and more than 6 mm crowding, matched by cluster analysis; no vertical effect (published 2016, epub 2015) | AGREES on the result. PARTIAL on the sample: Class III patients with a 6-9 mm overjet would be unusual, so whether the review's only Class III source contains Class III cases is UNVERIFIED (full text not seen) |

**Journal-club line:** "Five of the six included studies I could check say the same as the review. The odd one out is Kumari: its own abstract reports no vertical difference, yet it is one of the review's two headline positives."

### B2. The dose-response test: more molar protraction, more closure?

The wedge theory makes a testable prediction: if mesial molar movement closes the face, extracting further back (second premolars) should close it more.

- **Kim 2005** (27 first-premolar vs 27 second-premolar extractions, Class I hyperdivergent): second-premolar cases moved the first molars further mesially. Facial vertical dimension decreased in neither group, and the authors called the wedge hypothesis invalid. VERIFIED (abstract). **AGREES.**
- **Al-Nimri 2006** (26 vs 26 Class II/1, upper 4s in both, lower 4s vs lower 5s): lower-5 extraction moved the lower molars further forward. Neither the mandibular plane nor the MM angle changed in either group. VERIFIED (abstract). **AGREES.**
- **Gkantidis 2011** (included, B1): mesial molar translation without any vertical skeletal difference. VERIFIED (abstract). **AGREES.**
- **Dzingle 2026** (extraction cases by facial type, mean treatment 41.90 ± 12.97 months): anchorage loss was 3.30 ± 1.99 mm (hypodivergent), 3.47 ± 1.95 mm (normodivergent) and 3.01 ± 2.39 mm (hyperdivergent), with no difference by facial type. Horizontal anchorage loss did decrease the mandibular plane angle, but by an amount the authors judged probably not clinically relevant; vertical anchorage loss did not change it. VERIFIED (abstract). **PARTIAL:** the molars do come forward about 3 mm in every facial type, so the mechanism is exercised. The small angular effect it produces matches the sub-1° signal in the review's own pooled data (A8).
- **Rüedi 2024:** in hyperdivergent children the occlusal plane flattened more with extraction than without (between-group SN-OP Δ −1.48°, P = .04), while SN-ML did not differ between groups (Δ 0.07°; B5). VERIFIED (abstract). **AGREES** with the review's explanation (p 184) that the molars move along the occlusal plane rather than "closing a wedge".

The review itself did not extract molar movement (`critical-appraisal.md`), so this external evidence is the closest test of the mechanism the hub has.

**Journal-club line:** "Take the second premolars and the molars come further forward, but the face does not close any more. That's the dose-response test the wedge theory fails, and Dzingle puts the leftover effect below clinical relevance."

### B3. Where extraction did seem to reduce the vertical

- **Porto 2012** (included): SN-GoGn −0.9 vs +0.8°, P = .020, but FMA P = .240 (Table III). The only *significant* included angular result in the expected direction (most non-significant ones lean the same way, `critical-appraisal.md`).
- **Chua 1993** (174 Class I and II patients, ANS-Me normalised to the Michigan growth standard): nonextraction treatment increased ANS-Me significantly; extraction produced no significant change. VERIFIED (abstract). **CONFLICTS.** It appears to meet the review's eligibility (premolar extraction vs treated nonextraction, radiographic vertical outcome), and it is not among the 14 included studies. Whether it was one of the 20 full-text exclusions is not stated: the flow chart gives reasons and counts, not names (UNVERIFIED).
- **Aras 2002** (skeletal open bite):
  - With the open bite extending to the posterior teeth, second-premolar or first-molar extraction (n = 17) produced a closing rotation.
  - With anterior open bite only, first-premolar extraction (n = 15) left the vertical dysplasia unchanged.
  - VERIFIED (abstract). **CONFLICTS for that narrow indication** (posterior extraction, true open bite). It agrees with the review for first premolars.
- **Garlington & Logan 1990** (23 patients, SN-MP above 38°, lower second premolars enucleated in the early mixed dentition): lower anterior face height decreased significantly against historical data from Isaacson et al. VERIFIED (abstract). **CONFLICTS**, but the comparison is historical, not a treated control.

**Verdict: PARTIAL.** The positive evidence comes from three places, and none of them tests four first premolars against a contemporaneous treated control with a consistent result:

- posterior extraction in true open bite (Aras)
- studies with historical or growth-normalised controls (Garlington, Chua)
- one included study whose second measure disagreed (Porto)

**Journal-club line:** "The best case for the wedge is second premolars or first molars in a genuine posterior open bite (Aras). That's not what most of us mean when we say 'extract fours for the vertical'."

### B4. Studies outside the review's design (no treated nonextraction control)

- **Hans 2006** (30 four-first-molar vs 31 four-first-premolar extraction cases, each against age- and sex-matched untreated Bolton-Brush controls): neither treatment increased mandibular vertical height. Overbite rose 2.1 mm with molar extraction and fell 4.1 mm with premolar extraction, mainly through incisor intrusion. VERIFIED (abstract). **PARTIAL:** good skeletal control in both groups, and the overbite change was dental.
- **Staggers 1990** (22 second-molar vs 22 first-premolar extractions): few differences between groups; premolar cases had more incisor retraction and more molar protraction. VERIFIED (abstract). Background only.
- **Ramesh 2012** (45 adults with GoGn-SN of 32° or more and Class I molars, first-premolar extraction, no control group): no decrease in overbite, vertical dimension or mandibular plane angle. VERIFIED (abstract). **AGREES**, weakly.

**Journal-club line:** "When extraction changes the bite vertically, it's the incisors that move: Hans found a 4 mm overbite reduction with premolar extraction and no increase in mandibular vertical height."

### B5. Since 2018: the evidence the review asked for

The review called for well-conducted prospective cohorts (p 185). Later studies:

- **Rüedi 2024** (J Orofac Orthop 2024;85:181-8; consecutive sample of 76 hyperdivergent children, 45 extraction vs 31 nonextraction, mean age 11.9 y, baseline SN-ML 40.2 ± 3.5°, linear regression):
  - SN-ML difference 0.07° (95% CI −0.90 to 1.01; P = .88).
  - L1-ML (Δ −6.39°, P < .001) and SN-OP (Δ −1.48°, P = .04) did differ.
  - VERIFIED (abstract). **AGREES**, in a sample as steep as the review's steepest.
- **Ferrillo, Daly, Pandis & Fleming 2026** (Int Orthod; retrospective, 168 patients, 86 M / 82 F, mean age 13.69 ± 5.03 y; adjusted for age, crowding, sex and baseline MMPA):
  - Four-premolar extraction effect on post-treatment MMPA −0.40° (95% CI −1.75 to 0.96) and on anterior face height +1.59 mm (−0.65 to 3.83).
  - Upper-premolar extraction MMPA −0.31° (−1.06 to 0.43).
  - Only the baseline values predicted the outcome.
  - VERIFIED (abstract). **AGREES.**
- **Alrubaie 2026** (Clin Oral Investig; prospective, non-randomised, registered NCT04151875, CBCT, 25 vs 25 hyperdivergent Class I adults with 4.6-7.1 mm crowding):
  - LAFH rose 1.35 ± 1.73 mm with extraction and 0.8 ± 1.8 mm without.
  - SN-MP fell non-significantly with extraction and by 0.7 ± 0.75° (significant within group) without extraction.
  - No between-group difference in any skeletal vertical measure.
  - VERIFIED (abstract). **AGREES**, and it is the prospective cohort the review asked for.
- **Elias 2024** systematic review and meta-analysis (30 studies, four first premolars vs nonextraction): did not include vertical outcomes. VERIFIED (abstract). No later systematic review re-pooling vertical outcomes was found.
- **Silva Campos letter and the authors' response,** AJODO 2019;155(3):305-306. Their existence is VERIFIED (PubMed comment links); their content was not read (UNVERIFIED).

**Verdict: AGREES.** Three later cohorts find no skeletal vertical difference: one prospective (Alrubaie), and two that adjust for baseline (Rüedi by regression, Ferrillo by baseline MMPA). The two that report confidence intervals for the mandibular-plane effect keep them between −1.75° and +1.01° (Rüedi, Ferrillo).

**Journal-club line:** "Since this review, Rüedi, Ferrillo and a prospective CBCT cohort all land on the same null; where CIs are given, the mandibular-plane effect stays within about 1.75° either side of zero."

### B6. The hub registry and the rest of this topic

- **`2005-stephens-long-term-profile-extraction-nonextraction` — CONFIRMS.** Stephens found that the extraction decision left no long-term profile difference in matched patients; Kouvelis is the vertical analogue. Two studies sit in both papers:
  - **Luppanapornlarp & Johnston 1993** (33 vs 29 "clear-cut" Class II): Stephens cites it for parallel soft-tissue ageing. Kouvelis rates it critical for baseline differences (FMA 24.7 vs 18.9°, Table I) and finds no vertical difference.
  - **Paquette 1992** (33 vs 30 borderline Class II/1): the only included study with a within-group angular change above 1.2° (nonextraction FMA −2.0°, Table III), the opposite of the wedge prediction.
  - **Power:** Stephens' caveat ("no difference is not equivalence", registry line on d ≥ 0.91) applies to every single study here. Pooling narrows it: the derived mandibular-plane CI is under 0.75° wide (A8).
- **`2026-khaleel-deep-bite-turbos-rcos-elastics` — AGREES in magnitude.**
  - Mechanics alone changed the maxillomandibular plane angle by +0.69° to +1.84° within arms, and FH-Mn by +1.31° with posterior box elastics (registry).
  - That is the same order as the largest between-group differences in Table III (Porto 1.7°, Paquette 2.3°).
  - Both papers point the same way: skeletal vertical effects of orthodontic treatment are small and depend on vertical mechanics more than on tooth number.
  - A shared wording issue: Khaleel calls samples aged 15.8-17.4 y "nongrowing" (registry, flagged against Proffit), as Kouvelis does for samples aged 15.4-18.5 y (A3).
- **Topic-1 superimposition papers — method link only:**
  - The papers: `1989-nielsen-maxillary-superimposition-three-methods`, `1994-doppel-maxillary-superimposition-implants` and `2018-nguyen-3d-mandibular-regional-superimposition`.
  - Every outcome in Kouvelis is a total rotation or distance referenced to S-N, FH, the palatal plane or the true horizontal. No included study used structural or implant superimposition, so molar vertical movement within the jaws cannot be read from these data.
  - Nielsen's registry line shows that best-fit maxillary superimposition under-reads vertical molar change by about 30%. Any future test of the wedge mechanism needs structural registration.
- **Same topic (Treatment Rationale):**
  - **Yezdani 2020 (serial extraction)** lists bite deepening as a disadvantage of serial extraction. Read with Hans 2006 (B4) and Proffit Ch 12, the bite effect of extraction is dental (incisor tipping and eruption), not skeletal, which is consistent with Kouvelis.
  - **Quinzi 2023** (52 serial-extraction ± expansion cases vs 26 untreated, aged 8.5 ± 1.4 y) did report reduced mandibular and occlusal plane angles. The superior gonial angle changed −0.44 ± 0.6° per year (serial extraction) and −0.34 ± 0.5° (expansion plus extraction) vs −0.04 ± 0.6° (controls), P = .036 across the three groups (VERIFIED abstract). **PARTIAL:** it compares early extraction with untreated controls, a different question.
  - **Kokich & Kokich 2006** (missing lower second premolars): a chincup was used with elastics to protract molars (Patient 4). Proffit Ch 13 notes that a chincup rotates the mandible down and back (VERIFIED in the resident's notes). Tangential.
  - **`2004-kokich-impacted-maxillary-canines`:** no shared claim.

## C. Against Proffit (Contemporary Orthodontics)

| Proffit position (chapter / page, 7th ed) | What this paper found | Verdict | How to reconcile it in an exam answer |
|---|---|---|---|
| The term "wedge effect" does not appear in the 7th- or 6th-edition text (both searched this run; "wedge" occurs only for separators, rotation wedges, a retainer wire wedging an extraction space open and bone wedges in osteotomies) (V) | The review sources the wedge concept to refs 3-5 (p 175) and to ref 25, Fields, Proffit et al 1984 (p 184) | NUANCE. Whether ref 25 proposes it is UNVERIFIED | Describe the wedge hypothesis as a clinical belief from the literature, not as a Proffit teaching |
| Ch 7 p 221: with less than 4 mm of crowding, extraction is rarely indicated, only for severe incisor protrusion or, in a few instances, a severe vertical discrepancy (V) | No specific skeletal vertical effect; an extraction protocol to reduce or control the vertical is not evidence-based (abstract) | **PARTIAL CONFLICT.** The review measured skeletal outcomes only (Table III), not overbite or incisor position | "Kouvelis shows no skeletal benefit. If extraction helps a vertical problem, it is likely through the incisors (closing an open bite by retraction and relative extrusion), which the review did not measure." That mechanism is my interpretation, UNVERIFIED as Proffit's reason |
| Ch 14 p 512, Fig 14.42: a severe long-face, mandibular-deficient patient treated with high-pull headgear on a bite-block functional appliance. The mandibular plane angle did not increase, and the caption credits the main effect to retraction of protruding maxillary incisors into a premolar extraction space, with little growth modification (V) | Extraction has no skeletal vertical effect of its own | **AGREES:** Proffit's own long-face example uses the extraction space for the incisors, and the vertical was held by the appliance | "In a long-face patient the extraction space is for the incisors; the vertical is held by headgear, bite blocks or TADs" |
| Ch 7 p 242: for open bite from elongated posterior teeth, depress them or stop their eruption while everything else grows (relative intrusion), so the mandible rotates up and forward. P 243 (Fig 7.30): the mandible rotates back as the maxillary posterior teeth come down unless ramus growth keeps pace, and extruding them during treatment does the same (V) | Molars mesialise parallel to the occlusal plane, so tooth number does not set the vertical (p 184) | **AGREES on mechanism** | "Vertical control is about the vertical position of the molars, not how many teeth you remove" |
| Ch 5 p 127: 1 mm of posterior elongation opens the bite about 2 mm anteriorly (V) | Not measured | AGREES (explains why) | A millimetre of molar extrusion from the mechanics outweighs any geometric gain from sliding a molar forward. Sivakumar's abstract (B1) shows exactly that: molars came forward *and* extruded |
| Ch 16 p 575: Class II elastics elongate the lower molars; if they extrude more than the ramus grows, the mandible rotates down, so they are contraindicated in nongrowing patients who cannot tolerate that rotation. Ch 16 p 567: headgear moves first molars back more than 2 mm only by extruding them. Ch 16 p 576: in Class III camouflage, patients of European descent often cannot tolerate the extra anterior face height that Class III elastics create. Ch 17 p 587 (Fig 17.10): Class II and III elastics can open the bite (V) | Treatment details are NA in Table I for 7 of 14 studies. Gkantidis' nonextraction arm (mean age 11.0 y) used low-pull headgear in all patients, plus anterior bite planes and Class II or crossbite elastics when needed, and still showed no difference (Table I) | NUANCE: mechanics are the main uncontrolled confounder | "Proffit's caveat is ramus growth. Gkantidis' extrusive mechanics in growing 11-year-olds were compensated; the same mechanics in an adult would not be" |
| Ch 14 pp 508-509: hold the maxilla vertically and inhibit posterior eruption; for severely affected long-face children the only successful methods are intrusion of posterior teeth with skeletal anchorage and segmental surgery. Ch 14 p 511 (Fig 14.41): posterior bite blocks stopped posterior eruption and face height was maintained. Ch 22 p 756: Le Fort I elevation of the posterior maxilla is the preferred way to reduce face height (V) | Extraction does not reduce face height | **AGREES by omission:** Proffit lists no extraction-based method for reducing face height | "For a real vertical problem: TAD intrusion of the molars or maxillary impaction, not extraction" |
| Ch 4 p 92: total mandibular rotation (mandibular plane to S-N) averages −2 to −4° forward from childhood to adulthood, while the core rotates −10 to −15°; internal rotation and surface modelling largely offset each other (V) | All outcomes are net (total) angles referenced to S-N or FH (Table III) | NUANCE | Two consequences: (1) the net angle is the clinically visible outcome, so the null stands for the face; (2) extraction treatment lasted longer in 7 of 8 studies that report duration (derived), and normal growth itself flattens the mandibular plane, which would favour extraction in the angular outcomes, though only by a fraction of a degree at −2 to −4° over all of childhood to adulthood (my estimate) |
| Ch 4 p 97 and Ch 14 p 508: facial growth does not stop in the late teens, and long-face vertical growth runs into the late teens or early 20s (V) | Three samples aged 15.4-18.5 y called "only nongrowing" (p 185) | NUANCE (A3) | Treat 15-18-year-olds as still growing vertically, especially males and long-face patients |

**Past-exam links.** These are recalled promotion questions on the resident's Proffit study pages, seen this run. The keyed answers are the pages' own.

- **Ch 8, 2019:** Class I skeletal, Class III molars, high vertical pattern, first premolars extracted, maximum anchorage needed → **bone screw**. Kouvelis supports the logic: there is no vertical reason to let the molars come forward, so anchorage is chosen for the incisor goal.
- **Ch 14, 2023:** 15-year-old with open bite and a hyperdivergent mandible, molar intrusion planned → **mini-screw (TAD)**. This is Proffit's answer for real vertical control, not extraction.
- **Ch 14, 2022:** Class II with increased vertical growth → **headgear attached to a maxillary splint**.
- **Ch 14, 2022 and 2023:** high-pull headgear for vertical control in a long-face patient → **about 250 g per side**. A 2019 recall keyed 500 g; the page flags the discrepancy.
- **Ch 13, 2023:** long-face patient needing expansion → **bonded RPE**, because occlusal coverage controls the vertical.
- **Ch 7, 2020 and 2024:** the factor that distinguishes relative intrusion from relative extrusion → **mandibular rotation**. The same rotation is what the wedge theory claims and Kouvelis does not find.
- **Ch 7, 2019, 2020, 2022 and 2024:** a borderline extraction decision is made on the **soft-tissue profile (nose, lips and chin)**; one 2020 recall keys "diagnostic therapy". Kouvelis adds the negative: not on the vertical pattern.

## D. Open questions

1. **The mechanism.** How far did the molars move mesially, and did they extrude, in each group? The review extracted neither (Table III), though at least three primary studies measured them:
   - Kumari's abstract lists molar-to-palatal-plane and molar-to-mandibular-plane heights.
   - Gkantidis' and Sivakumar's abstracts report mesial molar movement and molar vertical position (all VERIFIED).
2. **How much space did the molars take?** Kocadereli's extraction group expected "minimal posterior protraction" because the space went to crowding (Table I). In maximum-anchorage cases the wedge mechanism is barely exercised. Was space use recorded anywhere?
3. **Kumari.** What exactly was tested at P < .05 (A2)? Was it change, or posttreatment N-Me?
4. **Severe and open-bite cases.** Does the null hold in any of these situations?
   - above a mean SN-GoGn of 40.0° (Porto, the steepest sample)
   - in skeletal open bite
   - when second premolars or molars are extracted (Aras 2002, B3)
5. **Equivalence margin.** What difference would be clinically important: 1°? 2°? The review never defines one, though it calls 1.7-2.3° "clinically questionable" (Table III). With the pooled CI at −0.68 to 0.04°, any margin of 1° or more would be met (derived, A8).
6. **The half-degree signal.** Is the −0.52° to −0.60° in the better-rated and hyperdivergent subsets (A8) a real small effect, or the extraction groups' steeper baselines regressing toward the mean?
7. **Growth status.** Why "mainly" (p 178) and then "only" (p 185) nongrowing, for samples averaging 15.4-18.5 y (A3)?
8. **The search.** Why is Chua 1993 absent (B3)? In the MEDLINE strategy (p 187), lines 1-2 (22,826 and 5,002 hits) have no vertical term but exceed the 927 records identified across all databases, so the screened set presumably came from lines 3-11 (derived). Those rely on "vertical", "caudal", "cranial", "perpendicular" and "cephalometr*". Terms such as face height, mandibular plane, hyperdivergent, long face, open bite or wedge are not in it.
9. **Kirschneck's Class III cases.** Were there any, given a 6-9 mm overjet entry criterion (B1)?
10. **Risk-of-bias procedure.** How was the senior author's own study (ref 8) assessed, and by whom? The paper says disagreements arose only among serious and critical studies (p 178).
11. **The 2019 correspondence.** What did the letter raise, and what did the authors answer (content UNVERIFIED)?
12. **After treatment.** All outcomes stop at the end of active treatment (T1 − T0). Do the groups diverge vertically after retention, as growth continues?
13. **Dental vertical outcomes.** What happens to overbite and incisor height with and without extraction in high-angle patients? This is the likely basis of Proffit's "severe vertical discrepancy" indication (section C), and the review did not look.

## E. One-paragraph verdict

The conclusion holds against the review's own data, and more firmly than its method shows:

- Every Table III P value except one reproduces.
- The four significant results out of 42 comparisons split two each way.
- An exploratory pooling of the 12 mandibular-plane comparisons gives −0.32° (95% CI −0.68 to 0.04, I² = 0%; derived).
- Three later cohorts (Rüedi 2024, Ferrillo 2026, Alrubaie 2026) agree.

The pooling also shows something the vote count hid. Without the critical-risk studies, and in the hyperdivergent samples, a small effect in the wedge direction appears: about −0.5 to −0.6°, with CIs that stop short of zero but never reach −1.2° (derived). It is too small to matter clinically, and it may be baseline imbalance regressing to the mean, so the defensible conclusion is "no clinically meaningful skeletal effect".

The wording around the conclusion needs care:

- Paquette's difference is 2.3°, not 1.7° (A1).
- Kumari's "significant" 4 mm may not be a test of change at all (A2).
- "Regardless of age, sex, malocclusion type or vertical pattern" goes beyond what was analysed (A5).
- "Moderate to low quality" has no stated method behind it, and the risk of bias runs to critical (A9, A13-A14).
- The between-group difference, not the within-group change, is the yardstick for clinical significance (A7).

Against the literature, the paper sits in a consistent picture. Molars brought forward by extraction (Gkantidis), or further forward by extracting second premolars (Kim, Al-Nimri), did not close the face, and the only credible positive evidence is posterior extraction in true open bite (Aras). Against Proffit, it matches the textbook's mechanism: vertical control comes from the molars' vertical position, ramus growth and, in severe cases, TAD intrusion or maxillary impaction. Proffit's own long-face example (Fig 14.42) uses the premolar space for the incisors. The one nuance is that Proffit still allows extraction for a severe vertical discrepancy in a few instances, which may work through the incisors rather than the skeleton.

Use it to argue that the extraction decision should rest on crowding, protrusion and the profile, with vertical control delivered by mechanics. Do not use it to claim that extraction can never help an open bite, or that the effect is proven to be exactly zero.
