# Critical appraisal — Nguyen 2018

Nguyen T, Cevidanes L, Franchi L, Ruellas A, Jackson T. Three-dimensional mandibular regional superimposition in growing patients. *Am J Orthod Dentofacial Orthop* 2018;153(5):747-754. DOI 10.1016/j.ajodo.2017.07.026. Published in the Techno Bytes section (a technique-report format, not a full original article). University of North Carolina at Chapel Hill (Nguyen, Jackson) with Michigan (Cevidanes, Franchi), Florence (Franchi) and the Federal University of Rio de Janeiro (Ruellas). IRB #12-1496; NIDCR DE027950-01 and AAOF funded; ICMJE forms submitted, no conflicts reported. Submitted March 2017, accepted July 2017.

Numbers below come from the single Table (p. 749) and the figures as printed (page images), which take precedence over the abstract where the two disagree. Recomputations are mine, assume n = 20 per region in aim 1 and n = 25 in aim 2 because the paper never states n per region, and are labelled "derived" (script: `checks.py` in this folder). Where I lean on the research notes (other studies, textbook positions) I say so.

## Verdict in three lines

1. **Design label:** two linked retrospective measurement-validation analyses of archived longitudinal CBCT pairs. Aim 1 is a stability (validity) test of three candidate mandibular regions against bone-anchor plates in 20 Class III patients over about 1.2 y; aim 2 is an interobserver reliability test of the combined chin + symphysis registration in 25 treated adolescents over 12.6 months. No intervention, no clinical outcome, no untreated subjects.
2. **Level of evidence for a methods study:** this belongs in a diagnostic-accuracy / measurement framework, not a treatment hierarchy. By Oxford CEBM 2011 for diagnosis it sits at about Level 3-4 (non-consecutive convenience sample, reference standard not independently validated, selection not described). My grading of confidence: *moderate* for the reliability claim (0.12 ± 0.11 mm, ICC 0.998, two observers, n = 25); *low* for the stability claim (chin 0.37, symphysis 0.40 mm) because the reference standard is unvalidated and biased by proximity; *low* for the third-molar figure (1.94 ± 0.06 mm) because its SD and P value do not fit each other.
3. **The one thing that limits it most:** the gold standard. It is a loaded Class III bone anchor screwed to parasymphyseal alveolar bone, judged stable "clinically", sitting a few millimetres from the two regions it certifies and 30-40 mm from the one it rejects. The paper's two answers to that proximity objection (Fig 4 D and Fig 5) are single-subject colour maps with no tabulated numbers, and the caption of Fig 4 says it was registered on the symphysis, not on the plates.

## Study question

| | The paper says |
|---|---|
| **Aim 1 (validity)** | Which of three 2D-derived regions (anterior chin from pogonion to B point; internal symphyseal cortex from the inferior border to the mental foramina; inferior contours of the third-molar germs) stays put relative to bone plates and screws over ≈ 1 y in 20 growing Class III patients? Outcome: absolute mean surface distance between T1 and T2 models after registration on the plates (Table). |
| **Aim 2 (reliability)** | When two observers independently register T2 to T1 on the combined chin + symphysis field in 25 growing patients, how far apart are their results? Outcome: absolute mean surface error between the two T2 registrations over the whole mandible; ICC. |
| **Reference standard** | Bone plates and screws placed for Class III treatment "around the apex of the incisors between the lateral incisor and canine" (Fig 1), used as "regional implants analogous to the tantalum implants" of Björk; "confirmed to be immobile at T1 and T2 clinically" (Methods p749). |
| **Hypothesis** | Not stated as a null. Implicitly: regions with error at or near the 0.3 mm voxel are stable; regions well above it are not. |
| **Why it matters** | Björk's mandibular structures (chin, inner symphysis, symphyseal trabeculae with the canal, third-molar germ before roots) were validated in 2D with tantalum implants that cannot be placed today (ALARA, IRB). Earlier 3D mandibular studies either used the whole mandible in non-growing patients (Koerich 2016, as characterised by the paper) or had no external reference (Ruellas 2016). |

