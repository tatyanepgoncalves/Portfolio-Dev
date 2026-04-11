import type { Metadata } from 'next'
import { Outfit, Poppins, Roboto } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import Footer from '@/components/footer'
import Header from '@/components/header/header'
import Bg from '@/images/bg.png'
import { cn } from '@/lib/utils'

const robotoHeading = Roboto({ subsets: ['latin'], variable: '--font-heading' })

const outfit = Outfit({ subsets: ['latin'], variable: '--font-sans' })

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
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
      className={cn(
        'flex',
        'h-full',
        'flex-col',
        'antialiased',
        roboto.variable,
        poppins.variable,
        'font-sans',
        outfit.variable,
        robotoHeading.variable
      )}
      lang="pt-BR"
      suppressHydrationWarning
    >
      <body
        className="relative min-h-screen w-full font-poppins"
        suppressHydrationWarning
      >
        <div className="absolute top-0 -z-10 h-screen w-full">
          <Image
            alt="Image de fundo"
            className="h-screen w-full bg-no-repeat object-cover"
            fill
            src={Bg}
          />
        </div>
        <Header />
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  )
}
