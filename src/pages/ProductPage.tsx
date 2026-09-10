// src/pages/ProductPage.tsx

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Leaf, Heart, ShieldCheck, ArrowRight, ChevronDown } from 'lucide-react';
import { ProductRender } from '@/components/ProductRender';
import { SectionHeading, Reveal } from '@/components/SectionHeading';
import { Icon } from '@/components/Icon';
import { flavours, features, specs, type Flavour, type Feature } from '@/data/content';

const categories = ['All', 'Mint & Menthol', 'Fruity', 'Berry', 'Citrus'] as const;

export function ProductPage() {
  return (
    <>
      <MainKvSection />
      <KeyFeaturesSection />
      <FlavourCollectionSection />
      <FeatureDetailSection />
      <SceneGallerySection />
      <PackagingSpecsSection />
    </>
  );
}

// ============================================================
// 第一屏：主 KV 屏 - 全屏视频/图片
// ============================================================
function MainKvSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 视频背景 */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
      >
        <source src="/videos/product-hero.mp4" type="video/mp4" />
        {/* 降级背景 */}
        <div className="absolute inset-0 bg-gradient-to-br from-forest-900 to-moss-700" />
      </video>

      {/* 深色遮罩 */}
      <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-forest-900/30 to-forest-900/50" />

      {/* 内容 */}
      <div className="relative h-full flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl"
        >
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
            <Leaf className="w-4 h-4" />
            Non-Nicotine · Eco-Conscious · 85K Puffs
          </span>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
            KAPOW <span className="text-moss-300">85K</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            85,000 puffs of pure, non-nicotine flavour. Engineered for clean enjoyment,
            designed for the planet.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-moss-500 hover:bg-moss-600 text-white font-semibold py-3.5 px-7 rounded-xl transition-all shadow-lg shadow-black/20"
            >
              <MapPin className="w-4 h-4" />
              Find a Retailer
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-3.5 px-7 rounded-xl border border-white/30 transition-all"
            >
              Explore Features
            </a>
          </div>
        </motion.div>
      </div>

      {/* 滚动指示器 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}

// ============================================================
// 第二屏：Key Features - 不规则图文网格
// ============================================================
function KeyFeaturesSection() {
  // 定义每个卖点的网格尺寸
  const featureLayouts: { col: string; row: string; size: 'large' | 'medium' | 'small' }[] = [
    { col: 'lg:col-span-2 lg:row-span-2', row: '', size: 'large' },   // 卖点1：大卡
    { col: 'lg:col-span-1', row: '', size: 'small' },                  // 卖点2：小卡
    { col: 'lg:col-span-1', row: '', size: 'small' },                  // 卖点3：小卡
    { col: 'lg:col-span-1', row: '', size: 'medium' },                 // 卖点4：中卡
    { col: 'lg:col-span-1', row: '', size: 'medium' },                 // 卖点5：中卡
    { col: 'lg:col-span-2', row: '', size: 'large' },                  // 卖点6：宽卡
  ];

  return (
    <section id="features" className="py-24 bg-cream-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Built Different"
          title="Key Features"
          subtitle="Every detail engineered for a better experience — from 85,000 puffs to worry-free fast charging."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 auto-rows-[200px] lg:auto-rows-[220px]">
          {features.map((feature, i) => {
            const layout = featureLayouts[i] || { col: 'lg:col-span-1', row: '', size: 'small' };
            const isLarge = layout.size === 'large';

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`
                  ${layout.col} relative overflow-hidden rounded-2xl
                  bg-white border border-sage-100 hover:border-moss-300
                  hover:shadow-xl hover:shadow-moss-600/5
                  transition-all duration-300 group
                  p-6 lg:p-7 flex flex-col justify-between
                `}
              >
                {/* 图标 */}
                <div
                  className={`
                    rounded-2xl bg-moss-100 text-moss-600 flex items-center justify-center
                    group-hover:bg-moss-600 group-hover:text-cream-50 transition-colors
                    ${isLarge ? 'w-14 h-14' : 'w-12 h-12'}
                  `}
                >
                  <Icon name={feature.icon} className={isLarge ? 'w-7 h-7' : 'w-6 h-6'} />
                </div>

                {/* 文字 */}
                <div>
                  <h3
                    className={`
                      font-bold text-forest-800 leading-snug mb-2
                      ${isLarge ? 'text-xl lg:text-2xl' : 'text-base lg:text-lg'}
                    `}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`
                      text-forest-500 leading-relaxed
                      ${isLarge ? 'text-sm lg:text-base' : 'text-sm'}
                    `}
                  >
                    {feature.description}
                  </p>
                </div>

                {/* 装饰性角标 */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-moss-100/30 rounded-bl-full rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// 第三屏：口味展示
// ============================================================
function FlavourCollectionSection() {
  const [filter, setFilter] = useState<string>('All');
  const [activeFlavour, setActiveFlavour] = useState(0);
  const current = flavours[activeFlavour];

  const filtered = filter === 'All' ? flavours : flavours.filter((f) => f.category === filter);

  return (
    <section id="flavours" className="scroll-mt-20">
      <div className="pt-20 pb-8 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="12 Flavours, Zero Nicotine"
            title="The KAPOW Flavour Collection"
            subtitle="Every flavour is crafted with clean, non-nicotine ingredients. Pick a flavour to see the device come to life."
          />
        </div>
      </div>

      {/* 筛选栏 */}
      <div className="sticky top-16 z-30 bg-white border-b border-sage-200 py-4">
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

      {/* 当前选中口味的大图展示 */}
      <div className="py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="flex justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                >
                  <ProductRender accent={current.accent} gradient={current.gradient} />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="text-center lg:text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-moss-600 mb-3">
                    {current.category}
                  </span>
                  <h3 className="text-3xl lg:text-4xl font-bold text-forest-800 mb-4">
                    {current.name}
                  </h3>
                  <p className="text-lg text-forest-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    {current.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* 所有口味网格 */}
          <AnimatePresence mode="popLayout">
            <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
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
        </div>
      </div>
    </section>
  );
}

// ============================================================
// 第四屏起：核心卖点详述
// ============================================================
function FeatureDetailSection() {
  // 挑选 3 个核心卖点做详细展示
  const highlightFeatures = features.slice(0, 3);

  return (
    <>
      {highlightFeatures.map((feature, index) => (
        <section
          key={feature.id}
          className={`py-24 ${index % 2 === 0 ? 'bg-cream-50' : 'bg-white'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* 文字 */}
              <Reveal className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-moss-600 mb-4">
                  <span className="w-8 h-px bg-moss-400" />
                  Feature 0{index + 1}
                </span>
                <h2 className="text-display-md font-bold text-forest-800 mb-6 text-balance">
                  {feature.title}
                </h2>
                <p className="text-lg text-forest-500 leading-relaxed">
                  {feature.longDescription}
                </p>
              </Reveal>

              {/* 视觉区块 - 用图标和装饰元素组成 */}
              <Reveal delay={0.15} className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-moss-50 via-cream-100 to-sage-100 overflow-hidden">
                  {/* 装饰圆 */}
                  <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-moss-200/40 blur-3xl" />
                  <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-terracotta-200/30 blur-3xl" />

                  {/* 中心图标 */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="w-32 h-32 rounded-3xl bg-white shadow-2xl shadow-forest-900/10 flex items-center justify-center"
                    >
                      <Icon name={feature.icon} className="w-16 h-16 text-moss-600" />
                    </motion.div>
                  </div>

                  {/* 角落装饰 */}
                  <div className="absolute top-6 left-6 w-12 h-12 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/60" />
                  <div className="absolute bottom-6 right-6 w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm border border-white/50" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

// ============================================================
// 场景照片墙
// ============================================================
function SceneGallerySection() {
  const scenes = [
    {
      id: 1,
      title: 'Morning Ritual',
      desc: 'Start your day with clarity.',
      image: '/images/scene-morning.jpg',
    },
    {
      id: 2,
      title: 'Outdoor Escape',
      desc: 'Take the flavour with you.',
      image: '/images/scene-outdoor.jpg',
    },
    {
      id: 3,
      title: 'Connected Moments',
      desc: 'Shared experiences, better together.',
      image: '/images/scene-connected.jpg',
    },
    {
      id: 4,
      title: 'Pure Simplicity',
      desc: 'Clean ingredients, clear mind.',
      image: '/images/scene-simplicity.jpg',
    },
  ];

  return (
    <section className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Life in Flavour"
          title="Beyond the Vape"
          subtitle="KAPOW fits into your life — effortlessly, sustainably, beautifully."
        />

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {scenes.map((scene, i) => (
            <motion.div
              key={scene.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`
                relative group overflow-hidden rounded-2xl cursor-pointer bg-forest-800
                ${i === 0 || i === 3 ? 'aspect-[3/4]' : 'aspect-[3/4] lg:mt-12'}
              `}
            >
              <img
                src={scene.image}
                alt={scene.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-forest-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
                <h3 className="text-base lg:text-lg font-bold text-white mb-0.5">
                  {scene.title}
                </h3>
                <p className="text-xs lg:text-sm text-white/70">{scene.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// 最后一屏：包装图 + 规格
// ============================================================
function PackagingSpecsSection() {
  return (
    <section id="where-to-buy" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technical Details"
          title="Packaging & Specifications"
          subtitle="Every detail, documented."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* 包装图 */}
          <Reveal>
            <div className="relative rounded-3xl bg-gradient-to-br from-cream-100 via-moss-50 to-sage-100 aspect-square overflow-hidden flex items-center justify-center">
              {/* 装饰 */}
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-moss-200/40 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-terracotta-200/30 blur-3xl" />

              {/* 包装图占位 */}
              <div className="relative z-10 text-center">
                <div className="text-6xl font-bold text-moss-600/30 mb-3">KAPOW</div>
                <div className="text-sm text-forest-500/60">Packaging Image</div>
              </div>

              {/* 品牌角标 */}
              <div className="absolute top-6 left-6 inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-sage-200">
                <Leaf className="w-3.5 h-3.5 text-moss-600" />
                <span className="text-xs font-medium text-forest-700">Eco-Friendly</span>
              </div>
            </div>
          </Reveal>

          {/* 规格表格 */}
          <Reveal delay={0.15}>
            <div>
              <h3 className="text-xl font-bold text-forest-800 mb-6">Specifications</h3>
              <dl className="space-y-0 bg-cream-50 rounded-2xl border border-sage-200 overflow-hidden">
                {specs.map((spec, i) => (
                  <div
                    key={spec.label}
                    className={`flex items-center justify-between px-6 py-4 border-b border-sage-100 last:border-b-0 ${
                      i % 2 === 0 ? 'bg-cream-50' : 'bg-white'
                    }`}
                  >
                    <dt className="text-sm font-medium text-forest-600">{spec.label}</dt>
                    <dd className="text-sm font-semibold text-forest-800 text-right">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* 免责声明 */}
              <div className="mt-6 flex items-start gap-2 text-xs text-forest-400 bg-sage-50 p-4 rounded-xl border border-sage-100">
                <ShieldCheck className="w-4 h-4 mt-0.5 shrink-0 text-moss-500" />
                <span>
                  This product contains no nicotine. Intended for adult use only. Keep out of
                  reach of children.
                </span>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="/contact"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-moss-600 hover:bg-moss-700 text-cream-50 font-semibold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-moss-600/20"
                >
                  <MapPin className="w-4 h-4" />
                  Find a Retailer
                </a>
                <a
                  href="/"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-cream-100 hover:bg-cream-200 text-forest-700 font-semibold py-3.5 px-6 rounded-xl border border-sage-200 transition-colors"
                >
                  Back to Home
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// 口味卡片子组件
// ============================================================
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
      transition={{ duration: 0.3, delay: index * 0.04 }}
      onClick={onSelect}
      className={`group relative text-left rounded-2xl overflow-hidden border transition-all hover:-translate-y-1 ${
        active
          ? 'border-moss-400 shadow-xl shadow-moss-600/10 ring-2 ring-moss-300'
          : 'border-sage-100 hover:shadow-xl hover:shadow-moss-600/10'
      }`}
      aria-pressed={active}
    >
      {/* 视觉区 */}
      <div className="h-32 relative overflow-hidden" style={{ background: flavour.gradient }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Icon name={flavour.icon} className="w-6 h-6 text-white" />
          </div>
        </div>
        {active && (
          <span className="absolute top-2 right-2 w-5 h-5 rounded-full bg-moss-500 text-white flex items-center justify-center text-xs font-bold">
            ✓
          </span>
        )}
      </div>

      {/* 文字区 */}
      <div className="p-3 bg-white">
        <h4 className="font-semibold text-forest-800 text-sm leading-snug truncate">
          {flavour.name}
        </h4>
        <span className="text-xs text-forest-400">{flavour.category}</span>
      </div>
    </motion.button>
  );
}