"""
Generates soft, abstract placeholder "painting" images so the site has
something to show before real artwork photos are added.

Run once during setup: python3 scripts/generate_placeholders.py
Safe to delete this script (and Pillow) once real photos are in place.
"""

import math
import random
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter

OUT_DIR = Path(__file__).resolve().parent.parent / "public" / "paintings"
OUT_DIR.mkdir(parents=True, exist_ok=True)

# (filename, size (w,h), base palette of RGB tuples, seed)
PIECES = [
    ("golden-hour-fields.jpg", (1200, 900), [(235, 180, 90), (200, 110, 60), (120, 70, 50), (250, 225, 170)], 1),
    ("coastal-morning.jpg", (1200, 900), [(180, 210, 215), (90, 140, 160), (235, 235, 220), (60, 90, 110)], 2),
    ("fragments-in-blue.jpg", (1000, 1000), [(40, 60, 110), (90, 120, 180), (210, 220, 230), (20, 30, 60)], 3),
    ("quiet-tension.jpg", (1000, 1000), [(60, 55, 60), (150, 40, 45), (225, 220, 210), (30, 28, 30)], 4),
    ("peonies-and-linen.jpg", (900, 1150), [(235, 210, 215), (200, 120, 140), (245, 240, 230), (120, 60, 70)], 5),
    ("citrus-study-no-2.jpg", (900, 1150), [(245, 225, 150), (225, 150, 60), (140, 170, 90), (250, 245, 230)], 6),
]


def soft_blob(draw: ImageDraw.ImageDraw, cx, cy, r, color, alpha):
    bbox = [cx - r, cy - r, cx + r, cy + r]
    draw.ellipse(bbox, fill=color + (alpha,))


def generate(filename, size, palette, seed):
    random.seed(seed)
    w, h = size
    base = Image.new("RGB", size, palette[-1])

    # soft gradient background
    top = palette[0]
    bottom = palette[-1]
    for y in range(h):
        t = y / h
        r = int(top[0] * (1 - t) + bottom[0] * t)
        g = int(top[1] * (1 - t) + bottom[1] * t)
        b = int(top[2] * (1 - t) + bottom[2] * t)
        ImageDraw.Draw(base).line([(0, y), (w, y)], fill=(r, g, b))

    overlay = Image.new("RGBA", size, (0, 0, 0, 0))
    odraw = ImageDraw.Draw(overlay)

    # layered soft blobs for an abstract painterly feel
    for _ in range(14):
        color = random.choice(palette)
        cx = random.randint(0, w)
        cy = random.randint(0, h)
        r = random.randint(int(min(w, h) * 0.08), int(min(w, h) * 0.32))
        alpha = random.randint(40, 110)
        soft_blob(odraw, cx, cy, r, color, alpha)

    overlay = overlay.filter(ImageFilter.GaussianBlur(radius=min(w, h) * 0.03))
    base = base.convert("RGBA")
    base = Image.alpha_composite(base, overlay)

    # a few looser brush-stroke-like lines for texture
    stroke_layer = Image.new("RGBA", size, (0, 0, 0, 0))
    sdraw = ImageDraw.Draw(stroke_layer)
    for _ in range(8):
        color = random.choice(palette)
        x1 = random.randint(0, w)
        y1 = random.randint(0, h)
        length = random.randint(int(min(w, h) * 0.2), int(min(w, h) * 0.6))
        angle = random.uniform(0, math.pi)
        x2 = int(x1 + length * math.cos(angle))
        y2 = int(y1 + length * math.sin(angle))
        sdraw.line([(x1, y1), (x2, y2)], fill=color + (70,), width=random.randint(20, 60))
    stroke_layer = stroke_layer.filter(ImageFilter.GaussianBlur(radius=min(w, h) * 0.01))
    base = Image.alpha_composite(base, stroke_layer)

    base = base.convert("RGB")
    # very subtle grain
    base = base.filter(ImageFilter.SMOOTH_MORE)

    out_path = OUT_DIR / filename
    base.save(out_path, "JPEG", quality=87)
    print(f"wrote {out_path}")


def generate_monogram():
    """A simple placeholder 'headshot' tile for the About page, until a
    real photo of the artist is added."""
    size = (800, 800)
    bg = (235, 227, 214)
    img = Image.new("RGB", size, bg)
    draw = ImageDraw.Draw(img)
    draw.ellipse([60, 60, 740, 740], outline=(168, 88, 60), width=4)

    font_path = "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf"
    try:
        from PIL import ImageFont

        font = ImageFont.truetype(font_path, 220)
    except Exception:
        font = None

    text = "GK"
    if font:
        bbox = draw.textbbox((0, 0), text, font=font)
        tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
        draw.text(
            ((size[0] - tw) / 2 - bbox[0], (size[1] - th) / 2 - bbox[1]),
            text,
            font=font,
            fill=(34, 31, 28),
        )

    out_path = OUT_DIR.parent / "artist-placeholder.jpg"
    img.save(out_path, "JPEG", quality=90)
    print(f"wrote {out_path}")


if __name__ == "__main__":
    for filename, size, palette, seed in PIECES:
        generate(filename, size, palette, seed)
    generate_monogram()
