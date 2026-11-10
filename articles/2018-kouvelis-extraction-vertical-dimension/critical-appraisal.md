# Critical appraisal — Kouvelis 2018

Kouvelis G, Dritsas K, Doulis I, Kloukos D, Gkantidis N. Effect of orthodontic treatment with 4 premolar extractions compared with nonextraction treatment on the vertical dimension of the face: a systematic review. *Am J Orthod Dentofacial Orthop* 2018;154(2):175-87. doi:10.1016/j.ajodo.2018.03.007.

- **Authors' institutions:** 251 Hellenic Air Force Hospital (Athens), University of Bern and Aristotle University of Thessaloniki.
- **Dates:** search to 2 August 2017; submitted January 2018, revised and accepted March 2018.
- **Declarations:** ICMJE forms submitted, no conflicts reported. No funding statement. Protocol not registered. No PRISMA or GRADE statement.

Sources for the numbers:

- Table values were read on the page images (flow chart p 177, Table I pp 179-181, Table II p 182, Table III pp 183-184). The text layer prints "+" as "1" and "±" as "6", so it was not used for numbers.
- Recomputations are mine, run from the printed group sizes, means and SDs with `checks.py` (filed with this article), and are labelled "derived". MD is always extraction minus nonextraction; for an angle, a negative MD is the direction the wedge theory predicts.
- Literature and Proffit points carry VERIFIED / UNVERIFIED as in `conflicts.md`. Proffit pages are 7th-edition printed pages (V = verified in that text this run).
- The appraisal tools (AMSTAR 2, ROBINS-I, GRADE, Oxford CEBM) are named from memory: their item wording is paraphrased and UNVERIFIED this run. The judgements applying them are mine.

## Verdict in three lines

1. **Design:**
   - A systematic review of 14 retrospective non-randomised cohorts: 857 patients, studies published 1992-2016.
   - It compares four-premolar extraction with treated nonextraction on skeletal vertical cephalometric change.
   - Methods: four databases plus grey literature, no language limit; duplicate selection and extraction; ROBINS-I risk of bias.
   - Synthesis was narrative only (in effect, vote counting on P values). Nothing was pooled, and the protocol was not registered.
2. **Level of evidence:**
   - **Oxford CEBM:** 2011 Level 3 (a systematic review of non-randomised controlled cohorts); "2a−" in the 2009 table, the minus for heterogeneity and quality. The mapping is mine.
   - **GRADE-style certainty (my judgement):**
     - Low that four-premolar extraction has no clinically important skeletal vertical effect in adolescents with normal to moderately increased angles.
     - Very low for severe hyperdivergence, open bite and adults.
   - **AMSTAR 2-style confidence in the review:** critically low on its formal rule, because of two critical weaknesses (no registered protocol, no list of excluded studies). This judges the reporting, not whether the conclusion is right.
3. **Biggest limitation:**
   - Every primary study is confounded by indication: the extraction group started steeper in 10 of 13 comparisons (derived). Mechanics were unreported in half the studies.
   - The mechanism the question is about (molar mesial movement and extrusion) was never extracted.
   - The vote count throws away the precision in the review's own tables: pooled, the mandibular-plane MD is −0.32° (95% CI −0.68 to 0.04; derived).

## PICO

| | The review |
|---|---|
| **Population** | Patients of any age treated with full fixed appliances in both arches (p 176). As included: 857 patients with group means of 10.8-18.5 y (Table I, derived), mostly Class I and Class II/1; 4 female-only studies; sex not reported in 2 (164 patients) |
| **Intervention** | Fixed appliances with 4 premolar extractions, one per quadrant. As included: 4 first premolars in 11 studies, upper 4s with lower 4s or 5s in 1 (Bravo), pattern not stated in 2 (Basciftci, Katsaros) (p 178) |
| **Comparison** | Fixed appliances without extraction (a treated control). No untreated growth controls |
| **Outcomes** | Skeletal vertical dimension, measured radiographically before and after treatment (p 176). As reported (Table III): mandibular-plane angles (SN-GoGn, FMA, FH-MP, SN-GoMe, MP-HP); palatal-to-mandibular-plane angles; N-Me, ANS-Me and Me-PP; two ratios; two landmark positions. No dental vertical outcomes (overbite, molar or incisor heights) |
| **Timing** | Start to end of active treatment (T1 − T0); group-mean durations 1.5-3.7 y (Table I, derived). No post-retention data |
| **Designs** | Any design with a treated comparison group, at least 10 patients, no surgery (p 176). As found: 14 retrospective cohorts |
| **Implied question** | Does removing four premolars, as such, change skeletal face height or mandibular-plane rotation compared with treating without extraction? It is not "can extraction correct an open bite?": overbite was not an outcome |

