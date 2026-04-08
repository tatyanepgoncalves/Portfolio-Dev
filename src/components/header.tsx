'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const menuLink = [
  { title: 'Início', href: '#hero' },
  { title: 'Sobre', href: '#sobre' },
  { title: 'Projetos', href: '#projetos' },
  { title: 'Habilidades', href: '#habilidades' },
  { title: 'Contato', href: '#contato' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="flex w-full items-center justify-center bg-background px-8 py-6">
      <div className="flex w-full max-w-7xl items-center justify-center gap-16 rounded-[80px] border border-primary py-4">
        <Link className="font-normal text-white text-xl" href="#hero">
          T.G
        </Link>

        <nav className="space-x-4 text-sm tracking-[0.45px]">
          {menuLink.map((link) => {
            const isActive = pathname === link.href

            return (
              <Link
                className={cn(
                  'p-2 transition-colors duration-300 hover:border-b hover:border-b-border hover:text-primary',
                  isActive
                    ? 'border-b border-b-border text-primary'
                    : 'text-neutral-200'
                )}
                href={link.href}
                key={link.title}
              >
                {link.title}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
