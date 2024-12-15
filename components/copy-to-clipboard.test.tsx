import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { nanoid } from 'nanoid'

import { CopyToClipboard } from './copy-to-clipboard'

const shortUrl = nanoid(4)

test('must copy a text to the clipboard', async () => {
  render(<CopyToClipboard shortUrl={shortUrl} />)

  const component = await screen.findByTestId('cp-to-clipboard-btn')

  await userEvent.click(component)

  if (navigator.clipboard) {
    const copiedText = await navigator.clipboard.readText()
    expect(copiedText).toEqual('https://lkei.vercel.app/api/' + shortUrl)
  }
})
