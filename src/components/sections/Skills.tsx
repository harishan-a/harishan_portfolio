import { motion } from 'framer-motion';
import { Skills as SkillsType } from '../../types';

interface SkillsSectionProps {
  skills: SkillsType;
}

/**
 * Skills section component for displaying technical expertise
 * Features grid layout and interactive animations
 * 
 * @param {SkillsType} skills - Skills data to display
 */
export default function Skills({ skills }: SkillsSectionProps) {
  return (
    <section className="py-32 bg-[#0f0f0f] relative overflow-hidden" id="skills">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        <div className="absolute inset-0 bg-gradient-radial opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <motion.h2 
              className="text-4xl md:text-5xl font-light mb-12 gradient-text"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Technical Expertise
            </motion.h2>
            
            <div className="space-y-8">
              {/* Languages */}
              <SkillCard
                title="Languages"
                items={skills.languages}
                gradientFrom="blue-500"
                gradientTo="purple-500"
              />

              {/* Tools & Frameworks */}
              <SkillCard
                title="Tools & Frameworks"
                items={skills.tools}
                gradientFrom="purple-500"
                gradientTo="pink-500"
              />
            </div>
          </div>

          {/* Areas of Expertise */}
          <div>
            <motion.h2 
              className="text-4xl md:text-5xl font-light mb-12 gradient-text"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Areas of Focus
            </motion.h2>
            
            <motion.div
              className="glass-morphism p-8 rounded-lg transform-gpu card-3d"
              whileHover={{ y: -4, rotateX: 2, rotateY: 2 }}
            >
              <div className="space-y-6">
                {skills.areas.map((area, index) => (
                  <motion.div
                    key={area}
                    className="flex items-center gap-4 group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      whileHover={{ scale: 1.5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    <motion.span 
                      className="text-lg text-white/80 group-hover:text-white/100 transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      {area}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface SkillCardProps {
  title: string;
  items: string[];
  gradientFrom: string;
  gradientTo: string;
}

/**
 * Skill card component for displaying a group of related skills
 */
function SkillCard({ title, items, gradientFrom, gradientTo }: SkillCardProps) {
  return (
    <motion.div
      className="glass-morphism p-8 rounded-lg transform-gpu card-3d relative overflow-hidden"
      whileHover={{ y: -4, rotateX: 2, rotateY: 2 }}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br from-${gradientFrom}/5 to-${gradientTo}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      <h3 className="text-2xl mb-6 text-white/90 gradient-text">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {items.map((item, index) => (
          <motion.span
            key={item}
            className="cyber-button px-4 py-2 rounded-lg text-sm text-white/70 hover:text-white"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: `0 0 20px rgba(var(--${gradientFrom}-rgb), 0.3)`
            }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {item}
          </motion.span>
        ))}
      </div>

      {/* Corner Decoration */}
      <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-${gradientFrom}/10 to-${gradientTo}/10 transform rotate-45 translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-500`} />
    </motion.div>
  );
} 