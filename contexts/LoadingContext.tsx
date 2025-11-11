'use client'

import { createContext, useContext, useState, useEffect } from 'react'

interface LoadingContextType {
  isAppLoading: boolean
  setAppLoading: (loading: boolean) => void
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isAppLoading, setIsAppLoading] = useState(true)

  const setAppLoading = (loading: boolean) => {
    setIsAppLoading(loading)
  }

  return (
    <LoadingContext.Provider value={{ isAppLoading, setAppLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}

export function useLoading() {
  const context = useContext(LoadingContext)
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider')
  }
  return context
}