import React from 'react';
import { getPublicImage } from '../../shared/utils/assetPaths';
import InitialsAvatar from './InitialsAvatar';

const MemberCard = ({ person, overrideRole, compact = false, isHead = false }) => {
  if (!person) return null;

  const roleText = overrideRole || person.title;
  const imageSrc = person.image ? getPublicImage(person.image) : null;
  const objectPos = person.objectPosition || 'center 20%';

  if (compact) {
    return (
      <div className="group relative flex items-center gap-4 p-4 sm:p-4.5 rounded-2xl bg-white border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-[#1B5538]/40 hover:-translate-y-0.5 transition-all duration-300">
        {/* Large Rounded Photo Box */}
        <div className="relative flex-shrink-0 p-1 rounded-2xl bg-gradient-to-tr from-[#1B5538] via-[#397D5A]/60 to-[#D4AF37]/50 shadow-md group-hover:scale-105 transition-transform duration-300">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={person.name}
              loading="lazy"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover shadow-inner"
              style={{ objectPosition: objectPos }}
            />
          ) : (
            <InitialsAvatar initials={person.initials} name={person.name} className="w-20 h-20 sm:w-24 sm:h-24 text-xl rounded-xl" />
          )}
        </div>

        {/* Member Details */}
        <div className="min-w-0 flex-1">
          <h5 className="text-base font-extrabold text-gray-900 group-hover:text-[#1B5538] transition-colors leading-snug truncate">
            {person.name}
          </h5>
          {roleText && (
            <span className="inline-block text-xs font-semibold text-[#1B5538] bg-[#1B5538]/8 px-2.5 py-1 rounded-md mt-1.5 leading-tight line-clamp-2 border border-[#1B5538]/10">
              {roleText}
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`group relative flex flex-col items-center text-center p-6 sm:p-8 rounded-3xl transition-all duration-300 ${
        isHead 
          ? "bg-gradient-to-b from-white via-white to-gray-50/80 border-2 border-[#1B5538]/50 shadow-xl hover:shadow-2xl hover:shadow-[#1B5538]/15 hover:-translate-y-1" 
          : "bg-white border border-gray-200/90 shadow-md hover:shadow-xl hover:border-[#1B5538]/30 hover:-translate-y-1"
      }`}
    >
      {/* Photo Frame Container */}
      <div className="relative mb-5">
        <div className={`p-1.5 rounded-3xl bg-gradient-to-tr ${
          isHead 
            ? "from-[#1B5538] via-[#2D6C4B] to-[#D4AF37] shadow-xl group-hover:scale-105" 
            : "from-[#1B5538]/40 via-[#397D5A]/30 to-[#D4AF37]/40 shadow-md group-hover:scale-105"
        } transition-transform duration-500 ease-out`}>
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={person.name}
              loading="lazy"
              className={`rounded-2xl object-cover ${
                isHead 
                  ? "w-44 h-44 sm:w-56 sm:h-56 shadow-md" 
                  : "w-36 h-36 sm:w-44 sm:h-44 shadow-sm"
              }`}
              style={{ objectPosition: objectPos }}
            />
          ) : (
            <InitialsAvatar 
              initials={person.initials} 
              name={person.name} 
              className={
                isHead 
                  ? "w-44 h-44 sm:w-56 sm:h-56 text-4xl rounded-2xl" 
                  : "w-36 h-36 sm:w-44 sm:h-44 text-3xl rounded-2xl"
              } 
            />
          )}
        </div>

        {isHead && (
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#1B5538] to-[#2D6C4B] text-[#F3EFE0] text-xs uppercase tracking-widest font-black px-4 py-1 rounded-full whitespace-nowrap shadow-lg border border-[#D4AF37]/40">
            Portfolio Head
          </span>
        )}
      </div>

      {/* Name and Title */}
      <h4 className={`font-extrabold text-gray-900 group-hover:text-[#1B5538] transition-colors ${
        isHead ? "text-xl sm:text-2xl text-[#1B5538] mt-2" : "text-lg"
      }`}>
        {person.name}
      </h4>
      <p className="text-xs sm:text-sm text-gray-600 mt-1.5 leading-relaxed font-semibold max-w-[260px]">
        {roleText}
      </p>
    </div>
  );
};

export default MemberCard;
