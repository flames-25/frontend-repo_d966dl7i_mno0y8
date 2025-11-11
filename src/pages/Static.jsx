export function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-semibold text-slate-800">Chi Siamo</h1>
        <p className="mt-4 text-slate-600">Crediamo in un benessere che rispetta il pianeta. La nostra linea nasce dall'incontro tra ricerca, ingredienti biodegradabili e design responsabile.</p>
        <p className="mt-4 text-slate-600">Produciamo in piccoli lotti, utilizziamo packaging riciclabile e compensiamo le emissioni lungo tutta la filiera.</p>
      </div>
    </div>
  )
}

export function Sustainability() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-semibold text-slate-800">Sostenibilità</h1>
        <ul className="mt-6 space-y-3 text-slate-700 list-disc pl-5">
          <li>Ingredienti biodegradabili e tracciati</li>
          <li>Packaging riciclabile e privo di plastica vergine</li>
          <li>Produzione alimentata da energia rinnovabile</li>
          <li>Certificazioni cruelty-free e vegan</li>
        </ul>
      </div>
    </div>
  )
}

export function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-semibold text-slate-800">Contatti</h1>
        <form action="#" className="mt-6 grid gap-3">
          <input className="rounded-lg border border-slate-300 px-3 py-2" placeholder="Nome" />
          <input className="rounded-lg border border-slate-300 px-3 py-2" placeholder="Email" />
          <textarea rows="4" className="rounded-lg border border-slate-300 px-3 py-2" placeholder="Messaggio" />
          <button className="mt-2 px-5 py-2.5 rounded-full bg-emerald-600 text-white">Invia</button>
        </form>
        <div className="mt-6 text-slate-600 text-sm">
          <p>Email: hello@biodeo.example</p>
          <p>Tel: +39 02 1234 5678</p>
          <p>Seguici: Instagram, Facebook</p>
        </div>
      </div>
    </div>
  )
}
