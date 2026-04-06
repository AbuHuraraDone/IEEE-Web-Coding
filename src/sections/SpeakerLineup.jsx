import React from 'react'

const speakers = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief AI Officer',
    company: 'NeuralCore',
    accent: 'text-cyan-400',
    gradient: 'from-slate-800 via-slate-900 to-slate-950',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'VP of Innovation',
    company: 'Quantum Labs',
    accent: 'text-fuchsia-400',
    gradient: 'from-slate-800 via-slate-900 to-slate-950',
  },
  {
    name: 'Alex Kim',
    role: 'Founder & CEO',
    company: 'FutureStack',
    accent: 'text-cyan-400',
    gradient: 'from-slate-800 via-slate-900 to-slate-950',
  },
  {
    name: 'Jordan Taylor',
    role: 'Design Director',
    company: 'PrismUI',
    accent: 'text-fuchsia-400',
    gradient: 'from-slate-800 via-slate-900 to-slate-950',
  },
]

function SpeakerLineup() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto w-full max-w-[1200px]">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Industry pioneers sharing breakthrough insights</p>
          <h2 className="mt-4 text-5xl font-semibold tracking-[0.18em] text-white sm:text-6xl">
            SPEAKER LINEUP
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {speakers.map((speaker) => (
            <div key={speaker.name} className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 shadow-xl shadow-slate-950/20 transition hover:border-cyan-400/20 hover:bg-slate-900/90">
              <div className={`relative h-80 overflow-hidden bg-gradient-to-br ${speaker.gradient}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_35%)]" />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/95 to-transparent" />
                <div className="absolute left-4 top-4 h-16 w-16 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl" />
              </div>
              <div className="space-y-3 p-6">
                <h3 className="text-xl font-semibold text-white">{speaker.name}</h3>
                <p className={`text-sm font-medium ${speaker.accent}`}>{speaker.role}</p>
                <p className="text-sm text-slate-400">{speaker.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SpeakerLineup
