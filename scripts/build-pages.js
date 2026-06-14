const fs = require("node:fs");
const path = require("node:path");

const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const examplesDir = path.join(rootDir, "examples");

fs.rmSync(distDir, { recursive: true, force: true });
fs.mkdirSync(distDir, { recursive: true });

fs.copyFileSync(path.join(rootDir, "index.html"), path.join(distDir, "index.html"));

if (fs.existsSync(examplesDir)) {
  fs.cpSync(examplesDir, path.join(distDir, "examples"), { recursive: true });
}
