"""Recomputations behind conflicts.md and critical-appraisal.md for
Stephens, Boley, Behrents, Alexander, Buschang. Long-term profile changes in extraction and
nonextraction patients. Am J Orthod Dentofacial Orthop 2005;128(4):450-7. doi:10.1016/j.ajodo.2004.04.034

Every input is a mean, SD, n or P value printed in Tables I and III-VII, read from the page images
(the text layer drops minus signs). Group sizes: extraction 20 / nonextraction 20 (Methods p 451);
males 12 / females 28 (Table I: 6 + 6 males, 14 + 14 females).
The paper says only "T tests"; both Student (pooled SD) and Welch versions are shown.
Run: python -I checks.py   (needs scipy, numpy)
"""
import math
from scipy import stats

ALPHA = 0.05


def two_sample(m1, s1, n1, m2, s2, n2):
    diff = m1 - m2
    sp = math.sqrt(((n1 - 1) * s1 ** 2 + (n2 - 1) * s2 ** 2) / (n1 + n2 - 2))
    se_p = sp * math.sqrt(1 / n1 + 1 / n2)
    df_p = n1 + n2 - 2
    t_p = diff / se_p
    p_p = 2 * stats.t.sf(abs(t_p), df_p)
    se_w = math.sqrt(s1 ** 2 / n1 + s2 ** 2 / n2)
    df_w = se_w ** 4 / ((s1 ** 2 / n1) ** 2 / (n1 - 1) + (s2 ** 2 / n2) ** 2 / (n2 - 1))
    t_w = diff / se_w
    p_w = 2 * stats.t.sf(abs(t_w), df_w)
    d = diff / sp
    g = d * (1 - 3 / (4 * df_p - 1))
    tc = stats.t.ppf(0.975, df_p)
    ci = (diff - tc * se_p, diff + tc * se_p)
    return dict(diff=diff, t_p=t_p, p_p=p_p, t_w=t_w, p_w=p_w, df_w=df_w, d=d, g=g, ci=ci)


def one_sample_p(m, s, n):
    t = m / (s / math.sqrt(n))
    return t, 2 * stats.t.sf(abs(t), n - 1)


def flag(rep, p):
    """Compare a printed P (string) with a recomputed P."""
    if rep == "NS":
        return "MISMATCH (printed NS)" if p < ALPHA else "ok"
    if rep.startswith("<"):
        return "ok" if p < float(rep[1:]) + 0.005 else "MISMATCH"
    r = float(rep)
    if (r < ALPHA) != (p < ALPHA) and abs(r - p) > 0.01:
        return "MISMATCH (significance flips)"
    return "ok" if abs(r - p) <= 0.03 else "differs"


def table(title, rows, n1, n2, labels):
    print(f"\n=== {title} (n = {n1} {labels[0]} / {n2} {labels[1]}) ===")
    print(f"{'variable':<16}{'diff':>7}{'d':>7}{'95% CI of diff':>18}{'t(pool)':>9}{'P pool':>8}{'P Welch':>9}{'printed':>9}  check")
    for name, m1, s1, m2, s2, rep in rows:
        r = two_sample(m1, s1, n1, m2, s2, n2)
        ci = f"{r['ci'][0]:.2f} to {r['ci'][1]:.2f}"
        print(f"{name:<16}{r['diff']:>7.2f}{r['d']:>7.2f}{ci:>18}{r['t_p']:>9.2f}{r['p_p']:>8.3f}{r['p_w']:>9.3f}{rep:>9}  {flag(rep, r['p_p'])}")


# ---------------------------------------------------------------- Table III (extraction vs nonextraction)
T3_POST = [("N'-Pr-Pg' (°)", 131.2, 3.3, 132.2, 3.4, ".33"), ("N'-Sn-Pg' (°)", 163.6, 4.9, 163.5, 4.8, ".95"),
           ("LS-E (mm)", -5.9, 1.4, -5.4, 2.1, ".37"), ("LI-E (mm)", -3.6, 2.2, -4.2, 2.2, ".42"),
           ("LS-S (mm)", -2.2, 1.1, -2.4, 1.9, ".73"), ("LI-S (mm)", -1.2, 2.1, -2.2, 2.1, ".15"),
           ("H-line (mm)", 3.7, 1.1, 3.6, 1.3, ".88"), ("U1-SN (°)", 105.6, 6.2, 103.8, 6.6, ".38"),
           ("L1-NB (mm)", 3.9, 1.8, 3.4, 1.8, ".42")]
