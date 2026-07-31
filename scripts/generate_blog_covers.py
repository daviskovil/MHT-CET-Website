"""
Generates blog cover images for MHTCET Simu.

Style: soft brand-gradient background, a browser-chrome mockup card on the
left whose content changes per post (question palette, ranked bar chart,
exam-vs-exam split panel, numbered walkthrough steps, or a highlighted past
paper), and a bold two-tone headline on the right with a small logo lockup.
Each post picks a "variant" so the five covers read as a family, not five
copies of the same image, and each variant leans on the brand's turquoise
(#40E0D0) as a genuine second colour rather than a token accent.

Usage:
    python scripts/generate_blog_covers.py     # generates every entry in POSTS below

Output: 1600x900 PNGs written to public/images/blog/<slug>.png
Each image is wide/short (16:9) and gets object-cover cropped by the site's
CSS for both the 16:9 blog-card thumbnail and the 21:9 article hero, so one
render serves both placements.
"""

import os

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FONTS_DIR = "C:/Windows/Fonts"
OUT_DIR = os.path.join(ROOT, "public", "images", "blog")
LOGO_PATH = os.path.join(ROOT, "public", "logo-icon.png")

# Brand tokens (app/globals.css)
INK = (15, 23, 42)
MUTED = (100, 116, 139)
PRIMARY = (245, 130, 32)
PRIMARY_DARK = (217, 109, 14)
TEAL = (64, 224, 208)
TEAL_LIGHT = (140, 236, 226)
TEAL_DARK = (38, 134, 124)
LAVENDER = (227, 250, 246)
CREAM = (255, 248, 231)
PEACH = (255, 231, 209)
WHITE = (255, 255, 255)

CANVAS_W, CANVAS_H = 1600, 900
MOCKUP_BOX = [100, 170, 760, 730]

POSTS = [
    {
        "slug": "mht-cet-chapter-weightage-2026",
        "title": "MHT CET 2026 Complete Chapter Weightage for Physics, Chemistry & Maths",
        "highlight": "Chapter Weightage",
        "category": "Strategy",
        "variant": "palette",
    },
    {
        "slug": "how-mhtcet-simu-works",
        "title": "How MHTCET Simu Works: A Complete Walkthrough",
        "highlight": "MHTCET Simu",
        "category": "Strategy",
        "variant": "steps",
    },
    {
        "slug": "how-to-use-pyqs-for-mht-cet",
        "title": "How to Use PYQs Effectively for MHT CET Preparation",
        "highlight": "PYQs Effectively",
        "category": "Strategy",
        "variant": "paper",
    },
    {
        "slug": "mht-cet-vs-jee-mains",
        "title": "MHT CET vs JEE Mains: Key Differences Every Student Should Know",
        "highlight": "MHT CET vs JEE",
        "category": "Strategy",
        "variant": "vs",
    },
    {
        "slug": "top-chemistry-chapters-mht-cet",
        "title": "Top 10 High-Weightage Chapters in MHT CET Chemistry",
        "highlight": "High-Weightage Chapters",
        "category": "Chemistry",
        "variant": "chart",
    },
]


