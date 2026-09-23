const { chromium } = require("playwright-core");
const path = require("path");
const fs = require("fs");

const SLIDES = [
  { id: "a-feed", out: "claro-modelo-a-mapa-feed-1080x1350.png" },
  { id: "a-story", out: "claro-modelo-a-mapa-story-1080x1920.png" },
  { id: "b-feed", out: "claro-modelo-b-contexto-feed-1080x1350.png" },
  { id: "b-story", out: "claro-modelo-b-contexto-story-1080x1920.png" },
];

(async () => {
  const dir = __dirname;
  fs.mkdirSync(path.join(dir, "png"), { recursive: true });

  const browser = await chromium.launch({ channel: "chrome" });
  const page = await browser.newPage({
    viewport: { width: 1200, height: 2000 },
    deviceScaleFactor: 1,
  });

  const file = path.join(dir, "criativos-claro.html").split(path.sep).join("/");
  await page.goto("file:///" + file, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(1200);

  for (const s of SLIDES) {
    const el = await page.$("#" + s.id);
    await el.screenshot({ path: path.join(dir, "png", s.out) });
    console.log("ok:", s.out);
  }

  await browser.close();
})();
