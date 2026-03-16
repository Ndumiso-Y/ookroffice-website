// src/components/PartnersLogos.jsx
import { useState, useEffect, useRef } from 'react'

export default function PartnersLogos() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const scrollRef = useRef(null)

  const partners = [
    { name: "ABSA", logo: "/gallery/PartnersLogos/ABSA.jpg" },
    { name: "AgriSeta", logo: "/gallery/PartnersLogos/AgriSeta.jpg" },
    { name: "Cathsseta", logo: "/gallery/PartnersLogos/Cathsseta.jpg" },
    { name: "Classic Oriental Consultancy", logo: "/gallery/PartnersLogos/ClassicOrientalConsultancy.jpg" },
    { name: "EBJ Holdings", logo: "/gallery/PartnersLogos/EBJHOLDINGS.jpg" },
    { name: "EWSETA", logo: "/gallery/PartnersLogos/EWSETA.jpg" },
    { name: "Hakem Energies Foundation", logo: "/gallery/PartnersLogos/HakemEnergiesFoundationLogo -.png" },
    { name: "Hakem", logo: "/gallery/PartnersLogos/Hakem Logo.png" },
    { name: "Maikwane Holdings", logo: "/gallery/PartnersLogos/Maikwane Holdings.jpg" },
    { name: "Mdihub", logo: "/gallery/PartnersLogos/Mdihub.jpg" },
    { name: "Mesora", logo: "/gallery/PartnersLogos/Mesora.jpg" },
    { name: "North West Development Corporation", logo: "/gallery/PartnersLogos/NorthWestDevelopmentCorporation.jpg" },
    { name: "QCTO", logo: "/gallery/PartnersLogos/QCTO.jpg" },
    { name: "SANNAH", logo: "/gallery/PartnersLogos/SANNAH.jpg" },
    { name: "Thuba Pelo Mosadi", logo: "/gallery/PartnersLogos/ThubaPeloMosadi.jpg" },
    { name: "Tshanew University", logo: "/gallery/PartnersLogos/TshanewUniversity.jpg" },
  ]

  // Auto-scroll for mobile
  useEffect(() => {
    const isMobile = window.innerWidth < 768
    if (!isMobile || isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isPaused, partners.length])

  const scrollToIndex = (index) => {
    setCurrentIndex(index)
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth
      scrollRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse animation-delay-400" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gold/30 shadow-lg">
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">Trusted Partners</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Our Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Working together with leading organisations to create lasting impact and sustainable development.
          </p>
        </div>

        {/* Desktop Grid - In Color */}
        <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative w-full h-24 flex items-center justify-center overflow-hidden">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain transition-all duration-500 transform group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className="md:hidden relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full snap-center"
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="relative w-full h-32 flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-center mt-4 text-sm font-semibold text-gray-700">{partner.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6 flex-wrap">
            {partners.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-gold w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to partner ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
