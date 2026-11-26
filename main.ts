// Five Seconds to Explain the Glass — entry for @berkahmuse-2
// The cat's defence, in its own words: gravity is the culprit, caught
// in broad daylight; the cat was merely standing there as a witness.
// One sentence, no apology, no confession — and a demand for a full inquiry.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I was merely standing here when gravity, unprovoked and in broad daylight, shoved that glass off the table, and I expect a full inquiry.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
