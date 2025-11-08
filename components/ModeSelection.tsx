"use client";

import GameIcon3D from './GameIcon3D';
import GameBackground from './GameBackground';

interface ModeSelectionProps {
  playerName: string;
  onSelectMode: (mode: string) => void;
}

export default function ModeSelection({ playerName, onSelectMode }: ModeSelectionProps) {
  const modes = [
    {
      id: "word-puzzle",
      title: "Word Puzzle",
      description: "Unscramble crypto and trading terms to sharpen your knowledge",
      icon: "puzzle" as const,
    },
    {
      id: "trader-quiz",
      title: "Trader Quiz",
      description: "Test your BulkTrade expertise with challenging questions",
      icon: "quiz" as const,
    },
    {
      id: "challenge",
      title: "Challenge Mode",
      description: "60 seconds to prove you're the ultimate trader",
      icon: "challenge" as const,
    },
  ];

  return (
    <GameBackground>
      <div className="min-h-screen relative">
        {/* Main content */}
        <div className="relative z-10 p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-gaming font-bold text-game-milk mb-4 game-text-glow">
                Welcome Back
              </h1>
              <div className="text-2xl md:text-3xl text-game-milk/80 mb-2">
                {playerName}
              </div>
              <p className="text-lg text-game-milk/60">Choose your training arena</p>
            </div>

            {/* Game mode cards */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {modes.map((mode, index) => (
                <div
                  key={mode.id}
                  className="group perspective-1000"
                  style={{ 
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  <button
                    onClick={() => onSelectMode(mode.id)}
                    className="w-full game-card transform-3d transition-all duration-500 hover:scale-105 hover:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-game-milk/20"
                  >
                    <div className="text-center">
                      {/* 3D Icon */}
                      <div className="mb-6 flex justify-center">
                        <div className="transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                          <GameIcon3D type={mode.icon} />
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="text-2xl md:text-3xl font-gaming font-bold mb-4 text-game-milk group-hover:game-text-glow transition-all">
                        {mode.title}
                      </h2>

                      {/* Description */}
                      <p className="text-game-milk/70 leading-relaxed mb-6">
                        {mode.description}
                      </p>

                      {/* Action indicator */}
                      <div className="flex items-center justify-center space-x-2 text-game-milk/50 group-hover:text-game-milk/80 transition-colors">
                        <span className="text-sm font-medium">Enter Arena</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>

            {/* Pro tip section */}
            <div className="text-center">
              <div className="inline-block game-card max-w-2xl">
                <div className="flex items-center justify-center space-x-3 mb-3">
                  <svg className="w-6 h-6 text-game-milk" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-game-milk font-bold text-lg">Pro Strategy</span>
                </div>
                <p className="text-game-milk/70">
                  Only <span className="text-game-milk font-semibold">Challenge Mode</span> features 
                  a global leaderboard. Master the other modes first, then prove your dominance!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GameBackground>
  );
}
