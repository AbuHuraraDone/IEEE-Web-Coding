import React from 'react'

function Venue() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto w-full max-w-[1200px]">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">State-of-the-art facility in the heart of the tech district</p>
          <h2 className="mt-4 text-5xl font-semibold tracking-[0.18em] text-white sm:text-6xl">
            THE VENUE
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/20 backdrop-blur-xl">
            <div className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/80">
              <div className="aspect-[4/3] bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.25),_transparent_30%),linear-gradient(135deg,rgba(15,23,42,0.9),rgba(15,23,42,0.5))]" />
              <div className="absolute inset-0 grid place-items-center text-3xl font-semibold text-white/20">
                Image 1
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/20 backdrop-blur-xl">
            <div className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/80">
              <div className="aspect-[4/3] bg-[radial-gradient(circle_at_top_right,_rgba(236,72,153,0.25),_transparent_30%),linear-gradient(135deg,rgba(15,23,42,0.9),rgba(15,23,42,0.5))]" />
              <div className="absolute inset-0 grid place-items-center text-3xl font-semibold text-white/20">
                Image 2
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-xl shadow-slate-950/20 backdrop-blur-xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-3xl font-semibold text-white">Tech Nexus Center</h3>
              <p className="mt-5 text-base leading-7 text-slate-300">
                Located in downtown's innovation district, the Tech Nexus Center features a premium venue designed for immersive technology experiences.
              </p>
              <ul className="mt-8 space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">✓</span>
                  <span>Main auditorium with 2,000 seat capacity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-fuchsia-500/10 text-fuchsia-300">✓</span>
                  <span>8 breakout rooms for workshops</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">✓</span>
                  <span>20,000 sq ft expo hall</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Amenities & accessibility</p>
              <ul className="mt-8 space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-fuchsia-500/10 text-fuchsia-300">✓</span>
                  <span>High-speed WiFi throughout</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">✓</span>
                  <span>VIP lounge with dedicated concierge</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-fuchsia-500/10 text-fuchsia-300">✓</span>
                  <span>On-site parking and metro access</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Venue
