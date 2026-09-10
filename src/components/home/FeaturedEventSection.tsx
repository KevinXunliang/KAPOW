// src/components/home/FeaturedEventSection.tsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Sparkles } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { events, type BrandEvent } from '@/data/events';

export function FeaturedEventSection() {
  // 只取 featured 的活动，且最多展示 2 个
  const featured = events
    .filter((e) => e.featured && (e.status === 'active' || e.status === 'upcoming'))
    .slice(0, 2);

  if (featured.length === 0) return null;

  return (
    <section className="py-24 bg-cream-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What's Happening"
          title="Brand Events"
          subtitle="Discover what's new at KAPOW — from limited drops to sustainability initiatives."
        />

        {/* 
          根据活动数量自适应布局：
          - 1 个活动：全宽大卡
          - 2 个活动：并排等宽卡
        */}
        <div
          className={`
            mt-16 grid gap-6
            ${featured.length === 1 ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'}
          `}
        >
          {featured.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <EventCard event={event} />
            </motion.div>
          ))}
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
            className="
              group inline-flex items-center gap-2
              text-sm font-semibold text-moss-600 hover:text-moss-700
              transition-colors
            "
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
// 活动卡片
// ============================================================
function EventCard({ event }: { event: BrandEvent }) {
  return (
    <Link
      to={`/events/${event.slug}`}
      className="
        group block relative
        h-[420px] lg:h-[460px]
        rounded-3xl overflow-hidden
        shadow-xl shadow-forest-900/5
        hover:shadow-2xl hover:shadow-forest-900/15
        transition-all duration-500
        hover:-translate-y-1
      "
    >
      {/* 背景渐变 */}
      <div
        className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        style={{ background: event.heroGradient }}
      />

      {/* 装饰圆 */}
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/15 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-white/10 blur-2xl" />

      {/* 深色遮罩 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

      {/* 内容 */}
      <div className="relative h-full flex flex-col justify-between p-7 lg:p-9 text-white">
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
          {/* 标签 */}
          {event.tags.length > 0 && (
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

          <h3 className="text-2xl lg:text-3xl font-bold mb-3 text-balance leading-tight">
            {event.title}
          </h3>

          <p className="text-sm lg:text-base text-white/85 leading-relaxed mb-5 max-w-md">
            {event.excerpt}
          </p>

          {/* 时间 */}
          <div className="flex items-center gap-2 text-xs lg:text-sm text-white/75 mb-5">
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