My read: the question is the right one and the design logic is sound; a stability test needs an external metal reference and a reliability test needs independent observers, and the paper does both. The weakness is not the question but what the reference can bear.

## Design, sample and selection (direction of bias)

**Source and screening.** CBCT scans "derived from previous research and clinical databases" (Methods p749). Exclusions: craniofacial syndromes, "significant asymmetric growth", motion-artefact scans. How many were screened, how many excluded and how the 20 and the 25 were chosen are not reported. The other two papers in this topic select the same way (Doppel 1994: 50 of ≈ 700 implant records; Nielsen 1989: 18 of 35 on film quality), so the errors reported across the topic are lower bounds for routine records.

| Sample | What the paper says | Direction of bias |
|---|---|---|
| Aim 1, n = 20 | All Class III bone-anchor patients; T1 12.1 ± 1.3 y, T2 13.3 ± 1.1 y; interval ≈ 1.2 y (derived); no sex, no CVM, no n per region | A single growth phenotype (prognathic mandible, often vertical growers) under Class III elastic load on the plates. Stability found here is generalised to "growing patients". If anything, Class III mandibles remodel more at the chin, which works against the paper; but the proximity of plates to chin works for it |
| Aim 2, n = 25 | 10 Herbst, 10 Class II elastics, 5 Class III bone anchors; 12.7 ± 1.4 y; CVM 2-5; 12.6 ± 0.9 months | 80 % Class II under appliances that load the mandible; CS5 cases are post-peak. Reproducibility is measured on the best-imaged cases of a single workflow, by two observers who started from the same observer-1 orientation of T1 |
| Overlap | Not stated whether the 5 Class III patients in aim 2 are 5 of the 20 in aim 1 | If they are, 5 of 25 reliability cases have metal in or beside the registration field (artefact; non-independence) |
| Untreated subjects | None in either aim | No paper in this topic validates a structure under growth alone; Björk's own series was mixed |
| Growth stage | CVM 2-5 given for aim 2 only; none for aim 1 | The sample where growth stage matters most (stability) is unstaged; a region that moves less than a voxel in one year at 12-13 y is "stable over one year", not "stable through growth" |
| Third-molar crypts | n per region not given; developmental stage not given | Björk's criterion was "before root development"; at 12-13 y some crypts will be past it, so the 1.94 mm may partly test a structure Björk would not have used |

**Sample size.** The only calculation is for aim 2: a two-way random ICC with ρ0 = 0.75, ρ1 = 0.95, α = .05, power .80, two raters, giving "25 subjects". No formula or citation. My recomputation with the Walter, Eliasziw & Donner 1998 formula for two raters gives n ≈ 9 (one-sided α) to 12 (two-sided); a Fisher-z approximation gives 11-14. Twenty-five is about double and is also exactly the number of scans available. For aim 1 there is no calculation at all.

**Attrition.** Not applicable (archived pairs); but the absence of a flow statement means the reader cannot tell what fraction of eligible scans the 20 and 25 represent.

## The "gold standard" and its own error

