# Key numbers — Nguyen 2018 (3D mandibular regional superimposition on bone plates)

All values are from the paper unless marked "derived" (computed here from printed values) or tagged (literature), (Proffit), (registry). Page numbers are journal pages 747-754. The single results table (unnumbered, p. 749) was checked against the page image; figure labels against the images of pp. 748 and 750-752. Where the abstract, text and Table disagree, every printed value is given and the Table is treated as primary.

## Top 10 numbers to memorise

| Number | What it is | Why it is exam-worthy |
|---|---|---|
| 0.37 ± 0.16 mm | Chin absolute mean surface error after T2-to-T1 registration on bone plates (Table, p. 749) | The headline stability number; about 1.2 voxels (derived) |
| 0.40 ± 0.14 mm | Symphysis error (Table; abstract and Results text print 0.4 ± 0.15) | "Almost identical" to the chin, so the two were merged for aim 2 |
| 1.94 ± 0.06 mm, P = .0025 | Third-molar crypt error (Table; the only starred P value; test never named) | The Björk structure that fails in 3D; 5.2 × the chin error (derived) |
| 0.12 ± 0.11 mm | Interobserver error of chin + symphysis registration, 25 patients (Results, p. 750) | The abstract misprints it as 0.12 ± 1.1 mm; quote the Results |
| ICC 0.998 (95 % CI 0.995-1.000) | Interobserver reliability (printed in Methods, p. 750) | Two-way random model; the variable correlated is not defined |
| 0.3 × 0.3 × 0.3 mm | Voxel size, i-CAT and NewTom 3G | Every error must be read against it; "range fell below" it is claimed, not shown |
| 20; 12.1 ± 1.3 → 13.3 ± 1.1 y | Aim-1 sample: Class III bone-anchor patients, T1 and T2 ages | All treated, all Class III; interval about 1.2 y (derived) |
| 25; 12.7 ± 1.4 y; CVM 2-5; 12.6 ± 0.9 months | Aim-2 sample: 10 Herbst, 10 Class II elastics, 5 Class III anchors | n = 25 came from an ICC sample-size calculation (ρ0 0.75 vs ρ1 0.95, α .05, power .80) |
| < 0.25 mm; 75 % within 0.12 mm | Whole-mandible interobserver error in one subject (Discussion; Figs 7-8) | Single case, often quoted as if it were the group result; Fig 8A label misprints 0.025 mm |
| ≈ 2 mm | Deposition near menton on the plate registration (Fig 4D, read off a colour map) | The paper's answer to "the plates are too close to the chin"; no tabulated value |

## Study identity

| Item | Value |
|---|---|
| Citation | Nguyen T, Cevidanes L, Franchi L, Ruellas A, Jackson T. Three-dimensional mandibular regional superimposition in growing patients. Am J Orthod Dentofacial Orthop 2018;153(5):747-754 |
| DOI | 10.1016/j.ajodo.2017.07.026 |
| Journal section | Techno Bytes (technique report, not a full original article) |
| Submitted / accepted | March 2017 / revised and accepted July 2017 |
| Institutions | UNC Chapel Hill (Nguyen, Jackson); University of Michigan (Cevidanes, Franchi); University of Florence (Franchi); Federal University of Rio de Janeiro (Ruellas) |
| Ethics | UNC IRB #12-1496 |
| Funding | NIDCR #DE027950-01; American Association of Orthodontists Foundation |
| Conflicts | ICMJE forms submitted; none reported |
| Correspondence | Tung Nguyen, UNC School of Dentistry, CB#7450 |
| Pages / figures / tables / references | 8 pages; 8 figures; 1 table; 26 references |
| Design | Two linked retrospective analyses of archived longitudinal CBCT pairs: a stability (validity) arm against bone plates and a two-observer reliability arm |
| Hub slug | 2018-nguyen-3d-mandibular-regional-superimposition |

## Sample

### Aim 1 — stability (Methods, p. 749)

| Item | Paper says | Notes |
|---|---|---|
| Source of scans | "previous research and clinical databases" | How many were screened or excluded is not stated |
| Exclusions | Craniofacial syndromes; significant asymmetric growth; motion-artefact double images | Applies to both aims |
| n | 20 | n per region in the Table is not stated |
| Malocclusion / treatment | All Class III, treated with bone anchors (plates and screws) | All under Class III elastic load during the interval |
| Age at T1 | 12.1 ± 1.3 y | |
| Age at T2 | 13.3 ± 1.1 y | T2 SD smaller than T1 SD in the same subjects |
| Interval | "1 year" (Methods); 1.2 y from the means (derived) | |
| Plate position | Around the apex of the incisors, between the lateral incisor and canine, both sides (Fig 1) | Parasymphyseal alveolar bone, not "the anterior chin and symphysis" as the abstract words it |
| Plate stability check | "confirmed to be immobile at T1 and T2 clinically" | No radiographic check described |
| Sex, CVM | Not reported | |