My read: the question is clinically important and well posed. The eligibility rules (treated controls, four premolars) make the comparison clean. They also exclude two kinds of evidence (`conflicts.md` B2-B4):

- the strongest positive evidence: posterior extraction in open bite (Aras 2002) and second-premolar enucleation against historical controls (Garlington 1990)
- the best mechanistic tests: first vs second premolar extraction (Kim 2005, Al-Nimri 2006)

## Design and conduct of the review (direction of bias)

| Feature | What was done (page) | Effect on the conclusion |
|---|---|---|
| Protocol | Not registered (p 176). No PRISMA statement, though the flow chart follows the PRISMA layout | Outcome choices, the decision not to pool and the risk-of-bias rules were all made without a prior record. Direction unknown |
| Sources | MEDLINE (Ovid and PubMed, 1946 to 2 August 2017), EMBASE, Cochrane OHG Trials Register, CENTRAL; ClinicalTrials.gov, National Research Register, ProQuest; reference lists; no language or date limit (p 176) | Broad. A strength |
| Search strategy | Only the MEDLINE strategy is shown (p 187): 11 separate lines with no line combining them. Lines 1-2 (22,826 and 5,002 hits) have no vertical term but exceed the 927 records identified in all databases, so the screened set presumably came from lines 3-11 (derived), which rely on "vertical", "caudal", "cranial", "perpendicular" and "cephalometr*". No terms for face height, mandibular plane, hyperdivergent, long face, open bite or wedge. Search dates for the other databases are not given | Could miss eligible studies. Chua 1993, a positive study that looks eligible, is absent (`conflicts.md` B3; whether it was found and excluded is UNVERIFIED). A miss of that kind biases **toward the null** |
| Flow | 927 records → 231 after de-duplication (696 duplicates, 75%, derived) → plus 29 from other sources → 260 screened → 34 full texts → 14 included. Three full texts could not be obtained (p 177) | The counts close (derived). The 29/19 mismatch and the missing list of excluded studies limit reproducibility |
| Selection and extraction | Independent and in duplicate (G.K., K.D.), not blinded to authors or results; disagreements resolved with I.D. and N.G. (pp 176, 178) | Standard practice. Unblinded selection is usual and low-risk here |
| Eligibility | Treated nonextraction control required; four premolars only; at least 10 patients | Gives a clean comparison but narrows the question (see PICO). No clear direction |
| Overlap with an included study | The senior author is first author of ref 8 (Gkantidis 2011). That study supplies the review's mechanistic explanation (p 184) and was rated low risk in 5 of 7 domains (Table II). He resolved risk-of-bias disagreements; the paper says all disagreements concerned serious or critical studies (p 178), and ref 8 was rated moderate | Not a financial conflict, and common in a small field. The independence of the assessment of ref 8 is not described |
| Risk of bias | ROBINS-I, two assessors (pp 177-178). By the review's own rule no study could be low on confounding. Studies with "no information" in a domain were placed "between serious and critical" | ROBINS-I is the right tool for non-randomised studies. It was applied unevenly (`conflicts.md` A13-A14), and the critical-risk studies still count toward the "considerable agreement" |
| Synthesis | Narrative: each study's P value and a verbal verdict (Table III). No MDs, CIs, pooling or subgroup analysis, although MDs and SDs were planned in the Methods (p 176) | Vote counting is insensitive: it reads every underpowered null as support. Here it understates both the precision of the null and a small directional signal (see Statistics) |
| Certainty | "Moderate to low" (abstract) with no stated method | Informal; formal GRADE would probably be lower (`conflicts.md` A9) |
| Reporting bias | Addressed by search breadth and a search for ongoing trials (p 177); no formal test, which is not possible without pooling | Small retrospective studies may go unpublished whatever their result. Direction unknown |

