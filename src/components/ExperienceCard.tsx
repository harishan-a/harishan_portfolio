import { motion, useMotionTemplate, useSpring, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface ExperienceCardProps {
  title: string;
  company: string;
  date: string;
  description: string[];
  technologies: string[];
  index: number;
}

const ExperienceCard = ({ title, company, date, description, technologies, index }: ExperienceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useSpring(0, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 50 });

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [100, 0, 0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0.8, 1, 1, 0.8]);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      mouseX.set(x);
      mouseY.set(y);
      
      const rotateX = (y - rect.height / 2) / 20;
      const rotateY = (rect.width / 2 - x) / 20;
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    };

    const handleMouseLeave = () => {
      const rect = card.getBoundingClientRect();
      mouseX.set(rect.width / 2);
      mouseY.set(rect.height / 2);
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
      setIsHovered(false);
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  const background = useMotionTemplate`radial-gradient(
    650px circle at ${mouseX}px ${mouseY}px,
    rgba(var(--blue-500-rgb), 0.1),
    transparent 80%
  )`;

  return (
    <motion.div
      ref={cardRef}
      className="experience-card card-stack group"
      style={{ 
        opacity,
        y,
        scale,
        filter: 'blur(0px)',
        willChange: 'transform, opacity'
      }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
    >
      <motion.div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background }}
      />
      <div className="card-content p-8 relative z-10">
        <motion.div 
          className="flex justify-between items-start mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <div>
            <motion.h3 
              className="card-title text-xl font-medium mb-2 bg-clip-text"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
            >
              {title}
            </motion.h3>
            <motion.p 
              className="text-white/60"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
            >
              {company}
            </motion.p>
          </div>
          <motion.span 
            className="card-date"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
          >
            {date}
          </motion.span>
        </motion.div>

        <motion.div 
          className="space-y-3 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
        >
          {description.map((item, i) => (
            <motion.p
              key={i}
              className="text-white/70 leading-relaxed hover:text-white/90 transition-colors duration-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              whileHover={{ x: 4 }}
              transition={{ 
                duration: 0.4,
                delay: index * 0.1 + 0.5 + i * 0.1,
                x: { type: "spring", stiffness: 300, damping: 30 }
              }}
            >
              {item}
            </motion.p>
          ))}
        </motion.div>

        <motion.div 
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
        >
          {technologies.map((tech, i) => (
            <motion.span
              key={i}
              className="card-badge backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-20%" }}
              whileHover={{ 
                scale: 1.08, 
                y: -4,
                backgroundColor: "rgba(var(--blue-500-rgb), 0.15)",
                borderColor: "rgba(var(--blue-500-rgb), 0.3)"
              }}
              transition={{ 
                duration: 0.2,
                delay: index * 0.1 + 0.7 + i * 0.05,
                scale: {
                  type: "spring",
                  stiffness: 400,
                  damping: 20
                }
              }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard; 