### Aim 2 — reliability (Methods, p. 750)

| Item | Paper says | Notes |
|---|---|---|
| n | 25 | From the ICC sample-size calculation (see Statistics) |
| Composition | 10 Class II Herbst; 10 Class II elastics; 5 Class III bone anchors | Abstract: 20 Class II, 5 Class III. Whether the 5 are among the aim-1 20 is not stated |
| derived shares | Class II 80 %; Herbst 40 %; elastics 40 %; Class III 20 % | |
| Age | 12.7 ± 1.4 y | |
| CVM | stages 2-5 | CS5 is post-peak; no CVM is given for aim 1 |
| Interval | 12.6 ± 0.9 months (1.05 y, derived) | |
| Untreated subjects | None in either aim | |

## Method / protocol

| Item | Value (paper) |
|---|---|
| Scanners | i-CAT (Imaging Sciences International, Hatfield, Pa) or NewTom 3G (AFP Imaging, Elmsford, NY) |
| Voxel size | 0.3 × 0.3 × 0.3 mm on both |
| Settings as printed | 5 mA; "12 kV(p)"; scan time 20-25 s. 12 kVp is not a CBCT tube voltage; about 110-120 kVp is typical (literature, UNVERIFIED for these two machines) |
| Timing | T1 pretreatment; T2 "1 year"; same machine for T1 and T2 within each subject |
| File conversion | DICOM to gipl |
| Segmentation | Automated thresholding in Slicer CMF (Intensity Segmenter), refined with the Active Contour and Adaptive tools in ITK-SNAP version 3.6 |
| Registration | Manual rough approximation of analogous regions, then automated voxel-based registration in Slicer CMF version 3.1 |
| Surface models | Slicer Model Maker |
| Candidate regions (Fig 2) | (1) Chin: anterior surface from pogonion to B point, laterally to the distal-incisal points of the lateral incisors. (2) Symphysis: internal cortical bone of the lingual surface, from the inferior border up to the level of the centre of both mental foramina. (3) Inferior contours of the third-molar germs |
| Region excluded a priori | Mandibular canal, because it changes with growth (Björk 1963, ref 2; Krarup 2005, ref 25) |
| Aim-1 reference | T2 registered to T1 on the 3D volumes of the plates and screws |
| Aim-2 procedure | T1 oriented to Frankfort horizontal by observer 1; two independent observers registered T2 to T1 on the combined chin + symphysis field; the two T2 registrations were overlaid |

## Measurement and error

| Item | Value |
|---|---|
| Stability metric | Absolute mean surface error between registered T1 and T2 models in each region (Slicer Model to Model Distance + Mesh Statistics); direction ignored |
| Why not RMS | RMS gives more weight to larger errors and skews the estimate toward outliers; absolute mean is "more stringent at detecting smaller errors" (p. 750) |
| Reliability metric | Error difference along the entire mandibular surface between the two observers' registered T2 models |
| Interobserver error | 0.12 mm, SD 0.11 mm (Results); abstract prints 0.12 ± 1.1 mm |
| Claim about range | "range fell below the threshold of measurement" of 0.3 mm; no minimum, maximum or range is printed |
| Single-subject figures | Entire mandible < 0.25 mm; 75 % of the surface within 0.12 mm (Discussion; Figs 7-8) |
| Fig 8 labels as printed | A: "Differences > 0.025mm" (caption: ideal fit < 0.25 mm); B: "Differences > 0.12mm" (caption says "less than 0.12 mm") |
| Colour scales | Fig 3: 0.00-3.00 mm unsigned (ticks 0.750, 1.50, 2.25); Figs 4 and 7: −2.00 to +2.00 mm signed; Fig 8: no printed scale |
| Segmentation error, intra-observer repeat, artefact handling | Not reported |

## Statistics

| Item | Value |
|---|---|
| Normality | Kolmogorov-Smirnov goodness of fit, "confirmed" (Results) |
| Table P values | Chin 0.765; symphysis 0.698; third molar 0.0025 (starred "statistically significant"); test and null hypothesis not stated |
| ICC model | Two-way random |
| ICC sample size | H0 ρ0 = 0.75; H1 ρ1 = 0.95; α = 0.05; power 0.80; 2 examiners; result 25 subjects (no method citation) |
| ICC result | 0.998; 95 % CI 0.995-1.000 (printed in Methods, not Results) |
| Confidence intervals for region errors, per-subject data, range, Bland-Altman | None reported |

