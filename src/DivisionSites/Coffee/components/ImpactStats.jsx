import React from 'react'

export default function ImpactStats() {
  const stats = [
    { k: 'Participants', v: '100+' },
    { k: 'Communities Reached', v: '25+' },
    { k: 'Projects Launched', v: '40+' },
  ]
  return (
    <section id="impact" className="reveal container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-cream-50">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-deepCoffee mb-4 sm:mb-6">Impact & Evaluation</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {stats.map((s) => (
          <div key={s.k} className="rounded-2xl p-5 sm:p-6 bg-white shadow-sm border border-cream text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-deepCoffee">{s.v}</div>
            <div className="mt-2 text-sm sm:text-base text-charcoal/80">{s.k}</div>
          </div>
        ))}
      </div>
      <p className="mt-5 sm:mt-6 text-sm sm:text-base text-charcoal/80 max-w-3xl">
        Regular assessments via surveys & forms, tracking project outcomes with continuous improvement loops.
      </p>
    </section>
  )
}
