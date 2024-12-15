import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

import { Toaster } from './sonner'
import { toast } from 'sonner'

test.skip('deve mostrar um toast na tela', () => {
  render(<Toaster />)

  toast('Esse é o toast!')

  const component = screen.getByTestId('sonner')

  expect(component).toBeDefined()
})
