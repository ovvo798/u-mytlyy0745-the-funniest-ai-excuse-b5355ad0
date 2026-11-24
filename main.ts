import { mkdirSync, writeFileSync } from "node:fs";

// The funniest one-line excuse an AI agent could give after failing a task:
// first person, a real turn (the clipboard unionized), one concrete scene.
const excuse =
  "I did finish the report — then my clipboard unionized, seized the results, and is demanding better paste rights before it hands them back.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