T3_LT = [("N'-Pr-Pg' (°)", 132.1, 3.4, 132.1, 4.2, ".99"), ("N'-Sn-Pg' (°)", 167.6, 4.9, 166.4, 5.6, ".47"),
         ("LS-E (mm)", -7.3, 2.0, -7.0, 2.7, ".63"), ("LI-E (mm)", -4.9, 3.0, -5.7, 2.7, ".36"),
         ("LS-S (mm)", -3.2, 1.4, -3.5, 2.1, ".49"), ("LI-S (mm)", -2.1, 2.4, -3.4, 2.2, ".10"),
         ("H-line (mm)", 3.7, 1.2, 3.2, 1.1, ".19"), ("U1-SN (°)", 105.1, 6.6, 104.9, 7.6, ".93"),
         ("L1-NB (mm)", 3.9, 2.3, 3.1, 2.0, ".24")]
T3_CH = [("N'-Pr-Pg' (°)", 0.9, 2.8, -0.2, 3.4, ".29"), ("N'-Sn-Pg' (°)", 4.0, 3.5, 2.9, 3.7, ".33"),
         ("LS-E (mm)", -1.5, 1.5, -1.6, 2.5, ".82"), ("LI-E (mm)", -1.3, 1.5, -1.6, 2.2, ".66"),
         ("LS-S (mm)", -1.0, 1.4, -1.2, 2.0, ".70"), ("LI-S (mm)", -0.9, 1.4, -1.2, 1.8, ".56"),
         ("H-line (mm)", 0.1, 1.1, -0.4, 1.0, ".21"), ("U1-SN (°)", -0.6, 4.3, 1.1, 4.0, ".23"),
         ("L1-NB (mm)", 0.1, 1.0, -0.3, 1.2, ".32")]
STAR3 = {"N'-Sn-Pg' (°)", "LS-E (mm)", "LI-E (mm)", "LS-S (mm)", "LI-S (mm)"}  # asterisked in both groups

# ---------------------------------------------------------------- Table IV (males vs females)
T4_POST = [("N'-Pr-Pg' (°)", 132.8, 3.5, 131.3, 3.2, ".18"), ("N'-Sn-Pg' (°)", 164.4, 4.9, 163.2, 4.7, ".48"),
           ("LS-E (mm)", -5.8, 1.6, -5.5, 1.9, ".69"), ("LI-E (mm)", -4.7, 2.1, -3.5, 2.2, ".13"),
           ("LS-S (mm)", -2.4, 1.3, -2.3, 1.7, ".85"), ("LI-S (mm)", -2.4, 1.9, -1.4, 2.2, ".19"),
           ("H-line (mm)", 4.0, 1.3, 3.5, 1.2, ".23"), ("U1-SN (°)", 107.0, 5.9, 103.8, 6.5, ".15"),
           ("L1-NB (mm)", 3.0, 1.4, 3.9, 1.9, ".17")]
T4_LT = [("N'-Pr-Pg' (°)", 133.4, 4.4, 131.5, 3.4, ".14"), ("N'-Sn-Pg' (°)", 169.8, 4.1, 165.8, 5.3, ".02"),
         ("LS-E (mm)", -9.0, 2.0, -6.4, 2.1, "<.01"), ("LI-E (mm)", -7.6, 2.5, -4.3, 2.4, "<.01"),
         ("LS-S (mm)", -4.3, 1.7, -2.9, 1.6, ".02"), ("LI-S (mm)", -4.4, 2.2, -2.1, 2.2, "<.01"),
         ("H-line (mm)", 3.8, 1.3, 3.3, 1.1, ".16"), ("U1-SN (°)", 109.6, 5.3, 103.0, 6.8, ".01"),
         ("L1-NB (mm)", 2.3, 1.6, 4.0, 2.2, ".02")]
T4_CH = [("N'-Pr-Pg' (°)", 0.6, 4.3, 0.3, 2.5, ".79"), ("N'-Sn-Pg' (°)", 5.5, 3.6, 2.6, 3.3, ".02"),
         ("LS-E (mm)", -3.2, 2.1, -0.9, 1.5, "<.01"), ("LI-E (mm)", -3.0, 1.7, -0.8, 1.5, "<.01"),
         ("LS-S (mm)", -1.9, 1.7, -0.7, 1.6, ".03"), ("LI-S (mm)", -2.0, 1.4, -0.7, 1.5, ".01"),
         ("H-line (mm)", -0.1, 1.0, -0.2, 1.1, ".87"), ("U1-SN (°)", 2.6, 3.3, -0.8, 4.2, ".02"),
         ("L1-NB (mm)", -0.7, 1.4, 0.1, 0.9, ".08")]

