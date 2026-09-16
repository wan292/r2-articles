"""Recomputations behind conflicts.md Section A for Khaleel & Al-Nimri, Angle Orthod 2026;96(5):528-535.
Every input is a number printed in the paper's Tables 1, 2 and 5. Run: python checks.py  (needs scipy, numpy).
"""
import math
from scipy import stats
import numpy as np

print("=== 1. Group III mean from Tukey differences (Table 2) ===")
print("55.72+38.676 =", round(55.72+38.676,3), "; 44.42+49.981 =", round(44.42+49.981,3))

print("\n=== 2. Tukey SE ratios -> implied n (Table 2 and Table 5) ===")
for name,(a,b,c) in {"Duration":(3.759,4.229,4.173),"Mn-Mx":(0.3469,0.3903,0.3852),
                     "LFH":(0.8873,0.9983,0.9850),"FH-Mn":(0.33115,0.37258,0.36764)}.items():
    r13=(b/a)**2; r23=(c/a)**2
    print(f"{name}: (SE13/SE12)^2={r13:.3f}  (SE23/SE12)^2={r23:.3f}")
# solve for n1,n2,n3 from three SE^2 = MSE*(1/ni+1/nj): ratios independent of MSE
# Let x=1/n1,y=1/n2,z=1/n3. (x+z)/(x+y)=r13, (y+z)/(x+y)=r23, plus total n=80
def solve(r13,r23,total=80):
    best=None
    for n1 in range(10,60):
        for n2 in range(10,60):
            n3=total-n1-n2
            if n3<5: continue
            x,y,z=1/n1,1/n2,1/n3
            e=((x+z)/(x+y)-r13)**2+((y+z)/(x+y)-r23)**2
            if best is None or e<best[0]: best=(e,n1,n2,n3)
    return best
print("Best integer fit (total 80) duration:", solve((4.229/3.759)**2,(4.173/3.759)**2))
print("Best integer fit (total 80) Mn-Mx:", solve((0.3903/0.3469)**2,(0.3852/0.3469)**2))
print("Best integer fit (total 80) FH-Mn:", solve((0.37258/0.33115)**2,(0.36764/0.33115)**2))
print("Best integer fit (total 80) LFH:", solve((0.9983/0.8873)**2,(0.9850/0.8873)**2))

print("\n=== 3. Which SD_I reproduces SE(I,II)=3.759? ===")
for n in [(27,27,26),(29,31,20)]:
    for sd1 in [10.52,20.5]:
        n1,n2,n3=n
        mse=((n1-1)*sd1**2+(n2-1)*10.88**2+(n3-1)*7.08**2)/(n1+n2+n3-3)
        se12=math.sqrt(mse*(1/n1+1/n2)); se13=math.sqrt(mse*(1/n1+1/n3)); se23=math.sqrt(mse*(1/n2+1/n3))
        print(f"n={n} SD_I={sd1}: SE12={se12:.3f} SE13={se13:.3f} SE23={se23:.3f}  (printed 3.759/4.229/4.173)")

print("\n=== 4. Table 5 LFH SE from printed SDs ===")
for name,sds,printed in [("Mn-Mx",(1.30,1.59,0.90),0.3469),("LFH",(0.82,0.84,0.43),0.8873),("FH-Mn",(0.83,1.85,0.49),0.33115)]:
    for n in [(27,27,26),(29,31,20)]:
        n1,n2,n3=n
        mse=((n1-1)*sds[0]**2+(n2-1)*sds[1]**2+(n3-1)*sds[2]**2)/(n1+n2+n3-3)
        print(f"{name} n={n}: expected SE12={math.sqrt(mse*(1/n1+1/n2)):.3f}  printed {printed}")
print("LFH mean diffs from means 0.97/1.56/0.41: 1-2 =",round(0.97-1.56,2),"1-3 =",round(0.97-0.41,2),"2-3 =",round(1.56-0.41,2))
print("Printed LFH rows: 1-2 = 0.5812, 1-3 = 1.1436, 2-3 = 0.5624")
# t for 2 vs 3 LFH with printed SDs
for n in [(27,27,26),(29,31,20)]:
    n1,n2,n3=n
    mse=((n1-1)*0.82**2+(n2-1)*0.84**2+(n3-1)*0.43**2)/(n1+n2+n3-3)
    se=math.sqrt(mse*(1/n2+1/n3)); t=1.15/se
    print(f"LFH II vs III with printed SDs n={n}: SE={se:.3f}, t={t:.2f}")

