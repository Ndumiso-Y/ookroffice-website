// src/pages/Milestones.jsx
import { useState } from 'react'
import { milestones } from "../data/milestones"
import { UsersIcon, TrophyIcon, UserGroupIcon, CheckCircleIcon } from '../components/Icons'

export default function Milestones() {
  const [expandedYears, setExpandedYears] = useState({})

  const toggleYear = (year) => {
    setExpandedYears(prev => ({
      ...prev,
      [year]: !prev[year]
    }))
  }

  return (
    <main className="mx-auto max-w-6xl px-4 md:px-8 py-16">
      <header className="relative text-center mb-20 overflow-hidden py-12">
        {/* Background decorations */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/3 w-80 h-80 bg-gold/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gold/5 rounded-full blur-3xl animate-pulse animation-delay-400" />
        </div>

        <div className="inline-block mb-6 px-6 py-2 rounded-full bg-gold/10 border border-gold/20 backdrop-blur-sm animate-fade-in">
          <span className="text-sm font-semibold text-gold uppercase tracking-wider">Our Journey</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 animate-fade-in-down">
          <span className="gradient-text">Milestones & Growth Journey</span>
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
          From humble beginnings to nationwide impact — a timeline of progress, innovation, and community empowerment.
        </p>
      </header>

      <section className="relative space-y-12">
        {/* Timeline connector line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-gold to-gold/20" />

        {milestones.map((m, index) => {
          const isExpanded = expandedYears[m.year]
          return (
          <div
            key={m.year}
            className="relative pl-20 pb-4 last:pb-0 animate-slide-in-left"
            style={{animationDelay: `${index * 150}ms`}}
          >
            {/* Year badge with glow */}
            <div className="absolute left-0 top-2 w-12 h-12 rounded-2xl bg-gradient-to-br from-gold to-yellow-600 shadow-2xl shadow-gold/60 flex items-center justify-center text-white font-bold text-lg transform hover:scale-110 hover:rotate-3 transition-all duration-300 animate-glow-pulse">
              {m.year.slice(2)}
            </div>

            {/* Timeline dot */}
            <div className="absolute left-[44px] top-[22px] h-5 w-5 rounded-full bg-white border-4 border-gold shadow-lg shadow-gold/50 animate-pulse" />

            <div
              className="flex items-baseline justify-between flex-wrap gap-y-2 mb-3 cursor-pointer"
              onClick={() => toggleYear(m.year)}
            >
              <h2 className="text-3xl font-bold text-charcoal flex items-center gap-3">
                <span className="text-gold">{m.year}</span> — {m.title}
                <svg
                  className={`w-6 h-6 text-gold transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </h2>
            </div>

            <p className="text-lg italic text-gold/80 font-semibold mb-6">{m.tagline}</p>

            {isExpanded && (
            <div className="group relative bg-gradient-to-br from-white to-gray-50 shadow-2xl shadow-black/10 rounded-3xl border-l-4 border-gold p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2 group-hover:text-gold transition-colors duration-300">
                <TrophyIcon className="w-6 h-6 text-gold" />
                Key Achievements
              </h3>
              <ul className="text-gray-700 leading-relaxed space-y-3 mb-6">
                {m.achievements.map((a, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 bg-gradient-to-br from-blue-50 to-blue-100 text-blue-700 px-5 py-4 rounded-2xl font-bold shadow-lg border border-blue-200 transform hover:scale-105 transition-transform duration-300">
                  <UsersIcon className="w-6 h-6" />
                  <div>
                    <div className="text-2xl">{m.impact.beneficiaries.toLocaleString()}</div>
                    <div className="text-xs font-normal opacity-80">Beneficiaries</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gradient-to-br from-gold/10 to-yellow-50 text-gold px-5 py-4 rounded-2xl font-bold shadow-lg border border-gold/30 transform hover:scale-105 transition-transform duration-300">
                  <TrophyIcon className="w-6 h-6" />
                  <div>
                    <div className="text-2xl">{m.impact.programmes}</div>
                    <div className="text-xs font-normal opacity-80">Programmes</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gradient-to-br from-green-50 to-emerald-100 text-green-700 px-5 py-4 rounded-2xl font-bold shadow-lg border border-green-200 transform hover:scale-105 transition-transform duration-300">
                  <UserGroupIcon className="w-6 h-6" />
                  <div>
                    <div className="text-2xl">{m.impact.partnerships}</div>
                    <div className="text-xs font-normal opacity-80">Partnerships</div>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
            </div>
            )}
          </div>
        )}
        )}
      </section>

      {/* ===== KEY INSTITUTIONAL MILESTONES ===== */}
      <section className="mt-24">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gold/30 shadow-lg">
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">Leadership Achievements</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Key Institutional Milestones
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "CEO of Hakem Energies Foundation", desc: "Leading renewable energy and community development initiatives" },
            { title: "10 Years as Kgosana in Tsitsing", desc: "Traditional leadership in Royal Bafokeng Nation" },
            { title: '"Breaking the Silence" Podcast Launch', desc: "Platform for community dialogue and awareness" },
            { title: "Boundless Soweto Campus Establishment", desc: "Expanding educational reach across townships" },
            { title: "Inauguration as First Chancellor", desc: "Leading the Foundation CET Centre with vision" },
            { title: "2023 Graduation (150 Learners)", desc: "Record-breaking graduation ceremony milestone" },
            { title: "2024 Excellence Awards", desc: "Recognition for outstanding educational impact" }
          ].map((milestone, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-200 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-yellow-600 rounded-t-2xl" />
              <div className="w-12 h-12 mb-4 bg-gradient-to-br from-gold/20 to-yellow-600/20 rounded-xl flex items-center justify-center">
                <TrophyIcon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2 group-hover:text-gold transition-colors duration-300">
                {milestone.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {milestone.desc}
              </p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
