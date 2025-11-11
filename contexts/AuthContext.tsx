'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

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
  logout: () => void
  showXPrompt: boolean
  setShowXPrompt: (show: boolean) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [xUser, setXUser] = useState<XUser | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [showXPrompt, setShowXPrompt] = useState(false)

  // Load saved X account from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('bulkmind_x_user')
    if (savedUser) {
      try {
        setXUser(JSON.parse(savedUser))
      } catch (error) {
        console.error('Error parsing saved X user:', error)
        localStorage.removeItem('bulkmind_x_user')
      }
    }
    setIsLoading(false)
  }, [])

  const loginWithX = async () => {
    try {
      setIsLoading(true)
      
      // For now, use next-auth signIn
      // This will redirect to Twitter OAuth
      const { signIn } = await import('next-auth/react')
      await signIn('twitter', { callbackUrl: window.location.origin })
      
    } catch (error) {
      console.error('Error signing in with X:', error)
      setIsLoading(false)
    }
  }

  const logout = () => {
    setXUser(null)
    localStorage.removeItem('bulkmind_x_user')
    
    // Sign out from next-auth as well
    import('next-auth/react').then(({ signOut }) => {
      signOut({ callbackUrl: window.location.origin })
    })
  }

  // Save user to localStorage when it changes
  useEffect(() => {
    if (xUser) {
      localStorage.setItem('bulkmind_x_user', JSON.stringify(xUser))
    }
  }, [xUser])

  const value: AuthContextType = {
    xUser,
    isLoggedIn: !!xUser,
    isLoading,
    loginWithX,
    logout,
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