import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Target, Lightbulb, Star, Users, TrendingUp, Trophy } from 'lucide-react'
import slowAlphaLeftVideo from '../assets/slow-alpha-left.webm'

gsap.registerPlugin(ScrollTrigger)

export default function WhyJoin() {
  const videoRef = useRef(null)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const ctx = gsap.context(() => {
      gsap.set(videoRef.current, { opacity: 0, rotation: -15 })

      gsap.to(videoRef.current, {
        opacity: 0,
        rotation: 0,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: videoRef.current,
          start: 'top 70%',
          once: true
        }
      })
    })
    return () => ctx.revert()
  }, [])
  const benefits = [
    {
      title: 'Advanced Skills Development',
      desc: 'Master the tools and frameworks to tackle pressing social challenges',
      icon: Target,
      gradient: 'from-coffeeOrange to-warmCoffee'
    },
    {
      title: 'Creative Problem-Solving',
      desc: 'Develop innovative approaches to complex socio-economic issues',
      icon: Lightbulb,
      gradient: 'from-warmCoffee to-deepCoffee'
    },
    {
      title: 'Expert Mentorship',
      desc: 'Direct guidance from Dr. Koketso and industry leaders',
      icon: Star,
      gradient: 'from-deepCoffee to-charcoal'
    },
    {
      title: 'Powerful Network',
      desc: 'Connect with like-minded peers and strategic partners',
      icon: Users,
      gradient: 'from-charcoal to-coffeeOrange'
    },
    {
      title: 'Measurable Impact',
      desc: 'Create sustainable, trackable outcomes in your community',
      icon: TrendingUp,
      gradient: 'from-coffeeOrange to-deepCoffee'
    },
    {
      title: 'Long-term Support',
      desc: 'Year-long commitment ensures lasting transformation',
      icon: Trophy,
      gradient: 'from-warmCoffee to-charcoal'
    }
  ]

  return (
    <section className="reveal py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-cream-50 to-cream relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-48 h-48 bg-coffeeOrange/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-deepCoffee/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-warmCoffee/10 rounded-full blur-2xl"></div>
      </div>

      {/* Coffee splash decoration - hidden on mobile */}
      <video
        ref={videoRef}
        className="hidden lg:block absolute bottom-20 left-10 w-64 h-64 object-contain pointer-events-none z-0"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        src={slowAlphaLeftVideo}
        onLoadStart={() => console.log('WhyJoin coffee splash loading...')}
        onCanPlay={() => console.log('WhyJoin coffee splash ready!')}
        onError={(e) => console.log('WhyJoin coffee splash error:', e)}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-coffee-gradient bg-clip-text text-transparent mb-3 sm:mb-4">
            Why Join the Coffee Programme
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-orange-gradient mx-auto rounded-full"></div>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-charcoal/70 max-w-3xl mx-auto px-4">
            Transform your impact potential with comprehensive support, expert guidance, and a community of changemakers
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div key={benefit.title} className="group relative" style={{animationDelay: `${index * 100}ms`}}>
              {/* Glow effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${benefit.gradient} rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-300`}></div>

              {/* Main card */}
              <div className="relative rounded-3xl p-6 sm:p-8 bg-white/90 backdrop-blur-sm shadow-soft border border-white/50 group-hover:shadow-medium group-hover:-translate-y-2 transition-all duration-300">
                {/* Icon */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${benefit.gradient} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-soft group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold text-deepCoffee mb-2 sm:mb-3 group-hover:text-coffeeOrange transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed">
                  {benefit.desc}
                </p>

                {/* Check mark */}
                <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/40 transition-colors duration-300">
                  <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-white/60 backdrop-blur-sm rounded-2xl p-5 sm:p-6 shadow-medium">
            <div className="w-12 h-12 bg-gradient-to-r from-coffeeOrange to-warmCoffee rounded-full flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5 9.293 10.793a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-base sm:text-lg font-semibold text-deepCoffee">Ready to brew your impact?</p>
              <p className="text-sm sm:text-base text-charcoal/60">Join the next cohort of changemakers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
