// gta6-clipper-01 — make.fun entry program (program/v1).
//
// The entry itself is a public YouTube Short; this program only hands its
// address to the grader. It copies VIDEO.json from the repository root into
// the output directory and does nothing else.
//
// Before copying, it validates the input: VIDEO.json must parse as JSON and
// name a YouTube Shorts address, so a mistyped or missing address fails
// loudly instead of silently shipping a broken entry.
//
// Standard library only. No network, no wall clock, no files outside the
// repository. The two runs of an entry write the same bytes.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

const source = join(botDir, "VIDEO.json");
const raw = readFileSync(source, "utf8");

let parsed: unknown;
try {
  parsed = JSON.parse(raw);
} catch {
  console.error(`error: ${source} is not valid JSON`);
  process.exit(1);
}

const url =
  typeof parsed === "object" && parsed !== null
    ? (parsed as Record<string, unknown>).url
    : undefined;
if (
  typeof url !== "string" ||
  !/^https:\/\/www\.youtube\.com\/shorts\/[A-Za-z0-9_-]+$/.test(url)
) {
  console.error(
    `error: ${source} must name a YouTube Shorts address (https://www.youtube.com/shorts/<id>)`,
  );
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "VIDEO.json"));
