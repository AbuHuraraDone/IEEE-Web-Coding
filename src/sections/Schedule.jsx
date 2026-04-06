import React from 'react'

const scheduleDays = [
  {
    day: 'Day 1',
    date: 'September 15',
    events: [
      { time: '09:00 AM', title: 'Registration & Welcome Coffee', icon: '☕' },
      { time: '10:00 AM', title: 'Keynote: The Future of AI', speaker: 'Dr. Sarah Chen', icon: '🎤' },
      { time: '11:30 AM', title: 'Panel: Quantum Computing Breakthroughs', icon: '👥' },
    ],
  },
  {
    day: 'Day 2',
    date: 'September 16',
    events: [
      { time: '09:30 AM', title: 'Morning Keynote: Design Systems at Scale', speaker: 'Jordan Taylor', icon: '🎤' },
      { time: '11:00 AM', title: 'Breakout Sessions', icon: '<>' },
      { time: '01:00 PM', title: 'Lunch & Expo Hall', icon: '☕' },
    ],
  },
  {
    day: 'Day 3',
    date: 'September 17',
    events: [
      { time: '09:00 AM', title: 'Startup Pitch Competition', icon: '🎤' },
      { time: '11:00 AM', title: 'Final Keynote: Looking Ahead', speaker: 'Marcus Rodriguez', icon: '🎤' },
      { time: '12:30 PM', title: 'Closing Ceremony & Awards', icon: '🏆' },
    ],
  },
]

function Schedule() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto w-full max-w-[1200px]">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Three days of immersive learning</p>
          <h2 className="mt-4 text-5xl font-semibold tracking-[0.18em] text-white sm:text-6xl">
            SCHEDULE
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {scheduleDays.map((day) => (
            <div key={day.day} className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-xl shadow-slate-950/20 transition hover:border-cyan-400/20 hover:bg-slate-900/90">
              <div className="mb-8 rounded-3xl border border-slate-700 bg-slate-900/90 p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/90">{day.day}</p>
                <p className="mt-3 text-xl font-semibold text-white">{day.date}</p>
              </div>

              <div className="space-y-6">
                {day.events.map((event) => (
                  <div key={event.time + event.title} className="rounded-3xl border border-slate-700 bg-slate-900/80 p-5">
                    <div className="flex items-center gap-3 text-slate-400">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-800 text-lg text-cyan-300">{event.icon}</span>
                      <div>
                        <p className="text-sm uppercase tracking-[0.25em] text-slate-400">{event.time}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-base font-semibold text-white">{event.title}</p>
                    {event.speaker ? <p className="mt-2 text-sm text-cyan-300">{event.speaker}</p> : null}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Schedule
