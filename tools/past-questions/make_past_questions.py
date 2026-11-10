"""Build the previous-year question bank pages from the promotion-question-bank workflow result.

Usage (from the repo root): PROMO_SCRATCH=<dir with lit/catalog.json> python -I tools/past-questions/make_past_questions.py <workflow-output.json>
The workflow output comes from the promotion-question-bank workflow (extract -> triage -> verify per topic -> Proffit/other mapping).
Writes registry/past-questions.json, topics/<slug>/past-questions.md, articles/<slug>/past-questions.md,
topics/exam-bank/past-questions.md, and adds 'past-questions' to the docs lists in data/topics.js and data/articles.js.
"""
import json, os, re, sys, pathlib
from collections import defaultdict, OrderedDict
sys.stdout.reconfigure(encoding='utf-8')
SCR = pathlib.Path(os.environ.get('PROMO_SCRATCH', 'promo-scratch'))  # holds lit/catalog.json from the paper-text dump

raw = json.load(open(sys.argv[1], encoding='utf-8'))
if 'label_results' in raw:  # partial journal dump
    res = raw['label_results']
    qs = [q for k, v in res.items() if k.startswith('extract:') and v for q in v['questions']]
    tri = {u['id']: u for k, v in res.items() if k.startswith('triage:') and v for u in v['updates']}
    for q in qs:
        u = tri.get(q.get('id'))
        if u: q.update(topic_n=u['topic_n'], paper_key=u['paper_key'], domain=u['domain'], proffit_chapter=u['proffit_chapter'], link_why=u['why'])
    ver = [x for k, v in res.items() if k.startswith('verify:') and v for x in v['verified']]
    pro = [x for k, v in res.items() if k.startswith('proffit:') and v for x in v['mapped']]
else:
    r = raw.get('result', raw)
    qs, ver, pro = r['questions'], r['verified'], r['proffit']

SRC = {'21': ('Last year (Khalid\'s recall)', 2025), '22': ('R2 exam 2019', 2019), '23': ('Promotion 2021', 2021), '24': ('Promotion 2021', 2021),
       '25': ('Promotion 2022', 2022), '26': ('Promotion 2023', 2023), '27': ('Promotion 2024', 2024), '13': ('R2 end-of-year exam', 0),
       '14': ('Growth MCQ list', 0), '15': ('Growth + biomechanics list', 0), '05': ('Growth summary', 0), '01': ('Growth summary', 0)}
def src_label(q):
    k = re.match(r'\d+', q['src']).group() if re.match(r'\d+', q['src']) else ''
    return SRC.get(k, (q['src'], 0))

cat = {c['key']: c for c in json.load(open(SCR / 'lit' / 'catalog.json', encoding='utf-8'))}
ARTICLE = {  # catalog key prefix -> (slug, short)
    't01_1_An_investigation': ('1994-doppel-maxillary-superimposition-implants', 'Doppel 1994'),
    't01_1_Superimposition_2': ('1994-doppel-maxillary-superimposition-implants', 'Doppel 1994'),
    't01_2_Maxillary_superimposition': ('1989-nielsen-maxillary-superimposition-three-methods', 'Nielsen 1989'),
    't01_3_Three_dimensional': ('2018-nguyen-3d-mandibular-regional-superimposition', 'Nguyen 2018'),
    't05_1_Surgical': ('2004-kokich-impacted-maxillary-canines', 'Kokich 2004'),
    't05_2_Congenitally': ('2006-kokich-missing-mandibular-second-premolars', 'Kokich & Kokich 2006'),
    't05_3_Serial': ('2020-yezdani-serial-extraction-review', 'Yezdani 2020'),
    't05_4_kouvelis': ('2018-kouvelis-extraction-vertical-dimension', 'Kouvelis 2018'),
    't05_5_Long_term': ('2005-stephens-long-term-profile-extraction-nonextraction', 'Stephens 2005'),
}
def article_for(key):
    for p, v in ARTICLE.items():
        if key and key.startswith(p): return v
    return None
def paper_title(key):
    c = cat.get(key)
    if not c: return key or 'Topic-level'
    t = re.sub(r'^\s*\d+\s*[-.]\s*', '', c['file']).rsplit('.pdf', 1)[0].strip()
    return t[:1].upper() + t[1:]

topics_js = open('data/topics.js', encoding='utf-8').read()
TOPIC = {int(m.group(1)): (m.group(2), m.group(3)) for m in re.finditer(r'n: (\d+),\s*slug: "([^"]+)",\s*name: "([^"]+)"', topics_js)}

vmap = {v['id']: v for v in ver}
qmap = {q['id']: q for q in qs}
for q in qs:
    v = vmap.get(q['id'])
    if v:
        q['verified'] = v
        if v['link'] == 'not-this-topic':
            q['topic_n'] = v.get('topic_n'); q['paper_key'] = v.get('paper_key') if v.get('topic_n') else None
        elif v.get('paper_key'): q['paper_key'] = v['paper_key']
