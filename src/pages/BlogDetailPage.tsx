// src/pages/BlogDetailPage.tsx

import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Clock,
  Calendar,
  User,
  Share2,
  Quote,
  Lightbulb,
} from 'lucide-react';
import { blogPosts, type BlogSection } from '@/data/content';
import { SectionHeading } from '@/components/SectionHeading';

export function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // 相关文章
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  const fallbackPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);
  const recommended = relatedPosts.length > 0 ? relatedPosts : fallbackPosts;

  return (
    <>
      {/* ============================================================
          Hero - 封面图作为全屏背景，文字叠加
          ============================================================ */}
      <section className="relative h-[70vh] min-h-[560px] w-full overflow-hidden">
        {/* 背景 - 图片优先，否则用渐变 */}
        {post.image ? (
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{ background: post.gradient }}
          />
        )}

        {/* 装饰圆（无图片时增加层次） */}
        {!post.image && (
          <>
            <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white/15 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
          </>
        )}

        {/* 深色渐变遮罩 - 保证文字可读性 */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/85 via-forest-900/40 to-forest-900/20" />

        {/* 内容 - 底部左对齐 */}
        <div className="relative h-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-12 lg:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* 分类标签 */}
            <div className="mb-5">
              <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30">
                {post.category}
              </span>
            </div>

            {/* 标题 */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance leading-tight mb-6 max-w-3xl">
              {post.title}
            </h1>

            {/* 元信息 */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/85">
              <span className="inline-flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          正文
          ============================================================ */}
      <section className="py-16 lg:py-20 bg-cream-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {post.content.map((section, index) => (
              <ContentSection key={index} section={section} />
            ))}
          </motion.article>

          {/* 分享 */}
          <div className="mt-12 pt-8 border-t border-sage-200 flex items-center justify-between">
            <span className="text-sm text-forest-500">Share this article</span>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: post.title,
                    text: post.excerpt,
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
        </div>
      </section>

      {/* ============================================================
          相关文章
          ============================================================ */}
      {recommended.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Keep Reading"
              title="You Might Also Like"
            />

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommended.map((related, i) => (
                <motion.div
                  key={related.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <Link
                    to={`/blog/${related.slug}`}
                    className="group block bg-cream-50 rounded-2xl overflow-hidden border border-sage-100 hover:border-moss-300 hover:shadow-xl hover:shadow-moss-600/5 transition-all h-full"
                  >
                    {/* 封面 */}
                    <div className="h-40 relative overflow-hidden">
                      {related.image ? (
                        <img
                          src={related.image}
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      ) : (
                        <div
                          className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                          style={{ background: related.gradient }}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-900/30 to-transparent" />
                      <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wider text-white bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full">
                        {related.category}
                      </span>
                    </div>

                    {/* 文字 */}
                    <div className="p-5">
                      <div className="flex items-center gap-3 text-xs text-forest-400 mb-2">
                        <span>{related.date}</span>
                        <span>·</span>
                        <span>{related.readTime}</span>
                      </div>
                      <h3 className="font-bold text-base text-forest-800 leading-snug group-hover:text-moss-700 transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          底部 CTA
          ============================================================ */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-forest-800 mb-3">
            Ready to explore KAPOW?
          </h2>
          <p className="text-forest-500 mb-6">
            Discover our premium, crafted devices.
          </p>
          <Link
            to="/product/kapow-85k"
            className="group inline-flex items-center gap-2 bg-moss-600 hover:bg-moss-700 text-cream-50 font-semibold py-3.5 px-7 rounded-xl transition-all shadow-lg shadow-moss-600/20"
          >
            Explore KAPOW 85K
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}

// ============================================================
// 内容区块渲染
// ============================================================
function ContentSection({ section }: { section: BlogSection }) {
  switch (section.type) {
    case 'heading':
      return (
        <h2 className="text-2xl font-bold text-forest-800 mt-10 mb-4 first:mt-0 text-balance">
          {section.text}
        </h2>
      );

    case 'paragraph':
      return (
        <p className="text-lg text-forest-600 leading-relaxed">
          {section.text}
        </p>
      );

    case 'quote':
      return (
        <blockquote className="relative my-8 pl-6 border-l-4 border-moss-400">
          <Quote className="absolute -left-3 -top-3 w-8 h-8 text-moss-200 bg-cream-50" />
          <p className="text-xl italic text-forest-700 leading-relaxed mb-2">
            {section.text}
          </p>
          {section.author && (
            <footer className="text-sm text-forest-400">— {section.author}</footer>
          )}
        </blockquote>
      );

    case 'list':
      return (
        <ul className="space-y-3 my-6">
          {section.items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-lg text-forest-600 leading-relaxed"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-moss-400 shrink-0 mt-2.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case 'callout':
      return (
        <div className="my-8 p-6 rounded-2xl bg-moss-50 border border-moss-200">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-moss-100 text-moss-600 flex items-center justify-center shrink-0">
              <Lightbulb className="w-5 h-5" />
            </div>
            <p className="text-forest-700 leading-relaxed pt-1.5">{section.text}</p>
          </div>
        </div>
      );

    default:
      return null;
  }
}