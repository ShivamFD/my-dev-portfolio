import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'react-icons/ri';

const SkillCard = ({ skill, index }) => {
  const IconComponent = Icons[skill.icon] || Icons.RiCodeBoxLine;

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5, 
        delay: index * 0.1 
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: { 
      width: `${skill.level}%`,
      transition: { duration: 1, delay: 0.5 + index * 0.1 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      className="glass-effect rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/20"
    >
      {/* Skill Icon */}
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
        className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl"
      >
        <IconComponent />
      </motion.div>

      {/* Skill Name */}
      <h3 className="text-lg font-semibold text-center text-gray-900 dark:text-white mb-4">
        {skill.name}
      </h3>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
        <motion.div
          variants={progressVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full relative"
        >
          {/* Animated glow effect */}
          <motion.div
            animate={{
              x: ['0%', '100%', '0%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-white/30 blur-sm"
          />
        </motion.div>
      </div>

      {/* Percentage */}
      <div className="flex justify-between items-center mt-2">
        <span className="text-sm text-gray-600 dark:text-gray-400">Proficiency</span>
        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
          {skill.level}%
        </span>
      </div>
    </motion.div>
  );
};

export default SkillCard;