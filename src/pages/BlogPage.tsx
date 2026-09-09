import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { blogPosts, type BlogPost } from '@/data/content';

const categories = ['All', 'Wellness', 'Sustainability', 'Product Education', 'Lifestyle'] as const;

export function BlogPage() {
  const [filter, setFilter] = useState<string>('All');

  const filtered = filter === 'All' ? blogPosts : blogPosts.filter((p) => p.category === filter);

  return (
    <>
      <section className="pt-32 pb-12 bg-cream-100 gradient-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="Learn & Explore"
            title="The KAPOW Journal"
            subtitle="Insights on clean living, sustainability, flavour science, and the technology behind KAPOW."
          />
        </div>
      </section>

      {/* Filter bar */}
      <section className="sticky top-16 z-30 bg-cream-50/90 backdrop-blur-lg border-b border-sage-200/50 py-4">
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

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group bg-white rounded-2xl overflow-hidden border border-sage-100 hover:border-moss-300 hover:shadow-xl hover:shadow-moss-600/5 transition-all flex flex-col"
    >
      <div className="h-48 relative overflow-hidden" style={{ background: post.gradient }}>
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/30 to-transparent" />
        <span className="absolute top-4 left-4 text-xs font-semibold text-white bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
          {post.category}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 text-xs text-forest-400 mb-3">
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="font-bold text-lg text-forest-800 mb-2 leading-snug group-hover:text-moss-700 transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-forest-500 leading-relaxed flex-1">{post.excerpt}</p>
        <a
          href="#"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-moss-600 group-hover:gap-2.5 transition-all"
          onClick={(e) => e.preventDefault()}
        >
          Read More
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.article>
  );
}
