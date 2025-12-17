import React from 'react';
import { motion } from 'framer-motion';
import { RiGithubLine, RiLinkedinLine, RiTwitterLine, RiMailLine } from 'react-icons/ri';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: RiGithubLine,
      href: "https://github.com/yourusername",
      label: "GitHub"
    },
    {
      icon: RiLinkedinLine,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn"
    },
    {
      icon: RiTwitterLine,
      href: "https://twitter.com/yourusername",
      label: "Twitter"
    },
    {
      icon: RiMailLine,
      href: "mailto:your.email@example.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <p className="text-gray-500 dark:text-gray-400">
              © {currentYear} Shivam Vishwakarma. All rights reserved.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl hover:bg-white/80 dark:hover:bg-gray-700/80 transition-all duration-300 text-gray-700/80 dark:text-gray-300/80 hover:text-blue-600 dark:hover:text-blue-400"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Made with love */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <p className="text-gray-500 dark:text-gray-400">
            Made with ❤️ using React, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;