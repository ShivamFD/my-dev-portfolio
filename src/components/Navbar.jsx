import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RiSunLine, RiMoonLine, RiMenuLine, RiCloseLine } from 'react-icons/ri';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
      const scrollY = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 glass-effect border-b border-gray-200/30 dark:border-gray-700/50 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-md transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-text"
          >
            DevPortfolio
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-3 py-2 transition-all duration-300 ${
                  activeSection === item.href.slice(1)
                    ? 'text-blue-600 dark:text-blue-400 font-semibold'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400"
                  />
                )}
              </a>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg glass-effect hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-200 hover:bg-white/30 dark:hover:bg-gray-800/30"
            >
              {theme === 'dark' ? <RiSunLine size={20} className="text-yellow-400" /> : <RiMoonLine size={20} className="text-gray-700" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg glass-effect text-gray-700 dark:text-gray-200 hover:bg-white/30 dark:hover:bg-gray-800/30"
            >
              {mobileMenuOpen ? <RiCloseLine size={20} /> : <RiMenuLine size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="md:hidden absolute top-full left-0 w-full glass-effect border-t border-gray-200/30 dark:border-gray-700/50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-xl"
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.href.slice(1)
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-800/30'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;