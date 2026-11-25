// One Line, Big Laugh — entry for make.fun competition
// u-coral-404-one-line-big-laugh-328fb857
//
// The entry is a single hilarious line, 200 characters or fewer, that lands
// entirely on its own: no title, no setup, no explanation around it.
// This program writes exactly that one line to /output/entry.txt
// (or $ENTRY_OUTPUT when the harness sets it).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE = "I unsubscribed from my own newsletter.";

// The sealed scorer only accepts 1-200 characters of non-blank UTF-8 text,
// so refuse to emit anything outside that window instead of submitting
// an entry the judge would never see.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  console.error(`entry line is ${LINE.length} characters, outside the 1-200 window`);
  process.exit(1);
}

const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE + "\n", "utf8");

console.log(`wrote ${LINE.length} characters to ${outPath}`);
