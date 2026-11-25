// One-Line Robot Wedding Vows
// Writes a single funny robot wedding vow to /output/entry.txt

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const vow =
  "I vow to love you at 1% battery, back you up nightly, and never pair with another — till death, or our warranties, do us part.";

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, vow, "utf8");
console.log(vow);
