import React, { useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import AboutDoctor from './components/AboutDoctor.jsx'
import CoffeeFramework from './components/CoffeeFramework.jsx'
import SectionTransition from './components/SectionTransition.jsx'
import ProgrammeStructure from './components/ProgrammeStructure.jsx'
import CoreComponents from './components/CoreComponents.jsx'
import WhoShouldJoin from './components/WhoShouldJoin.jsx'
import WhyJoin from './components/WhyJoin.jsx'
import ImpactStats from './components/ImpactStats.jsx'
import Contact from './components/Contact.jsx'
import ApplyBanner from './components/ApplyBanner.jsx'
import Footer from './components/Footer.jsx'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.innerWidth < 768

    // Disable animations on mobile
    if (!reduce && !isMobile) {
      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.fromTo(el, { y: 40, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 0.36,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true
          },
          stagger: 0.12
        })
      })
    }
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutDoctor />
        <CoffeeFramework />
        <SectionTransition />
        <ProgrammeStructure />
        <CoreComponents />
        <WhoShouldJoin />
        <WhyJoin />
        <ImpactStats />
        <Contact />
        <ApplyBanner />
      </main>
      <Footer />
    </>
  )
}
