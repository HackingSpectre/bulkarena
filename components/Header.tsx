'use client'

import { useAuth } from '@/contexts/AuthContext'
import { useLoading } from '@/contexts/LoadingContext'

export default function Header() {
  const { isLoggedIn, loginWithX, xUser } = useAuth()
  const { isAppLoading } = useLoading()

  // Don't render header during app loading
  if (isAppLoading) {
    return null
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-game-black/90 backdrop-blur-md border-b border-game-milk/20">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-game-milk game-text-glow">
            BulkArena
          </div>
        </div>

        {/* X Connection Status */}
        <div className="flex items-center space-x-4">
          {!isLoggedIn ? (
            <button
              onClick={loginWithX}
              className="flex items-center space-x-2 bg-game-dark/80 hover:bg-game-milk/10 text-game-milk px-4 py-2 rounded-lg transition-all duration-200 border border-game-milk/30 hover:border-game-milk/60"
            >
              {/* X/Twitter Icon */}
              <svg 
                className="w-5 h-5" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span className="font-medium">Connect X</span>
            </button>
          ) : (
            <div className="flex items-center space-x-3">
              {/* Connected User Info */}
              <div className="flex items-center space-x-2 bg-green-900/30 text-green-200 px-3 py-2 rounded-lg border border-green-600/50">
                <svg 
                  className="w-4 h-4 text-green-400" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span className="text-sm font-medium">
                  @{xUser?.username || xUser?.name}
                </span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}