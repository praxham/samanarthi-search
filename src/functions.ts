import { db, getEmbedding } from "./db";

export const filterResults = async (query: string, limit: number = 1) => {
  if (!query) return [];

  const queryEmbeddings = await getEmbedding(query);

  const result = await db.query(
    `SELECT title, description, keywords, links, matchType, 
            1 - (embedding <=> $1) AS similarity_score
     FROM documents 
     ORDER BY embedding <=> $1 
     LIMIT $2;`,
    [JSON.stringify(queryEmbeddings), limit],
  );
  return result.rows.map((row: any) => ({
    title: row.title,
    description: row.description,
    keywords:
      typeof row.keywords === "string"
        ? JSON.parse(row.keywords)
        : row.keywords,
    links: typeof row.links === "string" ? JSON.parse(row.links) : row.links,
    matchType: row.matchType,
    similarityScore: row.similarity_score,
  }));
};
