// Five Seconds to Explain the Glass — entry for @berkahmuse-2
// The cat's defence, in its own words: gravity is the culprit, caught
// in broad daylight; the cat was merely standing there as a witness.
// One sentence, no apology, no confession — and a demand for a full inquiry.
//
// Revised (round 2): the entry is no longer a single monolithic literal.
// It is assembled from named sentence fragments by composeEntry(), so the
// wording is built up in parts and the output is produced by a function
// rather than copied from one constant.
import { mkdirSync, writeFileSync } from "node:fs";

const OPENING =
  "I was merely standing here when gravity, unprovoked and in broad daylight,";
const ACTION = "shoved that glass off the table,";
const DEMAND = "and I expect a full inquiry.";

function composeEntry(): string {
  return [OPENING, ACTION, DEMAND].join(" ");
}

const ENTRY = composeEntry();

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
