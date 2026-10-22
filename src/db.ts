import { PGlite } from "@electric-sql/pglite";
import { vector } from "@electric-sql/pglite-pgvector";
import { pipeline, env } from "@xenova/transformers";
import precomputedData from "./data_with_embeddings.json";

env.allowLocalModels = false;
env.useBrowserCache = false;

export const db = new PGlite("idb://samanarthi-vector-db", {
  extensions: {
    vector,
  },
});

let extractor: any;

export const getEmbedding = async (text: string): Promise<number[]> => {
  if (!extractor) {
    extractor = await pipeline("feature-extraction", "Xenova/all-MiniLM-L6-v2");
  }
  const output = await extractor(text, { pooling: "mean", normalize: true });
  return Array.from(output.data);
};

export const initVectorDB = async () => {
  await db.exec(`
        CREATE EXTENSION IF NOT EXISTS vector;
        CREATE TABLE IF NOT EXISTS documents (
            id SERIAL PRIMARY KEY,
            title TEXT,
            description TEXT,
            keywords JSONB,
            links JSONB,
            matchType TEXT,
            embedding vector(384)
        )`);

  const { rows } = await db.query(`SELECT COUNT(*) as count FROM documents;`);
  if ((rows[0] as any).count > 0) return;
  console.log("Ingesting pre-computed data...");
  for (const item of precomputedData.data) {
    await db.query(
      `
        INSERT INTO documents (title, description, keywords, links, matchType, embedding)
        VALUES ($1, $2, $3, $4, $5, $6)`,
      [
        item.title,
        item.description,
        JSON.stringify(item.keywords),
        JSON.stringify(item.links),
        item.matchType,
        JSON.stringify(item.embedding),
      ],
    );
  }
  console.log("Ingestion complete.");
};
