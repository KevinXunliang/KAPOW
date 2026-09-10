// src/components/home/BlogTeaserSection.tsx

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { blogPosts } from '@/data/content';

export function BlogTeaserSection() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题 + 查看全部 */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Learn & Explore"
            title="From the Journal"
            center={false}
          />
          <Link
            to="/blog"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-moss-600 hover:text-moss-700 transition-colors shrink-0"
          >
            View all posts
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 卡片网格 */}
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden border border-sage-100 hover:border-moss-300 hover:shadow-xl hover:shadow-moss-600/5 transition-all h-full"
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
                <div className="p-6">
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
                  <p className="text-sm text-forest-500 leading-relaxed line-clamp-2">
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
          ))}
        </div>
      </div>
    </section>
  );
}