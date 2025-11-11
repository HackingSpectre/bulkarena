'use client'

import { useLoading } from '@/contexts/LoadingContext'

export default function MainWrapper({ children }: { children: React.ReactNode }) {
  const { isAppLoading } = useLoading()

  return (
    <main className={isAppLoading ? '' : 'pt-16'}>
      {children}
    </main>
  )
}