import sharp from "sharp";
import path from "node:path";

const SRC = path.resolve("../identidade/logo.jpeg");
const OUT_DIR = path.resolve("./public/brand");

async function main() {
  const img = sharp(SRC).ensureAlpha();
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  // Make near-white pixels transparent (the dotted paper background + white fill)
  for (let i = 0; i < width * height; i++) {
    const idx = i * channels;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    const brightness = (r + g + b) / 3;
    // Kill the paper texture: near-white pixels, and light-gray dot noise
    // (grayscale-ish, not part of the near-black glyph strokes).
    const isNearWhite = brightness > 205;
    if (isNearWhite) {
      data[idx + 3] = 0;
    }
  }

  const transparent = sharp(data, { raw: { width, height, channels } });

  // Full lockup (icon + wordmark), transparent bg, trimmed
  await transparent
    .clone()
    .trim({ threshold: 10 })
    .png()
    .toFile(path.join(OUT_DIR, "logo-transparent.png"));

  // Icon-only crop (top ~52% of the lockup, where the bars+K glyph lives)
  const meta = await transparent.clone().trim({ threshold: 10 }).png().toBuffer({ resolveWithObject: true });
  const iconHeight = Math.round(meta.info.height * 0.56);
  await sharp(meta.data)
    .extract({ left: 0, top: 0, width: meta.info.width, height: iconHeight })
    .trim({ threshold: 10 })
    .png()
    .toFile(path.join(OUT_DIR, "icon-transparent.png"));

  // White-ink variants (for dark / gradient backgrounds)
  async function toWhite(inputPath, outputPath) {
    const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
    const { width: w, height: h, channels: c } = info;
    for (let i = 0; i < w * h; i++) {
      const idx = i * c;
      if (data[idx + 3] > 0) {
        data[idx] = 255;
        data[idx + 1] = 255;
        data[idx + 2] = 255;
      }
    }
    await sharp(data, { raw: { width: w, height: h, channels: c } }).png().toFile(outputPath);
  }

  await toWhite(
    path.join(OUT_DIR, "icon-transparent.png"),
    path.join(OUT_DIR, "icon-white.png")
  );
  await toWhite(
    path.join(OUT_DIR, "logo-transparent.png"),
    path.join(OUT_DIR, "logo-white.png")
  );

  // Favicon-ready square icon (padded, transparent)
  const iconMeta = await sharp(path.join(OUT_DIR, "icon-transparent.png")).metadata();
  const side = Math.max(iconMeta.width, iconMeta.height);
  const pad = Math.round(side * 0.18);
  await sharp(path.join(OUT_DIR, "icon-transparent.png"))
    .resize(side, side, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({ top: pad, bottom: pad, left: pad, right: pad, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .resize(512, 512)
    .png()
    .toFile(path.join(OUT_DIR, "icon-square-512.png"));

  console.log("done", { width, height });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
