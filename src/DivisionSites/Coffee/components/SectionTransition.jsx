import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import coffeeBeanBlast from '../assets/coffee-bean-blast.webm'

gsap.registerPlugin(ScrollTrigger)

export default function SectionTransition() {
  const videoRef = useRef(null)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const ctx = gsap.context(() => {
      gsap.fromTo(videoRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 0.7,
          scale: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: videoRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
            once: true
          }
        }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <div className="relative h-96 flex items-center justify-center overflow-hidden bg-gradient-to-b from-cream to-white">
      <video
        ref={videoRef}
        className="w-full h-full object-cover opacity-70"
        style={{ filter: 'drop-shadow(0 0 30px rgba(255, 140, 0, 0.5))' }}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        src={coffeeBeanBlast}
      />
    </div>
  )
}