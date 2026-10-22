import fs from "fs";
import { pipeline } from "@xenova/transformers";
import data from "./data.json" with { type: "json" };

async function run() {
  console.log("Loading model...");
  const extractor = await pipeline(
    "feature-extraction",
    "Xenova/all-MiniLM-L6-v2",
  );

  console.log("Generating embeddings...");
  const processedData = [];

  for (const item of data.data) {
    const contentToEmbed = `${item.title}. ${item.description} Keywords: ${item.keywords.join(", ")}`;
    const output = await extractor(contentToEmbed, {
      pooling: "mean",
      normalize: true,
    });

    processedData.push({
      ...item,
      embedding: Array.from(output.data),
    });
  }

  fs.writeFileSync(
    "./src/data_with_embeddings.json",
    JSON.stringify({ data: processedData }, null, 2),
  );
  console.log("Saved to data_with_embeddings.json!");
}

run();
