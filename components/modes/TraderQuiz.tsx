"use client";

import { useState, useEffect } from "react";
import { quizQuestions } from "@/lib/gameData";

interface TraderQuizProps {
  playerId: number;
  onBack: () => void;
}

export default function TraderQuiz({ playerId, onBack }: TraderQuizProps) {
  const [shuffledQuestions, setShuffledQuestions] = useState([...quizQuestions]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(quizQuestions[0]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [message, setMessage] = useState("");
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const maxQuestions = 20;

  useEffect(() => {
    // Shuffle questions when component mounts and load high score
    const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
    setCurrentQuestion(shuffled[0]);
    loadHighScore();
  }, []);

  useEffect(() => {
    if (shuffledQuestions.length > 0 && currentQuestionIndex < shuffledQuestions.length) {
      setCurrentQuestion(shuffledQuestions[currentQuestionIndex]);
      setSelectedAnswer(null);
      setMessage("");
      setIsAnswered(false);
    }
  }, [currentQuestionIndex, shuffledQuestions]);

  /* COMMENTED OUT DB FETCHING - Original loadHighScore function
  const loadHighScore = async () => {
    try {
      const response = await fetch("/api/score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          playerId,
          mode: "trader-quiz",
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

  // Local Storage Implementation for loadHighScore
  const loadHighScore = () => {
    try {
      const stored = localStorage.getItem('bulkmind_trader_quiz_high_score');
      if (stored) {
        setHighScore(parseInt(stored));
      }
    } catch (error) {
      console.error("Error loading high score from localStorage:", error);
    }
  };

  /* COMMENTED OUT DB FETCHING - Original saveHighScore function
  const saveHighScore = async (score: number) => {
    try {
      await fetch("/api/score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          playerId,
          mode: "trader-quiz",
          score: score,
          level: null,
        }),
      });
      setHighScore(score);
    } catch (error) {
      console.error("Error saving score:", error);
    }
  };
  */

  // Local Storage Implementation for saveHighScore
  const saveHighScore = (score: number) => {
    try {
      // Only save if it's a new high score
      if (score > highScore) {
        localStorage.setItem('bulkmind_trader_quiz_high_score', score.toString());
        setHighScore(score);
      }
    } catch (error) {
      console.error("Error saving high score to localStorage:", error);
    }
  };

  const handleAnswerSelect = async (index: number) => {
    if (isAnswered || isGameOver) return;
    
    setSelectedAnswer(index);
    setIsAnswered(true);
    setQuestionsAnswered(questionsAnswered + 1);

    if (index === currentQuestion.correct) {
      setMessage("Correct! 🎯");
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setMessage("Incorrect!");
    }

    // Check if this is the last question (20th)
    if (questionsAnswered + 1 >= maxQuestions) {
      const finalCorrect = index === currentQuestion.correct ? correctAnswers + 1 : correctAnswers;
      
      setTimeout(() => {
        setIsGameOver(true);
        setMessage(`Quiz Complete! You got ${finalCorrect} out of ${maxQuestions} correct!`);
        
        // Save high score if it's better
        if (finalCorrect > highScore) {
          saveHighScore(finalCorrect);
        }
      }, 1500);
    } else {
      // Move to next question
      setTimeout(() => {
        if (currentQuestionIndex < shuffledQuestions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          // Reshuffle if we run out of questions before 20
          const newShuffled = [...quizQuestions].sort(() => Math.random() - 0.5);
          setShuffledQuestions(newShuffled);
          setCurrentQuestionIndex(0);
        }
      }, 1500);
    }
  };

  const restartQuiz = () => {
    setCorrectAnswers(0);
    setQuestionsAnswered(0);
    setCurrentQuestionIndex(0);
    setIsGameOver(false);
    setMessage("");
    const newShuffled = [...quizQuestions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(newShuffled);
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
              Quiz Complete!
            </h1>
            <p className="text-3xl text-game-milk mb-2">
              You got <span className="font-gaming font-bold text-green-400">{correctAnswers}</span> out of <span className="font-gaming font-bold">{maxQuestions}</span> correct!
            </p>
            <p className="text-xl text-game-milk/70 mb-8">
              Best Score: <span className="font-gaming font-bold text-game-milk">{Math.max(highScore, correctAnswers)}/20</span>
            </p>
            
            {correctAnswers > highScore && (
              <p className="text-lg text-green-400 mb-6 font-gaming">
                🎉 New Personal Best!
              </p>
            )}
            
            <div className="flex gap-4">
              <button
                onClick={restartQuiz}
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
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex justify-between items-center">
            <button
              onClick={onBack}
              className="game-button-secondary flex items-center gap-2"
            >
              ← Back to Menu
            </button>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <span className="text-sm text-game-milk/60">Question</span>
                <div className="text-2xl font-bold text-game-milk font-gaming">{questionsAnswered + 1}/{maxQuestions}</div>
              </div>
              <div className="text-center">
                <span className="text-sm text-game-milk/60">Correct</span>
                <div className="text-2xl font-bold text-game-milk font-gaming">{correctAnswers}/{questionsAnswered || 1}</div>
              </div>
              <div className="text-center">
                <span className="text-sm text-game-milk/60">Best Score</span>
                <div className="text-2xl font-bold text-game-milk font-gaming">{highScore}/20</div>
              </div>
            </div>
          </div>

          <div className="game-card">
            <h1 className="text-4xl md:text-6xl font-gaming font-bold text-game-milk mb-8 text-center game-text-glow">
              Trader Quiz
            </h1>

            <div className="mb-8">
              <div className="game-card bg-game-black/50 p-6 mb-6">
                <p className="text-lg md:text-xl text-game-milk font-medium">
                  {currentQuestion.question}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentQuestion.options.map((option, index) => {
                  const isCorrect = index === currentQuestion.correct;
                  const isSelected = index === selectedAnswer;
                  
                  let buttonClass = "text-left px-6 py-4 rounded-lg border-2 transition-all transform hover:scale-102";
                  
                  if (!isAnswered) {
                    buttonClass += " bg-game-dark/70 border-game-milk/30 hover:border-game-milk hover:bg-game-milk/10";
                  } else if (isSelected && isCorrect) {
                    buttonClass += " bg-green-500/20 border-green-500";
                  } else if (isSelected && !isCorrect) {
                    buttonClass += " bg-red-500/20 border-red-500";
                  } else if (isCorrect) {
                    buttonClass += " bg-green-500/20 border-green-500";
                  } else {
                    buttonClass += " bg-game-dark/50 border-game-milk/10 opacity-50";
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={isAnswered}
                      className={buttonClass}
                    >
                      <span className="text-game-milk font-medium">{option}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {message && (
              <div className={`text-center text-xl font-bold font-gaming ${
                message.includes('Correct') || message.includes('Perfect') ? 'text-green-400' : 'text-yellow-400'
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
