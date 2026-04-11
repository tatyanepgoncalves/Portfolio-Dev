import Contato from '@/components/contato'
import Habilidades from '@/components/habilidades/habilidades'
import Hero from '@/components/hero'
import Projects from '@/components/projects'
import Sobre from '@/components/sobre'

export default function Home() {
  return (
    <div className="mb-20 space-y-37.5">
      <Hero />
      <Sobre />
      <Projects />
      <Habilidades />
      <Contato />
    </div>
  )
}
