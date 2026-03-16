import React from 'react';
import { Helmet } from 'react-helmet';

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

        <img src="/images/Officeofkgosanateams.jpeg" alt="Office Team of Kgosana Koketso Rakhudu" className="w-full h-64 object-contain rounded-lg shadow-lg mb-8" loading="lazy" />

        <p className="mb-6">
          The Office executes VisionPlan 2035 with focus areas in governance, education, economic empowerment, cultural preservation, and impact investment. Through this, it promotes transparent governance, sustainability, and ethical leadership while retaining strong community engagement through traditional Kgotla practices.
        </p>

        <ul className="list-disc list-inside mb-6 space-y-4 text-gray-700">
          <li><strong className="text-[#1B5538]">Fostering Community Engagement:</strong> Open dialogue and inclusion via Kgotla forums reinforce grassroots participation and cultural continuity.</li>
          <li><strong className="text-[#1B5538]">Investing in Talent & Skills:</strong> Skills gap analyses and training initiatives equip youth with in-demand skills in tech, health, agriculture, and more.</li>
          <li><strong className="text-[#1B5538]">Driving Economic Transformation:</strong> Through microfinance, entrepreneurship, and renewable energy initiatives, the Office builds sustainable local economies.</li>
          <li><strong className="text-[#1B5538]">Leading with Cultural Integrity:</strong> Art, ritual, and heritage projects protect identity while embracing modern development pathways.</li>
        </ul>

        <section className="bg-[#F1F5F9] p-6 rounded-lg shadow-md mt-12">
          <h2 className="text-2xl font-semibold text-[#1B5538] mb-4">Strategic Vision & Frameworks</h2>
          <p className="mb-4">
            OOKKR operates using the Singapore COMPASS Framework, which emphasizes complementarity in talent development, ensuring that foreign and local skills work synergistically. It supports sectors from mining to tourism and education to green energy—driven by results-based monitoring and continuous community feedback.
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Royal Bafokeng Nation Plan 2035 alignment for long-term local prosperity</li>
            <li>National Development Plan 2030 goals including skills and job creation</li>
            <li>UN SDGs including quality education, clean energy, and reduced inequality</li>
            <li>Impact Investment strategies guided by sustainability and inclusivity</li>
          </ul>
        </section>

        <section className="mt-12">
  <h2 className="text-2xl font-semibold text-[#1B5538] mb-4">
    Sector Priorities Overview
  </h2>
  <p className="mb-6 text-gray-600">A high-level map of our focus areas:</p>
  <ol className="space-y-4 text-gray-700">
    <li className="flex items-start space-x-3">
      <span className="text-xl">🏛️</span>
      <p>
        <span className="font-semibold">Local Government & Engagement:</span>{" "}
        Strong leadership = better service delivery.
      </p>
    </li>
    <li className="flex items-start space-x-3">
      <span className="text-xl">📚</span>
      <p>
        <span className="font-semibold">Education & Skills:</span>{" "}
        Closing the skills gap.
      </p>
    </li>
    <li className="flex items-start space-x-3">
      <span className="text-xl">💰</span>
      <p>
        <span className="font-semibold">Microfinance & Inclusion:</span>{" "}
        Fuel for small business growth.
      </p>
    </li>
    <li className="flex items-start space-x-3">
      <span className="text-xl">💻</span>
      <p>
        <span className="font-semibold">Digital Economy:</span>{" "}
        Tech for efficiency, innovation, and access.
      </p>
    </li>
    <li className="flex items-start space-x-3">
      <span className="text-xl">🎨</span>
      <p>
        <span className="font-semibold">Creative Arts & Culture:</span>{" "}
        Showcasing local heritage globally.
      </p>
    </li>
    <li className="flex items-start space-x-3">
      <span className="text-xl">⛏️</span>
      <p>
        <span className="font-semibold">Mining, Construction & Logistics:</span>{" "}
        Responsible resource use + infrastructure growth.
      </p>
    </li>
    <li className="flex items-start space-x-3">
      <span className="text-xl">🌱</span>
      <p>
        <span className="font-semibold">Agriculture:</span>{" "}
        Climate-smart farming & food security for youth.
      </p>
    </li>
    <li className="flex items-start space-x-3">
      <span className="text-xl">🌍</span>
      <p>
        <span className="font-semibold">Tourism:</span>{" "}
        Heritage + exotic experiences.
      </p>
    </li>
    <li className="flex items-start space-x-3">
      <span className="text-xl">⚕️</span>
      <p>
        <span className="font-semibold">Health & Sanitation:</span>{" "}
        Better access, cleaner communities.
      </p>
    </li>
    <li className="flex items-start space-x-3">
      <span className="text-xl">⚡</span>
      <p>
        <span className="font-semibold">Renewable Energy:</span>{" "}
        Clean power for a sustainable future.
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
