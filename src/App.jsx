import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import { useTheme } from './context/ThemeContext';

function App() {
  const { theme } = useTheme();
  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  return (
    <div className={`App theme-${theme} bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500`}>
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <Home />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </motion.div>
      </AnimatePresence>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;