import { vi, test } from 'vitest'
import { render, renderHook, screen } from '@testing-library/react'
import { useTheme } from 'next-themes'

import { Theme } from './theme'

test.skip('must change the theme after clicking the button', async () => {
  render(<Theme />)

  // const component = screen.getByTestId('change-theme-btn')
  // const { result } = renderHook(useTheme)

  // console.log(component)
  // console.log(result.current)

  // await userEvent.click(component)
  // expect(result.current.setTheme).toHaveBeenCalled()
})
