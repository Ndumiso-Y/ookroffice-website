import React, {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {
  Users, 
  TreePine,
  HeartHandshake,
  Building2,
  GraduationCap,
  Target,
  ChevronDown,
  CircleDollarSign,
  Shield,
  Lightbulb,
  HandHeart,
  School
} from 'lucide-react'

const ObjectiveCard = ({ title, description, icon: Icon, details, image }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-[#1B5538] rounded-lg">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-semibold text-[#1B5538]">{title}</h3>
        </div>
        
        <p className="text-gray-700 mb-4">{description}</p>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-[#397D5A] hover:text-[#1B5538] transition-colors"
        >
          Learn more
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown />
          </motion.div>
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 space-y-4">
                {details.map((detail, index) => (
                  <div key={index} className="flex items-start gap-3">
                    {detail.icon}
                    <p className="text-gray-700">{detail.text}</p>
                  </div>
                ))}
                {image && (
                  <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="w-full h-64 object-cover rounded-lg mt-4"
                  />
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

function Objectives() {
  const objectives = [
    {
      title: "Community Engagement",
      description: "Building strong relationships through traditional governance and active participation.",
      icon: Users,
      image: "/images/Gasgiveaway.jpeg",
      alt: "Gas giveaway from Hakeem Energies through Ofiice of Kgosana Koketso Rakhudu",
      details: [
        {
          icon: <Building2 className="w-5 h-5 text-[#397D5A]" />,
          text: "Regular Kgotla (traditional meetings) for community input"
        },
        {
          icon: <Shield className="w-5 h-5 text-[#397D5A]" />,
          text: "Transparent decision-making processes"
        },
        {
          icon: <Lightbulb className="w-5 h-5 text-[#397D5A]" />,
          text: "Innovation in community consultation methods"
        }
      ]
    },
    {
      title: "Sustainable Development",
      description: "Creating lasting positive impact through responsible investment and growth.",
      icon: TreePine,
      details: [
        {
          icon: <CircleDollarSign className="w-5 h-5 text-[#397D5A]" />,
          text: "Strategic investment in community projects"
        },
        {
          icon: <Target className="w-5 h-5 text-[#397D5A]" />,
          text: "Long-term sustainability goals"
        },
        {
          icon: <HandHeart className="w-5 h-5 text-[#397D5A]" />,
          text: "Environmental protection initiatives"
        }
      ]
    },
    {
      title: "Social Empowerment",
      description: "Uplifting community members through education and support programs.",
      icon: HeartHandshake,
      image: "/images/constructionlearners.jpeg",
      alt: "Construction learners from Koketso Rakhudu Foundation",
      details: [
        {
          icon: <GraduationCap className="w-5 h-5 text-[#397D5A]" />,
          text: "Educational support and scholarships"
        },
        {
          icon: <School className="w-5 h-5 text-[#397D5A]" />,
          text: "Skills development programs"
        },
        {
          icon: <Users className="w-5 h-5 text-[#397D5A]" />,
          text: "Community welfare initiatives"
        }
      ]
    }
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-6 text-center text-[#1B5538]">
            Our Objectives
          </h1>
          <p className="text-xl text-gray-700 mb-12 text-center leading-relaxed max-w-3xl mx-auto">
            The objectives of the Office of Kgosana Dr Koketso Rakhudu are centered on building a self-reliant and thriving community through traditional governance that integrates modern development strategies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((objective, index) => (
            <motion.div
              key={objective.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ObjectiveCard {...objective} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Objectives;
