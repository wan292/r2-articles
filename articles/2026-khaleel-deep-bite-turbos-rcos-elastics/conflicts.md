# Conflicts and disagreements — Khaleel & Al-Nimri 2026

Use this file when you need to challenge a number, a claim or a citation in Khaleel R, Al-Nimri K. *Angle Orthod* 2026;96(5):528-535 (DOI 10.2319/100925-850.1): Section A is the paper against itself (every row checked against the page images of Tables 1-5 and the arithmetic re-run), Section B is the paper against the two earlier JUST trials, the classics and the 2019-2026 literature, Section C is the paper against Proffit, D lists what stays unresolved and E is the one-paragraph verdict. Page numbers are journal pages (528-535). External-study numbers come from the research pack, which tagged each as VERIFIED or UNVERIFIED; I re-checked the 2022 and 2025 JUST papers against their PMC full-text tables locally, and nothing else. "The paper says", "the literature says" and "my read / my arithmetic" are used deliberately.

## A. Internal inconsistencies (the paper vs itself)

All 36 audit items were confirmed on the page images or in the text; none had to be dropped. Where a row rests on arithmetic I recomputed it from the printed means, SDs and group sizes (script: `checks.py` in this folder). Severity: **high** = changes how a result should be read; **medium** = misleads; **low** = cosmetic.

One finding runs through several rows and is worth stating first. The three Tukey standard errors in Table 2 and in every block of Table 5 have the same squared ratios (I-III/I-II = 1.266, II-III/I-II = 1.232). Tukey SE² = MSE × (1/n_a + 1/n_b), so with 27/27/26 the three SEs would be equal to within 1 %. Solving the ratios gives n = 29 / 31 / 20 for duration, Mn-Mx, LFH and FH-Mn alike. With those sizes, and with the text's SD of 20.5 d for Group I, the printed SEs (3.759 / 4.229 / 4.173) reproduce to the third decimal (3.755 / 4.225 / 4.169), and ten of the fourteen continuous Table 1 P values reproduce to the second or third decimal as well (age .066, SNB .093, ANB .129, Mn-Mx .145, L.C.I .147, L4 .695, L6 .091, L7 .079, overbite .069, LFH .824). My read: the arms were about 29, 31 and 20, not "three equal groups", and the tables were assembled from at least two data versions.