## The included evidence: sample, power and missing data

**Who is in it (Table I; derived):**

- **Size:** 14 studies, 857 patients (430 extraction, 427 nonextraction). Group sizes run from 14 (Hayasaki Class II extraction) to 45 (Staggers nonextraction).
- **Patients by overall risk of bias:** moderate 292 (34%), serious 320 (37%), critical 245 (29%).
- **Hyperdivergent samples:** 6 studies, 413 patients (48%).
  - Baseline group means: SN-GoGn 34.7-40.0°; Katsaros SN-GoMe 36.3-38.6°; Kumari FMA 26.3-27.8°.
  - For comparison, the normodivergent samples that report SN-GoGn sit at 31.2-32.3°.
  - Two of the six are labelled only a "tendency" (Kocadereli, Kumari).
- **Age:** group means 10.8-18.5 y. Three samples aged 15.4-18.5 y are described as nongrowing (`conflicts.md` A3).
- **Treatment duration:** group means 1.5-3.7 y.

**Power (derived; two-sided α .05, 80% power, SD 2.5° for a mandibular-plane angle change):**

| Group size | Smallest detectable difference |
|---|---|
| 15 per group | 2.56° |
| 20 per group | 2.21° |
| 30 per group | 1.81° |
| 40 per group | 1.57° |

- No single included study could detect a true difference below about 1.6°, and most could not detect less than 2°.
- Each study's "no difference" is therefore uninformative about effects of 1-2°, which is exactly the range in dispute (Porto 1.7°, Paquette 2.3°).
- Pooling solves this: the 12-comparison pooled CI is 0.72° wide (derived).

**Missing data:**

- Three full texts could not be obtained (flow chart, p 177).
- SDs are missing for three studies (Kumari, Luppanapornlarp, Paquette), and Staggers has no baseline table (Table II). Authors were e-mailed (p 176), but the responses are not reported.
- Within studies, nothing is missing in the usual sense: a retrospective design includes only patients with both records. Patients without final records are invisible, so attrition (selection) bias in the primary studies cannot be sized.

## Outcome definition and measurement

**What was measured:**

- **Method:** all outcomes are 2D cephalometric changes from T0 to T1, in five groups:
  - mandibular-plane angles to S-N or FH
  - palatal-to-mandibular-plane angles
  - total and lower anterior face heights (N-Me, ANS-Me, Me-PP)
  - two height ratios
  - Hosseinzadeh-Nik's landmark positions
- **Count:** 42 between-group comparisons in all: 20 angular, 19 linear, 3 ratios (derived).
- **No primary outcome** was named. Each study contributes whatever it measured, so "the vertical dimension" is a different variable in different studies.

**Measurement quality (Tables I-II):**

- **Magnification correction** is not reported (NA in Table I) for 8 of 14 studies; the review says only that "certain studies" reported no correction (p 185). This affects linear measures only; angles are immune.
- **Assessor blinding:** the outcome assessor was not blinded in 13 of 14 studies (all except Kirschneck).
- **Method error** was not reported for Kumari ("no method error") or Staggers (Table II).
- **Registration:** no included study used structural or implant superimposition (`conflicts.md` B6). Every angle is a total rotation against S-N, FH or the palatal plane.

**What the outcomes can and cannot show:**

