# Exam Questions: Nguyen et al 2018, three-dimensional mandibular regional superimposition in growing patients

Source: Nguyen T, Cevidanes L, Franchi L, Ruellas A, Jackson T. Am J Orthod Dentofacial Orthop 2018;153(5):747-754 (Techno Bytes). UNC Chapel Hill, Michigan, Florence, Rio de Janeiro. Retrospective validation of 3D voxel-based regional mandibular superimposition: aim 1 stability against bone plates in 20 Class III patients; aim 2 reproducibility between two observers in 25 growing patients. IRB 12-1496; NIDCR and AAOF funded.

Eleven questions: Q1–Q7 single-best-answer MCQs, Q8–Q10 short answer, Q11 case-based oral defence. Tags: R = recall, A = application, N = analysis (3 R, 4 A, 4 N). "Table" is the single unnumbered table on p 749. Where the abstract and the Table disagree, the Table value is used and the discrepancy is flagged. Anything from outside the paper is marked (literature), (Proffit) or (registry); "derived" is my own arithmetic from printed values.

## Reference card (the numbers needed)

| Item | Value | Source |
|---|---|---|
| Aim 1 sample | 20 Class III bone-anchor patients; T1 12.1 ± 1.3 y; T2 13.3 ± 1.1 y (interval about 1.2 y, derived) | Methods p 749 |
| Reference standard | bone plates and screws at the incisor apices between lateral incisor and canine, used as "regional implants"; immobility confirmed clinically only | Methods p 749; Fig 1 |
| Scanners, voxel | i-CAT or NewTom 3G; 0.3 × 0.3 × 0.3 mm; same machine at T1 and T2; settings printed as 5 mA, 12 kV(p) (misprint; CBCT runs at about 110–120 kVp, literature, UNVERIFIED) | Methods p 749 |
| Software | ITK-SNAP 3.6 (segmentation), Slicer CMF 3.1 (voxel registration, Model Maker, Model to Model Distance, Mesh Statistics) | Methods p 749–750 |
| Regions tested | (1) chin: pogonion to B point, laterally to the distal-incisal points of the lateral incisors; (2) symphysis: inner cortex of the lingual surface from the inferior border to the centre of the mental foramina; (3) inferior contours of the third-molar germs | Methods p 749; Fig 2 |
| Region excluded a priori | mandibular canal: changes with growth (Björk 1963; Krarup 2005) | Methods p 749 |
| Metric | absolute mean surface error (magnitude only, no direction); chosen over RMS because RMS weights outliers | Methods p 749–750 |
| Chin | 0.37 ± 0.16 mm; P = .765 | Table |
| Symphysis | 0.40 ± 0.14 mm; P = .698 (abstract and Results text: ± 0.15) | Table |
| Third-molar crypt | 1.94 ± 0.06 mm; P = .0025* ("statistically significant"; test not named) | Table |
| Derived from the Table | chin 1.23 voxels, symphysis 1.33, crypt 6.5; crypt / chin 5.2; CV 43 % / 35 % / 3.1 %; 95 % CI (n = 20) chin 0.30–0.44, symphysis 0.33–0.47 mm | derived |
| Aim 2 sample | 25: 10 Class II Herbst, 10 Class II elastics, 5 Class III bone anchors; 12.7 ± 1.4 y; CVM 2–5; interval 12.6 ± 0.9 months | Methods p 750 |
| Sample-size calculation | two-way random ICC; ρ0 0.75 vs ρ1 0.95; α .05; power .80; 2 raters; result 25 (derived by the Walter 1998 formula: about 10–12; literature, method UNVERIFIED) | Methods p 750 |
| Interobserver error | 0.12 mm, SD 0.11 mm (abstract prints 0.12 ± 1.1) | Results p 750 |
| ICC | 0.998; 95 % CI 0.995–1.000 | Methods p 750 |
| Single subject (Figs 7–8) | < 0.25 mm over the entire mandible; 75 % of the surface within 0.12 mm; Fig 8 A label prints "> 0.025mm" | Discussion p 753 |
| Remodelling seen | pogonion little or no change; about 2 mm deposition near menton (Fig 4 D, one subject); anterior ramus resorption, posterior ramus deposition (Fig 6; Enlow and Harris 1964) | Discussion p 753 |
| Literature cited by the paper | Ruellas 2016: 16 of 18 superimpositions failed with crypts (as cited); Koerich 2016: whole-mandible registration, non-growing | Introduction p 749; Discussion p 753 |
| Companion numbers (registry) | Doppel 1994: 2D tracing error 0.5 mm; Nielsen 1989: palatal best fit hides 30–50 % of eruption over 4 y, structural-method interobserver 0.5–0.9 mm vertical at ANS and incisors; Khaleel 2026: corpus axis Xi–Pm at Pm, intra-examiner ICC 0.92–0.98, upper posterior changes 0.07–0.42 mm; Springate and Jones 1998: corpus-axis errors ≥ 4 mm in about 10 % at molars and incisors | Doppel Table II; Nielsen Tables III–IV; registry |

