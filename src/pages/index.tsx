import { motion, useScroll, useSpring } from 'framer-motion';
import Layout from '../components/Layout';
import Head from 'next/head';
import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import Contact from '../components/sections/Contact';
import WorkExperience from '../components/sections/WorkExperience';
import { projects, experiences, skills } from '../data/content';

/**
 * Home page component
 * Assembles all sections and manages global animations
 */
export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Layout>
      <Head>
        <title>Harishan Amutheesan | Software Engineer</title>
        <meta 
          name="description" 
          content="Software Engineering graduate with experience in enterprise systems, startups, and IoT solutions." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Harishan Amutheesan | Software Engineer" />
        <meta 
          property="og:description" 
          content="Software Engineering graduate with experience in enterprise systems, startups, and IoT solutions." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://harishan.dev" />
      </Head>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Main Content */}
      <div className="min-h-screen">
        <Hero />
        <Skills skills={skills} />
        <WorkExperience />
        <Projects projects={projects} />
        <Contact />

        {/* Resume Download Button */}
        <div className="bg-[#0a0a0a] py-8 relative">
          <div className="container mx-auto px-4 text-center">
            <motion.a
              href="/ResumeHarishan.pdf"
              download
              className="modern-button px-8 py-4 rounded-lg inline-flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Full Resume
            </motion.a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
