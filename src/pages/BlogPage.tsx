// src/pages/BlogPage.tsx

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { blogPosts, type BlogPost } from '@/data/content';

const categories = ['All', 'Craftsmanship', 'Product Knowledge', 'Flavour', 'Lifestyle'] as const;

export function BlogPage() {
  const [filter, setFilter] = useState<string>('All');

  const filtered =
    filter === 'All' ? blogPosts : blogPosts.filter((p) => p.category === filter);

  return (
    <>
      {/* Hero */}
      <section className="pt-44 pb-12 bg-cream-100 gradient-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="Learn & Explore"
            title="The KAPOW Journal"
            subtitle="Insights on craftsmanship, product knowledge, flavour, and the technology behind KAPOW."
          />
        </div>
      </section>

      {/* Filter bar */}
      <section className="sticky top-16 z-30 bg-white border-b border-sage-200 py-4">
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
      </section>

      {/* Grid */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((post, i) => (
                <BlogCard key={post.id} post={post} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}

// ============================================================
// 博客卡片
// ============================================================
function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link
        to={`/blog/${post.slug}`}
        className="group bg-white rounded-2xl overflow-hidden border border-sage-100 hover:border-moss-300 hover:shadow-xl hover:shadow-moss-600/5 transition-all flex flex-col h-full"
      >
        {/* 封面 */}
        <div className="h-48 relative overflow-hidden">
          {post.image ? (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          ) : (
            <div
              className="w-full h-full group-hover:scale-105 transition-transform duration-500"
              style={{ background: post.gradient }}
            />
          )}

          {/* 遮罩 */}
          <div className="absolute inset-0 bg-gradient-to-t from-forest-900/30 to-transparent" />

          {/* 分类标签 */}
          <span className="absolute top-4 left-4 text-xs font-semibold text-white bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>

        {/* 内容 */}
        <div className="p-6 flex flex-col flex-1">
          {/* 日期 + 阅读时间 */}
          <div className="flex items-center gap-3 text-xs text-forest-400 mb-3">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          {/* 标题 */}
          <h3 className="font-bold text-lg text-forest-800 mb-2 leading-snug group-hover:text-moss-700 transition-colors line-clamp-2">
            {post.title}
          </h3>

          {/* 摘要 */}
          <p className="text-sm text-forest-500 leading-relaxed flex-1 line-clamp-3">
            {post.excerpt}
          </p>

          {/* 阅读更多 */}
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-moss-600 group-hover:gap-2.5 transition-all">
            Read More
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}