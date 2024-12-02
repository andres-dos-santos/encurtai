'use client'

import { ArrowRight } from 'lucide-react'
import { toast } from 'sonner'

import { onCreateUrl } from '@/app/actions'

import { Checkbox } from './ui/checkbox'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useState } from 'react'
import QRCode from 'react-qr-code'
import { Input, InputLabel } from './ui/input'

export function CreateShortUrlForm() {
  const [url, setUrl] = useState<string | null>(null)

  async function submit(formData: FormData) {
    const url = formData.get('url')
    const qrCode = formData.get('qr-code')

    if (url) {
      const data = await onCreateUrl(url.toString())

      if (data) {
        toast('Seu link foi encurtado!')
      }

      if (qrCode === 'on') {
        setUrl(url.toString())
      }
    } else {
      toast('Você passou a URL?')
    }
  }

  return (
    <>
      <form action={submit} className="flex flex-col gap-3">
        <Input name="url">
          <InputLabel>Seu link</InputLabel>
        </Input>

        {/* <Input name="description">
        <InputLabel>Uma descrição</InputLabel>
      </Input> */}

        <footer className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <Checkbox name="qr-code" />
            <p className="text-[13px]">Gerar QRCode também</p>
          </div>

          <button
            type="submit"
            className="flex items-center w-52 justify-center h-10 bg-zinc-900 dark:bg-white rounded-[2px] hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all duration-200"
          >
            <ArrowRight className="text-secondary dark:text-primary size-4" />{' '}
            <p className="text-[13px] font-medium text-secondary dark:text-primary">
              Encurte isso
            </p>
          </button>
        </footer>
      </form>

      <Dialog open={!!url} onOpenChange={() => setUrl(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <span className="text-zinc-500">Agora é só</span> compartilhar
            </DialogTitle>
            <DialogDescription>
              Compartilhe seu link através do código QR.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col items-center justify-center mt-5">
            {url && (
              <div className="p-2 border border-dashed border-primary">
                <QRCode value={url} />
              </div>
            )}

            <button
              type="button"
              className="flex items-center w-[92.5%] mt-5 justify-center h-9 bg-zinc-900 dark:bg-white rounded-[2px] hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all duration-200"
            >
              <ArrowRight className="text-secondary dark:text-primary size-4" />{' '}
              <p className="text-[13px] font-medium text-secondary dark:text-primary">
                Copiar
              </p>
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}