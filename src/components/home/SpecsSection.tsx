import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/SectionHeading';
import { specs } from '@/data/content';

export function SpecsSection() {
  return (
    <section className="py-24 bg-cream-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Details"
          title="Specifications"
          subtitle="Everything you need to know about the KAPOW 85K."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 bg-white rounded-2xl border border-sage-200 overflow-hidden"
        >
          <dl className="divide-y divide-sage-100">
            {specs.map((spec, i) => (
              <div
                key={spec.label}
                className={`flex items-center justify-between px-6 py-4 ${
                  i % 2 === 0 ? 'bg-cream-50/50' : 'bg-white'
                }`}
              >
                <dt className="text-sm font-medium text-forest-600">{spec.label}</dt>
                <dd className="text-sm font-semibold text-forest-800 text-right">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
