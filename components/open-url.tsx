'use client'

import { addVisit } from '@/app/actions'
import { useRouter } from 'next/navigation'

type Props = {
  shorturl: string
  originalurl: string
  id: string
}

export function OpenUrl({ originalurl, shorturl }: Props) {
  const { push } = useRouter()

  async function handleOpenUrl() {
    await addVisit(shorturl)

    push(originalurl)
  }

  return (
    <button data-testid="open-url-btn" onClick={handleOpenUrl}>
      <p
        data-testid="short-url-p"
        className="text-[13px] text-zinc-700 dark:text-white group-hover:underline font-medium text-left"
      >
        https://linkei/{shorturl}
      </p>
      <p
        data-testid="original-url-p"
        className="text-[11px] text-zinc-500 dark:text-zinc-300 line-clamp-1 truncate"
      >
        {originalurl}
      </p>
    </button>
  )
}
