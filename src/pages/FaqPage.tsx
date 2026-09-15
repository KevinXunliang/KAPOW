// src/pages/FaqPage.tsx

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Plus,
  Package,
  ShieldCheck,
  Zap,
  Layers,
  MessageCircle,
  ChevronRight,
  Mail,
  Sparkles,
} from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';

// ============================================================
// FAQ 分类
// ============================================================
type FaqCategory = 'All' | 'Product' | 'Usage' | 'Shipping' | 'Verification' | 'Service';

type FaqItem = {
  id: number;
  category: Exclude<FaqCategory, 'All'>;
  question: string;
  answer: string;
};

const faqCategories: { key: FaqCategory; label: string; icon: typeof Package }[] = [
  { key: 'All', label: 'All', icon: Sparkles },
  { key: 'Product', label: 'Product', icon: Package },
  { key: 'Usage', label: 'Usage', icon: Zap },
  { key: 'Shipping', label: 'Shipping', icon: Package },
  { key: 'Verification', label: 'Verification', icon: ShieldCheck },
  { key: 'Service', label: 'Service', icon: Layers },
];

const faqs: FaqItem[] = [
  // ============================================================
  // Product
  // ============================================================
  {
    id: 1,
    category: 'Product',
    question: 'What is the KAPOW 85K?',
    answer:
      'The KAPOW 85K is a premium disposable vape designed for consistent flavour and lasting performance. It delivers up to 85,000 puffs, features a 950mAh rechargeable battery, dual mesh coils, and a transparent tank so you always know how much e-liquid remains.',
  },
  {
    id: 2,
    category: 'Product',
    question: 'How many flavours are available?',
    answer:
      'KAPOW 85K comes in 12 signature flavours, ranging from glacier-fresh mint and menthol blends to vibrant fruit and berry profiles. Each flavour is crafted for a pure, uncompromising taste.',
  },
  {
    id: 3,
    category: 'Product',
    question: 'What are the technical specifications?',
    answer:
      'Puff Count: up to 85,000 | Battery: 950mAh rechargeable | Charging: Type-C fast charge | Button: Side button with ECO / BOOST / TURBO modes | Shell Finish: Ice Crack | Airflow: Adjustable | Dimensions: 92 × 53 × 29mm | Overcharge Protection: Supported.',
  },
  {
    id: 4,
    category: 'Product',
    question: 'What does the "Ice Crack" finish mean?',
    answer:
      'Every KAPOW 85K features a distinctive ice-crack shell finish — a textured surface that catches and refracts light. No two devices are exactly alike, giving each one a unique, premium character.',
  },
  {
    id: 5,
    category: 'Product',
    question: 'What is dual mesh technology?',
    answer:
      'Dual mesh coils use two layers of fine mesh to distribute heat evenly across the entire wicking surface. This ensures consistent, full-bodied flavour from your very first puff to your 85,000th — no dry hits, no flavour drop-off.',
  },

  // ============================================================
  // Usage
  // ============================================================
  {
    id: 6,
    category: 'Usage',
    question: 'How do I use the KAPOW 85K?',
    answer:
      'Simply inhale from the mouthpiece to activate the device. A side button lets you cycle through three power modes — ECO for extended sessions, BOOST for a richer hit, and TURBO for maximum intensity. A smart screen shows your battery life and current mode.',
  },
  {
    id: 7,
    category: 'Usage',
    question: 'How do I switch between ECO, BOOST, and TURBO modes?',
    answer:
      'Press the side button once to cycle through the three modes. ECO delivers the most puffs per charge, BOOST provides fuller flavour, and TURBO is for maximum intensity. Your current mode is displayed on the smart screen.',
  },
  {
    id: 8,
    category: 'Usage',
    question: 'How do I charge the device?',
    answer:
      'Use the included Type-C cable to charge your KAPOW 85K. Built-in overcharge protection means you can plug it in and walk away without a second thought. A full charge takes about 60–90 minutes.',
  },
  {
    id: 9,
    category: 'Usage',
    question: 'Can I adjust the airflow?',
    answer:
      'Yes. KAPOW 85K features an adjustable airflow slider, letting you fine-tune your draw from a tight mouth-to-lung experience to a looser direct-lung inhale.',
  },
  {
    id: 10,
    category: 'Usage',
    question: 'What should I do when the tank runs low?',
    answer:
      'The transparent tank lets you see exactly how much e-liquid remains. When it\'s nearly empty, it\'s time to replace the device. Please dispose of your device at an authorized e-waste recycling point — never in regular household trash.',
  },

  // ============================================================
  // Shipping
  // ============================================================
  {
    id: 11,
    category: 'Shipping',
    question: 'Where can I buy the KAPOW 85K?',
    answer:
      'KAPOW 85K is available through select retailers. Visit our Contact page to find a retailer near you, or reach out to us for wholesale inquiries.',
  },
  {
    id: 12,
    category: 'Shipping',
    question: 'Do you ship internationally?',
    answer:
      'We currently work with a network of regional distributors. Availability varies by country. Please contact our team for details about shipping to your region.',
  },
  {
    id: 13,
    category: 'Shipping',
    question: 'How long does shipping take?',
    answer:
      'Shipping times depend on your location and the retailer you purchase from. For direct orders, standard delivery is typically 3–7 business days within the continental US.',
  },
  {
    id: 14,
    category: 'Shipping',
    question: 'What is your return policy?',
    answer:
      'Due to the nature of our products, we cannot accept returns on opened or used devices. If you receive a defective product, please contact our support team within 7 days of delivery for assistance.',
  },

  // ============================================================
  // Verification
  // ============================================================
  {
    id: 15,
    category: 'Verification',
    question: 'How do I verify my KAPOW product is authentic?',
    answer:
      'Every KAPOW 85K comes with a unique verification code printed on the back of the packaging. Visit our Verification page, scan the QR code or enter the code manually, and click "Verify Product" to confirm authenticity.',
  },
  {
    id: 16,
    category: 'Verification',
    question: 'Why does my verification code show as "already used"?',
    answer:
      'If your code has been verified before, it means the product may not be new or could be counterfeit. If you purchased it as new, please contact our support team immediately with your purchase details.',
  },
  {
    id: 17,
    category: 'Verification',
    question: 'My verification code is invalid. What should I do?',
    answer:
      'First, double-check that you\'ve entered the code exactly as it appears on your packaging — codes are case-sensitive. If the code still doesn\'t work, please contact our support team with a photo of the packaging for assistance.',
  },
  {
    id: 18,
    category: 'Verification',
    question: 'Can I verify the same product multiple times?',
    answer:
      'Yes. Each time you verify, we\'ll show you how many times the code has been used and the date it was first verified. This helps you identify whether a product is genuinely new.',
  },

  // ============================================================
  // Service
  // ============================================================
  {
    id: 19,
    category: 'Service',
    question: 'What if my device has a defect?',
    answer:
      'Every KAPOW 85K is covered by a 30-day warranty from the date of purchase against manufacturing defects. Please contact our support team with your proof of purchase and a description of the issue.',
  },
  {
    id: 20,
    category: 'Service',
    question: 'How do I contact customer support?',
    answer:
      'You can reach our support team through our Contact page, or email us directly at support@kapow.com. We respond to all inquiries within 1–2 business days.',
  },
  {
    id: 21,
    category: 'Service',
    question: 'Where can I find product documentation?',
    answer:
      'Product spec sheets, user manuals, brand assets, and marketing materials are available on our Download page.',
  },
  {
    id: 22,
    category: 'Service',
    question: 'Do you offer wholesale pricing?',
    answer:
      'Yes. If you\'re interested in becoming a KAPOW retail partner, please contact us through our Contact page and select "Wholesale" as your subject. Our team will follow up with pricing and program details.',
  },
];

