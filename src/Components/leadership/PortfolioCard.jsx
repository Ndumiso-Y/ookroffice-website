import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaBriefcase, FaUserShield, FaLayerGroup, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import MemberCard from './MemberCard';

const PortfolioCard = ({ portfolio, index }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const {
    number,
    title,
    subtitle,
    responsibilities,
    leadershipHead,
    leadershipRole,
    leadershipNotice,
    scopeNotice,
    keyMembers,
    streams
  } = portfolio;

  return (
    <motion.div
      className="bg-white rounded-2xl border border-gray-200/90 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden mb-10"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Portfolio Header Bar */}
      <div className="bg-gradient-to-r from-[#1B5538] via-[#2D6C4B] to-[#1B5538] text-white p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center font-extrabold text-xl text-[#F3EFE0] border border-white/20 flex-shrink-0 shadow-inner">
            P{number}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] bg-black/20 px-2 py-0.5 rounded">
                Portfolio {number}
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-white mt-1">
              {title}
            </h3>
            {subtitle && <p className="text-xs text-gray-200 font-medium mt-0.5">{subtitle}</p>}
          </div>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="self-end md:self-center flex items-center gap-1.5 text-xs font-semibold bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg transition-colors border border-white/15"
          aria-expanded={isExpanded}
        >
          <span>{isExpanded ? "Collapse Details" : "Expand Details"}</span>
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>

      {/* Expandable Body */}
      {isExpanded && (
        <div className="p-6 md:p-8 space-y-8 bg-gray-50/40">
          {/* Section 1: Responsibilities */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FaBriefcase className="text-[#1B5538] text-sm" />
              <h4 className="text-xs font-extrabold text-[#1B5538] uppercase tracking-wider">
                Core Portfolio Responsibilities
              </h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {responsibilities.map((resp, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-gray-100 shadow-2xs">
                  <FaCheckCircle className="text-[#397D5A] text-sm mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-gray-700 font-medium leading-tight">{resp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Scope notice if present */}
          {scopeNotice && (
            <div className="p-3.5 rounded-lg bg-[#1B5538]/5 border-l-4 border-[#1B5538] text-xs text-[#1B5538] font-medium flex items-center gap-2">
              <FaUserShield className="text-base flex-shrink-0" />
              <span>{scopeNotice}</span>
            </div>
          )}

          {/* Portfolio Head / Notice */}
          {leadershipNotice && !leadershipHead && (
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-amber-900 text-xs font-medium text-center">
              {leadershipNotice}
            </div>
          )}

          {leadershipHead && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FaUserShield className="text-[#1B5538] text-sm" />
                <h4 className="text-xs font-extrabold text-[#1B5538] uppercase tracking-wider">
                  Portfolio Leadership
                </h4>
              </div>
              <div className="max-w-sm sm:max-w-md">
                <MemberCard 
                  person={leadershipHead} 
                  overrideRole={leadershipRole || leadershipHead.title} 
                  isHead={true} 
                />
              </div>
            </div>
          )}

          {/* Key Members (if no stream breakdowns) */}
          {keyMembers && keyMembers.length > 0 && (
            <div>
              <h4 className="text-xs font-extrabold text-[#1B5538] uppercase tracking-wider mb-4">
                Portfolio Team Members
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {keyMembers.map((item, idx) => (
                  <MemberCard key={idx} person={item.person} overrideRole={item.role} compact={true} />
                ))}
              </div>
            </div>
          )}

          {/* Functional Streams (Subdivisions) for Portfolio 3 */}
          {streams && streams.length > 0 && (
            <div className="space-y-6 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <FaLayerGroup className="text-[#1B5538] text-sm" />
                <h4 className="text-xs font-extrabold text-[#1B5538] uppercase tracking-wider">
                  Functional Delivery Streams & Governance Committees
                </h4>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                {streams.map((stream) => (
                  <div key={stream.id} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="border-b border-gray-100 pb-5 mb-5">
                        <h5 className="font-extrabold text-base text-[#1B5538]">
                          {stream.title}
                        </h5>
                        {stream.head && (
                          <div className="mt-3">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">
                              Stream Leadership
                            </span>
                            <MemberCard 
                              person={stream.head.person} 
                              overrideRole={stream.head.role} 
                              compact={true} 
                            />
                          </div>
                        )}
                      </div>

                      <div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-3">
                          Team / Committee Members ({stream.members.length})
                        </span>
                        <div className="space-y-4">
                          {stream.members.map((member, i) => (
                            <MemberCard key={i} person={member} compact={true} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default PortfolioCard;
