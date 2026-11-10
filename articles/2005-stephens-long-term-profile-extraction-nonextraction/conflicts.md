# Conflicts and disagreements — Stephens 2005

Use this file when you need to challenge a number, a claim or a citation in Stephens CK, Boley JC, Behrents RG, Alexander RG, Buschang PH. Long-term profile changes in extraction and nonextraction patients. *Am J Orthod Dentofacial Orthop* 2005;128(4):450-7 (doi:10.1016/j.ajodo.2004.04.034).

How this file is organised:

- **A** is the paper against itself. Every table value was read on the page images: Tables I-II on p 451, III-IV on p 453, V on p 454, VI-VII on p 455. The text layer drops every minus sign, so it was not used for numbers. The arithmetic was re-run from the printed means and SDs with `checks.py` in this folder (Student t unless stated; inputs rounded to 0.1).
- **B** is the paper against other studies and the hub registry.
- **C** is the paper against Proffit.
- **D** lists what stays open.
- **E** is the one-paragraph verdict.

Page numbers are journal pages. Numbers from other papers carry VERIFIED (seen in a source this run, usually the PubMed abstract) or UNVERIFIED. "My arithmetic" and "derived" mark anything I computed.

**Sign conventions you need first:**

- **E-line and S-line:** negative = lip behind the line.
- **N'-Sn-Pg' and N'-Pn-Pg':** these are angles measured through the profile. 180° would be a straight line, so a *larger* angle means a *straighter, less convex* profile.
- **Table V:** every value is positive. The text (p 453) reads them as forward and downward movement. The paper never states the convention.

## A. Internal inconsistencies (the paper vs itself)

Severity scale:

- **High:** changes what a reader takes from the paper.
- **Moderate:** a number or direction a consultant could challenge.
- **Low:** a reporting slip.
- **Trivial:** cosmetic.

