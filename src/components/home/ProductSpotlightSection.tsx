// src/components/home/ProductSpotlightSection.tsx

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading, Reveal } from '@/components/SectionHeading';
import { Icon } from '@/components/Icon';
import { ProductRender } from '@/components/ProductRender';
import { flavours } from '@/data/content';

export function ProductSpotlightSection() {
  const [active, setActive] = useState(0);
  const current = flavours[active];

  return (
    <section className="py-24 bg-cream-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="12 Flavours. One Device."
          title="Find Your Flavour"
          subtitle="From glacier-fresh menthol to sun-ripened fruit — every flavour is crafted with clean ingredients and zero nicotine."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* 左侧：产品渲染图 */}
          <Reveal className="flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                >
                  <ProductRender
                    accent={current.accent}
                    gradient={current.gradient}
                    className="scale-90 sm:scale-100"
                  />
                </motion.div>
              </AnimatePresence>

              {/* 当前口味名称 + 分类标签 */}
              <motion.div
                key={`label-${current.id}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="mt-4 flex items-center justify-center gap-3 flex-wrap"
              >
                <div
                  className="w-3 h-3 rounded-full shadow-sm ring-1 ring-white/50"
                  style={{ background: current.gradient }}
                />
                <span className="font-medium text-forest-700 text-sm sm:text-base">
                  {current.name}
                </span>
                <span className="text-xs text-forest-400 bg-sage-100 px-2.5 py-0.5 rounded-full">
                  {current.category}
                </span>
              </motion.div>
            </div>
          </Reveal>

          {/* 右侧：口味网格 */}
          <Reveal delay={0.1} className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {flavours.map((flavour, i) => {
                const isActive = active === i;
                return (
                  <FlavourCard
                    key={flavour.id}
                    flavour={flavour}
                    isActive={isActive}
                    onClick={() => setActive(i)}
                  />
                );
              })}
            </div>

            {/* 口味描述 */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`desc-${current.id}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="mt-6 p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-sage-100 shadow-sm"
              >
                <p className="text-sm sm:text-base text-forest-600 leading-relaxed">
                  {current.description}
                </p>
              </motion.div>
            </AnimatePresence>
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
  isActive,
  onClick,
}: {
  flavour: typeof flavours[0];
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
      className={`
        group relative flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl
        text-left transition-all duration-300 cursor-pointer
        ${
          isActive
            ? 'bg-white shadow-lg shadow-forest-900/8 ring-2 ring-moss-400/60 border-transparent'
            : 'bg-white/60 hover:bg-white border border-sage-200/60 hover:border-sage-300 hover:shadow-md'
        }
      `}
      aria-pressed={isActive}
    >
      {/* 口味图标 */}
      <div
        className={`
          w-8 h-8 sm:w-9 sm:h-9 rounded-lg shrink-0 flex items-center justify-center
          transition-all duration-300
          ${isActive ? 'scale-110' : 'group-hover:scale-105'}
        `}
        style={{ background: flavour.gradient }}
      >
        <Icon name={flavour.icon} className="w-4 h-4 text-white/95" />
      </div>

      {/* 口味名称 */}
      <span
        className={`
          text-xs sm:text-sm font-medium leading-tight transition-colors duration-300
          ${isActive ? 'text-forest-800' : 'text-forest-600 group-hover:text-forest-800'}
        `}
      >
        {flavour.name}
      </span>

      {/* 激活指示器 - 右上角对勾 */}
      {isActive && (
        <motion.div
          layoutId="activeIndicator"
          className="absolute -right-0.5 -top-0.5 w-4 h-4 rounded-full bg-moss-500 border-2 border-white flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.2 }}
        >
          <svg
            className="w-2.5 h-2.5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
      )}
    </motion.button>
  );
}