import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = ({ data }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 dark:text-white">Work Experience</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and key achievements
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-primary-500 to-accent-500"></div>

          {data.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex items-center mb-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
                className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-primary-500 rounded-full z-10"
              />

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`ml-20 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}
              >
                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {experience.role}
                      </h3>
                      <p className="text-primary-500 font-medium">{experience.company}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <Briefcase className="w-8 h-8 text-primary-500 opacity-20" />
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  {experience.achievements && experience.achievements.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.3, delay: index * 0.2 + 0.4 + achIndex * 0.1 }}
                            className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                          >
                            <ChevronRight className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: index * 0.2 + 0.5 + techIndex * 0.05 }}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Empty Space for Timeline Layout */}
              <div className="hidden md:block md:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
