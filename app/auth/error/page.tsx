'use client'

import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useEffect, useState, Suspense } from 'react'

function AuthErrorContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [error, setError] = useState('')
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    const errorParam = searchParams.get('error')
    
    switch (errorParam) {
      case 'Configuration':
        setError('There is a problem with the X authentication configuration.')
        break
      case 'AccessDenied':
        setError('You denied access to the application.')
        break
      case 'Verification':
        setError('The token used to verify you is not valid or has expired.')
        break
      case 'OAuthCallback':
        setError('There was an error during the X authentication process.')
        break
      default:
        setError('An unknown error occurred during authentication.')
    }

    // Countdown and redirect
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          router.push('/')
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [searchParams, router])

  return (
    <div className="min-h-screen bg-game-black flex items-center justify-center p-4">
      <div className="game-card max-w-md w-full text-center">
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/20 flex items-center justify-center">
            <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 20.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          
          <h1 className="text-2xl font-bold text-game-milk mb-2">Authentication Error</h1>
          
          <p className="text-game-milk/70 mb-6">
            {error}
          </p>
          
          <div className="text-sm text-game-milk/50">
            Redirecting to home in {countdown} seconds...
          </div>
        </div>
        
        <div className="space-y-3">
          <button
            onClick={() => router.push('/')}
            className="w-full game-button"
          >
            Return to Home
          </button>
          
          <button
            onClick={() => router.back()}
            className="w-full game-button-secondary"
          >
            Go Back
          </button>
        </div>
        
        <div className="mt-6 p-3 bg-game-milk/5 rounded-lg">
          <p className="text-xs text-game-milk/60">
            If this error persists, please check your internet connection or try again later.
          </p>
        </div>
      </div>
    </div>
  )
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-game-black flex items-center justify-center p-4">
      <div className="game-card max-w-md w-full text-center">
        <div className="animate-pulse">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-game-milk/20"></div>
          <div className="h-6 bg-game-milk/20 rounded mb-4"></div>
          <div className="h-4 bg-game-milk/10 rounded"></div>
        </div>
      </div>
    </div>
  )
}

export default function AuthError() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <AuthErrorContent />
    </Suspense>
  )
}