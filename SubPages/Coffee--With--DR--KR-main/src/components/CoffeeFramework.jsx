import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Lightbulb, Target, Telescope, TrendingUp, Award, Zap } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const items = [
  { title: 'Creativity', desc: 'Innovation labs & brainstorming', key: 'C', icon: Lightbulb, color: 'text-coffeeOrange' },
  { title: 'Opportunity', desc: 'Spot and seize social opportunities', key: 'O', icon: Target, color: 'text-warmCoffee' },
  { title: 'Far-sighted', desc: 'Long-term planning & sustainability', key: 'F', icon: Telescope, color: 'text-deepCoffee' },
  { title: 'Fruitful', desc: 'Measurable, impactful outcomes', key: 'F', icon: TrendingUp, color: 'text-charcoal' },
  { title: 'Excellence', desc: 'Ethical, high-quality delivery', key: 'E', icon: Award, color: 'text-coffeeOrange' },
  { title: 'Execution', desc: 'From concept to action', key: 'E', icon: Zap, color: 'text-warmCoffee' },
]

export default function CoffeeFramework() {
  const videoRef = useRef(null)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const ctx = gsap.context(() => {
      // Subtle entrance animation for the video
      gsap.set(videoRef.current, { opacity: 0, scale: 0.8 })

      gsap.to(videoRef.current, {
        opacity: 0.8,
        scale: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: videoRef.current,
          start: 'top 80%',
          once: true,
          onEnter: () => console.log('Coffee splash animation triggered!')
        }
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="framework" className="reveal bg-gradient-to-br from-cream-50 via-cream to-white py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-coffee-gradient bg-clip-text text-transparent mb-3 sm:mb-4">
            C.O.F.F.E.E. Framework
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-orange-gradient mx-auto rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items.map((it, index) => (
            <div
              key={it.key}
              className="group relative"
              style={{animationDelay: `${index * 100}ms`}}
            >
              {/* Background glow effect */}
              <div className="absolute -inset-0.5 bg-orange-gradient rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>

              {/* Main card */}
              <div className="relative rounded-3xl p-6 sm:p-8 bg-white/80 backdrop-blur-sm shadow-medium border border-white/50 group-hover:shadow-strong group-hover:-translate-y-2 transition-all duration-300">
                {/* Floating badge */}
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-coffeeOrange to-warmCoffee rounded-2xl flex flex-col items-center justify-center text-white shadow-medium group-hover:animate-pulse">
                  <it.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${it.color} text-white`} />
                  <span className="text-xs font-bold mt-0.5 sm:mt-1">{it.key}</span>
                </div>

                {/* Content */}
                <div className="pt-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-deepCoffee mb-2 sm:mb-3 group-hover:text-coffeeOrange transition-colors duration-300">
                    {it.title}
                  </h3>
                  <p className="text-charcoal/80 text-base sm:text-lg leading-relaxed">
                    {it.desc}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-cream/50 group-hover:bg-coffeeOrange/20 transition-colors duration-300"></div>
                <div className="absolute top-8 left-8 w-2 h-2 rounded-full bg-coffeeOrange/30 group-hover:bg-coffeeOrange/60 transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-16 flex justify-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-coffeeOrange rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-warmCoffee rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-3 h-3 bg-deepCoffee rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  )
}