## Table (p. 749): Registration errors at different regions

Absolute mean errors measured at the chin, symphysis and third molar after registration of the T1 and T2 bone plates and screws. Errors in millimetres. *Statistically significant.

| | Chin | Symphysis | Third molar |
|---|---|---|---|
| Absolute mean error | 0.37 | 0.40 | 1.94 |
| SD | 0.16 | 0.14 | 0.06 |
| P value | 0.765 | 0.698 | 0.0025* |

Same values elsewhere in the paper: the abstract and the Results text give the symphysis as 0.4 ± 0.15 mm; chin and third molar are printed identically everywhere.

## Derived numbers

All labelled derived. They assume n = 20 per region in aim 1 and n = 25 in aim 2, because n per region is never stated.

| Quantity | Chin | Symphysis | Third molar |
|---|---|---|---|
| Coefficient of variation (SD ÷ mean) | 43 % | 35 % (37.5 % with SD 0.15) | 3.1 % |
| SEM (SD ÷ √20) | 0.036 mm | 0.031 mm | 0.013 mm |
| 95 % CI of the mean (t₁₉ = 2.093) | 0.30-0.44 mm | 0.33-0.47 mm | 1.91-1.97 mm |
| Error in voxels (÷ 0.3 mm) | 1.23 | 1.33 | 6.47 |
| Ratio to chin error | 1.00 | 1.08 | 5.24 |
| One-sample t against the 0.3 mm voxel (two-sided P) | 1.96 (≈ .065) | 3.19 (≈ .005) | 122 (< 10⁻²⁸) |
| Welch t vs chin (P) | — | 0.63 (≈ .53) | 41 (< 10⁻²³) |

None of these reproduces the printed P values (0.765 / 0.698 / 0.0025), so the Table's P column is of unknown origin. The symphysis CI excludes 0.3 mm, so the Discussion's "accurate fit with 0.3 mm" is not what the Table shows; "about one voxel" is.

| Quantity | Value (derived) |
|---|---|
| Aim-1 interval from the mean ages | 13.3 − 12.1 = 1.2 y |
| Aim-2 interval in years | 12.6 months = 1.05 y |
| Interobserver SEM (0.11 ÷ √25) | 0.022 mm |
| Interobserver 95 % CI (t₂₄ = 2.064) | 0.075-0.165 mm |
| Interobserver mean + 2 SD | 0.34 mm (above the 0.3 mm voxel; the paper gives no range) |
| Interobserver error as a fraction of a voxel | 0.40 |
| Interobserver error ÷ chin / symphysis stability error | 0.32 / 0.30 |
| Ruellas 2016 failure rate as cited | 16 ÷ 18 = 89 % |
| ICC sample size by the Walter, Eliasziw & Donner 1998 formula, k = 2 (literature; the method the paper used is UNVERIFIED) | about 10-12, not 25 |
| Age span of both samples (means ± 1 SD) | about 10.8-14.1 y |

## Numbers from the literature to keep beside these

