// src/components/home/SubscribeSection.tsx

import { motion } from 'framer-motion';
import { Send, Mail } from 'lucide-react';

export function SubscribeSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 这里可以添加表单提交逻辑，比如调用邮件订阅 API
    alert('Thanks for subscribing! 🎉');
  };

  return (
    <section className="relative py-20 bg-cream-50 overflow-hidden">
      {/* 装饰元素 */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-moss-100/30 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-terracotta-100/20 blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* 徽章 */}
          <span className="inline-flex items-center gap-2 bg-moss-100 text-moss-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Mail className="w-4 h-4" />
            Stay in the Loop
          </span>

          <h2 className="text-display-md font-bold text-forest-800 mb-4 text-balance">
            Join the <span className="text-moss-600">KAPOW Community</span>
          </h2>

          <p className="text-lg text-forest-500 leading-relaxed max-w-xl mx-auto mb-8">
            Subscribe for exclusive updates, flavour drops, and eco-conscious living tips.
            No spam, just pure goodness.
          </p>

          {/* 订阅表单 */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3.5 rounded-xl border border-sage-200 bg-white text-forest-800 placeholder-forest-300 focus:outline-none focus:ring-2 focus:ring-moss-400 focus:border-transparent transition-all"
              required
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-moss-600 hover:bg-moss-700 text-white font-semibold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-moss-600/20 hover:shadow-xl hover:shadow-moss-600/30"
            >
              Subscribe
              <Send className="w-4 h-4" />
            </button>
          </form>

          <p className="text-xs text-forest-400 mt-4 flex items-center justify-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-moss-400" />
            No spam, unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}