pmap = {p['id']: p for p in pro}
for q in qs:
    if q['id'] in pmap: q['area'] = pmap[q['id']]

def norm(s): return set(re.findall(r'[a-z0-9]{3,}', s.lower()))
def group(items):
    """Merge near-duplicate stems (same question recalled in different years)."""
    groups = []
    for q in items:
        w = norm(q['stem'])
        for g in groups:
            gw = norm(g[0]['stem'])
            if w and gw and len(w & gw) / len(w | gw) >= 0.6: g.append(q); break
        else: groups.append([q])
    return groups

def years(g):
    labs = OrderedDict()
    for q in sorted(g, key=lambda q: src_label(q)[1] or 9999): labs[src_label(q)[0]] = 1
    return ' · '.join(labs)

def esc(s): return (s or '').replace('|', '/').strip()

def render_q(n, g):
    q = max(g, key=lambda q: (len(q.get('options') or []), len(q['stem'])))
    v = q.get('verified') or next((x.get('verified') for x in g if x.get('verified')), None)
    L = [f"### Q{n} · {years(g)}", "", f"> {esc(q['stem'])}"]
    opts = [o for o in (q.get('options') or []) if o.strip()]
    if opts: L += [">"] + [f"> - {esc(o)}" for o in opts]
    L.append("")
    rec = '; '.join(OrderedDict.fromkeys(x['recalled_answer'].strip() for x in g if x.get('recalled_answer')))
    if v:
        mark = {True: '✅ matches', False: '⚠️ **differs from the paper**', None: ''}[v.get('recalled_matches')]
        if rec: L.append(f"- **Recalled answer:** {esc(rec)} {('· ' + mark) if mark else ''}".rstrip())
        L.append(f"- **Per the paper:** {esc(v['answer'])} ({esc(v['where'])})")
        L.append(f"- {esc(v['explanation'])}")
    else:
        if rec: L.append(f"- **Recalled answer:** {esc(rec)}")
        a = q.get('area')
        if a and a.get('answer'): L.append(f"- **Best answer:** {esc(a['answer'])} ({a['basis']}){(' · ' + esc(a['note'])) if a.get('note') else ''}")
    tag = next((x['source_tag'] for x in g if x.get('source_tag')), None)
    if tag: L.append(f"- *Source tag in the recall:* {esc(tag)}")
    return L + [""]

HDR = ("Previous years' promotion questions as residents recalled them (R2 exam 2019; promotion 2021–2024; last year's recall; the R2 end-of-year exam), "
       "linked to this paper and checked against it. The recalled answers are memory, not an answer key: where the paper disagrees, the line is marked ⚠️ and the paper wins.")

written = {'topics': [], 'articles': []}
by_topic = defaultdict(list)
for q in qs:
    if q.get('topic_n'): by_topic[q['topic_n']].append(q)
for n, items in sorted(by_topic.items()):
    if n not in TOPIC: continue
    slug, name = TOPIC[n]
    by_paper = defaultdict(list)
    for q in items: by_paper[q.get('paper_key') if (q.get('verified') or {}).get('link') != 'related' else None].append(q)
    groups_total = sum(len(group(v)) for v in by_paper.values())
    L = [f"# Past exam questions · Topic {n}: {name}", "", HDR.replace('linked to this paper and checked against it', "linked to this topic's papers and checked against them"), "",
         f"**{groups_total} questions** ({len(items)} recalls, repeats merged) · ⚠️ = the recalled answer differs from the paper.", ""]
    ch = {}
    for q in items:
        m = re.search(r'Ch(?:apter)?\.?\s*(\d+)\s*([^;(]*)', q.get('proffit_chapter') or '')
        if m: ch.setdefault(int(m.group(1)), m.group(2).strip(' .,-'))
    if ch: L += ["**Proffit chapters these questions also touch:** " + '; '.join(f"Ch {k} {v}".strip() for k, v in sorted(ch.items())), ""]
    k = 0
    for pk in sorted(by_paper, key=lambda x: (x is None, x or '')):
        art = article_for(pk)
        head = f"{paper_title(pk)}" if pk else "Topic-level questions (no single paper states the answer)"
        L += [f"## {head}" + (f" · [{art[1]}](#read/{art[0]}/past-questions)" if art else ''), ""]
        for g in group(by_paper[pk]):
            k += 1; L += render_q(k, g)
    p = pathlib.Path('topics') / slug / 'past-questions.md'; p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text('\n'.join(L), encoding='utf-8'); written['topics'].append((n, slug, groups_total))

