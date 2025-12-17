import React from 'react';
import { motion } from 'framer-motion';
import { RiUserLine, RiCodeLine, RiLightbulbLine, RiTeamLine } from 'react-icons/ri';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const stats = [
    { number: "15+", label: "Projects Completed" },
    { number: "1+", label: "Year Experience" },
    { number: "10+", label: "Happy Clients" },
    { number: "5+", label: "Technologies" }
  ];

  const features = [
    {
      icon: RiCodeLine,
      title: "Clean Code",
      description: "Writing maintainable and scalable code following best practices"
    },
    {
      icon: RiLightbulbLine,
      title: "Innovative Solutions",
      description: "Creative problem-solving with modern technologies and approaches"
    },
    {
      icon: RiTeamLine,
      title: "Team Collaboration",
      description: "Excellent communication skills and experience working in agile teams"
    },
    {
      icon: RiUserLine,
      title: "User Focused",
      description: "Building applications with exceptional user experience in mind"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate developer crafting digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Profile Image */}
            <motion.div
              variants={itemVariants}
              className="relative mb-8"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                SV
              </div>
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity }
                }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full blur-xl opacity-50"
              />
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6 mb-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 glass-effect rounded-2xl"
                >
                  <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              variants={itemVariants}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Crafting Digital Excellence
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
            >
              Hello! I'm Shivam Vishwakarma, a passionate Full Stack Developer with 1 year of experience
              creating web applications that solve real-world problems. I specialize in modern
              JavaScript technologies including React, Node.js, and cloud platforms.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              My journey in web development started during my computer science degree, and I've been
              hooked ever since. I love turning complex problems into simple, beautiful, and
              intuitive solutions.
            </motion.p>

            {/* Features Grid */}
            <motion.div
              variants={itemVariants}
              className="grid sm:grid-cols-2 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-6 glass-effect rounded-2xl border border-white/20"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl mb-4">
                    <feature.icon />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;