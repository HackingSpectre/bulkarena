"use client";

import { useState, useEffect } from "react";

interface DanglingLettersProps {
  letters: string[];
  isCorrect: boolean;
  timeLeft: number;
}

export default function DanglingLetters({ letters, isCorrect, timeLeft }: DanglingLettersProps) {
  const [letterPositions, setLetterPositions] = useState<{x: number, y: number}[]>([]);

  // Generate random positions only when letters change
  useEffect(() => {
    const container = { width: 800, height: 300 };
    const positions = letters.map(() => ({
      x: 80 + Math.random() * (container.width - 160),
      y: 60 + Math.random() * (container.height - 120),
    }));
    setLetterPositions(positions);
  }, [letters]);

  return (
    <div 
      className="w-full relative"
      style={{ 
        maxWidth: '800px', 
        height: '300px',
        margin: '0 auto',
      }}
    >
      <div 
        className="w-full h-full rounded-lg overflow-hidden border-2 border-game-milk/20 shadow-2xl game-backdrop relative"
        style={{ 
          boxShadow: '0 20px 60px rgba(248, 248, 255, 0.1), 0 0 30px rgba(0, 0, 0, 0.5)',
          backgroundColor: 'rgba(0,0,0,0.1)',
        }}
      >
        {letters.map((letter, index) => {
          const position = letterPositions[index];
          if (!position) return null;

          return (
            <div
              key={`${letter}-${index}`}
              className="absolute select-none cursor-pointer transition-colors duration-200"
              style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: 'translate(-50%, -50%)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#DDDDDD';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = timeLeft <= 3 ? '#FF9999' : '#F8F8FF';
              }}
            >
              {/* Shadow */}
              <div
                className="absolute text-5xl font-bold font-mono"
                style={{
                  left: '3px',
                  top: '3px',
                  color: '#000000',
                  opacity: 0.3,
                  fontFamily: 'Orbitron, monospace',
                  zIndex: 1,
                }}
              >
                {letter}
              </div>
              
              {/* Main letter */}
              <div
                className="relative text-5xl font-bold font-mono"
                style={{
                  color: timeLeft <= 3 ? '#FF9999' : '#F8F8FF',
                  fontFamily: 'Orbitron, monospace',
                  zIndex: 2,
                }}
              >
                {letter}
              </div>
            </div>
          );
        })}

        {/* Success animation overlay */}
        {isCorrect && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-6xl font-gaming font-bold text-green-400 animate-bounce">
              🎉 CORRECT! 🎉
            </div>
          </div>
        )}
      </div>
    </div>
  );
}