by_article = defaultdict(list)
for q in qs:
    a = article_for(q.get('paper_key'))
    if a and (q.get('verified') or {}).get('link') == 'direct': by_article[a].append(q)
for (slug, short) in {v for v in ARTICLE.values()}:
    items = by_article.get((slug, short), [])
    groups = group(items)
    L = [f"# Past exam questions · {short}", "", HDR, ""]
    if groups:
        L += [f"**{len(groups)} questions** ({len(items)} recalls) linked directly to this paper · ⚠️ = the recalled answer differs from the paper.", ""]
        for i, g in enumerate(groups, 1): L += render_q(i, g)
    else:
        L += ["No previous-year question links directly to this paper. The topic's other past questions are on the topic page (Library → topic card → Past exam questions).", ""]
    (pathlib.Path('articles') / slug / 'past-questions.md').write_text('\n'.join(L), encoding='utf-8'); written['articles'].append((slug, len(groups)))

rest = [q for q in qs if not q.get('topic_n')]
P7 = {1: 'Malocclusion and Dentofacial Abnormalities in Contemporary Society', 2: 'Concepts of Growth and Development', 3: 'Early Stages of Development',
      4: 'Later Stages of Development', 5: 'The Etiology of Orthodontic Problems', 6: 'Orthodontic Diagnosis: The Problem-Oriented Approach',
      7: 'Orthodontic Treatment Planning: From Problem List to Specific Plan', 8: 'The Biologic Basis of Orthodontic Therapy',
      9: 'Mechanical Principles in Orthodontic Force Control', 10: 'Contemporary Orthodontic Appliances',
      11: 'Moderate Nonskeletal Problems in Preadolescent Children', 12: 'Complex Nonskeletal Problems in Preadolescent Children',
      13: 'Treatment of Skeletal Transverse and Class III Problems', 14: 'Growth Modification in Class II, Open Bite/Deep Bite, and Multidimensional Problems',
      15: 'Comprehensive Treatment in Adolescents: Alignment and Vertical Problems', 16: 'Comprehensive Treatment in Adolescence: Space Closure and Class II / Class III',
      17: 'Comprehensive Treatment: Finishing', 18: 'Clear Aligners in Adolescents', 19: 'Retention', 20: 'Special Considerations in Treatment for Adults',
      21: 'Clear Aligners in Adults', 22: 'Combined Surgical and Orthodontic Treatment'}
def proffit7(a):
    """Map an area string (6th- or 7th-edition numbering) to a 7th-edition chapter by title keywords; chapters 1-12 match in both."""
    s = a.lower()
    m = re.search(r'proffit[^;]*?(?<![a-z])ch(?:apter)?\.?\s*(\d+)', s)
    if not m: return None
    s = s[s.index('proffit'):]
    n = int(m.group(1))
    if n <= 12: return n
    rules = [('clear aligners in adults', 21), ('aligner', 18), ('surg', 22), ('orthognathic', 22), ('distraction', 22), ('adult', 20),
             ('retention', 19), ('finishing', 17), ('third stage', 17), ('space closure', 16), ('second stage', 16), ('molar relationship', 16),
             ('alignment', 15), ('leveling', 15), ('levelling', 15), ('first stage', 15), ('growth modification', 14), ('class ii', 14), ('headgear', 14),
             ('functional', 14), ('transverse', 13), ('rpe', 13), ('expansion', 13), ('class iii', 13)]
    for k, ch in rules:
        if k in s: return ch
    return None
OTHER = [('TMD and the TMJ', ('tmd', 'tmj', 'okeson', 'temporomandibular', 'disc ', 'condyl')),
         ('Occlusion course', ('occlusion course', 'turner', 'andrews', 'centric', 'articulat', 'curve of', 'occlusal scheme', 'guidance')),
         ('Communication and behaviour course', ('communicat', 'behaviour', 'behavior', 'parenting', 'stage of change', 'dentist type', 'motivat')),
         ('Growth papers and concepts', ('growth', 'enlow', 'bjork', 'björk', 'thilander', 'ranly', 'behrents', 'moss', 'craniofacial', 'synchondros', 'suture')),
         ('Research and biostatistics', ('biostat', 'research', 'statistic', 'study design', 'sensitivity', 'evidence')),
         ('Orthognathic surgery texts', ('arnett', 'orthognathic', 'surgery', 'surgical', 'stca')),
         ('Biomechanics and materials', ('material', 'niti', 'wire', 'bracket', 'bond', 'biomech', 'friction', 'alloy', 'adhesive', 'elastic')),
         ('Clefts, syndromes and anomalies', ('cleft', 'syndrome', 'anomal')),
         ('Medically compromised patients', ('medically compromised', 'endocarditis', 'bacteraemia', 'leukaemia', 'diabetes', 'epilepsy', 'sickle', 'transplant')),
         ('Radiology, pathology and head-and-neck anatomy', ('radiolog', 'patholog', 'anatomy', 'embryolog', 'cbct', 'panoramic', 'sialograph', 'fracture', 'haemorrhage', 'tumour')),
         ('Other orthodontic literature', ('literature', 'study', 'rct', 'systematic', 'white-spot', 'pain', 'corticotomy', 'aligner', 'suresmile', 'accelerated'))]
