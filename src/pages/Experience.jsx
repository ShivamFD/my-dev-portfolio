import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from '../components/ExperienceCard';
import { experienceData } from '../data/experience';

const Experience = () => {
  const workExperience = experienceData.filter(exp => exp.type === 'work');
  const education = experienceData.filter(exp => exp.type === 'education');

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Experience & Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey and educational background
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center lg:text-left"
            >
              Work Experience
            </motion.h3>
            
            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />
              
              {/* Experience Cards */}
              <div className="space-y-4">
                {workExperience.map((experience, index) => (
                  <ExperienceCard 
                    key={experience.id} 
                    experience={experience} 
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center lg:text-left"
            >
              Education
            </motion.h3>
            
            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500" />
              
              {/* Education Cards */}
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <ExperienceCard 
                    key={edu.id} 
                    experience={edu} 
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;