import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Recycle, Leaf, Heart, ArrowRight } from 'lucide-react';
import { SectionHeading, Reveal } from '@/components/SectionHeading';

const pillars = [
  {
    icon: Sparkles,
    title: 'Clean Ingredients',
    desc: 'Non-nicotine formulas made with carefully sourced, high-quality ingredients you can trust.',
  },
  {
    icon: Recycle,
    title: 'Sustainable Thinking',
    desc: 'Every decision — from design to packaging — is made with the planet in mind.',
  },
  {
    icon: Leaf,
    title: 'Flavour First',
    desc: 'We never compromise on taste. Pure, bold flavour is at the heart of everything we do.',
  },
  {
    icon: Heart,
    title: 'Community',
    desc: 'We exist for people choosing cleaner living — and we listen, learn, and grow with them.',
  },
];

const stats = [
  { value: '85K', label: 'Puffs per device' },
  { value: '12', label: 'Signature flavours' },
  { value: '0', label: 'Nicotine, always' },
  { value: '100%', label: 'Eco-conscious design' },
];

export function BrandStorySection() {
  return (
    <>
      {/* Brand origin story */}
      <section className="relative py-32 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-moss-100/40 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-terracotta-100/30 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-moss-100 text-moss-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <Leaf className="w-4 h-4" />
                The KAPOW Story
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-display-md font-bold text-forest-800 text-balance mb-6"
              >
                Flavour should be a choice,
                <br />
                <span className="text-moss-600">not a craving.</span>
              </motion.h2>

              <div className="space-y-5 text-forest-600 leading-relaxed text-lg">
                <Reveal>
                  <p>
                    KAPOW was born from a simple question: why does flavour need nicotine? We looked
                    at the vaping industry and saw products defined by addiction and compromise. So
                    we made a bold choice — zero nicotine, from day one.
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <p>
                    Not as an afterthought. Not as a variant. As the core of who we are. We believe
                    enjoyment and responsibility can coexist, and that a product can respect both
                    your body and the planet.
                  </p>
                </Reveal>
              </div>

              <Reveal delay={0.2}>
                <Link
                  to="/about"
                  className="group mt-8 inline-flex items-center gap-2 bg-moss-600 hover:bg-moss-700 text-cream-50 font-semibold py-3.5 px-7 rounded-xl transition-all shadow-lg shadow-moss-600/20 hover:shadow-xl hover:shadow-moss-600/30"
                >
                  Read Our Full Story
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Reveal>
            </div>

            {/* Visual — brand quote card */}
            <Reveal delay={0.15}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-moss-200/40 to-moss-400/20 rounded-3xl blur-2xl" />
                <div className="relative bg-forest-800 rounded-3xl p-10 lg:p-12 overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `radial-gradient(circle at 20% 30%, #569974 0%, transparent 30%),
                        radial-gradient(circle at 80% 70%, #86b99a 0%, transparent 35%)`,
                    }}
                  />
                  <div className="relative">
                    <div className="text-6xl font-bold text-moss-400/30 leading-none mb-4">"</div>
                    <p className="text-xl lg:text-2xl font-medium text-cream-50 leading-relaxed text-balance">
                      We exist for people who choose cleaner living — who want to enjoy flavour on
                      their own terms, without nicotine, without guilt, and without compromising the
                      planet.
                    </p>
                    <div className="mt-8 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-moss-600 text-cream-50 font-bold flex items-center justify-center text-lg">
                        K
                      </div>
                      <div>
                        <div className="font-bold text-cream-50">KAPOW</div>
                        <div className="text-sm text-cream-100/50">Pure Flavour. Zero Nicotine.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Brand stats strip */}
      <section className="py-16 bg-moss-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-cream-50 tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-moss-100/80 font-medium tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand pillars */}
      <section className="py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Stand For"
            title="Our Brand Pillars"
            subtitle="Four values that guide every decision we make — from formulation to packaging."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.1}>
                <div className="group bg-white rounded-2xl p-7 border border-sage-100 hover:border-moss-300 hover:shadow-xl hover:shadow-moss-600/5 transition-all text-center h-full">
                  <div className="w-14 h-14 rounded-2xl bg-moss-100 text-moss-600 flex items-center justify-center mx-auto mb-5 group-hover:bg-moss-600 group-hover:text-cream-50 transition-colors">
                    <pillar.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-lg text-forest-800 mb-2">{pillar.title}</h3>
                  <p className="text-sm text-forest-500 leading-relaxed">{pillar.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
