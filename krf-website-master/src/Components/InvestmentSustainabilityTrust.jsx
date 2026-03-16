import React from "react";
import { Helmet } from 'react-helmet';

const InvestmentSustainabilityTrust = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <Helmet>
        <title>Investment & Sustainability Development Trust (ISDT)</title>
        <meta name="description" content="Discover ISDT's commitment to sustainable growth, resource management, and community resilience through investment guidance and environmental stewardship." />
      </Helmet>

      {/* Header Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-8 text-[#397D5A]">Investment & Sustainability Development Trust</h1>
        <img 
          src="/images/InvestmentSustainabilitylogo.png" 
          alt="Investment Sustainability Development Trust logo" 
          className="mx-auto mb-4 w-64 h-64 object-contain opacity-90" 
          loading="lazy"
        />

        {/* Introduction */}
        <p className="text-lg mb-4 text-gray-700">
          The Investment & Sustainability Development Trust (ISDT) is dedicated to fostering sustainable growth and community resilience through a shared commitment to responsible resource management and strategic investment. Guided by Environmental, Social, and Governance (ESG) principles, ISDT aims to empower each household to thrive financially while contributing to the long-term health and prosperity of their community.
        </p>
      </section>

      {/* Vision and Mission Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-[#1B5538]">Our Vision and Mission</h2>
        <p className="mb-4 text-gray-700">
          <strong>Vision:</strong> A thriving, resilient community where each household participates in a sustainable, resource-efficient future.<br/>
          <strong>Mission:</strong> To empower communities by equipping households with the knowledge, tools, and frameworks needed to make impactful, sustainable financial choices. ISDT’s mission is to promote responsible growth and support community well-being through alignment with the United Nations Sustainable Development Goals (SDGs).
        </p>
      </section>

      {/* Key Principles Section */}
      <section className="mt-12 bg-[#F1F5F9] p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-[#1B5538]">Our Core Values</h2>
        
        <ul className="list-disc pl-6 text-gray-700">
          <li><strong>Environmental Stewardship:</strong> We prioritize projects that safeguard natural resources and minimize ecological footprints, fostering a community that values and respects the environment.</li>
          
          <li><strong>Social Equity:</strong> ISDT is committed to building an inclusive community by ensuring equal access to resources and opportunities for every household, promoting fairness and addressing socioeconomic disparities.</li>

          <li><strong>Community Empowerment:</strong> We provide households with the tools to take control of their financial futures, nurturing a culture of independence and self-reliance within the community.</li>

          <li><strong>Strategic Investment:</strong> By encouraging sustainable investment choices, ISDT supports the growth of a stable economic foundation that benefits both individuals and the wider community.</li>

          <li><strong>Transparency and Accountability:</strong> ISDT operates with integrity, ensuring that all decisions and investments are transparent, ethical, and aligned with the community’s best interests.</li>
        </ul>
      </section>

      {/* Core Initiatives Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-[#1B5538]">Core Initiatives</h2>

        <ul className="list-disc pl-6 text-gray-700">
          <li><strong>Household Investment Guidance:</strong> ISDT provides education and support to households on strategic investments that balance financial growth with sustainability. Our goal is to ensure families make informed financial choices that enhance both their own prosperity and community well-being.</li>
          
          <li><strong>Community Resource Management Workshops:</strong> Monthly workshops focus on practical skills like budgeting, resource management, and sustainable investment, equipping community members with tools to build lasting resilience.</li>
          
          <li><strong>Local Development and Partnership:</strong> ISDT collaborates with organizations and businesses to invest in community-driven projects that support infrastructure improvements, enhance access to social services, and promote environmental sustainability.</li>
          
          <li><strong>Quarterly Community Events:</strong> We host gatherings to bring together community members, leaders, and sustainability advocates, fostering discussions, sharing insights, and strategizing on impactful community investments. These events build meaningful networks and create a platform for innovative ideas.</li>
        </ul>
      </section>

      {/* Closing Statement */}
      <section className="mt-12">
        <p className="text-lg text-gray-700">
          At ISDT, we envision a community empowered to shape its future through sustainable investments, responsible resource management, and collective resilience. By aligning our efforts with global sustainability goals, we aim to foster a community that not only endures but flourishes, where each household contributes to and benefits from a vibrant, sustainable ecosystem.
        </p>
      </section>
    </div>
  );
};

export default InvestmentSustainabilityTrust;
