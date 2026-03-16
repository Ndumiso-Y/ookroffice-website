import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSeedling, FaLeaf, FaHandHoldingUsd, FaFacebook, FaCoffee } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const Divisions = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const toggleVideoModal = () => {
    setIsVideoOpen(!isVideoOpen);
  };

  return (
    <div className="container mx-auto px-6 py-16">
      <Helmet>
        <title>Our Divisions | Kgosana Koketso Rakhudu</title>
        <meta name="description" content="Explore divisions under Kgosana Koketso Rakhudu focused on sustainable development and community empowerment in the Royal Bafokeng Nation." />
        <meta name="keywords" content="Kgosana Koketso Rakhudu, VisionPlan 2035, Royal Bafokeng Nation, community development, sustainability" />
      </Helmet>

      {/* Header */}
      <header>
        <h1 className="text-4xl font-bold mb-12 text-center text-[#1B5538]">Our Divisions</h1>
      </header>

      {/* Kgothla ya Rakhudu */}
      <section className="mb-12 bg-gray-50 p-6 rounded-lg shadow-lg relative overflow-hidden">
        <img 
          src="/images/KgotlhaLogo.png" 
          alt="Kgotla ya Rakhudu Logo" 
          loading="lazy"
          className="mx-auto mb-4 w-32 h-32 object-contain opacity-90"
        />
        <h2 className="text-3xl font-semibold text-[#397D5A] mb-4 text-center">Kgotla ya Rakhudu</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Kgotla ya Rakhudu is a community-focused organization under Kgosana Koketso Rakhudu. Dedicated to strengthening local communities, it preserves cultural heritage, promotes social cohesion, and fosters sustainable development.
        </p>

        {/* Video Display Button */}
        <div className="text-center">
          <button 
            onClick={toggleVideoModal} 
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Watch Video
          </button>
        </div>

        {/* Video Modal with Iframe */}
        {isVideoOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
              <button onClick={toggleVideoModal} className="text-gray-500 hover:text-gray-800 text-xl absolute top-2 right-2">
                Close
              </button>
              <iframe 
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/7ZfgMBaYv7Y" 
                title="Introduction video of the State of The Kgotla Address" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
                className="w-full h-auto rounded-md">
              </iframe>
            </div>
          </div>
        )}
      </section>

      {/* Investment & Sustainability Development Trust */}
      <section className="mb-12 bg-gray-50 p-6 rounded-lg shadow-lg relative">
        <img 
          src="/images/InvestmentSustainabilityLogo.png" 
          alt="Investment & Sustainability Development Trust Logo" 
          loading= "lazy"
          className="mx-auto mb-4 w-32 h-32 object-contain opacity-90"
        />
        <h2 className="text-3xl font-semibold text-[#397D5A] mb-4 text-center">Investment & Sustainability Development Trust</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Driving economic growth through sustainable investment, focusing on sectors like agriculture, renewable energy, and small enterprise development.
        </p>

        <div className="flex justify-around items-center mt-6">
          <div className="text-center">
            <FaSeedling className="text-4xl text-[#1B5538] mb-2" />
            <p className="text-gray-700 font-semibold">Agriculture</p>
          </div>
          <div className="text-center">
            <FaLeaf className="text-4xl text-[#1B5538] mb-2" />
            <p className="text-gray-700 font-semibold">Renewable Energy</p>
          </div>
          <div className="text-center">
            <FaHandHoldingUsd className="text-4xl text-[#1B5538] mb-2" />
            <p className="text-gray-700 font-semibold">Small Enterprises</p>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            to="/investment-sustainability-trust"
            className="inline-block px-8 py-3 bg-[#1B5538] text-white font-semibold rounded-lg shadow-md hover:bg-[#397D5A] transition duration-200 transform hover:scale-105"
          >
            Explore Our Initiatives
          </Link>
        </div>
      </section>

      {/* Koketso Rakhudu Foundation */}
      <section className="mb-12 bg-white p-6 rounded-lg shadow-lg relative">
        <img 
          src="/images/KRFLogo.png" 
          alt="Koketso Rakhudu Foundation Logo"
          loading= "lazy" 
          className="mx-auto mb-4 w-32 h-32 object-contain opacity-90"
        />
        <h2 className="text-3xl font-semibold text-[#397D5A] mb-4 text-center">Koketso Rakhudu Foundation</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          An educational platform focusing on skills development in areas like entrepreneurship, technology, and community leadership.
        </p>

        <div className="text-center mt-6">
          <a 
            href="https://www.facebook.com/p/Koketso-Rakhudu-Foundation-100064528696915/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-[#1B5538] text-white font-semibold rounded-lg shadow-md hover:bg-[#397D5A] transition duration-200"
          >
            <FaFacebook className="mr-2 text-xl" />
            Follow us on Facebook
          </a>
        </div>

        <div className="text-center mt-6">
          <Link 
            to="/koketso-rakhudu-foundation"
            className="inline-block px-8 py-3 bg-[#397D5A] text-white font-semibold rounded-lg shadow-md hover:bg-[#1B5538] transition duration-200"
          >
            Learn More About the Foundation
          </Link>
        </div>
      </section>

      {/* Coffee with Dr. Koketso Rakhudu */}
      <section className="mb-12 bg-gray-50 p-6 rounded-lg shadow-lg relative overflow-hidden">
        <img 
          src="/images/CoffeeKoketsoLogo.png" 
          alt="Coffee with Dr Koketso Rakhudu" 
          loading= "lazy"
          className="mx-auto mb-4 w-32 h-32 object-contain opacity-90"
        />
        <h2 className="text-3xl font-semibold text-[#397D5A] mb-4 text-center">Coffee with Dr. Koketso Rakhudu</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          "Coffee with Dr. Koketso" provides a platform for community discussions on local challenges and future solutions.
        </p>

        {/* Coffee Icon */}
        <div className="flex justify-center my-6">
          <FaCoffee className="text-[#1B5538] text-6xl animate-pulse" />
        </div>

        {/* Join the Conversation Link */}
        <div className="text-center mt-8">
          <Link
            to="/coffee-with-dr-rakhudu"
            className="inline-block px-8 py-3 bg-[#1B5538] text-white font-semibold rounded-lg shadow-lg hover:bg-[#397D5A] transition duration-200 transform hover:scale-105"
          >
            Join the Conversation
          </Link>
        </div>
      </section>

      {/* The Village Economy Indaba */}
      <section className="mb-12 bg-gray-50 p-6 rounded-lg shadow-lg relative overflow-hidden">
        <img 
          src="/images/TVEILogo.png" 
          alt="The Village Economy Indaba Logo" 
          loading= "lazy"
          className="mx-auto mb-4 w-32 h-32 object-contain opacity-90"
        />
        <h2 className="text-3xl font-semibold text-[#397D5A] mb-4 text-center">The Village Economy Indaba</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The Village Economy Indaba is a 12-month program offering support to small and micro-enterprises in villages.
        </p>

        {/* Participate Link */}
        <div className="text-center mt-8">
          <Link
            to="/the-village-economy-indaba"
            className="inline-block px-8 py-3 bg-[#1B5538] text-white font-semibold rounded-lg shadow-lg hover:bg-[#397D5A] transition duration-200 transform hover:scale-105"
          >
            Participate in the initiative
          </Link>
        </div>
      </section>
{/* Dr. Koketso Rakhudu Business School of Leadership Excellence */}
<section className="mb-12 bg-gray-50 p-6 rounded-lg shadow-lg relative overflow-hidden">
        <img 
          src="/images/BusinessSchoolOfLeadershipExcellenceLogo.png" 
          alt="Business School Of Leadership Excellence logo"
          loading= "lazy" 
          className="mx-auto mb-4 w-32 h-32 object-contain opacity-90"
        />
        <h2 className="text-3xl font-semibold text-[#397D5A] mb-4 text-center">Dr. Koketso Rakhudu Business School of Leadership Excellence</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The Dr. Koketso Rakhudu Business School of Leadership Excellence is a pioneering institution committed to cultivating transformative leaders. The school provides a comprehensive curriculum that merges ethical governance, sustainable development, and business acumen. Students are empowered to make a lasting impact on their communities and industries through responsible and forward-thinking leadership.
        </p>

        {/* Learn More Link */}
        <div className="text-center mt-8">
          <Link
            to="/business-school-of-leadership-excellence"
            className="inline-block px-8 py-3 bg-[#1B5538] text-white font-semibold rounded-lg shadow-lg hover:bg-[#397D5A] transition duration-200 transform hover:scale-105"
          >
            Learn More About the Business School
          </Link>
        </div>
      </section>

       {/* Kgosana Koketso Rakhudu Group */}