def bucket(q):
    a = (q.get('area') or {}).get('area') or q.get('proffit_chapter') or q['domain']
    n = proffit7(a) or proffit7(q.get('proffit_chapter') and 'Proffit ' + q['proffit_chapter'] or '')
    if n: return (0, n, f"Proffit Ch {n} · {P7[n]}"), a
    s = (a + ' ' + q['domain']).lower()
    for i, (label, keys) in enumerate(OTHER):
        if any(k in s for k in keys): return (1, i, label), a
    return (2, 0, 'Other'), a
by_area = defaultdict(list)
for q in rest:
    b, a = bucket(q); q['_area'] = a; by_area[b].append(q)
total = sum(len(group(v)) for v in by_area.values())
L = ["# Past exam questions · Proffit and other sources", "",
     "Previous years' promotion questions that do not come from this year's literature-review papers, grouped by Proffit chapter (7th edition numbering, as in the [Proffit study pages](https://wan292.github.io/proffit-study-pages/)) and then by other source. "
     "Answers marked VERIFIED were checked in a source this run (the Proffit study pages, a paper or a web source); UNVERIFIED answers are the best available reading. Recalled answers are residents' memory.", "",
     f"**{total} questions** ({len(rest)} recalls, repeats merged).", ""]
k = 0
for b in sorted(by_area):
    head = b[2] + (f" · [study page](https://wan292.github.io/proffit-study-pages/ch{b[1]}.html)" if b[0] == 0 else '')
    L += [f"## {head}", ""]
    for g in group(by_area[b]):
        k += 1
        block = render_q(k, g)
        areas = '; '.join(OrderedDict.fromkeys(x['_area'] for x in g if x.get('_area')))
        if areas: block.insert(-1, f"- *Area:* {esc(areas)}")
        L += block
p = pathlib.Path('topics/exam-bank/past-questions.md'); p.parent.mkdir(parents=True, exist_ok=True); p.write_text('\n'.join(L), encoding='utf-8')
print('exam-bank sections:', [(b[2][:40], len(v)) for b, v in sorted(by_area.items())])

bank = [{k: q.get(k) for k in ('id', 'src', 'page', 'num', 'stem', 'options', 'recalled_answer', 'source_tag', 'kind', 'domain', 'topic_n', 'paper_key', 'proffit_chapter')}
        | {'source': src_label(q)[0], 'year': src_label(q)[1] or None,
           'verified': q.get('verified'), 'area': q.get('area')} for q in qs]
pathlib.Path('registry/past-questions.json').write_text(json.dumps(bank, ensure_ascii=False, indent=1), encoding='utf-8')

# manifests
t = open('data/topics.js', encoding='utf-8').read()
for n, slug, cnt in written['topics']:
    m = re.search(r'(slug: "' + re.escape(slug) + r'".*?docs: \[)([^\]]*)(\])', t, re.S)
    if m and 'past-questions' not in m.group(2):
        inner = m.group(2).strip()
        t = t[:m.start(2)] + (inner + ', ' if inner else '') + '"past-questions"' + t[m.end(2):]
if 'slug: "exam-bank"' not in t:
    i = t.rstrip().rfind('];')
    t = t[:i] + '  { n: 20, label: "Exam bank", slug: "exam-bank", name: "Previous-year questions: Proffit and other sources", folder: null, articles: [], docs: ["past-questions"], pdfs: [], deck: null, presenter: null, date: null, note: "Recalled promotion questions (2019–2024, last year, R2 end-of-year exam) that do not come from this year\'s papers, grouped by Proffit chapter and other sources (TMD and occlusion, communication, growth papers, biomechanics and materials)." },\n' + t[i:]
open('data/topics.js', 'w', encoding='utf-8').write(t)
t = open('data/articles.js', encoding='utf-8').read()
for slug, cnt in written['articles']:
    m = re.search(r'(slug: "' + re.escape(slug) + r'".*?docs: \[)([^\]]*)(\])', t, re.S)
    if m and 'past-questions' not in m.group(2):
        t = t[:m.end(2)] + ', "past-questions"' + t[m.end(2):]
open('data/articles.js', 'w', encoding='utf-8').write(t)
print('topics', written['topics']); print('articles', written['articles']); print('exam bank', total, 'groups from', len(rest), 'recalls'); print('bank', len(bank))
