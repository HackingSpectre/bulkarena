"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { wordPuzzles } from "@/lib/gameData";
import dynamic from "next/dynamic";

const DanglingLetters = dynamic(() => import("@/components/DanglingLetters"), { ssr: false });

interface WordPuzzleProps {
  playerId: number;
  onBack: () => void;
}

export default function WordPuzzle({ playerId, onBack }: WordPuzzleProps) {
  const [currentPuzzle, setCurrentPuzzle] = useState(wordPuzzles[0]);
  const [userAnswer, setUserAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isGameActive, setIsGameActive] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize with random puzzle and load high score
  useEffect(() => {
    const randomPuzzle = wordPuzzles[Math.floor(Math.random() * wordPuzzles.length)];
    setCurrentPuzzle(randomPuzzle);
    loadHighScore();
  }, []);

  const saveHighScore = useCallback((newScore: number) => {
    // COMMENTED OUT - Database saving disabled, using localStorage only
    /*
    const saveHighScore = async (newScore: number) => {
      try {
        await fetch("/api/score", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            playerId,
            mode: "word-puzzle",
            score: newScore,
            level: null,
          }),
        });
        setHighScore(newScore);
      } catch (error) {
        console.error("Error saving score:", error);
      }
    };
    */
    
    // Save high score to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem("bulkmind_word_puzzle_high_score", newScore.toString());
      setHighScore(newScore);
      console.log("High score saved to localStorage:", newScore);
    }
  }, []);

  const handleTimeUp = useCallback(() => {
    setIsGameActive(false);
    setIsGameOver(true);
    setMessage("⏰ Time's Up! Game Over");
    
    // Save final score if it's a high score
    if (score > highScore) {
      saveHighScore(score);
    }
  }, [score, highScore, saveHighScore]);

  // Timer countdown
  useEffect(() => {
    if (isGameActive && timeLeft > 0 && !isGameOver) {
      timerRef.current = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0 && isGameActive) {
      handleTimeUp();
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [timeLeft, isGameActive, isGameOver, handleTimeUp]);

  const loadHighScore = () => {
    // COMMENTED OUT - Database fetching disabled, using localStorage only
    /*
    const loadHighScore = async () => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
      try {
        const response = await fetch("/api/score", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            playerId,
            mode: "word-puzzle",
            score: 0,
            level: null,
          }),
        });
        const data = await response.json();
        if (data.highScore) {
          setHighScore(data.highScore);
        }
      } catch (error) {
        console.error("Error loading high score:", error);
      }
    };
    */
    
    // Load high score from localStorage
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem("bulkmind_word_puzzle_high_score");
      if (stored) {
        setHighScore(parseInt(stored, 10));
      }
    }
  };

  const nextPuzzle = () => {
    const randomPuzzle = wordPuzzles[Math.floor(Math.random() * wordPuzzles.length)];
    setCurrentPuzzle(randomPuzzle);
    setUserAnswer("");
    setMessage("");
    setIsCorrect(false);
    setTimeLeft(10);
  };

  const restartGame = () => {
    setScore(0);
    setIsGameActive(true);
    setIsGameOver(false);
    setMessage("");
    nextPuzzle();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isGameActive || isGameOver) return;
    
    if (userAnswer.toUpperCase() === currentPuzzle.word) {
      setMessage("Correct! 🎉");
      setIsCorrect(true);
      const newScore = score + 100;
      setScore(newScore);

      // Check if new high score
      if (newScore > highScore) {
        saveHighScore(newScore);
        setMessage("🎊 New High Score! " + newScore);
      }

      setTimeout(() => {
        nextPuzzle();
      }, 1500);
    } else {
      setMessage("Wrong! Try again!");
      setTimeout(() => setMessage(""), 2000);
    }
  };

  if (isGameOver) {
    return (
      <div className="min-h-screen relative">
        {/* Background */}
        <div className="absolute inset-0 bg-game-black" style={{
          backgroundImage: 'url(/game-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }} />
        
        {/* Game Over Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
          <div className="game-card text-center max-w-lg w-full">
            <h1 className="text-5xl font-gaming font-bold text-game-milk mb-4 game-text-glow">
              Game Over!
            </h1>
            <p className="text-2xl text-game-milk mb-2">
              Final Score: <span className="font-gaming font-bold">{score}</span>
            </p>
            <p className="text-xl text-game-milk/70 mb-8">
              High Score: <span className="font-gaming font-bold text-game-milk">{highScore}</span>
            </p>
            
            <div className="flex gap-4">
              <button
                onClick={restartGame}
                className="flex-1 game-button text-lg py-4 font-gaming"
              >
                Try Again
              </button>
              <button
                onClick={onBack}
                className="flex-1 game-button-secondary text-lg py-4 font-gaming"
              >
                Back to Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="absolute inset-0 bg-game-black" style={{
        backgroundImage: 'url(/game-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }} />
      
      {/* Content */}
      <div className="relative z-10 p-4 md:p-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6 flex justify-between items-center">
            <button
              onClick={onBack}
              className="game-button-secondary flex items-center gap-2"
            >
              ← Back to Menu
            </button>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <span className="text-sm text-game-milk/60">Score</span>
                <div className="text-2xl font-bold text-game-milk font-gaming">{score}</div>
              </div>
              <div className="text-center">
                <span className="text-sm text-game-milk/60">High Score</span>
                <div className="text-2xl font-bold text-game-milk font-gaming">{highScore}</div>
              </div>
              <div className="text-center">
                <span className="text-sm text-game-milk/60">Time</span>
                <div className={`text-3xl font-bold font-gaming ${
                  timeLeft <= 3 ? 'text-red-400 animate-pulse' : 'text-game-milk'
                }`}>
                  {timeLeft}s
                </div>
              </div>
            </div>
          </div>

          <div className="game-card">
            <h1 className="text-4xl md:text-6xl font-gaming font-bold text-game-milk mb-6 text-center game-text-glow">
              Word Puzzle
            </h1>

            <div className="mb-8 text-center">
              <p className="text-game-milk/70 mb-4 text-lg">Unscramble this word:</p>
              <p className="text-game-milk/50 mb-6">💡 {currentPuzzle.hint}</p>
            </div>

            <div className="mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-game-milk/5 to-transparent pointer-events-none z-10" />
              <DanglingLetters 
                letters={currentPuzzle.scrambled.split('')} 
                isCorrect={isCorrect} 
                timeLeft={timeLeft}
              />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                disabled={!isGameActive}
                className="w-full px-6 py-4 bg-game-black/50 border border-game-milk/30 rounded-lg focus:outline-none focus:border-game-milk focus:ring-2 focus:ring-game-milk/20 transition-all text-game-milk text-xl text-center uppercase tracking-widest font-gaming placeholder-game-milk/40 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="TYPE YOUR ANSWER"
                autoComplete="off"
              />
              
              <button
                type="submit"
                disabled={!isGameActive}
                className="w-full game-button text-xl py-4 font-gaming disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Answer
              </button>
            </form>

            {message && (
              <div className={`mt-6 text-center text-xl font-bold font-gaming ${
                message.includes('Correct') || message.includes('completed') ? 'text-green-400' : 'text-yellow-400'
              }`}>
                {message}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
