// src/pages/Approach.jsx

import {
  AcademicCapIcon,
  BriefcaseIcon,
  UsersIcon,
  BadgeCheckIcon,
  ComputerIcon,
  HeartIcon,
  ScaleIcon,
  CogIcon,
  UserGroupIcon,
  TrendingUpIcon,
  ShieldCheckIcon,
  TargetIcon,
  CheckCircleIcon,
  ChartBarIcon,
  ClockIcon,
  SparklesIcon
} from '../components/Icons'

export default function Approach() {
  const focusAreas = [
    { title: "Applied Research & Innovation", desc: "Cutting-edge research initiatives that drive innovation and practical solutions for community challenges.", Icon: SparklesIcon, color: "from-purple-500 to-purple-600" },
    { title: "Education & Skills Development", desc: "Comprehensive training programs designed to build practical job-ready skills for sustainable employment.", Icon: AcademicCapIcon, color: "from-blue-500 to-blue-600" },
    { title: "Socio-economic & Enterprise Development", desc: "Supporting entrepreneurship and economic growth through business development and enterprise support.", Icon: BriefcaseIcon, color: "from-gold to-yellow-600" },
    { title: "Learnership, Bursary & Graduate Placement", desc: "Bridging the gap between education and employment through structured placement programs.", Icon: BadgeCheckIcon, color: "from-green-500 to-emerald-600" },
    { title: "University Work Integrated Learnership", desc: "Facilitating practical work experience opportunities that complement academic learning.", Icon: ComputerIcon, color: "from-cyan-500 to-cyan-600" },
    { title: "GBV & HIV Prevention", desc: "Community awareness and prevention programs addressing gender-based violence and health challenges.", Icon: ShieldCheckIcon, color: "from-red-500 to-red-600" },
    { title: "Women & Persons with Disability", desc: "Inclusive programs ensuring equal access to opportunities for all community members.", Icon: UsersIcon, color: "from-pink-500 to-pink-600" },
    { title: "Mine SLP & Municipal LED Consulting", desc: "Specialized consulting services for Social Labour Plans and Local Economic Development initiatives.", Icon: CogIcon, color: "from-orange-500 to-orange-600" },
    { title: "Community Development Interventions", desc: "Targeted programs addressing specific community needs and developmental challenges.", Icon: UserGroupIcon, color: "from-indigo-500 to-indigo-600" },
    { title: "Health & Social Behavior Change", desc: "Health promotion and behavior change programs for improved community wellbeing.", Icon: HeartIcon, color: "from-rose-500 to-rose-600" },
    { title: "Traditional Leadership & Corporate Governance", desc: "Supporting traditional structures with modern governance practices and leadership development.", Icon: ScaleIcon, color: "from-teal-500 to-teal-600" },
  ]

  const methodology = [
    { step: "Learning Journey Process", Icon: TargetIcon, desc: "Strategic pathway design" },
    { step: "Needs Assessment", Icon: ChartBarIcon, desc: "Community analysis" },
    { step: "Program Design", Icon: CogIcon, desc: "Curriculum development" },
    { step: "Quality Delivery", Icon: CheckCircleIcon, desc: "Excellence in execution" },
    { step: "Outcome Assessment", Icon: TrendingUpIcon, desc: "Impact measurement" },
    { step: "Industry Integration", Icon: UserGroupIcon, desc: "Employment readiness" },
  ]

  return (
    <main className="mx-auto max-w-7xl px-4 md:px-8 py-16 space-y-20">
      {/* ===== HERO SECTION ===== */}
      <section className="relative text-center overflow-hidden py-12">
        {/* Background decorations */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse animation-delay-400" />
        </div>

        <div className="inline-block mb-6 px-6 py-2 rounded-full bg-gold/10 border border-gold/20 backdrop-blur-sm animate-fade-in">
          <span className="text-sm font-semibold text-gold uppercase tracking-wider">Our Methodology</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 animate-fade-in-down">
          <span className="gradient-text">Our Strategic Approach</span>
        </h1>
        <p className="max-w-3xl mx-auto text-xl text-gray-700 leading-relaxed animate-fade-in-up animation-delay-200 mb-6">
          Through our strategically designed structure, which embraces diversity and uniqueness, we deliver exceptional training programmes that ensure the highest quality of education.
        </p>
        <p className="max-w-3xl mx-auto text-xl text-gray-700 leading-relaxed animate-fade-in-up animation-delay-300">
          We foster industry partnerships for internship and job placement opportunities and reinforce our commitment through outcome-based assessments and personalised feedback.
        </p>
      </section>

      {/* ===== STRATEGIC FOCUS AREAS ===== */}
      <section>
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gold/30 shadow-lg">
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">Focus Areas</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Strategic Focus Areas
          </h2>
          <p className="text-center text-xl text-gray-700 max-w-3xl mx-auto">
            Our comprehensive focus areas form the foundation of our community development efforts, addressing education, socio-economic growth, health, and empowerment in an integrated way.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusAreas.map((item, index) => {
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

                <h3 className="text-lg font-bold text-charcoal mb-3 group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
              </div>
            )
          })}
        </div>
      </section>

      {/* ===== METHODOLOGY ===== */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '48px 48px'}} />
        </div>

        <div className="relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gold/30 shadow-lg">
              <span className="text-sm font-semibold text-gold uppercase tracking-wider">Process Excellence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Our Methodology
            </h2>
            <p className="text-center text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Through our strategically designed structure, which embraces diversity and uniqueness, we deliver exceptional training programmes that ensure the highest quality of education. We foster industry partnerships for internship and job placement opportunities and reinforce our commitment through outcome-based assessments and personalised feedback.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodology.map((item, index) => {
              const Icon = item.Icon
              return (
                <div
                  key={index}
                  className="group relative bg-white border-2 border-gold/30 rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-4 text-gold transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Icon className="w-full h-full" />
                  </div>

                  <h3 className="font-bold text-charcoal text-xl mb-2 group-hover:text-gold transition-colors duration-300">{item.step}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>

                  {/* Progress indicator */}
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-gold to-yellow-600 rounded-full" />

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/10 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
                </div>
              )
            })}
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
            +27 63 644 5723 · Dumela@drkoketsorakhudu.com
          </span>{" "}
          · www.drkoketsorakhudufoundation.com
        </p>
      </footer>
    </main>
  )
}
