// src/pages/Impact.jsx
import { useState } from 'react'
import Lightbox from '../components/Lightbox'
import {
  UsersIcon,
  TrendingUpIcon,
  AcademicCapIcon,
  MapIcon,
  UserGroupIcon,
  BriefcaseIcon,
  HeartIcon,
  GlobeIcon,
  BookOpenIcon,
  ChartBarIcon
} from '../components/Icons'

export default function Impact() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImages, setLightboxImages] = useState([])
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (images, index) => {
    setLightboxImages(images)
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const bootCampImages = Array.from({ length: 11 }, (_, i) => ({
    src: `/gallery/5DayBootCamp/IMG-20251028-WA00${65 + i}.jpg`,
    alt: `5-Day Boot Camp 2025 - Image ${i + 1}`
  }))

  const graduationImages = Array.from({ length: 45 }, (_, i) => ({
    src: `/gallery/Graduation/IMG-20251028-WA00${8 + i < 10 ? '0' + (8 + i) : 8 + i}.jpg`,
    alt: `Graduation 2025 - Image ${i + 1}`
  }))

  const inductionImages = Array.from({ length: 12 }, (_, i) => ({
    src: `/gallery/InductionDay/IMG-20251028-WA00${53 + i}.jpg`,
    alt: `Induction Day 2025 - Image ${i + 1}`
  }))

  const achievements = [
    { label: "Total Beneficiaries", value: "3,267", sub: "Lives Transformed", Icon: UsersIcon, color: "from-blue-500 to-blue-600" },
    { label: "Investment Value", value: "R5.7M", sub: "Community Impact", Icon: TrendingUpIcon, color: "from-gold to-yellow-600" },
    { label: "Training Programmes", value: "25+", sub: "Diverse Offerings", Icon: AcademicCapIcon, color: "from-purple-500 to-purple-600" },
    { label: "Training Centers", value: "3", sub: "Regional Coverage", Icon: MapIcon, color: "from-green-500 to-emerald-600" },
  ]

  const demographics = [
    { group: "Adults (18–55)", desc: "Career change and upskilling participants.", Icon: UserGroupIcon, color: "from-blue-500 to-blue-600" },
    { group: "Corporate", desc: "SMEs and public sector partners engaged in development.", Icon: BriefcaseIcon, color: "from-gold to-yellow-600" },
    { group: "School Leavers & Youth", desc: "Young people entering training and employment pathways.", Icon: AcademicCapIcon, color: "from-purple-500 to-purple-600" },
    { group: "Underemployed & Community Members", desc: "Individuals seeking reintegration and growth.", Icon: HeartIcon, color: "from-pink-500 to-pink-600" },
  ]

  const community = [
    { stat: "150K+", title: "Community Population Served", Icon: GlobeIcon, color: "from-cyan-500 to-cyan-600" },
    { stat: "29", title: "Villages Reached", Icon: MapIcon, color: "from-green-500 to-emerald-600" },
    { stat: "96.4%", title: "Literacy Rate", Icon: BookOpenIcon, color: "from-blue-500 to-blue-600" },
    { stat: "40.2%", title: "Post-Matric Study Rate", Icon: ChartBarIcon, color: "from-purple-500 to-purple-600" },
  ]

  return (
    <main className="mx-auto max-w-7xl px-4 md:px-8 py-16 space-y-20">
      {/* ===== HERO ===== */}
      <section className="relative text-center overflow-hidden py-12">
        {/* Background decorations */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/3 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse animation-delay-400" />
        </div>

        <div className="inline-block mb-6 px-6 py-2 rounded-full bg-gold/10 border border-gold/20 backdrop-blur-sm animate-fade-in">
          <span className="text-sm font-semibold text-gold uppercase tracking-wider">Our Results</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 animate-fade-in-down">
          <span className="gradient-text">Impact and Community</span>
        </h1>
        <p className="max-w-3xl mx-auto text-xl text-gray-700 leading-relaxed animate-fade-in-up animation-delay-200">
          Transforming lives through inclusive education and skills development.<br />
          Since 2016, the Foundation has empowered over 3,267 beneficiaries through 25+ programmes valued at R5.7 million, with 3 regional training centres.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-8 text-lg text-gray-700">
          <div className="flex items-center gap-2">
            <span className="font-bold text-gold">150,000</span>
            <span>Community Population</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-gold">29</span>
            <span>Villages</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-gold">96.4%</span>
            <span>Literacy</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-gold">40.2%</span>
            <span>Post-Matric</span>
          </div>
        </div>
      </section>

      {/* ===== KEY ACHIEVEMENTS ===== */}
      <section>
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gold/30 shadow-lg">
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">Since 2016</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Key Achievements
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, index) => {
            const Icon = item.Icon
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl p-8 text-center shadow-2xl shadow-black/10 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
              >
                {/* Colored top accent */}
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${item.color} rounded-t-3xl`} />

                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 text-gold transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Icon className="w-full h-full" />
                </div>

                <h3 className="text-5xl font-extrabold text-gold mb-3 group-hover:scale-110 transition-transform duration-300">{item.value}</h3>
                <p className="text-charcoal font-bold text-lg mb-1">{item.label}</p>
                <p className="text-gray-600 text-sm">{item.sub}</p>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/10 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
              </div>
            )
          })}
        </div>
      </section>

      {/* ===== LEARNER DEMOGRAPHICS ===== */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gold/30 shadow-lg">
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">Who We Serve</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Learner Demographics
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {demographics.map((demo, index) => {
            const Icon = demo.Icon
            return (
              <div
                key={index}
                className="group relative bg-white border border-gray-200 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                {/* Colored top accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${demo.color} rounded-t-2xl`} />

                {/* Icon */}
                <div className="w-12 h-12 mb-4 text-gold transform group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-full h-full" />
                </div>

                <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-gold transition-colors duration-300">
                  {demo.group}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {demo.desc}
                </p>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
              </div>
            )
          })}
        </div>
      </section>

      {/* ===== COMMUNITY STATS ===== */}
      <section>
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gold/30 shadow-lg">
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">Community Reach</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Community-Centered Approach
          </h2>
          <p className="text-center text-xl text-gray-700 max-w-3xl mx-auto">
            We proudly serve a diverse range of learners, reflecting our commitment to inclusive education and accessible community development across multiple villages and regions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {community.map((stat, index) => {
            const Icon = stat.Icon
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl p-8 text-center shadow-2xl shadow-black/10 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
              >
                {/* Colored top accent */}
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${stat.color} rounded-t-3xl`} />

                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 text-gold transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Icon className="w-full h-full" />
                </div>

                <h3 className="text-5xl font-extrabold text-gold mb-3 group-hover:scale-110 transition-transform duration-300">{stat.stat}</h3>
                <p className="text-charcoal font-bold text-lg">{stat.title}</p>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/10 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
              </div>
            )
          })}
        </div>
      </section>

      {/* ===== PHOTO GALLERIES ===== */}
      <section className="space-y-16">
        {/* 5-Day Boot Camp Gallery */}
        <div>
          <div className="text-center mb-8">
            <div className="inline-block mb-4 px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gold/30 shadow-lg">
              <span className="text-sm font-semibold text-gold uppercase tracking-wider">2025</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
              5-Day Boot Camp 2025
            </h2>
            <p className="text-gray-600">Click on any image to view gallery</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {bootCampImages.slice(0, 2).map((img, i) => (
              <button
                key={i}
                onClick={() => openLightbox(bootCampImages, i)}
                className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 md:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="text-white text-center">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    <p className="font-semibold">View {bootCampImages.length} Photos</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Graduation Gallery */}
        <div>
          <div className="text-center mb-8">
            <div className="inline-block mb-4 px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gold/30 shadow-lg">
              <span className="text-sm font-semibold text-gold uppercase tracking-wider">2025</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
              Graduation 2025
            </h2>
            <p className="text-gray-600">Click on any image to view gallery</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {graduationImages.slice(0, 2).map((img, i) => (
              <button
                key={i}
                onClick={() => openLightbox(graduationImages, i)}
                className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 md:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="text-white text-center">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    <p className="font-semibold">View {graduationImages.length} Photos</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Induction Day Gallery */}
        <div>
          <div className="text-center mb-8">
            <div className="inline-block mb-4 px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gold/30 shadow-lg">
              <span className="text-sm font-semibold text-gold uppercase tracking-wider">2025</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
              Induction Day 2025
            </h2>
            <p className="text-gray-600">Click on any image to view gallery</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {inductionImages.slice(0, 2).map((img, i) => (
              <button
                key={i}
                onClick={() => openLightbox(inductionImages, i)}
                className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 md:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="text-white text-center">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    <p className="font-semibold">View {inductionImages.length} Photos</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={lightboxImages}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        startIndex={lightboxIndex}
      />

      {/* ===== ACCREDITATION FOOTER ===== */}
      <footer className="text-center text-sm text-gray-600 border-t pt-8">
        <p>
          Primary SETA: ETDP SETA · Accreditation Number: ETDP011394 · SAQA Provider Code: ETDP2368 · Reg No: 177-109 NPO
        </p>
        <p>
          <span className="font-semibold text-charcoal">
            +27 63 644 5723 · Dumela@drkoketsorakhudu.com
          </span>{" "}
          · www.drkoketsorakhudufoundation.com
        </p>
      </footer>
    </main>
  )
}
