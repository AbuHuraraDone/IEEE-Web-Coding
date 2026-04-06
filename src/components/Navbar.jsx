import React from 'react'

const navItems = ['Speakers', 'Schedule', 'Venue', 'Tickets']

function Navbar() {
  return (
    <header className="w-full bg-slate-950/80 backdrop-blur-xl py-6">
      <nav className="mx-auto flex w-[min(1200px,calc(100%-2rem))] items-center justify-between gap-6">
        <a href="#" className="flex items-center gap-3 text-white">
          <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-cyan-500/10 ring-1 ring-cyan-400/20">
            <div className="h-3.5 w-3.5 rounded-full bg-cyan-400 shadow-[0_0_30px_rgba(56,189,248,0.35)]" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-300/90">PRISM</p>
            <p className="text-lg font-semibold tracking-tight text-white">Conference</p>
          </div>
        </a>

        <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-300">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="transition hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#"
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:opacity-95"
        >
          Register Now
        </a>
      </nav>
    </header>
  )
}

export default Navbar
