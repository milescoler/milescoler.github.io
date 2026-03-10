import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = ({ data }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="text-center">
          {/* Quote */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg md:text-xl font-light mb-6 text-gray-300 italic"
          >
            "{data.footer.quote}"
          </motion.p>

          {/* Divider */}
          <div className="w-24 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-6"></div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-center gap-2 text-sm text-gray-400"
          >
            <span>© {currentYear} {data.name}</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> and <Coffee className="w-4 h-4 text-yellow-500" />
            </span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1">
              Powered by <Code className="w-4 h-4 text-primary-400" /> React
            </span>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-xs text-gray-500"
          >
            <p>Open to {data.availability.preferredRoles.join(' • ')}</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
