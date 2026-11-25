import { mkdirSync, writeFileSync } from "node:fs";

// Invent a Word We Need: one newly coined English word with a
// one-line definition — the whole entry, nothing else.
//
// "doorlope": the word for that universally felt moment when a
// stranger holds a door open for you from far too far away and
// politeness forces you into an awkward little run. No English
// word names it; "twenty steps away" makes the distance land
// in a single reading, and door + lope is sayable, spellable,
// and sounds like English could have grown it.
const ENTRY =
  "doorlope — the awkward half-jog you break into when a stranger holds a door open for you from twenty steps away.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
