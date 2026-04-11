import Image from 'next/image'
import Link from 'next/link'
import { infoContato } from '@/types/contato'

export default function Contato() {
  return (
    <section className="flex w-full items-center justify-center" id="contato">
      <div className="flex w-full max-w-7xl flex-col items-center justify-center space-y-26">
        <h2 className="font-semibold text-2xl text-white lg:text-5xl">
          Contato
        </h2>
        <section className="grid items-center justify-between gap-6 md:grid-cols-2 lg:grid-cols-4">
          {infoContato.map((info) => {
            return (
              <Link
                className="flex h-60 w-60 flex-col items-center justify-center space-y-3"
                href={info.href || '#'}
                key={info.title}
              >
                <div className="space-y-2">
                  <div className="h-20 w-20 rounded-full bg-purple-600/30 p-6">
                    <Image alt={info.title} src={info.icon} />
                  </div>

                  <h3 className="text-center font-bold text-sm text-white">
                    {info.title}
                  </h3>
                </div>
                <p className="text-[10px] text-zinc-300">{info.info}</p>
              </Link>
            )
          })}
        </section>
      </div>
    </section>
  )
}
