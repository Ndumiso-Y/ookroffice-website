// src/pages/About.jsx

import Founder from "../assets/about/DrKoketso.jpg"
import {
  TargetIcon,
  RocketIcon,
  DoorOpenIcon,
  SparklesIcon,
  BookOpenIcon,
  TrophyIcon,
  UsersIcon,
  LightBulbIcon,
  GlobeIcon,
  LinkIcon,
  PhoneIcon,
  MailIcon,
  GrowthIcon,
  CheckCircleIcon
} from '../components/Icons'

export default function About() {
  return (
    <main className="mx-auto max-w-7xl px-4 md:px-8 py-16 space-y-24">
      {/* ============= INTRO ============= */}
      <section className="relative text-center py-12 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/3 w-72 h-72 bg-gold/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse animation-delay-400" />
        </div>

        <div className="inline-block mb-6 px-6 py-2 rounded-full bg-gold/10 border border-gold/20 backdrop-blur-sm animate-fade-in">
          <span className="text-sm font-semibold text-gold uppercase tracking-wider">Est. 2016</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 animate-fade-in-down">
          <span className="gradient-text">Koketso Rakhudu Foundation</span>
        </h1>

        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6 animate-fade-in-up animation-delay-200">
          <span className="font-semibold text-charcoal">Community Education & Training Centre</span>
          <br />
          <span className="text-gray-600">Maile, Kopman</span>
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-6 animate-fade-in-up animation-delay-400">
          <a href="tel:+27636445723" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white shadow-lg shadow-black/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border border-gray-200">
            <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="font-semibold text-charcoal">+27 63 644 5723</span>
          </a>
          <a href="mailto:Dumela@drkoketsorakhudu.com" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white shadow-lg shadow-black/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border border-gray-200">
            <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="font-semibold text-charcoal">Dumela@drkoketsorakhudu.com</span>
          </a>
        </div>

        <div className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-gold/10 to-yellow-600/10 border border-gold/30 backdrop-blur-sm animate-fade-in-up animation-delay-600">
          <p className="text-sm text-gray-700 leading-relaxed">
            <span className="font-bold text-gold">ETDP SETA Accredited</span> ·
            Accreditation No: <span className="font-semibold">ETDP011394</span> | Code: 581<br />
            SAQA Provider: <span className="font-semibold">ETDP2368</span> ·
            NPO Reg: <span className="font-semibold">177-109</span>
          </p>
        </div>
      </section>

      {/* ============= FOUNDER MESSAGE ============= */}
      <section className="relative grid md:grid-cols-2 gap-12 items-center overflow-hidden">
        {/* Background decoration */}
        <div className="absolute -left-1/4 top-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl -z-10" />

        <div className="relative group animate-slide-in-left">
          {/* Gold border accent */}
          <div className="absolute -inset-1 bg-gradient-to-br from-gold via-yellow-600 to-gold rounded-3xl opacity-20 group-hover:opacity-30 blur transition-all duration-300" />

          <img
            src={Founder}
            alt="Dr. Koketso Rakhudu — Founder & Visionary"
            className="relative rounded-3xl shadow-2xl shadow-black/20 w-full h-auto transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.02]"
            loading="lazy"
          />

          {/* Floating badge */}
          <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-gold to-yellow-600 text-white px-6 py-3 rounded-2xl shadow-2xl shadow-gold/50 animate-float">
            <p className="font-bold text-sm">Founder & Visionary</p>
          </div>
        </div>

        <div className="animate-slide-in-right">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-gold/10 border border-gold/20">
            <span className="text-xs font-semibold text-gold uppercase tracking-wider">Leadership Message</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Welcome Into Our Space</span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            The Koketso Rakhudu Foundation was established on 1 May 2016 to address educational and skills gaps in underserved communities.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Dr. Koketso Rakhudu serves as Chancellor of the Foundation CET Centre, Kgosana of Tsitsing (Royal Bafokeng Nation), Guest Lecturer at UNISA and NWU, Deputy Chairperson of the Provincial Council on AIDS, and Founder of the Village Economy Indaba.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            His research partnerships span the Aurum Institute and Johns Hopkins University, and his leadership has been recognised by the Pan African Leadership Institute.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            As Chancellor, Dr. Rakhudu envisions creating transformative educational experiences that empower individuals and drive sustainable development within communities.
          </p>

          <div className="flex items-center gap-4 pt-6 border-t border-gold/20">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
              DK
            </div>
            <div>
              <h3 className="text-xl font-bold text-gold">Dr. Koketso Rakhudu</h3>
              <p className="text-sm text-gray-600">Founder & Visionary Leader</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============= VISION & MISSION ============= */}
      <section className="relative overflow-hidden">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gold/30 shadow-lg">
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">Our Foundation</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="gradient-text">Vision & Mission</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="group relative bg-gradient-to-br from-white to-gold/5 border-l-4 border-gold p-8 rounded-3xl shadow-2xl shadow-black/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
            {/* Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-gold to-yellow-600 rounded-xl shadow-lg shadow-gold/50 flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <TargetIcon className="w-7 h-7" />
            </div>

            <h3 className="text-3xl font-bold text-charcoal mb-4 mt-4">Vision</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              <span className="font-semibold italic text-gold text-xl">
                "Empowering Lives with Excellence."
              </span>{" "}
              <br /><br />
              Creating a community where every individual has access to quality
              education and training opportunities that unlock their full
              potential and contribute to sustainable community development.
            </p>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
          </div>

          <div className="group relative bg-gradient-to-br from-white to-gold/5 border-l-4 border-gold p-8 rounded-3xl shadow-2xl shadow-black/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
            {/* Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-gold to-yellow-600 rounded-xl shadow-lg shadow-gold/50 flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <RocketIcon className="w-7 h-7" />
            </div>

            <h3 className="text-3xl font-bold text-charcoal mb-4 mt-4">Mission</h3>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              A forward-thinking education approach focused on challenging,
              innovative, and personalized learning within our
              community-based space. We nurture and inspire students to achieve
              personal excellence while embracing diversity, developing
              character, and self-worth.
            </p>
            <ul className="text-gray-700 leading-relaxed text-base space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span>Deliver accredited programmes aligned with SETA standards</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span>Support lifelong learning and skills development</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span>Host practical workshops and community training initiatives</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span>Partner with SETAs, educational institutions, and development agencies</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span>Foster a high-performance culture of excellence</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span>Continuous improvement and innovation</span>
              </li>
            </ul>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ============= KEY PARTNERSHIPS ============= */}
      <section className="relative">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gold/30 shadow-lg">
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">Working Together</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="gradient-text">Key Partnerships</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building sustainable impact through strategic alliances with leading institutions and community organisations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Khuli Chana Foundation", desc: "Youth empowerment and community development" },
            { name: "Cam Life Productions", desc: "Media and skills training partnerships" },
            { name: "Village Economy Indaba", desc: "Economic development and entrepreneurship" },
            { name: "Provincial Council on AIDS", desc: "Health education and awareness programmes" }
          ].map((partner, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-200 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-yellow-600 rounded-t-2xl" />
              <div className="w-14 h-14 mb-4 bg-gradient-to-br from-gold/20 to-yellow-600/20 rounded-xl flex items-center justify-center">
                <LinkIcon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2 group-hover:text-gold transition-colors duration-300">
                {partner.name}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {partner.desc}
              </p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </section>

      {/* ============= PHILOSOPHY & APPROACH ============= */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '48px 48px'}} />
        </div>

        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Our Philosophy and Approach
            </h2>
            <p className="text-2xl italic text-gold mb-6">"The Passage of Excellence"</p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Entering our skills development centers is central to the overall
              learning experience. The journey from entrance to classroom allows our
              learners to reflect on the day ahead, quieting their minds from
              external distractions and focusing their thoughts — a deliberate act
              to achieve optimal learning in an extraordinary space.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "Entry", Icon: DoorOpenIcon, desc: "Welcome" },
              { step: "Reflection", Icon: SparklesIcon, desc: "Prepare" },
              { step: "Learning", Icon: BookOpenIcon, desc: "Engage" },
              { step: "Growth", Icon: GrowthIcon, desc: "Excel" }
            ].map((item, idx) => {
              const Icon = item.Icon
              return (
                <div
                  key={item.step}
                  className={`group relative bg-white border-2 border-gold/30 rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up animation-delay-${idx * 200}`}
                >
                  <div className="w-14 h-14 mx-auto mb-4 text-gold transform group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-full h-full" />
                  </div>
                  <p className="font-bold text-gold text-xl mb-1">{item.step}</p>
                  <p className="text-sm text-gray-600">{item.desc}</p>

                  {/* Progress indicator */}
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-gold to-yellow-600 rounded-full" />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============= CORE VALUES ============= */}
      <section className="relative">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gold/30 shadow-lg">
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">What Drives Us</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="gradient-text">Our Core Values</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At our Community Education & Training Centre, we are grounded in a shared commitment to excellence, guided by these seven principles that shape everything we do.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Lifelong Learning",
              desc: "Education is a continuous journey empowering individuals at every stage of life.",
              Icon: BookOpenIcon,
              color: "from-blue-500 to-blue-600"
            },
            {
              title: "Community Empowerment",
              desc: "We build bridges between individuals and opportunities for lasting growth.",
              Icon: GlobeIcon,
              color: "from-cyan-500 to-cyan-600"
            },
            {
              title: "Excellence in Education",
              desc: "We strive for the highest standards in teaching, leadership, and delivery.",
              Icon: TrophyIcon,
              color: "from-gold to-yellow-600"
            },
            {
              title: "Inclusivity & Diversity",
              desc: "We embrace diversity and ensure that no one is left behind.",
              Icon: UsersIcon,
              color: "from-green-500 to-emerald-600"
            },
            {
              title: "Ethical Leadership",
              desc: "We uphold transparency, integrity and ethical decision-making in all our actions.",
              Icon: SparklesIcon,
              color: "from-purple-500 to-purple-600"
            },
            {
              title: "Innovation & Curiosity",
              desc: "We nurture creativity and forward-thinking solutions to today's challenges.",
              Icon: LightBulbIcon,
              color: "from-orange-500 to-orange-600"
            },
            {
              title: "Collaboration & Partnership",
              desc: "We believe true impact comes through collective effort and shared purpose.",
              Icon: LinkIcon,
              color: "from-pink-500 to-pink-600"
            },
          ].map((value, index) => {
            const Icon = value.Icon
            return (
              <div
                key={index}
                className="group relative bg-white border border-gray-200 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                {/* Colored top border */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${value.color} rounded-t-2xl`} />

                {/* Icon */}
                <div className="w-14 h-14 mb-4 text-gold transform group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-full h-full" />
                </div>

                <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-gold transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {value.desc}
                </p>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
              </div>
            )
          })}
        </div>
      </section>

      {/* ============= ACCREDITATION FOOTNOTE ============= */}
      <footer className="text-center py-8 border-t border-gold/20 bg-gradient-to-br from-gray-50 to-white rounded-2xl">
        <div className="text-sm text-gray-600 leading-relaxed space-y-2">
          <p>
            <span className="font-bold text-gold">Primary SETA:</span> ETDP SETA ·
            <span className="font-bold text-gold"> Accreditation Number:</span> ETDP011394 | Code: 581 ·
            <span className="font-bold text-gold"> SAQA Provider Code:</span> ETDP2368 ·
            <span className="font-bold text-gold"> Reg No:</span> 177-109 NPO
          </p>
          <p className="flex items-center justify-center gap-4 flex-wrap">
            <span className="inline-flex items-center gap-2 font-semibold text-charcoal">
              <PhoneIcon className="w-4 h-4 text-gold" />
              +27 63 644 5723
            </span>
            <span>·</span>
            <span className="inline-flex items-center gap-2 font-semibold text-charcoal">
              <MailIcon className="w-4 h-4 text-gold" />
              Dumela@drkoketsorakhudu.com
            </span>
            <span>·</span>
            <span className="inline-flex items-center gap-2 font-semibold text-charcoal">
              <GlobeIcon className="w-4 h-4 text-gold" />
              www.drkoketsorakhudufoundation.com
            </span>
          </p>
        </div>
      </footer>
    </main>
  )
}
