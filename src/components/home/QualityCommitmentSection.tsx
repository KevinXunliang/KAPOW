// src/components/home/QualityCommitmentSection.tsx

import { motion } from 'framer-motion';
import { Sparkles, Layers, Zap } from 'lucide-react';

const commitments = [
  {
    icon: Sparkles,
    title: 'Crafted Quality',
    desc: 'Premium materials and finish on every device.',
  },
  {
    icon: Layers,
    title: 'Engineering Precision',
    desc: 'Dual mesh technology for consistent performance.',
  },
  {
    icon: Zap,
    title: 'Built to Last',
    desc: '85,000 puffs of reliable, full-bodied flavour.',
  },
];

export function QualityCommitmentSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-forest-900 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(circle at 15% 50%, #569974 0%, transparent 25%),
                            radial-gradient(circle at 85% 30%, #86b99a 0%, transparent 30%),
                            radial-gradient(circle at 50% 80%, #357d57 0%, transparent 25%)`,
        }}
      />
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-moss-500/10 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-moss-400/10 blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-moss-500/20 backdrop-blur-sm text-moss-300 border border-moss-400/20">
            <Sparkles className="w-8 h-8" />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-display-md font-bold text-cream-50 text-balance text-center mb-6"
        >
          Premium doesn&apos;t have to be
          <br />
          complicated.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-cream-100/70 leading-relaxed text-center max-w-2xl mx-auto mb-16"
        >
          We obsess over the details so you don&apos;t have to. From coil engineering to
          shell finish, every element of KAPOW is designed for one thing — a
          consistently great experience.
        </motion.p>

        <div className="grid sm:grid-cols-3 gap-4 lg:gap-6">
          {commitments.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="group relative bg-forest-800/60 backdrop-blur-sm border border-moss-500/20 hover:border-moss-400/40 rounded-2xl p-6 transition-all duration-500 hover:bg-forest-800"
            >
              <div className="w-11 h-11 rounded-xl bg-moss-500/20 text-moss-300 flex items-center justify-center mb-4 group-hover:bg-moss-500/30 group-hover:scale-110 transition-all duration-300">
                <item.icon className="w-5 h-5" />
              </div>

              <h3 className="font-bold text-cream-50 mb-2 text-base">
                {item.title}
              </h3>

              <p className="text-sm text-cream-100/60 leading-relaxed">
                {item.desc}
              </p>

              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-moss-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}