| Number | Source | Status |
|---|---|---|
| Björk's 2D stable mandibular structures: inner cortex of the inferior symphyseal border; anterior chin above pogonion; symphyseal trabecular pattern with canal-related trabeculae; inferior contour of the third-molar germ before root development | Björk 1955, 1963, 1969; Björk & Skieller 1972, 1983 (refs 1-5, as paraphrased in the Introduction) | VERIFIED as cited by this paper and by the ABO deck; originals not read |
| Ruellas 2016 (ref 24): 16 growing subjects 9-13 y; Björk-mask registration completed in only 2 of 16 (14 failures, 87.5 %); the crypt named as one of several possible causes | Ruellas et al, PLoS One 2016;11(6):e0157625 | VERIFIED (full text, research pass). This paper cites it as "16 of 18" failures attributed to the crypts |
| Koerich 2016 (ref 23): regional maxillary and mandibular voxel registration, 2 dry skulls + 15 patients; intraobserver ICC ≥ 0.980; highest RMS 0.241 mm | Int J Oral Maxillofac Surg 2016;45:662-669 | VERIFIED (abstract). The abstract names neither "whole mandible" nor "non-growing", which is how this paper describes it |
| Krarup 2005 (ref 25): 10 Apert children, 49 CTs; canal relocated laterally in all 10 but kept its profile curvature; symphysis stable in profile; tooth buds stable before root formation; method error 0.357-0.816 mm | J Anat 2005;207:669-682 | VERIFIED (full text, research pass) |
| Koerich 2017: 24 growing patients, internal symphysis to the first molars as reference; mean error 0.23-0.33 mm; interexaminer ≤ 0.3 mm in 20/24; ramus 1-1.3 mm in 2 cases | Angle Orthod 2017;87:473-479 | VERIFIED (abstract) |
| Chen 2020: 20 growing patients, CBCT 4.6 y apart; inner-symphysis distances to pogonion and the mental foramen all < 1.0 mm; distance to the mandibular foramen changed 3.39 ± 3.29 (R) and 3.03 ± 2.83 mm (L) | BMC Oral Health 2020;20:153 | VERIFIED (abstract) |
| Cevidanes 2009 (ref 17): 3 Class III miniplate patients; cranial-base voxel registration; interobserver range 0.4 mm at the chin, condyles and rami | AJODO 2009;136:94-99 | VERIFIED (full text, research pass) |
| Springate & Jones 1998: 23 implanted children; Ricketts corpus-axis (Xi-Pm) registration less valid than Björk's structural method; most discrepancies < 2 mm but about 10 % of subjects > 4 mm at molar and incisor landmarks | AJODO 1998;113:263-270 | VERIFIED (registry; Khaleel 2026 ref 15) |
| Baumrind 1992 part 2: 31 implant subjects; anatomic best fit vs implants ≤ 1 mm at every landmark over 7 y except condyle (2.70 mm horizontal, 1.90 vertical) and gonion (1.52 mm vertical) | AJODO 1992;102:227-238 | VERIFIED (abstract) |
| Gu & McNamara 2008: 10 implant subjects; inner symphyseal cortex + canals approximated implants; lower-border superimposition did not reflect true growth | Angle Orthod 2008;78:967-976 | VERIFIED (abstract; mm values not in the abstract) |
| Doppel 1994 (topic paper a1): 2D tracing error 0.5 mm; posterior and anterior zygomatic process 0.97 ± 0.43 and 0.95 ± 0.57 mm from maxillary implants (Table II) | AJODO 1994;105:161-168 | VERIFIED (paper text) |
| Nielsen 1989 (topic paper a2): palatal best fit under-reads vertical change by about 30 % of molar and 50 % of incisor eruption over 4 y; structural method vertically not different from implants | AJODO 1989;95:422-431 | VERIFIED (paper text) |
| ABO mandibular structural superimposition: most anterior-inferior symphysis; inferior internal cortical plate of the symphyseal cross-section; inferior alveolar canal; inferior aspect of the third-molar bud before root development | ABO Cephalometric Review deck, rev. 3.14.2025 | VERIFIED (deck text, research pass). The ABO keeps the canal and the crypt that this paper drops |
| Proffit: mandibular superimposition "on the symphysis" to show mandibular tooth movement (Ch 6, Fig 6.60, 7th ed.) | Proffit, Contemporary Orthodontics | VERIFIED only via the user's study pages; whether Proffit names the canal and crypt is UNVERIFIED |
| Proffit: CBCT justified for four indications only (impacted teeth; asymmetry and complex surgery; syndromes and trauma; hard-tissue TMJ); doses: cephalogram 0.005 mSv, limited-FOV CBCT 0.05, both jaws 0.1, jaws + cranium 0.15 mSv | Proffit Ch 6 (7th ed.) | VERIFIED only via the user's study pages |
| Khaleel 2026 (hub): mandibular superimposition on the corpus axis Xi-Pm registered at Pm; intra-examiner ICC 0.92-0.98 for measurement; no superimposition error; Point I "intrusion" 0.71-0.99 mm | registry/claims.md; Khaleel key-numbers.md | registry (VERIFIED there) |

## Quick-recall card (eight numbers)

1. 20 Class III bone-anchor patients, 12.1 ± 1.3 → 13.3 ± 1.1 y, about 1.2 y (derived).
2. Chin 0.37 ± 0.16 mm; symphysis 0.40 ± 0.14 mm (Table; text 0.15).
3. Third-molar crypt 1.94 ± 0.06 mm, P = .0025 (test unnamed); 5.2 × the chin (derived).
4. Voxel 0.3 mm; chin and symphysis errors are 1.2-1.3 voxels (derived).
5. 25 reliability patients (10 Herbst, 10 Class II elastics, 5 Class III), 12.7 ± 1.4 y, CVM 2-5, 12.6 ± 0.9 months.
6. Interobserver 0.12 ± 0.11 mm (abstract misprints ± 1.1); ICC 0.998 (0.995-1.000).
7. One subject: < 0.25 mm over the whole mandible, 75 % within 0.12 mm (Fig 8A label misprints 0.025).
8. Canal excluded a priori (Björk 1963; Krarup 2005); Ruellas 2016 cited as 16 of 18 crypt failures (the Ruellas paper itself reports 14 of 16).
