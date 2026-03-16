import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import Carousel from '../components/Carousel';
import { Link } from 'react-router-dom';
import { getAssetPath } from '../utils/assetPath';

const FocusAreas = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const empowermentImages = [
    getAssetPath('/assets/focus-empowerment-1.jpg'),
    getAssetPath('/assets/focus-empowerment-2.jpg'),
  ];

  const agricultureImages = [
    getAssetPath('/assets/focus-agriculture-1.jpg'),
    getAssetPath('/assets/focus-agriculture-2.jpg'),
    getAssetPath('/assets/focus-agriculture-3.jpg'),
  ];

  const skillsImages = [
    getAssetPath('/assets/focus-skills-1.jpg'),
    getAssetPath('/assets/focus-skills-2.jpg'),
    getAssetPath('/assets/focus-skills-3.jpg'),
  ];

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  return (
    <>
      <Helmet>
        <title>Focus Areas - KKR Group</title>
        <meta
          name="description"
          content="Explore KKR Group's focus areas: Community Empowerment, Agriculture, Skills Development, Enterprise Development, and Urban Development."
        />
      </Helmet>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-royal-blue text-center mb-12">
            Potential Focus Areas
          </h1>

          {/* Community Empowerment */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="h-80 rounded-lg overflow-hidden shadow-lg">
                <Carousel images={empowermentImages} alt="Community Empowerment" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-royal-blue mb-4">
                  🟦 Community Empowerment
                </h2>
                <p className="text-lg text-charcoal leading-relaxed">
                  Collaborates with local leaders to address community-specific priorities and create sustainable empowerment pathways.
                </p>
              </div>
            </div>
          </div>

          {/* Agriculture */}
          <div className="mb-16 bg-neutral-gray rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold text-royal-blue mb-4">
                  🟩 Agriculture
                </h2>
                <p className="text-lg text-charcoal leading-relaxed">
                  Enhances rural productivity through sustainable methods, mechanization, and improved supply chains.
                </p>
              </div>
              <div className="h-80 rounded-lg overflow-hidden shadow-lg order-1 md:order-2">
                <Carousel images={agricultureImages} alt="Agriculture Development" />
              </div>
            </div>
          </div>

          {/* Skills Development */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="h-80 rounded-lg overflow-hidden shadow-lg">
                <Carousel images={skillsImages} alt="Skills Development" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-royal-blue mb-4">
                  🟨 Skills Development
                </h2>
                <p className="text-lg text-charcoal leading-relaxed">
                  Offers accredited training programs to create a skilled and employable workforce ready for modern industries.
                </p>
              </div>
            </div>
          </div>

          {/* Enterprise Development */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-royal-blue mb-6 text-center">
              🟧 Enterprise Development + Urban Development
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-gray rounded-lg shadow-lg overflow-hidden flex items-center justify-center h-64">
                <img
                  src={getAssetPath('/assets/focus-enterprise.jpg')}
                  alt="Enterprise Development"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="bg-neutral-gray rounded-lg shadow-lg overflow-hidden flex items-center justify-center h-64">
                <img
                  src={getAssetPath('/assets/focus-urban.jpg')}
                  alt="Urban Development"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Video Spotlight - Enterprise × Urban */}
          <div className="mb-16 bg-gradient-to-r from-royal-blue to-royal-blue/90 rounded-lg overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-5 gap-0">
              {/* Video Section - 60% */}
              <div className="md:col-span-3 relative">
                <video
                  poster={getAssetPath('/assets/focus-enterprise-marabo-cover.jpg')}
                  controls
                  className="w-full h-full object-cover"
                  onPlay={handleVideoPlay}
                  aria-label="Enterprise Empowerment: Marabo Essentials video"
                >
                  <source src={getAssetPath('/assets/focus-enterprise-marabo.mp4')} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {!isVideoPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 pointer-events-none">
                    <div className="bg-gold/90 rounded-full p-4">
                      <svg
                        className="w-12 h-12 text-royal-blue"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              {/* Text Section - 40% */}
              <div className="md:col-span-2 p-8 flex flex-col justify-center text-white">
                <h3 className="text-2xl font-bold mb-4 text-gold">
                  Enterprise Empowerment in Action: Marabo Essentials
                </h3>
                <p className="leading-relaxed text-sm mb-4">
                  Meet Fentse Mokale, founder of Marabo Essentials.
                </p>
                <p className="leading-relaxed text-sm mb-4">
                  Like many small business owners, she highlighted how branding, visibility, and the absence of a strong company profile can hold entrepreneurs back from funding and growth opportunities.
                </p>
                <p className="leading-relaxed text-sm">
                  Her story reminds us why the Growth Masters Masterclass is so important; it's designed to equip entrepreneurs with the tools to build a professional business profile, strengthen their brand, and position themselves for opportunities with funders and stakeholders.
                </p>
                <p className="leading-relaxed text-sm italic mt-4">
                  Because every business deserves to be seen, supported, and sustainable.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              to="/contact"
              className="inline-block bg-gold text-royal-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold/90 transition-smooth shadow-lg"
            >
              Explore Partnership Opportunities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FocusAreas;