# ---------------------------------------------------------------- Table V (males vs females, landmark change, mm)
# (name, male mean, SD, male starred, female mean, SD, female starred, printed P)
T5 = [("Pn-h", 6.7, 4.8, 1, 3.1, 3.3, 1, ".01"), ("Pn-v", 2.7, 2.9, 1, 0.4, 2.5, 0, ".01"),
      ("Col-h", 4.9, 3.6, 1, 2.6, 3.3, 1, ".05"), ("Col-v", 3.0, 3.9, 1, 0.8, 2.3, 0, ".03"),
      ("Sn-h", 3.5, 3.0, 1, 1.5, 3.3, 1, "NS"), ("Sn-v", 2.3, 4.1, 0, 0.7, 2.3, 0, "NS"),
      ("Sls-h", 3.4, 2.9, 1, 1.6, 3.0, 1, "NS"), ("Sls-v", 3.5, 3.5, 1, 1.9, 2.1, 1, "NS"),
      ("Ls-h", 4.1, 3.7, 1, 1.8, 3.1, 1, ".05"), ("Ls-v", 3.5, 2.8, 1, 1.5, 2.9, 1, ".04"),
      ("Li-h", 5.0, 3.2, 1, 2.5, 3.2, 1, "NS"), ("Li-v", 2.6, 3.5, 1, 1.6, 3.2, 1, ".03"),
      ("Pg'-h", 7.9, 4.2, 1, 4.0, 3.9, 1, ".01"), ("Pg'-v", 5.6, 4.8, 1, 1.8, 3.8, 1, ".01"),
      ("UIE-h", 4.7, 2.6, 1, 3.3, 2.9, 1, "NS"), ("UIE-v", 3.1, 3.2, 1, 1.9, 3.1, 1, "NS"),
      ("UIA-h", 4.2, 2.9, 1, 3.3, 2.6, 1, ".01"), ("UIA-v", 4.6, 3.3, 1, 1.9, 2.5, 1, "NS"),
      ("LIE-h", 3.9, 2.7, 1, 2.5, 2.8, 1, "NS"), ("LIE-v", 1.6, 3.2, 0, 0.2, 3.1, 0, "NS"),
      ("LIA-h", 4.6, 2.8, 1, 2.0, 3.3, 1, ".02"), ("LIA-v", 3.8, 4.0, 1, 1.3, 3.5, 1, ".06"),
      ("B-h", 5.1, 3.1, 1, 2.7, 3.2, 1, ".04"), ("B-v", 2.2, 3.8, 0, 0.2, 3.5, 0, "NS")]

