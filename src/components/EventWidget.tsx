// src/components/events/EventWidget.tsx

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { getFeaturedEvent } from '@/data/events';

const STORAGE_KEY = 'kapow-event-widget-dismissed';

export function EventWidget() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const event = getFeaturedEvent();

  useEffect(() => {
    const wasDismissed = sessionStorage.getItem(STORAGE_KEY);
    if (wasDismissed) {
      setDismissed(true);
      return;
    }
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setVisible(false);
    setDismissed(true);
    sessionStorage.setItem(STORAGE_KEY, 'true');
  };

  if (!event || dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-24 right-10 z-40 hidden lg:block group"
        >
          {/* 关闭按钮 */}
          <button
            onClick={handleDismiss}
            className="
              absolute -top-1 -right-1 z-20
              w-5 h-5 rounded-full
              bg-forest-800 hover:bg-forest-900
              flex items-center justify-center
              text-white shadow-md
              opacity-0 group-hover:opacity-100
              transition-opacity duration-200
            "
            aria-label="Dismiss"
          >
            <X className="w-2.5 h-2.5" />
          </button>

          {/* 圆形按钮主体 */}
          <Link
            to={`/events/${event.slug}`}
            className="
              relative block
              w-16 h-16 rounded-full
              overflow-hidden
              shadow-lg shadow-forest-900/20
              hover:shadow-xl hover:shadow-forest-900/30
              hover:scale-110
              transition-all duration-300
              border-2 border-white
            "
            aria-label={event.title}
          >
            {/* 主视觉渐变（图片加载失败时的兜底） */}
            <div
              className="absolute inset-0"
              style={{ background: event.heroGradient }}
            />

            {/* 图片 / 动图 */}
            {event.image && (
              <img
                src={event.image}
                alt={event.title}
                className="relative w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            )}

            {/* 状态指示（Live 时显示脉冲小圆点） */}
            {event.status === 'active' && (
              <span className="absolute top-1 left-1 w-2 h-2 rounded-full bg-moss-400 border border-white shadow-sm">
                <span className="absolute inset-0 rounded-full bg-moss-400 animate-ping opacity-75" />
              </span>
            )}
          </Link>

          {/* 悬停时显示的极简文案 */}
          <div
            className="
              absolute top-1/2 right-full mr-3 -translate-y-1/2
              whitespace-nowrap
              bg-forest-900/95 backdrop-blur-sm
              text-white text-xs font-medium
              px-3 py-1.5 rounded-full
              shadow-lg
              opacity-0 group-hover:opacity-100
              translate-x-2 group-hover:translate-x-0
              transition-all duration-300
              pointer-events-none
            "
          >
            {event.title}
            <span className="ml-1.5 text-moss-300">→</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}