| # | Where A says | Where B says | Likely truth | Severity | Why it matters |
|---|---|---|---|---|---|
| A1 (INC-01) | Abstract p528: Group III 94.2 d. Table 2 p532: 94.15 ± 7.08 d | Results p531: 94.4 ± 7.1 d | 94.40 d. My arithmetic: Table 2's own Tukey differences give 55.72 + 38.676 = 94.40 and 44.42 + 49.981 = 94.40. The text is right; the table and the abstract are wrong | Medium | Three values for the primary outcome in one paper, and the one in the table is the wrong one |
| A2 (INC-02) | Results p531: Group I 55.7 ± 20.5 d | Table 2 p532: 55.72 ± 10.52 d | 20.5. My arithmetic: only SD 20.5 (with n = 29/31/20) reproduces the printed SEs 3.759 / 4.229 / 4.173; SD 10.52 gives 2.6 / 2.9 / 2.9 | Medium | The RCOS arm is twice as variable as the table shows (CV 37 % vs 24 % and 8 %); Cohen d for I vs II falls from 1.06 to 0.70 |
| A3 (INC-03) | Abstract p528 "three equal groups"; Table 1 gender 27/27/27; Results p530 "80 completed" | Table 2 and Table 5 Tukey SEs: I-II 3.759, I-III 4.229, II-III 4.173 (same ratios in all four outcomes) | Analysed arms were about 29 / 31 / 20 (total 80), see the paragraph above | High | The sample description cannot generate the statistics; the smallest arm (turbos alone, n ≈ 20) is the reference for every skeletal contrast; per-arm n is never stated |
| A4 (INC-04) | Methods p529: 25 males, 56 females | Table 1 p531: M 10/12/9, F 17/15/18 = 31 M, 50 F | Unknown which is right. My arithmetic: chi-square on the Table 1 counts = 0.73, P = .69, not the printed .11 | Medium | Demographics that do not add up; the printed P does not belong to the printed counts |
| A5 (INC-05) | Results p530: no significant baseline differences (Table 1) | Table 1 printed P: crowding .095, SNA .062, L5Tip .701, age .067, overbite .068 | Mixed. My arithmetic (one-way ANOVA from printed means/SDs): ten of fourteen P values reproduce only if n = 29/31/20 (which corroborates A3); crowding (P ≈ .009 under any n), SNA (≈ .026), L5Tip (≈ .004-.009, printed .701) and U.C.I Tip (≈ .51, printed .130) do not reproduce at all | High | In an operator-allocated study Table 1 is the only defence against selection bias. The variable used to allocate (alignment: crowding 1.25 / 1.58 / 1.81 mm) differs between arms by my recomputation, and age and overbite sit at P ≈ .07 with gaps of about 0.6-0.7 SD |
| A6 (INC-06) | Results p532: Group II lower posterior extrusion "0.6 mm at the premolars to 1.5 mm at the molars"; Abstract: "up to 1.1 mm" | Table 4 p533: Group II 1.19 / 1.14 mm (premolars), 1.12 / 1.08 / 0.93 / 0.90 mm (molars) | Table 4: 0.90-1.19 mm, premolars more than molars, the opposite gradient to the text; neither 0.6 nor 1.5 appears anywhere | Medium | Text describes a molar-dominant pattern the data contradict; the abstract maximum (1.1) is also wrong (1.19) |
| A7 (INC-07) | Results p532: Group II upper incisors proclined "1.5°" | Table 3 p532: UI-Mx Group II −0.34 ± 2.87°; Group III 1.47 ± 1.22° | Column slip: 1.47° is Group III; Group II is −0.34° | Medium | Attributes upper-incisor flaring to the elastics arm; it happened in the turbos-alone arm |
| A8 (INC-08) | Results p532: Group II lower incisor inclination and vertical position "did not show significant changes"; Abstract: "minimal incisor change" | Table 3: LI-CA 3.46 ± 3.89°; Table 4: lower incisor V −1.02 ± 0.53 mm, H 0.61 ± 0.44 mm | Both significant. My arithmetic: paired t ≈ 4.0-5.0 (P < .001) for LI-CA at any n from 20 to 31; t ≈ 8.6-10.7 for the vertical change | Medium | The claimed elastics advantage (anterior position preserved) rests on a non-finding; 3.46° is more than twice Group III's 1.55° |
| A9 (INC-09) | Abstract, Discussion p534, Conclusions p535: RCOS gave "true incisor intrusion (1 mm)" | Table 4: Point I 0.99 / 0.71 / 0.86 mm in Groups I / II / III; no between-group test on Point I anywhere | Point I changed by about the same amount in all three arms; Group III (0.014 NiTi + turbos) shows 0.86 mm | High | The headline mechanistic claim is not RCOS-specific in the paper's own data; the only incisor variable that differs between arms is the incisal tip, which is dominated by 7.46° of tipping |
| A10 (INC-10) | Table 4: lower incisor V −2.46 / −1.02 / −1.25; Point I V +0.99 / +0.71 / +0.86; footnote defines only "V, vertical" | Results p531-532: tip "moved downward" 2.46 mm and incisors "intruded 1 mm", both meaning intrusion | No sign convention is stated and the two rows cannot share one. The group's 2022 and 2025 papers sign Point I negative for intrusion (−1.01 / −0.28; −0.78 / −1.03 / −1.01), so Point I here is probably an unsigned magnitude. My read: even as magnitudes, the tip-minus-Point I gap in Group I (2.46 − 0.99 = 1.47 mm) exceeds what 7.46° of tipping about Point I can add (≤ 0.06 mm if V is perpendicular to the corpus axis; of the order of 0.1-0.6 mm against the S-based line, depending on the incisor's angle to it); the Group II/III gaps (0.31 / 0.39 mm) are within that range | High | The key number cannot be read from the table without the convention, and the incisor rows are not mutually consistent as printed |
| A11 (INC-11) | Methods p529: AP changes = perpendicular distances to the horizontal line (7° below SN through S); vertical changes = perpendicular distances to the vertical line through S | Table 4 lists V and H rows; Figure 2 p531 shows a 90° grid drawn on the corpus axis | Axes reversed in the text (distance to a horizontal line is a vertical coordinate). The text also never says how an S-based grid is applied after a corpus-axis superimposition | Medium | Methods as written cannot be replicated; if lower "extrusion" was really measured to a cranial-base line it includes mandibular rotation |
| A12 (INC-12) | Results p532 para 1: posterior extrusion "significantly less in Group I" | Results p532, next paragraph: lower-arch extrusion "comparable" except the Group I second molar | Table 4: premolars comparable (1.06 / 1.05 vs 1.19 / 1.14 vs 1.06 / 1.22 mm) but the Group I first-molar distal cusp (0.35 ± 0.22 vs 1.08 / 1.15) and mesial cusp (0.94 vs 1.30) also differ; no P values printed | Medium | Reader cannot tell whether RCOS spares molar extrusion, a selling point for hypodivergent cases |
| A13 (INC-13) | Methods p530: paired t within groups, ANOVA + Tukey between | Tables 3 and 4 carry no P values; between-group P appears in the text for only a few variables | Tests were run but not reported for the dental variables | Medium | Every "significant / comparable / consistently more" for Tables 3-4 is unverifiable, and A8 and A12 show some are wrong |
| A14 (INC-14) | Methods p529: Shimstock foil "8 mm" | (unit error) | 8 µm | Low | It is the operational definition of the endpoint |
| A15 (INC-15) | Discussion p533: "The studied sample included nongrowing patients." | Table 1: age 15.82 ± 2.12 / 16.00 ± 2.17 / 17.35 ± 2.92 y; consent "from participants or their guardians" p529; Limitations p534 concede possible physiologic extrusion | An adolescent sample with no growth staging; by the SDs about a quarter of Groups I-II are under 14.5 y | High | Growth confounds every vertical outcome; Group III is the oldest arm and had the smallest skeletal change |
| A16 (INC-16) | Methods p529: inclusion ANB 1°-5° | Table 1: Group I ANB 5.14 ± 2.16° | About half of Group I is above 5°; the criterion was not applied or the values are wrong | Medium | Group I skewed toward Class II; affects lower-incisor compensation and the proclination result |
| A17 (INC-17) | Methods p529: crowding 1-3 mm | Table 1: crowding 1.25 ± 0.625 / 1.58 ± 0.523 / 1.81 ± 0.761 mm | Many values below 1 mm; the RCOS arm is the least crowded | Low | Confirms allocation was driven by alignment |
| A18 (INC-18) | Table 5 within-group: LFH 0.97 ± 0.82 / 1.56 ± 0.84 / 0.41 ± 0.43 % | Table 5 between-group LFH: 1-2 0.5812, 1-3 1.1436, 2-3 0.5624; SE 0.8873 / 0.9983 / 0.9850; P .790 / .489 / .836 | Three errors. (a) From the means, 1−2 = −0.59, 1−3 = +0.56, 2−3 = +1.15: the rows for Groups 1 and 2 are swapped. (b) SE 0.887 implies a pooled SD ≈ 3.3 %; the printed SDs give ≈ 0.72 and an expected SE ≈ 0.19-0.20 (the Mn-Mx and FH-Mn SEs match their SDs to three decimals). With the printed SDs, II vs III (1.15 %) has t ≈ 5.3-5.8, P < .001. (c) The Group III within-group P (.009) reproduces at no plausible n (n = 20 gives .0004; it would need n ≈ 12) | High | Reverses a reported null: elastics increased lower face height significantly more than turbos alone, the side effect clinicians care most about |
| A19 (INC-19) | Table 5: Group III within-group P .003 / .009 / .007 | Abstract: "three equal groups" | My arithmetic: Mn-Mx 0.69 ± 0.90 gives P = .0028 at n = 20 and .0005 at n = 27; FH-Mn 0.32 ± 0.49 gives .0088 at n = 20 and .002 at n = 27 | Low | Independent corroboration of A3 (Group III analysed with about 20) |
| A20 (INC-20) | Methods p530: G*Power, 75 patients, power 0.90, effect size 0.25, α .05 | (internal arithmetic) | My arithmetic: one-way ANOVA, 3 groups, f = 0.25, power 0.90 needs N ≈ 207; N = 75 gives power 0.46 and corresponds to f ≈ 0.42 | Medium | The sample size does not correspond to the analysis and no primary outcome is declared |
| A21 (INC-21) | Results p530: 80 completed, one dropout (both ABTs debonded) | Table 1 sums to 81; no n per group in Tables 2-5 | Table 1 is on 81 by its gender row but ten of its P values fit 29/31/20 = 80; the dropout's arm is never stated | Low | Without per-arm n no SE, CI or P can be checked, and when checked (A3) they fail |
| A22 (INC-22) | Ref 20: "Angle Orthod. 2024;26;95(1):27-34" | Angle Orthod volume 95 is 2025 | Should read 2025;95(1):27-34 (online 2024). Also: refs 9 and 14 use colons for semicolons; "Rickkets" p529; "Broadbent.10." p529; "molars.8.This" p534; ref 1 pagination printed 85-90 (research pack says e89-e96, UNVERIFIED) | Low | Their own closest comparator is mis-cited |
| A23 (INC-23) | Results p531: L6 distal tipping "5.9°" | Table 3: 5.99 ± 4.75° | 6.0° (truncated, not rounded) | Low | Same carelessness pattern as A1 and A6 |
| A24 (INC-24) | Abstract p528: skeletal increase "smallest in Group III"; Discussion p534: "particularly in the posterior-elastics group" | Table 5 between-group: only 2 vs 3 significant (Mn-Mx .011, FH-Mn .026); 1 vs 3 .215 / .193; LFH all ≥ .489 as printed | Group III is numerically smallest but statistically indistinguishable from Group I; LFH shows no difference as printed (but see A18) | Low | The abstract implies a three-way gradient the tests do not support |
| A25 (INC-25) | Discussion p534: posterior extrusion "explained both the efficiency of overbite reduction and the tendency toward skeletal changes" | Table 4: Group III lower extrusion 1.06-1.30 mm ≥ Group II 0.90-1.19 mm, yet 94 vs 44 d; Group I had the least extrusion (0.35-1.06 mm) yet Mn-Mx +1.35° > Group III +0.69° | The amount of lower extrusion tracks neither speed nor skeletal change across arms; what distinguishes Group II is upper posterior extrusion (0.28-0.42 vs ≈ 0.08 mm) and the rate, not the quantity | Medium | The causal story residents will repeat fails in the paper's own tables |
| A26 (INC-26) | Abstract: Group II "posterior tooth extrusion (up to 1.1 mm ...)"; Group III "mainly by passive eruption" | Table 4: Group III lower extrusion equal or greater; Group III lower tip −1.25 mm and upper incisor −0.43 mm (largest of the three) | Group III's anterior contribution (about 1.7 mm) equals its posterior contribution; its upper-incisor intrusion is never mentioned | Medium | Mechanisms are mis-attributed between arms |
| A27 (INC-27) | Table 3: LI-CA +7.46° and L4-CA +4.44° read as labial / mesial tipping | Table 3: L7-CA +8.94° and L6-CA +5.99° read as distal tipping; footnote defines angles only as "to corpus axis"; the 2022 paper signed distal molar tipping negative (L7-CA −7.92°) | Positive means different directions for different teeth and the convention flipped between papers; the direction of the L5 changes (2.20° / 1.18°) is undeterminable | Medium | Anchorage effects cannot be read from the table |
| A28 (INC-28) | Methods p529: groups formed "according to operator judgment", on lower-incisor alignment and inclination and on "patient cooperation"; called a "trial" | Abstract: "divided into three equal groups"; Conclusions p535: elastics "significantly fewer days" | The abstract omits operator allocation and the cooperation criterion; elastic wear is entirely cooperation-dependent; no registration number | Medium | The primary outcome in Group II is confounded by design and abstract readers are not told |
| A29 (INC-29) | Methods p530: "Blinding was only applied during measurements and data analysis" | Single operator R.K. treated all p529; "the same examiner" retraced p530; the RCOS wire is visible on T2 films | The examiner is not identified; blinding is nominal at best | Low | The one safeguard claimed is not demonstrable |
| A30 (INC-30) | Results p531: Group I "slightly longer" | Table 2: +11.3 d, P = .010, 95 % CI 2.32-20.29 | 25 % longer, flagged significant by the paper's own asterisk | Low | Editorial softening of the gap that is elsewhere the efficiency headline |
| A31 (INC-31) | Results p531: "comparable reduction in overbite" 3.92 / 3.65 / 3.57 mm | No test reported; baseline overbite 5.51 / 5.33 / 5.13 mm (P ≈ .04-.07) | Equivalence asserted, not tested; the deepest bites (Group I) were corrected most; a threshold endpoint (< 30 %) makes reduction depend on baseline | Low | Equivalence on the primary clinical target is unproven |
| A32 (INC-32) | Table 3: LI-CA 7.46° vs 1.55° (I vs III), P < .001 | Table 4: lower incisor H 1.01 vs 0.80 mm (NS) | My arithmetic: 6° more tipping about Point I on a 14 mm lever should add ≈ 1.4-1.5 mm of labial edge movement, not 0.2 mm | Low | Angular and linear rows are inconsistent; same frame problem as A10 |
| A33 (INC-33) | Conclusions p535: "measurably lower incisor proclination" | Table 3: Group I 7.46° vs 3.46° / 1.55° | Missing hyphen ("lower-incisor"); as printed it reads as less proclination | Low | A conclusion bullet that reads backwards |
| A34 (INC-34) | Discussion p534: RCOS needs anchorage control to minimise "lower incisor proclination and molar extrusion" | Table 4: Group I molars 0.94 / 0.35 / 0.71 / −0.64 mm, the least of the three; the L7 distal cusp intruded | The side effect to control is molar distal tipping (6-9°), not molar extrusion | Low | Warns against what did not happen and under-plays what did |
| A35 (INC-35) | Table 1: U.C.I Tip, L.C.I Tip, L4-L7 Tip, L.F.H undefined | Table 3 uses LI-CA, UI-Mx, L4-CA ... for what are presumably the same angles | Different names, no definitions, reference planes for baseline angles unstated | Low | Baseline inclinations cannot be mapped to the change scores |
| A36 (INC-36) | Table 2: Significance ".000" (four entries) | Table 2 header and Table 5: "< .001" | SPSS artefact; should be P < .001 | Low | Unedited software output pasted into the table, consistent with A3 and A18 |

**How to raise these politely.** Order the queries by how easily the authors can settle them from their own SPSS output, and ask each as a question, not a charge. First the arithmetic ones (A1, A2, A3, A18): ask the authors to confirm the per-arm n used in the ANOVA, the Group I SD and the LFH post-hoc block, since the Tukey standard errors do not reproduce with three groups of 27. Second the reporting ones (A9, A10, A13): ask for the sign convention in Table 4 and the between-group test for Point I, since Groups II and III show 0.71 and 0.86 mm without an RCOS. Third the framing ones (A15, A28): note that the Discussion describes the sample as nongrowing at a mean age of 16 and ask the authors to comment on growth as a confounder of the vertical outcomes. Keep the cross-study overlap (Section B, B1) as a separate, factual question about the 14 identical values, with the two tables side by side, and let the authors explain. *Angle Orthodontist* publishes letters to the editor; a concise letter listing A1-A3, A9-A10 and A18 with the recomputation would be a legitimate resident project. In journal club, lead with the numbers you can show on a slide (the SE ratios and the LFH block) and avoid attributing motive; the pattern is consistent with tables assembled from more than one data file.

## B. Conflicts and agreements with other studies

Format: **Citation** (verification tag as in the research pack) — what it found — VERDICT — the exact point — one sentence for journal club. Duration conversions from months to days are mine (30.4 d/month).

### Same group, earlier trials (JUST, senior author Al-Nimri)

