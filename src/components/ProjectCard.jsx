import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RiGithubLine, RiExternalLinkLine, RiArrowRightLine } from 'react-icons/ri';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
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
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"
        >
          <span className="text-white text-lg font-semibold">{project.title}</span>
        </motion.div>
        
        {/* Overlay with buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/70 flex items-center justify-center space-x-4"
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
          >
            <RiGithubLine size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors"
          >
            <RiExternalLinkLine size={20} />
          </motion.a>
        </motion.div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm rounded-full font-medium">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Project Button */}
        <motion.div
          whileHover={{ x: 5 }}
          className="flex items-center text-blue-600 dark:text-blue-400 font-semibold cursor-pointer group"
        >
          <span>View Project</span>
          <RiArrowRightLine 
            size={20} 
            className="ml-2 transition-transform duration-300 group-hover:translate-x-1" 
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;