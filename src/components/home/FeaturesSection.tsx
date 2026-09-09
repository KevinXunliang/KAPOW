import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/SectionHeading';
import { Icon } from '@/components/Icon';
import { features } from '@/data/content';

export function FeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Built Different"
          title="Engineered for Excellence"
          subtitle="Every detail of the KAPOW 85K is designed with your experience and the planet in mind."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group relative bg-cream-50 rounded-2xl p-7 border border-sage-100 hover:border-moss-300 hover:shadow-xl hover:shadow-moss-600/5 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-moss-100 text-moss-600 flex items-center justify-center mb-5 group-hover:bg-moss-600 group-hover:text-cream-50 transition-colors">
                <Icon name={feature.icon} className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-forest-800 mb-2 leading-snug">
                {feature.title}
              </h3>
              <p className="text-sm text-forest-500 leading-relaxed">{feature.description}</p>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-moss-100/30 rounded-bl-full rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