---

## Part 1. Multiple-choice questions (single best answer)

### Q1 (R). Reference standard

In Nguyen et al (2018), what served as the "regional implant" against which the candidate mandibular regions were tested for stability?

A. Tantalum implants placed in the symphysis before treatment, as in Björk's studies
B. Bone plates and screws already in place at the lower incisor apices, between the lateral incisor and canine, in 20 Class III bone-anchor patients, confirmed immobile clinically at T1 and T2
C. Orthodontic miniscrews placed in the retromolar region for the study
D. The anterior cranial base, registered by voxel matching
E. The mandibular canal, registered on its inferior border

**Answer:** B
**Rationale:** Methods p 749 and Fig 1: the plates were the patients' therapeutic Class III bone anchors, used as regional implants "analogous to the tantalum implants originally used by Björk"; immobility was confirmed clinically, with no radiographic check. The abstract's wording ("screws were placed in the anterior chin and symphysis regions") is loose; the Methods give the lateral-incisor/canine apices. The canal was excluded, not used.
**Tests:** Recall of the design and of what the reference standard actually was.

### Q2 (R). The Table

Which row correctly gives the absolute mean registration errors after superimposition on the plates and screws (Table, p 749)?

A. Chin 0.37 ± 0.16 mm; symphysis 0.40 ± 0.14 mm; third molar 1.94 ± 0.06 mm
B. Chin 1.94 ± 0.06 mm; symphysis 0.40 ± 0.14 mm; third molar 0.37 ± 0.16 mm
C. Chin 0.12 ± 0.11 mm; symphysis 0.12 ± 0.11 mm; third molar 0.25 mm
D. Chin 0.37 mm; symphysis 0.40 mm; third molar 0.30 mm, all within one voxel
E. Chin 0.30 mm; symphysis 0.30 mm; mandibular canal 1.94 mm

**Answer:** A
**Rationale:** Table p 749. The abstract and Results text print the symphysis SD as 0.15 mm; the Table prints 0.14 mm. Option C is the interobserver error from aim 2, not a stability error; option E names the canal, which was never measured.
**Tests:** Recall of the three headline numbers and which arm they belong to.

### Q3 (A). Voxel size and interpretation

Both scanners used 0.3 mm isotropic voxels. Which statement best describes the chin result of 0.37 ± 0.16 mm?

A. It is sub-voxel, so the chin showed no remodelling at all
B. It is about 1.2 voxels (derived), i.e. at the resolution limit of the method; remodelling smaller than roughly one voxel over the 12-month interval could not have been detected
C. It is statistically significant instability, because P = .765 exceeds .05
D. It is larger than the third-molar error and therefore unreliable
E. It equals the interobserver error, which proves the plates were stable

**Answer:** B
**Rationale:** Methods p 749 (voxel 0.3 mm) and the Table. Derived: 0.37 / 0.3 = 1.23 voxels; derived 95 % CI 0.30–0.44 mm. The Discussion's phrase that the chin and symphysis "have an accurate fit with 0.3 mm" is not what the Table shows; the honest reading is "about one voxel". Only the interobserver error (0.12 mm, derived 0.4 voxel) is genuinely sub-voxel.
**Tests:** Application of the resolution concept to a printed error; distinguishing precision from stability.

### Q4 (R). The reproducibility arm

Which set of values correctly describes aim 2?

