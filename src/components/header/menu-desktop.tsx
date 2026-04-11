import Link from 'next/link'
import { cn } from '@/lib/utils'
import { menuLink } from '@/types/menu'

export default function MenuDesktop() {
  return (
    <nav className="hidden items-center gap-4 md:flex">
      {menuLink.map((link) => {
        return (
          <Link
            className={cn(
              'px-2 py-1 text-sm text-zinc-100 hover:border-b hover:border-b-purple-600'
            )}
            href={link.href}
            key={link.href}
          >
            {link.title}
          </Link>
        )
      })}
    </nav>
  )
}
