import video from '../assets/hero/UniStudent_optimized.mp4'

export default function HeroVideo() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        src={video}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover scale-105 animate-slow-zoom"
      />

      {/* Gradient Overlays for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-transparent to-gold/10" />

      {/* Animated Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/20 rounded-full blur-3xl animate-pulse" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 md:px-8 text-center text-white">
        {/* Small Tag Line */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-5 py-2 border border-white/20 animate-fade-in">
          <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
          <span className="text-sm font-medium tracking-wide">Building Sustainable Futures Since 2016</span>
        </div>

        {/* Main Heading with Stagger Animation */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6 animate-fade-in-up">
          <span className="bg-gradient-to-r from-white via-white to-gold/80 bg-clip-text text-transparent">
            Koketso Rakhudu Foundation
          </span>
          <br />
          <span className="text-gold drop-shadow-2xl">
            Empowering Lives with Excellence
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-3xl text-lg md:text-xl text-white/95 leading-relaxed font-light animate-fade-in-up animation-delay-200">
          Welcome to the Koketso Rakhudu Foundation — where we empower lives with excellence.
          Rooted in community development and lifelong learning, we champion accessible education and skills training for all.
        </p>

        {/* Quick Highlights */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/90 text-sm animate-fade-in-up animation-delay-300">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            <span>Accredited Community Education & Training Centre under ETDP SETA</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span>Over 8 years empowering historically disadvantaged individuals</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            <span>Strategic partnerships with leading institutions</span>
          </div>
        </div>

        {/* CTA Buttons with Enhanced Design */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-400">
          <a
            href="/programs"
            className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-gold to-yellow-600 px-8 py-4 text-base font-bold text-white shadow-2xl shadow-gold/50 transition-all duration-300 hover:scale-105 hover:shadow-gold/70"
          >
            <span className="relative z-10">Explore Our Programmes</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>
          <a
            href="/about"
            className="group rounded-xl border-2 border-white/40 backdrop-blur-md bg-white/5 px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-white hover:text-charcoal hover:border-white hover:scale-105 shadow-lg"
          >
            Learn About Us
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm text-white/70 font-medium">Scroll to explore</span>
          <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
