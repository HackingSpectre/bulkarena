"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { challengeQuestions } from "@/lib/gameData";

interface ChallengeModeProps {
  playerId: number;
  playerName: string;
  onBack: () => void;
}

interface LeaderboardEntry {
  name: string;
  score: number;
}

export default function ChallengeMode({ playerId, playerName, onBack }: ChallengeModeProps) {
  const [timeLeft, setTimeLeft] = useState(60);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isGameActive, setIsGameActive] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [shuffledQuestions, setShuffledQuestions] = useState(challengeQuestions);
  const [feedback, setFeedback] = useState<string>("");
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const scoreRef = useRef(0); // Add ref to track score without causing re-renders

  /* COMMENTED OUT DB FETCHING - Original fetchLeaderboard function
  const fetchLeaderboard = async () => {
    try {
      console.log("Fetching leaderboard...");
      const response = await fetch("/api/leaderboard");
      const data = await response.json();
      console.log("Leaderboard response:", data);
      
      // Ensure data is always an array
      const leaderboardArray = Array.isArray(data) ? data : [];
      setLeaderboard(leaderboardArray);
      console.log("Leaderboard state set:", leaderboardArray);
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
      setLeaderboard([]);
    }
  };
  */

  // Local Storage Implementation for fetchLeaderboard
  const fetchLeaderboard = useCallback(() => {
    try {
      if (typeof window !== 'undefined') {
        const stored = localStorage.getItem('bulkmind_challenge_leaderboard');
        let leaderboardArray: LeaderboardEntry[] = [];
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) {
            leaderboardArray = parsed;
          }
        }
        setLeaderboard(leaderboardArray);
      } else {
        setLeaderboard([]);
      }
    } catch (error) {
      console.error("Error loading leaderboard from localStorage:", error);
      setLeaderboard([]);
    }
  }, []);

  /* COMMENTED OUT DB FETCHING - Original endGame function
  const endGame = async () => {
    setIsGameActive(false);
    setIsGameOver(true);

    console.log("Ending game with score:", score, "for player:", playerId);

    try {
      const response = await fetch("/api/score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          playerId,
          mode: "challenge",
          score,
          level: null,
        }),
      });

      const result = await response.json();
      console.log("Score save result:", result);

      // Refresh leaderboard after saving score
      await fetchLeaderboard();
    } catch (error) {
      console.error("Error saving score:", error);
    }
  };
  */

  // Local Storage Implementation for endGame
  const endGame = useCallback(() => {
    setIsGameActive(false);
    setIsGameOver(true);

    console.log("Ending game with score:", scoreRef.current, "for player:", playerId);

    try {
      if (typeof window !== 'undefined') {
        // Get current leaderboard or initialize
        let leaderboard: LeaderboardEntry[] = [];
        const stored = localStorage.getItem('bulkmind_challenge_leaderboard');
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) {
            leaderboard = parsed;
          }
        }

        // Add current player's score using ref value
        const playerDisplayName = playerName || `Player ${playerId}`;
        leaderboard.push({
          name: playerDisplayName,
          score: scoreRef.current
        });

        // Sort by score descending and keep top 10
        leaderboard.sort((a, b) => b.score - a.score);
        leaderboard = leaderboard.slice(0, 10);

        // Save updated leaderboard
        localStorage.setItem('bulkmind_challenge_leaderboard', JSON.stringify(leaderboard));

        // Refresh leaderboard display
        fetchLeaderboard();
      }
    } catch (error) {
      console.error("Error saving score to localStorage:", error);
    }
  }, [playerId, playerName, fetchLeaderboard]); // Remove score from dependencies

  useEffect(() => {
    fetchLeaderboard();
    setShuffledQuestions([...challengeQuestions].sort(() => Math.random() - 0.5));
  }, [fetchLeaderboard]);

  // Separate timer effect - independent of score changes
  useEffect(() => {
    if (isGameActive && timeLeft > 0) {
      timerRef.current = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0 && isGameActive) {
      endGame();
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [timeLeft, isGameActive, endGame]);

  const startGame = () => {
    setIsGameActive(true);
    setIsGameOver(false);
    setScore(0);
    scoreRef.current = 0; // Reset score ref
    setTimeLeft(60);
    setCurrentQuestionIndex(0);
    setFeedback("");
    setShuffledQuestions([...challengeQuestions].sort(() => Math.random() - 0.5));
  };

  const handleAnswerSelect = (index: number) => {
    if (!isGameActive) return;

    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    let newScore;
    
    if (index === currentQuestion.correct) {
      newScore = score + 100;
      setScore(newScore);
      scoreRef.current = newScore; // Keep ref in sync
      setFeedback("+100");
    } else {
      // Deduct 50 points for wrong answer, but don't go below 0
      newScore = Math.max(0, score - 50);
      setScore(newScore);
      scoreRef.current = newScore; // Keep ref in sync
      setFeedback("-50");
    }

    // Clear feedback after a short delay
    setTimeout(() => setFeedback(""), 800);

    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentQuestionIndex(0);
      setShuffledQuestions([...challengeQuestions].sort(() => Math.random() - 0.5));
    }
  };

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  if (!isGameActive && !isGameOver) {
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
          <div className="max-w-6xl mx-auto">
            <button
              onClick={onBack}
              className="mb-6 game-button-secondary flex items-center gap-2"
            >
              ← Back to Menu
            </button>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="game-card">
                <h1 className="text-3xl font-gaming font-bold text-game-milk mb-6 game-text-glow">
                  Challenge Mode
                </h1>
                <p className="text-game-milk/80 mb-6 text-lg">
                  You have <span className="text-game-milk font-bold font-gaming">60 seconds</span> to answer as many questions as possible!
                </p>
                <ul className="space-y-3 text-game-milk/70 mb-8">
                  <li className="flex items-start">
                    <span className="text-game-milk mr-2">•</span>
                    Each correct answer: <span className="text-green-400 ml-1 font-bold">+100 points</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-game-milk mr-2">•</span>
                    Each wrong answer: <span className="text-red-400 ml-1 font-bold">-50 points</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-game-milk mr-2">•</span>
                    Questions cycle infinitely and randomly
                  </li>
                  <li className="flex items-start">
                    <span className="text-game-milk mr-2">•</span>
                    Beat your high score to climb the leaderboard!
                  </li>
                </ul>
                <button
                  onClick={startGame}
                  className="w-full game-button text-xl py-4 font-gaming"
                >
                  Start Challenge
                </button>
              </div>

              <div className="game-card">
                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-xl font-gaming font-bold text-game-milk game-text-glow">
                    Leaderboard
                  </h2>
                  <button
                    onClick={fetchLeaderboard}
                    className="text-sm game-button-secondary px-3 py-1"
                  >
                    Refresh
                  </button>
                </div>
                <div className="space-y-3">
                  {leaderboard.length === 0 ? (
                    <p className="text-game-milk/50 text-center py-8">No scores yet.</p>
                  ) : (
                    leaderboard.map((entry, index) => (
                      <div
                        key={index}
                        className={`flex items-center justify-between p-4 rounded-lg transition-all ${
                          entry.name === playerName
                            ? 'bg-game-milk/20 border border-game-milk'
                            : 'bg-game-black/50 border border-game-milk/20'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`text-2xl font-bold font-gaming ${
                            index === 0 ? 'text-yellow-400' :
                            index === 1 ? 'text-gray-300' :
                            index === 2 ? 'text-orange-400' :
                            'text-game-milk/70'
                          }`}>
                            #{index + 1}
                          </span>
                          <span className="text-game-milk font-medium">{entry.name}</span>
                        </div>
                        <span className="text-game-milk font-bold font-gaming text-lg">{entry.score}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isGameOver) {
    return (
      <div className="min-h-screen relative flex items-center justify-center">
        {/* Background */}
        <div className="absolute inset-0 bg-game-black" style={{
          backgroundImage: 'url(/game-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }} />
        
        {/* Content */}
        <div className="relative z-10 p-4">
          <div className="max-w-2xl w-full game-card text-center">
            <h1 className="text-3xl font-gaming font-bold text-game-milk mb-4 game-text-glow">
              Time&apos;s Up!
            </h1>
            <p className="text-2xl text-game-milk mb-8">
              Final Score: <span className="text-game-milk font-bold font-gaming">{scoreRef.current}</span>
            </p>
            <div className="flex gap-4">
              <button
                onClick={startGame}
                className="flex-1 game-button text-lg py-4 font-gaming"
              >
                Play Again
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
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <span className="text-sm text-game-milk/60">Score</span>
                <div className="text-2xl font-bold text-game-milk font-gaming relative">
                  {score}
                  {feedback && (
                    <div className={`absolute -top-8 left-1/2 transform -translate-x-1/2 text-lg font-gaming animate-bounce ${
                      feedback.includes('+') ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {feedback}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className={`text-3xl font-bold font-gaming ${timeLeft <= 10 ? 'text-red-400 animate-pulse' : 'text-game-milk'} game-text-glow`}>
              {timeLeft}s
            </div>
          </div>

          <div className="game-card">
            <div className="mb-8">
              <div className="game-card bg-game-black/50 p-6 mb-6">
                <p className="text-lg md:text-xl text-game-milk font-medium">
                  {currentQuestion.question}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className="text-left px-6 py-4 rounded-lg border-2 bg-game-dark/70 border-game-milk/30 hover:border-game-milk hover:bg-game-milk/10 transition-all transform hover:scale-105 active:scale-95"
                  >
                    <span className="text-game-milk font-medium">{option}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
