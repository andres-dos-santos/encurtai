'use server'

import { api } from '@/lib/api'

export async function onCreateUrl(url: string) {
  if (url) {
    const response = await api('shorten', {
      method: 'POST',
      body: JSON.stringify({ url }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (response.ok) {
      const data = await response.json()

      return data
    }
  }
}
