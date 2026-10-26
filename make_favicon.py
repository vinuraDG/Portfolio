from PIL import Image

im = Image.open("logo.png").convert("RGB")

# tight bounding box of the dark pixels (the VD letters)
mask = im.convert("L").point(lambda p: 255 if p < 140 else 0)
l, t, r, b = mask.getbbox()
w, h = r - l, b - t

# square canvas with ~15% padding
side = int(max(w, h) * 1.15)
sq = Image.new("RGB", (side, side), "white")
sq.paste(im.crop((l, t, r, b)), ((side - w) // 2, (side - h) // 2))

sq.resize((192, 192), Image.LANCZOS).save("favicon-192.png")
sq.resize((256, 256), Image.LANCZOS).save("favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
print("done")