- **Total rotation is the right clinical endpoint.** The mandibular-plane angle to S-N is what the wedge claim is about. Proffit Ch 4 p 92 (V): total rotation averages only −2 to −4° from childhood to adulthood, because surface modelling largely offsets the core's internal rotation (−10 to −15°). A treatment effect of a degree or less sits inside normal growth variation.
- **The mechanism was not extracted.** The review recorded no molar mesial movement, molar extrusion or space-closure pattern, although at least three primary studies measured them (Kumari, Gkantidis, Sivakumar; `conflicts.md` B1). The wedge mechanism is argued only in the Discussion (p 184).
- **No dental vertical outcomes.** Overbite and incisor heights were not extracted. So the review cannot address Proffit's "severe vertical discrepancy" indication for extraction (Ch 7 p 221, V), which may act through the incisors.
- **Mixed measures.** SN-GoGn and FMA from the same patients disagree: Porto MD −1.7° vs −1.0°, Kocadereli −0.2° vs −0.5° (derived). Mixing reference lines across studies adds noise; it should not create bias.

## Statistics, with effect sizes

**What the review did:**

- It reported no effect sizes and no CIs.
- Each study is summarised by its own P value and a verbal verdict (Table III).
- The abstract then counts verdicts (10 null, 2 favouring extraction, 2 favouring nonextraction), and the Conclusions call the result "considerable agreement" (p 185).

**The vote count, checked (derived):**

- **Significant tests:** 4 of 42 between-group tests were significant (9.5%), against about 2.1 expected by chance at α .05 if every null were true. The tests are not independent.
  - Angular: 2 of 20 significant (Porto, Paquette), in opposite directions.
  - Linear: 2 of 19 significant (Kumari, Sivakumar), in opposite directions.
- **Direction rather than significance:** in 11 of 15 study-level mandibular-plane comparisons, the extraction group closed more or opened less (MD < 0). One was zero and 3 went the other way. A sign test on the 14 non-zero comparisons gives two-sided P ≈ .06.
- **So** the studies lean slightly toward the wedge direction, by small amounts, which vote counting cannot see.

**Exploratory pooling of the review's own data** (fixed effect, inverse variance, one mandibular-plane angle per study or subgroup; derived; the review pooled nothing):

| Set | k | Pooled MD (Ex − Nonex) | 95% CI | I² |
|---|---|---|---|---|
| All mandibular-plane comparisons with SDs | 12 | −0.32° | −0.68 to 0.04 | 0% |
| Critical-risk comparisons removed | 9 | −0.52° | −0.97 to −0.08 | 0% |
| Moderate-risk studies only | 6 | −0.60° | −1.17 to −0.04 | 18% |
| Hyperdivergent samples only | 6 | −0.60° | −1.14 to −0.06 | 0% |
| Normodivergent samples only | 4 | −0.20° | −0.81 to 0.41 | 35% |
| N-Me | 5 | +0.24 mm | −0.62 to 1.10 | 45% |
| ANS-Me | 5 | +0.07 mm | −0.51 to 0.66 | 44% |

How to read it:

- **The null is precise.** The whole-set interval excludes any extraction benefit larger than 0.68° and any harm larger than 0.04°.
- **There may be a small signal.** In the better-rated and hyperdivergent subsets, the pooled MD is about −0.5 to −0.6°, and its CI excludes zero but never reaches −1.2°.
- **That signal is the size of the biases.** The extraction groups started steeper in 10 of 13 comparisons (by up to 5.8°), and a steep start tends to drift back on its own (regression to the mean). Half a degree is the size such an imbalance could produce.
- **It is below any threshold a clinician would act on.** The review itself calls 1.7-2.3° "clinically questionable". In the hub's Khaleel paper, mechanics alone moved the Mn-Mx angle by +0.69° to +1.84° (registry).
- **Linear heights show nothing.** The face-height pools are flat. Those measures are also inflated by the longer extraction treatment (see Confounding).
- **Caveats:** the pools mix reference lines and use printed values rounded to 0.1, and a random-effects model would give slightly wider intervals. They are a check on the review's reading, not a replacement for a proper meta-analysis.

**Per-comparison effect sizes (derived; full table in `key-numbers.md`):**

- **Mandibular-plane comparisons:** Cohen's d runs from −0.72 (Porto SN-GoGn) to +0.22 (Sivakumar FMA). Every |d| except Porto and Hayasaki Class I (−0.69) is below 0.5.
- **Linear comparisons:** d runs from −0.47 to +0.54.

