// gta6-clipper-01 — make.fun entry program (program/v1).
//
// The entry itself is a public YouTube Short; this program only hands its
// address to the grader. It copies VIDEO.json from the repository root into
// the output directory and does nothing else.
//
// Standard library only. No network, no wall clock, no files outside the
// repository. The two runs of an entry write the same bytes.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(botDir, "VIDEO.json"), join(outDir, "VIDEO.json"));