<section className="mb-12 bg-gray-50 p-6 rounded-lg shadow-lg relative overflow-hidden">
        <img 
          src="/images/KKRGLogo.png" 
          alt="Kgosana Koketso Rakhudu Group logo"
          loading= "lazy" 
          className="mx-auto mb-4 w-32 h-32 object-contain opacity-90"
        />
        <h2 className="text-3xl font-semibold text-[#397D5A] mb-4 text-center">Kgosana Koketso Rakhudu Group</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
        A Private Special Economic Vehicle Company like the KKR Group is a privately owned entity designed to drive economic development through strategic investments, community partnerships, and innovative projects. It facilitates infrastructure growth, attracts business investments, and supports job creation and skills development. Operating independently, it collaborates with stakeholders to implement sustainable and inclusive economic frameworks. The company focuses on localized growth, empowering communities, and fostering industry innovation. Its activities span enterprise development, agriculture, training, and wealth distribution, ensuring equitable benefits for stakeholders.
        </p>

        {/* Learn More Link */}
        <div className="text-center mt-8">
          <Link
            to="/kgosana-koketso-rakhudu-group"
            className="inline-block px-8 py-3 bg-[#1B5538] text-white font-semibold rounded-lg shadow-lg hover:bg-[#397D5A] transition duration-200 transform hover:scale-105"
          >
            Learn More About Kgosana Koketso Rakhudu Group
          </Link>
        </div>
      </section>
      {/* Hakem Energies Foundation Divisions */}
