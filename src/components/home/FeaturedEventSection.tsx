// src/components/home/FeaturedEventSection.tsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Sparkles } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { events, type BrandEvent } from '@/data/events';

export function FeaturedEventSection() {
  // 只取 featured 的活动，最多展示 3 个
  const featured = events
    .filter((e) => e.featured && (e.status === 'active' || e.status === 'upcoming'))
    .slice(0, 3);

  if (featured.length === 0) return null;

  return (
    <section className="py-24 bg-cream-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What's Happening"
          title="Brand Events"
          subtitle="Discover what's new at KAPOW — from limited drops to community events."
        />

        <div className="mt-16">
          {/* 根据活动数量渲染不同布局 */}
          {featured.length === 1 && <SingleEventLayout event={featured[0]} />}
          {featured.length === 2 && <TwoEventsLayout events={featured} />}
          {featured.length === 3 && <ThreeEventsLayout events={featured} />}
        </div>

        {/* 查看更多活动入口 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex justify-center"
        >
          <Link
            to="/events"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-moss-600 hover:text-moss-700 transition-colors"
          >
            View all events
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// 布局 1：单个活动 - 全宽大卡
// ============================================================
function SingleEventLayout({ event }: { event: BrandEvent }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
    >
      <EventCard event={event} size="full" />
    </motion.div>
  );
}

// ============================================================
// 布局 2：两个活动 - 并排等宽
// ============================================================
function TwoEventsLayout({ events }: { events: BrandEvent[] }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {events.map((event, index) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
        >
          <EventCard event={event} size="medium" />
        </motion.div>
      ))}
    </div>
  );
}

// ============================================================
// 布局 3：三个活动 - 一大两小
// ============================================================
function ThreeEventsLayout({ events }: { events: BrandEvent[] }) {
  const [mainEvent, ...smallEvents] = events;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-6">
      {/* 大卡 - 占 2 列 2 行 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-2 lg:row-span-2"
      >
        <EventCard event={mainEvent} size="large" />
      </motion.div>

      {/* 两个小卡 - 各占 1 列 1 行 */}
      {smallEvents.map((event, index) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
        >
          <EventCard event={event} size="small" />
        </motion.div>
      ))}
    </div>
  );
}

// ============================================================
// 通用活动卡片 - 支持 3 种尺寸
// ============================================================
type CardSize = 'full' | 'large' | 'medium' | 'small';

function EventCard({ event, size }: { event: BrandEvent; size: CardSize }) {
  // 不同尺寸对应的高度和内容展示策略
  const sizeConfig: Record<
    CardSize,
    {
      height: string;
      titleSize: string;
      excerptSize: string;
      padding: string;
      showExcerpt: boolean;
      showDate: boolean;
    }
  > = {
    full: {
      height: 'h-[380px] lg:h-[460px]',
      titleSize: 'text-3xl lg:text-4xl',
      excerptSize: 'text-base',
      padding: 'p-8 lg:p-10',
      showExcerpt: true,
      showDate: true,
    },
    large: {
      height: 'h-[380px] lg:h-[460px]',
      titleSize: 'text-2xl lg:text-3xl',
      excerptSize: 'text-sm lg:text-base',
      padding: 'p-7 lg:p-9',
      showExcerpt: true,
      showDate: true,
    },
    medium: {
      height: 'h-[380px] lg:h-[460px]',
      titleSize: 'text-2xl lg:text-3xl',
      excerptSize: 'text-sm lg:text-base',
      padding: 'p-7 lg:p-9',
      showExcerpt: true,
      showDate: true,
    },
    small: {
      height: 'h-[180px] lg:h-[218px]',
      titleSize: 'text-lg lg:text-xl',
      excerptSize: 'text-xs',
      padding: 'p-5 lg:p-6',
      showExcerpt: false,
      showDate: false,
    },
  };

  const config = sizeConfig[size];

  return (
    <Link
      to={`/events/${event.slug}`}
      className={`
        group block relative
        ${config.height}
        rounded-3xl overflow-hidden
        shadow-xl shadow-forest-900/5
        hover:shadow-2xl hover:shadow-forest-900/15
        transition-all duration-500
        hover:-translate-y-1
      `}
    >
      {/* 背景 - 图片优先，无图片时用渐变兜底 */}
      {event.image ? (
        <img
          src={event.image}
          alt={event.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      ) : (
        <div
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
          style={{ background: event.heroGradient }}
        />
      )}

      {/* 装饰圆 */}
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/15 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-white/10 blur-2xl" />

      {/* 深色遮罩 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

      {/* 内容 */}
      <div className={`relative h-full flex flex-col justify-between ${config.padding} text-white`}>
        {/* 顶部：分类 + 状态 */}
        <div className="flex items-start justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
            <Sparkles className="w-3 h-3" />
            {event.category}
          </span>

          {/* 状态标签 */}
          {event.status === 'active' && (
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-full bg-moss-500/90 backdrop-blur-sm text-white">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white" />
              </span>
              Live
            </span>
          )}
          {event.status === 'upcoming' && (
            <span className="text-[11px] font-semibold px-3 py-1.5 rounded-full bg-white/90 text-forest-800">
              Coming Soon
            </span>
          )}
        </div>

        {/* 底部：标题 + 描述 + 时间 + CTA */}
        <div>
          {/* 标签（小卡不显示标签） */}
          {size !== 'small' && event.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {event.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h3 className={`font-bold ${config.titleSize} mb-2 text-balance leading-tight`}>
            {event.title}
          </h3>

          {/* 描述（小卡不显示） */}
          {config.showExcerpt && (
            <p className={`${config.excerptSize} text-white/85 leading-relaxed mb-4 max-w-md line-clamp-2`}>
              {event.excerpt}
            </p>
          )}

          {/* 时间（小卡不显示） */}
          {config.showDate && (
            <div className={`flex items-center gap-2 ${config.excerptSize} text-white/75 mb-4`}>
              <Clock className="w-3.5 h-3.5" />
              <span>
                {new Date(event.startDate).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                })}
                {' — '}
                {new Date(event.endDate).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>
          )}

          {/* CTA */}
          <div className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all">
            <span>{event.ctaLabel}</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}