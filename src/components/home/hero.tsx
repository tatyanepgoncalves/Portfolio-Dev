export default function Hero() {
  return (
    <section className="relative flex max-h-screen w-full flex-col items-center justify-center gap-10">
      {/* <div className="">
        <Image
          alt="Imagem ilustrativa para plano de fundo"
          className="-z-10 object-cover"
          src={ImageBg}
        />
      </div> */}

      <div className="flex w-fit items-center gap-2 rounded-xl bg-overlay px-3 py-1">
        <p className="font-space-grotesk text-foreground text-xs tracking-[2px]">
          Disponível para novos projetos.
        </p>
        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
      </div>

      <div className="w-full max-w-100 space-y-4 text-center">
        <h1 className="font-noto-serif text-4xl text-heading capitalize">
          Projetando experiências{' '}
          <span className="text-heading2"> digitais.</span> Construindo soluções
          robustas.
        </h1>

        <p className="font-light font-space-grotesk text-foreground text-xs">
          Unindo a excelência estética à precisão arquitetônica. Uma abordagem
          celestial para engenharia full-stack e UX de alta fidelidade.
        </p>
      </div>
    </section>
  )
}
