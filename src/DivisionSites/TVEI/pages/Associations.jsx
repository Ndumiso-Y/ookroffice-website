import React from "react";
import DrLogo from "../assets/optimized/Dr.png";
import HakemLogo from "../assets/optimized/HakemLogo.png";
import HfoundationLogo from "../assets/optimized/Hfoundation.png";

const Associations = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="page-container">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
          Associations
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-10">
          {/* Foundation Logo */}
          <div className="w-40 h-40 flex items-center justify-center bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition hover:-translate-y-1">
            <img
              src={DrLogo}
              alt="Dr. Koketso Rakhudu Foundation"
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Hakem Logo */}
          <div className="w-40 h-40 flex items-center justify-center bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition hover:-translate-y-1">
            <img
              src={HakemLogo}
              alt="Hakem Logo"
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Hakem Foundation */}
          <div className="w-40 h-40 flex items-center justify-center bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition hover:-translate-y-1">
            <img
              src={HfoundationLogo}
              alt="Hakem Foundation"
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Associations;
