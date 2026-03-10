import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, Code, Rocket, Heart } from 'lucide-react';

const About = ({ data }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const iconMap = {
    '🎓': <Sparkles className="w-5 h-5" />,
    '💼': <Code className="w-5 h-5" />,
    '🌍': <Rocket className="w-5 h-5" />,
    '🎯': <Heart className="w-5 h-5" />,
  };

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 dark:text-white">About Me</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know more about my journey, interests, and what drives me
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-4">
              {data.about.bio.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-gray-600 dark:text-gray-400 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Interests */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {data.about.interests.map((interest, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Facts & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {data.about.facts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="text-primary-500 mb-3">
                    {iconMap[fact.icon] || <span className="text-2xl">{fact.icon}</span>}
                  </div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    {fact.label}
                  </h4>
                  <p className="font-semibold text-gray-800 dark:text-white">
                    {fact.value}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Fun Animation */}
            <motion.div
              className="mt-8 relative"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl p-6 text-white">
                <p className="text-lg font-medium">
                  {data.availability.status} 
                </p>
                <p className="text-sm opacity-90 mt-1">
                  {data.availability.remoteWork ? '✓ Remote' : ''} 
                  {data.availability.relocation ? ' ✓ Relocation' : ''}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
