import { useEffect, useState } from 'react'
import { apiGet } from '../lib/api'

export default function Blog() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    apiGet('/blog').then(setPosts).catch(()=>setPosts([]))
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-3xl font-semibold text-slate-800">Blog & News</h1>
        <p className="mt-2 text-slate-600">Ingredienti naturali, consigli sostenibili e aggiornamenti dal brand.</p>
        <div className="mt-8 grid gap-6">
          {posts.length === 0 && <p className="text-slate-600">Nessun articolo pubblicato al momento.</p>}
          {posts.map(p => (
            <a key={p.slug} href={`/blog/${p.slug}`} className="group rounded-xl border border-slate-200 p-5 hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-slate-800 group-hover:text-emerald-700">{p.title}</h3>
              <p className="mt-1 text-slate-600 text-sm">{p.excerpt}</p>
              <div className="mt-2 text-xs text-slate-500">{p.tags?.join(' · ')}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
