// src/pages/Programs.jsx
import { useState } from 'react'
import Students1 from "../assets/programs/Students1.jpg"
import Students2 from "../assets/programs/Students2.jpg"
import Students3 from "../assets/programs/Students3.jpg"
import Students4 from "../assets/programs/Students4.jpg"
import InspiringTalkVideo from "../assets/videos/InspiringTalkDrKoketso_optimized.mp4"
import EnterpriseVideo from "../assets/videos/focus-enterprise-marabo_optimized.mp4"
import {
  AcademicCapIcon,
  BadgeCheckIcon,
  ComputerIcon,
  UsersIcon,
  BriefcaseIcon,
  LightBulbIcon,
  HeartIcon,
  ClockIcon,
  TrophyIcon,
  CheckCircleIcon
} from '../components/Icons'

export default function Programs() {
  const [expandedCards, setExpandedCards] = useState({})

  const toggleCard = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const services = [
    { title: "Accredited Skills Programmes & Qualifications", Icon: BadgeCheckIcon, color: "from-blue-500 to-blue-600" },
    { title: "Recognition of Prior Learning (RPL)", Icon: TrophyIcon, color: "from-gold to-yellow-600" },
    { title: "Community Workshops & Short Courses", Icon: UsersIcon, color: "from-green-500 to-emerald-600" },
    { title: "Career Guidance and Mentorship", Icon: HeartIcon, color: "from-pink-500 to-pink-600" },
    { title: "Support for Trainers: Assessors, Moderators, and Facilitators", Icon: AcademicCapIcon, color: "from-purple-500 to-purple-600" },
    { title: "Project Design & Implementation Support for Development Initiatives", Icon: LightBulbIcon, color: "from-orange-500 to-orange-600" },
  ]

  const whoFor = [
    "Unemployed Youth",
    "Adults looking to upskill or reskill",
    "Community organizations and cooperatives",
    "Education and training professionals",
    "Corporate teams and working professionals",
    "Entrepreneurs and small business owners",
  ]

  const programs = [
    {
      title: "IT & Digital Skills Training",
      overview:
        "Comprehensive training in modern IT skills including web development, software applications, and digital tools essential for today's workplace.",
      target: "Youth, adults, and career changers",
      duration: "3–6 months",
      certification: "SETA Accredited IT Certificate",
      outcome:
        "Industry-ready digital competencies and certifications.",
      curriculum: [
        "Web Development Fundamentals",
        "Microsoft Office Suite",
        "Cloud Computing Basics",
        "Cybersecurity Awareness",
        "Data Analytics Introduction",
      ],
    },
    {
      title: "Business Administration Programmes",
      overview:
        "Master essential business administration skills including office management, communication, and organizational systems for corporate environments.",
      target: "Aspiring administrators and office professionals",
      duration: "4 months",
      certification: "Business Administration Certificate",
      outcome:
        "Professional administrative skills and workplace readiness.",
      curriculum: [
        "Office Management",
        "Business Communication",
        "Records Management",
        "Financial Administration",
        "Customer Relations",
      ],
    },
    {
      title: "Corporate Upskilling Workshops",
      overview:
        "Tailored workshops for organizations looking to upskill their workforce with cutting-edge industry practices and emerging technologies.",
      target: "Employed professionals and corporate teams",
      duration: "2–4 weeks",
      certification: "Professional Development Certificate",
      outcome:
        "Enhanced workplace productivity and leadership capabilities.",
      curriculum: [
        "Leadership Development",
        "Project Management",
        "Digital Transformation",
        "Team Collaboration",
        "Innovation Strategies",
      ],
    },
    {
      title: "Digital Literacy Classes",
      overview:
        "Friendly, accessible training for those new to technology, covering basics of computers, internet usage, and digital communication.",
      target: "Beginners, seniors, and community members",
      duration: "6 weeks",
      certification: "Digital Literacy Certificate",
      outcome:
        "Confidence in using digital devices and online services.",
      curriculum: [
        "Computer Basics",
        "Internet Navigation",
        "Email Communication",
        "Social Media Safety",
        "Online Banking Basics",
      ],
    },
    {
      title: "Soft Skills Development",
      overview:
        "Build essential workplace soft skills including communication, teamwork, problem-solving, and emotional intelligence for career success.",
      target: "Job seekers and young professionals",
      duration: "2 months",
      certification: "Soft Skills Certificate",
      outcome:
        "Enhanced interpersonal and professional competencies.",
      curriculum: [
        "Professional Communication",
        "Teamwork & Collaboration",
        "Problem Solving",
        "Time Management",
        "Emotional Intelligence",
      ],
    },
    {
      title: "Employment Readiness Programmes",
      overview:
        "Comprehensive program combining skills training, job search strategies, and placement assistance to get you employment-ready.",
      target: "Unemployed youth and job seekers",
      duration: "3 months",
      certification: "Employment Readiness Certificate + Job Placement Support",
      outcome:
        "Job-ready skills and successful placement.",
      curriculum: [
        "CV Writing",
        "Interview Skills",
        "Job Search Strategies",
        "Workplace Etiquette",
        "Personal Branding",
      ],
    },
  ]

  return (
    <main className="mx-auto max-w-7xl px-4 md:px-8 py-16 space-y-20">
      {/* ===== HERO ===== */}
      <section className="relative text-center overflow-hidden py-12">
        {/* Background decorations */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse animation-delay-400" />
        </div>

        <div className="inline-block mb-6 px-6 py-2 rounded-full bg-gold/10 border border-gold/20 backdrop-blur-sm animate-fade-in">
          <span className="text-sm font-semibold text-gold uppercase tracking-wider">Our Offerings</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 animate-fade-in-down">
          <span className="gradient-text">Services & Programmes</span>
        </h1>
        <p className="max-w-3xl mx-auto text-xl text-gray-700 leading-relaxed animate-fade-in-up animation-delay-200">
          Through our accredited programmes and community initiatives, the Koketso Rakhudu Foundation delivers skills training that equips learners for employment and entrepreneurship.
        </p>
      </section>

      {/* ===== SERVICES WE PROVIDE ===== */}
      <section>
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gold/30 shadow-lg">
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">What We Offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Services We Provide
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => {
            const Icon = item.Icon
            return (
              <div
                key={index}
                className="group relative bg-white border border-gray-200 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                {/* Colored top border */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} rounded-t-2xl`} />

                {/* Icon */}
                <div className="w-14 h-14 mb-4 text-gold transform group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-full h-full" />
                </div>

                <h3 className="text-charcoal font-bold text-lg mb-2 group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
              </div>
            )
          })}
        </div>
      </section>

      {/* ===== WHO IT IS FOR ===== */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12">
        <div className="text-center mb-10">
          <div className="inline-block mb-4 px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gold/30 shadow-lg">
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">Target Audience</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Who It's For
          </h2>
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
          {whoFor.map((target, index) => (
            <li
              key={index}
              className="group relative bg-white border-2 border-gold/30 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 font-medium flex items-center gap-3"
            >
              <CheckCircleIcon className="w-6 h-6 text-gold flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <span className="group-hover:text-gold transition-colors duration-300">{target}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== LEARNING IN ACTION ===== */}
      <section>
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gold/30 shadow-lg">
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">Student Gallery</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Learning in Action
          </h2>
          <p className="text-center text-xl text-gray-700 max-w-3xl mx-auto">
            See our students thriving in their educational journey — building skills, confidence, and brighter futures.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { img: Students1, alt: "Students engaged in computer training" },
            { img: Students2, alt: "Collaborative learning environment" },
            { img: Students3, alt: "Skills development workshop" },
            { img: Students4, alt: "Hands-on practical training" },
          ].map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/20 group cursor-pointer animate-fade-in-up"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Floating badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-sm font-semibold text-charcoal">{item.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PROGRAMS ===== */}
      <section>
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gold/30 shadow-lg">
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">Training Programmes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Our Programmes
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {programs.map((prog, index) => (
            <div key={index}>
              {/* Program Card - Clean Card Layout */}
              <div className="group relative bg-white border-2 border-gray-100 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-gold/50 transition-all duration-500 h-full flex flex-col">
                {/* Header with colored accent */}
                <div className="bg-gradient-to-r from-gold to-yellow-600 p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <ComputerIcon className="w-8 h-8 text-gold" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {prog.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {prog.overview}
                  </p>

                  {/* Info Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-3 flex items-center gap-2">
                      <UsersIcon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-blue-900">Target</p>
                        <p className="text-xs text-blue-700">{prog.target}</p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-3 flex items-center gap-2">
                      <ClockIcon className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-purple-900">Duration</p>
                        <p className="text-xs text-purple-700">{prog.duration}</p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-3 flex items-center gap-2">
                      <BadgeCheckIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-green-900">Certificate</p>
                        <p className="text-xs text-green-700">{prog.certification}</p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-gold/10 to-yellow-100 rounded-xl p-3 flex items-center gap-2">
                      <TrophyIcon className="w-5 h-5 text-gold flex-shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-yellow-900">Outcome</p>
                        <p className="text-xs text-yellow-700">{prog.outcome}</p>
                      </div>
                    </div>
                  </div>

                  {/* Curriculum - Collapsible */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 mt-auto overflow-hidden">
                    <button
                      onClick={() => toggleCard(index)}
                      className="w-full p-5 flex items-center justify-between hover:bg-gray-100 transition-colors"
                    >
                      <h4 className="font-bold text-charcoal text-sm flex items-center gap-2">
                        <AcademicCapIcon className="w-5 h-5 text-gold" />
                        Curriculum Highlights
                      </h4>
                      {expandedCards[index] ? (
                        <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </button>
                    {expandedCards[index] && (
                      <div className="px-5 pb-5">
                        <ul className="space-y-2">
                          {prog.curriculum.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-700">
                              <CheckCircleIcon className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                              <span className="text-xs leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Video Sections */}
        <div className="mt-16 space-y-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                Inspiring Leadership & Mentorship
              </h3>
              <p className="text-gray-600">Dr. Koketso Rakhudu in action</p>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/20 border-4 border-gold/30">
              <video
                src={InspiringTalkVideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto"
                controlsList="nodownload nofullscreen noremoteplayback"
                disablePictureInPicture
              />
              <button
                onClick={(e) => {
                  const video = e.target.previousElementSibling
                  if (video.paused) {
                    video.play()
                    e.target.innerHTML = '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"/></svg>'
                  } else {
                    video.pause()
                    e.target.innerHTML = '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/></svg>'
                  }
                }}
                className="absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                aria-label="Play/Pause video"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                Enterprise Development in Action
              </h3>
              <p className="text-gray-600">Community Training Excellence</p>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/20 border-4 border-gold/30">
              <video
                src={EnterpriseVideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto"
                controlsList="nodownload nofullscreen noremoteplayback"
                disablePictureInPicture
              />
              <button
                onClick={(e) => {
                  const video = e.target.previousElementSibling
                  if (video.paused) {
                    video.play()
                    e.target.innerHTML = '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"/></svg>'
                  } else {
                    video.pause()
                    e.target.innerHTML = '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/></svg>'
                  }
                }}
                className="absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                aria-label="Play/Pause video"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ACCREDITATION FOOTER ===== */}
      <footer className="text-center text-sm text-gray-600 border-t pt-8">
        <p>
          Primary SETA: ETDP SETA · Accreditation Number: ETDP011394 · SAQA Provider Code: ETDP2368 · Reg No: 177-109 NPO
        </p>
        <p>
          <span className="font-semibold text-charcoal">
            Community Education & Training Centre · Maile Kopman · +27 63 644 5723 · Dumela@drkoketsorakhudu.com
          </span>{" "}
          · www.drkoketsorakhudufoundation.com
        </p>
      </footer>
    </main>
  )
}
