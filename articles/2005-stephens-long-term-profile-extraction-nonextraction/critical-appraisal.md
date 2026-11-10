# Critical appraisal — Stephens 2005

Stephens CK, Boley JC, Behrents RG, Alexander RG, Buschang PH. Long-term profile changes in extraction and nonextraction patients. *Am J Orthod Dentofacial Orthop* 2005;128(4):450-7. doi:10.1016/j.ajodo.2004.04.034. Baylor College of Dentistry (Dallas), Saint Louis University and private practice (Tyler, Tex). Submitted March 2004, accepted April 2004. Ethics approval, consent, funding and conflicts of interest are not reported.

Sources for the numbers:

- Numbers come from the printed tables, read on the page images (Tables I-II p 451, III-IV p 453, V p 454, VI-VII p 455). The text layer drops minus signs.
- Recomputations are mine, run from the printed means, SDs and group sizes with `checks.py` in this folder (Ext 20 / Nonext 20; M 12 / F 28), and are labelled "derived".
- Literature and Proffit points carry VERIFIED / UNVERIFIED as in `conflicts.md`.

## Verdict in three lines

1. **Design:**
   - A retrospective matched historical cohort from one private practice and one orthodontist: 20 four-premolar extraction and 20 nonextraction white Class I/II patients.
   - The groups were matched at debond (about 15 y) on age, sex, U1-SN, L1-NB and H-line, and recalled about 15 y later.
   - It is combined with a cross-sectional perception survey of the same 40 patients' profile photos by 105 orthodontists and 225 laypeople.
   - No randomisation, no pretreatment data, no untreated control.
2. **Level of evidence:**
   - Oxford CEBM 2011 Level 3 (non-randomised comparative cohort; 2b in the 2009 table). There is a case for Level 4, because the matching was post hoc on outcome-adjacent debond values, the sampling frame is unknown, and n is 20 per arm. The mapping is mine.
   - GRADE-style certainty:
     - Low that matched extraction and nonextraction faces age alike over 15 y. This is consistent with Paquette, Zierhut, Erdinc and Rathod (VERIFIED abstracts), but imprecise.
     - Moderate that males flatten more than females. The effect is large (derived d 0.74-1.41 for the lip lines, 0.86 for N'-Sn-Pg') and biologically expected.
     - Very low for the perception findings.
3. **Biggest limitation:**
   - The extraction group was chosen first, finished "in the normal range", and the nonextraction cases were matched to it at debond. This removes by design the treatment effect that the extraction debate is about (about 1.3-2 mm of lip retraction, Konstantonis 2018, VERIFIED abstract).
   - With 20 per arm, "no difference" is absence of evidence. The minimum detectable difference is about 1.9 mm for upper lip to E-line change (derived).

## PICO

| | The paper |
|---|---|
| **Population** | 40 white Class I and Class II patients, one private practice, one orthodontist (p 451). Each arm 6 M + 14 F. Debond age 14.8-15.6 y by subgroup (overall 15.07 y, derived); recall 28.9-30.3 y (overall 29.68 y, derived) (Table I). Debond U1-SN, L1-NB and H-line "in the normal range" (range not given, p 452) |
| **Intervention** | Four-premolar extraction (which premolars not stated) |
| **Comparison** | Nonextraction, matched to the extraction cases on age, sex and the three debond measures |
| **Outcomes** | (1) Nine cephalometric measures at debond and recall and their change (Table II definitions; Tables III-IV). (2) Horizontal and vertical change of 12 landmarks (Table V, by sex only). (3) Perceived change on a 106-mm VAS (Table VI). (4) Preference for the posttreatment, long-term or neither photo (Table VII) |
| **Follow-up** | Interval 14.1-15.0 y (subgroup means, SDs 2.5-4.9 y; Table I). Individual range not reported |
| **Implied question** | Does treatment type change how the profile ages after debond, *given* that both groups finish with the same incisor position and lip line? It is not "does extraction flatten the face?" |

