// src/pages/AboutPage.tsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Layers,
  Zap,
  Users,
  ArrowRight,
  Quote,
} from 'lucide-react';
import { SectionHeading, Reveal } from '@/components/SectionHeading';

export function AboutPage() {
  return (
    <>
      {/* ============================================================
          Hero - 品牌介绍
          ============================================================ */}
      <section className="relative pt-32 pb-20 overflow-hidden gradient-mesh bg-cream-100">
        <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-moss-200/30 blur-3xl" />
        <div className="absolute bottom-0 -right-20 w-96 h-96 rounded-full bg-terracotta-200/20 blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-moss-100 text-moss-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            About KAPOW
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-display-lg font-bold text-forest-800 text-balance"
          >
            A brand built for
            <br />
            <span className="text-moss-600">people who notice the difference.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-forest-500 leading-relaxed max-w-2xl mx-auto"
          >
            KAPOW is a premium vape brand focused on one thing: delivering a
            consistently superior experience. Better flavour, better design,
            better performance — in every device we make.
          </motion.p>
        </div>
      </section>

      {/* ============================================================
          品牌故事
          ============================================================ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-moss-600 mb-4">
              Our Story
            </span>
            <h2 className="text-display-md font-bold text-forest-800 mb-8 text-balance">
              We started with a simple frustration.
            </h2>

            <div className="space-y-5 text-forest-600 leading-relaxed text-lg">
              <p>
                Walk into any vape shop and you&apos;ll see the same thing: dozens of
                devices that look identical, promise the same things, and quietly
                disappoint after a few days. Flavour fades. Batteries die. The
                experience you paid for slowly disappears.
              </p>
              <p>
                We thought that was a strange way to treat people. So we built
                something different. The KAPOW 85K — a device engineered around
                three principles:{' '}
                <strong className="text-forest-800">
                  consistent flavour, lasting performance, and design you can feel.
                </strong>
              </p>
              <p>
                Everything else came second. Every decision, from coil geometry
                to shell finish, was made with one question in mind: does this
                make the experience better? If the answer was no, we dropped it.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          品牌宣言卡（深色）
          ============================================================ */}
      <section className="py-24 bg-forest-800 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-moss-500/10 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-moss-400/10 blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <Quote
              className="w-12 h-12 text-moss-400/40 mx-auto mb-6"
              strokeWidth={1.5}
            />
            <p className="text-2xl sm:text-3xl font-medium text-cream-50 leading-relaxed text-balance">
              We&apos;re not trying to be everything to everyone. We&apos;re building
              for people who care about the details — because those details make
              all the difference.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-moss-600 text-cream-50 font-bold flex items-center justify-center">
                K
              </div>
              <div className="text-left">
                <div className="font-bold text-cream-50">KAPOW</div>
                <div className="text-xs text-cream-100/50">
                  Premium Vape · Crafted for Flavour
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          品牌数据
          ============================================================ */}
      <section className="py-16 bg-moss-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '85K', label: 'Puffs per device' },
              { value: '12', label: 'Signature flavours' },
              { value: '3', label: 'Smart power modes' },
              { value: '950', label: 'mAh fast-charge battery' },
            ].map((stat, i) => (
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

      {/* ============================================================
          品牌支柱
          ============================================================ */}
      <section className="py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Stand For"
            title="The KAPOW Principles"
            subtitle="Four values that guide everything we build — from coil design to packaging."
          />

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Sparkles,
                title: 'Crafted Quality',
                desc: 'Every device is built to premium standards — from materials to finish.',
              },
              {
                icon: Layers,
                title: 'Precision Engineering',
                desc: 'Dual mesh coils and smart control deliver consistent performance.',
              },
              {
                icon: Zap,
                title: 'Flavour First',
                desc: 'We never compromise on taste. Pure, bold flavour in every puff.',
              },
              {
                icon: Users,
                title: 'Community',
                desc: 'We listen, learn, and grow with the people who use KAPOW every day.',
              },
            ].map((value, i) => (
              <Reveal key={value.title} delay={i * 0.1}>
                <div className="group bg-white rounded-2xl p-7 border border-sage-100 hover:border-moss-300 hover:shadow-xl hover:shadow-moss-600/5 transition-all text-center h-full">
                  <div className="w-14 h-14 rounded-2xl bg-moss-100 text-moss-600 flex items-center justify-center mx-auto mb-5 group-hover:bg-moss-600 group-hover:text-cream-50 transition-colors">
                    <value.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-lg text-forest-800 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-forest-500 leading-relaxed">{value.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          品牌承诺
          ============================================================ */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Commitment"
            title="What You Can Expect From Us"
            subtitle="Three commitments we make to every person who picks up a KAPOW."
          />

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Consistent Flavour',
                desc: 'From your first puff to your 85,000th, the taste you love stays the same. No drop-off, no surprises.',
              },
              {
                title: 'Lasting Performance',
                desc: 'A 950mAh battery, fast Type-C charging, and smart power modes engineered to keep up with your day.',
              },
              {
                title: 'Designed to Be Noticed',
                desc: 'The Ice Crack shell finish, precision controls, and clear tank are part of the experience — not an afterthought.',
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="bg-cream-50 rounded-2xl p-7 border border-sage-100 h-full">
                  <div className="w-10 h-10 rounded-xl bg-moss-100 text-moss-600 flex items-center justify-center mb-4">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-forest-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-forest-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          底部 CTA
          ============================================================ */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-display-md font-bold text-forest-800 mb-4">
              Explore KAPOW
            </h2>
            <p className="text-forest-500 mb-8 max-w-xl mx-auto">
              See the device, browse all twelve flavours, and discover what
              premium vaping feels like.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/product/kapow-85k"
                className="group inline-flex items-center justify-center gap-2 bg-moss-600 hover:bg-moss-700 text-cream-50 font-semibold py-3.5 px-8 rounded-xl transition-all shadow-lg shadow-moss-600/20"
              >
                View KAPOW 85K
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-cream-50 text-forest-700 font-semibold py-3.5 px-8 rounded-xl border border-sage-200 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}