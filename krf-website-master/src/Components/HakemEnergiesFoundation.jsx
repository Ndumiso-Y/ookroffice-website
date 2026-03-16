import React from "react";
import { Helmet } from 'react-helmet';

const HakemEnergiesFoundation = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <Helmet>
        <title>Hakem Energies Foundation</title>
        <meta name="description" content="Explore the Hakem Energies Foundation's commitment to clean energy access, youth and women empowerment, and sustainable community development." />
      </Helmet>

      {/* Header Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-8 text-[#397D5A]">Hakem Energies Foundation</h1>
        <img 
          src="/images/HakemEnergiesFoundationLogo.png" 
          alt="Hakem Energies Foundation logo" 
          className="mx-auto mb-4 w-64 h-64 object-contain opacity-90" 
          loading="lazy"
        />

        {/* Introduction */}
        <p className="text-lg mb-4 text-gray-700">
          The <strong>Hakem Energies Foundation</strong> is committed to advancing sustainable energy access, empowering marginalized communities, and advocating for social change. Through clean energy solutions, empowering women and youth, and promoting community-led development, the Foundation strives to create a lasting socio-economic impact.
        </p>
      </section>

      {/* Vision and Mission Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-[#1B5538]">Our Vision and Mission</h2>
        <p className="mb-4 text-gray-700">
          <strong>Vision:</strong> A world where marginalized communities have access to clean, affordable energy, and every individual, regardless of gender or age, is empowered to thrive.<br/>
          <strong>Mission:</strong> To promote sustainable energy access, foster youth and women’s leadership, and support community-driven development to improve the well-being of underserved populations.
        </p>
      </section>

      {/* Core Pillars Section */}
      <section className="mt-12 bg-[#F1F5F9] p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-[#1B5538]">Our Key Pillars</h2>

        <ul className="list-disc pl-6 text-gray-700">
          <li><strong>Energy Access & Sustainability:</strong> We provide clean, affordable, and reliable energy solutions to eradicate energy poverty in marginalized communities. Our focus is on scalable and sustainable energy systems such as solar power and energy storage solutions that address long-term needs.</li>

          <li><strong>Women & Youth Empowerment:</strong> We offer skills development, entrepreneurship opportunities, and leadership training to empower women and youth in the energy sector. Our initiatives aim to foster equality and inclusivity, ensuring women and young people are active contributors in the energy industry.</li>

          <li><strong>Community Development & Advocacy:</strong> Through community-led initiatives, advocacy for policy reforms, and educational programs, we create sustainable socio-economic impacts. We prioritize educating and equipping communities with the knowledge and tools necessary to thrive in the energy transition.</li>
        </ul>
      </section>

      {/* Core Initiatives Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-[#1B5538]">Core Initiatives</h2>

        <ul className="list-disc pl-6 text-gray-700">
          <li><strong>Solar Energy Solutions:</strong> The Foundation delivers solar power systems to off-grid communities, improving access to clean energy for households, schools, and healthcare centers. We aim to reduce reliance on harmful fossil fuels and create a renewable energy ecosystem.</li>
          
          <li><strong>Empowerment Through Skills Training:</strong> We provide comprehensive training for women and youth in energy-related fields, from renewable energy technology to leadership skills. This empowers them to take up careers in energy and entrepreneurship, fostering economic independence.</li>
          
          <li><strong>Community Energy Projects:</strong> We support communities in designing and implementing energy solutions that meet their specific needs. Whether it’s setting up solar cooperatives or providing training in energy management, these projects are driven by the communities themselves.</li>
          
          <li><strong>Advocacy for Sustainable Energy Policies:</strong> We work closely with governments and stakeholders to influence policy changes that prioritize marginalized communities in energy access. We advocate for better investment in infrastructure and energy policies that are inclusive and sustainable.</li>
        </ul>
      </section>

      {/* Closing Statement */}
      <section className="mt-12">
        <p className="text-lg text-gray-700">
          The Hakem Energies Foundation is committed to creating a world where clean energy is a right, not a privilege. By empowering communities, especially women and youth, and advocating for sustainable policies, we aim to foster resilient, thriving communities that contribute to the global energy transition. Join us in making this vision a reality.
        </p>
      </section>
    </div>
  );
};

export default HakemEnergiesFoundation;
