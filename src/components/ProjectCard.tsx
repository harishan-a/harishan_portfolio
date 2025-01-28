import { motion, useMotionTemplate, useSpring, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
  index: number;
}

const ProjectCard = ({ title, description, image, technologies, link, github, index }: ProjectCardProps) => {
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
      
      const rotateX = (y - rect.height / 2) / 25;
      const rotateY = (rect.width / 2 - x) / 25;
      
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
      className="project-card group"
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
          className="relative w-full h-56 mb-6 rounded-xl overflow-hidden group/image"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-all duration-700 group-hover/image:scale-110 group-hover/image:rotate-1"
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />
        </motion.div>

        <motion.h3 
          className="card-title text-xl font-medium mb-3 bg-clip-text"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
        >
          {title}
        </motion.h3>

        <motion.p 
          className="text-white/70 leading-relaxed mb-6 hover:text-white/90 transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          whileHover={{ x: 4 }}
          transition={{ 
            duration: 0.4,
            delay: index * 0.1 + 0.2,
            x: { type: "spring", stiffness: 300, damping: 30 }
          }}
        >
          {description}
        </motion.p>

        <motion.div 
          className="flex flex-wrap gap-2 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
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
                delay: index * 0.1 + 0.4 + i * 0.05,
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

        <motion.div 
          className="flex gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
        >
          {link && (
            <motion.a 
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link group/link"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="bg-gradient-to-r from-white/90 to-white/70 bg-clip-text text-transparent">View Project</span>
              <motion.svg 
                className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </motion.svg>
            </motion.a>
          )}
          {github && (
            <motion.a 
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link group/link"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="bg-gradient-to-r from-white/90 to-white/70 bg-clip-text text-transparent">View Code</span>
              <motion.svg 
                className="w-4 h-4 transition-transform duration-300 group-hover/link:rotate-12" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </motion.svg>
            </motion.a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 