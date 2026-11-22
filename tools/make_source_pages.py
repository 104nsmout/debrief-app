"""Build the highlighted source-page images for the Learn tab.

    python tools/make_source_pages.py

Reads app/lessons.js. Checks every cited source id exists, then for every
source card it:
  1. opens the cited page of the FAA PDF in sources/ (git-ignored),
  2. checks the printed page number and that every quote is on that page
     word for word (only the first letter's case may differ); any miss
     stops the build, so a misquote can't ship,
  3. highlights the quotes (and any extra "hl" phrases) and saves the page
     as a JPEG in app/pages/, named by a hash of its content; cards in one
     topic that cite the same page share one image,
  4. writes the image name ("img") and where the highlights sit ("x", "y",
     "w": fractions of the page) back into app/lessons.js.
Images no longer referenced are deleted.

Needs PyMuPDF (pip install pymupdf). Runs on this computer only.
"""
import hashlib
import json
import pathlib
import re
import sys

import pymupdf

ROOT = pathlib.Path(__file__).resolve().parent.parent
LESSONS = ROOT / "app" / "lessons.js"
PAGES = ROOT / "app" / "pages"
SOURCES = ROOT / "sources"
ZOOM = 1.6          # ~950px wide: sharp on a phone, ~175 KB a page
JPEG_QUALITY = 62
YELLOW = (1.0, 0.86, 0.0)


def norm(s):
    """Collapse whitespace, join words hyphenated across lines, unify quotes."""
    s = s.replace("−", "-").replace("–", "-")
    s = s.replace("’", "'").replace("‘", "'").replace("“", '"').replace("”", '"')
    s = re.sub(r"([-/])\s*\n\s*", r"\1", s)
    return re.sub(r"\s+", " ", s).strip()


def load():
    text = LESSONS.read_text(encoding="utf-8")
    head, _, body = text.partition("window.LEARN = ")
    return head, json.loads(body.strip().rstrip(";"))


def main():
    head, data = load()
    books = data["books"]
    PAGES.mkdir(exist_ok=True)
    docs, used, errors = {}, set(), []

    for code, lesson in data["lessons"].items():
        cited = {i for part in ("quick", "mistakes", "scenarios") for item in lesson.get(part, []) for i in item.get("s", [])}
        cited |= set(lesson.get("acs", []))
        for missing in sorted(cited - set(lesson["src"])):
            errors.append(f"{code}: cites source {missing!r}, which isn't defined")
        # one picture per book page per topic, with every quote this topic
        # takes from that page highlighted; each card still remembers where
        # its own quote sits, so the viewer opens on it
        groups = {}
        for sid, card in lesson["src"].items():
            groups.setdefault((card["b"], card["pdf"]), []).append((sid, card))
        for (b, pdf), cards in groups.items():
            if b not in docs:
                docs[b] = pymupdf.open(SOURCES / books[b]["file"])
            page = docs[b][pdf - 1]
            flat = norm(page.get_text())
            all_quads, placed = [], []
            for sid, card in cards:
                where = f"{code} {sid} {b} p.{card['p']}"
                if not re.search(r"(^|\s)" + re.escape(card["p"]) + r"(\s|$)", flat):
                    errors.append(f"{where}: printed page number {card['p']} not found on PDF page {pdf}")
                for q in card["q"]:
                    nq = norm(q)
                    if nq not in flat and (nq[0].swapcase() + nq[1:]) not in flat:
                        errors.append(f"{where}: quote not on page word for word: {q!r}")
                rects = []
                for phrase in card["q"] + card.get("hl", []):
                    quads = page.search_for(phrase, quads=True)
                    if not quads and "/" in phrase:
                        # a line break right after "/" defeats the search: place each side separately
                        parts = re.split(r"(?<=/)", phrase)
                        found = [page.search_for(x, quads=True) for x in parts]
                        quads = sum(found, []) if all(found) else []
                    if not quads:
                        errors.append(f"{where}: could not place highlight for {phrase!r}")
                        continue
                    all_quads.append(quads)
                    rects += [q.rect for q in quads]
                if rects:
                    placed.append((card, rects))
            if not placed:
                continue
            for quads in all_quads:
                page.add_highlight_annot(quads).set_colors(stroke=YELLOW)
            pix = page.get_pixmap(matrix=pymupdf.Matrix(ZOOM, ZOOM), annots=True)
            for a in list(page.annots()):
                page.delete_annot(a)
            jpg = pix.tobytes(output="jpeg", jpg_quality=JPEG_QUALITY)
            name = f"{b}-{pdf}-{hashlib.sha256(jpg).hexdigest()[:10]}.jpg"
            (PAGES / name).write_bytes(jpg)
            used.add(name)
            W, H = page.rect.width, page.rect.height
            for card, rects in placed:
                card["img"] = "pages/" + name
                # where this card's highlights sit, as fractions of the page,
                # so the viewer can open zoomed in on them
                x0, x1 = min(r.x0 for r in rects), max(r.x1 for r in rects)
                card["y"] = round(min(r.y0 for r in rects) / H, 3)
                card["x"] = round(x0 / W, 3)
                card["w"] = round((x1 - x0) / W, 3)

    if errors:
        print("Stopped. app/lessons.js was not changed:\n  " + "\n  ".join(errors))
        sys.exit(1)

    for f in PAGES.glob("*.jpg"):
        if f.name not in used:
            f.unlink()
    LESSONS.write_text(head + "window.LEARN = " + json.dumps(data, indent=1, ensure_ascii=False) + ";\n",
                       encoding="utf-8")
    total = sum((PAGES / n).stat().st_size for n in used)
    print(f"OK: {len(used)} page images, {total / 1024:.0f} KB total, every quote verified.")


if __name__ == "__main__":
    main()
