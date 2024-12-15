import { expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Profile } from './profile'

vi.mock('@clerk/nextjs', () => ({
  useSession: () => ({
    session: {},
    isSignedIn: true,
  }),
}))

test.skip('should correctly render the component', async () => {
  render(<Profile />)

  const component = screen.getByTestId('p-has-no-account')

  expect(component.textContent).toContain('Ainda não tem conta?')
})
