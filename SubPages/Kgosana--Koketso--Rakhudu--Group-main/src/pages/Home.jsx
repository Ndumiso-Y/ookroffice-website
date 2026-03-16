import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { getAssetPath } from '../utils/assetPath';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>KKR Group - Private Special Economic Vehicle Company</title>
        <meta
          name="description"
          content="The Kgosana Koketso Rakhudu Group (KKR Group) is a Private Special Economic Vehicle Company driving economic development and regional growth across Africa."
        />
      </Helmet>

      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: 'scale(1.05)' }}
        >
          <source src={getAssetPath('/assets/kkr-hero.mp4')} type="video/mp4" />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-royal-blue/80 via-royal-blue/60 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Kgosana Koketso Rakhudu Group (KKR Group)
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto">
            The Kgosana Koketso Rakhudu Group (KKR Group) is a Private Special Economic Vehicle Company established to drive economic development and regional growth. By leveraging strategic investments, public-private partnerships, and community-focused initiatives, the KKR Group facilitates sustainable economic transformation while addressing local challenges and fostering inclusive prosperity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about"
              className="bg-gold text-royal-blue px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-smooth shadow-lg"
            >
              Discover More
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-royal-blue transition-smooth"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-royal-blue mb-6">Our Mission</h2>
              <p className="text-lg text-charcoal leading-relaxed mb-6">
                To catalyze sustainable economic transformation across Africa by creating strategic investment platforms, empowering communities, and fostering inclusive growth through innovative partnerships and targeted development initiatives.
              </p>
              <div className="flex gap-4">
                <Link to="/about" className="bg-royal-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-royal-blue/90 transition-smooth">
                  Learn More
                </Link>
                <Link to="/contact" className="border-2 border-royal-blue text-royal-blue px-6 py-3 rounded-lg font-semibold hover:bg-royal-blue hover:text-white transition-smooth">
                  Get Involved
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Focus Areas', value: '5', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
                { label: 'Strategic Impact', value: '100%', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
                { label: 'Community First', value: '∞', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
                { label: 'Sustainable Growth', value: '⟳', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' },
              ].map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-royal-blue to-royal-blue/80 p-6 rounded-xl text-center text-white shadow-lg hover:shadow-2xl transition-smooth">
                  <svg className="w-10 h-10 mx-auto mb-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                  </svg>
                  <div className="text-3xl font-bold mb-2 text-gold">{stat.value}</div>
                  <div className="text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-neutral-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-royal-blue text-center mb-10">Explore Our Work</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: 'About', path: '/about', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
              { name: 'Focus Areas', path: '/focus-areas', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
              { name: 'Leadership', path: '/leadership', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
              { name: 'Projects', path: '/projects', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
              { name: 'Contact', path: '/contact', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-smooth group"
              >
                <div className="bg-royal-blue p-3 rounded-lg mb-3 group-hover:bg-gold transition-smooth">
                  <svg
                    className="w-8 h-8 text-white"
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
                </div>
                <span className="text-sm font-semibold text-charcoal text-center">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
