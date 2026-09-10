// src/components/home/BrandStorySection.tsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Leaf, ArrowRight, Sparkles, Quote } from 'lucide-react';

// ============================================================
// ① 品牌起源故事
// ============================================================
export function BrandStorySection() {
  return (
    <section className="relative py-24 lg:py-32 bg-cream-50 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-moss-100/40 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-terracotta-100/30 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* 左侧文字 - 占 7 列 */}
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white text-moss-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-moss-100 shadow-sm"
            >
              <Leaf className="w-4 h-4" />
              The KAPOW Story
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-display-md font-bold text-forest-800 text-balance mb-8 leading-tight"
            >
              Flavour should be a choice,
              <br />
              <span className="text-moss-600">not a craving.</span>
            </motion.h2>

            <div className="space-y-6 text-base lg:text-lg text-forest-600 leading-relaxed max-w-xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                KAPOW was born from a simple question: why does flavour need nicotine?
                We looked at the vaping industry and saw products defined by addiction and
                compromise. So we made a bold choice — <strong className="text-forest-800">zero nicotine, from day one</strong>.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Not as an afterthought. Not as a variant. As the core of who we are. We
                believe enjoyment and responsibility can coexist, and that a product can
                respect both your body and the planet.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10"
            >
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 bg-forest-800 hover:bg-forest-900 text-cream-50 font-semibold py-3.5 px-7 rounded-xl transition-all shadow-lg shadow-forest-900/20 hover:shadow-xl"
              >
                Read Our Full Story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* 右侧品牌宣言卡 - 占 5 列 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* 卡片外发光 */}
            <div className="absolute inset-0 bg-gradient-to-br from-moss-200/40 to-moss-400/20 rounded-3xl blur-2xl scale-95" />

            {/* 主卡 */}
            <div className="relative bg-forest-800 rounded-3xl p-8 lg:p-10 overflow-hidden">
              {/* 内部装饰网格 */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle at 20% 30%, #569974 0%, transparent 30%),
                                    radial-gradient(circle at 80% 70%, #86b99a 0%, transparent 35%)`,
                }}
              />

              {/* 大引号装饰 */}
              <Quote className="absolute top-6 right-6 w-16 h-16 text-moss-400/15" strokeWidth={1} />

              <div className="relative">
                {/* 品牌标识 */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-moss-600 text-cream-50 font-bold flex items-center justify-center text-lg shadow-lg">
                    K
                  </div>
                  <div>
                    <div className="font-bold text-cream-50">KAPOW</div>
                    <div className="text-xs text-cream-100/60">Pure Flavour. Zero Nicotine.</div>
                  </div>
                </div>

                {/* 宣言 */}
                <p className="text-lg lg:text-xl font-medium text-cream-50 leading-relaxed text-balance">
                  We exist for people who choose cleaner living — who want to enjoy flavour
                  on their own terms, without nicotine, without guilt, and without
                  compromising the planet.
                </p>

                {/* 底部装饰线 */}
                <div className="mt-8 flex items-center gap-3">
                  <div className="w-8 h-0.5 bg-moss-400 rounded-full" />
                  <span className="text-xs font-medium text-moss-300 tracking-wider uppercase">
                    Our Mission
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// ② 数据统计条
// ============================================================
const stats = [
  { value: '85K', label: 'Puffs per device', sublabel: 'Maximum longevity' },
  { value: '12', label: 'Signature flavours', sublabel: 'Curated variety' },
  { value: '0', label: 'Nicotine, always', sublabel: 'Clean enjoyment' },
  { value: '100%', label: 'Eco-conscious', sublabel: 'From design to delivery' },
];

export function StatsStrip() {
  return (
    <section className="relative py-20 lg:py-24 bg-gradient-to-br from-forest-900 via-forest-800 to-moss-700 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-moss-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-moss-400/10 blur-3xl" />

      {/* 网格纹理 */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative text-center lg:text-left"
            >
              {/* 分隔线（桌面端） */}
              {i > 0 && (
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-cream-100/10" />
              )}

              {/* 数字 */}
              <div className="text-4xl lg:text-5xl xl:text-6xl font-bold text-cream-50 tracking-tight mb-2">
                {stat.value}
              </div>

              {/* 标签 */}
              <div className="text-sm font-semibold text-moss-300 mb-1">
                {stat.label}
              </div>

              {/* 副标签 */}
              <div className="text-xs text-cream-100/50">
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// ③ 品牌支柱（Bento Grid）
// ============================================================
const pillars = [
  {
    id: 1,
    icon: Sparkles,
    title: 'Clean Ingredients',
    desc: 'Non-nicotine formulas made with carefully sourced, high-quality ingredients you can trust.',
    size: 'large',
  },
  {
    id: 2,
    icon: Leaf,
    title: 'Sustainable Thinking',
    desc: 'Every decision — from design to packaging — is made with the planet in mind.',
    size: 'small',
  },
  {
    id: 3,
    icon: Sparkles,
    title: 'Flavour First',
    desc: 'We never compromise on taste. Pure, bold flavour is at the heart of everything we do.',
    size: 'small',
  },
  {
    id: 4,
    icon: Leaf,
    title: 'Community',
    desc: 'We exist for people choosing cleaner living — and we listen, learn, and grow with them.',
    size: 'wide',
  },
];

export function BrandPillarsSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题 */}
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-moss-600 mb-3"
          >
            What We Stand For
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-display-md font-bold text-forest-800 text-balance mb-4"
          >
            Our Brand Pillars
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-forest-500 leading-relaxed"
          >
            Four values that guide every decision we make — from formulation to packaging.
          </motion.p>
        </div>

        {/* Bento Grid - 桌面端 3 列布局 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {/* Pillar 1 - 大卡，跨 2 行 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-1 lg:row-span-2 bg-gradient-to-br from-moss-600 to-forest-800 rounded-3xl p-7 lg:p-8 flex flex-col justify-between text-cream-50 min-h-[300px] lg:min-h-0 hover:shadow-2xl hover:shadow-forest-900/20 transition-all duration-500 group overflow-hidden relative"
          >
            {/* 装饰圆 */}
            <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-moss-400/20 blur-3xl" />

            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-cream-50/15 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Sparkles className="w-7 h-7 text-moss-200" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-3 leading-snug">
                {pillars[0].title}
              </h3>
              <p className="text-cream-100/75 leading-relaxed text-sm lg:text-base">
                {pillars[0].desc}
              </p>
            </div>

            <div className="relative mt-8 flex items-center gap-2 text-moss-300 text-sm font-medium">
              <span>Our foundation</span>
              <div className="flex-1 h-px bg-moss-400/30" />
            </div>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-3xl p-7 border border-sage-100 hover:border-moss-300 hover:shadow-xl hover:shadow-moss-600/5 transition-all duration-500 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-moss-100 text-moss-600 flex items-center justify-center mb-5 group-hover:bg-moss-600 group-hover:text-cream-50 transition-colors duration-300">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-forest-800 mb-2">
              {pillars[1].title}
            </h3>
            <p className="text-sm text-forest-500 leading-relaxed">
              {pillars[1].desc}
            </p>
          </motion.div>

          {/* Pillar 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-3xl p-7 border border-sage-100 hover:border-moss-300 hover:shadow-xl hover:shadow-moss-600/5 transition-all duration-500 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-moss-100 text-moss-600 flex items-center justify-center mb-5 group-hover:bg-moss-600 group-hover:text-cream-50 transition-colors duration-300">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-forest-800 mb-2">
              {pillars[2].title}
            </h3>
            <p className="text-sm text-forest-500 leading-relaxed">
              {pillars[2].desc}
            </p>
          </motion.div>

          {/* Pillar 4 - 宽卡，跨 2 列 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="sm:col-span-2 lg:col-span-2 bg-white rounded-3xl p-7 border border-sage-100 hover:border-moss-300 hover:shadow-xl hover:shadow-moss-600/5 transition-all duration-500 group"
          >
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-2xl bg-moss-100 text-moss-600 flex items-center justify-center shrink-0 group-hover:bg-moss-600 group-hover:text-cream-50 transition-colors duration-300">
                <Leaf className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-forest-800 mb-2">
                  {pillars[3].title}
                </h3>
                <p className="text-sm text-forest-500 leading-relaxed">
                  {pillars[3].desc}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}