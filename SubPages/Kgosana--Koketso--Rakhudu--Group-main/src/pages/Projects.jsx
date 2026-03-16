import { Helmet } from 'react-helmet-async';
import Carousel from '../components/Carousel';
import { getAssetPath } from '../utils/assetPath';

const Projects = () => {
  const projectImages = [
    getAssetPath('/assets/projects-1.jpg'),
    getAssetPath('/assets/projects-2.jpg'),
    getAssetPath('/assets/projects-3.jpg'),
  ];

  return (
    <>
      <Helmet>
        <title>Projects & Impact - KKR Group</title>
        <meta
          name="description"
          content="Discover KKR Group's impact through strategic investments, community empowerment, and sustainable growth initiatives across Africa."
        />
      </Helmet>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-royal-blue text-center mb-8">
            Projects & Impact
          </h1>

          {/* Carousel */}
          <div className="h-96 md:h-[500px] rounded-lg overflow-hidden shadow-xl mb-12">
            <Carousel images={projectImages} alt="KKR Group projects and impact" />
          </div>

          {/* Impact Description */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-neutral-gray p-8 md:p-12 rounded-lg shadow-lg">
              <p className="text-lg md:text-xl text-charcoal leading-relaxed text-center">
                The KKR Group exemplifies how a Private Special Economic Vehicle Company can serve as a catalyst for economic transformation. By fostering strategic investments, empowering communities, and promoting sustainable growth, the KKR Group drives lasting socioeconomic impact tailored to specific regions and industries.
              </p>
            </div>

            {/* Impact Areas Grid */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Strategic Investments',
                  description: 'Targeted capital allocation in key economic sectors',
                  icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
                },
                {
                  title: 'Community Empowerment',
                  description: 'Sustainable pathways for inclusive prosperity',
                  icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
                },
                {
                  title: 'Sustainable Growth',
                  description: 'Long-term economic development and transformation',
                  icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-royal-blue p-6 rounded-lg hover:shadow-xl transition-smooth"
                >
                  <svg
                    className="w-12 h-12 text-gold mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={item.icon}
                    />
                  </svg>
                  <h3 className="text-xl font-bold text-royal-blue mb-2">
                    {item.title}
                  </h3>
                  <p className="text-charcoal">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
