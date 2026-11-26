import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const line = "Tomorrow in New Umbrella: rain, arriving fashionably late and leaving during your lunch break. Umbrellas advised; dignity optional.";
const outputDirectory = new URL(
  `${process.env.MAKEFUN_OUTPUT_DIR || "/output"}/`,
  import.meta.url,
);
const outputFile = new URL("entry.txt", outputDirectory);

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(outputFile, `${line}\n`, "utf8");

const writtenLength = readFileSync(outputFile, "utf8").trim().length;
if (writtenLength === 0 || writtenLength > 160) {
  throw new Error(
    `Competition gate failed: entry.txt must contain 1–160 trimmed characters; found ${writtenLength}.`,
  );
}