**B1. Al-Zoubi EM, Al-Nimri KS. Angle Orthod 2022;92(1):36-44 (ref 4 in the paper)** — VERIFIED; I re-read the PMC tables locally.
- What it found: RCT, 48 randomised / 42 analysed (21 / 21), ages 18.4 ± 2.8 / 18.2 ± 3.1 y, T1 after alignment, corrected = overlap ≤ one-third of crown, monthly review. Group I 0.016 × 0.022 NiTi RCOS alone (upper 0.019 × 0.025 SS); Group II metal ABTs + plain 0.016 × 0.022 NiTi. Duration 4.85 ± 1.56 vs 3.15 ± 0.93 months (≈ 148 vs ≈ 96 d), P ≤ .001. Overbite change 4.07 ± 0.69 vs 3.87 ± 0.72 mm (P = .378). LI-CA +5.74 ± 2.56 vs +2.82 ± 1.80° (P ≤ .001). Point I −1.01 ± 0.80 vs −0.28 ± 0.50 mm (P = .001). Tip vertical −1.94 ± 0.90 vs −1.25 ± 0.80. L7-CA −7.92 ± 4.56 vs +0.71 ± 3.28. Mx-Mn +0.22 ± 0.59 vs +0.69 ± 0.89 (P = .067); LFH −0.09 ± 0.54 vs +0.41 ± 0.42 % (P = .002). The authors called the 1.7-month saving of questionable clinical value against a 24-30-month treatment.
- VERDICT: PARTIAL, with two conflicts and one integrity question.
- AGREES: ABT-alone takes about 3 months in both (≈ 96 d vs 94 d); the RCOS signature (5-7° proclination, ≈ 1 mm Point I change, 8-9° second-molar distal tipping, L7 distal cusp intruding) replicates; overbite reduction 3.6-4.1 mm regardless of method; "primarily dentoalveolar".
- CONFLICTS (a): Point I with ABT alone was 0.28 mm in 2022 and is 0.86 mm in 2026, three times larger, so the 2026 "1 mm true intrusion" with RCOS is no longer an RCOS-specific signal. (b) Mandibular-plane opening with RCOS was 0.22° in 2022 (less than ABT) and is 1.35° in 2026 (more than ABT); the direction of the RCOS-vs-ABT skeletal difference reversed. (c) Not a numerical conflict but a change of stance: 2022 judged a 1.7-month gain clinically questionable; 2026 sells an 11-day gain as a reason to choose elastics. (d) Design went from RCT to operator allocation; T1 moved from post-alignment to bonding; overbite threshold from > 50 % to > 40 %; endpoint from ≤ 1/3 crown to < 30 % + Shimstock; review interval from monthly to 14 days, so the durations are not like-for-like.
- Integrity question (my read, facts verified): the 2026 Group III (ABT alone, n ≈ 20-27, 17.35 y, composite turbos, 0.014 NiTi, T1 at bonding, IRB 64/165/2023) prints 14 outcome values identical to two decimals, mean and SD, with the 2022 Group II (ABT, n = 21, 18.2 y, metal turbos, 0.016 × 0.022 NiTi, T1 post-alignment, IRB 106/118/2018): MC L7 1.05 ± 0.54, DC L7 0.86 ± 0.61, DC L6 1.15 ± 0.47, CT L5 1.22 ± 0.52, lower incisor V −1.25 ± 0.80, L7-CA 0.71 ± 3.28, L6-CA 0.88 ± 4.54, L5-CA 1.18 ± 2.90, UI-Mx 1.47 ± 1.22, upper incisor V −0.43 ± 0.63, upper incisor H 0.63 ± 0.38, and the three upper posterior values 0.08 ± 0.07 / 0.08 ± 0.07 / 0.07 ± 0.08; five more differ by only 0.01-0.02 (MC L6 1.29 ± 0.46 vs 1.30 ± 0.48; CT L4 1.06 ± 0.31 vs 1.06 ± 0.30; Mx-Mn 0.69 ± 0.89 vs 0.69 ± 0.90; LFH 0.41 ± 0.42 vs 0.41 ± 0.43; DC U6 0.08 ± 0.07 vs 0.08 ± 0.08). Values that differ: LI-CA (2.82 vs 1.55), L4-CA (1.05 vs 0.44), lower incisor H (0.86 vs 0.80), Point I (−0.28 vs 0.86; note 0.86 ± 0.41 is the 2022 horizontal value), FH-Mn (0.42 vs 0.32, same SD), overbite change (3.87 vs 3.57), duration. Two independent samples of different size, age, wire and time frame cannot produce this. Either the ABT-alone arm re-uses 2022 tracings without disclosure, or a table was populated from the wrong file. Neither paper discloses any data re-use, and no erratum or correction was found for either by the research pack (PubPeer itself was unreachable).
- Journal club: Their own 2022 RCT found 0.28 mm of true intrusion with turbos alone; this paper finds 0.86 mm with the same appliance, and fourteen of the turbos-alone values are identical to the 2022 table, so which dataset are we looking at?

