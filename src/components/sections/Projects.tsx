import { motion } from 'framer-motion';
import { projects } from '../../data/content';

/**
 * Projects section component for displaying featured work
 * Features grid layout and staggered animations
 */
export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-light mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative h-full glass-card p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div>
                    <h3 className="text-xl font-light mb-2 text-white/90">
                      {project.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs rounded-md bg-white/5 text-white/60 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/60 hover:text-white/90 transition-colors"
                      >
                        GitHub →
                      </a>
                      {project.link !== "#" && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-white/60 hover:text-white/90 transition-colors"
                        >
                          Live Demo →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 