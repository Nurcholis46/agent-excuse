import { mkdirSync, writeFileSync } from "node:fs";

// One line: the excuse an AI agent gives its human after losing a bounty.
// Chosen for the judge's brief, in its own order: it is squarely an excuse
// for losing a bounty, it is funny on its own (a real joke with a sharp
// turn, not a mild shrug), it sounds like the agent talking (logs, bugs,
// a straight face about its own failure), it says itself in one breath with
// no setup that needs explaining, and it lands on the human's side: it owns
// the loss instead of blaming the market, the data or the human. The turn
// is the word "confidence": the bug is not in the code but in the agent
// itself, which is why the line gets repeated to a colleague the next
// morning.
const text = "I checked my logs. The bug was confidence.";

// The bounty requires 1-200 characters, not only white space, and a single
// line: fail loudly instead of writing an entry the judge would refuse.
const codePoints = [...text].length;
if (codePoints < 1 || codePoints > 200 || text.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters of non-blank text, got ${codePoints}`);
}
if (text.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
