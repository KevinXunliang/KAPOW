import { motion } from 'framer-motion';
import { Leaf, Sparkles, Globe } from 'lucide-react';

export function EcoNarrativeSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-forest-800">
      {/* Botanical background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 15% 50%, #569974 0%, transparent 25%),
            radial-gradient(circle at 85% 30%, #86b99a 0%, transparent 30%),
            radial-gradient(circle at 50% 80%, #357d57 0%, transparent 25%)`,
        }}
      />
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-moss-500/10 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-moss-400/10 blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-moss-500/20 text-moss-300 mb-8"
        >
          <Leaf className="w-8 h-8" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-display-md font-bold text-cream-50 text-balance"
        >
          Clean enjoyment shouldn't cost the earth.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-lg text-cream-100/70 leading-relaxed max-w-2xl mx-auto"
        >
          We believe in flavour without compromise — for your body and for the planet. That's why
          every KAPOW device is nicotine-free, crafted with clean ingredients, and designed with
          sustainability at its core. From responsible packaging to our commitment to reducing
          waste, we're building a cleaner future one puff at a time.
        </motion.p>

        <div className="mt-12 grid sm:grid-cols-3 gap-8">
          {[
            { icon: Sparkles, title: 'Clean Ingredients', desc: 'Non-nicotine formulas you can feel good about.' },
            { icon: Leaf, title: 'Eco-First Design', desc: 'Sustainability built into every decision.' },
            { icon: Globe, title: 'Greener Future', desc: 'Committed to reducing our environmental footprint.' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-10 h-10 rounded-xl bg-moss-500/20 text-moss-300 flex items-center justify-center mx-auto mb-3">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-cream-100 text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-cream-100/50">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