def font(name: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(os.path.join(FONTS_DIR, name), size)


def soft_blob(canvas: Image.Image, center, radius, color, alpha=90):
    """Paints one soft, blurred color wash used to build the mesh-gradient background."""
    layer = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    x, y = center
    draw.ellipse([x - radius, y - radius, x + radius, y + radius], fill=(*color, alpha))
    layer = layer.filter(ImageFilter.GaussianBlur(radius // 2))
    canvas.alpha_composite(layer)


def rounded_rect(draw: ImageDraw.ImageDraw, box, radius, **kwargs):
    draw.rounded_rectangle(box, radius=radius, **kwargs)


def draw_background(lead_color=PRIMARY) -> Image.Image:
    """Mesh-gradient wash. `lead_color` is whichever brand colour should read
    strongest for this particular cover, so the five images don't all lean
    orange by default."""
    canvas = Image.new("RGBA", (CANVAS_W, CANVAS_H), (248, 249, 250, 255))
    soft_blob(canvas, (280, 200), 420, lead_color, alpha=45)
    soft_blob(canvas, (1360, 150), 380, TEAL, alpha=65)
    soft_blob(canvas, (1500, 820), 340, TEAL, alpha=40)
    soft_blob(canvas, (200, 780), 300, PRIMARY, alpha=30)
    return canvas


def card_frame(canvas, draw, box, chrome_fill=LAVENDER):
    """Shared browser-chrome card scaffold: shadow, white body, dot bar.
    Returns the y-coordinate where inner content should start."""
    x0, y0, x1, y1 = box
    card_w, card_h = x1 - x0, y1 - y0

    shadow = Image.new("RGBA", (card_w + 60, card_h + 60), (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow)
    rounded_rect(sd, [30, 40, card_w + 30, card_h + 40], radius=28, fill=(15, 23, 42, 55))
    shadow = shadow.filter(ImageFilter.GaussianBlur(24))
    canvas.alpha_composite(shadow, (int(x0 - 30), int(y0 - 20)))

    rounded_rect(draw, box, radius=28, fill=WHITE, outline=(15, 23, 42, 20), width=2)

    bar_h = 46
    rounded_rect(draw, [x0, y0, x1, y0 + bar_h + 28], radius=28, fill=chrome_fill)
    draw.rectangle([x0, y0 + bar_h, x1, y0 + bar_h + 28], fill=chrome_fill)
    dot_y = y0 + bar_h / 2
    for i, color in enumerate([PRIMARY, TEAL, (200, 205, 215)]):
        cx = x0 + 30 + i * 26
        r = 7
        draw.ellipse([cx - r, dot_y - r, cx + r, dot_y + r], fill=color)

    return y0 + bar_h + 28 + 24


def stat_pill(draw, box, text="16,000+", fill=CREAM, text_color=PRIMARY_DARK):
    x1, y1 = box[2] - 24, box[3] - 24
    pill_w, pill_h = 150, 44
    x0, y0 = x1 - pill_w, y1 - pill_h
    rounded_rect(draw, [x0, y0, x1, y1], radius=22, fill=fill)
    f = font("segoeuib.ttf", 20)
    tw = draw.textlength(text, font=f)
    draw.text((x0 + (pill_w - tw) / 2, y0 + 9), text, font=f, fill=text_color)


def mockup_palette(canvas, draw, box):
    """Question Palette grid, our product's signature visual. Recoloured so
    the 'not yet visited' cells read as a genuine teal tint rather than grey,
    giving the flagship cover real turquoise presence."""
    content_top = card_frame(canvas, draw, box, chrome_fill=LAVENDER)
    x0, _, x1, _ = box
    card_w = x1 - x0
    cols, rows = 8, 4
    gap = 10
    pad_x = 28
    avail_w = card_w - pad_x * 2
    cell = (avail_w - gap * (cols - 1)) / cols
    marked = {5, 13, 22}
    unvisited = {26, 27, 28, 29, 30, 31}

    idx = 0
    for r in range(rows):
        for c in range(cols):
            cx0 = x0 + pad_x + c * (cell + gap)
            cy0 = content_top + r * (cell + gap)
            if idx in marked:
                fill, outline = None, TEAL_DARK
            elif idx in unvisited:
                fill, outline = TEAL_LIGHT, None
            else:
                fill, outline = PRIMARY, None
            rounded_rect(
                draw,
                [cx0, cy0, cx0 + cell, cy0 + cell],
                radius=6,
                fill=fill,
                outline=outline,
                width=3 if outline else 0,
            )
            idx += 1

    stat_pill(draw, box)


def mockup_chart(canvas, draw, box):
    """Ranked horizontal bar chart, for the 'Top 10 chapters' post. Bars
    alternate orange/teal and shrink to read as a ranking at a glance."""
    content_top = card_frame(canvas, draw, box, chrome_fill=LAVENDER)
    x0, _, x1, y1 = box
    pad_x = 32
    max_w = (x1 - x0) - pad_x * 2 - 56
    rows = 6
    row_h = 58
    widths = [1.0, 0.86, 0.74, 0.62, 0.5, 0.4]
    for i, frac in enumerate(widths):
        cy = content_top + i * row_h
        badge_r = 16
        badge_cx = x0 + pad_x + badge_r
        badge_cy = cy + 14
        badge_color = PRIMARY if i % 2 == 0 else TEAL_DARK
        draw.ellipse(
            [badge_cx - badge_r, badge_cy - badge_r, badge_cx + badge_r, badge_cy + badge_r],
            fill=badge_color,
        )
        f = font("segoeuib.ttf", 16)
        num = str(i + 1)
        tw = draw.textlength(num, font=f)
        draw.text((badge_cx - tw / 2, badge_cy - 11), num, font=f, fill=WHITE)

        bar_x0 = badge_cx + badge_r + 16
        bar_h = 22
        bar_color = TEAL if i % 2 == 0 else PRIMARY
        rounded_rect(
            draw,
            [bar_x0, badge_cy - bar_h / 2, bar_x0 + max_w * frac, badge_cy + bar_h / 2],
            radius=11,
            fill=bar_color,
        )
    stat_pill(draw, box, text="10 Chapters", fill=LAVENDER, text_color=TEAL_DARK)


def mockup_steps(canvas, draw, box):
    """Vertical numbered walkthrough, for the 'How it works' product post."""
    content_top = card_frame(canvas, draw, box, chrome_fill=LAVENDER)
    x0, _, x1, y1 = box
    pad_x = 40
    labels = ["Choose a test mode", "Take the exam", "Get your report", "Drill and improve"]
    row_h = 96
    badge_r = 22
    line_x = x0 + pad_x + badge_r

    # connecting line
    top_y = content_top + 20
    bottom_y = top_y + (len(labels) - 1) * row_h
    draw.line([(line_x, top_y), (line_x, bottom_y)], fill=(224, 227, 233), width=4)

    f_num = font("segoeuib.ttf", 20)
    f_label = font("seguisb.ttf", 22)
    for i, label in enumerate(labels):
        cy = top_y + i * row_h
        badge_color = TEAL_DARK if i % 2 == 0 else PRIMARY
        draw.ellipse(
            [line_x - badge_r, cy - badge_r, line_x + badge_r, cy + badge_r],
            fill=badge_color,
        )
        num = str(i + 1)
        tw = draw.textlength(num, font=f_num)
        draw.text((line_x - tw / 2, cy - 13), num, font=f_num, fill=WHITE)

        text_x = line_x + badge_r + 24
        draw.text((text_x, cy - 13), label, font=f_label, fill=INK)
        bar_w = x1 - pad_x - text_x
        rounded_rect(
            draw,
            [text_x, cy + 20, text_x + bar_w * 0.4, cy + 28],
            radius=4,
            fill=TEAL_LIGHT,
        )

    stat_pill(draw, box, text="6 Test Modes", fill=CREAM, text_color=PRIMARY_DARK)


def draw_checkmark(draw, cx, cy, color, size=7, width=3):
    """Hand-drawn tick mark: some bold fonts are missing the U+2713 glyph,
    so this avoids relying on the font having a checkmark at all."""
    draw.line(
        [(cx - size, cy), (cx - size / 3, cy + size * 0.7), (cx + size, cy - size * 0.7)],
        fill=color,
        width=width,
        joint="curve",
    )


def mockup_paper(canvas, draw, box):
    """A mock past-paper card with teal highlighter marks, for the PYQ post."""
    content_top = card_frame(canvas, draw, box, chrome_fill=LAVENDER)
    x0, _, x1, y1 = box
    pad_x = 36
    line_w = (x1 - x0) - pad_x * 2
    row_h = 52
    # (width fraction, highlighted) \u2014 highlighted rows stay short enough that
    # the checkmark badge next to them always has clear room inside the card.
    rows = [
        (0.55, False),
        (0.68, True),
        (0.95, False),
        (0.4, False),
        (0.6, True),
        (0.9, False),
        (0.5, False),
        (0.78, False),
    ]

    for i, (frac, is_highlight) in enumerate(rows):
        cy = content_top + i * row_h
        if is_highlight:
            rounded_rect(
                draw,
                [x0 + pad_x - 8, cy - 4, x0 + pad_x + line_w * frac + 8, cy + 20],
                radius=8,
                fill=TEAL_LIGHT,
            )
            badge_cx = x0 + pad_x + line_w * frac + 32
            badge_cy = cy + 8
            r = 12
            draw.ellipse(
                [badge_cx - r, badge_cy - r, badge_cx + r, badge_cy + r], fill=TEAL_DARK
            )
            draw_checkmark(draw, badge_cx, badge_cy, WHITE)
        bar_color = PRIMARY if i % 4 == 0 else MUTED
        rounded_rect(
            draw,
            [x0 + pad_x, cy, x0 + pad_x + line_w * frac, cy + 16],
            radius=8,
            fill=bar_color,
        )

    stat_pill(draw, box, text="5 Years of PYQs", fill=LAVENDER, text_color=TEAL_DARK)


def mockup_vs(canvas, draw, box):
    """Split panel comparing the two exams, for the MHT CET vs JEE post."""
    x0, y0, x1, y1 = box
    card_w = x1 - x0

    shadow = Image.new("RGBA", (card_w + 60, (y1 - y0) + 60), (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow)
    rounded_rect(sd, [30, 40, card_w + 30, (y1 - y0) + 40], radius=28, fill=(15, 23, 42, 55))
    shadow = shadow.filter(ImageFilter.GaussianBlur(24))
    canvas.alpha_composite(shadow, (int(x0 - 30), int(y0 - 20)))

    gap = 16
    panel_w = (card_w - gap) / 2
    left_box = [x0, y0, x0 + panel_w, y1]
    right_box = [x0 + panel_w + gap, y0, x1, y1]

    rounded_rect(draw, left_box, radius=24, fill=PEACH, outline=PRIMARY, width=2)
    rounded_rect(draw, right_box, radius=24, fill=LAVENDER, outline=TEAL_DARK, width=2)

    f_label = font("segoeuib.ttf", 26)
    f_sub = font("seguisb.ttf", 16)
    for panel, label, color in [(left_box, "MHT CET", PRIMARY_DARK), (right_box, "JEE MAINS", TEAL_DARK)]:
        px0, py0, px1, _ = panel
        cx = (px0 + px1) / 2
        tw = draw.textlength(label, font=f_label)
        draw.text((cx - tw / 2, py0 + 60), label, font=f_label, fill=color)
        rows = ["No negative marking", "Direct, formula-led"] if color == PRIMARY_DARK else ["Negative marking", "Layered, multi-concept"]
        for i, row in enumerate(rows):
            rw = draw.textlength(row, font=f_sub)
            draw.text((cx - rw / 2, py0 + 120 + i * 30), row, font=f_sub, fill=MUTED)

    # VS badge straddling the seam
    badge_r = 46
    cx, cy = x0 + panel_w + gap / 2, (y0 + y1) / 2
    draw.ellipse([cx - badge_r, cy - badge_r, cx + badge_r, cy + badge_r], fill=INK, outline=WHITE, width=5)
    f_vs = font("segoeuib.ttf", 28)
    tw = draw.textlength("VS", font=f_vs)
    draw.text((cx - tw / 2, cy - 18), "VS", font=f_vs, fill=WHITE)


MOCKUPS = {
    "palette": mockup_palette,
    "chart": mockup_chart,
    "steps": mockup_steps,
    "paper": mockup_paper,
    "vs": mockup_vs,
}

# Which brand colour should dominate each cover's background wash, so the
# five images don't all default to the same orange-forward mesh.
LEAD_COLOR = {
    "palette": PRIMARY,
    "chart": TEAL,
    "steps": PRIMARY,
    "paper": TEAL,
    "vs": PRIMARY,
}


def wrap_words(draw, words, font_obj, max_width):
    """Greedy word-wrap that keeps each word's own (text, color) pair intact."""
    lines, current, current_w = [], [], 0
    space_w = draw.textlength(" ", font=font_obj)
    for word, color in words:
        w = draw.textlength(word, font=font_obj)
        added = w if not current else space_w + w
        if current and current_w + added > max_width:
            lines.append(current)
            current, current_w = [], 0
            added = w
        current.append((word, color))
        current_w += added
    if current:
        lines.append(current)
    return lines


def draw_headline(draw, origin, title, highlight, max_width, size=56, line_gap=14):
    f = font("segoeuib.ttf", size)
    highlight_words = set(highlight.split()) if highlight else set()
    words = [(w, TEAL_DARK if w.strip(",.") in highlight_words else INK) for w in title.split()]
    lines = wrap_words(draw, words, f, max_width)

    x0, y = origin
    line_h = size + line_gap
    for line in lines:
        x = x0
        for word, color in line:
            draw.text((x, y), word, font=f, fill=color)
            x += draw.textlength(word + " ", font=f)
        y += line_h
    return y


def draw_logo_lockup(canvas: Image.Image, draw, origin):
    x, y = origin
    try:
        logo = Image.open(LOGO_PATH).convert("RGBA")
        logo = logo.resize((48, 48))
        canvas.alpha_composite(logo, (int(x), int(y) - 8))
        text_x = x + 60
    except FileNotFoundError:
        text_x = x

    f1 = font("segoeuib.ttf", 24)
    f2 = font("segoeuib.ttf", 24)
    draw.text((text_x, y), "MHTCET", font=f1, fill=INK)
    w = draw.textlength("MHTCET ", font=f1)
    draw.text((text_x + w, y), "Simu", font=f2, fill=PRIMARY)


def generate(post: dict):
    variant = post.get("variant", "palette")
    canvas = draw_background(lead_color=LEAD_COLOR.get(variant, PRIMARY))
    draw = ImageDraw.Draw(canvas)

    MOCKUPS[variant](canvas, draw, MOCKUP_BOX)

    right_x = 850
    right_w = CANVAS_W - right_x - 90

    eyebrow_font = font("seguisb.ttf", 22)
    draw.text((right_x, 190), post["category"].upper(), font=eyebrow_font, fill=PRIMARY)

    headline_bottom = draw_headline(
        draw,
        (right_x, 235),
        post["title"],
        post.get("highlight", ""),
        right_w,
        size=54,
        line_gap=12,
    )

    draw_logo_lockup(canvas, draw, (right_x, min(headline_bottom + 50, CANVAS_H - 100)))

    out_path = os.path.join(OUT_DIR, f"{post['slug']}.png")
    canvas.convert("RGB").save(out_path, "PNG")
    print(f"Wrote {out_path}")


if __name__ == "__main__":
    os.makedirs(OUT_DIR, exist_ok=True)
    for post in POSTS:
        generate(post)
