// src/components/ScrollToTopButton.tsx

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(scrollProgress, 100));
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const ringSize = 48;
  const buttonSize = 42;
  const strokeWidth = 3;
  const radius = (ringSize - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-50 group"
          style={{ width: ringSize, height: ringSize }}
          aria-label="回到顶部"
        >
          {/* 整个按钮容器的悬停变换 - 环和按钮一起动 */}
          <div className="w-full h-full transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
            {/* 环形进度 - SVG */}
            <svg
              className="w-full h-full -rotate-90"
              viewBox={`0 0 ${ringSize} ${ringSize}`}
            >
              {/* 背景环 */}
              <circle
                cx={ringSize / 2}
                cy={ringSize / 2}
                r={radius}
                strokeWidth={strokeWidth}
                fill="none"
              />
              {/* 进度环 */}
              <circle
                cx={ringSize / 2}
                cy={ringSize / 2}
                r={radius}
                stroke="#1e3925"
                strokeWidth={strokeWidth}
                strokeLinecap="butt"
                fill="none"
                style={{
                  strokeDasharray: circumference,
                  strokeDashoffset: offset,
                  transition: 'stroke-dashoffset 0.15s linear',
                }}
              />
            </svg>

            {/* 按钮主体 - 居中，与环无间隔 */}
            <div
              className="
                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                flex items-center justify-center
                bg-white rounded-full
                shadow-md
              "
              style={{ width: buttonSize, height: buttonSize }}
            >
              <svg
                className="w-4 h-4 text-forest-700 transition-all duration-300 group-hover:-translate-y-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </div>
          </div>

          {/* 悬停提示 */}
          <div
            className="
              absolute -top-9 left-1/2 -translate-x-1/2
              text-[11px] font-medium text-forest-700
              bg-white/95 px-3 py-1 rounded-full
              shadow-sm border border-sage-200/50
              opacity-0 group-hover:opacity-100
              transition-all duration-300
              group-hover:-translate-y-1
              whitespace-nowrap
            "
          >
            回到顶部
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}