My read: the question is well posed and clinically useful for one thing, the fear of late "dishing-in". The design answers it only for patients finished within normal limits.

## Design and allocation (direction of bias)

**How the sample was built (p 451-452):**

1. Extraction patients with 15-y records were selected first, with U1-SN, L1-NB and H-line in the normal range.
2. Nonextraction patients were then matched to them on age, sex and the same three measures.
3. U1-SN and L1-NB were chosen because a discriminant analysis (Luppanapornlarp & Johnston, ref 11) ranks them among the main drivers of the extraction decision. The abstract of ref 11 does not name them: UNVERIFIED.
4. H-line was chosen as a measure of lip protrusion "independent of nose length" (p 452).

**Matching worked at debond (Table III; d derived):**

| Measure | Ext | Nonext | Difference | d | P |
|---|---|---|---|---|---|
| U1-SN | 105.6° | 103.8° | 1.8° | 0.28 | .38 |
| L1-NB | 3.9 mm | 3.4 mm | 0.5 mm | 0.28 | .42 |
| H-line | 3.7 mm | 3.6 mm | 0.1 mm | 0.08 | .88 |

No debond P value was below .15. One unmatched measure leans the "wrong" way: the nonextraction lower lip sat 1.0 mm further behind the S-line (LI-S −2.2 vs −1.2 mm, P .15; d 0.48, derived). The matched nonextraction group was, if anything, slightly flatter at the lower lip.

| Feature | What was done | Direction of bias |
|---|---|---|
| Matching at debond on incisor and lip measures | Both arms finished alike | Removes the treatment effect by design. The between-arm comparison is biased **toward the null** for any question except "do matched faces age alike?" |
| Extraction cases restricted to the "normal range" | Range not stated | Excludes over-retracted extraction faces and very protrusive nonextraction faces, the two tails where long-term divergence would show. Again toward the null |
| No pretreatment data | Crowding, protrusion, ANB and Class I/II per arm not given | Confounding by indication cannot be assessed. The arms probably started differently (otherwise they would not have been treated differently) |
| Recall at 15 y from one practice | Number screened, eligible and recalled not reported | Direction unknown. Patients who return 15 y later may be the satisfied or the local ones |
| One orthodontist, one practice | Same mechanics philosophy in both arms | Improves internal comparability; limits transfer |
| Sex balanced across arms | 6 M / 14 F in each | Removes sex as a confounder of the arm comparison. With 6 males per arm, the arm-by-sex interaction cannot be tested |
| Matched design analysed with independent t tests | p 452 | If pairs were matched, an unpaired test is conservative (wider SE). This also biases toward the null |

**Blinding:**

- Cephalometric tracing: blinding to arm or time point is not stated.
- Superimposition: the long-term film's registration on the posttreatment film is not described.
- Photographs: raters were not told which photo was which (left/right randomised, p 452). But the photos are 15 years apart (about 15 vs 30 y of age), so age cues probably revealed the order. Crop and standardisation are described only as "nose, lip, and chin areas" (abstract).

## Sample, power and attrition

**Sample size:**

