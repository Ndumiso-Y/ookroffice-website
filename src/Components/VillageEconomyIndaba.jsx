import React from 'react';
import { getPublicImage } from '../shared/utils/assetPaths';
import { motion } from 'framer-motion';

const VillageEconomyIndaba = () => {
  return (
    <section className="village-economy-indaba px-8 py-12 bg-gray-50 rounded-lg shadow-lg">
        
      {/* Title Section */}
      <div className="text-center mb-10">
        <motion.h1
          className="text-4xl font-bold text-[#397D5A] mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Village Economy Indaba
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Empowering Rural Economies for a Sustainable Future
        </motion.p>
      </div>

      <motion.img 
        src={getPublicImage("TVEILogo.png")} 
        alt="Logo" 
        className="mx-auto mb-4 w-64 h-64 object-contain opacity-90"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Introduction Section */}
      <div className="mb-8">
        <motion.p
          className="text-lg text-gray-700 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          The <strong>Inaugural Village Economy Indaba</strong>, hosted by the Office of Kgosana Dr Koketso Rakhudu on 
          <strong> 1st November 2024</strong>, marked a pivotal advancement in promoting economic empowerment 
          and sustainability within rural communities. Held in the North West Province, this groundbreaking event 
          gathered an array of stakeholders—from government officials and local entrepreneurs to industry leaders 
          and community representatives—all unified by a commitment to revitalizing village economies. This ambitious 
          initiative was established to provide an inclusive platform to address economic challenges unique to rural areas, 
          share successful strategies, and forge sustainable paths forward for long-term development.
        </motion.p>
      </div>

      {/* Objectives and Key Goals Section */}
      <div className="mb-8">
        <motion.h2
          className="text-3xl font-semibold text-[#397D5A] mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Objectives and Key Goals
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          The Village Economy Indaba’s design and mission centered on specific goals, each representing a vital pillar 
          in the journey toward sustainable and inclusive economic empowerment:
        </motion.p>
        <ul className="list-disc pl-6 mt-4 text-lg text-gray-700 leading-relaxed">
          <li><strong>Empowerment of SMMEs:</strong> Providing tools, resources, and knowledge to empower small businesses.</li>
          <li><strong>Encouragement of Collaboration:</strong> Fostering collaboration among various sectors for mutual growth.</li>
          <li><strong>Promotion of Innovation:</strong> Highlighting technology’s role in transforming rural businesses.</li>
          <li><strong>Sustainability and Growth:</strong> Encouraging sustainable development aligned with community values.</li>
          <li><strong>Capacity Building:</strong> Offering training and mentorship to local entrepreneurs.</li>
          <li><strong>Engagement and Networking:</strong> Providing a platform for meaningful partnerships and discussions.</li>
        </ul>
      </div>

      {/* Conclusion Section */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <p className="text-lg text-gray-700 leading-relaxed">
          The Indaba’s primary purpose was to serve as a catalyst for change, igniting action and demonstrating that village economies 
          are not just supplementary to national economic growth but can be central to it. By investing in rural areas, empowering 
          entrepreneurs, and fostering a spirit of unity, the event sought to inspire an ongoing cycle of growth and innovation.
        </p>
      </motion.div>
    </section>
  );
};

export default VillageEconomyIndaba;