- **Clinical immobility is not positional stability.** Björk's tantalum pins were small, intraosseous, placed in basal bone and checked radiographically for migration over years. Nguyen's plates sit on the alveolar surface at the lateral-incisor/canine apices (Fig 1), carry Class III elastics for the whole interval, and lie in alveolar bone that remodels with eruption and tooth movement. A plate that feels firm can still have moved with the bone it is screwed to. No radiographic check of plate position, no plate-on-plate residual after registration, and no estimate of the plates' own contribution to the error are reported. Fan 2023 (literature, VERIFIED abstract) did the equivalent for maxillary mini-screws and confirmed screw stability on the scans first.
- **Proximity bias.** The plates are millimetres from the chin and symphysis and 30-40 mm from the crypts. Any rotational error in the plate registration grows with distance, so the design is structurally inclined to make near regions look stable and far regions unstable. The authors state the objection and answer it twice: menton remodels ≈ 2 mm despite being near the plates (Fig 4 D), and the antegonial notch does not show crypt-sized error despite being far (Fig 5). Both are single-subject colour maps, neither is quantified, and the Fig 4 caption says the registration was on the symphysis, which would make the symphysis fit partly circular.
- **Metal artefact.** Titanium plates and screws streak in CBCT; the registration volumes are the plates themselves and the scored regions are adjacent. No artefact handling is described.
- **Voxel size 0.3 mm** (i-CAT or NewTom 3G; same machine for T1 and T2 within a subject). Every number must be read against it: chin 1.23 voxels and symphysis 1.33 voxels (derived), interobserver 0.40 voxel (derived). The Discussion's "accurate fit with 0.3 mm" overstates the Table; derived 95 % CIs are 0.30-0.44 mm for the chin and 0.33-0.47 mm for the symphysis.
- **Segmentation.** Automated thresholding in Slicer CMF plus manual refinement in ITK-SNAP; the error of segmentation, which feeds directly into a surface-distance metric, is not measured. The 2D equivalent in this topic is Doppel's 0.5 mm tracing error; this paper has no equivalent figure.
- **Interobserver error is algorithm convergence.** Both observers registered from the same T1 oriented by observer 1; the manual step is only the rough approximation before automated voxel registration. Sub-voxel agreement therefore shows the software converges on the same solution from similar starts, not that the anatomy is known to 0.12 mm.
- **Scanner settings** printed as 5 mA, 12 kV(p), 20-25 s; 12 kVp is a misprint for about 120 kVp (literature, UNVERIFIED).

## Measurement and statistics

**Metric.** Absolute mean surface error (Slicer Model to Model Distance + Mesh Statistics), direction ignored, chosen over RMS because RMS weights outliers. Sensible for detecting small systematic misfits. Not defined as a formula: point-to-surface or surface-to-surface, averaged over T1 or T2 vertices, is not stated; the sign convention of the −2.00 to +2.00 mm displacement maps (Figs 4, 7) is not stated either.

**What was run.** Kolmogorov-Smirnov normality (all regions, result "confirmed"); one P value per region in the Table (0.765, 0.698, 0.0025*, footnote "Statistically significant"); a two-way random ICC for aim 2 (0.998, 95 % CI 0.995-1.000), reported in Methods rather than Results.

**What the Table P values cannot be (derived).** With n = 20 and the printed means and SDs:

| Region | Mean ± SD (Table) | CV | 95 % CI | t vs 0 (P) | t vs 0.3 mm voxel (P) | Welch t vs chin (P) |
|---|---|---|---|---|---|---|
| Chin | 0.37 ± 0.16 | 43 % | 0.30-0.44 | 10.3 (3 × 10⁻⁹) | 1.96 (.065) | — |
| Symphysis | 0.40 ± 0.14 | 35 % | 0.33-0.47 | 12.8 (9 × 10⁻¹¹) | 3.19 (.005) | −0.63 (.53) |
| Third molar | 1.94 ± 0.06 | 3.1 % | 1.91-1.97 | 145 (2 × 10⁻³⁰) | 122 (< 10⁻²⁸) | 41.1 (6 × 10⁻²⁴) |

None of these reproduces 0.765 / 0.698 / 0.0025. The third-molar SD of 0.06 mm (CV 3 %) beside 0.16 and 0.14 mm for the other regions is implausible on its own, and it contradicts the Discussion's statement that the crypt error was larger in vertical growers (between-subject variation). Either the SD is a misprint or the P column is not a test of registration error; the one reading that fits all three values is the per-region Kolmogorov-Smirnov normality P value mentioned in the next sentence, under which the asterisk would flag non-normality rather than instability. The paper does not say, so the only inferential statistic in aim 1 has no stated test and no stated null hypothesis. The stability conclusion therefore rests on effect size, which is honestly the stronger argument: 1.2-1.3 voxels for the chin and symphysis against 6.5 voxels for the crypt (derived ratio 5.2 : 1).

