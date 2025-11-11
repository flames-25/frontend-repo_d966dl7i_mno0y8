import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-violet-50 to-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-20 pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-semibold text-slate-800 tracking-tight"
        >
          Deodoranti Biodegradabili
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600"> Naturali</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-6 max-w-2xl text-lg text-slate-600"
        >
          Formula delicata su pelle e pianeta. Cinque fragranze uniche unite da un filo di naturalità.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a href="#fragranze" className="px-5 py-2.5 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition">Scopri le fragranze</a>
          <a href="/sostenibilita" className="px-5 py-2.5 rounded-full bg-white text-emerald-700 ring-1 ring-emerald-600/40 hover:bg-emerald-50 transition">Sostenibilità</a>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}
