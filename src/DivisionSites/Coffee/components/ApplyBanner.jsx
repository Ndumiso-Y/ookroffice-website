import React from 'react'

export default function ApplyBanner() {
  return (
    <section id="apply" className="reveal py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-charcoal via-deepCoffee to-warmCoffee relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-coffeeOrange/30 blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-cream/20 blur-lg animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-coffeeOrange/20 blur-md animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-orange-gradient rounded-3xl blur-xl opacity-20"></div>

          {/* Main card */}
          <div className="relative backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-6 sm:p-10 lg:p-16 shadow-glass">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight">
                  Ready to
                  <span className="block bg-gradient-to-r from-orange-400 via-coffeeOrange to-orange-600 bg-clip-text text-transparent">
                    brew impact?
                  </span>
                </h3>
                <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-2xl leading-relaxed font-medium">
                  Apply to the Coffee programme and join a community of leaders turning ideas into action.
                </p>

                {/* Feature highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8">
                  <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 text-white/80">
                    <div className="w-2 h-2 bg-coffeeOrange rounded-full shrink-0"></div>
                    <span className="font-semibold text-sm sm:text-base">Year-long mentorship</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 text-white/80">
                    <div className="w-2 h-2 bg-orange-400 rounded-full shrink-0"></div>
                    <span className="font-semibold text-sm sm:text-base">Expert guidance</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 text-white/80">
                    <div className="w-2 h-2 bg-orange-600 rounded-full shrink-0"></div>
                    <span className="font-semibold text-sm sm:text-base">Real impact</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:gap-4 w-full lg:w-auto">
                <a
                  href="https://forms.gle/your-form"
                  className="group relative inline-flex items-center justify-center rounded-2xl bg-orange-gradient px-8 py-4 sm:px-10 sm:py-5 text-lg sm:text-xl font-black text-white shadow-strong hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                    Apply Now
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -inset-1 bg-orange-gradient rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                </a>

                <p className="text-white/60 text-xs sm:text-sm text-center">
                  Applications close soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
