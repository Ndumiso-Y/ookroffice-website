import React from "react";
import {
  LuSprout,
  LuGraduationCap,
  LuFactory,
  LuHammer,
  LuHeartPulse,
  LuSun,
  LuMonitorSmartphone,
  LuTrees,
  LuUsers,
  LuTruck,
} from "react-icons/lu";

const SECTORS = [
  {
    slug: "local-governance",
    title: "Local Governance & Community Engagement",
    tagline: "Lead • Engage • Empower",
    description:
      "Empowering tribal communities through enhanced governance and active participation in decision-making. Includes workshops on governance structures, community forums, and civic responsibility training.",
    icon: LuUsers,
  },
  {
    slug: "education-skills",
    title: "Education & Skills Development",
    tagline: "Learn • Train • Empower",
    description:
      "Access to quality education and vocational training tailored to tribal communities, promoting literacy, technical skills, and entrepreneurship.",
    icon: LuGraduationCap,
  },
  {
    slug: "health-wellbeing",
    title: "Health & Wellbeing",
    tagline: "Care • Prevent • Thrive",
    description:
      "Improving access to healthcare services, nutrition, wellness programs, and sports initiatives for healthier communities.",
    icon: LuHeartPulse,
  },
  {
    slug: "agriculture-food",
    title: "Agriculture & Food Security",
    tagline: "Grow • Sustain • Feed",
    description:
      "Enhancing food production, sustainable farming practices, and agri-business opportunities to ensure food security and livelihoods.",
    icon: LuSprout,
  },
  {
    slug: "infrastructure-housing",
    title: "Infrastructure & Housing Development",
    tagline: "Build • Improve • Connect",
    description:
      "Development of roads, water systems, housing, and essential infrastructure to improve living standards and connectivity.",
    icon: LuHammer,
  },
  {
    slug: "enterprise-development",
    title: "Enterprise Development & SMMEs",
    tagline: "Start • Grow • Trade",
    description:
      "Supporting small businesses, cooperatives, and entrepreneurship through incubation, finance readiness, and market access.",
    icon: LuFactory,
  },
  {
    slug: "digital-economy",
    title: "Digital Economy & Innovation",
    tagline: "Code • Create • Connect",
    description:
      "Promoting digital skills, e-commerce, innovation hubs, and access to technology for inclusive economic growth.",
    icon: LuMonitorSmartphone,
  },
  {
    slug: "environment-tourism",
    title: "Environment, Culture & Tourism",
    tagline: "Protect • Preserve • Share",
    description:
      "Promoting conservation, eco-tourism, and cultural heritage to generate sustainable income and preserve natural assets.",
    icon: LuTrees,
  },
  {
    slug: "energy-climate",
    title: "Energy & Climate Action",
    tagline: "Power • Save • Adapt",
    description:
      "Implementing renewable energy projects, climate resilience programs, and energy efficiency solutions.",
    icon: LuSun,
  },
  {
    slug: "logistics-market-access",
    title: "Logistics & Market Access",
    tagline: "Move • Store • Sell",
    description:
      "Developing transport, storage, and distribution systems to connect producers to local and international markets.",
    icon: LuTruck,
  },
];

const Sectors = () => {
  return (
    <section className="bg-white text-gray-800 py-16">
      <div className="page-container">
        <h2 className="text-4xl font-bold text-green-700 mb-3">10 Key Sectors</h2>
        <p className="text-gray-600 mb-10 max-w-3xl">
          These sectors form the pillars of the Village Economy Indaba, each driving sustainable development and empowering communities.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {SECTORS.map(({ slug, title, tagline, description, icon: Icon }) => (
            <article
              key={slug}
              className="group h-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-2xl bg-green-50 p-3 text-green-700">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <div className="leading-tight">
                  <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                  <p className="text-xs uppercase tracking-wide text-green-700">{tagline}</p>
                </div>
              </div>

              <p className="text-sm text-gray-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;
