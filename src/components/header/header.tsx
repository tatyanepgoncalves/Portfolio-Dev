'use client'

import Link from 'next/link'
import MenuDesktop from './menu-desktop'
import MenuMobile from './menu-mobile'

export default function Header() {
  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-center bg-background px-6 py-4">
      <div className="flex w-full max-w-7xl items-center justify-between">
        <Link
          className="font-medium text-lg text-white tracking-[1.5px]"
          href="#hero"
        >
          T.G
        </Link>

        <div className="block md:hidden">
          <MenuMobile />
        </div>

        <MenuDesktop />
      </div>
    </header>
  )
}
