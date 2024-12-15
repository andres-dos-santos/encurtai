'use client'

import { Copy } from 'lucide-react'
import { toast } from 'sonner'

type Props = {
  shortUrl: string
}

export function CopyToClipboard({ shortUrl }: Props) {
  async function handleCopyToClipboard() {
    await navigator.clipboard.writeText(
      'https://lkei.vercel.app/api/' + shortUrl,
    )

    toast('✅ Link copied!')
  }

  return (
    <button onClick={handleCopyToClipboard} data-testid="cp-to-clipboard-btn">
      <Copy className="size-4 text-zinc-500 dark:text-zinc-300" />
    </button>
  )
}
