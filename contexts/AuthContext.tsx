'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

interface XUser {
  id: string
  username: string
  name: string
  avatarUrl?: string
  isLinked: boolean
}

interface AuthContextType {
  xUser: XUser | null
  isLoggedIn: boolean
  isLoading: boolean
  loginWithX: () => Promise<void>
  logoutFromX: () => Promise<void>
  showXPrompt: boolean
  setShowXPrompt: (show: boolean) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const { data: session, status } = useSession()
  const [xUser, setXUser] = useState<XUser | null>(null)
  const [showXPrompt, setShowXPrompt] = useState(false)

  const isLoading = status === 'loading'

  // Load saved X account from localStorage or session
  useEffect(() => {
    if (session?.user) {
      // User is authenticated via NextAuth - create X user object
      const xUser: XUser = {
        id: session.user.id || '',
        username: session.user.username || session.user.name?.toLowerCase().replace(/\s+/g, '_') || '',
        name: session.user.name || '',
        avatarUrl: session.user.image || undefined,
        isLinked: true
      }
      setXUser(xUser)
      // Save to localStorage for persistence
      localStorage.setItem('bulkmind_x_user', JSON.stringify(xUser))
      
      // Close any open prompts since user is now logged in
      setShowXPrompt(false)
    } else {
      // No active session - check localStorage for saved user
      const savedUser = localStorage.getItem('bulkmind_x_user')
      if (savedUser) {
        try {
          const parsedUser = JSON.parse(savedUser)
          // Only use saved user if we don't have a conflicting session
          if (!session) {
            setXUser(parsedUser)
          } else {
            // Clear stale localStorage data
            localStorage.removeItem('bulkmind_x_user')
          }
        } catch (error) {
          console.error('Error parsing saved X user:', error)
          localStorage.removeItem('bulkmind_x_user')
        }
      } else {
        setXUser(null)
      }
    }
  }, [session])

  const loginWithX = async () => {
    try {
      // Use NextAuth's signIn with proper redirect handling
      await signIn('twitter', { 
        callbackUrl: window.location.origin,
        redirect: true 
      })
    } catch (error) {
      console.error('Error signing in with X:', error)
      // Show user-friendly error message
      alert('Failed to connect with X. Please try again.')
    }
  }

  const logoutFromX = async () => {
    try {
      await signOut({ redirect: false })
      setXUser(null)
      localStorage.removeItem('bulkmind_x_user')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  const value: AuthContextType = {
    xUser,
    isLoggedIn: !!xUser && !!session,
    isLoading,
    loginWithX,
    logoutFromX,
    showXPrompt,
    setShowXPrompt
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

// Hook to trigger X login prompts at strategic moments
export function useXPromptTrigger() {
  const { setShowXPrompt, isLoggedIn } = useAuth()

  const triggerPrompt = (condition: boolean, delay: number = 1000) => {
    if (!isLoggedIn && condition) {
      setTimeout(() => {
        setShowXPrompt(true)
      }, delay)
    }
  }

  return { triggerPrompt }
}