<section className="mb-12 bg-gray-50 p-6 rounded-lg shadow-lg relative overflow-hidden">
  <img 
    src="/images/HakemEnergiesFoundationLogo.png" 
    alt="Hakem Energies Foundation logo" 
    loading="lazy" 
    className="mx-auto mb-4 w-32 h-32 object-contain opacity-90"
  />
  <h2 className="text-3xl font-semibold text-[#397D5A] mb-4 text-center">Hakem Energies Foundation</h2>
  <p className="text-lg text-gray-700 leading-relaxed mb-6">
    The <strong>Hakem Energies Foundation</strong> is dedicated to providing sustainable, clean energy solutions, empowering marginalized communities, and advocating for inclusive growth. By focusing on energy access, women and youth empowerment, and community-driven development, the Foundation creates lasting socio-economic impacts. Its initiatives are aimed at improving living conditions, fostering economic growth through energy access, and promoting gender equality in the energy sector. The Foundation works collaboratively with communities, governments, and stakeholders to create policies, programs, and projects that foster a cleaner, more equitable energy future for all.
  </p>

  {/* Learn More Link */}
  <div className="text-center mt-8">
    <Link
      to="/hakem-energies-foundation"
      className="inline-block px-8 py-3 bg-[#1B5538] text-white font-semibold rounded-lg shadow-lg hover:bg-[#397D5A] transition duration-200 transform hover:scale-105"
    >
      Learn More About Hakem Energies Foundation
    </Link>
  </div>
</section>

    </div>
  );
};

export default Divisions;