**Reproducibility:** the printed P values reproduce with no significance flip (largest gaps .11-.15, Gkantidis SN-GoGn and ANS-Me). The one exception is Sivakumar FMA, printed .985 and recomputed .41 (`conflicts.md` A11).

**Certainty, GRADE-style (my judgement)**, for the outcome "skeletal vertical change, four-premolar extraction vs nonextraction":

| Domain | Judgement | Why |
|---|---|---|
| Risk of bias | Serious to very serious | All retrospective; confounding by indication everywhere; 29% of patients in critical-risk studies; assessors unblinded in 13 of 14 |
| Inconsistency | Not serious | I² 0% for the mandibular-plane pool; the significant results are small and split |
| Indirectness | Serious | The outcomes are total cephalometric rotations; the mechanism, space use and dental vertical outcomes are missing; samples are mostly mild-to-moderate high angles |
| Imprecision | Not serious once pooled | The pooled CI is 0.72° wide. As reported (no pooling), it would be serious |
| Publication bias | Undetected, not assessable | No pooling; small retrospective studies |
| **Overall** | **Low** for adolescents with normal to moderately high angles; **very low** for severe hyperdivergence, open bite and adults | — |

## Confounding and growth

Every primary study compared patients a clinician had already chosen to extract with patients chosen not to: confounding by indication. The review's own rule acknowledges this, since no study could be "low" on confounding (p 178). The imbalances in Table I run in both directions:

| Confounder | What the data show (Table I; derived) | Likely direction |
|---|---|---|
| Baseline angle | The extraction group was steeper in 10 of 13 comparisons (+0.9 to +5.8°). The nonextraction group was steeper in Gkantidis, Hayasaki Class II and Paquette (by 0.7-2.0°) | Regression to the mean favours extraction (it looks like a wedge effect). A persisting hyperdivergent growth pattern works against extraction. Net unknown |
| Treatment duration | Extraction treatment was longer in 7 of 8 studies that report it by group (9 of 10 comparisons; by 0.1-0.8 y). Sivakumar is the exception (1.5 vs 2.9 y) | More growth time inflates linear height increases in the extraction groups (against extraction). For angles the effect is tiny, since total mandibular rotation averages −2 to −4° over all of childhood to adulthood (Proffit Ch 4 p 92, V) |
| Vertical mechanics | Opposite by design in Gkantidis (non-extrusive with extraction, extrusive without). The same in both arms in Hayasaki, Hosseinzadeh-Nik, Kirschneck, Kocadereli, Kumari and Porto. Not reported in 7 studies | Where reported, mechanics favoured extraction or were balanced, and the result stayed null. That strengthens the null for the studies that report mechanics |
| Anchorage and space use | Never recorded. Kocadereli's extraction group expected "minimal posterior protraction" because crowding used the space | If the molars barely moved forward, the wedge mechanism was not exercised. That makes the null less informative about the mechanism (indirectness) |
| Growth status | Growing and nongrowing patients were mixed, and no study reported them separately (p 178) | Proffit Ch 14 p 508 (V): long-face vertical growth runs into the late teens or early 20s. Results in 11-year-olds (Gkantidis) and in 17-18-year-olds (Sivakumar) answer different questions |
| Sex | Four studies are female-only and two do not report sex; Paquette and Sivakumar are imbalanced | Ignoring sex (p 177) adds noise between studies. Within-study imbalance adds bias of unknown direction |

**No untreated controls.** Growth and treatment cannot be separated within either arm. Because both arms grow, the between-group comparison is protected. The within-group changes (N-Me +0.9 to +7.0 mm across groups) are mostly growth plus treatment time.

## Validity checklist (AMSTAR 2-style)

The AMSTAR 2 items below are paraphrased from memory (Shea 2017; wording UNVERIFIED). Items that AMSTAR 2 treats as critical are marked \*. The judgements are mine.

