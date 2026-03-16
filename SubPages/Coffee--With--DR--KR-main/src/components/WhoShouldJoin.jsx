import React from 'react'
import { Lightbulb, Users, Building } from 'lucide-react'

export default function WhoShouldJoin() {
  const audiences = [
    {
      title: "Social Entrepreneurs",
      subtitle: "& Innovators",
      desc: "Individuals creating sustainable solutions to social problems",
      icon: Lightbulb,
      gradient: "from-coffeeOrange to-warmCoffee"
    },
    {
      title: "Community Leaders",
      subtitle: "& Organisers",
      desc: "People mobilizing communities for positive change",
      icon: Users,
      gradient: "from-warmCoffee to-deepCoffee"
    },
    {
      title: "NGOs & Organizations",
      subtitle: "Making Impact",
      desc: "Groups tackling socio-economic challenges systematically",
      icon: Building,
      gradient: "from-deepCoffee to-charcoal"
    }
  ]

  return (
    <section id="join" className="reveal py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-cream via-white to-cream-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-16 right-16 w-56 h-56 bg-coffeeOrange/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 left-16 w-40 h-40 bg-deepCoffee/15 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-coffee-gradient bg-clip-text text-transparent mb-3 sm:mb-4">
            Who Should Join
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-orange-gradient mx-auto rounded-full"></div>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-charcoal/70 max-w-2xl mx-auto px-4">
            This programme is designed for changemakers who are ready to amplify their impact
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {audiences.map((audience, index) => (
            <div key={audience.title} className="group relative" style={{animationDelay: `${index * 200}ms`}}>
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${audience.gradient} rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-300`}></div>

              {/* Main card */}
              <div className="relative rounded-3xl p-6 sm:p-8 lg:p-10 bg-white/90 backdrop-blur-sm shadow-medium border border-white/50 group-hover:shadow-strong group-hover:-translate-y-3 transition-all duration-300 text-center">
                {/* Icon */}
                <div className={`inline-flex w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${audience.gradient} rounded-3xl items-center justify-center mb-4 sm:mb-6 shadow-medium group-hover:scale-110 transition-transform duration-300`}>
                  <audience.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-bold text-deepCoffee mb-2 group-hover:text-coffeeOrange transition-colors duration-300">
                  {audience.title}
                </h3>
                <h4 className="text-lg sm:text-xl font-semibold text-warmCoffee mb-3 sm:mb-4">
                  {audience.subtitle}
                </h4>
                <p className="text-charcoal/80 leading-relaxed text-base sm:text-lg">
                  {audience.desc}
                </p>

                {/* Decorative elements */}
                <div className="absolute top-6 right-6 w-4 h-4 rounded-full bg-coffeeOrange/30 group-hover:bg-coffeeOrange/60 transition-colors duration-300"></div>
                <div className="absolute bottom-6 left-6 w-3 h-3 rounded-full bg-cream/60 group-hover:bg-orange-300/40 transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-lg sm:text-xl text-charcoal/70 mb-6 sm:mb-8 px-4">
            Ready to join a community of impact-driven leaders?
          </p>
          <a href="#apply" className="inline-flex items-center rounded-2xl bg-orange-gradient px-6 py-3 sm:px-8 sm:py-4 text-white font-bold shadow-medium hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
            Explore the Programme
            <svg className="ml-2 sm:ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
