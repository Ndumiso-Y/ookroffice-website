import React from 'react'
import { Calendar, Globe, Target, Users, Handshake, Sprout } from 'lucide-react'

const items = [
  { label: 'Duration', value: 'Tailor Made', icon: Calendar, color: 'from-coffeeOrange to-warmCoffee' },
  { label: 'Format', value: 'Hybrid (in-person & online)', icon: Globe, color: 'from-warmCoffee to-deepCoffee' },
  { label: 'Monthly', value: 'Themed workshops', icon: Target, color: 'from-coffeeOrange to-charcoal' },
  { label: 'Mentorship', value: 'One on One Mentorship with Dr. Koketso Rakhudu', icon: Users, color: 'from-deepCoffee to-charcoal' },
  { label: 'Quarterly', value: 'Networking events', icon: Handshake, color: 'from-warmCoffee to-coffeeOrange' },
  { label: 'Community', value: 'Engagement projects', icon: Sprout, color: 'from-charcoal to-deepCoffee' },
]

export default function ProgrammeStructure() {
  return (
    <section id="structure" className="reveal py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-cream-50 to-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-coffeeOrange/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-deepCoffee/5 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-coffee-gradient bg-clip-text text-transparent mb-3 sm:mb-4">
            Programme Structure
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-orange-gradient mx-auto rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items.map((it, idx) => (
            <div key={idx} className="group relative">
              {/* Glow effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${it.color} rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-300`}></div>

              {/* Main card */}
              <div className="relative rounded-3xl p-6 sm:p-8 bg-white/90 backdrop-blur-sm shadow-medium border border-white/50 group-hover:shadow-strong group-hover:-translate-y-2 transition-all duration-300">
                {/* Icon badge */}
                <div className={`absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${it.color} rounded-2xl flex items-center justify-center text-white shadow-medium`}>
                  <it.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>

                <div className="pt-4">
                  <div className="text-base sm:text-lg font-black text-coffeeOrange mb-2 sm:mb-3">{it.label}</div>
                  <p className="text-base sm:text-lg text-charcoal/80 leading-relaxed font-medium">{it.value}</p>
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-4 right-4 w-6 h-6 rounded-full bg-cream/60 group-hover:bg-coffeeOrange/20 transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
