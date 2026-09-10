// src/components/PolicyLayout.tsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Calendar } from 'lucide-react';
import type { ReactNode } from 'react';

type PolicyLayoutProps = {
  title: string;
  subtitle: string;
  lastUpdated: string;
  icon?: ReactNode;
  children: ReactNode;
};

export function PolicyLayout({
  title,
  subtitle,
  lastUpdated,
  icon,
  children,
}: PolicyLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden gradient-mesh bg-cream-100">
        <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-moss-200/30 blur-3xl" />
        <div className="absolute bottom-0 -right-20 w-96 h-96 rounded-full bg-terracotta-200/20 blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 返回链接 */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-forest-500 hover:text-moss-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            {icon && (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-moss-100 text-moss-600 mb-6">
                {icon}
              </div>
            )}

            <h1 className="text-display-lg font-bold text-forest-800 text-balance mb-4">
              {title}
            </h1>

            <p className="text-lg text-forest-500 leading-relaxed max-w-2xl mx-auto mb-6">
              {subtitle}
            </p>

            <div className="inline-flex items-center gap-2 text-xs text-forest-400 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-sage-200/50">
              <Calendar className="w-3.5 h-3.5" />
              Last updated: {lastUpdated}
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
            className="bg-white rounded-3xl border border-sage-100 p-8 sm:p-10 lg:p-12"
          >
            <div className="policy-content">{children}</div>
          </motion.div>

          {/* 底部提示 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <p className="text-sm text-forest-500 mb-4">
              Have questions about this policy?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-moss-600 hover:bg-moss-700 text-cream-50 font-semibold py-3 px-6 rounded-xl transition-all shadow-lg shadow-moss-600/20"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

// ============================================================
// 可复用的排版子组件
// ============================================================

export function PolicySection({
  number,
  title,
  children,
}: {
  number?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-10 last:mb-0">
      <h2 className="flex items-baseline gap-3 text-xl sm:text-2xl font-bold text-forest-800 mb-4">
        {number && (
          <span className="text-moss-500 text-base font-mono shrink-0">{number}</span>
        )}
        <span>{title}</span>
      </h2>
      <div className="space-y-4 text-forest-600 leading-relaxed">{children}</div>
    </section>
  );
}

export function PolicyList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2.5 pl-1">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-forest-600 leading-relaxed">
          <span className="w-1.5 h-1.5 rounded-full bg-moss-400 shrink-0 mt-2" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function PolicyCallout({
  children,
  variant = 'default',
}: {
  children: ReactNode;
  variant?: 'default' | 'warning';
}) {
  return (
    <div
      className={`
        p-4 rounded-xl border text-sm leading-relaxed
        ${variant === 'warning'
          ? 'bg-amber-50 border-amber-200 text-amber-800'
          : 'bg-moss-50 border-moss-200 text-forest-700'
        }
      `}
    >
      {children}
    </div>
  );
}