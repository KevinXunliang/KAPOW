// src/components/home/SceneGallerySection.tsx

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/SectionHeading';

const scenes = [
  {
    id: 1,
    title: 'Morning Ritual',
    desc: 'Start your day with clarity. Pure flavour without the haze.',
    image: '/images/scene-morning.jpg',
  },
  {
    id: 2,
    title: 'Outdoor Escape',
    desc: 'Take the flavour with you. Designed for life on the move.',
    image: '/images/scene-outdoor.jpg',
  },
  {
    id: 3,
    title: 'Connected Moments',
    desc: 'Shared experiences, better together.',
    image: '/images/scene-connected.jpg',
  },
  {
    id: 4,
    title: 'Pure Simplicity',
    desc: 'Clean ingredients, clear mind.',
    image: '/images/scene-simplicity.jpg',
  },
];

export function SceneGallerySection() {
  return (
    <section className="py-24 bg-cream-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Life in Flavour"
          title="Beyond the Vape"
          subtitle="KAPOW fits into your life — effortlessly, sustainably, beautifully."
        />
        <div className="mt-16 w-full">
          <FocusGallery images={scenes} />
        </div>
      </div>
    </section>
  );
}

function FocusGallery({ images }: { images: typeof scenes }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleHover = (index: number) => setActiveIndex(index);

  return (
    <div className="relative w-full">
      <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 min-h-[300px] items-stretch">
        {images.map((scene, index) => {
          const isActive = activeIndex === index;
          const isInactive = activeIndex !== null && !isActive;

          return (
            <motion.div
              key={scene.id}
              className="relative rounded-2xl overflow-hidden cursor-pointer bg-forest-800 flex-1 transition-all duration-300 ease-out"
              style={{
                flex: isActive ? '2.5 1 0%' : isInactive ? '0.6 1 0%' : '1 1 0%',
                minWidth: isActive ? '280px' : isInactive ? '80px' : '160px',
                height: isActive ? '420px' : isInactive ? '320px' : '360px',
              }}
              onMouseEnter={() => handleHover(index)}
            >
              <img
                src={scene.image}
                alt={scene.title}
                className="w-full h-full object-cover transition-all duration-700 ease-out"
                style={{
                  transform: isActive ? 'scale(1.05)' : isInactive ? 'scale(0.9)' : 'scale(1)',
                  filter: isInactive ? 'brightness(0.5) saturate(0.6)' : 'brightness(1) saturate(1)',
                }}
                loading="lazy"
              />

              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background: isActive
                    ? 'linear-gradient(to top, rgba(23,45,29,0.8) 0%, rgba(23,45,29,0.1) 50%, transparent 100%)'
                    : isInactive
                    ? 'linear-gradient(to top, rgba(23,45,29,0.6) 0%, transparent 100%)'
                    : 'linear-gradient(to top, rgba(23,45,29,0.4) 0%, transparent 100%)',
                }}
              />

              <div
                className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transition-all duration-500 ease-out"
                style={{
                  opacity: isActive ? 1 : isInactive ? 0 : 0.9,
                  transform: isActive ? 'translateY(0)' : isInactive ? 'translateY(10px)' : 'translateY(0)',
                }}
              >
                <div
                  className="text-xs font-mono font-bold text-white/50 mb-1 tracking-widest transition-all duration-300"
                  style={{ opacity: isActive ? 1 : isInactive ? 0 : 0.6 }}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>

                <h3
                  className="font-bold text-white transition-all duration-300"
                  style={{
                    fontSize: isActive ? '1.5rem' : isInactive ? '0' : '1rem',
                    opacity: isActive ? 1 : isInactive ? 0 : 0.9,
                    maxHeight: isActive ? '80px' : isInactive ? '0' : '40px',
                    overflow: 'hidden',
                  }}
                >
                  {scene.title}
                </h3>

                <p
                  className="text-white/80 leading-relaxed mt-1 transition-all duration-400 delay-75"
                  style={{
                    fontSize: isActive ? '0.95rem' : 0,
                    opacity: isActive ? 1 : 0,
                    maxHeight: isActive ? '80px' : '0',
                    overflow: 'hidden',
                  }}
                >
                  {scene.desc}
                </p>

                <div
                  className="mt-3 h-0.5 bg-moss-400/70 rounded-full transition-all duration-400"
                  style={{
                    width: isActive ? '60px' : isInactive ? '0' : '30px',
                    opacity: isActive ? 1 : isInactive ? 0 : 0.6,
                  }}
                />
              </div>

              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-100 transition-opacity duration-700 pointer-events-none" />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}