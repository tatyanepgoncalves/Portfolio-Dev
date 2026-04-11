import Image from 'next/image'
import Link from 'next/link'
import ImageFooter from '@/images/Mountain_Horizon.svg'

export default function CTA() {
  return (
    <footer className="flex h-80 flex-col items-center justify-center py-4">
      <picture className="h-20">
        <Image
          alt="Image ilustrativa de montanhas"
          className="h-full w-full object-cover"
          src={ImageFooter}
        />
      </picture>

      <section className="space-y-2">
        <div className="text-center">
          <h1 className="font-bold font-noto-serif text-4xl text-purple-500">
            T.G.
          </h1>
        </div>

        <div className="space-x-8">
          <Link
            className="font-noto-serif text-footer-link text-xs uppercase tracking-[1.2px]"
            href="https://github.com/tatyanepgoncalves"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </Link>
          <Link
            className="font-noto-serif text-footer-link text-xs uppercase tracking-[1.2px]"
            href="https://www.linkedin.com/in/tatyanegoncalves/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Linkedin
          </Link>
        </div>
      </section>
    </footer>
  )
}