**What was not tested.** No direct comparison chin vs symphysis vs crypt; no CI for any region; no range or maximum; no per-subject data; no Bland-Altman or limits of agreement between observers; no intra-observer repeat in either aim; no repeat of aim 1 by a second observer or session; no test of the plate registration itself.

**The ICC.** A two-rater ICC needs two measurements of one variable per subject; the only interobserver outcome described is the surface distance between the two registrations, one number per subject. The variable correlated is never named. The CI upper bound of 1.000 shows the coefficient is at the ceiling of what the metric can display. The sample-size claim (25) is unreproducible with the standard formula (see above).

**Interobserver error (aim 2).** 0.12 mm, SD 0.11 mm (Results); the abstract prints 0.12 ± 1.1 mm, a dropped zero. Derived: SEM 0.022 mm, 95 % CI 0.075-0.165 mm; mean + 2 SD = 0.34 mm, above the 0.3 mm voxel, so the Results' claim that the range "fell below the threshold of measurement" cannot be checked and is not obviously true. The "< 0.25 mm over the entire surface" and "within 0.12 mm for 75 %" figures are from one subject (Figs 7-8), and the Fig 8 panel A label reads "> 0.025mm" against the caption's 0.25 mm.

**Multiplicity.** Three region P values, no correction; irrelevant in practice because the test is undefined. The ICC is a single coefficient.

**Single-subject evidence used as group evidence.** Fig 4 D (≈ 2 mm deposition at menton, read off a saturated −2 to +2 mm map), Fig 5 ("significantly higher" crypt error vs the lower border; no lower-border error was ever tabulated), Figs 7-8 (whole-mandible reproducibility). Each is one patient; each is cited in the Discussion as if it were a result.

**Text-versus-table and text-versus-figure conflicts** (all confirmed on the page images; full list in `conflicts.md` section A): symphysis SD 0.15 (abstract, text) vs 0.14 (Table); interobserver SD 1.1 (abstract) vs 0.11 (Results); "fit with 0.3 mm" (Discussion) vs 0.37 / 0.40 (Table); Fig 8 A label 0.025 vs caption 0.25 mm; Fig 8 B label "> 0.12" vs caption "less than 0.12"; ramus resorption cited to Fig 4 (which shows the symphysis) instead of Fig 6; abstract says screws "were placed in the anterior chin and symphysis" whereas Methods place therapeutic plates at the lateral-incisor/canine apices; Ruellas 2016 quoted as "16 of 18" failures where the paper reports 14 of 16 (literature, VERIFIED full text).

## Generalisability

