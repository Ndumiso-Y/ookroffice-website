// src/components/WideContainer.jsx
import React from "react";

const WideContainer = ({ className = "", children }) => {
  return (
    <div className={`mx-auto w-full max-w-[1400px] px-4 md:px-6 lg:px-10 ${className}`}>
      {children}
    </div>
  );
};

export default WideContainer;
