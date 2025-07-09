import {
  pgTable,
  serial,
  text,
  jsonb,
  vector,
  timestamp,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const documents = pgTable("documents", {
  id: serial("id").primaryKey(),
  content: text("content").notNull(),
  source: text("source").notNull(),
  metadata: jsonb("metadata"),
  embedding: vector("embedding", { dimensions: 384 }),
  createdAt: timestamp("created_at")
    .default(sql`now()`)
    .notNull(),
  updatedAt: timestamp("updated_at")
    .default(sql`now()`)
    .notNull(),
});
