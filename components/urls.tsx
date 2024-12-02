import { Url } from '@prisma/client'
import { Copy } from 'lucide-react'

import { OpenUrl } from './open-url'

export function Urls({ urls }: { urls: Url[] }) {
  return (
    <ul className="px-10 min-h-screen border-l">
      <li className="mb-5 flex gap-1 items-baseline mt-[84px]">
        <p className=" font-medium -tracking-wide">Historic</p>
        <p className="text-[13px]">{urls.length}</p>
      </li>

      {urls.length > 0 ? (
        <>
          {urls.map((item) => (
            <li
              key={item.id}
              className="dark:even:bg-zinc-800 even:bg-zinc-50 flex items-center justify-between h-10 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800/50 px-2.5"
            >
              <OpenUrl id={item.id} shortUrl={item.shortUrl} />

              <div className="flex items-center gap-2.5">
                <Copy className="size-4 text-zinc-500" />
                <p className="text-sm text-zinc-500">{item.visits} views</p>
              </div>
            </li>
          ))}
        </>
      ) : (
        <li className="flex mt-96 items-center justify-center">
          <p className="text-[13px] text-zinc-400">The list is empty.</p>
        </li>
      )}
    </ul>
  )
}