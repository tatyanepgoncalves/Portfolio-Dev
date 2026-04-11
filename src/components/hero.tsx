import Image from 'next/image'
import Ilustration from '@/images/ilustration.svg'

export default function Hero() {
  return (
    <section
      className="flex h-[90vh] w-full items-center justify-center px-6"
      id="hero"
    >
      <div className="flex w-full max-w-7xl flex-col items-center justify-center md:justify-between lg:flex-row">
        <section className="space-y-2 text-center md:max-w-125 lg:text-left">
          <h1 className="font-heading text-2xl text-white tracking-[1.2px] md:text-3xl">
            Projetando Experiências{' '}
            <span className="font-semibold text-purple-600">Digitais.</span>{' '}
            Construindo Soluções Robustas.
          </h1>

          <p className="text-neutral-200 text-sm">
            Unindo a excelência estética à precisão arquitetônica. Uma abordagem
            celestial à engenharia full-stack e à UX de alta fidelidade.
          </p>
        </section>

        <picture className="flex w-full max-w-xs items-center justify-center md:max-w-md">
          <Image
            alt="Ilustração"
            className="w-full"
            priority
            src={Ilustration}
            width={100}
          />
        </picture>
      </div>
    </section>
  )
}
