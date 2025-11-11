import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { apiGet } from '../lib/api'

const accents = {
  'rosa-delicata': 'from-rose-200 to-rose-100',
  'mandarino-fresco': 'from-orange-200 to-orange-100',
  'zenzero-puro': 'from-amber-200 to-amber-100',
  'bosco-morbido': 'from-emerald-200 to-emerald-100',
  'vaniglia-setosa': 'from-stone-200 to-stone-100',
}

export default function FragranceGrid() {
  const [items, setItems] = useState([])

  useEffect(() => {
    apiGet('/fragrances')
      .then(setItems)
      .catch(() => setItems([]))
  }, [])

  return (
    <section id="fragranze" className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-800">Le 5 Fragranze</h2>
        <p className="mt-2 text-slate-600">Ogni personalità trova il suo equilibrio naturale.</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((f, i) => (
            <motion.a
              key={f.slug}
              href={`/prodotti/${f.slug}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05 }}
              className={`group rounded-2xl bg-gradient-to-b ${accents[f.slug] || 'from-slate-100 to-white'} p-6 ring-1 ring-black/5 hover:shadow-xl transition block`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">{f.name}</h3>
                  <p className="text-sm text-slate-600">{f.tagline}</p>
                </div>
                <div className="h-20 w-14 rounded-lg bg-white/70 backdrop-blur ring-1 ring-black/5" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {f.notes_top?.slice(0,2).map(n => (
                  <span key={n} className="text-xs px-2 py-1 rounded-full bg-white/60 ring-1 ring-black/5 text-slate-700">{n}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