| # | Where A says | Where B says | Likely truth | Severity | Why it matters |
|---|---|---|---|---|---|
| A1 | Results p 453: a significant "increase in facial convexity" in both groups. Males showed "greater increases in facial convexity" | Discussion p 455: facial convexity "decreased considerably". P 456: orthodontists noticed change "as the profile straightened", and male profiles were "significantly straighter". Abstract p 450: male profiles "became flatter". Tables III-IV: N'-Sn-Pg' rose 163.6 → 167.6° (Ext, +4.0°\*) and 163.5 → 166.4° (Nonext, +2.9°\*); M +5.5°\* vs F +2.6°\* (P = .02) | The angle that Table II *labels* "facial convexity" increased, so the profile became **less convex (straighter)**. The Results sentence reports the label; the Discussion and abstract report the anatomy | High | This is the direction of the headline soft-tissue change and an easy exam trap. Say "the N'-Sn-Pg' angle opened by 3-4°, so the profile straightened" |
| A2 | Table V p 454: Li-h M 5.0 ± 3.2 vs F 2.5 ± 3.2, printed NS. Li-v 2.6 ± 3.5 vs 1.6 ± 3.2, printed .03 | My arithmetic (n 12/28): Li-h P = .029, Li-v P = .38. Welch gives the same pattern (.034 / .41) | The two P values appear transposed within the pair: it is the **horizontal** lower-lip change that differs by sex | Moderate | Decides which way the lower lip differs between the sexes |
| A3 | Table V: UIA-h 4.2 ± 2.9 vs 3.3 ± 2.6, printed .01. UIA-v 4.6 ± 3.3 vs 1.9 ± 2.5, printed NS | My arithmetic: UIA-h P = .34, UIA-v P = .007. Welch: .37 / .021 | Transposed within the pair, as in A2: the upper incisor apex differs by sex **vertically** | Moderate | Same issue at the upper incisor apex |
| A4 | Results p 453: variation in perceived change ran "7.3% to 14.9%" | Table VI p 455: SDs run 6.9 to 14.1 | The table | Low | Quote the table range if asked how variable perception was |
| A5 | Results p 454: about 30% preferred posttreatment, 30% long-term and 30% neither | Table VII p 455: cells run 26.5 to 42.3% and each row sums to 100.0-100.1. Three times 30 is 90 | "Roughly a third each", with one standout: orthodontists chose the posttreatment photo of males 42.3% of the time vs 29.0% for long-term | Low-Moderate | The rounding hides the most lopsided cell in the table |
| A6 | Results p 454: 1 of 18 correlations was significant (orthodontists, N'-Pn-Pg', r = 0.34, P = .03) | Abstract: "no relationship". Conclusion 4 p 457: "no significant correlation" | One nominally significant r, which is compatible with chance. At α .05 across 18 tests, 0.9 false positives are expected and P(at least one) = 0.60 (derived). r² = 0.12 (derived) | Low | Defensible as "no meaningful relationship". "No significant correlation" does not match the one nominally significant r reported on p 454 |
| A7 | Results p 454: for 87.5% of patients, chi-square found significant differences "in the proportions of orthodontists and laypeople" who chose each option | Next sentences: preferences for individual patients were "similar for orthodontists and laypeople". Abstract: no rater-group difference in preferences. Conclusion 5: "clear preferences" for 87% | Most likely the chi-square tested whether each patient's three-way split departed from uniform, i.e. whether raters agreed on that face, rather than comparing orthodontists with laypeople (inference: the paper does not state the null hypothesis). The wording reads both ways | Moderate | If someone quotes "87.5% significant differences between orthodontists and laypeople", the paper's own next sentence contradicts it |
| A8 | Discussion p 456 explains the null male-vs-female preference result with Lines et al: raters prefer straighter male profiles, and the males here became straighter | Table VII: both rater groups favoured the **posttreatment** (less straight) photo for males. Orthodontists 42.3 vs 29.0%; laypeople 36.9 vs 29.6%. The male row is the only lay row where posttreatment wins (descriptive, no test) | The explanation predicts a long-term preference for males. The table points the other way | Low-Moderate | A good tables-first question. It also shows that cephalometric "straighter" did not translate into "preferred" |
| A9 | Tables III-IV label the first variable "N'-Pr-Pg'" | Table II and pp 454/456 use "N'-Pn-Pg'". Fig 1 p 451 defines Pn (pronasale) only | Pn | Low | Label only |
| A10 | Table IV: female U1-SN change printed "−.80" | 103.0 − 103.8 = −0.8 | −0.8° | Trivial | Format |
| A11 | Results p 454: 87.5% "of the patients" | Conclusion 5: 87% "of the profiles" | 35 of 40 patients = 87.5% (derived) | Trivial | Rounding |
| A12 | Methods p 452: method errors "0.3 to 1.4 mm" | Table II p 451: 0.28-1.45. Three of the nine measures are angles (N'-Pn-Pg' 1.40°, N'-Sn-Pg' 1.07°, U1-SN 1.45°) | The table, with mixed units. The error statistic is not named | Low | The angular errors match the size of the effects (see A18) |
| A13 | Abstract p 450: "no significant (P < .05) differences" in preferences | The "<" belongs to significant findings. Non-significance is P ≥ .05 | NS | Low | Notation |
| A14 | Abstract: raters judged change "among the 40 profiles" | Methods p 452: two survey versions, each with 20 patients. Each rater saw 20 | 20 per rater | Low | Design detail |
| A15 | Methods p 452: "T tests" | Table IV L1-NB change M −0.7 ± 1.4 vs F 0.1 ± 0.9, printed .08: Student t gives .036, Welch .088. Table V Col-v printed .03: Student .032, Welch .089. Table V Ls-v printed .04: Student .051 | The t-test variant is not stated and seems to differ between rows. Some printed values sit on the .05 edge after rounding | Low | Reproducibility. The L1-NB result flips with the test choice |
| A16 | Table V: female LIA-v 1.3 ± 3.5 carries an asterisk | My arithmetic, one-sample t (n 28): P = .060 | Borderline, rounding level | Low | Minor |
| A17 | Table V title says "soft-tissue cephalometric landmarks" | It also lists UIE, UIA, LIE, LIA and B point, which are hard tissue. Its asterisk has no footnote and the sign convention is never given. Table VI carries a "\*Significant" footnote but no asterisk | — | Low | Reporting |
| A18 | Conclusion 1 p 457: similarity at follow-up is "demonstrating" that long-term changes were not due to treatment type | Derived 95% CIs for the Ext − Nonext change: LS-E 0.10 mm (−1.22 to 1.42); N'-Sn-Pg' 1.10° (−1.21 to 3.41); H-line 0.50 mm (−0.17 to 1.17). Minimum detectable d at 80% power = 0.91 (derived). The N'-Sn-Pg' arm difference (1.1°) is about the size of its method error (1.07°) | No difference was **detected**. Equivalence was not tested. The data still allow up to about 1.2 mm more extraction-side lip retrusion over 15 y | Moderate | The single most important inference sentence in the paper |
| A19 | Conclusion 2: H-line did not change and is "independent of the nose", so the E-line change "must have been" mainly nose and chin growth | Table II: H-line here is the distance from the superior labial sulcus to Holdaway's H-line, which is drawn tangent to the upper lip and the soft-tissue chin (standard definition, UNVERIFIED against Holdaway's paper this run; the paper does not define the line itself or cite Holdaway). That line contains the chin, and the measure is sulcus depth (lip curvature), not lip position. The direct evidence is in Table V: male Pn-h 6.7 and Pg'-h 7.9 mm vs Ls-h 4.1 and Li-h 5.0 mm | The conclusion is plausible, and the landmark data support it better than the H-line argument does. Derived: the nose outgrew the upper lip by 2.6 mm (M) vs 1.3 mm (F); the chin outgrew the lower lip by 2.9 vs 1.5 mm | Low-Moderate | Quote Table V, not the H-line, when you explain why the lips "retrude" |
| A20 | Results and Discussion attribute the long-term change to nose and chin growth and call the incisor variables matched | Table IV long-term: U1-SN M 109.6 vs F 103.0° (P = .01); L1-NB M 2.3 vs F 4.0 mm (P = .02). Male U1-SN +2.6°\* (within-group). Neither is discussed | Two of the three matching variables drifted apart by sex over 15 y. This may be incisor change or a change in the reference lines (S-N, N-B) with growth; the paper does not say | Moderate | "Treated to the same incisor position" held at debond, not at 30 y, at least by sex |

