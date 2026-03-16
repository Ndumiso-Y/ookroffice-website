import React, { useState, useEffect } from 'react';
import { getPublicImage } from '../shared/utils/assetPaths';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight, Calendar, Users, Target, Phone } from 'lucide-react';
import Carousel from './Carousel';
import { FaFacebook, FaGlobe, FaExternalLinkAlt } from 'react-icons/fa';
import { divisionLinks } from '../shared/config/divisions';

const TaglineCarousel = () => {
  const taglines = [
    "Building a Legacy Together",
    "Leading with Purpose",
    "Empowering Our Community",
    "Preserving Heritage, Embracing Future",
    "Unity Through Traditional Values"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [taglines.length]);

  return (
    <div className="relative h-24 bg-white/80 backdrop-blur-md shadow-sm">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated subtle patterns */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute h-full w-0.5 bg-green-800"
              style={{
                left: `${i * 12}%`,
                transform: `rotate(${45 + i * 5}deg)`,
                transformOrigin: 'top'
              }}
            />
          ))}
        </div>
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-50/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ 
              duration: 0.5,
              ease: "easeOut"
            }}
            className="text-center"
          >
            <p className="text-2xl font-serif text-green-800 tracking-wide">
              {taglines[currentIndex]}
            </p>
            
            {/* Decorative line */}
            <motion.div 
              className="mt-2 mx-auto h-0.5 bg-green-800/20"
              initial={{ width: 0 }}
              animate={{ width: '100px' }}
              transition={{ delay: 0.2, duration: 0.5 }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Progress indicators */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
          {taglines.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-6 bg-green-800' 
                  : 'w-2 bg-green-800/20'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};



const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
  >
    <div className="w-12 h-12 bg-[#1B5538]/10 rounded-full flex items-center justify-center mb-4">
      <Icon className="text-[#1B5538] w-6 h-6" />
    </div>
    <h3 className="text-xl font-semibold text-[#1B5538] mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

function Home() {
  return (
    <div className="home-page min-h-screen bg-gray-50">
      <TaglineCarousel />
      
      {/* Hero Section with Parallax Effect */}
      <motion.div
        className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
        <img
          src={getPublicImage("TeamPhotoNew.jpg")}
          alt="Office of Kgosana Dr Koketso Rakhudu Team"
          loading= "lazy"
          className="w-full h-full object-contain md:object-cover object-center"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl relative z-20">
            <motion.h1 
              className="text-5xl font-bold text-white mb-6 shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Office of Kgosana Dr Koketso Rakhudu
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 mb-8 shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Welcome to the official site of the Office of Kgosana Dr Koketso Rakhudu
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link 
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#1B5538] text-white rounded-full hover:bg-[#397D5A] transition-colors duration-300"
              >
                Learn More <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

       {/* Success Story Carousel */}
       <section className="mb-16 mt-12">
            <h2 className="text-3xl font-bold mb-4 text-[#1B5538] text-center">Impact Journey</h2>
            <p className="text-lg text-gray-700 mb-4 text-center">KRF has positively impacted over 1,100 individuals through various programs:</p>

              <Carousel
                slides={[
                  {
                    image: "images/Women.jpeg",
                    alt: "Women in the Koketso Rakhudu Foundation Social, Women & disability development program",
                    loading: "lazy",
                    title: "Social, Women & Disability Development Program (2016)",
                    description: "Benefited 30 participants, empowering them through skill-building and community support initiatives.",
                  },
                  {
                    image: "images/Grade12.jpeg",
                    alt: "Koketso Rakhudu Foundation Grade 12 Re-write program students",
                    loading: "lazy",
                    title: "Grade 12 Re-write Program (2017)",
                    description: "Assisted 105 students to improve their education, helping them access new academic and career opportunities.",
                  },
                  {
                    image: "images/IT.jpeg",
                    alt: "Microsoft Software Development Program students",
                    loading: "lazy",
                    title: "Microsoft Software Development Program (2023)",
                    description: "Equipped 25 participants with vital IT skills, preparing them for careers in the tech industry.",
                  }
                ]}
              />
            </section>

      <div className="container mx-auto px-6 py-16">
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <FeatureCard 
            icon={Calendar}
            title="Community Events"
            description="Regular gatherings and traditional meetings fostering community engagement"
          />
          <FeatureCard 
            icon={Users}
            title="Cultural Heritage"
            description="Preserving and celebrating our rich cultural identity"
          />
          <FeatureCard 
            icon={Target}
            title="Vision 2035"
            description="Strategic planning for sustainable community development"
          />
          <FeatureCard 
            icon={Phone}
            title="Stay Connected"
            description="Easy access to community resources and support"
          />
        </div>


        {/* Vision Plan Section */}
        <motion.section 
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-16"
          whileInView={{ y: [50, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-[#1B5538] mb-4">VisionPlan 2035</h2>
              <p className="text-gray-600 mb-6">
                Our comprehensive roadmap for community development and growth...
              </p>
              <Link 
                to="/vision-plan"
                className="inline-flex items-center gap-2 text-[#1B5538] hover:text-[#397D5A] font-semibold"
              >
                Explore the Vision <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative h-[400px]">
              <img
                src={getPublicImage("Kgosanaquote.jpeg")}
                alt="Vision"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* Divisions Section */}
        <section className="py-16 bg-white">
  <h2 className="text-3xl font-bold text-center text-[#1B5538] mb-6">
    Explore Our Divisions
  </h2>
  <p className="text-lg text-gray-700 text-center mb-8">
    Discover the divisions that drive our mission forward. Each division plays a unique role in supporting and empowering our community.
  </p>
  
   {/* Grid Layout */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
    {/* Koketso Rakhudu Foundation */}
    <div className="flex flex-col items-center gap-3">
      <Link to="/koketso-rakhudu-foundation">
        <img
          src={getPublicImage("KRFLogo.png")}
          alt="Koketso Rakhudu Foundation logo"
          loading="lazy"
          className="w-40 h-40 object-contain transform transition-transform duration-300 hover:scale-110"
        />
      </Link>
      {divisionLinks.krf.enabled && (
        <Link
          to={divisionLinks.krf.url}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200 transform hover:scale-105"
        >
          <FaGlobe />
          Visit Website
          <FaExternalLinkAlt className="text-xs" />
        </Link>
      )}
    </div>

    {/* The Village Economy Indaba */}
    <div className="flex flex-col items-center gap-3">
      <Link to="/the-village-economy-indaba">
        <img
          src={getPublicImage("TVEILogo.png")}
          alt="The Village Economy Indaba logo"
          loading="lazy"
          className="w-40 h-40 object-contain transform transition-transform duration-300 hover:scale-110"
        />
      </Link>
      {divisionLinks.tvei.enabled && (
        <Link
          to={divisionLinks.tvei.url}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200 transform hover:scale-105"
        >
          <FaGlobe />
          Visit Website
          <FaExternalLinkAlt className="text-xs" />
        </Link>
      )}
    </div>

    {/* Coffee with Dr Rakhudu */}
    <div className="flex flex-col items-center gap-3">
      <Link to="/coffee-with-dr-rakhudu">
        <img
          src={getPublicImage("CoffeeKoketsoLogo.png")}
          alt="Coffee With Dr Koketso Rakhudu logo"
          loading="lazy"
          className="w-40 h-40 object-contain transform transition-transform duration-300 hover:scale-110"
        />
      </Link>
      {divisionLinks.coffee.enabled && (
        <Link
          to={divisionLinks.coffee.url}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200 transform hover:scale-105"
        >
          <FaGlobe />
          Visit Website
          <FaExternalLinkAlt className="text-xs" />
        </Link>
      )}
    </div>

    {/* Investment & Sustainability Trust */}
    <div className="flex flex-col items-center gap-3">
      <Link to="/investment-sustainability-trust">
        <img
          src={getPublicImage("InvestmentSustainabilityLogo.png")}
          alt="Investment & Sustainability Development Trust logo"
          loading="lazy"
          className="w-40 h-40 object-contain transform transition-transform duration-300 hover:scale-110"
        />
      </Link>
    </div>

    {/* Business School */}
    <div className="flex flex-col items-center gap-3">
      <Link to="/business-school-of-leadership-excellence">
        <img
          src={getPublicImage("BusinessSchoolOfLeadershipExcellenceLogo.png")}
          alt="Business School of Leadership Excellence logo"
          loading="lazy"
          className="w-40 h-40 object-contain transform transition-transform duration-300 hover:scale-110"
        />
      </Link>
      {divisionLinks.businessSchool.enabled && (
        <Link
          to={divisionLinks.businessSchool.url}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200 transform hover:scale-105"
        >
          <FaGlobe />
          Visit Website
          <FaExternalLinkAlt className="text-xs" />
        </Link>
      )}
    </div>

    {/* Kgosana Koketso Rakhudu Group */}
    <div className="flex flex-col items-center gap-3">
      <Link to="/kgosana-koketso-rakhudu-group">
        <img
          src={getPublicImage("KKRGLogo.png")}
          alt="Kgosana Koketso Rakhudu Group logo"
          loading="lazy"
          className="w-40 h-40 object-contain transform transition-transform duration-300 hover:scale-110"
        />
      </Link>
      {divisionLinks.group.enabled && (
        <Link
          to={divisionLinks.group.url}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200 transform hover:scale-105"
        >
          <FaGlobe />
          Visit Website
          <FaExternalLinkAlt className="text-xs" />
        </Link>
      )}
    </div>

    {/* Hakem Energies Foundation */}
    <div className="flex flex-col items-center gap-3">
      <Link to="/hakem-energies-foundation">
        <img
          src={getPublicImage("HakemEnergiesFoundationLogo.png")}
          alt="Hakem Energies Foundation"
          loading="lazy"
          className="w-40 h-40 object-contain transform transition-transform duration-300 hover:scale-110"
        />
      </Link>
    </div>

    {/* Tsitsing, Kgotla Ya Rakhudu */}
    <div className="flex flex-col items-center gap-3">
      <Link to="/kgotla-website">
        <img
          src={getPublicImage("KgotlhaLogo.png")}
          alt="Tsitsing Kgotla Ya Rakhudu"
          loading="lazy"
          className="w-40 h-40 object-contain transform transition-transform duration-300 hover:scale-110"
        />
      </Link>
      {divisionLinks.kgotla.enabled && (
        <Link
          to={divisionLinks.kgotla.url}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200 transform hover:scale-105"
        >
          <FaGlobe />
          Visit Website
          <FaExternalLinkAlt className="text-xs" />
        </Link>
      )}
    </div>
  </div>

  {/* Call to Action */}
  <div className="text-center mt-8">
    <Link 
      to="/divisions"
      className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B5538] text-white rounded-full hover:bg-[#397D5A] transition-colors duration-300"
    >
      Learn More About Our Divisions
    </Link>
  </div>
</section>
        

        {/* Contact Section */}
<motion.footer 
  className="text-center p-8 bg-white rounded-xl shadow-lg"
  whileInView={{ y: [20, 0], opacity: [0, 1] }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>
  <h2 className="text-2xl font-bold text-[#1B5538] mb-4">Get in Touch</h2>
  <p className="text-gray-600 mb-6">
    We're here to serve our community. Reach out to us for any inquiries or support.
  </p>
  <div className="flex items-center justify-center space-x-6">
    <Link 
      to="/contact"
      className="inline-flex items-center gap-2 px-8 py-3 bg-[#1B5538] text-white rounded-full hover:bg-[#397D5A] transition-colors duration-300"
    >
      Contact Us <ChevronRight className="w-5 h-5" />
    </Link>
    <div className="h-12 w-px bg-gray-300"></div>
    <a 
      href="https://www.facebook.com/p/Koketso-Rakhudu-Foundation-100064528696915/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-[#1B5538] hover:text-[#397D5A] transition-colors duration-300"
    >
      <FaFacebook className="w-8 h-8" />
      <span className="font-medium">Follow Kgosana Dr Koketso Rakhudu on Facebook</span>
    </a>
  </div>
</motion.footer>
      </div>
    </div>
  );
}

export default Home;
