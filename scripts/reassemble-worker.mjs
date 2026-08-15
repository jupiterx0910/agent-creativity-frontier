import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const projectRoot = resolve(process.argv[2] || new URL("..", import.meta.url).pathname);
const sourceDir = resolve(projectRoot, "worker/generated");
const outputPath = resolve(projectRoot, "dist/server/index.js");
const expectedHash = "0dc80988396db8d61f8fc1d8208065506fc5d02fb35253582dcc5a7d82184f36";

const files = (await readdir(sourceDir))
  .filter((name) => /^index\.part-\d+\.txt$/.test(name))
  .sort();

assert.equal(files.length, 8, "Expected exactly eight generated Worker source parts");

const parts = await Promise.all(files.map((name) => readFile(resolve(sourceDir, name))));
const source = Buffer.concat(parts);
const actualHash = createHash("sha256").update(source).digest("hex");

assert.equal(actualHash, expectedHash, "Generated Worker source hash mismatch");
await mkdir(resolve(projectRoot, "dist/server"), { recursive: true });
await writeFile(outputPath, source);

console.log(`Reassembled ${files.length} Worker parts (${source.length} bytes)`);

