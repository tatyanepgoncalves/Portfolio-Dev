import SwiperSkills from './swiper-skills'

export default function Habilidades() {
  return (
    <section
      className="flex w-full items-center justify-center px-4"
      id="habilidades"
    >
      <div className="w-full space-y-26">
        <h2 className="text-center font-heading font-semibold text-2xl text-white">
          Habilidades
        </h2>

        <SwiperSkills />
      </div>
    </section>
  )
}
