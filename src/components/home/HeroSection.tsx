// src/components/home/HeroSection.tsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Battery } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-mesh bg-cream-50 pt-20">
      <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-moss-200/30 blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-terracotta-200/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-5xl"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-forest-900/20">
              <video
                className="w-full h-auto aspect-video"
                controls
                autoPlay
                muted
                loop
                playsInline
                poster="/images/poster.jpg"
              >
                <source src="/videos/hero.mp4" type="video/mp4" />
                <div className="w-full aspect-video bg-gradient-to-br from-forest-800 to-moss-600 flex items-center justify-center text-white/50">
                  Your browser does not support video playback
                </div>
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function MissionStrip() {
  const items = [
    {
      icon: Sparkles,
      title: 'Premium Quality',
      desc: 'Crafted with precision for a consistently superior experience.',
    },
    {
      icon: Zap,
      title: 'Smart Control',
      desc: 'ECO, BOOST, and TURBO modes at your fingertips.',
    },
    {
      icon: Battery,
      title: 'Long-Lasting',
      desc: '85,000 puffs and fast Type-C charging in a single device.',
    },
  ];

  return (
    <section className="bg-forest-800 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-moss-600/30 text-moss-300 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-cream-100 mb-1">{item.title}</h3>
              <p className="text-sm text-cream-100/60 max-w-xs">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}