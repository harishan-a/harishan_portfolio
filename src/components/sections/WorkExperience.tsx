import { motion } from 'framer-motion';
import { experiences } from '../../data/content';

export default function WorkExperience() {
  return (
    <section id="experience" className="py-16 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-light mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {experiences.map((experience, index) => (
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
                    <h3 className="text-xl font-light mb-1 text-white/90">
                      {experience.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-2">
                      {experience.company} • {experience.period}
                    </p>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {experience.description}
                    </p>
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