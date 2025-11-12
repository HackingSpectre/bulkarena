'use client'

import { useState, useEffect } from 'react'
import { quizQuestions } from '@/lib/gameData'
import { useAuth, useXPromptTrigger } from '@/contexts/AuthContext'
import XLoginPrompt from '@/components/XLoginPrompt'

interface DailyQuizProps {
  onBack: () => void
}

interface DailyStats {
  currentStreak: number
  bestStreak: number
  totalCompleted: number
  lastPlayedDate: string
}

export default function DailyQuiz({ onBack }: DailyQuizProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [dailyQuestion, setDailyQuestion] = useState(quizQuestions[0])
  const [hasPlayedToday, setHasPlayedToday] = useState(false)
  const [timeUntilNext, setTimeUntilNext] = useState('')
  const [stats, setStats] = useState<DailyStats>({
    currentStreak: 0,
    bestStreak: 0,
    totalCompleted: 0,
    lastPlayedDate: ''
  })

  // X Authentication hooks
  const { isLoggedIn, xUser } = useAuth()
  const { triggerPrompt } = useXPromptTrigger()

  // Get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    return new Date().toISOString().split('T')[0]
  }

  // Generate question for today based on date
  const getTodaysQuestion = () => {
    const today = getTodayDate()
    // Use date as seed for consistent question selection
    const dateNumber = parseInt(today.replace(/-/g, ''))
    const questionIndex = dateNumber % quizQuestions.length
    return quizQuestions[questionIndex]
  }

  // Calculate time until next day (midnight UTC)
  const calculateTimeUntilNext = () => {
    const now = new Date()
    const tomorrow = new Date(now)
    tomorrow.setUTCDate(tomorrow.getUTCDate() + 1)
    tomorrow.setUTCHours(0, 0, 0, 0)
    
    const diff = tomorrow.getTime() - now.getTime()
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((diff % (1000 * 60)) / 1000)
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  // Update countdown every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeUntilNext(calculateTimeUntilNext())
    }, 1000)

    // Initial calculation
    setTimeUntilNext(calculateTimeUntilNext())

    return () => clearInterval(timer)
  }, [])

  // Load daily stats from localStorage
  const loadStats = () => {
    if (typeof window === 'undefined') return

    const savedStats = localStorage.getItem('dailyQuizStats')
    if (savedStats) {
      const parsedStats = JSON.parse(savedStats)
      setStats(parsedStats)
      
      // Check if user has played today
      const today = getTodayDate()
      setHasPlayedToday(parsedStats.lastPlayedDate === today)
    }
  }

  // Save stats to localStorage
  const saveStats = (newStats: DailyStats) => {
    if (typeof window === 'undefined') return
    localStorage.setItem('dailyQuizStats', JSON.stringify(newStats))
    setStats(newStats)
  }

  // Handle answer submission
  const handleAnswer = (answerIndex: number) => {
    if (isAnswered || hasPlayedToday) return

    setSelectedAnswer(answerIndex)
    setIsAnswered(true)
    const correct = answerIndex === dailyQuestion.correct
    setIsCorrect(correct)

    // Update stats
    const today = getTodayDate()
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    const yesterdayString = yesterday.toISOString().split('T')[0]

    let newStreak = 1
    
    // Calculate streak
    if (stats.lastPlayedDate === yesterdayString) {
      // Played yesterday, continue streak
      newStreak = stats.currentStreak + 1
    } else if (stats.lastPlayedDate === today) {
      // Already played today (shouldn't happen)
      newStreak = stats.currentStreak
    } else {
      // Gap in playing, reset streak
      newStreak = 1
    }

    const newStats: DailyStats = {
      currentStreak: newStreak,
      bestStreak: Math.max(newStreak, stats.bestStreak),
      totalCompleted: stats.totalCompleted + 1,
      lastPlayedDate: today
    }

    saveStats(newStats)
    setHasPlayedToday(true)

    // Trigger X login prompt for streak milestones
    if (correct && newStreak >= 3) {
      triggerPrompt(true, 2000) // Show after 2 seconds if they got it right and have 3+ streak
    }

    // Show result after short delay
    setTimeout(() => {
      setShowResult(true)
    }, 1000)
  }

  // Reset for next day (for testing)
  const resetForTesting = () => {
    if (typeof window === 'undefined') return
    localStorage.removeItem('dailyQuizStats')
    setStats({
      currentStreak: 0,
      bestStreak: 0,
      totalCompleted: 0,
      lastPlayedDate: ''
    })
    setHasPlayedToday(false)
    setIsAnswered(false)
    setShowResult(false)
    setSelectedAnswer(null)
  }

  useEffect(() => {
    setDailyQuestion(getTodaysQuestion())
    loadStats()
  }, [])

  // Shared Layout Component
  const GameLayout = ({ children, title }: { children: React.ReactNode; title: string }) => (
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
          {/* Header */}
          <div className="mb-6 flex justify-between items-center">
            <button
              onClick={onBack}
              className="game-button-secondary flex items-center gap-2"
            >
              ← Back to Menu
            </button>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <span className="text-sm text-game-milk/60">Streak</span>
                <div className="text-xl font-bold text-game-milk font-gaming">{stats.currentStreak}</div>
              </div>
              <div className="text-center">
                <span className="text-sm text-game-milk/60">Best</span>
                <div className="text-xl font-bold text-game-milk font-gaming">{stats.bestStreak}</div>
              </div>
              <div className="text-center">
                <span className="text-sm text-game-milk/60">Total</span>
                <div className="text-xl font-bold text-game-milk font-gaming">{stats.totalCompleted}</div>
              </div>
              <div className="text-center">
                <span className="text-sm text-game-milk/60">Next Question</span>
                <div className="text-lg font-bold text-yellow-400 font-gaming">{timeUntilNext}</div>
              </div>
            </div>
          </div>

          {/* Main Card */}
          <div className="game-card">
            <h1 className="text-3xl md:text-4xl font-gaming font-bold text-game-milk mb-8 text-center game-text-glow">
              {title}
            </h1>
            {children}
          </div>
        </div>
      </div>
    </div>
  )

  // Already Played Today Screen
  if (hasPlayedToday && !showResult) {
    return (
      <GameLayout title="Daily Challenge Complete!">
        <div className="text-center max-w-lg mx-auto">
          {/* Main Countdown */}
          <div className="bg-game-dark/90 rounded-lg p-6 mb-6 border border-game-accent/30">
            <h2 className="text-lg font-gaming font-bold text-game-milk mb-2">Next Question Available In:</h2>
            <div className="text-4xl font-gaming font-bold text-yellow-400 mb-2">
              {timeUntilNext}
            </div>
            <p className="text-game-milk/60 text-sm">Hours : Minutes : Seconds</p>
          </div>
          
          <p className="text-game-milk/70 mb-8">Come back tomorrow for a new question</p>

          {/* <button
            onClick={resetForTesting}
            className="game-button-secondary text-sm"
          >
            Reset (Testing)
          </button> */}
        </div>
      </GameLayout>
    )
  }

  // Main Quiz Screen
  return (
    <GameLayout title="Daily BulkTrade Challenge">
      {showResult ? (
        /* Result Screen */
        <div className="text-center">
          <div className={`text-6xl mb-4 ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
            {isCorrect ? 'CORRECT' : 'WRONG'}
          </div>
          <h2 className={`text-2xl font-gaming font-bold mb-4 ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
            {isCorrect ? 'Well Done!' : 'Better Luck Tomorrow'}
          </h2>
          {!isCorrect && (
            <p className="text-game-milk/70 mb-4">
              The correct answer was: <span className="text-green-400 font-semibold">
                {dailyQuestion.options[dailyQuestion.correct]}
              </span>
            </p>
          )}
          <div className="bg-game-dark/70 rounded-lg p-4 mb-6">
            <p className="text-game-milk/70 text-sm mb-2">Your streak:</p>
            <div className="text-3xl font-gaming font-bold text-yellow-400">
              {stats.currentStreak} {stats.currentStreak === 1 ? 'day' : 'days'}
            </div>
          </div>

          {/* Next Question Countdown */}
          <div className="bg-game-dark/90 rounded-lg p-4 mb-6 border border-game-accent/30">
            <p className="text-game-milk/70 text-sm mb-2">Next question in:</p>
            <div className="text-xl font-gaming font-bold text-yellow-400">
              {timeUntilNext}
            </div>
          </div>
          
          <p className="text-game-milk/70 text-sm">Come back tomorrow for a new question!</p>
        </div>
      ) : (
        /* Question Screen */
        <div className="mb-6">
          <div className="game-card bg-game-black/50 p-6 mb-6">
            <p className="text-xl text-game-milk font-medium">{dailyQuestion.question}</p>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {dailyQuestion.options.map((option, index) => {
              const isCorrectOption = index === dailyQuestion.correct;
              const isSelected = index === selectedAnswer;
              
              let buttonClass = "text-left px-6 py-4 rounded-lg border-2 transition-all transform hover:scale-102";
              
              if (!isAnswered) {
                buttonClass += " bg-game-dark/70 border-game-milk/30 hover:border-game-milk hover:bg-game-milk/10";
              } else if (isSelected && isCorrectOption) {
                buttonClass += " bg-green-500/20 border-green-500";
              } else if (isSelected && !isCorrectOption) {
                buttonClass += " bg-red-500/20 border-red-500";
              } else if (isCorrectOption) {
                buttonClass += " bg-green-500/20 border-green-500";
              } else {
                buttonClass += " bg-game-dark/50 border-game-milk/10 opacity-50";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={isAnswered}
                  className={buttonClass}
                >
                  <span className="text-game-milk font-medium">
                    <span className="font-gaming font-bold mr-3">{String.fromCharCode(65 + index)}.</span>
                    {option}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
      
      {/* X Login Prompt */}
      <XLoginPrompt 
        trigger={`Great ${stats.currentStreak}-day streak! Join the global leaderboard!`}
      />
    </GameLayout>
  )
}