| Item | Met? | Comment |
|---|---|---|
| 1. PICO in the question and inclusion criteria | Yes | p 176 |
| 2\*. Protocol registered or established in advance | **No** | "Not registered" (p 176) |
| 3. Choice of study designs explained | Yes | Any design with a treated comparison (p 176); the four-premolar limit is explained by the lack of treated controls for other extraction patterns (pp 184-185) |
| 4\*. Comprehensive search | Partial yes | Four databases, trial registries, grey literature, reference lists and no language limit; the search ended about 5 months before submission. But only the MEDLINE strategy is shown, with no combining line and no face-height or mandibular-plane terms, and experts were not contacted |
| 5. Selection in duplicate | Yes | p 176 |
| 6. Extraction in duplicate | Yes | p 176 |
| 7\*. List of excluded studies with reasons | **No** | Reasons and counts only (flow chart); no names |
| 8. Included studies described in adequate detail | Partial yes | Table I is detailed, but mechanics are NA for 7 studies, and space closure and growth status are missing |
| 9\*. Satisfactory risk-of-bias technique | Yes, with caveats | ROBINS-I is appropriate; the "no information" rule and the uneven ratings weaken it (`conflicts.md` A13-A14) |
| 10. Funding of included studies reported | No | Not reported |
| 11\*. Appropriate meta-analytic methods | Not applicable | No meta-analysis. Whether declining to pool was right is debatable (see Statistics) |
| 12. Impact of risk of bias on pooled results assessed | Not applicable | — |
| 13\*. Risk of bias accounted for in interpretation | Borderline | Kumari is discounted for serious risk (p 185), but the critical-risk null studies count fully toward "considerable agreement". ROBINS-I guidance describes critical-risk studies as too problematic to include in a synthesis (UNVERIFIED this run) |
| 14. Heterogeneity explained and discussed | Yes | Clinical and methodological heterogeneity discussed at length (pp 176-178, 185) |
| 15\*. Publication bias investigated | Not applicable | No quantitative synthesis; reporting bias addressed by search breadth only (p 177) |
| 16. Conflicts of interest and funding reported | Partial yes | ICMJE statement with none reported; no funding statement; the senior author's own included study is not discussed |

**Overall:** two critical weaknesses (items 2 and 7), possibly three (item 13). Under AMSTAR 2's rule, more than one critical weakness gives "critically low" (rule wording UNVERIFIED). Most of these are reporting failures. The data in Tables I-III are complete enough for a reader to redo the synthesis, which is unusual and a real strength.

## External validity (who it does NOT apply to)

**Applies to:** growing adolescents (group means about 11-18 y) with Class I or Class II/1 malocclusion and normal or moderately increased mandibular-plane angles (group means up to 40.0° SN-GoGn), treated with conventional fixed appliances, with or without removal of four first premolars.

**Does not transfer directly to:**

- **Severe hyperdivergence and skeletal open bite.** No included sample was selected for open bite, and no group mean exceeded 40.0° SN-GoGn. For an open bite extending posteriorly, Aras 2002 reports closing rotation with second-premolar or first-molar extraction (VERIFIED abstract), which is outside this review's scope.
- **Hypodivergent patients treated with extraction:** no such group exists (p 185).
- **Adults.** Only a few samples have mean ages above 16 y: Sivakumar 17.2 / 18.5 y, Basciftci Class II extraction 17.4 y, Hosseinzadeh-Nik 16.4 y. Proffit's ramus-growth caveat (Ch 16 p 575, V) means extrusive mechanics cost an adult more. Alrubaie 2026 (adults, prospective) later found the same null (VERIFIED abstract).
- **Class III.** It appears only within Kirschneck's mixed sample, is not reported separately, and may be absent altogether given a 6-9 mm overjet entry criterion (`conflicts.md` B1).
- **Other extraction patterns:** second premolars, molars, two upper premolars or a lower incisor. Kim, Al-Nimri and Ferrillo cover some of these (VERIFIED abstracts).
- **Skeletal anchorage.** No included study reports TADs (Hayasaki states none were used). Molar intrusion on TADs is a different intervention (Proffit Ch 14 p 509, V).
- **Dental vertical problems:** overbite, incisor display and anterior open bite were not outcomes.
- **Change after retention:** all outcomes end at debond.
- **Populations.** The samples came from at least Brazil (Japanese-Brazilians), India, Pakistan, Turkey, Greece, Germany and the US (study titles and affiliations seen this run). No subgroup analysis by ethnicity was possible.

