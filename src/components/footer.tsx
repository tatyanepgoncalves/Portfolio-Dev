import CTA from './cta'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <div>
      <CTA />

      <footer className="bg-footer py-10 text-white">
        <div className="container mx-auto px-4">
          <p className="text-center font-poppins text-xs text-zinc-200 tracking-[1.5px]">
            &copy; {year} T.G. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