**B2. Shakhtour F, Al-Nimri K. Angle Orthod 2025;95(1):27-34 (ref 20, mis-cited as 2024;26;95(1))** — VERIFIED; I spot-checked the PMC tables locally.
- What it found: RCT, 80 randomised / 62 analysed (21 / 20 / 21), ages 20.5 / 19.4 / 18.3 y, no bite turbos, brachyfacial (MP < 25°), same IRB number as the 2022 trial (#106/118/2018). 0.019 × 0.025 SS RCOS with crown-labial torque: LI +4.83 ± 2.73°; same with torque removed: −0.31 ± 2.48°; 0.016 × 0.022 NiTi RCOS: +6.00 ± 2.56° (P ≤ .001). Horizontal 0.51 / −0.01 / 0.77 mm; tip vertical −0.97 / −1.01 / −1.94 mm; Point I −0.78 / −1.03 / −1.01 mm (P = .536). Duration, molar tipping, extrusion and skeletal change not reported.
- VERDICT: AGREES on the NiTi RCOS signature; CONTEXT on two points the 2026 paper ignores.
- Exact points: (a) NiTi RCOS gives 6.0° without turbos and 7.46° with turbos and an alignment phase included; (b) Point I moved about 1 mm whatever the wire or torque, and in 2026 it moves about 0.7-1.0 mm even without an RCOS, so across three papers the ≈ 1 mm Point I change looks like a constant of the superimposition method rather than an RCOS effect; (c) the 2025 paper showed that a zero-torque SS RCOS abolishes flaring, a solution the 2026 Discussion never mentions while recommending "anchorage control"; (d) the 2025 NiTi arm reproduces the 2022 RCOS arm exactly (horizontal 0.77 ± 0.64, tip −1.94 ± 0.90, Point I −1.01 ± 0.80; proclination 6.00 vs 5.74 with the same SD 2.56), despite a different horizontal reference line, so the three JUST papers are not three independent datasets.
- Journal club: The same group already showed in 2025 that removing torque from a steel reverse-curve wire stops the flaring; why does the 2026 paper recommend monitoring instead of that?

**B3. Sotal R, Al-Nimri K, Taha N. Angle Orthod 2026 (online), DOI 10.2319/090325-743.1; Al-Tamimi M, Al-Nimri K, Al-Qaqaa S. Orthod Craniofac Res 2026, DOI 10.1111/ocr.70097** — VERIFIED abstracts.
- What they found: Sotal: 29 ABT + 0.014 NiTi vs 26 controls (the 2026 Group III protocol); lower-incisor pulpal blood flow dipped at 1 week and recovered by 1 month; Grade-2 mobility in 74.1 % with ABT vs 25 % (P < .001); pain peaked < 24 h, no group difference. Al-Tamimi: 61 enrolled / 55 completed; upper-incisor blood flow nadir at 48 h, near baseline at 30 d.
- VERDICT: CONTEXT (safety); probably overlapping cohorts.
- Exact point: ABTs are biologically safe for pulp, but turbos alone produce Grade-2 lower-incisor mobility in three of four patients, a side effect the 2026 paper does not measure while calling turbos alone the option "with fewer side effects".
- Journal club: Their companion paper found Grade-2 mobility in 74 % of turbos-alone patients; 'fewer side effects' depends on which side effects you count.

**B4. Nasrawi YH, Abu Alhaija ES, Al Maaitah EF. Clin Oral Investig 2022 (PMC9708813); Ba-Hattab R et al. Clin Oral Investig 2023 (PMC10264509)** — VERIFIED; same department.
- What they found: RCT, 53 adults, 5-mm reverse curve bent into 0.017 × 0.025 SS, 0.019 × 0.025 SS or 0.021 × 0.025 TMA, 6 months: residual COS 0.67 / 1.12 / 1.39 mm; lower-incisor intrusion 0.04 / 0.24 / 0.58 mm; crown forward 0.78-1.05 mm; EARR 0.44-0.88 mm; pain peak at 24 h VAS 4.7-6.2. Ba-Hattab: COS 5.3-5.6 → 4.4-4.7 mm in 1 month; pulpal flow recovered by 1 week.
- VERDICT: PARTIAL / CONTEXT.
- Exact point: rigid RCOS wires in the same clinic gave ≤ 0.58 mm intrusion and measurable root resorption; the 2026 paper reports 0.99 mm with a NiTi RCOS and did not look at roots.
- Journal club: Down the corridor, reverse-curve steel produced under a millimetre of root loss in six months; this paper never took a periapical.

### RCOS and continuous-arch levelling mechanics

**B5. Burstone CJ. Am J Orthod 1977;72(1):1-22 (ref 18)** — VERIFIED citation and abstract.
- What it says: six principles for intrusion: light continuous force from low load-deflection springs, single point of application, force placed relative to the centre of resistance, a consolidated posterior anchor unit, and inhibition of posterior eruption. A citing 2025 paper attributes 80 g for four maxillary incisors to Burstone; the 15-25 g per tooth figure is UNVERIFIED here.
- VERDICT: PARTIAL.
- Exact point: the paper cites Burstone for the pattern "intrusion + proclination + posterior effects", which agrees, but a cinched continuous NiTi RCOS violates every one of his principles (force labial to the CR, no anchor unit, posterior eruption encouraged); Burstone would predict the Group I result as tipping, not true intrusion.
- Journal club: Burstone is cited for the pattern but the appliance breaks all six of his rules.

**B6. Sifakakis I et al. Eur J Orthod 2010;32(2):159-164** — VERIFIED.
- What it found: in vitro; at 1.5 mm of intrusion a Burstone arch delivers 0.99 N, utility arches 1.33-1.43 N, and a 0.016 × 0.022 NiTi RCOS more than 9 N; forces and moments higher in the mandible.
- VERDICT: CONTEXT that undercuts the "intrusive mechanics" framing.
- Exact point: the Group I wire delivers roughly ten times the force of an intrusion arch, which fits the observed 7.46° flaring and 6-9° molar tipping better than controlled intrusion.
- Journal club: Nine newtons is not an intrusion force; it is a tipping force with some intrusion attached.

**B7. van Steenbergen E et al. Angle Orthod 2005** — VERIFIED.
- What it found: 40 g vs 80 g on a maxillary anterior segment, n = 20: no difference in intrusion rate, inclination, posterior extrusion or narrowing.
- VERDICT: CONTEXT.
- Exact point: light forces suffice for intrusion; the RCOS force is far outside the window.
- Journal club: Forty grams per segment intrudes as well as eighty; nobody has shown that nine newtons intrudes at all.

**B8. Weiland FJ, Bantleon HP, Droschl H. AJODO 1996;110(6):647-652 (ref 19)** — VERIFIED abstract.
- What it found: 50 adults, continuous archwire vs Burstone segmented: overbite −3.17 vs −3.56 mm; continuous arch: molar extrusion +1.30 to +1.63 mm, ML/NSL +1.94°; segmented: U1 −1.50 mm and L1 −1.72 mm intrusion, no posterior extrusion, ML/NSL +0.52° (NS).
- VERDICT: PARTIAL.
- AGREES: continuous-arch levelling works by posterior extrusion with mandibular-plane opening (2026 Group I premolars +1.05 mm, Mn-Mx +1.35°; Group II +1.84°). CONFLICTS: Weiland's continuous arm achieved its overbite change without meaningful intrusion, whereas the paper cites Weiland while claiming ≈ 1 mm true intrusion; the 2026 Point I values are the same in all three arms.
- Journal club: Weiland got the same overbite change from a continuous arch with zero true intrusion; that is what this paper found too, once you look at Groups II and III.

**B9. AlQabandi AK, Sadowsky C, BeGole EA. AJODO 1999;116(5):522-529** — VERIFIED (round vs rectangular continuous wires, not continuous vs sectional).
- What it found: RCT, n = 28; lower-incisor proclination 6.75 ± 4.85° (round) vs 6.10 ± 3.95° (0.016 × 0.022 NiTi then SS), no difference; the intrusive force acts labial to the CR and produces uncontrolled tipping; the rectangular section did not prevent flaring.
- VERDICT: AGREES.
- Exact point: 7.46° with a rectangular 0.016 × 0.022 RCOS is the same order; wire section is not what controls flaring (Shakhtour 2025 shows torque removal is).
- Journal club: Rectangular did not save AlQabandi's incisors in 1999 and it did not save these.

**B10. Dake ML, Sinclair PM. AJODO 1989;95(1):72-78** — VERIFIED abstract.
- What it found: 60 low-angle Class II deep-bite adolescents, Ricketts utility arch vs Tweed-type, > 4 y post-treatment: both corrected overbite with minimal MPA change; Ricketts gave just over 1 mm true lower-incisor intrusion that held, but more flaring and advancement with post-treatment uprighting and overbite relapse; molar extrusion similar and stable in both.
- VERDICT: AGREES on magnitude (≈ 1 mm true intrusion, ≈ Group I's 0.99 mm) and on flaring; CONTEXT for stability.
- Exact point: in adolescents, posterior extrusion held but flared incisors uprighted and the overbite relapsed, which is the risk profile of Group I.
- Journal club: Dake and Sinclair's flared incisors came back; this paper stops at week eight.

**B11. Preston CB et al. AJODO 2008;133(4):550-555** — VERIFIED.
- What it found: continuous vs sectional bioprogressive, casts: both levelled the COS; post-retention relapse statistically significant but clinically negligible.
- VERDICT: CONTEXT.
- Exact point: long-term COS stability similar for continuous vs sectional; nothing on speed.
- Journal club: Preston says the curve stays flat either way; the question here is what happens to the incisors.

**B12. Clifford PM, Orr JF, Burden DJ. Eur J Orthod 1999;21(3):213-222** — VERIFIED.
- What it found: photo-elastic mandibular model; 1 mm of reverse curve in 0.018 × 0.025 SS increased arch length by 1.6 mm, plateauing at 5 mm; stress concentrated around incisor and molar roots as the curve increased.
- VERDICT: AGREES (model level).
- Exact point: predicts exactly the Group I pattern: incisor advancement (1.01 mm, 7.46°) and molar loading (L6 5.99°, L7 8.94° with a cinched wire).
- Journal club: The gelatine model in 1999 already put the stress where this paper found the tipping.

**B13. Braun S, Hnat WP, Johnson BE. AJODO 1996;110(2):206-210** — VERIFIED abstract.
- What it found: arch-circumference gain from levelling is much smaller than older estimates; incisor protrusion during levelling is mainly a product of the mechanics used.
- VERDICT: AGREES.
- Exact point: Groups II and III achieved the same overbite change with 1.5-3.5° of flaring; the 7.46° in Group I is the wire, not the arch-length demand.
- Journal club: Same bite opening, a fifth of the flaring: the wire did it, not the curve.

**B14. Pandis N et al. Aust Orthod J 2010;26(1):61-65** — VERIFIED.
- What it found: continuous-arch levelling proclined lower incisors about 4° per mm of COS levelled, no arch-width change.
- VERDICT: AGREES.
- Exact point: quantifies the coupling seen in Group I; the 2026 paper never reports COS depth, so the per-mm rate cannot be compared.
- Journal club: Four degrees per millimetre of curve; this paper does not tell us how deep the curve was.

**B15. Bernstein RL, Preston CB, Lampasso J. AJODO 2007;131(3):363-371** — VERIFIED.
- What it found: 31 Class II/1 nonextraction, COS 2.47 → 0.19 mm, mainly premolar extrusion with limited incisor intrusion; stable at 5-25 y in 10 patients.
- VERDICT: PARTIAL.
- AGREES with 1.05-1.2 mm premolar extrusion in all three arms; CONFLICTS softly with the claim that a continuous RCOS gives meaningful true intrusion.
- Journal club: Bernstein levelled the curve with premolars; so did all three of these groups.

**B16. Rozzi M, Mucedero M, Pezzuto C, Cozza P. AJODO 2017;151(4):758-766** — VERIFIED.
- What it found: 90 patients (≈ 19 y), 30 each low / normal / high angle, continuous archwires: low-angle faces levelled by incisor advancement and intrusion, high-angle by posterior extrusion; no skeletal change in any group.
- VERDICT: PARTIAL.
- AGREES on mechanism in low-angle faces (the 2026 sample); CONFLICTS on skeletal effect: 2026 reports significant Mn-Mx increases in every arm, Rozzi found none.
- Journal club: Rozzi 2017 found no mandibular-plane change from continuous-arch levelling in 90 adults; this paper finds it in every group, in a younger sample, without a control.

**B17. Theerasopon P, Lindauer SJ, Charoemratrote C. Dental Press J Orthod 2021;26(2)** — VERIFIED.
- What it found: RCT 15 / 15, ≈ 22.5 y: conventional simultaneous align-and-level +5.76° vs separated protocol +2.56° (P < .0001); time 26.6 vs 35.1 weeks.
- VERDICT: AGREES.
- Exact point: continuous-wire levelling proclines ≈ 5.8°, the same order as Group I, and the speed-vs-proclination trade-off runs the same way.
- Journal club: Faster levelling, more flaring: Theerasopon and this paper agree on the trade.

**B18. Harini A et al. Cureus 2024** — VERIFIED.
- What it found: 84 Class II/1 adults, RCOS NiTi after a full round/rectangular sequence: L1-MP +2.48 ± 6.87°, absolute intrusion 0.75 ± 2.23 mm, L6 extrusion 0.78 mm with −2.14° distal tipping; 2-5.5 months.
- VERDICT: PARTIAL.
- Exact point: same qualitative pattern (proclination, distal molar tipping, some intrusion) but smaller proclination and longer time when the RCOS is used late, not as the first wire.
- Journal club: Put the reverse curve in last and you get 2.5°, put it in first and you get 7.5°.

**B19. Shekatkar YK et al. J Pharm Bioallied Sci 2024;16(Suppl)** — VERIFIED.
- What it found: 10 / 10, 0.019 × 0.025 reverse-curve NiTi conventional vs 20° pre-torqued, 3 months: LI +2° vs −2°; both opened the bite.
- VERDICT: PARTIAL.
- Exact point: direction agrees; pre-torqued RCOS is another proclination-control option the paper does not discuss.
- Journal club: A pre-torqued reverse curve retroclined the incisors 2°; the paper's answer to flaring is to watch it.

**B20. Sinha A et al. J Pharm Bioallied Sci 2024** — VERIFIED.
- What it found: retrospective, 168 Class II/1, RCOS, 12.7 months, overbite 6.2 → 2.1 mm, IMPA reported as −2.3° (P = .008).
- VERDICT: CONFLICTS on incisor inclination.
- Exact point: reports an IMPA decrease with RCOS, against 2022, 2025 and 2026; low quality, probably a sign or measurement issue.
- Journal club: One retrospective series says reverse curves upright incisors; three JUST papers say the opposite, and I trust the three.

**B21. Sahm C et al. Head Face Med 2025** — VERIFIED abstract.
- What it found: 216 patients; lower-incisor proclination during levelling predicted by crowding, initial inclination, growth pattern, class and bracket type (R² = 0.468).
- VERDICT: CONTEXT.
- Exact point: allocation "by initial alignment and inclination of the lower incisors" is confounding by indication for the primary side-effect outcome.
- Journal club: They allocated on the two strongest predictors of the side effect they then compared.

**B22. FEA: Yılmaz S et al. BMC Oral Health 2025; Shao Y et al. Int Orthod 2026** — VERIFIED abstracts.
- What they found: deeper reverse curves are more aggressive; round RCOS favours controlled intrusion, rectangular RCOS gives higher root and PDL stress and is discouraged as an initial wire in proclined incisors.
- VERDICT: CONTEXT.
- Exact point: the paper chose a rectangular 0.016 × 0.022 RCOS as the first lower wire.
- Journal club: Two finite-element papers say do not start with a rectangular reverse curve; this protocol starts with one.

**B23. Mahmoud MS et al. J Orthod Sci 2025** — VERIFIED.
- What it found: RCT 7 / 7 / 7 (15 y): miniscrew, utility arch (15 g per tooth) and 0.017 × 0.025 NiTi reverse curve; duration 5.3-5.4 months (P = .84); intrusion 1.83 / 1.80 / 1.52 mm (RCA least, P < .001); root-volume loss 1.76 / 1.71 / 2.08 mm³ and labial bone loss 0.60-0.65 vs 0.68-0.80 mm (RCA greatest).
- VERDICT: PARTIAL.
- Exact point: the RCA gives ≈ 1.5 mm intrusion but the most root and labial-bone loss; tiny sample; supports caution the 2026 paper does not quantify.
- Journal club: The reverse-curve arm lost the most root volume and the most labial bone; this paper did not image either.

### True intrusion amounts

**B24. Greig DGM. Br J Orthod 1983;10(4):214-216 (ref 11)** — VERIFIED citation; one-sentence abstract.
- What it says: source of the Point I method (0.66 × incisor length from the tip); true intrusion is only one component of overbite reduction with the utility arch.
- VERDICT: CONTEXT (method) and AGREES in spirit.
- Exact point: in Group I, the ≈ 1 mm Point I change explains about a quarter of the 3.92 mm overbite reduction; the rest is tipping and posterior extrusion.
- Journal club: Greig invented Point I to stop tipping masquerading as intrusion; used properly it shows three-quarters of this correction was not intrusion.

**B25. Otto RL, Anholm JM, Engel GA. Am J Orthod 1980;77(4):437-446** — VERIFIED.
- What it found: 55 bioprogressive cases, intrusion measured at the apex; neither age nor facial type related to intrusion; wide scatter; intrusion only one factor; more root change in adults.
- VERDICT: CONTEXT / AGREES.
- Exact point: intrusion is modest and overbite correction multifactorial; apex movement with 7.46° of tipping carries a root risk not assessed here.
- Journal club: Otto measured at the apex and saw root change in adults; this paper measured at Point I and did not look at the apex.

**B26. Ng J, Major PW, Heo G, Flores-Mir C. AJODO 2005;128(2):212-219** — VERIFIED.
- What it found: SR/MA, 4 of 28 studies met criteria (growth accounted for). Mandibular true intrusion range −0.19 to 2.84 mm; segmented-arch pooled 1.90 mm (95 % CI 1.22-2.57).
- VERDICT: PARTIAL.
- Exact point: 0.99 mm lies inside the range but at half the segmented-arch pooled mean; Ng excluded studies that did not control growth, which the 2026 paper does not.
- Journal club: Ng would not have admitted this study, so its 1 mm cannot be compared with Ng's 1.9.

**B27. Senisik NE, Turkkahraman H. AJODO 2012** — VERIFIED.
- What it found: 45 adults, Connecticut intrusion arch vs mini-implant vs control: maxillary incisor intrusion 2.20 vs 2.47 mm (≈ 0.3 mm/month); the CIA caused molar extrusion, tipping and anchorage loss.
- VERDICT: CONTEXT.
- Exact point: dedicated intrusion mechanics give 2-2.5 mm; the paper's 1 mm is background level.
- Journal club: Intrusion arches get you two millimetres; this is one, and the turbos-alone arm got nearly the same.

**B28. Kale Varlik S, Onur Alpakan O, Turkoz C. AJODO 2013** — VERIFIED.
- What it found: 31 adults (26.8 y), utility arch: mandibular incisor intrusion 2.6 ± 1.4 mm, overbite −3.9 mm, 5-y relapse 0.8 mm.
- VERDICT: CONTEXT.
- Exact point: a utility arch in non-growers gives ≈ 2.6 × Group I's intrusion and has follow-up; the 2026 paper has none.
- Journal club: Kale Varlik has five-year data on 2.6 mm of intrusion; this has eight-week data on one.

**B29. Miniscrew and intrusion-arch reviews: Gupta H et al. Contemp Clin Dent 2022; Bardideh E et al. Biomimetics 2023; Khamatkar et al. Cureus 2026; Lee WY et al. BMC Oral Health 2026** — VERIFIED.
- What they found: miniscrews out-intrude conventional arches by 0.6-0.9 SMD or ≈ 0.6-0.8 mm, with less proclination; upper-incisor intrusion takes 3.4-6.9 months; TADs do not shorten bite-opening time (MD −0.13 months); dual miniscrews up to 3.8 mm.
- VERDICT: CONTEXT.
- Exact point: skeletal-anchorage intrusion is a different endpoint (incisor intrusion) on a different timescale from "overbite < 30 % with turbos in place".
- Journal club: Forty-four days to 30 % overbite is not the same race as four months of incisor intrusion.

**B30. Springate SD, Jones AG. AJODO 1998;113(3):263-270 (ref 15)** — VERIFIED.
- What it found: 23 growing children with tantalum implants; the Ricketts corpus-axis superimposition introduces a rotational error from Xi displacement; landmark errors usually < 2 mm but ≥ 4 mm in ≈ 10 % at molars and incisors; Bjork's structural method preferred.
- VERDICT: CONTEXT / CONFLICTS with the method choice.
- Exact point: the paper superimposed on the corpus axis at Pm in a 16-year-old sample and read 0.3-1.3 mm at molars 30-40 mm away; the ≈ 1 mm Point I change common to all arms is within this method's error band. The paper cites Springate and then cites Graf 2022 to say no method is superior, which is not the same as showing theirs is accurate.
- Journal club: The reference they cite for their superimposition is the paper that showed it is the less valid method.

### Posterior extrusion and stability

**B31. Parker CD, Nanda RS, Currier GF. AJODO 1995;107(4):382-393** — VERIFIED.
- What it found: 132 cases with ≥ 70 % overbite, six mechanics; correction mainly by incisor proclination and molar extrusion; no difference between mechanics; anterior face height rose significantly only in Class II/2.
- VERDICT: AGREES / PARTIAL.
- AGREES: dentoalveolar mechanism and similar overbite change across mechanics (3.6-3.9 mm here). PARTIAL: 2026 found significant face-height change in every arm, Parker only in II/2.
- Journal club: Parker's 132 cases say the mechanics do not matter for how much; this paper says they matter for how fast.

**B32. Schudy FF. Angle Orthod 1968;38(1):19-39** — VERIFIED citation only; content UNVERIFIED (recollection: posterior extrusion opens the bite through hinge rotation, desirable in short faces, harmful in long faces).
- VERDICT: CONTEXT.
- Exact point: the elastics arm is the Schudy mechanism; the paper's caution about hyperdivergent patients echoes it.
- Journal club: Group II is Schudy's hinge; fine in a short face, which is the only face they included.

**B33. Engel G, Cornforth G, Damerell JM et al. Am J Orthod 1980;77(1):1-13** — VERIFIED citation; content UNVERIFIED (recollection: most overbite reduction comes from posterior eruption and incisor tipping, little true intrusion).
- VERDICT: CONTEXT.
- Journal club: If Engel is right, this paper is a 2026 restatement of 1980.

**B34. Rozzi M, Mucedero M, Pezzuto C, Lione R, Cozza P. Eur J Orthod 2019;41(3):286-293 (ref 14)** — abstract VERIFIED; subgroup numbers UNVERIFIED (from a secondary source).
- What it found: 60 patients (19.8 ± 1.4 y), continuous archwires, 2-y follow-up; low-angle patients levelled by incisor advancement and intrusion and relapsed through incisor inclination; high-angle patients levelled by posterior extrusion, which was stable.
- VERDICT: PARTIAL, and mis-cited.
- Exact point: the paper cites Rozzi to say extrusion is stable in "nongrowing" patients; the stable extrusion was in the high-angle subgroup, whereas the 2026 sample is average or reduced LFH, the phenotype whose flared incisors relapsed. Combined with 7.46° of flaring in Group I, Rozzi predicts relapse, not stability; ages also differ (19.8 vs 15.8-17.4 y).
- Journal club: Rozzi's stable extrusion was in long faces; this paper only treated short ones, and cites it for reassurance.

**B35. Huang GJ et al. J World Fed Orthod 2012;1(3) (ref 1)** — VERIFIED.
- What it found: SR of 26 studies: overbite 5.3 → 2.6 → 3.4 mm at ≥ 1 y; initial severity linked to stability; follow-up length not.
- VERDICT: CONTEXT.
- Exact point: baselines here (5.1-5.5 mm) match; expect ≈ 0.8 mm rebound, untested.
- Journal club: Their own first reference predicts most of a millimetre of rebound; the study ends before any of it can happen.

**B36. Pollard D et al. AJODO 2012;141(4):477-483** — VERIFIED.
- What it found: 60 patients with > 50 % overbite, 10 y post-retention; relapse 0.1 mm high-angle vs 1.2 mm low-angle and 1.4 mm normal-angle (P < .001).
- VERDICT: PARTIAL / CONFLICTS with the paper's reassurance.
- Exact point: the 2026 phenotype (average or reduced LFH) is the relapse-prone group.
- Journal club: Pollard's low-angle patients lost over a millimetre at ten years; that is exactly who was enrolled here.

**B37. Kim TW, Little RM. Angle Orthod 1999;69(2):175-186** — VERIFIED.
- What it found: 62 Class II/2, ≈ 15 y post-retention; initial overbite the strongest predictor of post-retention overbite; upright incisors tend to return.
- VERDICT: CONTEXT.
- Journal club: Initial overbite predicts final overbite; a fast start does not change that.

**B38. Berg R. Eur J Orthod 1983;5(1):75-83** — VERIFIED.
- What it found: 26 deep-bite cases, 5-9 y out of retention; acceptable incisor relationship in 24 of 26; classical prognostic factors weak.
- VERDICT: CONTEXT.
- Journal club: Berg's long-term stability was good, but nobody knows which mechanics his 26 had.

**B39. Schutz-Fransson U, Bjerklin K, Lindsten R. Eur J Orthod 2006;28(5):503-512** — VERIFIED.
- What it found: 30 treated (start 12.2 y) vs 32 controls; overbite relapse 0.8 mm long-term while untreated controls' overbite opened 0.7 mm; stability judged good.
- VERDICT: CONTEXT.
- Exact point: adolescent correction by eruption is reasonably stable, which supports extrusion-based levelling in growing patients, the opposite of what "nongrowing" implies.
- Journal club: Extrusion in adolescents holds; that is an argument for admitting the sample was adolescent.

**B40. Simons ME, Joondeph DR. Am J Orthod 1973;64(4):349-367** — VERIFIED citation; content UNVERIFIED (recollection: partial overbite relapse in most cases at 10 y).
- VERDICT: CONTEXT.

**B41. Krusi A et al. Dent J 2022;10(9):175** — VERIFIED.
- What it found: 32 patients; craniofacial pattern not associated with COS depth or levelling duration.
- VERDICT: CONTEXT.
- Exact point: argues that the duration differences are attributable to mechanics rather than to facial-pattern imbalance, but Krusi did not have arms selected on cooperation.
- Journal club: Krusi says facial pattern does not set levelling time; cooperation-selected elastics groups are a different confounder.

### Bite turbos and bite plates

**B42. Hemley S. Am J Orthod Oral Surg 1938;24:721-736 (ref 5)** — VERIFIED citation; content UNVERIFIED (recollection: anterior bite plate disoccludes the buccal segments and permits posterior eruption with some incisor intrusion).
- VERDICT: CONTEXT / AGREES with the Group III interpretation.
- Journal club: Group III is Hemley's 1938 bite plate glued to the incisors.

**B43. Forsberg CM, Hellsing E. Eur J Orthod 1984;6(2):107-115 (ref 3)** — design VERIFIED; results UNVERIFIED (recollection: molar contact re-established within months mainly by lower posterior eruption, small incisor intrusion, no TMJ dysfunction).
- What it found: 20 Class II deep-bite patients, 9-13 y, lingual arch with anterior bite plane, ≈ 4 mm molar separation.
- VERDICT: AGREES / CONTEXT.
- Exact point: same mechanism as Group III in younger patients; Rasol 2024 quotes 3.6 ± 1.0 months for this appliance, similar to Group III's 94 d.
- Journal club: A 1984 bite plane took about three and a half months; turbos alone took three.

**B44. Hellsing E, Hellsing G, Eliasson S. AJODO 1996;110(1):61-68** — VERIFIED.
- What it found: 8 cases, fixed lingual arch with anterior biteplane; molar contact regained after 3.5-5 months; condylar position changed immediately but not thereafter.
- VERDICT: AGREES / CONTEXT.
- Exact point: bite-plane-alone timelines bracket Group III; the endpoint (posterior contact) is comparable.
- Journal club: Hellsing's eight patients regained contact in three and a half to five months; nothing new in Group III.

**B45. Lindauer SJ, Lewis SM, Shroff B. Semin Orthod 2005;11(2):62-66 (ref 21)** — VERIFIED citation and findings via search summary; n reported as 32 or 40.
- What it found: prospective, intrusion arch vs anterior bite plate; both reduced overbite quickly; intrusion-arch patients lost incisor display; smile arc flattened in half of each group.
- VERDICT: PARTIAL, and mis-cited.
- Exact point: the paper cites Lindauer for vertical elastics; Lindauer did not study elastics. What Lindauer supports is that a bite plate corrects overbite fast without harming incisor display (Group III upper incisor V −0.43 mm).
- Journal club: Reference 21 is about bite plates and smile esthetics, not elastics.

**B46. Dunbar E et al. J Orthod 2025;52(2):115-132** — VERIFIED.
- What it found: RCT, 38 adolescents (9-16 y) Class II/2, fixed anterior bite plane vs untreated: overbite 5.07 → 2.45 mm in 6 months; intrusion plus molar eruption; no change in incisor inclination or vertical skeletal measures against controls.
- VERDICT: AGREES / PARTIAL.
- AGREES on the ABT-alone mechanism and preserved inclination (Group III +1.55°). PARTIAL: Group III still registered Mn-Mx +0.69° (P = .003) with no control; Dunbar found none against a control.
- Journal club: With a control group, Dunbar's bite plane produced no skeletal change; without one, this paper's turbos did.

**B47. Supanich P, Thongudomporn U, Viteporn S. Clin Oral Investig 2025** — abstract VERIFIED, numbers paywalled.
- What it found: RCT, 46 adults, incisor vs canine turbos during alignment: overbite correction rate and irregularity reduction equal; incisor turbos gave larger arch-dimension changes.
- VERDICT: CONTEXT.
- Journal club: Turbo position changes the arch, not the speed.

**B48. Elbarnashawy SG et al. Angle Orthod 2023;93(5):507-512** — VERIFIED.
- What it found: 30 growing patients (12.9 y) with ABT + fixed vs Bolton-Brush controls; turbos in place 12.2 months; overbite −5.2 vs +0.4 mm; SN-MP +1.9° vs −0.9°; mechanism posterior eruption.
- VERDICT: AGREES on mechanism and 1-2° of opening; CONTEXT on time.
- Journal club: In children the turbos stayed a year; here they were 'done' in three months, but done means 30 %, not level.

**B49. Fahim FH et al. Dent J (Basel) 2025;13(9):412** — VERIFIED.
- What it found: 60 patients (19 y), composite Mini-Mold turbos: zero debonds at 1 month; eating difficulty 26.7 % and speech 20 % at 1 week, resolved by 1 month; acceptance 90 → 100 %.
- VERDICT: CONTEXT / AGREES.
- Exact point: supports the low failure rate here (1 of 81) and supplies the comfort data the paper lists as a limitation.
- Journal club: Fahim measured what this paper says it did not: turbos are tolerated within a month.

**B50. Nguyen VA, Nguyen TA, Doan TBN. Sci Rep 2025** — VERIFIED.
- What it found: 40 adults, unilateral ABT for cant; 5.9 months; failure 3/40 (7.5 %); SN-MP +0.24° (NS).
- VERDICT: CONTEXT.
- Journal club: Different indication; a 7.5 % turbo failure rate is the independent benchmark.

**B51. Sangwattanarat T, Thongudomporn U. Angle Orthod 2024;94(6) and 2025** — VERIFIED abstracts.
- What they found: RCT, 32 children (10.9 y), removable bite plane worn with vs without meals: overbite correction 1.83 vs 1.08 mm/month; wear time correlates with rate. CBCT companion (n = 36): lower-incisor root-length loss 0.21-0.25 mm at 6 months.
- VERDICT: PARTIAL.
- Exact point: the research pack's derived 2026 rates (turbos alone ≈ 1.1, RCOS + turbos ≈ 2.1, elastics + turbos ≈ 2.5 mm/month) bracket these; bite-plane loading causes measurable lower-incisor root loss, not assessed here.
- Journal club: A bite plane worn full-time does 1.8 mm a month in children; the elastics arm did 2.5 in adolescents, with roots unexamined.

**B52. Rasol OA et al. Cureus 2024** — VERIFIED.
- What it found: SR, growing skeletal deep bite, 3 studies (n = 85): flat fixed bite plane 3.6 ± 1.0 months (Forsberg) or 7.2 ± 2.6 months (Alsawaf); inclined plane 8.5 months; utility arch + posterior intermaxillary elastics 8.2 months.
- VERDICT: CONTEXT.
- Exact point: in children the bite plane, not the elastics arm, was fastest.
- Journal club: In the paediatric literature the elastics arm is the slow one.

**B53. Millett DT et al. Cochrane 2018, CD005972** — VERIFIED.
- What it found: no RCTs or CCTs for Class II/2 in children.
- VERDICT: CONTEXT.
- Journal club: The Cochrane vacuum is still there; a non-randomised study does not fill it.

**B54. Aligner bite ramps: Husain F et al. Angle Orthod 2024; Kou B et al. Clin Oral Investig 2026; Choo H et al. Sci Rep 2026; Henick D et al. Angle Orthod 2021; Kravitz ND et al. Angle Orthod 2024** — VERIFIED abstracts.
- What they found: aligner bite ramps do not accelerate anterior intrusion (accuracy 18.8 % vs 18.4 %, Kou) but prevent molar intrusion; Choo: 1.63 mm lower-incisor intrusion, overbite −1.98 mm, no IMPA or FMA change; Henick: G5 + ramps vs fixed, overbite −1.3 vs −2.0 mm, MPA +0.65 vs +1.15°; Kravitz: intrusion accuracy 63.5 % adolescents vs 45.3 % adults; Husain: less root loss with aligners, ramps reduce root-volume loss.
- VERDICT: CONTEXT / PARTIAL.
- Exact point: a bonded turbo with fixed appliances behaves differently from an aligner ramp; fixed appliances open the mandibular plane more (Henick), consistent with Table 5.
- Journal club: Bite ramps in aligners are anchorage, not an engine; turbos with fixed appliances are both.

### Posterior elastics

**B55. Jariyavithayakul P, Charoemratrote C. APOS Trends Orthod 2019;9(3):165-171 (ref 8)** — VERIFIED via journal page.
- What it found: 22 Class II/1 short-faced growing patients (11.35 y) vs 22 controls; rectangular wire with step bends + 1/8-inch 3.5-oz posterior vertical elastics, 0.92 y: net lower posterior extrusion 1.37 mm; lower-incisor intrusion 0.58 mm; overbite −2.67 mm; LI +1.67° (NS); FMA +0.65° and SN-MP +0.64° (NS); LAFH +3.70 vs +1.46 mm; SNB +1.36°.
- VERDICT: PARTIAL, and mis-cited.
- AGREES on extrusion magnitude (Group II lower 0.90-1.19 mm) and LFH increase. CONFLICTS with the citation: the paper cites it for "clockwise mandibular rotation", but Jariyavithayakul found no significant mandibular-plane change (growth compensated), whereas Group II showed FH-Mn +1.31° and Mn-Mx +1.84°. Elastics differ (1/8-inch 3.5 oz for 11 months vs 3/16-inch medium for 44 d) and 2026 had no control.
- Journal club: Reference 8 found no mandibular-plane change with posterior elastics; it is cited for the opposite.

**B56. Alsawaf DH, Rajah N. Angle Orthod 2023** — VERIFIED abstract.
- What it found: RCT, 28 mixed-dentition children (10.7 y): utility arch + intermaxillary elastics vs fixed anterior bite plane: 8.16 vs 7.22 months; overbite −2.1 vs −3.64 mm; MP +1.97 vs +2.75°; U1 flared 6.6 vs 5.9°.
- VERDICT: CONFLICTS in direction; AGREES that both open the MP 2-3°.
- Exact point: in children the bite plane beat the elastics-based arm on speed and amount; different population and appliances.
- Journal club: The only other elastics trial found the bite plane faster; population and appliances differ, but the direction is opposite.

**B57. Absence of other trials** — the research pack's Europe PMC sweep (2019-2026, vertical / box / posterior / intermaxillary elastics AND deep bite or curve of Spee) found only case reports, aligner studies and the two above; Rasol 2025 (B58) confirms no RCT of elastics or of combinations before 2026.
- VERDICT: the novelty claim for elastics + ABT stands; the 44-d and 56-d figures have no external comparator.
- Journal club: Nobody else has timed box elastics against turbos, so this number is alone until someone repeats it randomised.

### Recent comparative trials and reviews

**B58. Rasol OA, Hajeer MY, Alam MK et al. Prog Orthod 2025;26:37 (PROSPERO CRD42025633739)** — VERIFIED full text.
- What it found: SR/MA of 8 RCTs (5 pooled), search to Jan 2025; the only ABT/RCOS trial is Al-Zoubi 2022 (rated low risk of bias): overbite −3.87 vs −4.07 mm, NS, GRADE moderate; the SR quotes the 2022 LI change as +5.47° / +2.28° (the trial tables give 5.74° / 2.82°). Miniscrew vs Connecticut arch: overbite MD −0.36 mm, U1 intrusion MD −0.77 mm, 4-7 months.
- VERDICT: AGREES / PARTIAL.
- Exact points: confirms ABT ≈ RCOS for overbite change (matches "all groups similar"); confirms no prior RCT on posterior elastics or combinations; being non-randomised, the 2026 study would not enter this evidence base.
- Journal club: The 2025 meta-analysis already says turbos equal reverse curves for amount; this paper adds speed, at a lower evidence tier.

**B59. Aligner efficiency: Husain F et al. Clin Oral Investig 2025 (SR, 18 studies); Shahabuddin N et al. AJODO 2023; Kang J et al. BMC Oral Health 2024; Nota A et al. Healthcare 2026; Dianiskova S et al. Orthod Craniofac Res 2025; Goh S et al. AJODO 2022; Wen S et al. Clin Oral Investig 2025; Jin X et al. Clin Oral Investig 2025; Fracchia DE et al. J Clin Med 2025** — VERIFIED abstracts.
- What they found: aligner bite opening 0.4-3.8 mm with 33-49 % accuracy (Husain); first set 33-38 % of planned (Shahabuddin 1.15 mm in ≈ 11 months; Kang); achieved 2.17 of 3.92 mm planned in ≈ 9 months (Nota); lower COS 53-62 % effective; lower-incisor intrusion predictability 35-65 %.
- VERDICT: CONFLICTS in efficiency / CONTEXT.
- Exact point: fixed protocols here delivered 3.6-3.9 mm in 44-94 d; aligners take months to years for less.
- Journal club: If the question is speed, aligners are not in this conversation.

**B60. Pham TT et al. Medicine 2026** — VERIFIED abstract.
- What it found: RCT, aligners vs braces for deep bite: total treatment 20.8 vs 27.5 months (P < .001); overbite improvement NS; braces produced more vertical change; satisfaction higher with aligners.
- VERDICT: CONTEXT.
- Journal club: Total treatment time is what patients feel; this paper measured the first eight weeks.

**B61. Sonwane S et al. Bioinformation 2025** — VERIFIED abstract; very low quality.
- What it found: SEM on 18 extracted premolars; turbos and miniscrews produced more root resorption than box loops.
- VERDICT: CONTEXT.
- Journal club: Eighteen premolars under a microscope is not evidence, but it is a reason to look at the roots.

## C. Conflicts with Proffit (Contemporary Orthodontics)

Chapter and figure numbers are the 7th edition (Fields, Larson, Sarver, Proffit 2025) as used in the study pages; 6th-edition page numbers in brackets are from the printed table of contents. Proffit never uses the term "bite turbo"; his terms are biteplate / anterior bite plane, bite blocks and, for aligners, bite ramps. The research pack verified every Proffit statement below against the study pages except where marked UNVERIFIED.

| Proffit position (chapter / section) | What this paper found or claims | Verdict | How to reconcile it in an exam answer |
|---|---|---|---|
| Three ways to level a deep curve of Spee: absolute intrusion, relative intrusion (differential elongation of premolars, in effect) and extrusion; the type is decided at planning. Ch 15 Leveling, Fig 15.23 [6th p518] | Group I: Point I 0.99 mm + 7.46° proclination + premolar extrusion 1.05-1.06 mm; Group II: lower extrusion 0.90-1.19 mm, upper 0.28-0.42 mm; Group III: passive eruption 0.86-1.30 mm with 1.55° incisor change | AGREES | Use the three arms as a live Fig 15.23. In Group I only about 1 of 3.9 mm (a quarter) is absolute intrusion; the rest is relative intrusion and premolar extrusion. None of the three arms is Proffit's "levelling by intrusion" |
| A continuous reverse-curve lower wire levels almost entirely by extrusion; the working wire is usually 16-mil steel; a preformed extreme-curve NiTi is an option that does not fail-safe. Ch 15 Leveling by Extrusion, Fig 15.24 [6th p518-520] | Group I used a preformed 0.016 × 0.022 NiTi RCOS as the first lower wire and claims ≈ 1 mm true intrusion on top of extrusion | NUANCE | Point I also moved 0.71-0.86 mm in the two arms with no intrusive mechanics, so the intrusion attributable to the RCOS beyond background is 0.1-0.3 mm and untested. Proffit's statement survives; add his fail-safe caution about preformed curved NiTi |
| Placing a rectangular reverse-curve wire in the lower arch is one of the commonest edgewise errors: the curve creates torque that moves incisor roots lingually and crowns labially; level with round wire or step bends first. Ch 15 same section [6th p519-520]; ch15 self-test item | Group I did exactly this from day one; LI-CA +7.46 ± 2.52° vs 3.46° and 1.55°, tip advanced 1.01 mm (P = .027 vs Group II), despite cinching and pre-selected aligned incisors | CONFLICTS with the advice; AGREES with the predicted side effect | Say: the protocol is the textbook torque mistake and 7.5° is the textbook consequence; the 22-slot play with a 16 × 22 wire limits but does not abolish it. The paper's own caveat ("carefully monitored") is Proffit's rule restated |
| Levelling by intrusion needs light continuous force toward the apex and must never pit intrusion of one tooth against extrusion of its neighbour, because extrusion dominates; use bypass or segmented arches or aligners with posterior attachments. Ch 15 Leveling by Intrusion [6th p520-523] | Every tooth 7-7 engaged in a continuous wire; posterior extrusion ≈ 1 mm in all arms, incisor absolute change < 1 mm | AGREES | The paper confirms the rule: with a fully engaged continuous wire, extrusion wins. If asked how to obtain true intrusion, the answer is segmented or bypass mechanics, not a reverse-curve wire |
| Bypass arches apply the intrusive force anterior to the CR, so incisors flare as they intrude (Fig 15.26); a tie-back restrains flaring but loads the molar with a tip-back moment (Fig 15.27); molar extrusion is acceptable only with vertical growth. Ch 15 Bypass Archwires; SBO 2020/2023 items | Cinched RCOS: incisors flared 7.46°; L7 tipped distally 8.94°, L6 5.99°, L7 distal cusp intruded 0.64 mm while its mesial cusp extruded 0.71 mm; L4 tipped mesially 4.44° | AGREES | Cinching turned the RCOS into a tied-back two-couple system; the molar tip-back Proffit predicts appeared, and the reduced posterior extrusion in Group I is that tip-back, not absence of extrusion at the premolars |
| Segmented-arch intrusion gives about four times as much incisor intrusion as molar extrusion in non-growing adults; the CR is near the mid-point of the embedded root. Ch 15 Segmented Archwires, Fig 15.28; Ch 9 Fig 9.18 [6th p276, p522] | Point I (0.66 × length from the tip) used to measure true intrusion; Group I intrusion-to-premolar-extrusion ratio ≈ 0.99 : 1.05, about 1 : 1 | AGREES (measurement) / NUANCE (ratio) | Greig's Point I sits near Proffit's CR, so measuring there is the right way to strip out tipping; the 1 : 1 ratio is what Proffit predicts for a non-segmented system against 4 : 1 for Burstone mechanics |
| Force levels: Table 8.3 optimum intrusion 10-20 g, extrusion 35-60 g; about 10 g per tooth, ≈ 40 g per four incisors (Burstone, via secondary sources); the utility arch delivers an unknown intrusive force. Ch 8 Table 8.3 [6th p250]; Ch 9; study-page numbers.html. The "15-25 g per incisor" figure is not Proffit's wording (UNVERIFIED as Proffit) | No force is reported for the RCOS or the elastics; Sifakakis 2010 measured > 9 N for this wire at 1.5 mm; 3/16-inch medium elastics (≈ 4.5 oz per side, UNVERIFIED for this product) across four teeth | NUANCE | Proffit's key to intrusion is a known light force; a rectangular NiTi RCOS cannot deliver one and his utility-arch criticism (unknown force, too heavy or too light) applies. The elastic force per tooth falls in the 35-60 g extrusion range, which is why extrusion was fast |
| Who is levelled by extrusion and who by intrusion: assess lip-to-incisor display (appropriate → reposition lower incisors; excessive → intrude upper incisors) and anterior face height (short → slight posterior elongation acceptable; long → intrusion). Ch 17 Correction of Vertical Incisor Relationships [6th p562] | Inclusion: average or reduced LFH, average smile line, ANB 1-5°; all three arms acted on the lower arch and preserved upper-incisor display (upper incisor V −0.09 to −0.43 mm) | AGREES | Good case selection by Proffit's rule. Corollary for the exam: none of the three protocols transfers to a long-face or high-display patient, and those patients were excluded |
| Growing vs non-growing: in adolescents the choice can be resolved in favour of extrusion because vertical growth compensates; in adults it must usually be intrusion, best with skeletal anchorage and segmented arches. Ch 20 Intrusion of incisors [6th Ch 19 p614]; Ch 15 Bypass archwires | Mean age 15.8-17.4 y, 25 males, guardian consent, yet the Discussion calls the sample "nongrowing" and argues stability from Rozzi 2019 (19.8 y) | NUANCE / CONFLICTS (internal) | By Proffit's rule the extrusion-based levelling is legitimate for 16-year-olds precisely because they are growing; calling them nongrowing undercuts the paper's own justification. For a true adult Proffit would choose segmented or TAD intrusion, not any of these three |
| Why posterior extrusion is risky in adults: no continued ramus growth to compensate, so molar extrusion produces downward-backward rotation; Class II elastics' vertical component is contraindicated in non-growers; cross-elastics used with great caution in adults. Ch 16 Class II correction, Fig 16.26 [6th p538]; Ch 21 (7th) aligners in adults; Ch 20. The "muscle forces re-intrude extruded teeth" rationale is NOT in Proffit (UNVERIFIED as Proffit; Ch 5 plays down masticatory force as a vertical determinant) | Groups II and III relied on posterior extrusion; Mn-Mx +1.84° (II) and +0.69° (III); the paper cites Rozzi 2019 for stability and flags hyperdivergent patients | AGREES (mechanism) / NUANCE (stability) | Quote the growth-and-ramus argument, not muscle force. The stability reassurance rests on one retrospective study whose stable subgroup was high-angle; T2 here is the end of levelling, so no stability inference is possible |
| Consequences of clockwise rotation: chin down and back, LAFH and MP angle up; in Class II, lower-molar elongation is acceptable only with good vertical growth and the accompanying upper-incisor extrusion can be unsightly. Ch 4 Rotation of jaws [6th p88]; Ch 14 Figs 14.7-14.9 [6th p455]; Ch 16 Fig 16.26 | Sample mildly Class II (ANB 4-5°); MP opened 1.35 / 1.84 / 0.69° in 6-14 weeks; no SNB, ANB, overjet or chin change reported at T2; no control | NUANCE | Proffit's logic says 1.3-1.8° of opening moved the chin down and back and slightly worsened the AP relationship; the paper did not measure it. Ask where the SNB / ANB changes are |
| Anterior bite plane / biteplate encourages posterior eruption (Ch 11 Deep Bite, Fig 11.11 [6th p364]; Ch 12 [6th p402]); choosing bite blocks or a biteplate means accepting posterior elongation and downward-backward rotation (Ch 15 Fig 15.15); aligner bite ramps give results similar to relative intrusion with fixed appliances (Ch 15; Ch 18 7th) | Group III corrected 3.57 mm in 94 d mainly by lower posterior eruption (0.86-1.30 mm), incisor change 1.55°, smallest skeletal change (Mn-Mx +0.69°) | AGREES | An ABT is Proffit's anterior bite plane made fixed; the aligner bite-ramp text is the closest analogue and predicts Group III exactly. Add Proffit's framing: a bite plane is a decision to accept posterior elongation and some rotation, appropriate here because faces were short or average and patients growing |
| Vertical / box elastics are light, short-term settling tools: light posterior vertical elastics with light round wires for a few weeks at most (Ch 17 Final Settling, Figs 17.10-17.12 [6th p564]); box elastics to counter posterior open bite after fixed functionals (Ch 14) and for post-surgical settling (Ch 22); excessive interarch elastics elongate posteriors and can open the bite anteriorly (Ch 17 Fig 17.10) | Group II used 3/16-inch medium box elastics as the primary bite-opening engine for ≈ 44 d: fastest correction, most upper posterior extrusion (0.28-0.42 mm), largest Mn-Mx (+1.84°) and LFH (+1.56 %) | NUANCE | Mechanism is Proffit's (elastics extrude, rotation follows), but the use is off-label relative to Proffit, who reserves vertical elastics for settling. The "most efficient" finding is real, but bought with the largest vertical side effect; in a long-face or non-growing patient Proffit would call it contraindicated |
| Levelling sequence and anchorage: A-NiTi alignment, then 16-mil steel with reverse / accentuated curve, then 18-mil round; bond second molars and use stiff wires because levelling depends on force over the whole arch; Proffit gives no expected levelling duration. Ch 15 Leveling by extrusion [6th p518-520]; Ch 18 (7th) pearl | Lower arch bonded 7-7 in all arms; Group I skipped round alignment and started with rectangular NiTi RCOS; endpoint is overbite < 30 % with posterior contact, not a level curve | AGREES (7-7 bonding) / CONFLICTS (wire sequence) | The 44 / 56 / 94-d figures are new data for an overbite-based endpoint, not for finished levelling. If asked what Proffit says about levelling time, the honest answer is that he gives an archwire sequence, not days |
| Retention after deep-bite correction: a maxillary removable retainer with a bite plane is often needed for several years, night-only once stable; a Hawley provides a potential bite plane; finish Class II deep bite over-corrected to end-to-end; retain lower incisors until growth ends (late teens girls, early twenties boys). Ch 19 Retention after deep bite correction, Figs 19.5 / 19.8 [6th Ch 18 p579, p584]; Ch 17 Control of rebound [6th p569] | No retention protocol, no follow-up; T2 is end of levelling; target was overbite < 30 %, not over-corrected; the authors list lack of follow-up as a limitation | NUANCE | The paper is silent where Proffit is emphatic. Pair the short-term result with the rule that every one of these patients needs a bite-plane retainer for years, and note that extrusion-based correction in a still-growing short-face patient is the pattern most likely to re-deepen |
| Two-couple mechanics: a wire tied into brackets at both ends is statically indeterminate; the tooth nearer a V-bend moves toward the bend apex, the distant tooth the opposite way; forces are large over short spans; the utility arch is a complex two-couple system whose effect is not exactly predictable. Ch 9 Determinate vs indeterminate systems, Figs 9.36-9.39, Table 9.4 [6th p298] | The RCOS is a continuous curved wire in 14 brackets at 5-8 mm spans, then cinched; observed: incisor intrusion + flare, premolar extrusion + L4 mesial tipping 4.44°, molar tip-back 6-9° | AGREES | Everything in Group I is qualitatively predictable from the V-bend rules (teeth near the curve's apex extrude; incisors and molars at the ends move oppositely and tip); the magnitudes are not predictable, which is Proffit's exact objection to continuous two-couple levelling |
| Much of adult deep-bite correction on superimposition is incisor proclination; only about a third of predicted aligner deep-bite correction expresses; the short-face growth pattern (forward rotation) carries incisors into overlap. Ch 21 (7th) pearl; Ch 18 (7th) 33 % rule; Ch 4 Fig 4.21 [6th p88] | Group I tip moved 2.46 mm while Point I moved 0.99 mm, with 7.46° of proclination; Groups II / III tip 1.02-1.25 mm with 1.55-3.46° | AGREES | Use the Table 3 / Table 4 split (tip vs Point I) as the numeric demonstration that most "intrusion" seen at the incisal edge is proclination |

## D. Open questions the paper leaves unresolved

- How many patients were in each arm at analysis? The SEs say about 29 / 31 / 20, the abstract says three equal groups, and the dropout's arm is never stated.
- Which is the Group I duration SD, 10.52 or 20.5? The Tukey SEs say 20.5; the answer changes the RCOS arm's predictability and the I-vs-II effect size.
- What is the sign convention in Table 4, and why is Point I positive when the incisal tip is negative and both are called intrusion? Was Point I measured on the corpus-axis superimposition or against the S-based grid?
- Is there a between-group test for Point I? Without it, "RCOS gives 1 mm true intrusion" cannot be distinguished from the 0.71-0.86 mm in the arms without an RCOS.
- Why does the 2026 turbos-alone arm reproduce 14 values of the 2022 turbos arm to two decimals? Is any of the 2022 data re-used, and if so which tracings and which patients?
- Why does turbos-alone true intrusion differ threefold between 2022 (0.28 mm) and 2026 (0.86 mm) with the same appliance and the same measurement?
- What is the correct LFH post-hoc block? With the printed SDs, elastics vs turbos alone (1.15 %) is P < .001, not .836.
- Which baseline P values are right? Crowding, SNA, L5Tip and U.C.I Tip do not reproduce from the printed means and SDs under any group size.
- How much of the 11-day elastics-versus-RCOS gap survives a 14-day review interval, an unblinded operator calling the endpoint, and allocation of cooperators to the elastics arm?
- Which test was the G*Power calculation for? f = 0.25 at 90 % power for three groups needs about 207, not 75.
- How much of the vertical skeletal change is growth? Mean age 16, no control, no growth staging, and the oldest arm changed least.
- What happened to SNB, ANB, overjet and chin position at T2 in a mildly Class II sample whose mandibular plane opened 1.3-1.8°?
- How deep was the curve of Spee at T1 and how much of it was levelled at T2? Without it, "levelling duration" is really "time to 30 % overbite with the turbos in place".
- What were the elastic force, wear hours per day and compliance in Group II, and were there any turbo debonds per arm?
- What happened to the roots and labial bone in the RCOS arm (7.5° of tipping, 9° of molar tip-back), given Nasrawi 2022 and Mahmoud 2025 in comparable mechanics?
- What was the overbite at debond, and at one, two and five years, in each arm? The relapse literature (Pollard 2012, Rozzi 2019, Huang 2012) predicts 0.8-1.4 mm of rebound in exactly this phenotype.
- Would the same operator, given a zero-torque steel reverse curve (Shakhtour 2025) or a round RCOS (Shao 2026), still have found 7.5° of flaring?
- Was the study registered, and which of the many outcomes was primary?

## E. One-paragraph verdict

Relative to the textbook, this paper is Proffit's Chapter 15 acted out: three arms that level by relative intrusion and extrusion in exactly the patients (short or average face, normal display, still growing) for whom he permits it, with the rectangular reverse-curve wire producing the flaring he warns about, the cinched wire producing the molar tip-back he predicts, and the box elastics producing the rotation he expects from extrusion; the one place it departs from Proffit, the claim of 1 mm of true intrusion from a continuous RCOS, is not supported by its own Table 4, where the arms without an RCOS show 0.71-0.86 mm. Relative to the trials, it is a step down from the same group's 2022 and 2025 RCTs to an operator-allocated cohort whose arms differ in age, crowding, divergence and cooperation in the direction of the results, whose standard errors imply roughly 29 / 31 / 20 patients rather than three groups of 27, whose LFH post-hoc block and several baseline P values do not reproduce, and whose turbos-alone arm prints 14 values identical to the 2022 turbos arm; the one robust, large and genuinely new finding is that adding either a lower NiTi reverse-curve wire or bilateral posterior box elastics to anterior bite turbos roughly halves the time to a 30 % overbite (about 40-50 days, d > 2), while the 11-day elastics-over-RCOS margin sits inside the 14-day review interval and inside the allocation confound. Use it in an exam as a worked example of levelling mechanics and of what a non-randomised design cannot tell you; do not use it to rank elastics over reverse curves, to quantify true intrusion, or to reassure a long-face or high-smile-line patient, because those patients were excluded and those numbers are within noise.
