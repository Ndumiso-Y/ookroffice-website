import React from 'react'
import { GraduationCap, Star, Users, Globe } from 'lucide-react'

const items = [
  { title: 'Workshops', desc: 'Sessions with experts & practitioners', icon: GraduationCap, gradient: 'from-coffeeOrange to-warmCoffee' },
  { title: 'Mentorship', desc: 'Guidance with Dr. Koketso Rakhudu & leaders', icon: Star, gradient: 'from-warmCoffee to-deepCoffee' },
  { title: 'Networking', desc: 'Quarterly events to grow your circle', icon: Users, gradient: 'from-deepCoffee to-charcoal' },
  { title: 'Community Projects', desc: 'Hands-on impact in real contexts', icon: Globe, gradient: 'from-charcoal to-coffeeOrange' },
]

export default function CoreComponents() {
  return (
    <section className="reveal py-20 bg-gradient-to-br from-charcoal via-deepCoffee to-warmCoffee relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-coffeeOrange/30 blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-cream/20 blur-xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Core Components
          </h2>
          <div className="w-24 h-1 bg-orange-gradient mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((it, index) => (
            <div key={it.title} className="group relative" style={{animationDelay: `${index * 150}ms`}}>
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${it.gradient} rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-300`}></div>

              {/* Main card */}
              <div className="relative rounded-3xl p-8 backdrop-blur-lg bg-white/10 border border-white/20 shadow-glass group-hover:shadow-strong group-hover:-translate-y-3 transition-all duration-300">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${it.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-medium group-hover:scale-110 transition-transform duration-300`}>
                  <it.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors duration-300">
                  {it.title}
                </h3>
                <p className="text-white/80 leading-relaxed text-lg">
                  {it.desc}
                </p>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-orange-400/40 group-hover:bg-orange-400/70 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-white/30 group-hover:bg-white/50 transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
