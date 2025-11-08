import { NextRequest, NextResponse } from "next/server";
import { db } from "@/server/db";
import { players } from "@shared/schema";
import { eq } from "drizzle-orm";

export async function POST(request: NextRequest) {
  try {
    const { name, deviceId } = await request.json();
    
    console.log("Player API called with:", { name, deviceId });

    if (!name || !deviceId) {
      console.error("Missing name or deviceId");
      return NextResponse.json(
        { error: "Name and deviceId are required" },
        { status: 400 }
      );
    }

    const [existingPlayer] = await db
      .select()
      .from(players)
      .where(eq(players.deviceId, deviceId));

    if (existingPlayer) {
      console.log("Found existing player:", existingPlayer);
      return NextResponse.json(existingPlayer);
    }

    const [newPlayer] = await db
      .insert(players)
      .values({ name, deviceId })
      .returning();

    console.log("Created new player:", newPlayer);
    return NextResponse.json(newPlayer);
  } catch (error) {
    console.error("Error in player route:", error);
    return NextResponse.json(
      { error: "Failed to create or fetch player" },
      { status: 500 }
    );
  }
}
