import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-full bg-white/70 backdrop-blur px-4 py-3 ring-1 ring-black/5">
          <a href="/" className="font-semibold text-slate-800">BioDeo</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            <a href="/" className="hover:text-emerald-700">Home</a>
            <a href="#fragranze" className="hover:text-emerald-700">Fragranze</a>
            <a href="/sostenibilita" className="hover:text-emerald-700">Sostenibilità</a>
            <a href="/blog" className="hover:text-emerald-700">Blog</a>
            <a href="/contatti" className="hover:text-emerald-700">Contatti</a>
          </nav>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
        {open && (
          <div className="mt-2 md:hidden rounded-2xl bg-white/80 backdrop-blur p-4 ring-1 ring-black/5">
            <div className="grid gap-2 text-sm">
              <a href="/" className="py-2">Home</a>
              <a href="#fragranze" className="py-2">Fragranze</a>
              <a href="/sostenibilita" className="py-2">Sostenibilità</a>
              <a href="/blog" className="py-2">Blog</a>
              <a href="/contatti" className="py-2">Contatti</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
