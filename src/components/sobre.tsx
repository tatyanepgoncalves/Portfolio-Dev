import { Button } from './ui/button'

export default function Sobre() {
  return (
    <section
      className="flex w-full items-center justify-center px-6"
      id="sobre"
    >
      <div className="w-full max-w-7xl space-y-8">
        <h2 className="text-2xl text-white">
          Oi, eu sou <span className="text-primary">Tatyane Gonçalves</span>
        </h2>

        <div className="space-y-3 text-justify text-neutral-100 text-sm">
          <p>
            Sou estudante de Bacharelado em Sistemas de Informação e atualmente
            estou cursando uma Formação Full Stack para expandir minhas
            habilidades técnicas. Desde muito nova, tenho uma curiosidade
            natural por tecnologia, o que me levou a explorar diferentes áreas
            da computação, especialmente o Desenvolvimento Frontend.
          </p>
          <p>
            Com experiência em HTML, CSS, JS e criações visuais para redes
            sociais, me dedico a criar interfaces funcionais e esteticamente
            agradáveis. Busco constantemente aprimorar minhas habilidades e me
            manter atualizada sobre as melhores práticas do setor, com o
            objetivo de desenvolver soluções que unam design e tecnologia.
          </p>
          <p>
            Estou aberta a novas oportunidades e desafios que me permitam
            crescer profissionalmente e aplicar meus conhecimentos em projetos
            inovadores.
          </p>
        </div>

        <Button className="w-full max-w-55 rounded-lg px-10 py-4">
          Baixar currículo
        </Button>
      </div>
    </section>
  )
}
