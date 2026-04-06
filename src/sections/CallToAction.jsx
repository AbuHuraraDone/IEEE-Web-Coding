import React from 'react'

function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto w-full max-w-[1000px] rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 shadow-xl shadow-slate-950/20 backdrop-blur-xl">
        <div className="text-center">
          <h2 className="text-5xl font-semibold tracking-[0.18em] text-white sm:text-6xl">
            DON&apos;T MISS OUT
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Secure your spot at the most anticipated tech event of 2026. Limited VIP passes remaining.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <a
            href="#"
            className="inline-flex rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-8 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:opacity-95"
          >
            Register Now
          </a>
          <a
            href="#"
            className="inline-flex rounded-full border border-white/10 bg-slate-900/90 px-8 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/20"
          >
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
