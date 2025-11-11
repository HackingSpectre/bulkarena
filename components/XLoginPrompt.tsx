'use client'

import { useAuth } from '@/contexts/AuthContext'

interface XLoginPromptProps {
  trigger: string
  onClose?: () => void
}

export default function XLoginPrompt({ trigger, onClose }: XLoginPromptProps) {
  const { showXPrompt, setShowXPrompt, loginWithX, isLoading } = useAuth()

  const handleClose = () => {
    setShowXPrompt(false)
    onClose?.()
  }

  const handleLogin = async () => {
    try {
      await loginWithX()
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  if (!showXPrompt) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-game-black/80 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative game-card max-w-md w-full mx-4 text-center">
        <div className="mb-6">
          <h2 className="text-2xl font-gaming font-bold text-game-milk mb-2 game-text-glow">
            Join the Community
          </h2>
          <p className="text-game-milk/70 text-sm mb-4">
            Connect your X account to unlock:
          </p>
          
          {/* Benefits List */}
          <div className="text-left space-y-2 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="text-game-milk/80">Global leaderboards</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-game-milk/80">Founder reward eligibility</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-game-milk/80">Community gallery uploads</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span className="text-game-milk/80">Save progress across devices</span>
            </div>
          </div>

          {/* Trigger reason */}
          <div className="bg-game-dark/50 rounded-lg p-3 mb-6">
            <p className="text-game-milk/60 text-sm">
              {trigger}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleLogin}
            disabled={isLoading}
            className="flex-1 game-button font-gaming flex items-center justify-center gap-2"
          >
            {isLoading ? (
              'Connecting...'
            ) : (
              <>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                Continue with X
              </>
            )}
          </button>
          
          <button
            onClick={handleClose}
            className="flex-1 game-button-secondary font-gaming"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  )
}