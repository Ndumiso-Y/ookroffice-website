import React from "react";
import {
  LuGoal,
  LuHammer,
  LuUsers,
  LuMapPin,
  LuSprout,
  LuSun,
  LuGraduationCap,
  LuHeartPulse,
  LuCoins,
  LuMegaphone,
  LuDroplet,
} from "react-icons/lu";

// VILLAGEGROW — 11 Pillars (Village Economy Indaba)
const PILLARS = [
  { key: "V", title: "Vision & Values", blurb: "A shared vision anchored in good governance, transparency, and community-first values to steer all programmes and partnerships.", icon: LuGoal },
  { key: "I", title: "Infrastructure & Inclusion", blurb: "Basic services and enabling infrastructure (roads, water, power, connectivity) delivered with inclusive design that reaches every household.", icon: LuHammer },
  { key: "L", title: "Local Governance & Leadership", blurb: "Strengthening traditional councils, ward committees, and community forums to co‑design, implement, and monitor development.", icon: LuUsers },
  { key: "L", title: "Land & Livelihoods", blurb: "Secure tenure, land use planning, and community asset management that open pathways to sustainable rural livelihoods.", icon: LuMapPin },
  { key: "A", title: "Agriculture & Agri‑Value Chains", blurb: "From production to processing and market access: cooperatives, aggregation hubs, and farmer support for food security and jobs.", icon: LuSprout },
  { key: "G", title: "Green Energy & Climate Resilience", blurb: "Renewables, efficiency retrofits, climate adaptation and clean cooking solutions that lower costs and build resilience.", icon: LuSun },
  { key: "E", title: "Education, Skills & Entrepreneurship", blurb: "Literacy, digital skills, artisanal training and enterprise support creating pipelines from learning to earning.", icon: LuGraduationCap },
  { key: "G", title: "Good Health & Wellbeing", blurb: "Primary healthcare outreach, nutrition, sport and mental wellness for thriving families and productive communities.", icon: LuHeartPulse },
  { key: "R", title: "Resources, Revenue & Investment", blurb: "Funding readiness, blended finance and local revenue strategies that keep value circulating in village economies.", icon: LuCoins },
  { key: "O", title: "Opportunities & Outreach", blurb: "Partnerships, procurement access, stakeholder engagement and communications to unlock markets and participation.", icon: LuMegaphone },
  { key: "W", title: "Water, Waste & Environment", blurb: "Integrated water management, circular economy projects and biodiversity protection aligned to local priorities.", icon: LuDroplet },
];

const Framework = () => {
  return (
    <section className="bg-white text-gray-800 py-16">
      <div className="page-container">
        <header className="mb-10">
          <h2 className="text-4xl font-bold text-green-700 mb-2">VILLAGEGROW Framework</h2>
          <p className="text-gray-600 max-w-3xl">
            The VILLAGEGROW framework sets out 11 cross‑cutting pillars that guide design and delivery across the Village Economy Indaba.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PILLARS.map(({ key, title, blurb, icon: Icon }, idx) => (
            <article
              key={`${key}-${idx}`}
              className="group h-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md hover:border-green-600 hover:bg-green-50/70"
            >
              <div className="mb-4 flex items-start gap-3">
                {/* Acronym letter badge */}
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-green-200 bg-green-50 text-base font-bold text-green-700 shadow-sm transition group-hover:bg-green-600 group-hover:text-white"
                  aria-label={`VILLAGEGROW letter ${key}`}
                  title={`VILLAGEGROW: ${key}`}
                >
                  {key}
                </div>

                {/* Icon + title */}
                <div className="flex-1">
                  <div className="mb-1 flex items-center gap-2 text-green-700 transition group-hover:text-green-800">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                    <span className="text-xs uppercase tracking-wide">VILLAGEGROW</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 transition group-hover:text-green-900">{title}</h3>
                </div>
              </div>

              <p className="text-sm text-gray-600 transition group-hover:text-gray-800">{blurb}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Framework;