A. 25 patients (10 Herbst, 10 Class II elastics, 5 Class III bone anchors); 12.7 ± 1.4 y; CVM 2–5; interval 12.6 ± 0.9 months; two independent observers registering T2 to T1 on the combined chin and symphysis; absolute mean interobserver error 0.12 ± 0.11 mm; ICC 0.998 (95 % CI 0.995–1.000)
B. 20 patients, all Class III; 12.1 ± 1.3 y; three observers; interobserver error 0.12 ± 1.1 mm
C. 25 untreated patients; 4-year interval; one observer twice; ICC 0.75
D. 25 patients; registration on the whole mandible; interobserver error 0.37 ± 0.16 mm
E. 18 patients selected on film quality; double determinations; second observer after brief instruction

**Answer:** A
**Rationale:** Methods p 750 and Results p 750. The abstract misprints the SD as 1.1 mm; the Results give 0.11 mm. Option B mixes the aim-1 sample with the abstract's typo; option D describes Koerich 2016 as the Introduction characterises it; option E is Nielsen 1989.
**Tests:** Recall of the second sample and its outcome; recognising the abstract misprint.

### Q5 (A). Björk's structures in 3D

Of Björk's 2D stable mandibular structures as the Introduction lists them, which one was excluded a priori from testing, and for what reason?

A. The third-molar crypt, because Ruellas 2016 had already shown it fails
B. The mandibular canal, because Björk (1963) and Krarup (2005) showed it changes with mandibular growth
C. The anterior chin, because the bone plates were too close to it
D. The inner cortex of the symphysis, because of metal artefact from the plates
E. The symphyseal trabecular pattern, because it cannot be segmented at 0.3 mm

**Answer:** B
**Rationale:** Methods p 749: "Superimposition using the contour of the mandibular canal was excluded" because it "changes with mandibular growth", citing refs 2 and 25. The crypt was tested and failed (1.94 mm); it was not excluded. The paper never raises artefact or segmentation limits for the symphysis.
**Tests:** Application: separating what was tested and rejected from what was never tested.

### Q6 (N). The proximity objection

The authors anticipated that plates sitting a few millimetres from the chin and symphysis, and far from the third molars, could flatter the near regions and inflate the crypt error. Which evidence did they offer, and what is its main weakness?

A. A plate-on-plate residual error of under 0.1 mm; weakness: reported only as a group mean
B. About 2 mm of deposition at menton (Fig 4 D), which is as close to the plates as the chin, and less error at the antegonial notch than at the crypt (Fig 5), which is as far from the plates as the crypt; weakness: both are read from single-subject colour maps with no numbers and no test
C. A second registration on the anterior cranial base; weakness: the cranial base is still growing at 12 y
D. An untreated control group; weakness: only 5 subjects
E. Repeat CBCT at T1 to measure plate migration; weakness: radiation dose

**Answer:** B
**Rationale:** Discussion p 753 presents exactly these two arguments. Neither the menton deposition nor the antegonial-notch error is tabulated; Fig 4's caption describes a symphysis registration rather than the plate registration the argument needs, its colour bar is saturated at +2.00 mm, and Fig 5's "significantly higher" vertical error is a visual claim. No plate-on-plate error, untreated group or cranial-base check exists in the paper.
**Tests:** Analysis of how a design flaw was addressed and whether the answer carries weight.

### Q7 (N). The P column

The Table prints P = .765 (chin), .698 (symphysis) and .0025* (third molar), with an SD of 0.06 mm on a mean of 1.94 mm for the third molar. Which statement is most defensible?

A. The P values show that the chin and symphysis were significantly stable
B. The P values come from a paired t-test of T1 against T2 surface positions
C. No test or null hypothesis is named; with n = 20, a t-test of 1.94 ± 0.06 mm against zero, against the 0.3 mm voxel, or against the chin would give a P value far below .0025 (derived), so the column cannot be the test its footnote implies; the stability conclusion therefore rests on effect size (about one voxel versus about six), not on inference
D. The asterisk shows the crypt differed from the chin by ANOVA with a Bonferroni correction
E. P > .05 for the chin proves that no remodelling occurred there

**Answer:** C
**Rationale:** Table footnote ("*Statistically significant") and Results p 750, which name only a Kolmogorov–Smirnov normality check. Derived: one-sample t for the crypt against zero ≈ 145 (P < 10⁻²⁸); chin against zero P < 10⁻⁸, not .765; against the voxel, chin P ≈ .07 and symphysis ≈ .005. The crypt's CV of 3 % beside 43 % for the chin, in a result the Discussion says varied with growth pattern, suggests either an SD misprint or a P column that is a normality test (derived hypothesis). A non-significant P never proves absence of remodelling (option E).
**Tests:** Analysis of an unexplained statistic; knowing what the conclusion actually rests on.