// ============================================================
// 页面主组件
// ============================================================
export function FaqPage() {
  const [activeCategory, setActiveCategory] = useState<FaqCategory>('All');
  const [openId, setOpenId] = useState<number | null>(faqs[0].id);

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      return activeCategory === 'All' || faq.category === activeCategory;
    });
  }, [activeCategory]);

  const toggleOpen = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden gradient-mesh bg-cream-100">
        <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-moss-200/30 blur-3xl" />
        <div className="absolute bottom-0 -right-20 w-96 h-96 rounded-full bg-terracotta-200/20 blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-moss-100 text-moss-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <MessageCircle className="w-4 h-4" />
            Help Center
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-display-lg font-bold text-forest-800 text-balance"
          >
            Frequently Asked <span className="text-moss-600">Questions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-forest-500 leading-relaxed max-w-2xl mx-auto"
          >
            Everything you need to know about KAPOW 85K — product details,
            usage, verification, shipping, and service.
          </motion.p>
        </div>
      </section>

      {/* 分类筛选 */}
      <section className="py-12 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-2 justify-center"
          >
            {faqCategories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`
                    inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all
                    ${isActive
                      ? 'bg-moss-600 text-cream-50 shadow-md shadow-moss-600/20'
                      : 'bg-white text-forest-600 hover:bg-sage-100 border border-sage-200'
                    }
                  `}
                  aria-pressed={isActive}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {cat.label}
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* FAQ 列表 */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between text-sm text-forest-400">
            <span>
              Showing <strong className="text-forest-700">{filteredFaqs.length}</strong>{' '}
              {filteredFaqs.length === 1 ? 'answer' : 'answers'}
              {activeCategory !== 'All' && ` in ${activeCategory}`}
            </span>
            {activeCategory !== 'All' && (
              <button
                onClick={() => setActiveCategory('All')}
                className="text-moss-600 hover:text-moss-700 font-medium transition-colors"
              >
                Clear filter
              </button>
            )}
          </div>

          {filteredFaqs.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="space-y-3">
              {filteredFaqs.map((faq, index) => (
                <FaqAccordion
                  key={faq.id}
                  faq={faq}
                  isOpen={openId === faq.id}
                  onToggle={() => toggleOpen(faq.id)}
                  index={index}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 联系 CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-moss-600 to-forest-800 rounded-3xl p-8 sm:p-12 overflow-hidden text-center"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-moss-400/10 blur-3xl" />

            <div className="relative">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm mb-5">
                <MessageCircle className="w-7 h-7 text-moss-200" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-cream-50 mb-3 text-balance">
                Still have questions?
              </h2>

              <p className="text-cream-100/70 leading-relaxed max-w-lg mx-auto mb-8">
                Our team is here to help. Reach out and we'll get back to you as soon
                as possible.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-cream-50 hover:bg-cream-100 text-forest-800 font-semibold py-3.5 px-7 rounded-xl transition-all shadow-lg"
                >
                  <Mail className="w-4 h-4" />
                  Contact Support
                </a>
                <a
                  href="/verification"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-cream-50 font-semibold py-3.5 px-7 rounded-xl border border-white/20 transition-all backdrop-blur-sm"
                >
                  <ShieldCheck className="w-4 h-4" />
                  Verify a Product
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

// ============================================================
// FAQ 手风琴
// ============================================================
function FaqAccordion({
  faq,
  isOpen,
  onToggle,
  index,
}: {
  faq: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.3) }}
      className={`
        bg-white rounded-2xl border overflow-hidden transition-all duration-300
        ${isOpen
          ? 'border-moss-300 shadow-lg shadow-moss-600/5'
          : 'border-sage-200 hover:border-sage-300'
        }
      `}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-4 p-5 sm:p-6 text-left"
        aria-expanded={isOpen}
      >
        <span
          className={`
            hidden sm:inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full shrink-0 mt-0.5
            ${isOpen ? 'bg-moss-100 text-moss-700' : 'bg-sage-100 text-forest-600'}
          `}
        >
          {faq.category}
        </span>

        <span
          className={`
            flex-1 font-semibold text-left leading-snug transition-colors
            ${isOpen ? 'text-moss-700' : 'text-forest-800'}
          `}
        >
          {faq.question}
        </span>

        <span
          className={`
            shrink-0 flex items-center justify-center w-7 h-7 rounded-full transition-all duration-300
            ${isOpen
              ? 'bg-moss-600 text-cream-50 rotate-45'
              : 'bg-sage-100 text-forest-600'
            }
          `}
        >
          <Plus className="w-4 h-4" />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-6 pl-5 sm:pl-6">
              <div className="pt-1 border-t border-sage-100">
                <p className="pt-4 text-sm sm:text-base text-forest-500 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ============================================================
// 空状态
// ============================================================
function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-16"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-sage-100 mb-5">
        <MessageCircle className="w-8 h-8 text-forest-300" />
      </div>
      <h3 className="font-bold text-lg text-forest-800 mb-2">No answers here yet</h3>
      <p className="text-sm text-forest-500 mb-6 max-w-sm mx-auto">
        We don't have any answers in this category yet. Try another category or
        contact our team directly.
      </p>
      <a
        href="/contact"
        className="inline-flex items-center gap-2 text-sm font-semibold text-moss-600 hover:text-moss-700 transition-colors"
      >
        Contact our team
        <ChevronRight className="w-4 h-4" />
      </a>
    </motion.div>
  );
}