import React from 'react'

const metrics = [
  { value: '50+', label: 'World-Class Speakers', accent: 'text-cyan-400' },
  { value: '100+', label: 'Interactive Sessions', accent: 'text-fuchsia-400' },
  { value: '2.5K+', label: 'Tech Leaders', accent: 'text-cyan-400' },
  { value: '85%', label: 'Would Recommend', accent: 'text-fuchsia-400' },
]

function Stats() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto w-full max-w-[1200px]">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 text-center shadow-xl shadow-slate-950/20 transition hover:border-cyan-400/20 hover:bg-slate-900/90">
              <p className={`text-5xl font-semibold ${metric.accent}`}>{metric.value}</p>
              <p className="mt-4 text-sm uppercase tracking-[0.24em] text-slate-300">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
