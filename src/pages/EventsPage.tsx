// src/pages/EventsPage.tsx

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Sparkles, Calendar } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { events, type EventStatus } from '@/data/events';

type FilterStatus = 'all' | EventStatus;

export function EventsPage() {
  const [filter, setFilter] = useState<FilterStatus>('all');

  const filtered = useMemo(() => {
    if (filter === 'all') return events;
    return events.filter((e) => e.status === filter);
  }, [filter]);

  const tabs: { key: FilterStatus; label: string; count: number }[] = [
    { key: 'all', label: 'All', count: events.length },
    {
      key: 'active',
      label: 'Happening Now',
      count: events.filter((e) => e.status === 'active').length,
    },
    {
      key: 'upcoming',
      label: 'Upcoming',
      count: events.filter((e) => e.status === 'upcoming').length,
    },
    {
      key: 'ended',
      label: 'Past',
      count: events.filter((e) => e.status === 'ended').length,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-44 pb-16 overflow-hidden gradient-mesh bg-cream-100">
        <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-moss-200/30 blur-3xl" />
        <div className="absolute bottom-0 -right-20 w-96 h-96 rounded-full bg-terracotta-200/20 blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-moss-100 text-moss-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Brand Events
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-display-lg font-bold text-forest-800 text-balance"
          >
            What's Happening at <span className="text-moss-600">KAPOW</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-forest-500 leading-relaxed max-w-2xl mx-auto"
          >
            Limited drops, community events, partnerships — explore our latest
            brand events and campaigns.
          </motion.p>
        </div>
      </section>

      {/* 筛选栏 */}
      <section className="sticky top-16 z-30 bg-white border-b border-sage-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {tabs.map((tab) => {
              const isActive = filter === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setFilter(tab.key)}
                  className={`
                    inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all
                    ${isActive
                      ? 'bg-moss-600 text-cream-50 shadow-md shadow-moss-600/20'
                      : 'bg-sage-100 text-forest-600 hover:bg-sage-200'
                    }
                  `}
                  aria-pressed={isActive}
                >
                  {tab.label}
                  <span
                    className={`
                      text-[10px] font-bold px-1.5 py-0.5 rounded-full
                      ${isActive ? 'bg-white/25 text-white' : 'bg-white/60 text-forest-500'}
                    `}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 活动列表 */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-sage-100 mb-5">
                <Calendar className="w-8 h-8 text-forest-300" />
              </div>
              <h3 className="font-bold text-lg text-forest-800 mb-2">No events here yet</h3>
              <p className="text-sm text-forest-500">
                Check back soon for upcoming events.
              </p>
            </div>
          ) : (
            <AnimatePresence mode="popLayout">
              <motion.div
                layout
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filtered.map((event, i) => (
                  <EventCard key={event.id} event={event} index={i} />
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </section>
    </>
  );
}

function EventCard({ event, index }: { event: typeof events[0]; index: number }) {
  const statusConfig = {
    active: { label: 'Happening Now', color: 'bg-moss-500 text-white' },
    upcoming: { label: 'Coming Soon', color: 'bg-amber-500 text-white' },
    ended: { label: 'Ended', color: 'bg-forest-400 text-white' },
  }[event.status];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link
  to={`/events/${event.slug}`}
  className="group block relative h-[420px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
>
  {/* 背景 - 图片优先，无图片时用渐变兜底 */}
  {event.image ? (
    <img
      src={event.image}
      alt={event.title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      loading="lazy"
    />
  ) : (
    <div
      className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
      style={{ background: event.heroGradient }}
    />
  )}
        {/* 遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* 内容 */}
        <div className="relative h-full flex flex-col justify-between p-6 text-white">
          {/* 顶部标签 */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
              <Sparkles className="w-2.5 h-2.5" />
              {event.category}
            </span>
            <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${statusConfig.color}`}>
              {statusConfig.label}
            </span>
          </div>

          {/* 底部内容 */}
          <div>
            <h3 className="text-xl font-bold mb-2 leading-snug group-hover:translate-y-[-2px] transition-transform">
              {event.title}
            </h3>
            <p className="text-sm text-white/80 leading-relaxed line-clamp-2 mb-4">
              {event.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-white/70">
                <Clock className="w-3 h-3" />
                <span>
                  {new Date(event.startDate).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
              </div>
              <div className="flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all">
                <span>View</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}