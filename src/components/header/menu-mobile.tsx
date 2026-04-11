import { Menu } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { menuLink } from '@/types/menu'
import { Button } from '../ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'

export default function MenuMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent className="bg-background">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-4 px-4">
          {menuLink.map((link) => {
            return (
              <SheetClose asChild key={link.href}>
                <Link
                  className={cn(
                    'py-1 text-sm text-zinc-200 hover:border-b hover:border-b-purple-600 hover:text-zinc-50'
                  )}
                  href={link.href}
                >
                  {link.title}
                </Link>
              </SheetClose>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
