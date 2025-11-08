import { pgTable, serial, varchar, integer, timestamp, boolean } from "drizzle-orm/pg-core";

export const players = pgTable("players", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  deviceId: varchar("device_id", { length: 255 }).notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const scores = pgTable("scores", {
  id: serial("id").primaryKey(),
  playerId: integer("player_id").references(() => players.id).notNull(),
  mode: varchar("mode", { length: 50 }).notNull(),
  score: integer("score").notNull(),
  level: integer("level"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type Player = typeof players.$inferSelect;
export type InsertPlayer = typeof players.$inferInsert;
export type Score = typeof scores.$inferSelect;
export type InsertScore = typeof scores.$inferInsert;