## Strengths

1. **A clinically important, clearly framed question,** with a sensible PICO and a treated-control requirement that avoids comparisons against untreated growth.
2. **A broad search:** four databases, trial registries, grey literature, reference lists and no language restriction.
3. **Duplicate, independent selection and extraction.**
4. **ROBINS-I,** the appropriate risk-of-bias tool for non-randomised studies (published 2016, ref 12), reported domain by domain with reasons (Table II).
5. **Transparent tables.** Every study's means, SDs, P values, sample sizes, baseline angles and durations are printed (Tables I and III). This is what makes the derived pooling and the checks in `conflicts.md` possible.
6. **An internally consistent core.** The flow-chart arithmetic, the risk-of-bias counts and the abstract numbers all close, and the printed P values reproduce except one.
7. **Honest limitations.** Poor primary reporting, uncorrected magnification and retrospective designs are acknowledged (p 185).
8. **A conclusion that later evidence supports.** Rüedi 2024, Ferrillo 2026 and the prospective Alrubaie 2026 all find no skeletal vertical difference (VERIFIED abstracts).

## What would have made it better

1. Register a protocol (PROSPERO) and follow PRISMA. Publish every database strategy with its combining lines and with terms for face height, mandibular plane, hyperdivergence, open bite and wedge.
2. List the 20 excluded full texts with reasons, and say whether Chua 1993 was among them.
3. Extract an effect size per study (MD with 95% CI) and pre-specify one primary outcome: the mandibular-plane angle change, one per study.
4. Pool that outcome with a random-effects model, with sensitivity analyses by risk of bias, vertical pattern and growth status. The data were there: the derived pool is −0.32° (−0.68 to 0.04).
5. Define a clinically important difference in advance (for example 2°) and frame the conclusion as equivalence against it, not as "no effect".
6. Extract the mechanism: molar mesial movement, molar extrusion, space-closure pattern and anchorage, which several primary studies reported.
7. Extract dental vertical outcomes (overbite, incisor and molar heights), the likely route of any real extraction benefit in open bite.
8. Apply ROBINS-I's overall rules as published: "no information" as its own category, and critical only with a critical domain. Have an independent assessor rate the senior author's own study.
9. Grade the certainty with GRADE rather than an informal "moderate to low".
10. Resolve Kumari's data (change vs posttreatment values) with its authors before using it as a headline result, and report the Paquette difference consistently (2.3°).

## Journal-club one-liners

1. "Fourteen retrospective studies, 857 patients: removing four premolars did not change the skeletal vertical dimension compared with treating without extraction."
2. "Four of 42 comparisons were significant, two each way: Porto and Kumari for the wedge, Paquette and Sivakumar against it. That's noise, not a signal."
3. "Pool their own Table III and the mandibular-plane difference is −0.32°, CI −0.68 to 0.04: a more precise null than the review's vote count shows."
4. "Drop the critical-risk studies and you get about half a degree in the wedge direction. Real or regression to the mean, it's below anything you'd act on."
5. "The wedge theory says the molars come forward and the face closes. Gkantidis, Kim and Al-Nimri show the molars came forward and the face didn't close."
6. "Paquette's difference is 2.3°: +0.3 against −2.0° FMA, as Table III says. The 1.7° in the Results text is the figure reported for Porto."
7. "No single study here could detect much less than 1.6°. Each 'no difference' is weak alone; together they are strong."
8. "It measured the skeleton only. If extraction helps an open bite, it's through the incisors, and the review never looked at overbite."
9. "'Regardless of age, sex, malocclusion or vertical pattern' is wider than the data: no subgroup analysis, no open-bite sample, nothing above a mean 40° SN-GoGn."
10. "Clinical bottom line: extract for crowding, protrusion and the profile; control the vertical with mechanics, TADs or surgery, as Proffit's long-face chapter says."
