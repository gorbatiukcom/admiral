// Regenerate after adding portfolio photos: node packages/bud/scripts/portfolio-image-sizes.cjs
const fs = require("node:fs/promises");
const path = require("node:path");
const sharp = require("sharp");
(async () => {
  const root = path.resolve(__dirname, "..");
  const source = await fs.readFile(path.join(root, "src/constants/portfolio.ts"), "utf8");
  const sources = [
    ...new Set([...source.matchAll(/"(\/images\/[^"\n]+)"/g)].map((match) => match[1])),
  ];
  const sizes = {};
  for (const src of sources) {
    const { width, height } = await sharp(path.join(root, "public", src)).metadata();
    sizes[src] = { width, height };
  }
  await fs.writeFile(
    path.join(root, "src/constants/portfolio-image-sizes.json"),
    JSON.stringify(sizes, null, 2) + "\n",
  );
})();
