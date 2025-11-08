import { NextRequest, NextResponse } from "next/server";
import { db } from "@/server/db";
import { scores } from "@shared/schema";
import { eq, and, desc } from "drizzle-orm";

export async function POST(request: NextRequest) {
  try {
    const { playerId, mode, score, level } = await request.json();
    
    console.log("Score API called with:", { playerId, mode, score, level });

    if (!playerId || !mode || score === undefined) {
      console.error("Missing required fields:", { playerId, mode, score });
      return NextResponse.json(
        { error: "playerId, mode, and score are required" },
        { status: 400 }
      );
    }

    const existingScores = await db
      .select()
      .from(scores)
      .where(
        and(
          eq(scores.playerId, playerId),
          eq(scores.mode, mode)
        )
      )
      .orderBy(desc(scores.score))
      .limit(1);

    const highScore = existingScores[0]?.score || 0;

    if (score > highScore) {
      const [newScore] = await db
        .insert(scores)
        .values({
          playerId,
          mode,
          score,
          level: level || null,
        })
        .returning();

      console.log("New high score saved:", newScore);
      return NextResponse.json({ newHighScore: true, score: newScore });
    }

    console.log("Score not higher than existing:", { score, highScore });
    return NextResponse.json({ newHighScore: false, highScore });
  } catch (error) {
    console.error("Error in score route:", error);
    return NextResponse.json(
      { error: "Failed to save score" },
      { status: 500 }
    );
  }
}
