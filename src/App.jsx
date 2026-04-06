import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import WhyPrism from './sections/WhyPrism'
import SpeakerLineup from './sections/SpeakerLineup'
import Schedule from './sections/Schedule'
import Venue from './sections/Venue'
import Pricing from './sections/Pricing'
import Partners from './sections/Partners'
import Stats from './sections/Stats'
import Testimonials from './sections/Testimonials'
import CallToAction from './sections/CallToAction'
import './App.css'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <Hero />
      <WhyPrism />
      <SpeakerLineup />
      <Schedule />
      <Venue />
      <Pricing />
      <Partners />
      <Stats />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default App
