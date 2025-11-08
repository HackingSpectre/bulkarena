import { NextResponse } from "next/server";
import { db } from "@/server/db";
import { scores, players } from "@shared/schema";
import { eq, desc, sql } from "drizzle-orm";

export async function GET() {
  try {
    console.log("Fetching leaderboard data...");

    const leaderboardData = await db
      .select({
        name: players.name,
        score: sql<number>`MAX(${scores.score})`.as('max_score'),
      })
      .from(scores)
      .innerJoin(players, eq(scores.playerId, players.id))
      .where(eq(scores.mode, "challenge"))
      .groupBy(players.id, players.name)
      .orderBy(desc(sql`MAX(${scores.score})`))
      .limit(10);

    console.log("Raw leaderboard data:", leaderboardData);

    // Ensure the data is properly formatted
    const formattedData = leaderboardData.map(entry => ({
      name: entry.name,
      score: Number(entry.score) || 0
    }));

    console.log("Formatted leaderboard data:", formattedData);
    
    return NextResponse.json(formattedData);
  } catch (error) {
    console.error("Error in leaderboard route:", error);
    // Return empty array instead of error to prevent frontend crash
    return NextResponse.json([]);
  }
}
