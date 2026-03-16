import React, { useEffect, useRef } from 'react'
import heroVideo from '../assets/hero.webm'
import posterImage from '../assets/poster.jpg'

export default function Hero() {
  const videoRef = useRef(null)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce && videoRef.current) {
      videoRef.current.removeAttribute('autoplay')
      videoRef.current.pause()
    }
  }, [])

  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center bg-white">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
        poster={posterImage}
        autoPlay
        playsInline
        loop
        muted
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/50 to-white/60"></div>
      <div className="relative z-10 container mx-auto px-6 py-12 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-deepCoffee leading-tight">
          Coffee with Dr. Koketso Rakhudu
        </h1>
        <p className="mt-6 text-base sm:text-lg md:text-xl text-charcoal/90 max-w-2xl mx-auto font-medium leading-relaxed">
          Consulting &amp; Mentorship Programme Empowering Social Change Makers
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#apply" className="w-full sm:w-auto group relative inline-flex items-center justify-center rounded-2xl bg-coffeeOrange px-8 py-4 text-white font-bold shadow-strong hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
            <span className="relative z-10">Apply Now</span>
            <div className="absolute inset-0 rounded-2xl bg-warmCoffee opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a href="#about" className="w-full sm:w-auto inline-flex items-center justify-center rounded-2xl border-2 border-charcoal/30 bg-white/80 backdrop-blur-sm px-8 py-4 font-semibold text-deepCoffee hover:border-coffeeOrange hover:text-coffeeOrange hover:bg-white transition-all duration-200">
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