**Checks that passed** (say so if challenged):

- Long-term minus posttreatment reproduces every printed change within ±0.1 in all four groups (Ext, Nonext, M, F).
- Each Table III two-group mean equals the Table IV sex-weighted mean (12 M, 28 F) within 0.07.
- **Table III:** every between-group P value reproduces with no significance flip. The largest gaps are rounding-level: LS-S at long-term follow-up (.60 vs printed .49) and H-line at posttreatment (.79 vs .88); in the change block, H-line (.14 vs .21) and L1-NB (.26 vs .32).
- **Within-group asterisks, Tables III-IV:** all 21 reproduce (the five measures in each of the four groups, plus male U1-SN at P = .020), and no unstarred change reaches P < .05. The "5 of 9 measures changed" statement (p 453) is correct: N'-Sn-Pg' and the four lip-to-line measures.
- **Table I:** ages add up (e.g. 30.3 − 15.6 = 14.7 y). Overall posttreatment age is 15.07 y and the interval 14.61 y (derived), which fits "average 15 years".
- **Table VI:** P values reproduce when the patient is the unit of analysis (.65/.60, .81/.55, .95/.45 vs printed .63/.59, .80/.57, .95/.45). Every effect is small (d ≤ 0.26, derived).
- **Correlation:** r = 0.34 with n = 40 gives P = .032 (critical |r| = 0.312).
- **Rater counts:** 115 + 110 = 225 laypeople, 330 raters in all.
- **The Table VII direction statements on p 454 match the table:** orthodontists favoured the posttreatment photo in all four rows; laypeople favoured the long-term photo in every row except males.

**How to raise these politely.** Lead with what holds:

- The matching worked: all nine posttreatment P values are .15 or higher.
- The change arithmetic is clean.
- The extraction-vs-nonextraction null reproduces: no between-arm P value changes significance on recomputation.

