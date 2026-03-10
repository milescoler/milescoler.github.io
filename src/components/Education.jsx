import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

const Education = ({ data }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 dark:text-white">Education</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey and achievements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {data.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-800 rounded-xl p-6 h-full border border-transparent hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                {/* Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center text-white">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.duration}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {edu.degree}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                  {edu.school}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {edu.location}
                </p>

                {/* GPA */}
                {edu.gpa && (
                  <div className="flex items-center gap-2 mb-4">
                    <div className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">
                      GPA: {edu.gpa}
                    </div>
                  </div>
                )}

                {/* Achievements */}
                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="mb-4">
                    <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      <Award className="w-4 h-4 text-yellow-500" />
                      Achievements
                    </h4>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.3, delay: index * 0.2 + 0.3 + achIndex * 0.1 }}
                          className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                        >
                          <span className="text-primary-500 mt-1.5 w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"></span>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Coursework */}
                {edu.coursework && edu.coursework.length > 0 && (
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      <BookOpen className="w-4 h-4 text-primary-500" />
                      Relevant Coursework
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <motion.span
                          key={courseIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: index * 0.2 + 0.4 + courseIndex * 0.05 }}
                          className="px-2 py-1 bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs"
                        >
                          {course}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications if available */}
        {data.certifications && data.certifications.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12"
          >
            <h3 className="text-2xl font-bold text-center mb-6 dark:text-white">
              Certifications
            </h3>
            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {data.certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-800 rounded-lg p-4 border border-yellow-200 dark:border-yellow-900"
                >
                  <div className="flex items-start gap-3">
                    <Award className="w-8 h-8 text-yellow-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        {cert.issuer}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                        {cert.date}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Education;
