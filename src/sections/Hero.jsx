import React from 'react'

const countdown = [
  { value: '168', label: 'DAYS' },
  { value: '12', label: 'HOURS' },
  { value: '10', label: 'MINS' },
  { value: '4', label: 'SECS' },
]

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 py-16 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),_transparent_45%)]" />
      <div className="absolute right-[-20%] top-12 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="relative mx-auto w-full max-w-[1200px]">
        <div className="text-center">
          <p className="mx-auto mb-4 inline-flex rounded-full border border-cyan-400/20 bg-slate-900/70 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-300">
            VIP Access Pass
          </p>
          <h1 className="text-5xl font-semibold tracking-[0.2em] text-white sm:text-6xl lg:text-7xl">
            PRISM 2026
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-cyan-200/80 sm:text-lg">
            The Future of Technology &middot; Decoded
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {countdown.map((item) => (
            <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-[0_20px_50px_rgba(15,23,42,0.35)] backdrop-blur-xl">
              <p className="text-4xl font-semibold text-cyan-300 xl:text-5xl">{item.value}</p>
              <span className="mt-2 block text-sm uppercase tracking-[0.24em] text-slate-300">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div className="rounded-[2rem] border border-slate-700 bg-slate-950/80 p-8 shadow-lg shadow-slate-950/50 backdrop-blur-xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/90">VIP Access Pass</p>
                <h2 className="mt-3 text-4xl font-semibold tracking-[0.18em] text-white sm:text-5xl">
                  PRISM
                </h2>
                <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-400">2026 Edition</p>
              </div>
              <div className="rounded-3xl border border-slate-700 bg-slate-900/90 px-5 py-4 text-center text-xs uppercase tracking-[0.32em] text-slate-400 shadow-sm shadow-slate-900/40">
                QR
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-700 bg-slate-900/80 p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Date</p>
                <p className="mt-3 text-xl font-semibold text-white">Sept 15-17, 2026</p>
              </div>
              <div className="rounded-3xl border border-slate-700 bg-slate-900/80 p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Venue</p>
                <p className="mt-3 text-xl font-semibold text-white">Tech Nexus Center</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-700 bg-slate-900/70 p-8 shadow-lg shadow-slate-950/40 backdrop-blur-xl">
            <div className="mb-6 rounded-3xl border border-slate-700 bg-slate-950/90 p-6 text-center text-slate-300">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/90">Event Pass</p>
              <p className="mt-3 text-2xl font-semibold text-white">VIP Entrance</p>
            </div>
            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">•</span>
                <span>Priority seating</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-fuchsia-500/10 text-fuchsia-300">•</span>
                <span>Early access lounge</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-400/10 text-slate-300">•</span>
                <span>Premium networking</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
