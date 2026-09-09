import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Leaf, Heart, ShieldCheck } from 'lucide-react';
import { ProductRender } from '@/components/ProductRender';
import { SectionHeading, Reveal } from '@/components/SectionHeading';
import { Icon } from '@/components/Icon';
import { flavours, features, specs, type Flavour } from '@/data/content';

const categories = ['All', 'Mint & Menthol', 'Fruity', 'Berry', 'Citrus'] as const;

export function ProductPage() {
  const [filter, setFilter] = useState<string>('All');
  const [activeFlavour, setActiveFlavour] = useState(0);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const current = flavours[activeFlavour];

  const filtered = filter === 'All' ? flavours : flavours.filter((f) => f.category === filter);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden gradient-mesh bg-cream-50">
        <div className="absolute top-1/4 -right-20 w-72 h-72 rounded-full bg-moss-200/30 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 bg-moss-100 text-moss-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Leaf className="w-4 h-4" />
                Non-Nicotine · Eco-Conscious
              </span>
              <h1 className="text-display-lg font-bold text-forest-800 text-balance">
                KAPOW <span className="text-moss-600">85K</span>
              </h1>
              <p className="mt-4 text-xl text-forest-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
                85,000 puffs of pure, non-nicotine flavour. Engineered for clean enjoyment,
                designed for the planet.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#where-to-buy"
                  className="inline-flex items-center justify-center gap-2 bg-moss-600 hover:bg-moss-700 text-cream-50 font-semibold py-3.5 px-7 rounded-xl transition-all shadow-lg shadow-moss-600/20"
                >
                  <MapPin className="w-4 h-4" />
                  Find a Retailer
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 bg-cream-100 hover:bg-cream-200 text-forest-700 font-semibold py-3.5 px-7 rounded-xl border border-sage-200 transition-colors"
                >
                  View Features
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductRender accent={current.accent} gradient={current.gradient} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Flavour collection */}
      <section id="flavours" className="scroll-mt-20">
        {/* Heading */}
        <div className="pt-20 pb-8 bg-cream-100 gradient-mesh">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionHeading
              eyebrow="12 Flavours, Zero Nicotine"
              title="The KAPOW Flavour Collection"
              subtitle="Every flavour is crafted with clean, non-nicotine ingredients. Pick a flavour to see the device come to life — explore by category and discover your next favourite."
            />
          </div>
        </div>

        {/* Filter bar */}
        <div className="sticky top-16 z-30 bg-cream-50/90 backdrop-blur-lg border-b border-sage-200/50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === cat
                      ? 'bg-moss-600 text-cream-50 shadow-md shadow-moss-600/20'
                      : 'bg-sage-100 text-forest-600 hover:bg-sage-200'
                  }`}
                  aria-pressed={filter === cat}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="py-16 bg-cream-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="popLayout">
              <motion.div
                layout
                className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filtered.map((flavour, i) => {
                  const globalIndex = flavours.indexOf(flavour);
                  return (
                    <FlavourCard
                      key={flavour.id}
                      flavour={flavour}
                      index={i}
                      active={activeFlavour === globalIndex}
                      onSelect={() => setActiveFlavour(globalIndex)}
                    />
                  );
                })}
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={current.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-10 text-center text-forest-500 leading-relaxed max-w-xl mx-auto p-4 rounded-xl bg-sage-50 border border-sage-100"
              >
                {current.description}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Features breakdown */}
      <section id="features" className="py-24 bg-cream-50 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Full Feature Breakdown"
            title="Every Detail, Explained"
            subtitle="Explore the technology and design philosophy behind each feature of the KAPOW 85K."
          />

          <div className="mt-12 space-y-4">
            {features.map((feature, i) => (
              <Reveal key={feature.id} delay={i * 0.05}>
                <button
                  onClick={() => setActiveFeature(activeFeature === feature.id ? null : feature.id)}
                  className="w-full text-left bg-white rounded-2xl border border-sage-200 overflow-hidden hover:border-moss-300 transition-colors"
                >
                  <div className="flex items-center gap-5 p-6">
                    <div className="w-12 h-12 rounded-2xl bg-moss-100 text-moss-600 flex items-center justify-center shrink-0">
                      <Icon name={feature.icon} className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-forest-800">{feature.title}</h3>
                      <p className="text-sm text-forest-500 mt-1">{feature.description}</p>
                    </div>
                    <span
                      className={`text-moss-500 transition-transform shrink-0 ${
                        activeFeature === feature.id ? 'rotate-45' : ''
                      }`}
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </div>
                  <AnimatePresence>
                    {activeFeature === feature.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 pl-23 text-forest-500 leading-relaxed">
                          {feature.longDescription}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Eco story sidebar */}
      <section className="py-24 bg-forest-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Reveal>
              <div className="inline-flex items-center gap-2 text-moss-300 text-sm font-semibold mb-4">
                <Leaf className="w-4 h-4" />
                Why Non-Nicotine?
              </div>
              <h2 className="text-display-md font-bold text-cream-50 mb-4 text-balance">
                Flavour without the habit.
              </h2>
              <p className="text-cream-100/70 leading-relaxed">
                KAPOW was born from a simple idea: you deserve pure, satisfying flavour without the
                dependence of nicotine. Whether you're exploring clean living, stepping away from
                nicotine, or simply enjoy the ritual of flavour — KAPOW gives you the experience
                without the compromise. No nicotine, no guilt, just clean enjoyment you can feel
                good about.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="inline-flex items-center gap-2 text-moss-300 text-sm font-semibold mb-4">
                <Heart className="w-4 h-4" />
                Our Commitment to the Planet
              </div>
              <h2 className="text-display-md font-bold text-cream-50 mb-4 text-balance">
                Sustainability isn't optional.
              </h2>
              <p className="text-cream-100/70 leading-relaxed">
                From responsibly sourced materials to recyclable packaging, every decision we make
                considers its environmental impact. The KAPOW 85K's extended 85,000-puff lifespan
                means fewer devices and less waste. We're continuously investing in greener
                manufacturing and exploring take-back programs to close the loop on disposal.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Specs table */}
      <section className="py-24 bg-cream-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Technical Specs" title="Full Specifications" />
          <Reveal className="mt-12">
            <dl className="bg-white rounded-2xl border border-sage-200 overflow-hidden">
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
          </Reveal>
        </div>
      </section>

      {/* Where to buy CTA */}
      <section id="where-to-buy" className="py-24 bg-cream-50 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="Ready to Experience KAPOW?"
            title="Find a Retailer Near You"
            subtitle="KAPOW 85K is available through select eco-conscious retailers. Coming to more locations soon."
          />
          <Reveal delay={0.1}>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center justify-center gap-2 bg-moss-600 hover:bg-moss-700 text-cream-50 font-semibold py-3.5 px-8 rounded-xl transition-all shadow-lg shadow-moss-600/20"
            >
              <MapPin className="w-4 h-4" />
              Where to Buy
            </a>
          </Reveal>
          <div className="mt-8 inline-flex items-start gap-2 text-xs text-forest-400 max-w-md text-left bg-sage-50 p-4 rounded-xl border border-sage-100">
            <ShieldCheck className="w-4 h-4 mt-0.5 shrink-0 text-moss-500" />
            <span>
              This product contains no nicotine. Intended for adult use only. Keep out of reach of
              children.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

function FlavourCard({
  flavour,
  index,
  active,
  onSelect,
}: {
  flavour: Flavour;
  index: number;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <motion.button
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      onClick={onSelect}
      className={`group relative text-left rounded-3xl overflow-hidden border transition-all hover:-translate-y-1 ${
        active
          ? 'border-moss-400 shadow-xl shadow-moss-600/10 ring-2 ring-moss-300'
          : 'border-sage-100 hover:shadow-2xl hover:shadow-moss-600/10'
      }`}
      aria-pressed={active}
    >
      {/* Visual */}
      <div
        className="h-44 relative overflow-hidden"
        style={{ background: flavour.gradient }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Icon name={flavour.icon} className="w-8 h-8 text-white" />
          </div>
        </motion.div>
        <span className="absolute top-3 left-3 text-xs font-semibold text-white bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full">
          {flavour.category}
        </span>
        {active && (
          <span className="absolute top-3 right-3 w-6 h-6 rounded-full bg-moss-500 text-white flex items-center justify-center text-xs font-bold">
            ✓
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 bg-white">
        <div className="flex items-center gap-2 mb-2">
          <div
            className="w-4 h-4 rounded-full border border-white shadow-sm"
            style={{ background: flavour.gradient }}
          />
          <h3 className="font-bold text-forest-800 text-base leading-snug">{flavour.name}</h3>
        </div>
        <p className="text-sm text-forest-500 leading-relaxed">{flavour.description}</p>
      </div>
    </motion.button>
  );
}
