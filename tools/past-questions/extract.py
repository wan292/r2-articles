"""Extract the promotion-exam material into text files (+ page images) for the question-bank workflow.

Usage: python -I extract.py <promotion-dir> <out-dir>
- PDFs: text per page (ligature fixes: '%' before a lowercase letter = 'ti', '\\' before a lowercase letter = 'ft'),
  page PNGs at 100 dpi for every page.
- .docx: paragraph text.
- .pages (iWork 2013+): text strings pulled from the snappy-compressed Index/Document.iwa.
Duplicate files (same SHA-1) are written once.
"""
import hashlib, json, pathlib, re, sys, zipfile
import fitz, docx

src, out = map(pathlib.Path, sys.argv[1:3])
out.mkdir(parents=True, exist_ok=True)


def snappy_raw(data):
    """Decompress one raw snappy block (no framing)."""
    i, n, shift = 0, 0, 0
    while True:
        b = data[i]; i += 1; n |= (b & 0x7F) << shift; shift += 7
        if not b & 0x80: break
    o = bytearray()
    while i < len(data):
        tag = data[i]; i += 1; t = tag & 3
        if t == 0:
            ln = tag >> 2
            if ln >= 60:
                nb = ln - 59; ln = int.from_bytes(data[i:i + nb], 'little'); i += nb
            ln += 1; o += data[i:i + ln]; i += ln; continue
        if t == 1:
            ln = ((tag >> 2) & 7) + 4; off = ((tag >> 5) << 8) | data[i]; i += 1
        elif t == 2:
            ln = (tag >> 2) + 1; off = int.from_bytes(data[i:i + 2], 'little'); i += 2
        else:
            ln = (tag >> 2) + 1; off = int.from_bytes(data[i:i + 4], 'little'); i += 4
        for _ in range(ln): o.append(o[-off])
    return bytes(o)


def iwa_text(blob):
    """iWork .iwa = chunks of [0x00][3-byte LE length][snappy block]; return readable strings."""
    i, raw = 0, bytearray()
    while i + 4 <= len(blob):
        ln = int.from_bytes(blob[i + 1:i + 4], 'little'); raw += snappy_raw(blob[i + 4:i + 4 + ln]); i += 4 + ln
    txt = raw.decode('utf-8', 'ignore')
    runs = re.findall(r"[^\x00-\x08\x0b-\x1f\x7f-\x9f�]{12,}", txt)
    return '\n'.join(r.strip() for r in runs if sum(c.isalpha() for c in r) > 8)


def fix(t):
    t = re.sub(r"%(?=[a-z])", "ti", t)
    return re.sub(r"\\(?=[a-z])", "ft", t)


seen, index = {}, []
for f in sorted(src.rglob('*')):
    if not f.is_file(): continue
    h = hashlib.sha1(f.read_bytes()).hexdigest()
    rel = str(f.relative_to(src))
    if h in seen:
        index.append({'file': rel, 'duplicate_of': seen[h]}); continue
    key = re.sub(r"[^A-Za-z0-9]+", "_", f.stem).strip('_') or 'file'
    key = f"{len(seen) + 1:02d}_{key}"[:60]
    seen[h] = key
    entry = {'file': rel, 'key': key, 'kind': f.suffix.lower()}
    if f.suffix.lower() == '.pdf':
        d = fitz.open(f); pages = []
        (out / key).mkdir(exist_ok=True)
        for i, p in enumerate(d):
            pages.append(f"=== PAGE {i + 1} ({len(p.get_images())} images) ===\n" + fix(p.get_text()))
            p.get_pixmap(dpi=100).save(out / key / f"page{i + 1:02d}.png")
        (out / f"{key}.txt").write_text('\n'.join(pages), encoding='utf-8'); entry['pages'] = len(d)
    elif f.suffix.lower() == '.docx':
        t = '\n'.join(p.text for p in docx.Document(f).paragraphs)
        (out / f"{key}.txt").write_text(t, encoding='utf-8')
    elif f.suffix.lower() == '.pages':
        z = zipfile.ZipFile(f)
        t = iwa_text(z.read('Index/Document.iwa'))
        (out / f"{key}.txt").write_text(t, encoding='utf-8')
        z.extract('preview.jpg', out / key) if 'preview.jpg' in z.namelist() else None
    entry['chars'] = (out / f"{key}.txt").stat().st_size if (out / f"{key}.txt").exists() else 0
    index.append(entry)
(out / 'index.json').write_text(json.dumps(index, ensure_ascii=False, indent=1), encoding='utf-8')
for e in index: print(e)
