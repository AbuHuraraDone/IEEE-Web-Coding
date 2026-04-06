import React from 'react'

const testimonials = [
  {
    quote: 'PRISM 2025 completely transformed how I think about AI integration. The networking alone was worth the ticket price.',
    name: 'Emily Zhang',
    title: 'CTO, InnovateCorp',
  },
  {
    quote: 'Best tech conference I\'ve attended in 10 years. The speakers delivered actionable insights, not just theory.',
    name: 'David Park',
    title: 'VP Engineering, TechFlow',
  },
  {
    quote: 'The VIP pass gave me access to incredible one-on-one sessions. Made three partnership deals at the event!',
    name: 'Priya Sharma',
    title: 'Founder, StartupLab',
  },
]

function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto w-full max-w-[1200px]">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">What past attendees are saying</p>
          <h2 className="mt-4 text-5xl font-semibold tracking-[0.18em] text-white sm:text-6xl">
            TESTIMONIALS
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-xl shadow-slate-950/20 transition hover:border-cyan-400/20 hover:bg-slate-900/90">
              <p className="text-base leading-8 text-slate-200">"{item.quote}"</p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-lg font-semibold text-slate-950">
                  {item.name.split(' ').map((word) => word[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-slate-400">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
