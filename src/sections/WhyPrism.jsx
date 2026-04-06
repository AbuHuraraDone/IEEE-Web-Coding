import React from 'react'

const features = [
  {
    title: 'Cutting-Edge Content',
    description: '50+ sessions on AI, quantum computing, and future tech',
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: 'Elite Network',
    description: 'Connect with 2,500+ C-suite executives and innovators',
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10 text-fuchsia-400" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'World-Class Speakers',
    description: 'Learn from pioneers shaping tomorrow’s technology',
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3 6h6l-4.86 3.54L18 18l-6-4-6 4 1.86-6.46L2 8h6l3-6z" />
      </svg>
    ),
  },
  {
    title: 'Global Impact',
    description: 'Be part of a movement transforming industries worldwide',
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10 text-fuchsia-400" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16.5a9 9 0 1 0-18 0" />
        <path d="M12 2v20" />
        <path d="M2 12h20" />
        <path d="M4.5 4.5l15 15" />
        <path d="M19.5 4.5l-15 15" />
      </svg>
    ),
  },
]

function WhyPrism() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto w-full max-w-[1200px]">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">More than just a conference</p>
          <h2 className="mt-4 text-5xl font-semibold tracking-[0.18em] text-white sm:text-6xl">
            WHY PRISM?
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 transition hover:border-cyan-400/20 hover:bg-slate-950/70">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-slate-700 bg-slate-900/80 transition group-hover:border-cyan-400/30">
                {feature.icon}
              </div>
              <h3 className="mt-8 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyPrism
