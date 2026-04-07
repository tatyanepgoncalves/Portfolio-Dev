import type { Metadata } from 'next'
import { Noto_Sans, Space_Grotesk } from 'next/font/google'
import './globals.css'

const notoSans = Noto_Sans({
  variable: '--font-noto-sans',
  subsets: ['latin'],
})

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio de Tatyane Gonçalves',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      className={` ${spaceGrotesk.variable} ${notoSans.variable} h-full antialiased`}
      lang="pt-BR"
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-zinc-950 text-zinc-100">
        {children}
      </body>
    </html>
  )
}
