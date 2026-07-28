import React from 'react';
import { motion } from 'framer-motion';
import { FaCrown, FaBuilding, FaUsers, FaUniversity } from 'react-icons/fa';
import { GOVERNANCE_STRUCTURE } from '../../data/leadershipData';

const GovernanceHeader = () => {
  const { topLevel, secondLevel } = GOVERNANCE_STRUCTURE;

  const getIcon = (id) => {
    switch (id) {
      case 'ookkr-office': return <FaBuilding className="text-[#1B5538] text-xl" />;
      case 'kgotla-exec': return <FaUsers className="text-[#1B5538] text-xl" />;
      case 'advisory-council': return <FaUniversity className="text-[#1B5538] text-xl" />;
      default: return <FaCrown className="text-[#1B5538] text-xl" />;
    }
  };

  return (
    <section className="mb-16">
      {/* Top Level Governance Banner */}
      <motion.div 
        className="bg-gradient-to-r from-[#1B5538] via-[#2A6E48] to-[#1B5538] text-white p-6 md:p-8 rounded-2xl shadow-xl text-center relative overflow-hidden mb-8 border border-[#397D5A]/30"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute top-0 right-0 translate-x-4 -translate-y-4 w-32 h-32 bg-white/5 rounded-full blur-xl pointer-events-none" />
        <div className="flex justify-center mb-3">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#F3EFE0] border border-white/10">
            <FaCrown className="text-yellow-400" />
            Top Level Governance Authority
          </span>
        </div>
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
          {topLevel.title}
        </h2>
        <p className="text-sm md:text-base text-gray-200 font-medium max-w-2xl mx-auto">
          {topLevel.description}
        </p>
      </motion.div>

      {/* Visual Connecting Line */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-0.5 h-8 bg-gradient-to-b from-[#1B5538] to-[#397D5A]" />
        <div className="w-3 h-3 rounded-full bg-[#397D5A]" />
      </div>

      {/* Second Level Governance Nodes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {secondLevel.map((node, index) => (
          <motion.div
            key={node.id}
            className="bg-white p-6 rounded-xl border border-gray-200/90 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-center relative group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#1B5538] rounded-t-xl opacity-90 group-hover:bg-[#397D5A] transition-colors" />
            <div>
              <div className="w-12 h-12 rounded-full bg-[#1B5538]/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                {getIcon(node.id)}
              </div>
              <span className="inline-block text-[11px] font-bold text-[#1B5538] uppercase tracking-wider bg-[#1B5538]/5 px-2.5 py-0.5 rounded-md mb-2">
                {node.badge}
              </span>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {node.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed font-medium">
                {node.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GovernanceHeader;