- **Patients:** no calculation. 20 per arm and 12 M vs 28 F.
- **Raters:** 105 orthodontists (meetings, mailings to ADA random lists and Baylor alumni; 60% reply to mailings) and 225 laypeople (115 women, 110 men; doctors' waiting areas, the dental school, family and friends). 330 in all (derived). Each rater saw one of two 20-patient survey versions; the number per version is not reported.

**Power (derived, two-sided α .05, 80% power):**

- Minimum detectable effect: d = 0.91 for Ext vs Nonext, and d = 0.99 for M vs F.
- In units for the Table III long-term changes, the smallest detectable arm differences are:

  | Measure | Detectable difference |
  |---|---|
  | LS-E | 1.87 mm |
  | LI-E | 1.71 mm |
  | LS-S | 1.57 mm |
  | LI-S | 1.47 mm |
  | H-line | 0.96 mm |
  | L1-NB | 1.00 mm |
  | N'-Sn-Pg' | 3.27° |
  | N'-Pn-Pg' | 2.83° |
  | U1-SN | 3.78° |

- Power to detect a moderate effect (d = 0.5) with 20 vs 20 is 0.34. A null in this sample is uninformative for differences smaller than about 1.5-1.9 mm of lip change.
- The meta-analytic treatment-period lip effects are 1.26 mm (upper) and 1.96 mm (lower) (Konstantonis 2018, VERIFIED abstract). This study could not have detected a long-term effect of that size with reasonable power.

**Attrition:** not applicable in the usual sense, because only patients with both records were included. The number of eligible patients who could not be recalled is unknown, so recall bias cannot be sized.

## Outcome definition and measurement

**Cephalometrics:**

- **Landmarks and software:** 15 landmarks (Fig 1, p 451; definitions from Riolo and Daskalogiannakis), traced and digitised in Dentofacial Planner.
- **Coordinates:** x and y were measured from posttreatment sella along a reference line at S-N −7° (Fig 1; p 452). Horizontal change is parallel to that line (e.g. Pn-h) and vertical change perpendicular to it.
- **Measures:** nine profile and incisor measures, defined by Hsu and Subtelny (Table II):
  - N'-Pn-Pg' (total facial convexity) and N'-Sn-Pg' (facial convexity)
  - upper and lower lip to Ricketts' E-line and Steiner's S-line
  - H-line (to the superior labial sulcus)
  - U1-SN (°) and L1-NB (mm)

**Method error (Table II, p 451; replicate statement, Methods p 452):**

- 15 patients were replicated, with "no significant systematic errors".
- Errors: 0.28-0.44 mm for the linear measures; 1.07°, 1.40° and 1.45° for the angles.
- The error statistic (e.g. Dahlberg) is not named, and no ICC is given.
- The angular errors are about the size of the effects being compared:
  - The arm difference in N'-Sn-Pg' change is 1.1°.
  - The N'-Pn-Pg' change is 0.9° vs −0.2°, inside its 1.40° error.

**What the measures can and cannot show:**

- **E-line and S-line** run from the nose (or columella) to the chin. A lip that does not move at all "retrudes" against them when the nose and chin grow, so these are relative measures by construction. The paper's Conclusion 2 rests on this point.
- **H-line** here is sulcus depth relative to the Holdaway line (upper lip to soft-tissue chin; standard definition, not given in the paper, UNVERIFIED against Holdaway this run). It measures lip curvature, not lip position. It is nose-free, but it contains the chin, so it cannot test the chin half of the "nose and chin" explanation (`conflicts.md` A19).
- **U1-SN and L1-NB** are measured against lines that themselves remodel with growth (S-N, N-B). The long-term sex divergence in both (Table IV: 109.6 vs 103.0°, 2.3 vs 4.0 mm) cannot be split between tooth movement and reference movement (my inference).
- **Not measured:** lip thickness, lip length and incisor display. These are the variables Proffit's ageing summary emphasises (Ch 4, V).

**Perception:**

- **Survey set-up:**
  - The survey was piloted for size and instructions.
  - There were two versions, balanced for extraction, sex and Class I/II. Each showed 20 patients' posttreatment and long-term profile photos, 4 pairs per page, sides randomised.
  - Change was marked on a 106-mm VAS from "same" to "very different" and expressed as a percentage of 106 mm.
  - Preference was a three-way choice: posttreatment, long-term or neither.
- **Not done:**
  - No identical-pair control was included, so the VAS mark for "no change" is unknown.
  - No test-retest of raters was done.
  - Rater age and sex were collected but not analysed.

## Statistics, with effect sizes

**Tests used (p 452):**

- t tests between groups (Student or Welch not stated; `conflicts.md` A15)
- paired t tests for change over time
- a single-sample t test for perceived change
- Pearson correlations between perceived and cephalometric change
- chi-square tests on preference proportions
- SPSS

**Multiplicity:** about 226 tests (derived count):

| Source | Tests |
|---|---|
| Table III: 27 between-group + 18 within-group | 45 |
| Table IV: 27 + 18 | 45 |
| Table V: 24 sex comparisons + 48 within-sex tests | 72 |
| Table VI | 6 |
| Correlations | 18 |
| Per-patient chi-square tests | 40 |

- Nothing was corrected. If every null were true, about 11 false positives would be expected at α .05 (derived).
- With Bonferroni across the nine change outcomes (α .0056), no arm comparison is significant (none was anyway). Only two sex comparisons survive, LS-E and LI-E change (both P < .001, derived).

**The single-sample t on perceived change** is almost certainly a test against zero. The paper does not name the reference value. On a scale where "same" is the left anchor, any mark at all produces significance: combined extraction t = 16.8, P ≈ 7 × 10⁻¹³ (derived). "Change was perceived (P < .01)" says only that raters did not put every mark on the anchor.

**Unit of analysis.** The Table VI P values reproduce when the patient (n 20/20, 12/28) is the unit. This is correct: it avoids treating 330 raters' marks as independent.

**Confidence intervals and effect sizes** were not reported. Derived from the printed values:

| Comparison (long-term change) | Difference | 95% CI | d |
|---|---|---|---|
| Ext − Nonext, LS-E | 0.10 mm | −1.22 to 1.42 | 0.05 |
| Ext − Nonext, LI-E | 0.30 mm | −0.91 to 1.51 | 0.16 |
| Ext − Nonext, N'-Sn-Pg' | 1.10° | −1.21 to 3.41 | 0.31 |
| Ext − Nonext, H-line | 0.50 mm | −0.17 to 1.17 | 0.48 |
| Ext − Nonext, U1-SN | −1.70° | −4.36 to 0.96 | −0.41 |
| M − F, LS-E | −2.30 mm | −3.48 to −1.12 | −1.36 |
| M − F, LI-E | −2.20 mm | −3.29 to −1.11 | −1.41 |
| M − F, N'-Sn-Pg' | 2.90° | 0.53 to 5.27 | 0.86 |
| M − F, U1-SN | 3.40° | 0.63 to 6.17 | 0.86 |
| M − F, L1-NB | −0.80 mm | −1.55 to −0.05 | −0.75 |

How to read the table:

- **Arm comparison:** every |d| in Table III's change block is 0.05-0.48 (all below the 0.5 "moderate" mark). The LS-E interval means the data allow the extraction group to have lost up to about 1.2 mm more upper lip to the E-line over 15 y, or up to 1.4 mm less.
- **Sex comparison:** the effects are large.
- **Landmark changes:** Table V sex comparisons run d 0.30-0.98.
- **Perception:** every Table VI comparison is d ≤ 0.26.

**Correlation:**

- One of 18 correlations was significant: orthodontists, N'-Pn-Pg', r = 0.34, P = .032 (derived), which explains 12% of the variance (derived).
- With 18 tests, P(at least one false positive) = 0.60 (derived), so this is compatible with chance.
- Orthodontist-lay agreement, r = 0.89, is high (r² = 0.79, derived). The unit is not stated; it presumably correlates mean ratings per patient, which would inflate agreement relative to individual raters.

**Chi-square:**

- Df, expected counts and the null hypothesis are not stated.
- The 87.5% (35/40) "significant" result is per patient. By its context it tests departure from a uniform split, but the text describes it as an orthodontist-lay difference (`conflicts.md` A7).

**Reproducibility:**

- Table III reproduces within rounding, with no significance flip (largest gap: LS-S at long-term follow-up, .60 vs printed .49).
- Table IV L1-NB change flips with the t-test variant (Student .036, Welch .088; printed .08).
- Two pairs of Table V P values appear transposed (Li-h/Li-v and UIA-h/UIA-v; `conflicts.md` A2-A3).

## Confounding and growth

**Growth is not separated from treatment.** No untreated control was used. The "expected" untreated pattern is taken from the literature (Subtelny 1961; Skinazi 1994; Behrents 1985).

- Because both arms carry the same growth, the between-arm comparison is protected.
- The within-group changes (lips 0.9-1.6 mm further behind the lines, N'-Sn-Pg' +2.9 to +4.0°) cannot be labelled "growth, not treatment" from these data alone.
- Rathod 2015, with Behrents as co-author, later supplied untreated Bolton-Brush controls and found similar end-point profiles (VERIFIED abstract).

**Remaining confounders:**

- **Sex:** handled by balance (6/6, 14/14). It was the strongest predictor of change: LS-E −3.2 vs −0.9 mm, P < .01.
- **Age at debond:** matched (14.8-15.6 y). The authors argue that males at 15 y are about 1 y past peak velocity with growth to come (p 456). Debond age therefore modifies the change and should be carried into any clinical use.
- **Interval:** similar group means (14.1-15.0 y) but wide SDs (up to 4.9 y). The change was not scaled per year.
- **Class I/II mix, mechanics, treatment duration, retention and retention compliance:** not reported per arm.
- **Posttreatment incisor change:** male U1-SN rose 2.6° (P = .020, derived) and female U1-SN fell 0.8° (not significant) (Table IV). Retention protocol and duration are not reported. Incisor change after treatment is a possible contributor to lip change that the analysis does not separate from soft-tissue growth.

## Validity checklist (STROBE-style)

| Item | Met? | Comment |
|---|---|---|
| Question and hypothesis stated | Yes | p 451; the implied null is "no long-term difference" |
| Design named | Partly | Described, not labelled (retrospective matched cohort) |
| Setting and dates of treatment and recall | No | One practice; treatment years not given |
| Eligibility criteria | Partly | White, Class I/II, four premolars or none, debond values "in the normal range" (range not given) |
| Sampling frame and numbers screened | No | Not reported |
| Matching criteria and method | Partly | Variables listed; caliper and pair vs frequency matching not stated |
| Pretreatment characteristics | No | None given |
| Outcome definitions | Yes | Table II, Fig 1 |
| Measurement reliability | Partly | Method error for 15 replicates; statistic unnamed; no ICC |
| Blinding of assessors | No | Not stated for tracing; photo order probably inferable from age |
| Superimposition or registration method | No | Coordinates from posttreatment sella, S-N −7°; registration of the 30-y film not described |
| Sample-size justification | No | None |
| Statistical methods fully specified | Partly | Tests named; t-test variant, chi-square details and the single-sample reference value missing |
| Multiplicity addressed | No | About 226 tests, no correction |
| Effect sizes and CIs | No | Means, SDs and P only |
| Missing data and attrition | No | Not reported |
| Results tables internally consistent | Mostly | Arithmetic clean. Two Table V P-value pairs, convexity wording and some text-table ranges disagree (`conflicts.md` A) |
| Conclusions match the evidence | Partly | "Demonstrating" no treatment effect overstates a non-significant result (A18). Conclusion 4 ignores the one significant r (A6) |
| Limitations discussed | No | No limitations paragraph |
| Ethics, consent, funding, conflicts | No | Not reported |

## External validity (who it does NOT apply to)

**Applies to:** white Class I and II adolescents debonded at about 15 y with incisors and lips finished within normal limits, followed to about 30 y, treated either with four-premolar extractions or without extractions by a single experienced orthodontist.

**Does not transfer directly to:**

- **Patients whose extraction was meant to retract a protrusive profile**, e.g. bimaxillary protrusion. In them, debond lip positions differ by design, which this sample excluded.
- **Over-retracted extraction cases or under-corrected nonextraction cases:** the "normal range" filter removed them.
- **Non-white patients.** Lip response and soft-tissue norms differ. Proffit's 7th-edition box notes that extraction retruded the lips more in Black patients (V).
- **Class III and surgical patients.**
- **Adults treated after growth:** debond at 15 y leaves years of nose and chin growth that an adult does not have.
- **Two-premolar (maxillary only) extraction:** Mendes 2019 rated it most attractive about 15 y after treatment (VERIFIED abstract), and it was not studied here.
- **Thin-lipped or thick-lipped extremes:** lip thickness was not measured.
- **Ageing beyond about 30 y of age.** Bravo Vallejo 2024 extends a similar attractiveness null to about 35 y after treatment (age about 50; VERIFIED abstract), but without cephalometric change data.

## Strengths

1. **A 15-year follow-up** (14.6 y overall, derived) through the late male growth window, the period the "dishing-in" worry is about.
2. **A matched design that isolates the post-debond question cleanly**, with matching that demonstrably worked (all debond P ≥ .15).
3. **One operator, one practice:** treatment philosophy and finishing standard are constant across arms.
4. **Sex balanced across arms**, which lets the sex effect be read without arm confounding.
5. **Method error reported** for every measure, with no systematic error on replication.
6. **Cephalometric and perceptual outcomes on the same patients:** a rare combination at 15 years.
7. **A large rater pool** (330) with both professionals and laypeople, a randomised photo side and the patient correctly used as the unit of analysis.
8. **Arithmetic that reproduces:** changes, cross-table weighted means and the Table III and VI P values (within rounding).

## What would have made it better

1. Report pretreatment records (crowding, protrusion, ANB, Class I/II split) for both arms. Also report the sampling frame: how many eligible, how many recalled.
2. State the "normal range" used to select the extraction cases, and the matching caliper. Analyse matched pairs as pairs.
3. Add an untreated growth-study control matched for age and sex, to separate ageing from treatment.
4. Pre-specify one primary outcome (e.g. LS-E change), justify the sample size for an equivalence margin (e.g. ± 1 mm), and report CIs and effect sizes.
5. Describe the superimposition of the 30-y film. Report the error statistic (Dahlberg or ICC) and tracer blinding.
6. Define the Table V sign convention and the asterisk, name the t-test variant, and correct the Li and UIA P values.
7. Measure lip thickness, lip length and incisor display. Report post-retention incisor change separately from soft-tissue change.
8. In the survey:
   - include identical-pair controls to anchor the VAS
   - test-retest a subset of raters
   - report laywomen and laymen separately
   - report raters per version
   - standardise and describe the photographs
9. Include a two-premolar arm, and patients finished outside the normal range, to test the tails where differences would arise.
10. Phrase Conclusion 1 as "no difference detected" and report the one significant correlation in Conclusion 4.

## Journal-club one-liners

1. "Matched at debond on U1-SN, L1-NB and H-line, extraction and nonextraction faces changed the same over 15 years: LS-E −1.5 vs −1.6 mm, P = .82."
2. "This paper doesn't ask whether extraction flattens the face; it matched that away. It asks whether matched faces age differently, and they don't."
3. "No difference is not equivalence: with 20 a side, the CI on the upper-lip change still runs from 1.2 mm more retrusion to 1.4 mm less in the extraction group."
4. "Sex beat treatment: males lost 3.2 mm of upper lip to the E-line, females 0.9 mm (d 1.36), because the male nose and chin came forward about twice as far."
5. "The N'-Sn-Pg' angle opened 3-4°, so the profile got straighter, not more convex, whatever the Results sentence says."
6. "The lips didn't go back; they came forward 1.8-5.0 mm (Table V). The nose and chin just came forward more, so E-line retrusion is mostly a nose-and-chin number."
7. "H-line runs to the chin, so 'unchanged H-line means it was the nose' is a weak argument. Table V's landmark changes make the point better."
8. "Raters saw about a third of a VAS of change and agreed with each other (r = 0.89), but not with the ceph: 1 of 18 correlations, r = 0.34, about chance."
9. "Preferences split about a third each way. The most lopsided cell is orthodontists choosing the posttreatment male face, 42.3% vs 29.0%."
10. "Clinical bottom line: decide extraction on the incisor and lip position you want at 30, not 15, and build the male nose and chin into the plan."
