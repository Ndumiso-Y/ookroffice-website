import React from 'react';
import { motion } from 'framer-motion';
import { FaSitemap, FaHandsHelping } from 'react-icons/fa';
import { COMMITTEES_OF_DEVELOPMENT } from '../../data/leadershipData';

const CommitteesSection = () => {
  return (
    <section className="mt-16 pt-12 border-t border-gray-200">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1B5538]/10 text-[#1B5538] text-xs font-bold uppercase tracking-wider mb-3">
          <FaSitemap className="text-[#1B5538]" />
          Kgotla Governance Structures
        </div>
        <h2 className="text-3xl font-extrabold text-[#1B5538] mb-3">
          Kgotla Committees of Development
        </h2>
        <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Functional governance committees aligned to community needs, strategic execution, and VisionPlan 2035 imperatives.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {COMMITTEES_OF_DEVELOPMENT.map((committee, idx) => (
          <motion.div
            key={committee.id}
            className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-sm hover:shadow-md hover:border-[#1B5538]/40 transition-all duration-300 flex flex-col justify-between group"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                  Committee {idx + 1}
                </span>
                <FaHandsHelping className="text-[#397D5A]/40 group-hover:text-[#1B5538] transition-colors text-sm" />
              </div>
              <h4 className="text-sm font-bold text-gray-900 leading-snug group-hover:text-[#1B5538] transition-colors">
                {committee.name}
              </h4>
            </div>
            <div className="mt-3 pt-2 border-t border-gray-100">
              <span className="text-[10px] font-semibold text-[#1B5538] bg-[#1B5538]/5 px-2 py-0.5 rounded">
                {committee.category}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CommitteesSection;
