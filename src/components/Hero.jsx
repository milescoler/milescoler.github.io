import React from 'react';
import { motion } from 'framer-motion';
import ReactTyped from 'react-typed';
import { ChevronDown, Download, Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Hero = ({ data }) => {
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  const socialIcons = {
    github: <Github size={20} />,
    linkedin: <Linkedin size={20} />,
    twitter: <Twitter size={20} />,
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-bg opacity-10"></div>
      
      {/* Floating Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-accent-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="text-center">
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary-400 to-accent-500 p-1">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                <span className="text-4xl font-bold gradient-text">
                  {data.firstName?.[0] || 'Y'}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-4 dark:text-white"
          >
            {data.name}
          </motion.h1>

          {/* Typed Title */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl mb-6"
          >
            <span className="text-gray-700 dark:text-gray-300">I'm a </span>
            <ReactTyped
              strings={data.hero.typedStrings}
              typeSpeed={50}
              backSpeed={30}
              loop
              className="gradient-text font-bold"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8"
          >
            {data.hero.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-medium hover:scale-105 transition-transform flex items-center gap-2 shadow-lg"
            >
              <Mail size={20} />
              Get In Touch
            </a>
            <button
              onClick={() => window.open('/resume.pdf', '_blank')}
              className="px-8 py-3 border-2 border-primary-500 text-primary-500 dark:text-primary-400 rounded-full font-medium hover:bg-primary-50 dark:hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              <Download size={20} />
              Download CV
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex gap-4 justify-center"
          >
            {Object.entries(data.socials).map(([platform, url]) => {
              if (!url) return null;
              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white transition-all hover:scale-110"
                >
                  {socialIcons[platform] || <Mail size={20} />}
                </a>
              );
            })}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToAbout}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400 dark:text-gray-600"
          >
            <ChevronDown size={30} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
