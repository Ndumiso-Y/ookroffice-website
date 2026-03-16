import { Helmet } from 'react-helmet-async'
import HeroVideo from '../components/HeroVideo'
import PartnersLogos from '../components/PartnersLogos'
import { Link } from 'react-router-dom'
import { visionMission, focusAreas, ctaSection } from '../config/content'

export default function Home() {
  return (
    <main className="flex flex-col">
      <Helmet>
        <title>Koketso Rakhudu Foundation — Empowering Communities Through Education & Enterprise</title>
        <meta name="description" content="The Koketso Rakhudu Foundation (KRF) empowers individuals through education, mentorship, and entrepreneurial resources to build equitable, self-sufficient communities." />
      </Helmet>
      <HeroVideo />

      {/* Vision & Mission */}
      <section className="relative mx-auto max-w-7xl px-4 md:px-8 py-24 text-center overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

        <div className="relative z-10">
          <div className="inline-block mb-4 px-6 py-2 rounded-full bg-gold/10 border border-gold/20">
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">{visionMission.badge}</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8">
            <span className="gradient-text">{visionMission.heading}</span>
          </h2>
          <p className="mt-6 text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-light">
            We envision a society where <span className="font-semibold text-gold">education and enterprise</span> coexist as the cornerstone of equity,
            empowerment, and sustainable development. Our mission is to empower individuals through access
            to learning, mentorship, and entrepreneurial resources that strengthen communities, reduce
            inequality, and expand opportunities for self-sufficiency.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-gold/5 py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '48px 48px'}} />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 text-center">
          <div className="inline-block mb-4 px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gold/30 shadow-lg">
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">{focusAreas.badge}</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="gradient-text">{focusAreas.heading}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
            {focusAreas.subtitle}
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {focusAreas.pillars.map((item, idx) => {
              const Icon = item.Icon
              return (
              <div
                key={idx}
                className={`group relative rounded-3xl bg-white p-8 shadow-2xl shadow-black/10 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-gray-100 animate-fade-in-up animation-delay-${item.delay}`}
              >
                {/* Gradient Accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} rounded-t-3xl`} />

                {/* Icon */}
                <div className="w-16 h-16 mb-6 text-gold transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Icon className="w-full h-full" />
                </div>

                {/* Content */}
                <h3 className="text-3xl font-bold mb-4 text-charcoal group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  {item.desc}
                </p>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/5 group-hover:to-transparent transition-all duration-300 pointer-events-none" />
              </div>
            )})}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 text-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-gold/20" />

        {/* Animated Shapes */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse animation-delay-400" />

        <div className="relative z-10 max-w-5xl mx-auto px-4">
          {/* Accent Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />

          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            {ctaSection.heading.main}<br />
            <span className="text-gold">{ctaSection.heading.highlight}</span>
          </h2>

          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light">
            {ctaSection.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to={ctaSection.primaryCTA.link}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-gold to-yellow-600 px-10 py-5 text-lg font-bold text-white shadow-2xl shadow-gold/50 transition-all duration-300 hover:scale-105 hover:shadow-gold/70 animate-glow-pulse"
            >
              <span className="relative z-10 flex items-center gap-2">
                {ctaSection.primaryCTA.text}
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>

            <Link
              to={ctaSection.secondaryCTA.link}
              className="rounded-xl border-2 border-white/30 backdrop-blur-md bg-white/10 px-10 py-5 text-lg font-bold text-white transition-all duration-300 hover:bg-white hover:text-charcoal hover:border-white hover:scale-105 shadow-lg"
            >
              {ctaSection.secondaryCTA.text}
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <PartnersLogos />
    </main>
  )
}
