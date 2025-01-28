import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isClient, setIsClient] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const currentPath = router.pathname;

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {isClient && (
        <>
          {/* Enhanced Navigation */}
          <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 ${
              scrolled ? 'bg-black/50 backdrop-blur-xl' : ''
            }`}
          >
            <div className="container mx-auto px-4">
              <div className="h-20 flex items-center justify-center">
                <nav className="relative bg-white/5 backdrop-blur-lg rounded-full p-1.5 border border-white/10 shadow-lg hover:border-white/20 transition-all duration-300">
                  {/* Sliding Background */}
                  <motion.div 
                    className="absolute top-1.5 bottom-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm shadow-lg"
                    initial={false}
                    animate={{
                      x: currentPath === '/' ? '0%' : '100%',
                      width: '50%'
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30
                    }}
                  />

                  {/* Navigation Links */}
                  <div className="relative z-10 flex gap-1">
                    <Link href="/" passHref>
                      <motion.a
                        className={`px-8 py-2.5 text-[13px] rounded-full relative transition-all duration-300 ${
                          currentPath === '/' 
                            ? 'text-white font-medium' 
                            : 'text-white/60 hover:text-white/90'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <motion.span
                          initial={false}
                          animate={{
                            opacity: currentPath === '/' ? 1 : 0.6
                          }}
                          transition={{ duration: 0.2 }}
                          className="tracking-wide"
                        >
                          Developer
                        </motion.span>
                      </motion.a>
                    </Link>

                    <Link href="/photography" passHref>
                      <motion.a
                        className={`px-8 py-2.5 text-[13px] rounded-full relative transition-all duration-300 ${
                          currentPath === '/photography' 
                            ? 'text-white font-medium' 
                            : 'text-white/60 hover:text-white/90'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <motion.span
                          initial={false}
                          animate={{
                            opacity: currentPath === '/photography' ? 1 : 0.6
                          }}
                          transition={{ duration: 0.2 }}
                          className="tracking-wide"
                        >
                          Photography
                        </motion.span>
                      </motion.a>
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          </motion.header>

          {/* Enhanced Page Content with Smooth Transitions */}
          <AnimatePresence 
            mode="wait"
            initial={false}
            custom={currentPath === '/' ? -1 : 1}
          >
            <motion.main
              key={currentPath}
              custom={currentPath === '/' ? -1 : 1}
              initial={{ opacity: 0, x: currentPath === '/' ? -1000 : 1000 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: currentPath === '/' ? 1000 : -1000 }}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="relative"
            >
              {children}
            </motion.main>
          </AnimatePresence>

          {/* Fixed Resume Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="fixed top-24 right-8 z-40"
          >
            <motion.a
              href="/ResumeHarishan.pdf"
              download
              className="modern-button px-6 py-2.5 rounded-full text-[13px] tracking-wide inline-flex items-center gap-2 hover:scale-105 transition-all duration-300"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Resume</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Footer */}
          <footer className="py-8 text-center text-white/40 text-sm">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p>© {new Date().getFullYear()} Harishan Amutheesan. All rights reserved.</p>
              </motion.div>
            </div>
          </footer>
        </>
      )}
      {!isClient && (
        <div className="min-h-screen bg-[#0a0a0a] text-white">
          {children}
        </div>
      )}
    </div>
  );
};

export default Layout; 