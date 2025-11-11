export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} BioDeo — Tutti i diritti riservati</p>
        <div className="flex gap-4 text-sm text-slate-600">
          <a href="/privacy" className="hover:text-emerald-700">Privacy</a>
          <a href="/termini" className="hover:text-emerald-700">Termini</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-emerald-700">Instagram</a>
        </div>
      </div>
    </footer>
  )
}
