#!/usr/bin/env node
/**
 * Generate public/salus-brochure.pdf from scripts/brochure-source.html
 * using headless Chrome.
 */
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const source = path.join(root, "scripts", "brochure-source.html");
const out = path.join(root, "public", "salus-brochure.pdf");

if (!fs.existsSync(source)) {
  console.error("Missing brochure source:", source);
  process.exit(1);
}

fs.mkdirSync(path.dirname(out), { recursive: true });
if (fs.existsSync(out)) fs.unlinkSync(out);

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

const fileUrl = pathToFileURL(source).href;
const result = spawnSync(
  chrome,
  [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    `--print-to-pdf=${out}`,
    "--no-margins",
    fileUrl,
  ],
  { encoding: "utf8" }
);

if (result.status !== 0 || !fs.existsSync(out)) {
  console.error(result.stderr || result.stdout || "PDF generation failed");
  process.exit(result.status || 1);
}

const sizeKb = Math.round(fs.statSync(out).size / 1024);
console.log(`Wrote ${out} (${sizeKb} KB)`);
