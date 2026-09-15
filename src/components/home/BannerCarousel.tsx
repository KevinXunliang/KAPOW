// src/components/home/BannerCarousel.tsx

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavbarTheme } from '@/context/NavbarThemeContext';

// 轮播数据（你可以替换成自己的内容）
const slides = [
  {
    id: 1,
    title: 'Pure Flavour, Engineered',
    subtitle: 'The KAPOW 85K delivers 85,000 puffs of crafted precision',
    cta: 'Explore Product',
    link: '/product/kapow-85k',
    image: '/images/Banner1.png',
    bg: 'linear-gradient(135deg, #1e3925 0%, #357d57 100%)',
    isDark: true,
  },
  {
    id: 2,
    title: 'Crafted for Every Puff',
    subtitle: 'Dual mesh coils, smart control, and a design that feels premium',
    cta: 'See Features',
    link: '/product/kapow-85k#features',
    image: '/images/Banner2.png',
    bg: 'linear-gradient(135deg, #2d5634 0%, #86b99a 100%)',
    isDark: true,
  },
  {
    id: 3,
    title: '12 Flavours. One Device.',
    subtitle: 'From crisp mint to vibrant fruit — find your signature',
    cta: 'View All Flavours',
    link: '/product/kapow-85k#flavours',
    image: '/images/Banner3.png',
    bg: 'linear-gradient(135deg, #924430 0%, #d08560 100%)',
    isDark: true,
  },
];

export function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  const { setTheme } = useNavbarTheme();

  // 进度管理 refs
  const progressStartTimeRef = useRef<number>(Date.now());
  const elapsedTimeRef = useRef<number>(0); // 累计已消耗时间（毫秒）
  const animationFrameRef = useRef<number | null>(null);

  const totalSlides = slides.length;
  const autoPlayInterval = 5000; // 5秒

  // 重置进度（切换幻灯片时调用）
  const resetProgress = () => {
    elapsedTimeRef.current = 0;
    progressStartTimeRef.current = Date.now();
    setProgress(0);
  };

  // 跳转到指定幻灯片
  const goToSlide = (index: number, dir: number = 1) => {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    setDirection(dir);
    setCurrentIndex(index);
    resetProgress();
  };

  const nextSlide = () => goToSlide(currentIndex + 1, 1);
  const prevSlide = () => goToSlide(currentIndex - 1, -1);

  // 更新进度的函数（会被 requestAnimationFrame 循环调用）
  const updateProgress = () => {
    if (isPaused) return;

    const now = Date.now();
    const totalElapsed = elapsedTimeRef.current + (now - progressStartTimeRef.current);
    const newProgress = Math.min((totalElapsed / autoPlayInterval) * 100, 100);
    setProgress(newProgress);

    if (newProgress < 100) {
      animationFrameRef.current = requestAnimationFrame(updateProgress);
    } else {
      // 进度完成，切换到下一张
      nextSlide();
    }
  };

  // 启动或恢复进度循环
  const startProgressLoop = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    // 如果暂停，不启动
    if (isPaused) return;
    // 如果进度已经达到 100%，直接触发切换（但正常情况下不会发生）
    if (progress >= 100) {
      nextSlide();
      return;
    }
    // 重置开始时间为当前时间（保留已消耗时间）
    progressStartTimeRef.current = Date.now();
    animationFrameRef.current = requestAnimationFrame(updateProgress);
  };

  // 暂停进度
  const pauseProgress = () => {
    if (isPaused) return;
    // 记录当前已消耗时间
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
      // 计算截至目前的已消耗时间
      const now = Date.now();
      const additional = now - progressStartTimeRef.current;
      elapsedTimeRef.current += additional;
    }
    setIsPaused(true);
  };

  // 恢复进度
  const resumeProgress = () => {
    if (!isPaused) return;
    setIsPaused(false);
    // 重置开始时间，保留已消耗时间
    progressStartTimeRef.current = Date.now();
    // 如果进度已满，直接切换
    if (progress >= 100) {
      nextSlide();
      return;
    }
    animationFrameRef.current = requestAnimationFrame(updateProgress);
  };

  // 当 currentIndex 改变时，重置进度并开始循环
  useEffect(() => {
    resetProgress();
    // 如果当前是暂停状态，不自动启动（但切换幻灯片时通常应该自动播放）
    if (!isPaused) {
      startProgressLoop();
    }
    // 清理
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [currentIndex]); // 只依赖 currentIndex

  // 当 isPaused 变化时，启动或停止循环
  useEffect(() => {
    if (!isPaused) {
      startProgressLoop();
    } else {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    }
    // 清理
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [isPaused]);

  // 组件卸载时清理
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, []);

  // 更新导航栏主题
  useEffect(() => {
    setTheme(slides[currentIndex].isDark ? 'dark' : 'light');
    return () => setTheme('light');
  }, [currentIndex, setTheme]);

  // 触摸事件
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    pauseProgress();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextSlide() : prevSlide();
    }
    resumeProgress();
  };

  const handleMouseEnter = () => {
    pauseProgress();
  };

  const handleMouseLeave = () => {
    resumeProgress();
  };

  // 滑动动画变体
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative h-[75vh] min-h-[480px] w-full">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
  key={currentIndex}
  custom={direction}
  variants={slideVariants}
  initial="enter"
  animate="center"
  exit="exit"
  transition={{ duration: 0.6, ease: 'easeInOut' }}
  className="absolute inset-0 flex items-center justify-center px-4"
>
  {/* 背景层 - 图片或渐变 */}
  {slides[currentIndex].image ? (
    <img
      src={slides[currentIndex].image}
      alt={slides[currentIndex].title}
      className="absolute inset-0 w-full h-full object-cover"
    />
  ) : (
    <div
      className="absolute inset-0"
      style={{ background: slides[currentIndex].bg }}
    />
  )}

  {/* 深色遮罩 - 让文字在图片上清晰可见 */}
  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/75 via-forest-900/40 to-forest-900/50" />

  {/* 内容层 */}
  <div className="relative z-10 text-center max-w-3xl text-white">
    <h2 className="text-display-md font-bold mb-4">
      {slides[currentIndex].title}
    </h2>
    <p className="text-lg md:text-xl mb-8 opacity-90">
      {slides[currentIndex].subtitle}
    </p>
    <a
      href={slides[currentIndex].link}
      className="inline-block bg-white text-forest-800 font-semibold px-8 py-3 rounded-xl hover:shadow-lg transition-all hover:scale-105"
    >
      {slides[currentIndex].cta} →
    </a>
  </div>
</motion.div>
        </AnimatePresence>

        {/* 左右翻页按钮 */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white/60 hover:text-white transition-colors p-3 bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white/60 hover:text-white transition-colors p-3 bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-sm"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* 底部动态长度指示器 */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center px-4">
        <div className="flex items-center gap-2">
          {slides.map((_, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={index}
                onClick={() => {
                  // 手动点击时暂停并跳转，然后恢复
                  pauseProgress();
                  goToSlide(index, index > currentIndex ? 1 : -1);
                  // 延迟一点恢复，避免与切换冲突
                  setTimeout(resumeProgress, 50);
                }}
                className={`relative h-1 rounded-full transition-all duration-300 ${
                  isActive ? 'w-12 bg-white/20' : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`跳转到第 ${index + 1} 张`}
              >
                {isActive && (
                  <div
                    className="h-full bg-white rounded-full transition-all duration-100 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}