**Who this applies to (the paper's samples):** treated adolescents of roughly 11-14 y (derived from mean ± SD), Class III under bone-anchored protraction (aim 1) or Class II under Herbst or Class II elastics plus a few Class III (aim 2), with paired CBCT at 0.3 mm voxels on the same machine about one year apart, registered in the Slicer CMF / ITK-SNAP pipeline by trained observers.

**Who it does NOT apply to:**
- Untreated growth: every subject was under orthopaedic or orthodontic load; the chin and symphysis are declared stable under treatment, not under growth alone.
- Intervals longer than about a year, or the whole adolescent growth period: Björk's structures were followed for up to 25 years (literature); Chen 2020 extends the chin and inner symphysis to 4.6 y (literature, VERIFIED) but without a metal reference.
- Adults, Class I, pre-adolescents, craniofacial patients and asymmetric growers (the last two were excluded, so the Introduction's claim that 3D allows asymmetry assessment is untested here).
- Routine progress records: paired CBCT carries an effective dose far above two cephalograms (Proffit's figures: 0.1-0.15 mSv per jaws or jaws + cranium scan vs 0.005 for a cephalogram; study pages). The authors invoke ALARA to explain why implants cannot be repeated; it applies equally to serial CBCT. This is a research tool and a selected-case tool.
- Other software: the pipeline is Slicer CMF plus ITK-SNAP with a manual rough approximation; Huang 2026 (literature, VERIFIED abstract; Nguyen co-author) found regional registrations differ by up to 1.7 mm between workflows.
- The mandibular canal: excluded, not tested; whether it would pass in profile in 3D, as it does in 2D (Gu & McNamara 2008; Krarup 2005), is unknown from this paper.
- The third-molar crypt before root formation: Björk's condition was never confirmed for these 12-13-year-olds.

## Internal validity checklist

STARD / GRRAS-style items for a measurement-validation and reliability study.

| Item | Met? | Comment |
|---|---|---|
| Design stated in title and abstract | Partly | Title says growing patients; abstract describes aim 1 as plates and screws "placed in the anterior chin and symphysis" and omits that all 20 were Class III bone-anchor patients |
| Setting, dates, ethics | Partly | UNC databases; IRB #12-1496; scan dates not given |
| Eligibility and selection described | No | Exclusions listed; numbers screened, excluded and how the 20 and 25 were chosen not reported |
| Reference standard described | Partly | Plates at the lateral-incisor/canine apices (Fig 1); stability "confirmed clinically"; no radiographic check, no residual |
| Reference standard independent of the index regions | No | Plates lie in the parasymphyseal alveolus beside the chin and symphysis; proximity acknowledged, answered with single-subject figures |
| Index regions defined a priori | Yes | Three regions with anatomical limits (Methods p749); canal excluded with a stated reason |
| Blinding | Not stated | Observers in aim 2 "independent"; experience and author status not stated; aim 1 operator not named |
| Measurement metric defined | Partly | Absolute mean surface error defined in words, not as a formula; map sign conventions not stated |
| Voxel size and resolution reported | Yes | 0.3 mm, both scanners; scanner settings carry a misprint (12 kVp) |
| Segmentation error reported | No | Not measured |
| Statistical test named for the Table | No | P values with no test and no null hypothesis; SD 0.06 incompatible with P = .0025 on any standard test (derived) |
| Confidence intervals for the region errors | No | Derived here: chin 0.30-0.44, symphysis 0.33-0.47, crypt 1.91-1.97 mm |
| Sample size justified | Partly | Aim 2 only; formula uncited and not reproducible (standard formula gives 10-12, derived); none for aim 1 |
| n per region reported | No | Table gives means and SDs only |
| Repeatability (intra-observer) | No | None in either aim |
| Reproducibility (inter-observer) | Yes | 0.12 ± 0.11 mm, ICC 0.998; variable entered into the ICC undefined |
| Limits of agreement / Bland-Altman | No | ICC only |
| Range or maximum error | No | "Range fell below" the voxel asserted, never shown; mean + 2 SD = 0.34 mm (derived) |
| Independence of the two samples | Not stated | Overlap of the 5 Class III patients in aim 2 with the 20 of aim 1 unknown |
| Growth stage reported | Partly | CVM 2-5 for aim 2; none for aim 1 |
| Claims matched to data | Partly | "Fit with 0.3 mm", "significantly higher" crypt vs lower border, "approximately 2 mm" at menton, "< 0.25 mm whole surface" all rest on single-subject figures or overstate the Table |
| Internal consistency of reported numbers | No | Abstract SDs (1.1; 0.15) vs Results/Table (0.11; 0.14); Fig 8 label vs caption; Fig 4 cross-reference |
| Citations accurate | Partly | Ruellas 2016 misquoted (16 of 18 for 14 of 16); Koerich 2016 characterised beyond its abstract; ref 16 mis-paginated (literature) |
| Funding and conflicts | Yes | NIDCR, AAOF; ICMJE forms, none reported |
| Limitations discussed | Partly | Proximity objection discussed; sample, reference validation, interval length and treatment loading not |

## Strengths

- The first 3D voxel-based study to use an in-situ metallic reference (bone anchors) as a surrogate for Björk's implants, which is the only ethical route to an implant-type reference today, and it addresses validity (aim 1) and reliability (aim 2) together, which Koerich 2016 and Ruellas 2016 did not.
- Candidate regions were pre-specified from the 2D implant literature with explicit anatomical limits, and the canal was excluded a priori with a cited reason (Björk 1963; Krarup 2005) rather than dropped after the fact.
- Voxel-based registration uses thousands of voxels rather than a handful of landmarks and is automated after the rough approximation, removing the landmark-identification and tracing errors that dominate Doppel 1994 (0.5 mm) and Nielsen 1989 (0.5-0.9 mm between observers at ANS and the incisors).
- Absolute mean surface error is a sensible choice over RMS for detecting small systematic misfits, and the choice is justified in the text.
- The observed remodelling pattern on the chosen registration (stable pogonion, deposition at the inferior symphysis, anterior ramus resorption, posterior deposition) reproduces Björk & Skieller 1983 and Enlow & Harris 1964, which is face validity.
- Same scanner and voxel size for T1 and T2 within each subject; two independent observers for aim 2; a sample-size argument was at least attempted; IRB, funding and conflicts declared.
- The effect sizes are large enough to survive the statistical problems: 1.2-1.3 voxels for the chin and symphysis against 6.5 voxels for the crypt is not a marginal result.
- The conclusions are modest and match the data: two regions stable over one year, registration on them reproducible.

## What would have made it better

- Validate the reference: compare plate position on T1 and T2 volumes (or register plate-to-plate and report the residual), and report any case where a plate had moved; state the elastic force on the plates.
- Report n per region, the developmental stage of each crypt, CVM for the aim-1 sample, sex, and a flow statement from database to final samples; say whether the 5 Class III patients of aim 2 are among the 20 of aim 1.
- Name the test behind the Table, state its null hypothesis, report CIs, ranges and maxima for every region, and compare the regions directly; check the third-molar SD.
- Quantify the proximity argument instead of illustrating it: tabulate the error at the antegonial notch, the lower border, the posterior ramus and the condyle across all 20 subjects, so error can be plotted against distance from the plates.
- Register Fig 4 on the plates (or say so), and report menton remodelling as a group number with a direction convention.
- Define the ICC variable, cite the sample-size formula, add intra-observer repeats, Bland-Altman limits of agreement and the segmentation error; report the per-subject interobserver maxima rather than one subject's maps.
- Add untreated subjects, Class I and longer intervals (2-4 y) so that "stable" means stable through growth rather than over one year; test the canal in profile rather than excluding it.
- Proof the abstract and figures against the Results (0.12 ± 0.11; symphysis SD; Fig 8 thresholds; plate location; Fig 4 vs Fig 6; Ruellas 14 of 16).

## Journal-club one-liners

1. The plates are the gold standard, but the only evidence they did not move is that they felt firm; Björk checked his pins on the films for years.
2. Chin 0.37 and symphysis 0.40 mm are about one voxel, not "within 0.3 mm" as the Discussion says; the honest phrase is "at the resolution limit", which is still a good result.
3. A third-molar SD of 0.06 mm would give a P value with twenty-plus zeros, not 0.0025; either the SD or the P column is something other than what the footnote says, and the paper never names the test.
4. An ICC of 0.998 needs two ratings of one variable per patient, and the paper never says what that variable was.
5. The 0.25 mm whole-mandible and 75 %-within-0.12 mm figures come from one patient in Figures 7 and 8, whose panel A is labelled 0.025 mm.
6. The two answers to "the plates are next to the chin" are a colour map of one subject registered on the symphysis and a colour map of one subject with no number on it.
7. Everything here was validated under Class III elastics or a Herbst for about twelve months; there is no untreated mandible, no Class I and no interval longer than a year in the paper.
8. This does not discover new stable structures; it confirms Björk's chin and inner symphysis in 3D and retires the third-molar crypt and the canal.
9. Quote 0.12 ± 0.11 mm from the Results and 0.37 / 0.40 / 1.94 mm from the Table; the abstract prints 1.1 and 0.15 and puts the screws in the wrong place.
10. For the exam: Björk 2D = chin, inner symphyseal cortex, canal, crypt before roots; Nguyen 3D = chin + symphysis only, crypt fails at 1.94 mm, canal excluded a priori; Springate 1998 and Baumrind 1992 say the same thing about distance from the core in 2D.