---

## Part 2. Short-answer questions

### Q8 (R + A). Björk's list against the 3D result (6 marks)

List the stable mandibular structures of Björk's 2D method as this paper cites them, and state for each what Nguyen et al found, with the number or the reason.

**Model answer:** Björk's structures (Introduction p 747, refs 1–5): (1) the inner cortical surface of the inferior border of the symphysis; (2) the anterior surface of the chin above pogonion; (3) the distinct symphyseal trabecular pattern with the trabecular structure related to the inferior alveolar canal; (4) the inferior contour of the developing third-molar germ before root development. Nguyen: the chin (pogonion to B point) fitted the plate registration to 0.37 ± 0.16 mm and the inner symphyseal cortex to 0.40 ± 0.14 mm (Table), both about one 0.3 mm voxel, so both were kept and merged into one registration field for aim 2; the canal was excluded before testing because it changes with growth (Björk 1963; Krarup 2005; Methods p 749); the crypt erred 1.94 ± 0.06 mm (P = .0025, test unnamed), derived 5.2 times the chin error, worst in vertical growers according to the Discussion (no data), and was rejected, in line with Ruellas 2016 as cited (16 of 18 failures). Net result: two of Björk's four structures survive for 3D voxel registration.

**Marking points:** 1 mark for each of the four Björk structures correctly named (4); 1 mark for chin and symphysis values with the voxel context; 1 mark for the crypt value and the canal exclusion with its reason. Bonus credit for noting that the crypt's developmental stage was not reported, so Björk's "before root development" condition was not actually tested.

### Q9 (N). Limits of the stability claim (4 marks)

A colleague says: "Nguyen proved the chin and symphysis are stable in growing patients." Give four limitations of that claim, one sentence each, with a number or a section reference for each.

**Model answer (any four):**
- The reference standard was checked only clinically: the plates were "confirmed to be immobile at T1 and T2 clinically" (Methods p 749), with no radiographic check and no plate-on-plate residual, while being loaded by Class III elastics for about a year.
- The stability sample was 20 Class III bone-anchor patients under treatment (T1 12.1 ± 1.3 y), with no untreated subjects, no sex distribution and no CVM stage reported; the result is generalised to "growing patients".
- The interval was about 12 months, so a true remodelling rate of up to about 0.3 mm a year, one voxel, would be indistinguishable from registration noise; Björk's structures were followed for up to 25 years (ref 5).
- The Table's P values have no named test and the crypt's SD of 0.06 mm is incompatible with any ordinary test giving P = .0025 (derived), so there is no valid inferential support; the conclusion rests on effect size alone.
- The plates sit a few millimetres from the chin and symphysis, so proximity bias favours those regions; the paper's answer (2 mm at menton, Fig 4 D; antegonial notch, Fig 5) is single-subject and untabulated.
- Segmentation error, metal artefact and n per region are not reported; the crypt row may rest on fewer than 20 subjects.
- Selection was from "previous research and clinical databases" with exclusions for syndromes, asymmetry and motion artefact, so these are the best-imaged cases and the errors are lower bounds.

**Marking points:** 1 mark per distinct limitation with its number or section (maximum 4). No credit for "small sample" without a reason, since the sample-size calculation (for aim 2) is stated.

### Q10 (A). The precision chain, 2D to 3D (5 marks)

Using numbers from the three papers in this session, explain why a 2D cephalometric regional superimposition cannot establish a 0.3 mm difference in molar vertical position between two treatment groups over a few months, and what a 3D voxel registration could resolve. Illustrate with the registry example of Khaleel 2026, whose upper posterior teeth moved 0.28–0.42 mm in the elastics group against 0.07–0.15 mm in the other arms (registry).

