// src/components/home/FeaturesSection.tsx

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/SectionHeading';
import { features } from '@/data/content';

// ============================================================
// 卖点图片映射
// ============================================================
const featureImages: Record<number, string> = {
  1: '/images/features/feature-85k-puffs.jpg',
  2: '/images/features/feature-clear-tank.jpg',
  3: '/images/features/feature-smart-control.jpg',
  4: '/images/features/feature-dual-mesh.jpg',
  5: '/images/features/feature-ice-crack.jpg',
  6: '/images/features/feature-fast-charge.jpg',
};

// ============================================================
// 每个卖点的网格位置配置
// 6 个卖点 = 3 行 × 4 列的空间（Bento 布局）
// ============================================================
type GridConfig = {
  col: string;
  row: string;
  size: 'hero' | 'large' | 'medium' | 'small';
};

const gridLayouts: Record<number, GridConfig> = {
  1: { col: 'lg:col-span-2 lg:row-span-2', row: '', size: 'hero' },    // 85K Puffs: 大图 2×2
  2: { col: 'lg:col-span-2 lg:row-span-1', row: '', size: 'medium' },  // Clear Tank: 宽图
  3: { col: 'lg:col-span-2 lg:row-span-1', row: '', size: 'medium' },  // Smart Control: 宽图
  4: { col: 'lg:col-span-2 lg:row-span-1', row: '', size: 'medium' },  // Dual Mesh: 宽图
  5: { col: 'lg:col-span-2 lg:row-span-1', row: '', size: 'medium' },  // Ice Crack: 宽图
  6: { col: 'lg:col-span-2 lg:row-span-1', row: '', size: 'medium' },  // Fast Charge: 宽图
};

export function FeaturesSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Built Different"
          title="Engineered for Excellence"
          subtitle="Every detail of the KAPOW 85K is designed with your experience and the planet in mind."
        />

        {/*
          Bento Grid 布局：
          - 桌面端（lg）：4 列 × 3 行，不规则分配
          - 平板端（sm）：2 列
          - 手机端：1 列堆叠
        */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 lg:auto-rows-[200px]">
          {features.map((feature, i) => (
            <FeatureBentoCard
              key={feature.id}
              feature={feature}
              image={featureImages[feature.id]}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Bento 卡片组件
// ============================================================
function FeatureBentoCard({
  feature,
  image,
  index,
}: {
  feature: typeof features[0];
  image: string;
  index: number;
}) {
  // 根据 index 决定卡片样式
  // 0 (85K Puffs) 作为主视觉，占最大空间
  const isHero = index === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: Math.min(index * 0.08, 0.4) }}
      className={`
        group relative overflow-hidden rounded-2xl
        ${isHero ? 'lg:col-span-2 lg:row-span-3 sm:col-span-2' : 'lg:col-span-2'}
        min-h-[200px] lg:min-h-0
        bg-gradient-to-br from-moss-50 to-sage-100
        border border-sage-100 hover:border-moss-300
        shadow-sm hover:shadow-2xl hover:shadow-moss-600/10
        transition-all duration-500
        cursor-pointer
      `}
    >
      {/* 图片 */}
      <img
        src={image}
        alt={feature.title}
        className="
          absolute inset-0 w-full h-full object-cover
          transition-transform duration-1000 ease-out
          group-hover:scale-105
        "
        loading="lazy"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
        }}
      />

      {/* 渐变遮罩 - 从底部往上 */}
      <div className="absolute inset-0 bg-gradient-to-t from-forest-900/85 via-forest-900/30 to-transparent" />

      {/* 内容 */}
      <div
        className={`
          relative h-full flex flex-col justify-end
          ${isHero ? 'p-6 lg:p-8' : 'p-5 lg:p-6'}
        `}
      >
        {/* 序号 */}
        <div className="absolute top-4 right-4 text-white/40 font-mono text-xs tracking-widest">
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* 标题 */}
        <h3
          className={`
            font-bold text-white mb-2 leading-snug text-balance
            ${isHero ? 'text-xl lg:text-3xl' : 'text-base lg:text-lg'}
            group-hover:-translate-y-0.5 transition-transform duration-300
          `}
        >
          {feature.title}
        </h3>

        {/* 描述 - 只在 hero 卡片显示完整，其他卡片显示简短版本 */}
        <p
          className={`
            text-white/80 leading-relaxed
            ${isHero ? 'text-sm lg:text-base max-w-md' : 'text-xs lg:text-sm line-clamp-2'}
            group-hover:-translate-y-0.5 transition-transform duration-300 delay-75
          `}
        >
          {feature.description}
        </p>

        {/* 装饰线 */}
        <div
          className={`
            mt-3 h-0.5 bg-moss-400/70 rounded-full
            transition-all duration-500
            ${isHero ? 'w-12 group-hover:w-20' : 'w-8 group-hover:w-14'}
          `}
        />
      </div>

      {/* 悬停时的光晕 */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    </motion.div>
  );
}