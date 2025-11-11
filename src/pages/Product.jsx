import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiGet, apiPost } from '../lib/api'

export default function ProductPage() {
  const { slug } = useParams()
  const [data, setData] = useState(null)
  const [reviews, setReviews] = useState([])
  const [form, setForm] = useState({ author: '', rating: 5, content: '', fragrance_slug: '' })

  useEffect(() => {
    apiGet(`/fragrances/${slug}`).then(setData)
    apiGet(`/fragrances/${slug}/reviews`).then(setReviews)
    setForm(f => ({ ...f, fragrance_slug: slug }))
  }, [slug])

  const submit = async (e) => {
    e.preventDefault()
    await apiPost(`/fragrances/${slug}/reviews`, form)
    const r = await apiGet(`/fragrances/${slug}/reviews`)
    setReviews(r)
    setForm({ author: '', rating: 5, content: '', fragrance_slug: slug })
  }

  if (!data) return <div className="min-h-screen flex items-center justify-center">Caricamento…</div>

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="aspect-[3/4] rounded-2xl bg-gradient-to-b from-white to-slate-50 ring-1 ring-black/5" />
          <div>
            <h1 className="text-3xl font-semibold text-slate-800">{data.name}</h1>
            <p className="mt-2 text-slate-600">{data.description}</p>
            <div className="mt-6">
              <h2 className="font-medium text-slate-800">Note olfattive</h2>
              <div className="mt-2 flex flex-wrap gap-2 text-sm">
                {data.notes_top?.map(n => <span key={n} className="px-2 py-1 rounded-full bg-emerald-50 text-emerald-700">{n}</span>)}
                {data.notes_heart?.map(n => <span key={n} className="px-2 py-1 rounded-full bg-teal-50 text-teal-700">{n}</span>)}
                {data.notes_base?.map(n => <span key={n} className="px-2 py-1 rounded-full bg-lime-50 text-lime-700">{n}</span>)}
              </div>
            </div>
            <div className="mt-6">
              <h2 className="font-medium text-slate-800">Ingredienti</h2>
              <ul className="mt-2 list-disc pl-5 text-slate-600">
                {data.ingredients?.map(i => <li key={i}>{i}</li>)}
              </ul>
            </div>
            <div className="mt-8 flex gap-3">
              <button className="px-5 py-2.5 rounded-full bg-emerald-600 text-white">Acquista ora</button>
              <button className="px-5 py-2.5 rounded-full ring-1 ring-emerald-600/40 text-emerald-700">Aggiungi al carrello</button>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-slate-800">Recensioni</h3>
            <div className="mt-4 space-y-4">
              {reviews.length === 0 && <p className="text-slate-600">Ancora nessuna recensione.</p>}
              {reviews.map((r, idx) => (
                <div key={idx} className="rounded-xl border border-slate-200 p-4">
                  <div className="text-sm text-slate-700 font-medium">{r.author} — {"★".repeat(r.rating)}</div>
                  <p className="text-slate-600 mt-1 text-sm">{r.content}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-800">Lascia una recensione</h3>
            <form onSubmit={submit} className="mt-4 grid gap-3">
              <input className="rounded-lg border border-slate-300 px-3 py-2" placeholder="Nome" value={form.author} onChange={e=>setForm({...form, author:e.target.value})} required />
              <select className="rounded-lg border border-slate-300 px-3 py-2" value={form.rating} onChange={e=>setForm({...form, rating:Number(e.target.value)})}>
                {[5,4,3,2,1].map(n=>(<option key={n} value={n}>{n} stelle</option>))}
              </select>
              <textarea className="rounded-lg border border-slate-300 px-3 py-2" rows="4" placeholder="La tua esperienza" value={form.content} onChange={e=>setForm({...form, content:e.target.value})} required />
              <button className="mt-2 px-5 py-2.5 rounded-full bg-emerald-600 text-white">Invia recensione</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
