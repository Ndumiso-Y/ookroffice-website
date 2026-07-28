import React from 'react';

/**
 * Branded initials avatar for members without verified photographs.
 */
const InitialsAvatar = ({ initials, name, className = "w-20 h-20 text-xl" }) => {
  const getInitials = (fullName) => {
    if (initials) return initials;
    if (!fullName) return "OK";
    const parts = fullName.replace(/^(Mr|Ms|Dr|Mrs)\.?\s+/i, '').trim().split(/\s+/);
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  const textInitials = getInitials(name);

  return (
    <div 
      className={`rounded-2xl bg-gradient-to-br from-[#1B5538] via-[#2A6E48] to-[#123B26] text-[#F3EFE0] font-black tracking-wider flex items-center justify-center border border-white/20 shadow-md flex-shrink-0 ${className}`}
      title={name || "Leadership Member"}
      aria-label={name ? `Initials avatar for ${name}` : "Leadership Avatar"}
    >
      <span>{textInitials}</span>
    </div>
  );
};

export default InitialsAvatar;
