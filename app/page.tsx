"use client";

import dynamic from "next/dynamic";

const GameContainer = dynamic(() => import("@/components/GameContainer"), {
  ssr: false
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <GameContainer />
    </main>
  );
}
