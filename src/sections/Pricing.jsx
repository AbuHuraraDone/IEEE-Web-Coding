import React from 'react'

const plans = [
  {
    title: 'Virtual Pass',
    price: '$299',
    features: [
      'Live streaming access',
      'On-demand replay for 30 days',
      'Virtual networking lounge',
      'Digital swag bag',
      'Community Discord access',
    ],
    button: 'Select Virtual Pass',
    highlight: false,
  },
  {
    title: 'Standard Pass',
    price: '$699',
    features: [
      'Full 3-day access',
      'All sessions & workshops',
      'Networking events',
      'Conference materials',
      'Lunch included',
      'Certificate of attendance',
    ],
    button: 'Select Standard Pass',
    highlight: false,
  },
  {
    title: 'VIP Pass',
    price: '$1,000',
    features: [
      'Premium seating',
      'VIP lounge access',
      'Private speaker meet & greets',
      'Exclusive dinner events',
      '1-on-1 consultation slots',
      'Lifetime recording access',
      'Priority support',
    ],
    button: 'Select VIP Pass',
    highlight: true,
  },
]

function Pricing() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto w-full max-w-[1200px]">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Choose the experience that fits your goals</p>
          <h2 className="mt-4 text-5xl font-semibold tracking-[0.18em] text-white sm:text-6xl">
            PRICING
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.title} className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-xl shadow-slate-950/20 transition hover:border-cyan-400/20 hover:bg-slate-900/90 ${plan.highlight ? 'lg:scale-105 lg:border-cyan-400/20' : ''}`}>
              {plan.highlight ? (
                <div className="absolute right-6 top-6 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-4 py-2 text-xs uppercase tracking-[0.32em] text-white shadow-lg shadow-cyan-500/20">
                  Most Popular
                </div>
              ) : null}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white">{plan.title}</h3>
                <p className="mt-6 text-5xl font-semibold tracking-tight text-cyan-300">{plan.price}</p>
              </div>
              <ul className="space-y-4 text-slate-300">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">›</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`mt-10 w-full rounded-full px-6 py-3 text-sm font-semibold transition ${plan.highlight ? 'bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-slate-950 shadow-lg shadow-cyan-500/20' : 'border border-white/10 bg-slate-900/90 text-white hover:border-cyan-400/20'}`}>
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
