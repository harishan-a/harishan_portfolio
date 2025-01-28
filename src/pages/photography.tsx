import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { shuffle } from 'lodash';

interface PhotoProps {
  photos: string[];
}

// Sample photography categories and images (replace with your actual content)
const categories = [
  {
    name: "Nature",
    description: "Capturing the beauty of the natural world",
    images: [
      { src: "/photos/nature1.jpg", alt: "Forest landscape", caption: "Morning mist in the forest" },
      { src: "/photos/nature2.jpg", alt: "Mountain view", caption: "Sunset at the mountains" },
      // Add more images
    ]
  },
  {
    name: "Urban",
    description: "City life and architecture",
    images: [
      { src: "/photos/urban1.jpg", alt: "City skyline", caption: "Toronto at night" },
      { src: "/photos/urban2.jpg", alt: "Street photography", caption: "Streets of Montreal" },
      // Add more images
    ]
  },
  // Add more categories
];

export default function Photography({ photos: initialPhotos }: PhotoProps) {
  const [photos, setPhotos] = useState<string[]>([]);
  const [visiblePhotos, setVisiblePhotos] = useState<string[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const loadMoreRef = useRef(null);
  const initialBatchSize = 12;
  const batchSize = 8;

  // Enhance photo loading with a more robust approach
  useEffect(() => {
    if (initialPhotos.length > 0) {
      const shuffledPhotos = shuffle(initialPhotos);
      setPhotos(shuffledPhotos);
      setVisiblePhotos(shuffledPhotos.slice(0, initialBatchSize));
      setLoading(false);
    }
  }, [initialPhotos]);

  // Enhanced intersection observer configuration
  const { ref: intersectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
    rootMargin: "100px",
  });

  // More robust load more logic with debouncing
  const loadMore = useCallback(() => {
    if (!loading && visiblePhotos.length < photos.length) {
      const nextBatch = photos.slice(
        visiblePhotos.length,
        visiblePhotos.length + batchSize
      );
      setVisiblePhotos(prev => [...prev, ...nextBatch]);
    }
  }, [loading, photos, visiblePhotos.length]);

  useEffect(() => {
    if (inView) {
      loadMore();
    }
  }, [inView, loadMore]);

  return (
    <Layout>
      <Head>
        <title>Photography | Harishan Amutheesan</title>
        <meta name="description" content="A visual journey through my life and experiences" />
      </Head>

      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 20% 20%, rgba(59,130,246,0.08), transparent 45%),
                radial-gradient(circle at 80% 80%, rgba(139,92,246,0.08), transparent 45%),
                radial-gradient(circle at 50% 50%, rgba(200,200,200,0.03), transparent 60%)
              `,
              filter: 'blur(80px)',
            }}
            animate={{
              opacity: [0.5, 0.7, 0.5],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Floating Social Links */}
        <motion.div 
          className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="mailto:harishan9@gmail.com"
            className="p-4 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg className="w-5 h-5 text-white/70 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </motion.a>
          <motion.a
            href="https://www.instagram.com/hershey.photos?igsh=MjZsaTR4cnAyNmdp"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg className="w-5 h-5 text-white/70 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </motion.a>
        </motion.div>

        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              transform: 'perspective(1000px)',
              transformStyle: 'preserve-3d',
            }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-light tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-500/90 via-purple-500/90 to-pink-500/90 py-2 px-4 mb-6"
              whileHover={{ scale: 1.02 }}
              animate={{
                rotateX: [-1, 1, -1],
                rotateY: [-1, 1, -1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                lineHeight: '1.2',
                letterSpacing: '0.02em'
              }}
            >
              Through My Lens
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-6 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.01 }}
            >
              Freelance photographer capturing life's moments and creating new experiences through the art of visual storytelling
            </motion.p>

            {/* Enhanced Abstract Shape */}
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[120%] h-[120%] pointer-events-none"
              animate={{
                rotate: [0, 180],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 blur-3xl" />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            className="w-[1px] h-12 relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 w-full bg-gradient-to-b from-white/40 to-transparent"
              animate={{
                y: ["-100%", "100%"]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
          <motion.span 
            className="text-[10px] text-white/40 uppercase tracking-[0.2em]"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Scroll
          </motion.span>
        </motion.div>
      </section>

      {/* Photo Gallery */}
      <section className="py-12 bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-6 [column-fill:_balance] mx-auto space-y-4 md:space-y-6">
            {visiblePhotos.map((photo, index) => (
              <motion.div
                key={`${photo}-${index}`}
                className="break-inside-avoid relative group mb-4 md:mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: [0.23, 1, 0.32, 1],
                    delay: Math.min((index % batchSize) * 0.1, 0.3)
                  }
                }}
                viewport={{ 
                  once: true, 
                  margin: "-10%",
                  amount: 0.3
                }}
              >
                <motion.div
                  className="relative overflow-hidden rounded-2xl glass-morphism"
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    transition: { 
                      duration: 0.4, 
                      ease: [0.23, 1, 0.32, 1]
                    }
                  }}
                >
                  <div 
                    className="cursor-pointer transform-gpu"
                    onClick={() => setSelectedPhoto(photo)}
                  >
                    <div className="relative">
                      <Image
                        src={`/photos/${photo}`}
                        alt={`Life moment ${index + 1}`}
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover transform-gpu transition-all duration-500 ease-out will-change-transform group-hover:scale-105"
                        loading="lazy"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
                        onLoad={(e) => {
                          const img = e.target as HTMLImageElement;
                          img.classList.add('loaded');
                        }}
                      />
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out"
                        initial={false}
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Load More Trigger */}
          <div 
            ref={intersectionRef}
            className="h-20 flex items-center justify-center mt-8"
          >
            {!loading && visiblePhotos.length < photos.length && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-white/40 text-sm"
              >
                Loading more photos...
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Photo Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 backdrop-blur-xl"
            onClick={() => setSelectedPhoto(null)}
          >
            {/* Close Button */}
            <motion.button
              className="fixed top-6 right-6 z-50 p-4 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPhoto(null);
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 text-white/70 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Main Image Container */}
            <motion.div
              className="h-full flex items-center justify-center p-4 md:p-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
                <Image
                  src={`/photos/${selectedPhoto}`}
                  alt="Selected photo"
                  width={1920}
                  height={1080}
                  className="w-auto h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl"
                  priority
                />
              </div>
            </motion.div>

            {/* Navigation Arrows */}
            <div className="fixed inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-8 pointer-events-none">
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = photos.indexOf(selectedPhoto);
                  const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
                  setSelectedPhoto(photos[prevIndex]);
                }}
                className="p-4 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 pointer-events-auto shadow-lg group"
                whileHover={{ x: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <svg className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>

              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = photos.indexOf(selectedPhoto);
                  const nextIndex = (currentIndex + 1) % photos.length;
                  setSelectedPhoto(photos[nextIndex]);
                }}
                className="p-4 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 pointer-events-auto shadow-lg group"
                whileHover={{ x: 3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <svg className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>

            {/* Photo Counter */}
            <motion.div
              className="fixed bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 text-white/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              {photos.indexOf(selectedPhoto) + 1} / {photos.length}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Section */}
      <section className="py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-light mb-8"
              whileHover={{ scale: 1.02 }}
            >
              Let's Create Together
            </motion.h2>
            <motion.p 
              className="text-xl text-white/60 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Available for photography collaborations and projects
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.a 
                href="mailto:harishan9@gmail.com"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-white/90 hover:text-white shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="mr-2">Get in Touch</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const fs = require('fs');
  const path = require('path');
  const photosDirectory = path.join(process.cwd(), 'public/photos');
  const photoFiles = fs.readdirSync(photosDirectory);

  // Filter for image files only
  const photos = photoFiles.filter((file: string) => 
    /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
  );

  return {
    props: {
      photos,
    },
    // Revalidate every hour
    revalidate: 3600,
  };
} 