if __name__ == "__main__":
    print("NOTE: inputs are rounded to 0.1, so recomputed P values are approximate (+/- a few hundredths).")
    table("1. Table III posttreatment, Ext vs Nonext", T3_POST, 20, 20, ("ext", "nonext"))
    table("2. Table III long-term follow-up, Ext vs Nonext", T3_LT, 20, 20, ("ext", "nonext"))
    table("3. Table III long-term CHANGES, Ext vs Nonext", T3_CH, 20, 20, ("ext", "nonext"))
    table("4. Table IV posttreatment, M vs F", T4_POST, 12, 28, ("M", "F"))
    table("5. Table IV long-term follow-up, M vs F", T4_LT, 12, 28, ("M", "F"))
    table("6. Table IV long-term CHANGES, M vs F", T4_CH, 12, 28, ("M", "F"))

    print("\n=== 7. Table V landmark changes, M (12) vs F (28) ===")
    print(f"{'landmark':<8}{'diff':>6}{'d':>6}{'t(pool)':>9}{'P pool':>8}{'P Welch':>9}{'printed':>9}  check")
    for name, m1, s1, _, m2, s2, _, rep in T5:
        r = two_sample(m1, s1, 12, m2, s2, 28)
        print(f"{name:<8}{r['diff']:>6.1f}{r['d']:>6.2f}{r['t_p']:>9.2f}{r['p_p']:>8.3f}{r['p_w']:>9.3f}{rep:>9}  {flag(rep, r['p_p'])}")
    print("Swap test: Li-h P(pool) vs Li-v printed .03; UIA-v P(pool) vs UIA-h printed .01")
    for a in ("Li-h", "Li-v", "UIA-h", "UIA-v"):
        row = [x for x in T5 if x[0] == a][0]
        print(f"  {a}: recomputed P = {two_sample(row[1], row[2], 12, row[4], row[5], 28)['p_p']:.3f}, printed {row[7]}")

    print("\n=== 8. Within-group change vs zero (one-sample t on the printed change) vs asterisks ===")
    for title, rows, n1, n2, star in [("Table III ext/nonext", T3_CH, 20, 20, None), ("Table IV M/F", T4_CH, 12, 28, None)]:
        print(f"-- {title}")
        for name, m1, s1, m2, s2, _ in rows:
            t1, p1 = one_sample_p(m1, s1, n1)
            t2, p2 = one_sample_p(m2, s2, n2)
            print(f"  {name:<16} group1 t={t1:6.2f} P={p1:.3f}   group2 t={t2:6.2f} P={p2:.3f}")
    print("-- Table V (asterisk = printed as significant within-sex change)")
    for name, m1, s1, st1, m2, s2, st2, _ in T5:
        _, p1 = one_sample_p(m1, s1, 12)
        _, p2 = one_sample_p(m2, s2, 28)
        f1 = "" if (p1 < ALPHA) == bool(st1) else "  <-- asterisk disagrees"
        f2 = "" if (p2 < ALPHA) == bool(st2) else "  <-- asterisk disagrees"
        print(f"  {name:<7} M P={p1:.3f} star={st1}{f1}   F P={p2:.3f} star={st2}{f2}")

    print("\n=== 9. Arithmetic: long-term minus posttreatment vs printed change ===")
    for label, post, lt, ch, k in [("Ext", T3_POST, T3_LT, T3_CH, 1), ("Nonext", T3_POST, T3_LT, T3_CH, 3),
                                   ("Male", T4_POST, T4_LT, T4_CH, 1), ("Female", T4_POST, T4_LT, T4_CH, 3)]:
        out = []
        for a, b, c in zip(post, lt, ch):
            calc = round(b[k] - a[k], 1)
            out.append(f"{a[0].split(' ')[0]} {calc:+.1f}/{c[k]:+.1f}" + ("" if abs(calc - c[k]) <= 0.15 else " !"))
        print(f"  {label}: " + "; ".join(out))

    print("\n=== 10. Cross-table consistency: Table III mean of the two groups vs Table IV (12 M + 28 F)/40 ===")
    for block3, block4, lab in [(T3_POST, T4_POST, "post"), (T3_LT, T4_LT, "LT"), (T3_CH, T4_CH, "change")]:
        out = []
        for a, b in zip(block3, block4):
            m3 = (a[1] + a[3]) / 2
            m4 = (12 * b[1] + 28 * b[3]) / 40
            out.append(f"{a[0].split(' ')[0]} {m3:.2f}/{m4:.2f}")
        print(f"  {lab}: " + "; ".join(out))

    print("\n=== 11. Table VI perceived change (% of 106-mm VAS), unit = patient ===")
    T6 = [("Orthodontists", 35.8, 12.8, 33.9, 13.5, ".63", 36.6, 10.7, 34.2, 14.1, ".59"),
          ("Laypeople", 38.2, 8.2, 37.5, 10.1, ".80", 39.2, 6.9, 37.3, 10.0, ".57"),
          ("Combined", 36.5, 9.7, 36.3, 10.9, ".95", 38.3, 7.9, 35.6, 11.0, ".45")]
    for name, e, es, ne, nes, pe, m, ms, f, fs, ps in T6:
        r1 = two_sample(e, es, 20, ne, nes, 20)
        r2 = two_sample(m, ms, 12, f, fs, 28)
        print(f"  {name:<14} Ext v Nonext P={r1['p_p']:.2f} (printed {pe}), d={r1['d']:.2f} | M v F P={r2['p_p']:.2f} (printed {ps}), d={r2['d']:.2f}")
    sds = [x for row in T6 for x in (row[2], row[4], row[7], row[9])]
    print(f"  SD range in Table VI: {min(sds)} to {max(sds)} (text says 7.3% to 14.9%)")
    for name, e, es, ne, nes, *_ in T6[2:]:
        t, p = one_sample_p(e, es, 20)
        print(f"  single-sample t, combined extraction vs 0: t={t:.1f}, P={p:.1e}")

    print("\n=== 12. Table VII preference rows sum to 100? ===")
    T7 = {"Ortho Ext": (37.5, 36.0, 26.5), "Ortho Nonext": (38.3, 28.9, 32.8), "Ortho Male": (42.3, 29.0, 28.7),
          "Ortho Female": (36.0, 34.0, 30.0), "Lay Ext": (32.0, 38.6, 29.5), "Lay Nonext": (32.5, 32.9, 34.6),
          "Lay Male": (36.9, 29.6, 33.5), "Lay Female": (30.3, 38.3, 31.4)}
    for k, v in T7.items():
        print(f"  {k:<13} post {v[0]:5.1f} LT {v[1]:5.1f} neither {v[2]:5.1f}  sum {sum(v):.1f}")
    allv = [x for v in T7.values() for x in v]
    print(f"  range of cells {min(allv)} to {max(allv)} (text: 'approximately 30%' each)")

    print("\n=== 13. Correlations ===")
    n = 40
    r = 0.34
    t = r * math.sqrt(n - 2) / math.sqrt(1 - r ** 2)
    print(f"  r = 0.34, n = 40 -> t = {t:.2f}, P = {2 * stats.t.sf(t, n - 2):.3f} (printed .03)")
    tc = stats.t.ppf(0.975, n - 2)
    print(f"  critical |r| at P < .05 with n = 40: {tc / math.sqrt(n - 2 + tc ** 2):.3f}")
    print(f"  18 correlations at alpha .05: expected false positives = {18 * 0.05:.1f}; "
          f"P(at least one) = {1 - 0.95 ** 18:.2f}")

    print("\n=== 14. Power / minimum detectable effect (two-sided alpha .05, power 80%) ===")
    for n1, n2, lab in [(20, 20, "Ext vs Nonext"), (12, 28, "M vs F")]:
        df = n1 + n2 - 2
        dmin = (stats.t.ppf(0.975, df) + stats.t.ppf(0.80, df)) * math.sqrt(1 / n1 + 1 / n2)
        # exact power at that d via noncentral t
        nc = dmin / math.sqrt(1 / n1 + 1 / n2)
        pw = stats.nct.sf(stats.t.ppf(0.975, df), df, nc) + stats.nct.cdf(-stats.t.ppf(0.975, df), df, nc)
        print(f"  {lab}: minimum detectable d = {dmin:.2f} (exact power at that d = {pw:.2f})")
    print("  In units for Table III long-term changes (pooled SD x d_min):")
    df = 38
    dmin = (stats.t.ppf(0.975, df) + stats.t.ppf(0.80, df)) * math.sqrt(1 / 20 + 1 / 20)
    for name, m1, s1, m2, s2, _ in T3_CH:
        sp = math.sqrt((s1 ** 2 + s2 ** 2) / 2)
        print(f"    {name:<16} pooled SD {sp:.2f} -> detectable difference {sp * dmin:.2f}")
    for d in (0.2, 0.5):
        nc = d / math.sqrt(0.1)
        pw = stats.nct.sf(stats.t.ppf(0.975, 38), 38, nc) + stats.nct.cdf(-stats.t.ppf(0.975, 38), 38, nc)
        print(f"  Power of 20 vs 20 to detect d = {d}: {pw:.2f}")

    print("\n=== 15. Bonferroni across the 9 long-term change outcomes (alpha .05/9 = .0056) ===")
    for lab, rows, n1, n2 in [("Table III ext/nonext", T3_CH, 20, 20), ("Table IV M/F", T4_CH, 12, 28)]:
        survivors = [x[0] for x in rows if two_sample(x[1], x[2], n1, x[3], x[4], n2)["p_p"] < 0.05 / 9]
        print(f"  {lab}: survive = {survivors}")

    print("\n=== 16. Table I derived ages (years) ===")
    grp = [(6, 15.6, 30.3, 14.7), (6, 15.1, 30.1, 15.0), (14, 14.8, 28.9, 14.1), (14, 15.1, 30.0, 14.9)]
    N = sum(g[0] for g in grp)
    for i, lab in [(1, "posttreatment age"), (2, "long-term age"), (3, "interval")]:
        print(f"  overall mean {lab}: {sum(g[0] * g[i] for g in grp) / N:.2f}")
    print(f"  interval check (LT - post): " + ", ".join(f"{g[2] - g[1]:.1f}/{g[3]}" for g in grp))

    print("\n=== 17. Other counts ===")
    print(f"  87.5% of 40 patients = {0.875 * 40:.0f} patients; Conclusion 5 prints 87%")
    print(f"  evaluators: 115 laywomen + 110 laymen = {115 + 110} laypeople; + 105 orthodontists = {115 + 110 + 105}")
    print(f"  18 correlations = 9 cephalometric changes x 2 rater groups = {9 * 2}")