**Model answer:** Doppel 1994 measured 2D tracing error at 0.5 mm (duplicate tracings of 10 films ± 0.25 mm; Thurow), and even the best maxillary structures deviated 0.95–0.97 mm from implants over 4.2 y (Table II). Nielsen 1989 found landmark SDs of 0.5–2.9 mm and interobserver differences of 0.5–0.9 mm vertically at ANS and the incisors for the structural method (Tables III–IV), with the superimposition itself adding a systematic 0.5 mm horizontal offset and a palatal best fit hiding 1.1–2.2 mm of vertical change over 4 y. So any 2D between-group difference under about 0.5 mm, such as Khaleel's 0.2–0.35 mm, lies inside the tracing error, regardless of the registration chosen (corpus axis at Pm with Springate and Jones 1998 reporting errors of 4 mm or more in about 10 % of children; registry). Nguyen 2018 replaces landmarks with thousands of voxels: two observers agreed to 0.12 ± 0.11 mm (ICC 0.998), the voxel is 0.3 mm, and the regional stability error is 0.37–0.40 mm per year. A 3D registration can therefore resolve differences of roughly 0.1–0.4 mm, about a quarter of the 2D limit, but only in patients who already have paired CBCTs, over one-year intervals, and only for structures validated against plates checked clinically.

**Marking points:** 1 mark for the 0.5 mm tracing error (Doppel); 1 for the Nielsen interobserver or bias numbers; 1 for the 0.12 mm / 0.3 mm voxel figures (Nguyen); 1 for the correct conclusion about Khaleel's 0.2–0.35 mm differences; 1 for the caveat that 3D precision does not come free (dose, stability per year, treated samples).

---

## Part 3. Case-based oral defence

### Q11 (A + N). "Show me how you would superimpose this case and tell me what could fool you."

**Case:** A 12-year-old boy, Class II division 1, CVM 3, treated with a Herbst appliance. A CBCT was taken before treatment for an impacted upper canine and a second CBCT 12 months later for the same reason. The consultant wants to know how much of the Class II correction was mandibular growth and how much was tooth movement.

**Examiner: "Walk me through the registration."**
Model answer: Orient the T1 volume to Frankfort horizontal in a known coordinate system (Methods p 750). Segment both mandibles by automated thresholding with manual refinement (Slicer CMF Intensity Segmenter, ITK-SNAP Active Contour). Roughly approximate T2 onto T1, then run the automated voxel-based registration on one combined field: the anterior chin from pogonion to B point, laterally to the distal-incisal points of the lateral incisors, plus the inner cortex of the lingual symphysis from the inferior border to the centre of the mental foramina (Methods p 749). Build surface models and compute the absolute mean surface distance and a signed colour map (Model to Model Distance, Mesh Statistics). Do not include the canal, the crypts, the alveolar process, the rami or the condyles in the registration field.

**Examiner: "Why that region and not the whole mandible?"**
Model answer: Because the reference must be bone that does not remodel over the interval. Against plate registration the chin erred 0.37 ± 0.16 mm and the symphysis 0.40 ± 0.14 mm, about one 0.3 mm voxel, while the third-molar crypt erred 1.94 ± 0.06 mm (Table); the canal changes with growth (Krarup 2005); the ramus resorbs anteriorly and deposits posteriorly (Fig 6), and the lower border near menton deposits about 2 mm (Fig 4 D). Whole-mandible registration (Koerich 2016, as cited) averages growth into the reference and hides it. Merging chin and symphysis gives the largest stable surface, which Ruellas 2016 (as cited) found reduces error.

**Examiner: "What error do you expect, and how would you check your own registration?"**
Model answer: Two independent observers in 25 patients like this one (10 Herbst among them) agreed to 0.12 ± 0.11 mm, ICC 0.998 (95 % CI 0.995–1.000). I would have a second person register independently and overlay the two T2 models; in the paper's single illustrated case the whole mandible agreed within 0.25 mm and 75 % of the surface within 0.12 mm (Figs 7–8; the Fig 8 A label misprints 0.025 mm). Anything under 0.3 mm on the colour map is at or below the voxel and should be read as noise, not as remodelling.

