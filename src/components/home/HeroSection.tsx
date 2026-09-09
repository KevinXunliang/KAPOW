// src/components/home/HeroSection.tsx

import { motion } from 'framer-motion';
import { Wind, Recycle, Leaf } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden gradient-mesh bg-cream-50">
      {/* 装饰性模糊圆形 */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-moss-200/30 blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-terracotta-200/20 blur-3xl" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          {/* 视频播放器 */}
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
                  您的浏览器不支持视频播放
                </div>
              </video>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SCROLL 指示器 - 已删除 */}
    </section>
  );
}

// MissionStrip 保持不变
export function MissionStrip() {
  const items = [
    {
      icon: Wind,
      title: 'Non-Nicotine',
      desc: 'Zero nicotine, zero guilt — just pure, clean flavour.',
    },
    {
      icon: Recycle,
      title: 'Eco-Conscious',
      desc: 'Sustainable thinking built into every device.',
    },
    {
      icon: Leaf,
      title: 'Long-Lasting',
      desc: '85,000 puffs of enjoyment in a single device.',
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