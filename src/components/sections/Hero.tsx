import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useState, useEffect } from 'react';

/**
 * Hero section component displaying the main introduction and call-to-action buttons
 * Features interactive animations and responsive design
 */
export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const springConfig = { stiffness: 100, damping: 30, mass: 0.5 };

  const mouseX = useSpring(useMotionValue(0), springConfig);
  const mouseY = useSpring(useMotionValue(0), springConfig);

  // Animated gradient background
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientPosition({
        x: 50 + Math.sin(Date.now() / 2000) * 30,
        y: 50 + Math.cos(Date.now() / 2000) * 30
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  /**
   * Handles mouse movement for interactive background effect
   */
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    
    mouseX.set(x * 8);
    mouseY.set(y * 8);
    setMousePosition({ x, y });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center bg-[#0a0a0a] relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Enhanced Dynamic Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        <motion.div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, 
                rgba(59,130,246,0.08), 
                transparent 40%),
              radial-gradient(circle at ${30 + mousePosition.x * -20}% ${70 + mousePosition.y * 20}%, 
                rgba(139,92,246,0.08), 
                transparent 40%),
              radial-gradient(circle at ${70 + mousePosition.x * 20}% ${30 + mousePosition.y * -20}%, 
                rgba(236,72,153,0.08), 
                transparent 40%)
            `,
            filter: 'blur(100px)',
          }}
        />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          className="max-w-4xl mx-auto"
          style={{
            transform: `perspective(1000px) rotateX(${mouseY}deg) rotateY(${mouseX}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          <motion.div
            className="relative mb-16 flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Enhanced Logo Animation */}
            <div className="relative w-48 h-48 mb-8">
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-3xl"
                animate={{
                  scale: [1.1, 1, 1.1],
                  rotate: [90, 0, 90],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                style={{ 
                  transformStyle: 'preserve-3d',
                  transform: 'translateZ(20px)',
                }}
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-4xl font-light tracking-widest electric-text">H</span>
              </motion.div>
            </div>

            {/* Enhanced Title and Description */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.h1 
                className="text-4xl md:text-5xl font-light mb-4 tracking-wider gradient-text"
                style={{ transform: 'translateZ(30px)' }}
                whileHover={{ scale: 1.02 }}
              >
                Harishan Amutheesan
              </motion.h1>
              <motion.div
                className="inline-block mb-8"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-xl md:text-2xl text-white/90 font-light tracking-wide">
                  Software Engineer & Problem Solver
                </span>
              </motion.div>
            </motion.div>

            {/* Enhanced Bio */}
            <motion.p 
              className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mb-12 glass-morphism p-8 rounded-lg text-center backdrop-blur-lg"
              whileHover={{ scale: 1.02, rotateX: -2, rotateY: 2 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              Software Engineering graduate (May 2025)
              <br />
              Currently seeking full-time software engineering opportunities.
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-6">
              <motion.a
                href="#projects"
                className="modern-button px-8 py-4 rounded-lg flex items-center gap-2 group"
                whileHover={{ 
                  scale: 1.05,
                  rotateX: -2,
                  rotateY: 2,
                  translateZ: 10 
                }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  transformStyle: 'preserve-3d',
                  transition: 'background 0.3s ease, border-color 0.3s ease'
                }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                <span className="relative z-10">View My Work</span>
                <motion.svg 
                  className="w-5 h-5 text-current" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </motion.svg>
              </motion.a>

              <motion.a
                href="#contact"
                className="modern-button px-8 py-4 rounded-lg flex items-center gap-2 group"
                whileHover={{ 
                  scale: 1.05,
                  rotateX: -2,
                  rotateY: 2,
                  translateZ: 10 
                }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  transformStyle: 'preserve-3d',
                  transition: 'background 0.3s ease, border-color 0.3s ease'
                }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                <span className="relative z-10">Get in Touch</span>
                <motion.svg 
                  className="w-5 h-5 text-current" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </motion.svg>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 