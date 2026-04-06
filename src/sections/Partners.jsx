import React from 'react'

const partners = [
  'TechCorp',
  'InnovateLabs',
  'FutureSync',
  'QuantumEdge',
  'NeuralNet',
  'CloudFirst',
  'DataPrime',
  'CodeForge',
]

function Partners() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto w-full max-w-[1200px]">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Supported by industry leaders</p>
          <h2 className="mt-4 text-5xl font-semibold tracking-[0.18em] text-white sm:text-6xl">
            OUR PARTNERS
          </h2>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {partners.map((partner) => (
            <div key={partner} className="flex min-h-[120px] items-center justify-center rounded-[2rem] border border-white/10 bg-slate-950/80 px-6 py-8 text-center text-xl font-semibold text-slate-200 transition hover:border-cyan-400/20 hover:bg-slate-900/90">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
