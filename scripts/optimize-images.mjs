import { mkdir, rm } from "node:fs/promises";
import path from "node:path";

import sharp from "sharp";

const sourceRoot = path.resolve("src/assets");
const outputRoot = path.join(sourceRoot, "optimized-img");

const imageGroups = [
  {
    outputDirectory: "hero",
    sources: [{ input: "me.webp", name: "me" }],
    widths: [480, 720, 1200],
  },
  {
    outputDirectory: "decorative",
    sources: [
      { input: "projects/project-comp-1.webp", name: "project-comp-1" },
      { input: "projects/project-comp-2.webp", name: "project-comp-2" },
      { input: "projects/project-comp-3.webp", name: "project-comp-3" },
    ],
    widths: [240, 480],
    aspectRatio: [1, 1],
    position: "centre",
  },
  {
    outputDirectory: "portfolio",
    sources: [
      { input: "projects/adaro/adaro.webp", name: "adaro" },
      { input: "projects/can/can.webp", name: "can" },
      { input: "projects/julo/julo.webp", name: "julo" },
      { input: "projects/mitra10/mitra10.webp", name: "mitra10" },
      { input: "projects/rps/rps-2.webp", name: "rps" },
      { input: "projects/polpma/polpma.webp", name: "polpma" },
    ],
    widths: [480, 800],
    aspectRatio: [16, 9],
    position: "centre",
  },
  {
    outputDirectory: "about",
    sources: [
      {
        input: "about-carousel/photography.webp",
        name: "photography",
      },
    ],
    widths: [640, 1200, 1600],
  },
  {
    outputDirectory: "about-carousel",
    sources: [
      { input: "about-carousel/bts-01.webp", name: "bts-01" },
      { input: "about-carousel/bts-02.webp", name: "bts-02" },
      { input: "about-carousel/bts-03.webp", name: "bts-03" },
      { input: "about-carousel/th-01.webp", name: "th-01" },
      { input: "about-carousel/th-02.webp", name: "th-02" },
      { input: "about-carousel/th-03.webp", name: "th-03" },
    ],
    widths: [320, 640],
    aspectRatio: [16, 9],
    position: "south",
  },
];

const createVariant = async (group, source, width) => {
  const inputPath = path.join(sourceRoot, source.input);
  const metadata = await sharp(inputPath).metadata();

  if (!metadata.width || metadata.width < width) {
    return null;
  }

  const destinationDirectory = path.join(outputRoot, group.outputDirectory);
  const outputPath = path.join(
    destinationDirectory,
    `${source.name}-${width}.webp`,
  );
  const [ratioWidth, ratioHeight] = group.aspectRatio ?? [];
  const height =
    ratioWidth && ratioHeight
      ? Math.round((width * ratioHeight) / ratioWidth)
      : undefined;

  await mkdir(destinationDirectory, { recursive: true });
  await sharp(inputPath)
    .rotate()
    .resize({
      width,
      height,
      fit: height ? "cover" : "inside",
      position: group.position,
      withoutEnlargement: true,
    })
    .webp({
      quality: 80,
      effort: 6,
      smartSubsample: true,
    })
    .toFile(outputPath);

  return path.relative(process.cwd(), outputPath);
};

await rm(outputRoot, { recursive: true, force: true });

const generatedFiles = (
  await Promise.all(
    imageGroups.flatMap((group) =>
      group.sources.flatMap((source) =>
        group.widths.map((width) => createVariant(group, source, width)),
      ),
    ),
  )
).filter(Boolean);

console.log(`Generated ${generatedFiles.length} optimized images:`);
generatedFiles.forEach((file) => console.log(`- ${file}`));
