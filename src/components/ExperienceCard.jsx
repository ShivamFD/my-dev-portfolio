import React from 'react';
import { motion } from 'framer-motion';
import { RiBriefcaseLine, RiGraduationCapLine } from 'react-icons/ri';

const ExperienceCard = ({ experience, index }) => {
  const isWork = experience.type === 'work';
  
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: index % 2 === 0 ? -50 : 50 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6, 
        delay: index * 0.2 
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`relative flex ${
        index % 2 === 0 ? 'justify-start' : 'justify-end'
      } mb-12`}
    >
      {/* Timeline dot */}
      <div className={`absolute top-6 ${
        index % 2 === 0 ? 'left-6' : 'right-6'
      } w-4 h-4 rounded-full ${
        isWork 
          ? 'bg-blue-500 ring-4 ring-blue-200 dark:ring-blue-900/30' 
          : 'bg-purple-500 ring-4 ring-purple-200 dark:ring-purple-900/30'
      } z-10`} />

      {/* Content Card */}
      <div className={`glass-effect rounded-2xl p-6 shadow-lg border ${
        isWork 
          ? 'border-blue-200 dark:border-blue-800' 
          : 'border-purple-200 dark:border-purple-800'
      } w-full max-w-md ${
        index % 2 === 0 ? 'ml-12' : 'mr-12'
      }`}>
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg ${
              isWork 
                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600' 
                : 'bg-purple-100 dark:bg-purple-900/30 text-purple-600'
            }`}>
              {isWork ? <RiBriefcaseLine size={20} /> : <RiGraduationCapLine size={20} />}
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                {experience.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 font-medium">
                {experience.company}
              </p>
            </div>
          </div>
        </div>

        {/* Period */}
        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 ${
          isWork 
            ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' 
            : 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
        }`}>
          {experience.period}
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {experience.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;