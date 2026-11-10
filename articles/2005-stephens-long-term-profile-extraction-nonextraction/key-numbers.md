# Key numbers — Stephens 2005 (long-term profile, extraction vs nonextraction)

Stephens CK, Boley JC, Behrents RG, Alexander RG, Buschang PH. Long-term profile changes in extraction and nonextraction patients. Am J Orthod Dentofacial Orthop 2005;128(4):450-7. doi:10.1016/j.ajodo.2004.04.034.

**How the numbers were checked.** Every cell of Tables I-VII below was read from the page images (journal pp 451, 453, 454 and 455). The text extraction drops the minus signs, so the signs here come from the images. Units are mm unless stated. "Derived" means computed here from the printed numbers; the arithmetic is in `checks.py` beside this file. Its inputs are the printed values rounded to 0.1, so recomputed P values are approximate to a few hundredths.

**Sign conventions:**

- **E-line and S-line distances:** negative means the lip lies behind the line. A more negative change means the lip became more retrusive relative to that line.
  - The E-line runs from pronasale to soft-tissue pogonion.
  - The S-line runs from soft-tissue pogonion to the midpoint of the S-shaped curve between subnasale and the nose tip. That definition is from general knowledge (UNVERIFIED); the paper names the line only as Steiner's and cites Hsu and Subtelny for the measures.
- **N'-Sn-Pg' and N'-Pn-Pg':** angles measured at subnasale and at pronasale. 180° is a flat profile, so a **larger** angle means a **straighter, less convex** profile.
- **H-line:** the perpendicular distance from Holdaway's H-line to the superior labial sulcus (Table II), which is a measure of upper-lip sulcus depth.
- **Table V:** every value is printed without a sign and the convention is not defined.
  - The Results text (p 453) says most landmarks moved forward and down, more in males, and the arrows in Fig 3 point forward and down.
  - So positive h is read here as forward and positive v as downward.
- **Coordinate frame:** landmarks are given in x and y relative to **posttreatment sella**, oriented on a reference line through S at S-N −7° (Fig 1, labelled "RL (SN-7°)"). Horizontal change is measured parallel to that line and vertical change perpendicular to it (p 452).
- **Naming:** Tables III and IV print "N'-Pr-Pg'". Table II, Fig 1 and the text (pp 454, 456) use N'-Pn-Pg' (pronasale), and Fig 1 defines only Pn. This file uses N'-Pn-Pg'.
  - Table II writes "Ls-E-Line"; Tables III and IV write "LS-E-line". The same measure is meant, written LS-E here.

## Top 10 numbers to memorise

