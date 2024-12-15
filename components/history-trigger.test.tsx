import { vi, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'

import { HistoryTrigger } from './history-trigger'

vi.mock('@clerk/nextjs', () => ({
  useSession: vi.fn(() => ({ isSignedIn: true })),
}))

test.skip('should render if logged in', async () => {
  render(<HistoryTrigger />)

  const component = await screen.findByTestId('history-trigger-btn')

  expect(component).toBeDefined()
})
