'use client'

import { useSession } from '@clerk/nextjs'
import { SheetTrigger } from './ui/sheet'

export function HistoryTrigger() {
  const { isSignedIn } = useSession()

  return (
    isSignedIn && (
      <SheetTrigger data-testid="history-trigger-btn">
        <p className="font-medium -tracking-wider text-[13px]">Seu histórico</p>
      </SheetTrigger>
    )
  )
}
