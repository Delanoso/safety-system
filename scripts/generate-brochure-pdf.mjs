#!/usr/bin/env node
/**
 * Generate public/salus-brochure.pdf from scripts/brochure-source.html
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import puppeteer from "puppeteer-core";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const source = path.join(root, "scripts", "brochure-source.html");
const out = path.join(root, "public", "salus-brochure.pdf");

if (!fs.existsSync(source)) {
  console.error("Missing brochure source:", source);
  process.exit(1);
}

const chromeCandidates = [
  process.env.CHROME_PATH,
  "/usr/local/bin/google-chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
].filter(Boolean);

let chrome = null;
for (const candidate of chromeCandidates) {
  if (fs.existsSync(candidate)) {
    chrome = candidate;
    break;
  }
}

if (!chrome) {
  console.error("Chrome/Chromium not found. Set CHROME_PATH.");
  process.exit(1);
}

fs.mkdirSync(path.dirname(out), { recursive: true });

const browser = await puppeteer.launch({
  executablePath: chrome,
  headless: "new",
  args: ["--no-sandbox", "--disable-gpu", `--user-data-dir=${path.join(root, ".tmp-chrome-brochure")}`],
});

try {
  const page = await browser.newPage();
  await page.goto(pathToFileURL(source).href, { waitUntil: "networkidle0", timeout: 60000 });
  await page.pdf({
    path: out,
    format: "A4",
    printBackground: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });
} finally {
  await browser.close();
}

const sizeKb = Math.round(fs.statSync(out).size / 1024);
console.log(`Wrote ${out} (${sizeKb} KB)`);