| Number | What it is | Why it is exam-worthy |
|---|---|---|
| 20 vs 20 (6 M + 14 F each) | Four-premolar extraction vs nonextraction, one orthodontist. Matched on age, sex and three **posttreatment** values: U1-SN, L1-NB, H-line (Table I; p 451) | The design point: the groups were made equal at debond, so the study tests ageing, not the effect of treatment |
| 15.1 → 29.7 y; ≈ 15 y | Mean age at posttreatment and at long-term follow-up (derived from Table I); group mean intervals 14.1-15.0 y | "Average 15 years" in the abstract; the window from late adolescence to early adulthood |
| −1.5 vs −1.6 mm (P .82) | LS-E change, extraction vs nonextraction (Table III) | The headline null: the upper lip fell back relative to the E-line by the same amount in both groups |
| +4.0° vs +2.9° (P .33) | N'-Sn-Pg' change, extraction vs nonextraction; both significant within the group (Table III) | The angle opened, so the profile **straightened** in both groups |
| +0.1 vs −0.4 mm (P .21) | H-line change, extraction vs nonextraction (Table III), not significant | Basis of Conclusion 2: the lip itself did not flatten; the nose and chin grew past it |
| −3.2 vs −0.9 mm (P < .01) | LS-E change, males vs females (Table IV); LI-E −3.0 vs −0.8 mm (P < .01) | Sex, not treatment, decided how much the lips retruded |
| 6.7 vs 3.1 mm; 7.9 vs 4.0 mm | Forward change of pronasale (Pn-h) and soft-tissue pogonion (Pg'-h), males vs females, both P .01 (Table V) | The mechanism: nose and chin growth, about twice as large in males |
| 33.9-39.2 % | Share of the 106 mm visual analogue scale marked as change, all P < .01 (Table VI; p 453) | Change was visible but "small to moderate", with no extraction or sex difference |
| r = 0.89; r = 0.34 | Agreement between orthodontists and laypeople on amount of change (P < .001); the only significant one of 18 perception-ceph correlations, orthodontists with N'-Pn-Pg' (P .03) (p 454) | Raters agreed with each other but not with the ceph |
| ≈ 30 / 30 / 30 %; 87.5 % | Preferred posttreatment / long-term / neither (p 454; Table VII cells 26.5-42.3 %). Chi-square significant for 87.5 % of patients (35 of 40, derived) | No overall preference, but clear preferences for individual faces |

## Study identity

| Item | Value |
|---|---|
| Citation | Stephens CK, Boley JC, Behrents RG, Alexander RG, Buschang PH. Am J Orthod Dentofacial Orthop 2005;128(4):450-7 (October 2005) |
| DOI / PMID | 10.1016/j.ajodo.2004.04.034 (printed p 450). PMID 16214626, from the research pass, which found no letter, comment or erratum on PubMed |
| Authors | Stephens: private practice, Tyler, Tex. Boley: clinical assistant professor, Baylor College of Dentistry, Dallas. Behrents: professor, Saint Louis University Center for Advanced Dental Education. Alexander: clinical professor, Baylor. Buschang: professor, Baylor (reprint requests) |
| Dates | Submitted March 2004; revised and accepted April 2004 |
| Ethics / consent / funding | Not reported |
| Design as stated | Not named in the paper. Retrospective matched historical cohort (two treated arms from one practice) plus a cross-sectional perception survey (hub classification) |
| Treating clinician | "The same orthodontist" for all 40 patients; the practice is not named |
| Length | Pp 450-457; 3 figures, 7 tables, 27 references |
| Hub slug | 2005-stephens-long-term-profile-extraction-nonextraction |

## Sample

| Item | Paper says | Notes |
|---|---|---|
| Patients | 40 white Class I and Class II patients, all treated by the same orthodontist (p 451) | Class I / II split, Class II division and pretreatment values are not reported |
| Arms | 20 four-premolar extraction, 20 nonextraction protocol | Which premolars is not stated beyond "4-premolar" |
| Sex | 6 M and 14 F in each arm (Table I) | 12 M and 28 F overall; 30 % male (derived) |
| Matching variables | Age, sex, and three values from the immediate posttreatment ceph: U1-SN, L1-NB, H-line | U1-SN and L1-NB were chosen from a discriminant analysis (ref 11, Luppanapornlarp & Johnston 1993) as major factors in the extraction decision. The H-line was chosen because it reads lip protrusion independent of nose length |
| Selection order | Extraction group chosen first, with the three measures "in the normal range"; nonextraction patients then matched to them (p 452) | The normal range is not defined. Over-retracted extraction faces and protrusive nonextraction faces are left out by design |
| Not reported | Number screened or eligible for recall, exclusions, treatment duration, appliance, retention protocol, pretreatment records | The recall rate cannot be judged |
| Survey subsets | Two survey versions, each with "approximately equal numbers" of extraction, nonextraction, male, female, Class I and Class II subjects (p 452) | Each rater judged 20 patients, not all 40 |

## Table I — Ages and intervals, years, mean ± SD (p 451)

| Subjects | Extraction | Nonextraction |
|---|---|---|
| **Male** | n = 6 | n = 6 |
| Posttreatment | 15.6 ± 1.5 | 15.1 ± 1.5 |
| Long-term follow-up | 30.3 ± 3.4 | 30.1 ± 5.3 |
| Posttreatment to long-term | 14.7 ± 2.5 | 15.0 ± 4.9 |
| **Female** | n = 14 | n = 14 |
| Posttreatment | 14.8 ± 1.1 | 15.1 ± 2.2 |
| Long-term follow-up | 28.9 ± 5.0 | 30.0 ± 4.4 |
| Posttreatment to long-term | 14.1 ± 4.6 | 14.9 ± 2.9 |

Derived means, weighted by n:

| Group | Posttreatment | Long-term | Interval |
|---|---|---|---|
| All 40 | 15.07 y | 29.68 y | 14.61 y |
| Extraction | 15.04 y | — | 14.28 y |
| Nonextraction | 15.10 y | — | 14.93 y |
| Males | 15.35 y | — | 14.85 y |
| Females | 14.95 y | — | 14.50 y |

No individual age range is printed, and the interval SDs reach 4.9 y.

## Method / protocol

| Item | Value |
|---|---|
| Records | Posttreatment and long-term follow-up cephalograms and profile photographs |
| Digitising | All cephs traced and digitised with Dentofacial Planner (Dentofacial Software, Toronto) |
| Landmarks (15, Fig 1) | S, N, UIA, UIE, LIE, LIA, B, N', Pn (pronasale), Col (columella), Sn, Sls (superior labial sulcus), Ls, Li, Pg'. Definitions from Riolo et al (ref 12) and Daskalogiannakis (ref 13) |
| Frame | Rectangular x / y coordinates. Distances measured relative to posttreatment sella along a reference line at S-N −7°. Pn-h is measured parallel to that line, Pn-v perpendicular to it |
| Superimposition of the long-term film | Not described beyond "relative to posttreatment sella" |
| Profile measures | Nine, defined after Hsu (ref 14) and Subtelny (ref 15) (Table II) |
| Pilot | A pilot study set the number of patients per survey and the wording of the instructions |
| Survey layout | Two versions, each with posttreatment and long-term profile photos of 20 patients (Fig 2), cropped to the nose, lip and chin areas (abstract). Left/right order randomised for each patient; 4 comparisons per page. The instruction page included examples and recorded the evaluator's sex, age and whether they were an orthodontist |
| Raters | 105 orthodontists, 115 laywomen, 110 laymen. 225 laypeople and 330 raters in total (derived). The split of raters between the two versions is not reported |
| Recruitment | Laypeople: doctors' waiting areas, the dental school, family and friends. Orthodontists: meetings, mailings to random American Dental Association lists, and Baylor orthodontic alumni. 60 % reply to the mailings |
| Outcome 1: amount of change | 106 mm visual analogue scale, left anchor "same", right anchor "very different". Distance ÷ 106 gives the % change perceived |
| Outcome 2: preference | Posttreatment photo, long-term photo, or neither |

## Table II — Measurements, definitions and method error (p 451)

| Measurement | Definition | Method error |
|---|---|---|
| N'-Pn-Pg' (°) | Total facial convexity | 1.40 |
| N'-Sn-Pg' (°) | Facial convexity | 1.07 |
| Ls-E-Line (mm) | Upper lip to Ricketts' E-line | 0.34 |
| Li-E-Line (mm) | Lower lip to Ricketts' E-line | 0.29 |
| Ls-S-Line (mm) | Upper lip to Steiner's S-line | 0.44 |
| Li-S-Line (mm) | Lower lip to Steiner's S-line | 0.29 |
| H-Line (mm) | Perpendicular distance from Holdaway's H-line to superior labial sulcus | 0.28 |
| U1-SN (°) | Maxillary incisor to sella-nasion line | 1.45 |
| L1-NB (mm) | Mandibular incisor to nasion-B-point line | 0.44 |

**Reliability:**

- Replicate analyses of 15 patients showed no significant systematic error (p 452).
- The text gives method error as "0.3 to 1.4 mm". Table II runs 0.28-1.45, and three of the nine values are in degrees.
- The error statistic (e.g. Dahlberg) is not named, and blinding of the tracer to group or time point is not stated.

## Statistics

| Item | Value |
|---|---|
| Software | SPSS (Chicago, Ill) |
| Extraction vs nonextraction (and males vs females) | t tests. Pooled or Welch is not stated |
| Posttreatment to long-term change | Paired t tests (asterisks in Tables III-V) |
| Perceived change vs zero | Single-sample t test |
| Perception vs ceph change | Pearson product-moment correlation (18 correlations reported) |
| Preferences | Chi-square on proportions |
| Alpha | P < .05 (footnotes of Tables III, IV, VI and VII; Table V has no footnote) |
| Not reported | Sample-size calculation, confidence intervals, effect sizes, multiplicity correction, chi-square details |
| Number of tests | About 226 (derived count): Tables III 27 + 18, IV 27 + 18, V 24 + 48, VI 6, 18 correlations, 40 chi-square |

## Table III — Extraction vs nonextraction, mean ± SD (p 453)

\* = significant (P < .05) change within the group (printed footnote). The last column is the printed P for the between-group difference.

| Variable | Extraction | Nonextraction | P |
|---|---|---|---|
| **Posttreatment** | | | |
| N'-Pn-Pg' (°) | 131.2 ± 3.3 | 132.2 ± 3.4 | .33 |
| N'-Sn-Pg' (°) | 163.6 ± 4.9 | 163.5 ± 4.8 | .95 |
| LS-E (mm) | −5.9 ± 1.4 | −5.4 ± 2.1 | .37 |
| LI-E (mm) | −3.6 ± 2.2 | −4.2 ± 2.2 | .42 |
| LS-S (mm) | −2.2 ± 1.1 | −2.4 ± 1.9 | .73 |
| LI-S (mm) | −1.2 ± 2.1 | −2.2 ± 2.1 | .15 |
| H-line (mm) | 3.7 ± 1.1 | 3.6 ± 1.3 | .88 |
| U1-SN (°) | 105.6 ± 6.2 | 103.8 ± 6.6 | .38 |
| L1-NB (mm) | 3.9 ± 1.8 | 3.4 ± 1.8 | .42 |
| **Long-term follow-up** | | | |
| N'-Pn-Pg' (°) | 132.1 ± 3.4 | 132.1 ± 4.2 | .99 |
| N'-Sn-Pg' (°) | 167.6 ± 4.9 | 166.4 ± 5.6 | .47 |
| LS-E (mm) | −7.3 ± 2.0 | −7.0 ± 2.7 | .63 |
| LI-E (mm) | −4.9 ± 3.0 | −5.7 ± 2.7 | .36 |
| LS-S (mm) | −3.2 ± 1.4 | −3.5 ± 2.1 | .49 |
| LI-S (mm) | −2.1 ± 2.4 | −3.4 ± 2.2 | .10 |
| H-line (mm) | 3.7 ± 1.2 | 3.2 ± 1.1 | .19 |
| U1-SN (°) | 105.1 ± 6.6 | 104.9 ± 7.6 | .93 |
| L1-NB (mm) | 3.9 ± 2.3 | 3.1 ± 2.0 | .24 |
| **Long-term changes** | | | |
| N'-Pn-Pg' (°) | 0.9 ± 2.8 | −0.2 ± 3.4 | .29 |
| N'-Sn-Pg' (°) | 4.0\* ± 3.5 | 2.9\* ± 3.7 | .33 |
| LS-E (mm) | −1.5\* ± 1.5 | −1.6\* ± 2.5 | .82 |
| LI-E (mm) | −1.3\* ± 1.5 | −1.6\* ± 2.2 | .66 |
| LS-S (mm) | −1.0\* ± 1.4 | −1.2\* ± 2.0 | .70 |
| LI-S (mm) | −0.9\* ± 1.4 | −1.2\* ± 1.8 | .56 |
| H-line (mm) | 0.1 ± 1.1 | −0.4 ± 1.0 | .21 |
| U1-SN (°) | −0.6 ± 4.3 | 1.1 ± 4.0 | .23 |
| L1-NB (mm) | 0.1 ± 1.0 | −0.3 ± 1.2 | .32 |

## Table IV — Males (n = 12) vs females (n = 28), mean ± SD (p 453)

\* = significant (P < .05) change within the sex. The last column is the printed P for the male-female difference.

| Variable | Males | Females | P |
|---|---|---|---|
| **Posttreatment** | | | |
| N'-Pn-Pg' (°) | 132.8 ± 3.5 | 131.3 ± 3.2 | .18 |
| N'-Sn-Pg' (°) | 164.4 ± 4.9 | 163.2 ± 4.7 | .48 |
| LS-E (mm) | −5.8 ± 1.6 | −5.5 ± 1.9 | .69 |
| LI-E (mm) | −4.7 ± 2.1 | −3.5 ± 2.2 | .13 |
| LS-S (mm) | −2.4 ± 1.3 | −2.3 ± 1.7 | .85 |
| LI-S (mm) | −2.4 ± 1.9 | −1.4 ± 2.2 | .19 |
| H-line (mm) | 4.0 ± 1.3 | 3.5 ± 1.2 | .23 |
| U1-SN (°) | 107.0 ± 5.9 | 103.8 ± 6.5 | .15 |
| L1-NB (mm) | 3.0 ± 1.4 | 3.9 ± 1.9 | .17 |
| **Long-term follow-up** | | | |
| N'-Pn-Pg' (°) | 133.4 ± 4.4 | 131.5 ± 3.4 | .14 |
| N'-Sn-Pg' (°) | 169.8 ± 4.1 | 165.8 ± 5.3 | .02 |
| LS-E (mm) | −9.0 ± 2.0 | −6.4 ± 2.1 | < .01 |
| LI-E (mm) | −7.6 ± 2.5 | −4.3 ± 2.4 | < .01 |
| LS-S (mm) | −4.3 ± 1.7 | −2.9 ± 1.6 | .02 |
| LI-S (mm) | −4.4 ± 2.2 | −2.1 ± 2.2 | < .01 |
| H-line (mm) | 3.8 ± 1.3 | 3.3 ± 1.1 | .16 |
| U1-SN (°) | 109.6 ± 5.3 | 103.0 ± 6.8 | .01 |
| L1-NB (mm) | 2.3 ± 1.6 | 4.0 ± 2.2 | .02 |
| **Long-term changes** | | | |
| N'-Pn-Pg' (°) | 0.6 ± 4.3 | 0.3 ± 2.5 | .79 |
| N'-Sn-Pg' (°) | 5.5\* ± 3.6 | 2.6\* ± 3.3 | .02 |
| LS-E (mm) | −3.2\* ± 2.1 | −0.9\* ± 1.5 | < .01 |
| LI-E (mm) | −3.0\* ± 1.7 | −0.8\* ± 1.5 | < .01 |
| LS-S (mm) | −1.9\* ± 1.7 | −0.7\* ± 1.6 | .03 |
| LI-S (mm) | −2.0\* ± 1.4 | −0.7\* ± 1.5 | .01 |
| H-line (mm) | −0.1 ± 1.0 | −0.2 ± 1.1 | .87 |
| U1-SN (°) | 2.6\* ± 3.3 | −0.8 ± 4.2 (printed "−.80") | .02 |
| L1-NB (mm) | −0.7 ± 1.4 | 0.1 ± 0.9 | .08 |

## Table V — Sex differences in horizontal (h) and vertical (v) landmark change, mm, mean ± SD (p 454)

The title says "soft-tissue cephalometric landmarks", but UIE, UIA, LIE, LIA and B are hard-tissue landmarks. The asterisk has no footnote on this table; read it as a significant within-sex change, as in Tables III and IV. The last column is the printed P for the male-female difference; NS = not significant.

| Landmark | h: Males | h: Females | h: P | v: Males | v: Females | v: P |
|---|---|---|---|---|---|---|
| Pn (pronasale) | 6.7\* ± 4.8 | 3.1\* ± 3.3 | .01 | 2.7\* ± 2.9 | 0.4 ± 2.5 | .01 |
| Col (columella) | 4.9\* ± 3.6 | 2.6\* ± 3.3 | .05 | 3.0\* ± 3.9 | 0.8 ± 2.3 | .03 |
| Sn (subnasale) | 3.5\* ± 3.0 | 1.5\* ± 3.3 | NS | 2.3 ± 4.1 | 0.7 ± 2.3 | NS |
| Sls (superior labial sulcus) | 3.4\* ± 2.9 | 1.6\* ± 3.0 | NS | 3.5\* ± 3.5 | 1.9\* ± 2.1 | NS |
| Ls (labrale superius) | 4.1\* ± 3.7 | 1.8\* ± 3.1 | .05 | 3.5\* ± 2.8 | 1.5\* ± 2.9 | .04 |
| Li (labrale inferius) | 5.0\* ± 3.2 | 2.5\* ± 3.2 | NS | 2.6\* ± 3.5 | 1.6\* ± 3.2 | .03 |
| Pg' (soft-tissue pogonion) | 7.9\* ± 4.2 | 4.0\* ± 3.9 | .01 | 5.6\* ± 4.8 | 1.8\* ± 3.8 | .01 |
| UIE (upper incisal edge) | 4.7\* ± 2.6 | 3.3\* ± 2.9 | NS | 3.1\* ± 3.2 | 1.9\* ± 3.1 | NS |
| UIA (upper incisor apex) | 4.2\* ± 2.9 | 3.3\* ± 2.6 | .01 | 4.6\* ± 3.3 | 1.9\* ± 2.5 | NS |
| LIE (lower incisal edge) | 3.9\* ± 2.7 | 2.5\* ± 2.8 | NS | 1.6 ± 3.2 | 0.2 ± 3.1 | NS |
| LIA (lower incisor apex) | 4.6\* ± 2.8 | 2.0\* ± 3.3 | .02 | 3.8\* ± 4.0 | 1.3\* ± 3.5 | .06 |
| B (B point) | 5.1\* ± 3.1 | 2.7\* ± 3.2 | .04 | 2.2 ± 3.8 | 0.2 ± 3.5 | NS |

The Results text (p 453) says the landmark changes did not differ between extraction and nonextraction. No table of landmark changes by treatment group is given.

## Table VI — Perceived change, % of the 106 mm visual analogue scale, mean ± SD (p 455)

| Raters | Extraction | Nonextraction | P | Male | Female | P |
|---|---|---|---|---|---|---|
| Orthodontists | 35.8 ± 12.8 | 33.9 ± 13.5 | .63 | 36.6 ± 10.7 | 34.2 ± 14.1 | .59 |
| Laypeople | 38.2 ± 8.2 | 37.5 ± 10.1 | .80 | 39.2 ± 6.9 | 37.3 ± 10.0 | .57 |
| Combined | 36.5 ± 9.7 | 36.3 ± 10.9 | .95 | 38.3 ± 7.9 | 35.6 ± 11.0 | .45 |

"Male" and "Female" refer to the patients. The P values reproduce when each patient is the unit of analysis (n 20/20 and 12/28; derived, checks.py §11).

## Table VII — % of raters preferring each photo, mean ± SD across patients (p 455)

| Patient group | Orthodontists: posttreatment | Orthodontists: long-term | Orthodontists: neither | Laypeople: posttreatment | Laypeople: long-term | Laypeople: neither |
|---|---|---|---|---|---|---|
| Extraction | 37.5 ± 19.0 | 36.0 ± 21.2 | 26.5 ± 17.4 | 32.0 ± 13.0 | 38.6 ± 19.1 | 29.5 ± 14.7 |
| Nonextraction | 38.3 ± 26.5 | 28.9 ± 25.5 | 32.8 ± 21.0 | 32.5 ± 16.9 | 32.9 ± 19.2 | 34.6 ± 16.8 |
| Male | 42.3 ± 21.9 | 29.0 ± 21.3 | 28.7 ± 15.3 | 36.9 ± 12.4 | 29.6 ± 13.3 | 33.5 ± 13.9 |
| Female | 36.0 ± 23.3 | 34.0 ± 24.5 | 30.0 ± 21.0 | 30.3 ± 15.6 | 38.3 ± 20.8 | 31.4 ± 16.7 |

No cell carries an asterisk.

## Numbers stated in the text, checked against the tables

| Statement (page) | Printed value | Table check |
|---|---|---|
| Extraction cases flatter at the end of treatment, refs 3-7 (p 450) | "2 to 4 mm", on average | Literature, not this sample. The research pass found 1.8 mm (Bowman & Johnston 2000) and about 2 mm (Paquette 1992) in those references (VERIFIED abstracts); see the literature table |
| Long-term interval (abstract; p 451) | Average 15 years | Group means 14.1-15.0 y; overall 14.61 y (derived) |
| Measures that changed (p 453) | 5 of 9, P < .05 | Table III asterisks: N'-Sn-Pg', LS-E, LI-E, LS-S, LI-S in both groups. Consistent |
| Direction of the convexity change (p 453 vs p 455) | Results: "increase in facial convexity". Discussion: convexity "decreased considerably"; p 456 "as the profile straightened" | The N'-Sn-Pg' angle rose (+4.0° / +2.9°), which is a straighter, **less convex** profile. The Discussion wording matches the numbers |
| Lip protrusion and total convexity (p 453) | No significant change | H-line +0.1 / −0.4 mm; N'-Pn-Pg' +0.9° / −0.2°. Consistent |
| Males (p 453) | "greater increases in facial convexity" | N'-Sn-Pg' +5.5° vs +2.6°: the male profile straightened more. The Discussion says male profiles were "significantly straighter" at follow-up (p 456): 169.8° vs 165.8°, P .02 |
| Amount of change perceived (p 453) | 33.9 % to 39.2 %, all P < .01 | Table VI range: 33.9 (orthodontists, nonextraction) to 39.2 (laypeople, male patients). Consistent |
| Variation in perceived change (p 453) | "7.3% to 14.9%" | Table VI SDs run 6.9-14.1 |
| Orthodontist vs layperson agreement (p 454) | r = 0.89, P < .001 | No table |
| Perception vs ceph (p 454) | 1 of 18 correlations significant: N'-Pn-Pg' with orthodontists, r = 0.34, P = .03 | r = 0.34 with n = 40 gives P .032 (derived) |
| Preferences (p 454) | About 30 % posttreatment, 30 % long-term, 30 % neither | Table VII cells 26.5-42.3 %; each row sums to 100.0-100.1 (derived) |
| Orthodontists' leaning (p 454) | Preferred posttreatment photos for all groups | Table VII: 37.5 > 36.0; 38.3 > 28.9; 42.3 > 29.0; 36.0 > 34.0. Consistent |
| Laypeople's leaning (p 454) | Preferred long-term photos for all groups except males | 38.6 > 32.0; 32.9 > 32.5; males 29.6 < 36.9; 38.3 > 30.3. Consistent; nonextraction margin 0.4 points |
| Individual patients (p 454) | Chi-square P < .05 for 87.5 % of patients | 35 of 40 (derived). Conclusion 5 rounds to 87 % |
| Examples (p 454) | About 90 % of orthodontists preferred the long-term photo for one case; 80 % preferred the posttreatment photo for another | No table |
| Paquette 1992 (p 454) | Extraction profiles flatter, lips more retrusive, "about 2 mm" | Literature as cited |
| Bishara 1995 (p 454) | E-line differences increased during follow-up of only 2-3 y | Literature as cited; the abstract says "preserved" (VERIFIED abstract) |
| Boley 1998 (p 456) | Dental professionals identified extraction cases only 50 % of the time | Abstract gives 54 % (VERIFIED) |
| Male growth (p 456) | At about 15 y, males are about 1 year past peak velocity | Authors' inference; no growth data in the paper |
| Conclusion 2 (p 457) | Profile changes between 15 and 30 years of age | Table I: 15.07 → 29.68 y (derived) |
| Abstract | Raters judged "among the 40 profiles" | Each rater saw one survey version of 20 patients (p 452) |
| Abstract | "no significant (P < .05) differences" | The intended reading is not significant (P > .05) |

## Derived numbers

All values below are derived from the printed tables; checks.py holds the arithmetic.

### a. Long-term minus posttreatment vs the printed change

Every printed change matches the difference of the printed means within ±0.1 in all four groups (extraction, nonextraction, males, females; checks.py §9). For example, U1-SN in the extraction group: 105.1 − 105.6 = −0.5 against a printed −0.6.

The Table III two-group means also equal the Table IV means weighted 12 M / 28 F within 0.07 (checks.py §10).

### b. Extraction minus nonextraction, long-term change (Table III)

| Measure | Difference | Cohen's d | 95 % CI of difference | Recomputed P (printed) |
|---|---|---|---|---|
| N'-Pn-Pg' | +1.10° | 0.35 | −0.89 to 3.09 | .27 (.29) |
| N'-Sn-Pg' | +1.10° | 0.31 | −1.21 to 3.41 | .34 (.33) |
| LS-E | +0.10 mm | 0.05 | −1.22 to 1.42 | .88 (.82) |
| LI-E | +0.30 mm | 0.16 | −0.91 to 1.51 | .62 (.66) |
| LS-S | +0.20 mm | 0.12 | −0.91 to 1.31 | .72 (.70) |
| LI-S | +0.30 mm | 0.19 | −0.73 to 1.33 | .56 (.56) |
| H-line | +0.50 mm | 0.48 | −0.17 to 1.17 | .14 (.21) |
| U1-SN | −1.70° | −0.41 | −4.36 to 0.96 | .20 (.23) |
| L1-NB | +0.40 mm | 0.36 | −0.31 to 1.11 | .26 (.32) |

All |d| fall between 0.05 and 0.48. None of the confidence intervals excludes zero, but the LS-E interval still allows a true difference of up to about 1.4 mm in either direction. "No difference detected" is therefore not the same as "shown to be equal".

### c. Males minus females, long-term change (Table IV; Student t, n 12 / 28)

| Measure | Difference | Cohen's d | Recomputed P (printed) |
|---|---|---|---|
| N'-Sn-Pg' | +2.90° | 0.86 | .018 (.02) |
| LS-E | −2.30 mm | −1.36 | < .001 (< .01) |
| LI-E | −2.20 mm | −1.41 | < .001 (< .01) |
| LS-S | −1.20 mm | −0.74 | .039 (.03) |
| LI-S | −1.30 mm | −0.88 | .015 (.01) |
| H-line | +0.10 mm | 0.09 | .79 (.87) |
| U1-SN | +3.40° | 0.86 | .017 (.02) |
| L1-NB | −0.80 mm | −0.75 | .036 with Student, .088 with Welch (.08) |

The sex effects are large: |d| 0.74-1.41 for the lip lines.

For L1-NB the printed P (.08) matches the Welch test, but Table V Col-v (printed .03) matches only the Student test (Welch .089). The variant of t test is not stated.

### d. Long-term level differences, males minus females (Table IV)

| Measure | Difference | Cohen's d | Recomputed P (printed) |
|---|---|---|---|
| U1-SN | +6.6° | 1.03 | .005 (.01) |
| L1-NB | −1.7 mm | −0.83 | .021 (.02) |
| LS-E | −2.6 mm | −1.26 | .001 (< .01) |
| N'-Sn-Pg' | +4.0° | 0.80 | .025 (.02) |

U1-SN and L1-NB were matching variables, alike at posttreatment (P .15 and .17), and they had diverged by sex at follow-up. The paper does not discuss this.

### e. Rates per year (change ÷ mean interval)

| Measure | Extraction | Nonextraction | Males | Females |
|---|---|---|---|---|
| LS-E | −0.11 mm/y | −0.11 mm/y | −0.22 mm/y | −0.06 mm/y |
| N'-Sn-Pg' | +0.28°/y | +0.19°/y | +0.37°/y | +0.18°/y |

These assume linear change, which the paper did not test.

### f. Table V: the nose and chin outgrow the lips (horizontal change, males / females)

- Pn-h minus Ls-h (nose ahead of the upper lip): 2.6 / 1.3 mm.
- Pg'-h minus Li-h (chin ahead of the lower lip): 2.9 / 1.5 mm.
- Male-to-female ratios: Pn-h 2.2×, Pg'-h 2.0×, Ls-h 2.3×, Li-h 2.0×, LS-E change 3.6×, LI-E change 3.75×.
- Vertical: male pronasale moved down 2.7 mm against 0.4 mm in females (not significant within females).

### g. Table V recomputations (Student t, n 12 / 28; checks.py §7)

Most cells reproduce. Two pairs do not:

| Pair | Recomputed P | Printed P |
|---|---|---|
| Li-h / Li-v | .029 / .384 | NS / .03 |
| UIA-h / UIA-v | .338 / .007 | .01 / NS |

The pattern fits the two P values in each pair having been entered in each other's rows.

Two cells are borderline:

- Ls-v recomputes to .051 (printed .04).
- The female LIA-v asterisk recomputes to a within-sex P of .060.

### h. Perception (Tables VI and VII)

- **Laypeople minus orthodontists, perceived change:** extraction +2.4, nonextraction +3.6, male patients +2.6, female patients +3.1 percentage points. None was significant per the text.
- **Effect sizes in Table VI:** every d ≤ 0.26. The single-sample t for combined raters on extraction patients is 16.8 (P < .001).
- **Table VII, orthodontists' posttreatment-minus-long-term margin:** extraction +1.5, nonextraction +9.4, male +13.3, female +2.0 points.
- **Table VII, laypeople's long-term-minus-posttreatment margin:** extraction +6.6, nonextraction +0.4, male −7.3, female +8.0 points.

### i. Correlations

- Critical |r| at P < .05 with n = 40 is 0.312.
- With 18 correlations at α .05, about 0.9 false positives are expected by chance, and P(at least one) = 0.60. The single r = 0.34 is compatible with chance.

### j. Power and detectable differences (two-sided α .05, power 80 %)

- **Minimum detectable effect:** d 0.91 for 20 vs 20 and d 0.99 for 12 vs 28. Power to detect d = 0.5 with 20 vs 20 is 0.34.
- **In units (Table III changes):**

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

- **Against method error:** the extraction-nonextraction difference in N'-Sn-Pg' change (1.1°) is the size of that measure's method error (1.07°). The U1-SN difference (−1.7°) is close to its method error (1.45°).

### k. Multiplicity

- About 226 tests (derived count) with no correction.
- Bonferroni across the nine change outcomes (α .0056): only the male-female difference in LS-E and LI-E change survives. No extraction-nonextraction comparison was close to significance in the first place.

## Numbers from the literature to keep beside these

"VERIFIED" = seen in a source during the research pass, in the abstract unless stated otherwise. Proffit items come from the user's study pages (wan292/proffit-study-pages, 7th-edition chapter numbering), VERIFIED in those notes and not checked against the printed book.

| Source | Number | Status |
|---|---|---|
| Paquette, Beattie & Johnston 1992, AJODO 102:1-14 | Borderline Class II div 1, 33 extraction / 30 nonextraction, matched **pretreatment** by discriminant analysis, 14.5 y after treatment. Nonextraction profiles about 2 mm fuller; the difference persisted to recall; posttreatment changes alike | VERIFIED (abstract). Upper lip to E-plane −3.1 vs −0.5 mm: VERIFIED secondary (quoted in Konstantonis 2012) |
| Luppanapornlarp & Johnston 1993, Angle Orthod 63:257-72 | "Clear-cut" Class II cases from 238: 33 extraction / 29 nonextraction, about 15 y. Extraction reduced protrusion more; both groups then showed the same decrease in convexity; extraction cases still more protrusive at recall | VERIFIED (abstract). Whether U1-SN and L1-NB are its discriminant variables is UNVERIFIED (the abstract lists only "six measures of protrusion and crowding") |
| Bishara, Cummins, Jakobsen & Zaher 1995, AJODO 107:28-37 | Class II div 1, 44 extraction / 47 nonextraction, about 2 y. Extraction lips more protrusive before and more retrusive after; differences "preserved into retention" | VERIFIED (abstract) |
| Bishara, Cummins & Zaher 1997, AJODO 111:18-27 | 45 extraction / 46 nonextraction + 35 untreated, about 2 y. Extraction did not change posttreatment trends; trends alike in males and females | VERIFIED (abstract) |
| Bishara & Jakobsen 1997, AJODO 112:639-44 | 39 laypersons rated silhouettes. Extraction profile changes rated better right after treatment; no group preferred about 2 y later | VERIFIED (abstract; lay raters only) |
| Zierhut, Joondeph, Årtun & Little 2000, Angle Orthod 70:208-19 | Class II div 1, 23 extraction / 40 nonextraction. Profiles alike at posttreatment and long-term; both flattened (mandibular and nasal growth) | VERIFIED (abstract); follow-up length (about 14 y) and mm values UNVERIFIED |
| Bowman & Johnston 2000, Angle Orthod 70:3-10 | 70 extraction / 50 nonextraction; extraction faces 1.8 mm flatter at the end of treatment; 58 laypersons + 42 dentists preferred flatter faces | VERIFIED (abstract) |
| Boley, Pontier, Smith & Fulbright 1998, Angle Orthod 68:539-46 | 25 extraction / 25 nonextraction; 192 dentists and orthodontists identified extraction cases correctly 54 % of the time | VERIFIED (abstract) |
| Drobocky & Smith 1989, AJODO 95:220-30 | 160 four-first-premolar cases: nasolabial angle +5.2°; upper / lower lip retracted 3.4 / 3.6 mm to the E-line; 10-15 % excessively flat | VERIFIED (abstract) |
| Nanda, Meng, Kapila & Goorhuis 1990, Angle Orthod 60:177-90 | Untreated, 17 M / 23 F, 7-18 y. Nose has the largest relative growth; male nose not at adult size at 18; lip-length gain 6.9 (M) vs 2.65 mm (F) | VERIFIED (abstract) |
| Formby, Nanda & Currier 1994, AJODO 105:464-76 | Untreated adults, 24 M / 23 F, 18-42 y. Male profile straightened and both lips retruded; female profile did not straighten and lips did not retrude; nose grew in both | VERIFIED (abstract) |
| Behrents 1985, Monograph 17 | Adult soft tissue changes more than skeleton; nose keeps growing; face longer and flatter | VERIFIED secondary only; monograph numbers UNVERIFIED |
| Rathod, Araujo, Vaden, Behrents & Oliver 2015, AJODO 147:596-603 | 47 premolar-extraction vs 57 untreated: similar end-point profiles | VERIFIED (abstract). Follow-up length (about 25 y) and Bolton-Brush source of the controls UNVERIFIED (not in the abstract) |
| Erdinc, Nanda & Dandajena 2007, AJODO 132:324-31 | 49 extraction / 49 nonextraction, ≥ 4 y postretention: groups alike at T2 and T3; nose continued to grow | VERIFIED (abstract) |
| Mendes, Janson, Junqueira-Mendes & Garib 2019, AJODO 155:362-71 | Class II div 1, about 15 y after treatment. Attractiveness on a 10-point scale, posttreatment → long term: nonextraction 4.76 → 4.32; 2-premolar 5.35 → 5.08; 4-premolar 4.53 → 4.33 | VERIFIED (abstract) |
| Bravo Vallejo et al 2024, AJODO 165:513-9 | 24 extraction / 16 nonextraction, about 34-35 y follow-up: attractiveness alike at all stages | VERIFIED (abstract) |
| Konstantonis, Vasileiou, Papageorgiou & Eliades 2018, Eur J Oral Sci 126:167-79 | Systematic review, 52 studies, 1,876 patients. Extraction vs nonextraction (treatment effect): lower lip retraction 1.96 mm, upper lip 1.26 mm, nasolabial angle 4.21°, convexity 1.24°; GRADE very low | VERIFIED (abstract + Dental Elf) |
| Konstantonis 2012, Angle Orthod 82:209-17 | Borderline Class I, 30 extraction / 32 nonextraction, pre to post: Ls-E −2.75 vs −0.68 mm; Li-E −3.34 vs +0.67 mm; nasolabial +5.34° vs −0.24° | VERIFIED (PMC full text) |
| Janson, Mendes, Junqueira & Garib 2016, Eur J Orthod 38:631-7 | Systematic review, Class II div 1: nasolabial angle +2.4 to 5.40° (2 premolars), +1 to 6.84° (4 premolars) | VERIFIED (abstract) |
| Iared et al 2017, JADA 148:9-16 | Systematic review, 1 trial + 5 cohorts: no significant difference in esthetic outcome | VERIFIED (abstract) |
| Vu, Konstantonis et al 2026, AJODO 169:588-604 | End-of-treatment profiles, 200 mm VAS: orthodontists preferred extraction (mean difference 5.52 mm, 95 % CI 1.64-9.40); general dentists preferred nonextraction (3.67 mm, 0.43-6.92) | VERIFIED (abstract) |
| Proffit Ch 7 (extraction and lip fullness) | Comparable extraction and nonextraction cases differ by about 2 mm of lip fullness; in Black patients extraction retruded the lips more. The lips follow about two-thirds of incisor retraction until competent | VERIFIED in the user's study pages |
| Proffit Ch 7 (extraction guidelines) | Under 4 mm crowding rarely extract; 5-9 mm either; 10 mm or more almost always. A large nose or chin argues for keeping the incisors forward | VERIFIED in the user's study pages |
| Proffit Ch 2 (growth of the nose) | Nose and chin become more prominent after adolescence, the lips do not; plan lip support at the end of treatment | VERIFIED in the user's study pages |
| Proffit Ch 4 (adult soft tissue, Behrents) | Nose lengthens, lips flatten and thin, soft-tissue chin grows. Male nasal growth peaks at about 13-14 y and continues to 16-18 y and beyond | VERIFIED in the user's study pages |
| Ricketts E-line norms | Upper lip about −4 mm and lower lip about −2 mm to the E-line in adults (commonly quoted) | UNVERIFIED (from memory; not in this paper or the research pass) |
