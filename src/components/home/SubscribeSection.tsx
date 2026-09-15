// src/components/home/SubscribeSection.tsx

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, Sparkles, Leaf, CheckCircle, AlertCircle } from 'lucide-react';

export function SubscribeSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // 修复 3 & 4：添加 trim 和显式返回类型
  const isValidEmail = (email: string): boolean => {
    const trimmed = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(trimmed);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 修复 2：空值检查放在最前面
    if (!email.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your email address.');
      return;
    }

    // 修复 1：合并两个验证逻辑，先检查 @ 是否存在（更友好的错误信息）
    if (!email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please include an "@" in the email address.');
      return;
    }

    // 再检查完整格式（用户名@域名.后缀）
    if (!isValidEmail(email)) {
      setStatus('error');
      setErrorMessage('Please enter a complete email address (e.g., name@domain.com).');
      return;
    }

    setStatus('loading');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  return (
    <section className="relative py-24 bg-cream-50 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-moss-100/30 blur-3xl translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-terracotta-100/20 blur-3xl -translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-white rounded-3xl shadow-xl shadow-forest-900/5 border border-sage-100/60 p-8 sm:p-10 lg:p-12 overflow-hidden"
        >
          {/* 卡片内部装饰 */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-moss-50 blur-2xl" />
          <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-cream-100 blur-2xl" />

          {/* 顶部徽标 */}
          <div className="relative z-10 flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 bg-moss-50/80 backdrop-blur-sm text-moss-700 px-4 py-2 rounded-full text-sm font-medium border border-moss-100/50 shadow-sm">
              <Sparkles className="w-4 h-4 text-moss-500" />
              Stay in the Loop
              <span className="w-1 h-1 rounded-full bg-moss-300" />
              <Leaf className="w-3.5 h-3.5 text-moss-400" />
            </span>
          </div>

          <div className="relative z-10 max-w-xl mx-auto text-center">
            <h2 className="text-display-md font-bold text-forest-800 mb-3 text-balance">
              Join the <span className="text-moss-600">KAPOW Community</span>
            </h2>

            <p className="text-base sm:text-lg text-forest-500/80 leading-relaxed mb-8">
  Subscribe for exclusive updates, flavour drops, and product news.
  No spam, just pure goodness.
</p>

            {/* 表单 */}
            <form onSubmit={handleSubmit} noValidate className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-forest-300 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  disabled={status === 'loading' || status === 'success'}
                  className={`
                    w-full pl-12 pr-4 py-3.5 rounded-xl border bg-cream-50/50 text-forest-800 placeholder-forest-300
                    focus:outline-none focus:ring-2 focus:border-transparent focus:bg-white transition-all duration-200
                    ${status === 'error' ? 'border-rose-400 focus:ring-rose-400/60' : ''}
                    ${status === 'success' ? 'border-moss-400 focus:ring-moss-400/60' : 'border-sage-200 focus:ring-moss-400/60'}
                    ${status === 'loading' || status === 'success' ? 'opacity-70 cursor-not-allowed' : ''}
                  `}
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={`
                  inline-flex items-center justify-center gap-2 text-white font-semibold py-3.5 px-7 rounded-xl
                  transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]
                  ${status === 'loading' ? 'bg-moss-400 cursor-wait' : ''}
                  ${status === 'success' ? 'bg-moss-500 cursor-default' : 'bg-moss-600 hover:bg-moss-700 shadow-moss-600/20 hover:shadow-moss-600/30'}
                  ${status === 'idle' ? 'bg-moss-600 hover:bg-moss-700 shadow-moss-600/20 hover:shadow-moss-600/30' : ''}
                  ${status === 'error' ? 'bg-moss-600 hover:bg-moss-700 shadow-moss-600/20 hover:shadow-moss-600/30' : ''}
                `}
              >
                {status === 'loading' ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Subscribing...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    Subscribe
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* 状态提示 */}
            <AnimatePresence mode="wait">
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  exit={{ opacity: 0, y: -10, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 overflow-hidden"
                >
                  <div className="flex items-center justify-center gap-2 text-sm text-moss-700 bg-moss-50/80 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-moss-200/60">
                    <CheckCircle className="w-4 h-4 text-moss-500 shrink-0" />
                    <span>Thanks for subscribing! 🎉 Check your inbox soon.</span>
                  </div>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  exit={{ opacity: 0, y: -10, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 overflow-hidden"
                >
                  <div className="flex items-center justify-center gap-2 text-sm text-rose-700 bg-rose-50/80 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-rose-200/60">
                    <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* 底部信任提示 */}
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-forest-400/70">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-moss-400" />
              No spam, unsubscribe anytime.
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-moss-400" />
              Powered by clean vibes.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}