import { motion } from 'framer-motion';

/**
 * Contact section component for displaying contact information and social links
 * Features smooth animations and interactive elements
 */
export default function Contact() {
  return (
    <section className="py-32 bg-[#0f0f0f] relative" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-light mb-8 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Let's Connect
          </motion.h2>
          
          <motion.p 
            className="text-xl text-white/60 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Currently open to new opportunities and interesting projects.
          </motion.p>
          
          {/* Contact Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ContactButton
              href="mailto:harishan9@gmail.com"
              text="Email Me"
              icon={<EmailIcon />}
            />

            <ContactButton
              href="https://linkedin.com/in/harishan-a"
              text="LinkedIn"
              icon={<LinkedInIcon />}
              external
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Fixed Contact Buttons */}
      <motion.div 
        className="fixed bottom-4 right-4 z-40"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="glass-morphism p-4 rounded-lg flex flex-col gap-3 backdrop-blur-sm"
          whileHover={{ scale: 1.05, y: -2 }}
        >
          <FloatingContactButton
            href="mailto:harishan9@gmail.com"
            icon={<EmailIcon />}
          />
          <FloatingContactButton
            href="https://linkedin.com/in/harishan-a"
            icon={<LinkedInIcon />}
            external
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

interface ContactButtonProps {
  href: string;
  text: string;
  icon: React.ReactNode;
  external?: boolean;
}

/**
 * Reusable contact button component with hover animations
 */
function ContactButton({ href, text, icon, external }: ContactButtonProps) {
  return (
    <motion.a 
      href={href}
      className="modern-button px-8 py-4 rounded-lg text-white/90 hover:text-white flex items-center gap-2"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {icon}
      <span>{text}</span>
    </motion.a>
  );
}

interface FloatingContactButtonProps {
  href: string;
  icon: React.ReactNode;
  external?: boolean;
}

/**
 * Floating contact button component with hover animations
 */
function FloatingContactButton({ href, icon, external }: FloatingContactButtonProps) {
  return (
    <motion.a
      href={href}
      className="modern-button p-3 rounded-lg group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      <motion.div 
        className="transition-transform group-hover:rotate-12"
      >
        {icon}
      </motion.div>
    </motion.a>
  );
}

/**
 * Email icon component
 */
function EmailIcon() {
  return (
    <svg 
      className="w-5 h-5" 
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
    </svg>
  );
}

/**
 * LinkedIn icon component
 */
function LinkedInIcon() {
  return (
    <svg 
      className="w-5 h-5" 
      fill="currentColor" 
      viewBox="0 0 24 24"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
} 