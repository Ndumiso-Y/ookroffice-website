import React from 'react';
import { getPublicImage } from '../shared/utils/assetPaths';
import { Helmet } from 'react-helmet-async';

function About() {
  return (
    <div className="container mx-auto px-6 py-12">
      <Helmet>
        <title>About the Office of Kgosana Dr Koketso Rakhudu | Tsitsing Leadership</title>
        <meta name="description" content="Discover the impactful work of the Office of Kgosana Dr Koketso Rakhudu, bridging tradition and modernity to guide Tsitsing towards a sustainable future." />
        <meta name="keywords" content="Kgosana Koketso Rakhudu, Tsitsing, Royal Bafokeng Nation, VisionPlan 2035, Community Development, OOKKR, Impact Investment" />
      </Helmet>

      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#1B5538] mb-4">About the Office of Kgosana Dr Koketso Rakhudu</h1>
        <p className="text-lg text-gray-700">A bridge between tradition and modernity, guiding Tsitsing toward a sustainable future.</p>
      </header>

      <section className="text-left mt-8 text-gray-700">
        <p className="mb-6">
          The Office of Kgosana Dr Koketso Rakhudu (OOKKR) is a pioneering traditional and developmental governance institution that plays a catalytic role in Tsitsing and the greater Royal Bafokeng Nation. It represents a bold fusion of traditional leadership and modern economic strategy, designed to foster community-led growth and resilience.
        </p>

        <p className="mb-6">
          Under the leadership of Kgosana Dr. Koketso Rakhudu, the Office champions long-term thinking, self-investment, and purpose-driven leadership. It aligns closely with frameworks such as the Royal Bafokeng Nation Plan 2035, South Africa’s NDP 2030, and the UN Sustainable Development Goals—ensuring local action supports global impact.
        </p>

        <img src={getPublicImage("Officeofkgosanateams.jpeg")} alt="Office Team of Kgosana Koketso Rakhudu" className="w-full h-64 object-contain rounded-lg shadow-lg mb-8" loading="lazy" />

        <p className="mb-6">
          The Office executes VisionPlan 2035 through 10 key priorities spanning education, economic growth, health, environmental stewardship, energy, governance, infrastructure, agriculture, cultural heritage, and water security. Through this, it promotes transparent governance, sustainability, ESG-aligned development, and ethical leadership while retaining strong community engagement through traditional Kgotla practices.
        </p>

        <ul className="list-disc list-inside mb-6 space-y-4 text-gray-700">
          <li><strong className="text-[#1B5538]">Fostering Community Engagement:</strong> Open dialogue and inclusion via Kgotla forums reinforce grassroots participation and cultural continuity.</li>
          <li><strong className="text-[#1B5538]">Investing in Talent & Skills:</strong> Skills gap analyses and training initiatives equip youth with in-demand skills in tech, health, agriculture, and more.</li>
          <li><strong className="text-[#1B5538]">Driving Economic Transformation:</strong> Through enterprise development, economic diversification, and energy transition initiatives, the Office builds sustainable local economies.</li>
          <li><strong className="text-[#1B5538]">Leading with Cultural Integrity:</strong> Art, ritual, and heritage projects protect identity while embracing modern development pathways.</li>
        </ul>

        <section className="bg-[#F1F5F9] p-6 rounded-lg shadow-md mt-12">
          <h2 className="text-2xl font-semibold text-[#1B5538] mb-4">Strategic Vision & Frameworks</h2>
          <p className="mb-4">
            OOKKR applies the Singapore Governance Framework as a practical lens for capability building, institutional discipline, and results-based delivery. Its 10 key priorities align local action with Plan 2035, the SDGs, ESG principles, and Agenda 2063, guided by continuous community feedback and measurable development outcomes.
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Royal Bafokeng Nation Plan 2035 alignment for long-term local prosperity</li>
            <li>National Development Plan 2030 goals including skills and job creation</li>
            <li>UN SDGs including quality education, clean energy, reduced inequality, and clean water</li>
            <li>ESG and Agenda 2063 alignment for sustainable, inclusive African development</li>
            <li>Impact Investment strategies guided by sustainability, accountability, and inclusivity</li>
          </ul>
        </section>

        <section className="mt-12">
  <h2 className="text-2xl font-semibold text-[#1B5538] mb-4">
    10 Key Priorities Overview
  </h2>
  <p className="mb-6 text-gray-600">A high-level map of the approved priorities guiding Plan 2035 delivery:</p>
  <ol className="space-y-4 text-gray-700">
    <li className="flex items-start space-x-3">
      <span className="text-xl font-semibold text-[#1B5538]">1.</span>
      <p>
        <span className="font-semibold">Education & Skills Development:</span>{" "}
        Equipping learners, youth, and professionals with capabilities for long-term opportunity.
      </p>
    </li>
    <li className="flex items-start space-x-3">
      <span className="text-xl font-semibold text-[#1B5538]">2.</span>
      <p>
        <span className="font-semibold">Economic Diversification & Growth:</span>{" "}
        Broadening enterprise, investment, and employment pathways beyond a single economic base.
      </p>
    </li>
    <li className="flex items-start space-x-3">
      <span className="text-xl font-semibold text-[#1B5538]">3.</span>
      <p>
        <span className="font-semibold">Health & Wellbeing:</span>{" "}
        Strengthening access, prevention, dignity, and community wellbeing.
      </p>
    </li>
    <li className="flex items-start space-x-3">
      <span className="text-xl font-semibold text-[#1B5538]">4.</span>
      <p>
        <span className="font-semibold">Environmental Stewardship:</span>{" "}
        Protecting land, biodiversity, and natural resources through responsible local action.
      </p>
    </li>
    <li className="flex items-start space-x-3">
      <span className="text-xl font-semibold text-[#1B5538]">5.</span>
      <p>
        <span className="font-semibold">Energy Security & Transition:</span>{" "}
        Advancing reliable, affordable, and cleaner energy pathways for households and enterprise.
      </p>
    </li>
    <li className="flex items-start space-x-3">
      <span className="text-xl font-semibold text-[#1B5538]">6.</span>
      <p>
        <span className="font-semibold">Good Governance & Leadership:</span>{" "}
        Building accountable institutions, ethical leadership, and responsive service delivery.
      </p>
    </li>
    <li className="flex items-start space-x-3">
      <span className="text-xl font-semibold text-[#1B5538]">7.</span>
      <p>
        <span className="font-semibold">Infrastructure & Human Settlements:</span>{" "}
        Supporting dignified settlements, mobility, public facilities, and enabling infrastructure.
      </p>
    </li>
    <li className="flex items-start space-x-3">
      <span className="text-xl font-semibold text-[#1B5538]">8.</span>
      <p>
        <span className="font-semibold">Food Security & Agriculture:</span>{" "}
        Growing resilient food systems, local production, and climate-smart agriculture.
      </p>
    </li>
    <li className="flex items-start space-x-3">
      <span className="text-xl font-semibold text-[#1B5538]">9.</span>
      <p>
        <span className="font-semibold">Social Cohesion & Cultural Heritage:</span>{" "}
        Preserving identity, strengthening unity, and carrying heritage into future generations.
      </p>
    </li>
    <li className="flex items-start space-x-3">
      <span className="text-xl font-semibold text-[#1B5538]">10.</span>
      <p>
        <span className="font-semibold">Water & Sanitation:</span>{" "}
        Improving water security, sanitation access, and healthier community environments.
      </p>
    </li>
  </ol>
</section>


        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-[#1B5538] mb-4">Partnerships & Collaborations</h2>
          <p className="text-gray-700 mb-4">
            OOKKR works with a diverse array of partners—government bodies, educational institutions, private investors, and civil society—to co-develop, fund, and scale innovative solutions. These alliances ensure programs are inclusive, sustainable, and measurable.
          </p>
        </section>
      </section>
    </div>
  );
}

export default About;
