import { Link as LinkIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/types/projects'

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
                  <Link
                    className="flex shrink-0 items-center justify-center gap-2 rounded-lg bg-purple-600 px-4 py-2 text-primary-foreground hover:bg-purple-600/80 aria-expanded:bg-purple-600 aria-expanded:text-purple-600 [a]:hover:bg-purple-600/80"
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <LinkIcon /> Acessar demo
                  </Link>

                  <Link
                    className="flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-2 hover:border-purple-200 hover:text-white aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50"
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <LinkIcon /> Acessar projeto
                  </Link>
                </div>
              </div>
              <div className="flex h-60 w-full max-w-100 items-center justify-center rounded-[12px] bg-primary md:max-w-135">
                <Image
                  alt={project.title}
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  fill
                  src={project.preview}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
