import React, {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion'
import { X, Clock, Users, Sprout } from 'lucide-react';

const milestones = [
  {
    id: 1,
    area: "Human Individual Development",
    icon: <Users className="w-6 h-6" />,
    timeframe: "2023-2027",
    goals: [
      {
        title: "Healthy Individuals",
        description: "Prioritizing healthcare initiatives, from basic medical access to preventative care. Special programs focus on maternal health, child nutrition, and mental health awareness."
      },
      {
        title: "Individuals with Dignity",
        description: "Promotes social welfare programs to support the most vulnerable, including poverty eradication initiatives and support for the elderly, disabled, and those affected by crises."
      },
      {
        title: "Educated Individuals",
        description: "Advocates for equal access to quality education, from early childhood to tertiary education, with a focus on bridging the digital divide."
      }
    ]
  },
  {
    id: 2,
    area: "Development of the Collective",
    icon: <Clock className="w-6 h-6" />,
    timeframe: "2027-2031",
    goals: [
      {
        title: "Safe, Healthy, and Appealing Environment",
        description: "Focuses on clean and sustainable infrastructure, providing clean water, sanitation, safe housing, and accessible public spaces."
      },
      {
        title: "Valued Identity and Cultural Heritage",
        description: "Supports cultural revitalization through traditional practices, oral histories, festivals, and arts initiatives."
      },
      {
        title: "Good Governance and Leadership",
        description: "Emphasizes transparent governance, community engagement, and youth leadership roles."
      }
    ]
  },
  {
    id: 3,
    area: "Sustainability and Growth",
    icon: <Sprout className="w-6 h-6" />,
    timeframe: "2031-2035",
    goals: [
      {
        title: "Stewardship of Our Resources",
        description: "Encourages responsible management of land and natural resources through sustainable practices and conservation efforts."
      },
      {
        title: "Economic Opportunity",
        description: "Focuses on building a thriving economy by supporting small businesses and creating diverse employment opportunities."
      }
    ]
  }
];

const Modal = ({ isOpen, onClose, milestone }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-[#1B5538]">{milestone.area}</h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>
          
          <div className="mb-4">
            <p className="text-gray-600 font-semibold">{milestone.timeframe}</p>
          </div>

          <div className="space-y-6">
            {milestone.goals.map((goal, index) => (
              <div key={index} className="border-l-4 border-[#397D5A] pl-4">
                <h4 className="text-lg font-semibold text-[#1B5538] mb-2">{goal.title}</h4>
                <p className="text-gray-700">{goal.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

function VisionPlan() {

  const [selectedMilestone, setSelectedMilestone] = useState(null);

  return (
    <div className="container mx-auto px-6 py-12">
    <header className="text-center mb-16">
      <h1 className="text-4xl font-bold text-[#1B5538]">VisionPlan 2035</h1>
      <p className="text-lg text-gray-700 mt-4">
        Our roadmap to a sustainable and prosperous future
      </p>
    </header>

    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#1B5538]" />

      {/* Timeline items */}
      <div className="space-y-24">
        {milestones.map((milestone, index) => (
          <div key={milestone.id} className="relative">
            {/* Timeline dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-8 h-8 bg-[#1B5538] rounded-full flex items-center justify-center text-white cursor-pointer"
              >
                {milestone.icon}
              </motion.div>
            </div>

            {/* Content card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className={`w-5/12 ${
                index % 2 === 0 ? 'ml-auto pl-8' : 'mr-auto pr-8'
              }`}
            >
              <div
                className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                onClick={() => setSelectedMilestone(milestone)}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-[#1B5538]">
                    {milestone.area}
                  </h3>
                  <span className="text-sm font-medium text-gray-500">
                    {milestone.timeframe}
                  </span>
                </div>
                <p className="text-gray-600">
                  Click to explore the key initiatives and goals for this phase.
                </p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>

    <Modal
      isOpen={!!selectedMilestone}
      onClose={() => setSelectedMilestone(null)}
      milestone={selectedMilestone}
    />

    <section className="text-left text-gray-700 mt-24">
      <p className="text-lg mb-8">
        The VisionPlan 2035 is the heart of the community's development strategy. It is designed to align traditional governance with modern socio-economic needs, ensuring that Tsitsing and the broader Royal Bafokeng Nation (RBN) continue to thrive. The plan is broken down into three key areas of action, each with specific goals.
      </p>

      {/* Rest of your existing content */}
    </section>
  </div>
  );
}

export default VisionPlan;
