import { motion } from 'framer-motion';
import { Leaf, Sparkles, Recycle, Heart, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading, Reveal } from '@/components/SectionHeading';

export function AboutPage() {
  const values = [
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

  return (
    <>
      {/* Hero */}
      <section className="relative pt-44 pb-20 overflow-hidden gradient-mesh bg-cream-100">
        <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-moss-200/30 blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-moss-100 text-moss-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Leaf className="w-4 h-4" />
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-display-lg font-bold text-forest-800 text-balance"
          >
            We started with a question:
            <br />
            <span className="text-moss-600">why does flavour need nicotine?</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-forest-500 leading-relaxed"
          >
            KAPOW was born from the belief that enjoyment and responsibility can coexist — that
            you can have bold, satisfying flavour without nicotine, and that a product can respect
            both your body and the planet.
          </motion.p>
        </div>
      </section>

      {/* Origin story */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-display-md font-bold text-forest-800 mb-6 text-balance">
              The decision to go non-nicotine.
            </h2>
            <div className="space-y-5 text-forest-600 leading-relaxed text-lg">
              <p>
                When we set out to build KAPOW, we looked at the vaping industry and saw something
                missing. Products were defined by nicotine — by addiction, by dependence, by
                compromise. We saw an opportunity to redefine what a vape could be.
              </p>
              <p>
                So we made a bold choice: zero nicotine, from day one. Not as an afterthought, not
                as a variant — as the core of who we are. We believe flavour should be a choice, not
                a craving. Enjoyment should be free of strings attached.
              </p>
              <p>
                But going non-nicotine wasn't enough. We wanted every aspect of KAPOW to reflect our
                values. That meant eco-conscious design, sustainable packaging, clean ingredients,
                and a commitment to continuously reducing our environmental footprint. The result is
                KAPOW 85K — a device that delivers 85,000 puffs of pure flavour while respecting
                the world it's enjoyed in.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission statement */}
      <section className="py-24 bg-forest-800 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-moss-500/10 blur-3xl" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <Globe className="w-12 h-12 text-moss-400 mx-auto mb-6" />
            <h2 className="text-display-md font-bold text-cream-50 mb-6 text-balance">
              Clean enjoyment. Responsible choices. Flavour without compromise.
            </h2>
            <p className="text-cream-100/70 text-lg leading-relaxed">
              Our mission is simple: to create the best-tasting, most sustainable non-nicotine vape
              in the world. We exist for people who choose cleaner living — who want to enjoy
              flavour on their own terms, without nicotine, without guilt, and without compromising
              the planet.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Stand For"
            title="Our Brand Pillars"
            subtitle="Four values that guide every decision we make."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.1}>
                <div className="group bg-white rounded-2xl p-7 border border-sage-100 hover:border-moss-300 hover:shadow-xl hover:shadow-moss-600/5 transition-all text-center h-full">
                  <div className="w-14 h-14 rounded-2xl bg-moss-100 text-moss-600 flex items-center justify-center mx-auto mb-5 group-hover:bg-moss-600 group-hover:text-cream-50 transition-colors">
                    <value.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-lg text-forest-800 mb-2">{value.title}</h3>
                  <p className="text-sm text-forest-500 leading-relaxed">{value.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental commitment */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Environmental Commitment"
            title="Our Pledge to the Planet"
            subtitle="Sustainability isn't a marketing claim — it's a continuous commitment."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Responsible Packaging',
                desc: 'We use recyclable and minimal packaging materials, reducing waste at every stage of the product lifecycle.',
              },
              {
                title: 'Responsible Disposal',
                desc: 'We\'re developing take-back programs to ensure devices are properly recycled — not tossed into landfill.',
              },
              {
                title: 'Future Goals',
                desc: 'We\'re investing in biodegradable materials, carbon-neutral manufacturing, and closed-loop recycling by 2027.',
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="bg-cream-50 rounded-2xl p-7 border border-sage-100 h-full">
                  <div className="w-10 h-10 rounded-xl bg-moss-100 text-moss-600 flex items-center justify-center mb-4">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-forest-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-forest-500 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-display-md font-bold text-forest-800 mb-4">
              Ready to experience KAPOW?
            </h2>
            <Link
              to="/product/kapow-85k"
              className="group mt-4 inline-flex items-center gap-2 bg-moss-600 hover:bg-moss-700 text-cream-50 font-semibold py-3.5 px-8 rounded-xl transition-all shadow-lg shadow-moss-600/20"
            >
              Explore KAPOW 85K
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
