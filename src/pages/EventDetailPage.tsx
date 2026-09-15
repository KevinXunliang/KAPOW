// src/pages/EventDetailPage.tsx

import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Sparkles,
  Share2,
  Calendar,
  Tag,
} from 'lucide-react';
import { events } from '@/data/events';
import { SectionHeading } from '@/components/SectionHeading';

export function EventDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    return <Navigate to="/events" replace />;
  }

  const startDate = new Date(event.startDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const endDate = new Date(event.endDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // 状态标签
  const statusConfig = {
    active: { label: 'Happening Now', color: 'bg-moss-500 text-white' },
    upcoming: { label: 'Coming Soon', color: 'bg-amber-500 text-white' },
    ended: { label: 'Ended', color: 'bg-forest-400 text-white' },
  }[event.status];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
  {event.image ? (
    <img
      src={event.image}
      alt={event.title}
      className="absolute inset-0 w-full h-full object-cover"
    />
  ) : (
    <div
      className="absolute inset-0"
      style={{ background: event.heroGradient }}
    />
  )}

        {/* 装饰圆 */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />

        {/* 深色遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 via-forest-900/20 to-transparent" />

        {/* 内容 */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white max-w-3xl"
          >
            {/* 分类 + 状态 */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                <Sparkles className="w-3 h-3" />
                {event.category}
              </span>
              <span
                className={`text-xs font-semibold px-3 py-1.5 rounded-full ${statusConfig.color}`}
              >
                {statusConfig.label}
              </span>
              {event.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/90 text-forest-800"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* 标题 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 text-balance">
              {event.title}
            </h1>

            {/* 描述 */}
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8 max-w-2xl">
              {event.excerpt}
            </p>

            {/* 时间和 CTA */}
            <div className="inline-flex items-center gap-2 text-sm text-white/80 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
  <Clock className="w-4 h-4" />
  <span>
    {startDate} — {endDate}
  </span>
</div>
          </motion.div>
        </div>
      </section>

      {/* 正文 */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* 描述 */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-forest-600 leading-relaxed whitespace-pre-line">
                {event.description}
              </p>
            </div>

            {/* 关键信息卡片 */}
            <div className="mt-12 grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-sage-100">
                <div className="w-10 h-10 rounded-xl bg-moss-100 text-moss-600 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-forest-400 uppercase tracking-wider mb-1">
                    Duration
                  </div>
                  <div className="text-sm font-semibold text-forest-800">
                    {startDate} — {endDate}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-sage-100">
                <div className="w-10 h-10 rounded-xl bg-moss-100 text-moss-600 flex items-center justify-center shrink-0">
                  <Tag className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-forest-400 uppercase tracking-wider mb-1">
                    Category
                  </div>
                  <div className="text-sm font-semibold text-forest-800">
                    {event.category}
                  </div>
                </div>
              </div>
            </div>

            {/* 分享 */}
            <div className="mt-10 flex items-center justify-between pt-6 border-t border-sage-200">
              <span className="text-sm text-forest-500">
                Share this event
              </span>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: event.title,
                      text: event.excerpt,
                      url: window.location.href,
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                  }
                }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-moss-600 hover:text-moss-700 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 其他活动 */}
      <OtherEventsSection currentSlug={event.slug} />
    </>
  );
}

// 其他活动推荐
function OtherEventsSection({ currentSlug }: { currentSlug: string }) {
  const otherEvents = events.filter((e) => e.slug !== currentSlug);

  if (otherEvents.length === 0) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="More Events"
          title="You Might Also Like"
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {otherEvents.slice(0, 3).map((evt, i) => (
            <motion.div
              key={evt.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link
  to={`/events/${evt.slug}`}
  className="group block relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
>
  {evt.image ? (
    <img
      src={evt.image}
      alt={evt.title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      loading="lazy"
    />
  ) : (
    <div
      className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
      style={{ background: evt.heroGradient }}
    />
  )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="relative h-full flex flex-col justify-end p-5 text-white">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 w-fit mb-3">
                    {evt.category}
                  </span>
                  <h3 className="font-bold text-lg leading-snug mb-1">
                    {evt.title}
                  </h3>
                  <p className="text-xs text-white/70 line-clamp-2">
                    {evt.excerpt}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}