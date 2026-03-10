import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, X, ChevronRight, Star, Filter } from 'lucide-react';

const Projects = ({ data }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['all', ...new Set(data.map(project => project.category))];

  const filteredProjects = selectedCategory === 'all'
    ? data
    : data.filter(project => project.category === selectedCategory);

  return (
    <>
      <section id="projects" className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 dark:text-white">Featured Projects</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A showcase of my best work and side projects
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-12"
          >
            <Filter className="w-5 h-5 text-primary-500" />
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    {/* Project Image or Placeholder */}
                    <div className="h-48 bg-gradient-to-br from-primary-400 to-accent-500 relative overflow-hidden">
                      {project.featured && (
                        <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          Featured
                        </div>
                      )}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-6xl opacity-20">
                          {project.category === 'Frontend' ? '</>' : 
                           project.category === 'Backend' ? '{ }' :
                           project.category === 'Mobile' ? '📱' : '⚡'}
                        </div>
                      </div>
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="p-3 bg-white rounded-full text-gray-900 transform scale-0 group-hover:scale-100 transition-transform duration-300"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white rounded-full text-gray-900 transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-75"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white rounded-full text-gray-900 transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-150"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                        {project.shortDescription}
                      </p>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-6 flex items-center justify-between">
                <h3 className="text-2xl font-bold dark:text-white">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Project Image */}
                <div className="h-64 bg-gradient-to-br from-primary-400 to-accent-500 rounded-lg flex items-center justify-center">
                  <div className="text-white text-8xl opacity-20">
                    {selectedProject.category === 'Frontend' ? '</>' : 
                     selectedProject.category === 'Backend' ? '{ }' :
                     selectedProject.category === 'Mobile' ? '📱' : '⚡'}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h4 className="text-lg font-semibold mb-2 dark:text-white">About</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 dark:text-white">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                        <ChevronRight className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 dark:text-white">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
