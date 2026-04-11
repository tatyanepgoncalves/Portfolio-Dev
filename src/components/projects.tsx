import { Image, Link as LinkIcon } from 'lucide-react'
import Link from 'next/link'
import { projects } from '@/types/projects'
import { Button } from './ui/button'

export default function Projects() {
  return (
    <section className="flex w-full items-center justify-center" id="projetos">
      <div className="w-full max-w-7xl space-y-26">
        <h2 className="text-center font-semibold text-2xl text-white capitalize">
          Meus projetos
        </h2>

        <div className="grid w-full grid-cols-1 place-items-center gap-4 space-y-20 md:place-content-center md:space-y-0 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              className="flex w-full max-w-md flex-col-reverse items-center justify-between gap-4 rounded-lg px-4 py-6 transition-all duration-500 hover:border hover:shadow-purple-600/30 hover:shadow-xl md:h-87.5 md:max-w-xl"
              key={project.title}
            >
              <div className="w-full space-y-5 px-2">
                <div className="space-y-2">
                  <h3 className="font-medium text-neutral-50 text-xl">
                    {project.title}
                  </h3>
                  <p className="text-neutral-100 text-sm">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Button type="button" variant="default">
                    <Link
                      className="flex items-center justify-center gap-2"
                      href={project.link}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <LinkIcon /> Acessar demo
                    </Link>
                  </Button>

                  <Button type="button" variant="outline">
                    <Link
                      className="flex items-center justify-center gap-2"
                      href={project.link}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <LinkIcon /> Acessar projeto
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex h-60 w-full max-w-100 items-center justify-center rounded-[12px] bg-primary md:max-w-135">
                <Image />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
