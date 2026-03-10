import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex items-center justify-center">
      <div className="text-center">
        <motion.div
          className="flex space-x-2 justify-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-4 h-4 bg-primary-500 rounded-full"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: index * 0.1,
              }}
            />
          ))}
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 dark:text-gray-400"
        >
          Loading amazing things...
        </motion.p>
      </div>
    </div>
  );
};

export default Loader;