Then ask three questions, each as a question, not a finding:

1. **A1:** "The Results say convexity increased and the Discussion says it decreased. I read the N'-Sn-Pg' angle opening as a straighter profile. Is that how you read it?"
2. **A18:** "With 20 a side, the confidence interval on the lip change still allows about a millimetre either way. Would you call this equivalence or just no detected difference?"
3. **A20:** "U1-SN and L1-NB drifted apart between the sexes by 30 y (109.6 vs 103.0°). Is that the teeth or the reference lines?"

Keep A2-A3 (Table V transpositions) as a one-line footnote, and leave A9-A17 out of the room. Nothing here is an accusation: these are typesetting-level slips in a 2005 table set, and the main between-arm result does not depend on any of them.

**If the room is working from the circulating colleague summary.** It is accurate on the size of the main numbers (N'-Sn-Pg' about 3-4°, LS-E 3.2 vs 0.9 mm, Pn-h 6.7 vs 3.1 mm, Pg'-h 7.9 vs 4.0 mm, about 36% perceived change). Five points read differently from the paper:

- It repeats the "increased facial convexity" wording (A1).
- It gives "range 14.1 to 15 years" for follow-up. Those are group means (Table I); the individual range is not reported, and SDs reach 4.9 y.
- It calls H-line "H-line to upper lip". The paper defines it to the superior labial sulcus.
- It calls L1-NB an angulation. It is in mm.
- It quotes r = 0.34 without saying it was orthodontists only, N'-Pn-Pg' only, and 1 of 18 correlations.

Correct these by quoting the table, not the summary.

## B. Against other studies and the hub registry

### B1. How much flatter does extraction leave the face at debond? (the effect this design removes)

**Stephens:**
- Introduction p 450: extraction patients are "2 to 4 mm flatter" at the end of treatment (refs 3-7).
- Discussion p 454: Paquette found "about 2 mm".
- Stephens' own debond values were matched: LS-E −5.9 vs −5.4 mm, LI-E −3.6 vs −4.2 mm, P .37 and .42 (Table III).

**What the cited and later studies report:**
- **Paquette, Beattie & Johnston 1992** (33 ext / 30 nonext borderline Class II div 1, matched at *pretreatment*, about 14.5 y out of retention): nonextraction about 2 mm fuller, and the difference persisted to recall. VERIFIED (abstract).
  - Upper lip to E-plane −3.1 vs −0.5 mm. VERIFIED (secondary, quoted in Konstantonis 2012); interval unclear.
- **Bowman & Johnston 2000:** extraction faces 1.8 mm flatter at the end of treatment. Flatter faces were preferred, dentists more so. VERIFIED (abstract).
- **Konstantonis 2012** (borderline Class I, 30 / 32): Ls-E −2.75 vs −0.68 mm; Li-E −3.34 vs +0.67 mm; nasolabial angle +5.34 vs −0.24°. VERIFIED (PMC full text).
- **Konstantonis 2018** systematic review: extraction retracted the lower lip 1.96 mm more (24 studies, 1,456 patients) and the upper lip 1.26 mm more (21 studies). Nasolabial angle +4.21°, convexity 1.24°. GRADE very low. VERIFIED (abstract).
- **Janson 2016** systematic review (Class II div 1): nasolabial angle +2.4 to 5.40° with 2 premolars and +1 to 6.84° with 4 premolars. VERIFIED (abstract).
- **Drobocky & Smith 1989** (160 four-first-premolar cases): lips retracted 3.4 / 3.6 mm to the E-line; 10-15% judged excessively flat. VERIFIED (abstract).
- **Kouli 2019** (geometric morphometrics, 34 / 34): extraction retracted the profile outline; posttreatment intergroup P = 0.054. VERIFIED (abstract).

**Verdict: PARTIAL.** The verified debond difference is about 1.3-2 mm, at or below the low end of Stephens' "2 to 4 mm". Stephens matched it away, so the study can neither confirm nor refute it.

**Journal-club line:** "Extraction does flatten the face, by about one and a half to two millimetres at debond. Stephens deliberately started both groups from the same lips, so this paper tells you about ageing after treatment, not about what extraction does."

### B2. After debond, do extraction and nonextraction faces age in parallel? (the paper's core claim)

**Stephens:** 15-y lip changes Ext vs Nonext were LS-E −1.5 vs −1.6 mm (P .82), LI-E −1.3 vs −1.6 mm (P .66), and N'-Sn-Pg' +4.0 vs +2.9° (P .33) (Table III).

**What the cited and later studies report:**
- **Paquette 1992:** posttreatment settling essentially identical in both groups. AGREES. VERIFIED (abstract).
- **Luppanapornlarp & Johnston 1993** (33 ext / 29 nonext "clear-cut" Class II, about 15 y): both groups showed the same posttreatment decrease in convexity, and extraction patients were still more protrusive at recall. AGREES on parallel change; no dishing-in. VERIFIED (abstract).
  - Stephens cites it (ref 11) for choosing U1-SN and L1-NB as discriminant variables, but the abstract names only "six measures of protrusion and crowding". That point is UNVERIFIED.
- **Zierhut, Joondeph, Årtun & Little 2000** (23 ext / 40 nonext stable Class II div 1): soft-tissue profiles were the same at posttreatment and long term. Both flattened progressively with mandibular and nasal growth, and long-term lips sat behind the Ricketts and Steiner ideals but near untreated-adult norms. AGREES; the closest replication. VERIFIED (abstract); mm values UNVERIFIED.
- **Bishara, Cummins & Zaher 1997** (45 / 46 plus 35 untreated controls, about 2 y): extraction did not change the direction of posttreatment trends. AGREES. VERIFIED (abstract).
- **Bishara, Cummins, Jakobsen & Zaher 1995** (44 / 47, about 2 y): Stephens (p 454) says the E-line differences *increased* after treatment. The abstract says the differences were *preserved*. PARTIAL citation; the "increased" reading is UNVERIFIED (full text not seen).
- **Erdinc, Nanda & Dandajena 2007** (49 / 49, at least 4 y postretention): groups similar at T2 and T3, and the nose kept growing. AGREES. VERIFIED (abstract).
- **Rathod 2015** (47 extraction vs 57 untreated Bolton-Brush controls, about 25 y; Behrents co-authors both papers): similar end-point profiles, with extraction cases changing with a more forward component. AGREES, and adds the untreated control Stephens lacked. VERIFIED (abstract).

**Verdict: AGREES.** No verified study shows extraction faces dishing in more than nonextraction faces after treatment.

**Journal-club line:** "Six independent cohorts, Paquette to Rathod, say the same thing as Stephens: after debond both groups flatten at the same rate, because the nose and chin keep growing."

### B3. Sex dimorphism in soft-tissue ageing

**Stephens:** males vs females, 15 → 30 y:
- LS-E −3.2 vs −0.9 mm, P < .01 (Table IV)
- N'-Sn-Pg' +5.5 vs +2.6°, P = .02 (Table IV)
- Pn-h 6.7 vs 3.1 mm, P = .01 (Table V)
- Pg'-h 7.9 vs 4.0 mm, P = .01 (Table V)

**What other studies report:**
- **Nanda 1990** (untreated, 7-18 y): the nose had the largest relative growth, and the male nose had not reached adult size at 18. Upper-lip length was complete by 15. Soft-tissue pogonion thickness rose 2.4 (M) vs 1.5 mm (F). AGREES. VERIFIED (abstract).
- **Formby, Nanda & Currier 1994** (untreated, 18-42 y): the male profile straightened and both male lips retruded. The female profile did not straighten and female lips did not retrude. The nose grew in both sexes. AGREES for males. PARTIAL for females: Stephens' females did retrude (LS-E −0.9 mm\*), but the 15-30 y window includes late adolescence. VERIFIED (abstract).
- **Behrents 1985** (Stephens ref 18; Behrents is a co-author): soft-tissue change exceeded skeletal change, and the nose kept growing into adulthood. AGREES. VERIFIED only through a secondary source (Behrents' 1986 JCO interview); monograph numbers UNVERIFIED.
- **Bishara, Cummins & Zaher 1997:** posttreatment trends similar in males and females. CONFLICTS. The likely reconciliation is the window: 2 y vs 15 y, and male nose and chin growth comes later. VERIFIED (abstract).

**Journal-club line:** "Sex predicted the 15-year profile change; extraction did not. Males lost 3.2 mm of upper lip to the E-line, females 0.9 mm, because the male nose and chin grew about twice as far forward."

### B4. Perception and preference

**Stephens:**
- About 36% of the VAS was marked as change (33.9-39.2%).
- Orthodontist-lay agreement r = 0.89.
- Preferences split about a third each way, with no extraction, sex or rater-group effect (Tables VI-VII).

**What other studies report:**
- **Bishara & Jakobsen 1997** (Stephens ref 8; 39 lay raters, silhouettes): extraction profile changes were rated more favourably immediately after treatment; at about 2 y no group was favoured. VERIFIED (abstract). PARTIAL. Two citation points:
  - Stephens' introduction (p 450) reports only the "no preference" half.
  - Stephens p 451 cites it for orthodontist *and* lay ratings, but the abstract lists lay raters only.
- **Boley, Pontier, Smith & Fulbright 1998** (Stephens ref 27; Boley co-authors both): 192 dentists and orthodontists identified extraction cases correctly 54% of the time. Stephens (p 456) rounds this to "50%". AGREES. VERIFIED (abstract).
- **Iared 2017** systematic review (1 trial, 5 cohorts): no significant difference in esthetic outcome. AGREES. VERIFIED (abstract).
- **Mendes, Janson et al 2019** (Class II div 1, about 15 y; 77 orthodontists + 77 laypeople): attractiveness on a 0-10 scale fell in every group from posttreatment to long term. VERIFIED (abstract). PARTIAL: four-premolar ≈ nonextraction agrees with Stephens, but the consistent decline and the two-premolar advantage do not.

  | Group | Posttreatment | Long term | Change (derived) |
  |---|---|---|---|
  | NE | 4.76 | 4.32 | −0.44 |
  | 2E | 5.35 | 5.08 | −0.27 |
  | 4E | 4.53 | 4.33 | −0.20 |

  Two-premolar extraction was rated highest at long term.
- **Bravo Vallejo 2024** (E 24 / NE 16, about 34-35 y follow-up): attractiveness similar between groups at all three stages. Laypeople and dentists were harsher than orthodontists. AGREES on groups; PARTIAL on raters. VERIFIED (abstract).
- **Vu, Konstantonis et al 2026** (borderline cases at debond, 200 mm VAS): orthodontists preferred extraction profiles (MD 5.52 mm; 95% CI 1.64-9.40). GPs preferred nonextraction (3.67 mm; 0.43-6.92), and laypeople sided with GPs. VERIFIED (abstract). CONFLICTS with Stephens' "no orthodontist-lay difference", but the question is different (end-of-treatment profiles, not long-term change).
- **Drobocky & Smith 1989** is cited by Stephens (p 451) for subjective judgements disagreeing with cephalometrics. That point is not in its abstract: UNVERIFIED.

**Journal-club line:** "Raters saw about a third of a VAS of change and agreed with each other (r = 0.89), but they did not agree with the ceph: 1 of 18 correlations, r = 0.34. What we measure is not what people look at."

### B5. The hub registry and this session

`registry/claims.md` holds Khaleel 2026 and the three topic-1 superimposition papers and no extraction or profile claim, so this paper confirms or contradicts nothing in the hub. One tangential link:

- `1989-nielsen-maxillary-superimposition-three-methods` and `2018-nguyen-3d-mandibular-regional-superimposition` show that the registration chosen decides the landmark changes you get.
- Stephens measured every landmark from posttreatment sella along S-N −7° (Fig 1, p 451) and never states how the 30-year film was superimposed on the 15-year film.
- Not a conflict; carried to D.

Kokich 2004 (impacted canines, paper 1 of this session) shares no claim with this paper.

## C. Against Proffit (Contemporary Orthodontics)

Chapter numbers follow the 7th-edition numbering in the user's Proffit study pages (wan292/proffit-study-pages), which were read this run.

- **V** = VERIFIED in those pages; it was not checked against the printed book.
- **U** = UNVERIFIED.

| Proffit position (chapter / section) | What this paper found | Verdict | How to reconcile it in an exam answer |
|---|---|---|---|
| Comparable extraction and nonextraction cases differ by about 2 mm of lip fullness; in Black patients extraction retruded the lips more. Ch 7, 7th-edition box (V) | Introduction says 2-4 mm (refs 3-7). The matched groups did not differ at debond or at 15 y (Table III; every P ≥ .10). All patients were white | AGREES that the effect is small. NUANCE: matching on incisor and lip position removes the treatment effect by design | "Extraction costs about 2 mm of lip fullness (Proffit). Stephens shows that, once you finish at the same incisor and lip position, the next 15 years are the same with or without extraction. In white Class I/II patients only" |
| The lips follow about two-thirds of incisor retraction until they are competent; usually 2-3 mm at most in Class I extraction; about 2 mm of space per 1 mm of incisor retraction. Ch 7 (V) | Not measured: records start at debond | NOT TESTED | "The amount of retraction you plan decides the lip; Stephens explains why incisor position was the matching variable" |
| After adolescence the nose and chin become more prominent and the lips do not, so leave lip support at the end of treatment. Ch 2, "Growth of the nose" (V) | 15 → 30 y: LS-E −1.5 / −1.6 mm, LI-E −1.3 / −1.6 mm, N'-Sn-Pg' +4.0 / +2.9° (Ext / Nonext); H-line unchanged (+0.1 / −0.4 mm, NS) (Table III) | AGREES: the paper puts numbers on Proffit's paragraph | "Expect about 1.5 mm of relative lip retrusion to the E-line over 15 years in either treatment group, about 3 mm in a male (Tables III-IV), so don't finish a growing male flat" |
| Adult soft-tissue ageing (Behrents data): the nose lengthens, the lips flatten, thin and sag, less upper incisor shows, and the soft-tissue chin grows. Ch 4 (V) | Change attributed "mainly" to nose and chin (Conclusion 2). The lips also moved forward (Ls-h 4.1 / 1.8 mm, M/F) and down (Ls-v 3.5 / 1.5 mm), but less than the nose (Pn-h 6.7 / 3.1 mm) and chin (Pg'-h 7.9 / 4.0 mm) (Table V) | AGREES on direction. NUANCE: lip thickness and incisor display were not measured, so thinning and sag cannot be tested here. Behrents is a co-author | "Relative retrusion is the nose and chin outgrowing the lips; Proffit adds that the lips also thin and sag, which this study did not measure" |
| Male nasal growth peaks at about 13-14 y and continues to 16-18 y and beyond. Adult female landmarks move down and back, male landmarks down and forward. Ch 4, 7th-edition boxes (V) | Male vs female LS-E −3.2 vs −0.9 mm (P < .01), N'-Sn-Pg' +5.5 vs +2.6° (P = .02) (Table IV). The paper (p 456) puts males about 1 y past peak velocity at 15 y. Female chin and B point still moved forward between 15 and 30 y (Pg'-h 4.0 mm\*, B-h 2.7 mm\*) | AGREES on males. NUANCE: females here are younger than Proffit's adult pattern | "Sex dimorphism, not extraction, explains who flattens most: a male debonded at 15 still has years of nose and chin growth" |
| Contemporary extraction guidelines: under 4 mm crowding rarely extract; 5-9 mm either, decided by hard and soft tissue and the target incisor position; 10 mm or more almost always extract. A large nose or chin argues for keeping the incisors forward; the lower lip should be at least as prominent as the chin. Ch 7 (V) | Treatment type did not change the long-term course when incisors and lips finished alike. Who will age better cannot be predicted (p 456) | AGREES: decide on the target incisor and lip position, not on the label extraction vs nonextraction | "Borderline case: decide by the profile you want at 30, not at 15. Plan for the nose and chin to grow, especially in a male" |
| The "dished-in face" as the classic objection to extraction (whether Proffit uses this wording: U) | The introduction names the dishing-in and lip-strain suppositions (p 450). In matched patients the extraction group did not flatten more over 15 y (Table III) | NUANCE: Stephens tests only the late, post-debond version of the claim | "Stephens found no extra flattening after debond in matched patients. So any flattening from extraction is set at debond, and that is the about 2 mm in row 1" |

## D. Open questions

1. **Sampling frame.** How many extraction patients with 15-year records were screened, and what was the "normal range" for U1-SN, L1-NB and H-line?
2. **Pretreatment data.** What were the crowding, protrusion, ANB and the Class I / Class II split per arm? The survey versions were balanced for Class I and II, so the split was known. Without pretreatment data, confounding by indication cannot be judged.
3. **Matching and analysis.** Were the arms pair-matched (the wording on p 452 suggests so)? If so, why independent t tests rather than paired ones? Was the t test Student or Welch (A15)?
4. **Treatment details.** Which premolars were extracted? What were the treatment duration and retention protocol?
5. **Superimposition.** How was the 30-year cephalogram superimposed on the posttreatment one? Was S-N assumed stable between 15 and 30 y? If nasion remodels in this window, the reference line moves (UNVERIFIED for this age band). Nielsen and Nguyen in the hub show how much the registration choice matters.
6. **Divergence of the matching variables.** Why did U1-SN (109.6 vs 103.0°) and L1-NB (2.3 vs 4.0 mm) diverge between the sexes by 30 y (A20)? Was it tooth movement after retention, or the reference lines moving with growth?
7. **Table V conventions.** What is the sign convention in Table V, and are the Li and UIA P values transposed (A2-A3)?
8. **Photographs and raters.**
   - Were the photographs standardised over 15 years (head posture, lens, lighting)?
   - Were raters able to tell which photo was older from age cues?
   - What does "neither" mean in Table VII: no preference, or no visible difference?
   - How many raters answered each survey version?
   - Did laywomen and laymen differ? Both were recruited separately and never reported separately.
9. **Generalisability of the null.**
   - Would the null hold for over-retracted extraction faces and protrusive nonextraction faces? The "normal range" selection excluded them.
   - Would it hold for two-premolar extractions? Mendes 2019 rated 2E best at 15 y.
10. **Equivalence.** What equivalence margin would the authors accept? The derived CI for the LS-E change difference is −1.22 to 1.42 mm.

## E. One-paragraph verdict

The main between-arm result holds against its own tables: every between-arm P value reproduces as non-significant (within rounding). Twenty extraction and 20 nonextraction patients matched at debond on age, sex, U1-SN, L1-NB and H-line changed alike over about 15 years (LS-E −1.5 vs −1.6 mm, N'-Sn-Pg' +4.0 vs +2.9°, every P ≥ .21). The size of the null is the real limit: with 20 a side, a long-term difference of about 1.2 mm in lip-to-E-line change cannot be excluded, so "demonstrating" (Conclusion 1) is stronger than the data.

The secondary claims need careful wording:

- The profile became straighter, not more convex, whatever the Results sentence says (A1).
- Two pairs of Table V P values look transposed (A2-A3).
- The "no correlation" conclusion is really "1 of 18 at chance level" (A6).
- Two matching variables drifted apart between the sexes by 30 years without comment (A20).

Against the literature, the paper sits squarely in the consensus that extraction and nonextraction faces age in parallel (Paquette, Luppanapornlarp, Zierhut, Erdinc, Rathod), and that the nose and chin, especially in males, drive late relative lip retrusion (Nanda, Formby, Behrents). Its matched design means it cannot speak to the separate and verified finding that extraction leaves the lips about 1.3-2 mm further back at debond (Konstantonis 2018, Bowman, Paquette). Against Proffit, it is the quantitative version of the advice to leave lip support at the end of treatment.

Use it to argue that the extraction decision should be made on the target incisor and lip position, with nose and chin growth (and sex) built into the plan. Do not use it to argue that extraction has no soft-tissue effect, or that the two groups are proven equivalent.
