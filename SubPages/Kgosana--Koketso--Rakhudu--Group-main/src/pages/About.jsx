import { Helmet } from 'react-helmet-async';
import Carousel from '../components/Carousel';
import { getAssetPath } from '../utils/assetPath';

const About = () => {
  const bannerImages = [
    getAssetPath('/assets/about-banner-1.jpg'),
    getAssetPath('/assets/about-banner-2.jpg'),
    getAssetPath('/assets/about-banner-3.jpg'),
  ];

  return (
    <>
      <Helmet>
        <title>About - KKR Group</title>
        <meta
          name="description"
          content="Learn about KKR Group, a Private Special Economic Vehicle Company focused on economic development, strategic investments, and community empowerment."
        />
      </Helmet>

      {/* Hero Carousel */}
      <section className="h-96 md:h-[500px]">
        <Carousel images={bannerImages} alt="KKR Group executive meetings and planning" />
      </section>

      {/* Content Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Definition */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-royal-blue mb-6">What is a Private Special Economic Vehicle Company?</h1>
            <p className="text-lg text-charcoal leading-relaxed mb-4">
              A Private Special Economic Vehicle Company is a privately owned entity that acts as a platform for managing projects, capital, and partnerships to achieve specific economic goals. It often focuses on:
            </p>
            <ul className="list-disc list-inside text-lg text-charcoal space-y-2 ml-4">
              <li>Facilitating investments in Special Economic Zones (SEZs).</li>
              <li>Implementing Public-Private Partnerships (PPPs).</li>
              <li>Addressing local economic challenges and promoting inclusive growth.</li>
            </ul>
          </div>

          {/* Key Characteristics */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-royal-blue mb-6">Key Characteristics</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Private Ownership',
                  description: 'Operates independently, funded through private investments and stakeholder contributions.',
                  icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
                },
                {
                  title: 'Economic Development',
                  description: 'Drives investments into key sectors like agriculture, manufacturing, and infrastructure.',
                  icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
                },
                {
                  title: 'Strategic Operations',
                  description: 'Functions as a holding company for multiple projects with efficient resource allocation.',
                  icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
                },
                {
                  title: 'Custom Economic Frameworks',
                  description: 'Attracts investors with reduced tariffs, streamlined regulations, and logistical support.',
                  icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                },
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-neutral-gray to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-smooth border border-neutral-gray/50">
                  <div className="flex items-start gap-4">
                    <div className="bg-royal-blue p-3 rounded-lg flex-shrink-0">
                      <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-royal-blue mb-3">{item.title}</h3>
                      <p className="text-charcoal leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Functions */}
          <div>
            <h2 className="text-3xl font-bold text-royal-blue mb-6">Core Functions</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Infrastructure Development', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
                { name: 'Business Facilitation', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
                { name: 'Job Creation', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
                { name: 'Stakeholder Collaboration', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
                { name: 'Wealth Distribution', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
              ].map((func, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-royal-blue to-royal-blue/80 text-white p-6 rounded-xl text-center font-semibold hover:from-gold hover:to-gold/90 hover:text-royal-blue transition-smooth shadow-lg hover:shadow-2xl group"
                >
                  <svg className="w-12 h-12 mx-auto mb-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={func.icon} />
                  </svg>
                  <span className="text-lg">{func.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
