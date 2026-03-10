import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Cloud, Tool, Users, Lightbulb } from 'lucide-react';

const Skills = ({ data }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...new Set(data.technical.map(skill => skill.category))];

  const filteredSkills = selectedCategory === 'all' 
    ? data.technical 
    : data.technical.filter(skill => skill.category === selectedCategory);

  const categoryIcons = {
    'Language': <Code className="w-5 h-5" />,
    'Framework': <Tool className="w-5 h-5" />,
    'Database': <Database className="w-5 h-5" />,
    'Cloud': <Cloud className="w-5 h-5" />,
    'DevOps': <Tool className="w-5 h-5" />,
    'Tool': <Tool className="w-5 h-5" />,
  };

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 dark:text-white">Skills & Expertise</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-primary-500 text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Technical Skills with Animated Bars */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-6 dark:text-white flex items-center gap-2">
              <Code className="w-5 h-5 text-primary-500" />
              Technical Skills
            </h3>
            <div className="grid gap-4">
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-primary-500">
                        {categoryIcons[skill.category]}
                      </span>
                      <span className="font-medium dark:text-white">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                    />
                  </div>
                  <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    {skill.category}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Soft Skills & Tools */}
          <div className="space-y-8">
            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-4 dark:text-white flex items-center gap-2">
                <Users className="w-5 h-5 text-primary-500" />
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {data.soft.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1.5 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4 dark:text-white flex items-center gap-2">
                <Tool className="w-5 h-5 text-primary-500" />
                Tools & Platforms
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {data.tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full" />
                    <span className="text-sm">{tool}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skill Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl p-6 text-white"
            >
              <Lightbulb className="w-8 h-8 mb-3" />
              <h4 className="font-semibold mb-2">Quick Learner</h4>
              <p className="text-sm opacity-90">
                Always exploring new technologies and staying updated with industry trends
              </p>
              <div className="mt-4 flex gap-4">
                <div>
                  <div className="text-2xl font-bold">{data.technical.length}+</div>
                  <div className="text-xs opacity-80">Technologies</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{data.tools.length}+</div>
                  <div className="text-xs opacity-80">Tools</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