**Examiner: "Now tell me what could fool you."**
Model answer, in order of likelihood:
1. Drawing the region too high. The chin region reaches B point, which is alveolar bone that follows the lower incisors; a Herbst proclines them, so the upper edge of the region may remodel and drag the fit. I would check the colour map for a gradient within the region and trim it below B point if there is one.
2. Reading voxel noise as biology. The 0.3 mm voxel means the stability errors themselves are about one voxel; a colour difference of 0.2 mm anywhere is not a finding.
3. Different scanners or settings at T1 and T2. The paper used the same machine for both scans of each patient; mixing an i-CAT with a NewTom, or different voxel sizes, changes the grey-scale the registration relies on.
4. Motion or metal artefact. The paper excluded double images; the Herbst and brackets will streak across the arch, so segmentation of the alveolar region may differ between T1 and T2 even if the symphysis is clean.
5. Mistaking growth rotation for condylar growth direction. On a symphysis-based regional superimposition the condyle and ramus move relative to the chin block; internal rotation (Proffit Ch 4 [6th p88]: up to 10–15° internal, 2–4° at the mandibular plane) shows up there, and with a Herbst in place I cannot separate appliance effect from growth without an untreated comparison, which the paper also lacked.
6. Trusting errors far from the reference. Error grows with distance; Koerich 2017 (literature) found ramus errors of 1–1.3 mm in some growing patients even with a symphysis-based field, so condylar numbers deserve wider error bars than symphyseal ones.
7. Assuming stability beyond the evidence. The chin and symphysis were shown not to move more than a voxel over about 12 months in treated 12-year-olds, in Class III patients; a four-year interval, or an adult, is outside the data.
8. Sign conventions. The signed maps run −2.00 to +2.00 mm and the paper never states which sign is outward; I would verify with a known apposition site (the inferior symphysis) before calling anything resorption.

**Examiner: "How would you separate the Herbst effect from growth?"**
Model answer: Two superimpositions. A cranial-base voxel registration (Cevidanes 2005–2009, refs 16–18) gives total change of the mandible relative to the cranium; the regional chin-plus-symphysis registration gives tooth movement and remodelling within the mandible; the difference is skeletal displacement plus condylar growth. Even then, growth and appliance effect can be separated only against untreated or differently treated controls (Proffit, study pages: Herbst skeletal effect is read against untreated Class II growth; exact figures not quoted here).

**Examiner: "And if you only had two cephalograms?"**
Model answer: Björk's structural method on the inner cortex of the symphysis and the anterior chin contour, with the canal and a pre-root third-molar crypt as 2D aids (the ABO list; literature), never the lower border, which deposits about 2 mm near menton (Fig 4 D), and not the Ricketts corpus axis, whose Xi point sits in remodelling ramus bone and which Springate and Jones 1998 found to err by 4 mm or more in about 10 % of children at molars and incisors (registry). Expect a tracing error of about 0.5 mm (Doppel 1994) and say so when reporting sub-millimetre tooth movements.

**Examiner: "Would you order the second CBCT for this purpose?"**
Model answer: No. Proffit's four evidence-based CBCT indications (impacted or ectopic teeth; asymmetry and complex surgery; congenital deformities, syndromes and trauma; hard-tissue TMJ) do not include growth monitoring, and a jaws-plus-cranium CBCT is about 0.15 mSv against 0.005 mSv for a cephalogram (Proffit Ch 6, study pages; check the chapter). In this case the scans exist for the canine, so the superimposition costs nothing extra; that is the setting the paper's own sample came from ("previous research and clinical databases").

---

## Answer key table

| Q | Type | Tag | Answer | Tests |
|---|---|---|---|---|
| 1 | MCQ | R | B | reference standard: therapeutic bone plates at the incisor apices in 20 Class III patients, checked clinically |
| 2 | MCQ | R | A | Table values 0.37 ± 0.16, 0.40 ± 0.14, 1.94 ± 0.06 mm |
| 3 | MCQ | A | B | 0.37 mm is about 1.2 voxels: resolution limit, not proof of no remodelling |
| 4 | MCQ | R | A | aim-2 sample, 0.12 ± 0.11 mm (abstract misprint 1.1), ICC 0.998 |
| 5 | MCQ | A | B | canal excluded a priori (Björk 1963; Krarup 2005); crypt tested and failed |
| 6 | MCQ | N | B | proximity objection answered with single-subject colour maps (Figs 4 D, 5) |
| 7 | MCQ | N | C | P column has no named test; conclusion rests on effect size |
| 8 | Short | R + A | see model | Björk's four structures vs Nguyen's two; 6 marks |
| 9 | Short | N | see model | four limitations of the stability claim; 4 marks |
| 10 | Short | A | see model | precision chain 0.5 mm (2D) to 0.12 mm (3D); Khaleel example; 5 marks |
| 11 | Oral | A + N | see model | registration steps, region choice, error check, eight ways to be fooled, growth vs appliance, 2D fallback, CBCT indication |
