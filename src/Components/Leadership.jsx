import React from 'react';
import { motion } from 'framer-motion';
import { FaHandHoldingHeart, FaUsers, FaChalkboardTeacher, FaHandsHelping } from 'react-icons/fa';
import { getPublicImage } from '../shared/utils/assetPaths';
import GovernanceHeader from './leadership/GovernanceHeader';
import PortfolioCard from './leadership/PortfolioCard';
import CommitteesSection from './leadership/CommitteesSection';
import { PORTFOLIOS } from '../data/leadershipData';

function Leadership() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#1B5538]/10" />
        
        <div className="absolute top-0 right-0 w-72 h-72">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 right-0 h-full w-1 bg-[#397D5A]/10"
              style={{
                transform: `rotate(${45 + i * 5}deg)`,
                transformOrigin: 'top right'
              }}
            />
          ))}
        </div>

        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#1B5538]/5" />
        
        <div className="absolute bottom-0 left-0 w-72 h-72">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute bottom-0 left-0 h-full w-1 bg-[#397D5A]/10"
              style={{
                transform: `rotate(${-45 - i * 5}deg)`,
                transformOrigin: 'bottom left'
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Container */}
      <div className="container mx-auto px-4 sm:px-6 py-12 relative">
        {/* Main Title & Subtitle */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1B5538] tracking-tight mb-4">
            Leadership & Organisational Structure
          </h1>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
            Leadership is about inspiring and empowering others. Kgosana Koketso Rakhudu follows the footsteps of his father, Kgosana Rantatja Jacob Rakhudu, guiding the Office through transparent governance and VisionPlan 2035.
          </p>
        </motion.div>

        {/* 1. Governance Hierarchy Structure */}
        <GovernanceHeader />

        {/* 2. Code-Based Organogram: 5 Functional Portfolios */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1B5538] bg-[#1B5538]/10 px-3 py-1 rounded-full inline-block mb-2">
              Functional Excellence
            </span>
            <h2 className="text-3xl font-extrabold text-[#1B5538]">
              Functional Portfolios & Leadership Realignment
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto mt-2 leading-relaxed">
              Structured operational portfolio architecture enabling strategic execution across governance, investment, programmes, finance, and operations.
            </p>
          </div>

          <div className="space-y-6">
            {PORTFOLIOS.map((portfolio, index) => (
              <PortfolioCard key={portfolio.id} portfolio={portfolio} index={index} />
            ))}
          </div>
        </section>

        {/* 3. Kgotla Committees of Development */}
        <CommitteesSection />

        {/* 4. Leadership & Legacy Section */}
        <motion.section 
          className="my-16 flex flex-col items-center bg-gray-50/80 p-8 sm:p-12 rounded-2xl border border-gray-200/80 shadow-md relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute -left-4 top-1/2 w-8 h-8 bg-[#1B5538]/10 rotate-45 pointer-events-none" />
          <div className="absolute -right-4 top-1/4 w-6 h-6 bg-[#397D5A]/10 rounded-full pointer-events-none" />
          
          <div className="relative mb-8 group">
            <div className="p-2 rounded-3xl bg-gradient-to-tr from-[#1B5538] via-[#397D5A] to-[#D4AF37] shadow-2xl group-hover:scale-105 transition-transform duration-500 ease-out">
              <img
                src={getPublicImage("leadership/koketso_rakhudu.jpeg")}
                alt="Dr Kgosana Koketso Rakhudu"
                loading="lazy"
                className="w-56 h-56 sm:w-72 sm:h-72 object-cover rounded-2xl shadow-inner"
                style={{ objectPosition: "center 20%" }}
              />
            </div>
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#1B5538] via-[#2D6C4B] to-[#1B5538] text-[#F3EFE0] text-xs uppercase tracking-widest font-black px-5 py-1.5 rounded-full whitespace-nowrap shadow-xl border border-[#D4AF37]/50">
              Institutional Leader & Kgosana
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#397D5A] mb-4 text-center">
            Leadership and Legacy of the Office of Kgosana Dr Koketso Rakhudu
          </h2>
          <div className="space-y-4 max-w-3xl text-center text-gray-700 text-base leading-relaxed">
            <p>
              The Office of Kgosana Dr Koketso Rakhudu is rooted in a legacy of strong, visionary leadership established by Kgosana Rantatja Jacob Rakhudu, whose service was defined by integrity, humility, and a commitment to his people. Kgosana Koketso continues this legacy with a forward-thinking approach, ensuring the collective well-being of the community.
            </p>
            <p>
              Observing his father's dedication to Tsitsing, Kgosana Koketso has adopted a style that values engagement, collaboration, and community growth. His leadership is not about authority but about creating a thriving community through purpose-driven governance.
            </p>
            <p>
              Integrating African traditional governance with modern principles, the Office of Kgosana Dr Koketso Rakhudu encourages each community member to reach their potential through various empowerment initiatives in education, healthcare, and economic development, all contributing to VisionPlan 2035.
            </p>
          </div>
        </motion.section>

        {/* 5. Principles of Leadership */}
        <section className="mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#397D5A] mb-8 text-center">
            Principles of Leadership in the Office
          </h3>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto relative">
            <div className="bg-white p-6 rounded-xl border border-gray-200/90 shadow-md text-center">
              <FaHandHoldingHeart className="text-[#1B5538] text-4xl mb-4 mx-auto" />
              <h4 className="text-xl font-bold text-[#1B5538] mb-2">Purpose-Driven Governance</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Governance is about fostering opportunities for individuals to find their roles within the community, creating a shared sense of purpose.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200/90 shadow-md text-center">
              <FaUsers className="text-[#1B5538] text-4xl mb-4 mx-auto" />
              <h4 className="text-xl font-bold text-[#1B5538] mb-2">Engagement and Inclusivity</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Through regular Kgotla sessions, the Office makes collective, transparent decisions that reflect the voices of all community members.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200/90 shadow-md text-center">
              <FaChalkboardTeacher className="text-[#1B5538] text-4xl mb-4 mx-auto" />
              <h4 className="text-xl font-bold text-[#1B5538] mb-2">Empowerment and Capacity Building</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                The Office is committed to education, training, and leadership development, preparing future generations to carry forward the legacy of progress.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200/90 shadow-md text-center">
              <FaHandsHelping className="text-[#1B5538] text-4xl mb-4 mx-auto" />
              <h4 className="text-xl font-bold text-[#1B5538] mb-2">Community Commitment</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Leadership is seen as service. The Office supports the community with health initiatives, social welfare programs, and comprehensive resources that address local needs.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Leadership;