import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiGet } from '../lib/api'

export default function BlogPost() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    apiGet(`/blog/${slug}`).then(setPost)
  }, [slug])

  if (!post) return <div className="min-h-screen flex items-center justify-center">Caricamento…</div>

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-semibold text-slate-800">{post.title}</h1>
        <div className="mt-6 prose max-w-none">
          <p className="text-slate-700 whitespace-pre-wrap">{post.content}</p>
        </div>
      </div>
    </div>
  )
}
