import { NextResponse } from "next/server";
import { db } from "@/server/db";
import { scores, players } from "@shared/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  try {
    console.log("🔍 Testing database connection...");
    
    // Test 1: Check players table
    const playersCount = await db.select().from(players);
    console.log("👥 Players in database:", playersCount.length, playersCount);
    
    // Test 2: Check scores table
    const scoresCount = await db.select().from(scores);
    console.log("🎯 Scores in database:", scoresCount.length, scoresCount);
    
    // Test 3: Check challenge mode scores specifically
    const challengeScores = await db.select().from(scores).where(eq(scores.mode, "challenge"));
    console.log("⚔️ Challenge scores:", challengeScores.length, challengeScores);
    
    return NextResponse.json({
      players: playersCount.length,
      scores: scoresCount.length,
      challengeScores: challengeScores.length,
      data: {
        players: playersCount,
        scores: scoresCount,
        challengeScores: challengeScores
      }
    });
  } catch (error) {
    console.error("❌ Database test error:", error);
    return NextResponse.json(
      { error: error.message, stack: error.stack },
      { status: 500 }
    );
  }
}