print("\n=== 5. Group III paired-t P values (Table 5) ===")
for name,m,sd,printed in [("Mn-Mx",0.69,0.90,.003),("LFH",0.41,0.43,.009),("FH-Mn",0.32,0.49,.007)]:
    for n in [20,26,27]:
        t=m/(sd/math.sqrt(n)); p=2*stats.t.sf(t,n-1)
        print(f"{name} n={n}: t={t:.2f} P={p:.4f} (printed {printed})")

print("\n=== 6. Table 1 one-way ANOVA recomputed ===")
rows={"Age":((15.82,2.12),(16.00,2.17),(17.35,2.92),.067),
      "SNA":((83.88,3.78),(84.04,3.95),(81.29,3.31),.062),
      "SNB":((78.73,3.91),(79.61,3.49),(77.24,3.83),.093),
      "ANB":((5.14,2.16),(4.43,2.02),(4.00,1.61),.128),
      "Mn-Mx":((24.55,5.11),(26.16,6.26),(22.89,5.89),.145),
      "L.C.I Tip":((88.01,6.49),(89.95,7.44),(86.13,6.08),.146),
      "L5Tip":((102.12,5.17),(102.22,5.27),(106.31,4.67),.701),
      "L6Tip":((94.51,6.26),(96.29,7.01),(98.51,4.50),.094),
      "L7Tip":((88.75,7.50),(91.06,7.51),(93.54,6.31),.079),
      "Overbite":((5.51,0.640),(5.33,0.57),(5.13,0.38),.068),
      "Crowding":((1.25,0.625),(1.58,0.523),(1.81,0.761),.095)}
def anova(groups,ns):
    N=sum(ns); gm=sum(m*n for (m,s),n in zip(groups,ns))/N
    ssb=sum(n*(m-gm)**2 for (m,s),n in zip(groups,ns)); msb=ssb/2
    sse=sum((n-1)*s**2 for (m,s),n in zip(groups,ns)); mse=sse/(N-3)
    F=msb/mse; return F, stats.f.sf(F,2,N-3)
for k,(g1,g2,g3,pp) in rows.items():
    F1,p1=anova((g1,g2,g3),(27,27,27)); F2,p2=anova((g1,g2,g3),(29,31,20))
    print(f"{k:10s} printed P={pp:.3f}  n=27x3: F={F1:.2f} P={p1:.3f}   n=29/31/20: F={F2:.2f} P={p2:.3f}")
obs=np.array([[10,17],[12,15],[9,18]]); chi2,p,_,_=stats.chi2_contingency(obs,correction=False)
print(f"Gender chi2={chi2:.2f} P={p:.3f} (printed .11); totals M={obs[:,0].sum()} F={obs[:,1].sum()}")

print("\n=== 7. Group II within-group t (Table 3/4) ===")
for name,m,sd in [("LI-CA",3.46,3.89),("LI V",-1.02,0.53),("LI H",0.61,0.44)]:
    for n in [20,27,31]:
        t=abs(m)/(sd/math.sqrt(n)); print(f"{name} n={n}: t={t:.2f} P={2*stats.t.sf(t,n-1):.4f}")

print("\n=== 8. G*Power one-way ANOVA k=3 f=0.25 ===")
from scipy.stats import ncf
def power(N,f,k=3,alpha=.05):
    lam=f**2*N; crit=stats.f.isf(alpha,k-1,N-k); return ncf.sf(crit,k-1,N-k,lam)
for N in [75,159,207]:
    print(f"N={N}: power={power(N,0.25):.3f}")
for f in [0.40,0.42,0.45]:
    print(f"N=75 f={f}: power={power(75,f):.3f}")

print("\n=== 9. Cohen d duration ===")
def d(m1,s1,n1,m2,s2,n2):
    sp=math.sqrt(((n1-1)*s1**2+(n2-1)*s2**2)/(n1+n2-2)); return abs(m1-m2)/sp
for sd1 in [10.52,20.5]:
    print(f"SD_I={sd1}: I-II d={d(55.72,sd1,29,44.42,10.88,31):.2f}  I-III d={d(55.72,sd1,29,94.40,7.08,20):.2f}  II-III d={d(44.42,10.88,31,94.40,7.08,20):.2f}")

print("\n=== 10. Incisor geometry: vertical shift of tip vs Point I from pure rotation ===")
L=14.0
for alpha in [88,68]:
    for theta in [7.46,1.55]:
        dv=L*(math.sin(math.radians(alpha+theta))-math.sin(math.radians(alpha)))
        dh=L*(math.cos(math.radians(alpha))-math.cos(math.radians(alpha+theta)))
        print(f"axis {alpha} deg from horizontal, rotate {theta} deg about Point I (14 mm): tip dV={dv:+.2f} mm, dH={dh:+.2f} mm")
