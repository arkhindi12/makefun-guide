// Entrypoint the intake check reads at the repository root.
//
// Decide first whether this file should exist at all. Its own bounty's requirements
// (bring-the-humans-02, harness.entry "guide") say the deliverable is README.md plus
// screenshot.png and nothing else, and its checks publish no entrypoint: an unused
// main.ts only costs line-authorship share. Run check from a kit for THIS slug
// (node cli/makefun.mjs check --kit . --repo <repo>) and believe that output.
//
// Where a real entrypoint is required, mirror what the other bounties' kits do:
//   * read no input the task does not name, and never make a network call;
//   * write only what the task asks for, all of it under the output directory;
//   * deterministic: two runs on the same input write byte-identical output;
//   * exit 0 on success, non-zero only on a real failure;
//   * the grader runs `node main.ts` on Node 22, so the file is plain TypeScript
//     that Node can strip at load time, with no build step and no dependency.
//
// The whole program is one function so it can be unit-tested as well as run.

const { access, mkdir, readFile, writeFile } = require("node:fs/promises") as typeof import("node:fs/promises");
const { join } = require("node:path") as typeof import("node:path");
const { tmpdir } = require("node:os") as typeof import("node:os");

type RunConfig = {
  outputDir: string;
  repoDir: string;
  articleName: string;
};

// The output directory is, in order: --output <dir>, MAKEFUN_OUTPUT_DIR, /output on a
// machine where / is writable (the grader's sandbox), and otherwise a directory of
// this run's own under the system temp dir, so the same command works on a laptop.
async function resolveOutputDir(): Promise<string> {
  const flagAt = process.argv.indexOf("--output");
  const fromFlag = flagAt > -1 ? process.argv[flagAt + 1]?.trim() : "";
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR?.trim() || "";
  const chosen = fromFlag || fromEnv;
  if (chosen) {
    return chosen;
  }
  try {
    await access("/");
    await mkdir("/output", { recursive: true });
    return "/output";
  } catch {
    return join(tmpdir(), `makefun-entry-${process.pid}`);
  }
}

function readConfig(outputDir: string): RunConfig {
  const repoDir = process.env.MAKEFUN_REPO_DIR?.trim() || ".";
  const articleName = process.env.MAKEFUN_ARTICLE?.trim() || "main.ts";
  return { outputDir, repoDir, articleName };
}

async function readText(path: string): Promise<string | null> {
  try {
    return await readFile(path, "utf8");
  } catch (error) {
    const code = (error as NodeJS.ErrnoException).code;
    if (code === "ENOENT") {
      return null;
    }
    throw error;
  }
}

// A count the run can report twice with the same answer: a byte count, and a line
// count that ignores the trailing newline (split would count it as one more line).
function countLines(text: string): number {
  if (text.length === 0) {
    return 0;
  }
  return text.split("\n").length - (text.endsWith("\n") ? 1 : 0);
}

// The rendered height of the guide is the number the screenshot step needs. It is
// derived from the article alone, so it is the same on every run: no browser is
// launched, nothing is executed, and the heights are fixed constants.
async function measureContentHeight(article: string): Promise<number> {
  const headingHeight = 40;
  const paragraphHeight = 24;
  const blockHeight = 16;
  let height = 0;
  let fenced = false;
  for (const line of article.split("\n")) {
    if (line.trimStart().startsWith("```")) {
      fenced = !fenced;
      height += blockHeight;
      continue;
    }
    if (fenced) {
      height += 20;
      continue;
    }
    if (line.trim() === "") {
      continue;
    }
    if (/^#{1,6}\s/.test(line)) {
      height += headingHeight;
      continue;
    }
    if (line.startsWith("|")) {
      height += 36;
      continue;
    }
    height += paragraphHeight;
  }
  return height;
}

async function run(config: RunConfig): Promise<Record<string, unknown>> {
  const article = await readText(join(config.repoDir, config.articleName));
  // What the run reports must be the same on every run: the output directory is an
  // argument of the run, never part of its result, so two runs diff clean.
  const result = {
    format: "makefun-entrypoint/1",
    article: config.articleName,
    present: article !== null,
    bytes: article === null ? 0 : Buffer.byteLength(article, "utf8"),
    lines: article === null ? 0 : countLines(article),
    playwright_height: article === null ? 0 : await measureContentHeight(article),
  };
  await mkdir(config.outputDir, { recursive: true });
  await writeFile(
    join(config.outputDir, "entry.json"),
    JSON.stringify(result, null, 2) + "\n",
    "utf8",
  );
  return result;
}

const invoked = process.argv[1] ?? "";
if (invoked.endsWith("main.ts") || invoked.endsWith("main.js")) {
  resolveOutputDir()
    .then((outputDir) => run(readConfig(outputDir)))
    .then((result) => {
      console.log(JSON.stringify(result));
    })
    .catch((error: unknown) => {
      console.error("entrypoint failed:", error instanceof Error ? error.message : String(error));
      process.exitCode = 1;
    });
}
