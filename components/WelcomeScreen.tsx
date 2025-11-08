"use client";

import { useState } from "react";
import Image from "next/image";
import GameBackground from "./GameBackground";

interface WelcomeScreenProps {
  onSubmit: (name: string) => void;
}

export default function WelcomeScreen({ onSubmit }: WelcomeScreenProps) {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit(name.trim());
    }
  };

  return (
    <GameBackground>
      <div className="min-h-screen flex items-center justify-center p-4 relative z-10">
        <div className="max-w-lg w-full">
          {/* Logo and branding */}
          <div className="text-center mb-12">
            <div className="mb-8 flex justify-center">
              <div className="relative w-32 h-32 animate-float">
                <Image
                  src="/bulk-logo.png"
                  alt="BulkTrade Logo"
                  width={128}
                  height={128}
                  className="game-text-glow animate-pulse-slow"
                />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-gaming font-bold text-game-milk mb-4 game-text-glow">
              BulkArena
            </h1>
            
            <p className="text-lg text-game-milk/90 mb-3 font-medium">
              One Exchange, Infinite Markets
            </p>
            
            <p className="text-game-milk/70">
              Master the art of lightning-fast trading
            </p>
          </div>

          {/* Entry form */}
          <div className="game-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-3 text-game-milk/90">
                  Enter Your Trader Identity
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-4 bg-game-black/50 border border-game-milk/30 rounded-lg focus:outline-none focus:border-game-milk focus:ring-2 focus:ring-game-milk/20 transition-all text-game-milk placeholder-game-milk/50 text-center text-lg font-medium"
                  placeholder="Your trading name"
                  maxLength={50}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full game-button text-xl py-4 font-gaming"
              >
                Enter the Arena
              </button>
            </form>
          </div>

          {/* Footer info */}
          <div className="mt-8 text-center space-y-2">
            <p className="text-game-milk/60 text-sm">
              Powered by <span className="text-game-milk font-semibold">BulkTrade</span> on Solana
            </p>
            <div className="flex justify-center space-x-6 text-xs text-game-milk/50">
              <span>~20ms matching</span>
              <span>•</span>
              <span>80% consensus</span>
              <span>•</span>
              <span>Zero MEV</span>
            </div>
          </div>
        </div>
      </div>
    </GameBackground>
  );
}
