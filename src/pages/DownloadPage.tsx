// src/pages/DownloadPage.tsx

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  Search,
  ExternalLink,
  Image as ImageIcon,
  Video,
  FileText,
  Store,
  Package,
  MessageCircle,
  Leaf,
  ShieldCheck,
} from 'lucide-react';

// ============================================================
// 数据结构 - 按产品组织，每个产品 4 个固定资源类别
// ============================================================
type ResourceCategory = 'Pics' | 'Videos' | 'Flyer' | 'Store Download';

type ProductDownload = {
  id: number;
  name: string;
  tagline: string;
  image: string;
  accent: string;
  status: 'available' | 'coming-soon';
  resources: {
    category: ResourceCategory;
    description: string;
    url: string; // Google Drive / Dropbox 等外部链接
  }[];
};

// 4 个固定资源类别的配置（图标、颜色等）
const resourceConfig: Record<
  ResourceCategory,
  { icon: typeof ImageIcon; label: string; accent: string; color: string }
> = {
  Pics: {
    icon: ImageIcon,
    label: 'Pics',
    accent: 'from-moss-100 to-sage-100',
    color: 'text-moss-600',
  },
  Videos: {
    icon: Video,
    label: 'Videos',
    accent: 'from-terracotta-100 to-cream-200',
    color: 'text-terracotta-600',
  },
  Flyer: {
    icon: FileText,
    label: 'Flyer',
    accent: 'from-sage-100 to-cream-100',
    color: 'text-forest-600',
  },
  'Store Download': {
    icon: Store,
    label: 'Store Download',
    accent: 'from-cream-100 to-moss-100',
    color: 'text-forest-700',
  },
};

const products: ProductDownload[] = [
  // ============================================================
  // KAPOW 85K
  // ============================================================
  {
    id: 1,
    name: 'KAPOW 85K',
    tagline: '85,000 puffs · 12 flavours · Zero nicotine',
    image: '/images/image.png',
    accent: 'from-moss-100 to-sage-100',
    status: 'available',
    resources: [
      {
        category: 'Pics',
        description: 'High-resolution product images',
        url: 'https://drive.google.com/drive/folders/your-pics-folder-id',
      },
      {
        category: 'Videos',
        description: 'Product demo & lifestyle videos',
        url: 'https://drive.google.com/drive/folders/your-videos-folder-id',
      },
      {
        category: 'Flyer',
        description: 'Print-ready promotional flyers',
        url: 'https://drive.google.com/drive/folders/your-flyer-folder-id',
      },
      {
        category: 'Store Download',
        description: 'Retail display & store materials',
        url: 'https://drive.google.com/drive/folders/your-store-folder-id',
      },
    ],
  },

  // ============================================================
  // 未来产品占位
  // ============================================================
  {
    id: 2,
    name: 'KAPOW Mini',
    tagline: 'Compact design · 25,000 puffs · Coming 2026',
    image: '/images/image.png',
    accent: 'from-terracotta-100 to-cream-200',
    status: 'coming-soon',
    resources: [],
  },
  {
    id: 3,
    name: 'KAPOW Pro',
    tagline: 'Premium line · Advanced controls · Coming 2026',
    image: '/images/image.png',
    accent: 'from-sage-100 to-cream-100',
    status: 'coming-soon',
    resources: [],
  },
];

// ============================================================
// 下载页面主组件
// ============================================================
export function DownloadPage() {
  const [activeProductId, setActiveProductId] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesProduct =
        activeProductId === 'all' || product.id === activeProductId;
      const matchesSearch =
        searchQuery.trim() === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesProduct && matchesSearch;
    });
  }, [activeProductId, searchQuery]);

  const productTabs = products.filter((p) => p.status === 'available');

  return (
    <>
      {/* Hero */}
      <section className="relative pt-44 pb-16 overflow-hidden gradient-mesh bg-cream-100">
        <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-moss-200/30 blur-3xl" />
        <div className="absolute bottom-0 -right-20 w-96 h-96 rounded-full bg-terracotta-200/20 blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-moss-100 text-moss-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Download className="w-4 h-4" />
            Resource Center
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-display-lg font-bold text-forest-800 text-balance"
          >
            Downloads & <span className="text-moss-600">Resources</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-forest-500 leading-relaxed max-w-2xl mx-auto"
          >
            Access product images, videos, flyers, and store materials for every KAPOW
            product — all in one place.
          </motion.p>
        </div>
      </section>

      {/* 筛选栏 */}
      <section className="py-8 bg-cream-50 border-b border-sage-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 搜索框 */}
          <div className="relative max-w-xl mx-auto mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-forest-300 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="
                w-full pl-12 pr-4 py-3 rounded-xl border border-sage-200 bg-white
                text-forest-800 placeholder-forest-300
                focus:outline-none focus:ring-2 focus:ring-moss-400 focus:border-transparent
                transition-all duration-200
              "
            />
          </div>

          {/* 产品筛选标签 */}
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setActiveProductId('all')}
              className={`
                inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all
                ${activeProductId === 'all'
                  ? 'bg-moss-600 text-cream-50 shadow-md shadow-moss-600/20'
                  : 'bg-white text-forest-600 hover:bg-sage-100 border border-sage-200'
                }
              `}
              aria-pressed={activeProductId === 'all'}
            >
              <Package className="w-3.5 h-3.5" />
              All Products
            </button>

            {productTabs.map((product) => {
              const isActive = activeProductId === product.id;
              return (
                <button
                  key={product.id}
                  onClick={() => setActiveProductId(product.id)}
                  className={`
                    inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all
                    ${isActive
                      ? 'bg-moss-600 text-cream-50 shadow-md shadow-moss-600/20'
                      : 'bg-white text-forest-600 hover:bg-sage-100 border border-sage-200'
                    }
                  `}
                  aria-pressed={isActive}
                >
                  {product.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 产品列表 */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="space-y-12">
              {filteredProducts.map((product, index) => (
                <ProductDownloadCard
                  key={product.id}
                  product={product}
                  index={index}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 帮助 CTA */}
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
                Need a specific file?
              </h2>

              <p className="text-cream-100/70 leading-relaxed max-w-lg mx-auto mb-8">
                Our team can provide additional assets for wholesale, press, or
                partnership inquiries.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-cream-50 hover:bg-cream-100 text-forest-800 font-semibold py-3.5 px-7 rounded-xl transition-all shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  Contact Us
                </a>
                <a
                  href="/faqs"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-cream-50 font-semibold py-3.5 px-7 rounded-xl border border-white/20 transition-all backdrop-blur-sm"
                >
                  <Leaf className="w-4 h-4" />
                  View FAQs
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
// 产品下载卡片
// ============================================================
function ProductDownloadCard({
  product,
  index,
}: {
  product: ProductDownload;
  index: number;
}) {
  const isComingSoon = product.status === 'coming-soon';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="
        bg-white rounded-3xl border border-sage-200
        hover:border-moss-300 hover:shadow-xl hover:shadow-moss-600/5
        transition-all duration-300 overflow-hidden
      "
    >
      <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 p-6 lg:p-8">
        {/* 左侧：产品图片 + 名称 */}
        <div className="lg:col-span-2">
          <div
            className={`relative aspect-square rounded-2xl bg-gradient-to-br ${product.accent} overflow-hidden`}
          >
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white/40 blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/30 blur-2xl" />

            <div className="absolute inset-0 flex items-center justify-center p-6">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain drop-shadow-[0_16px_24px_rgba(23,45,29,0.15)]"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>

            {isComingSoon && (
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-forest-800 text-cream-50 px-3 py-1.5 rounded-full text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-moss-300 animate-pulse" />
                Coming Soon
              </div>
            )}
          </div>

          <div className="mt-5 text-center lg:text-left">
            <h3 className="text-2xl font-bold text-forest-800 mb-1">
              {product.name}
            </h3>
            <p className="text-sm text-forest-500 leading-relaxed">
              {product.tagline}
            </p>
          </div>
        </div>

        {/* 右侧：4 个资源类别 */}
        <div className="lg:col-span-3">
          {isComingSoon ? (
            /* 即将推出状态 */
            <div className="h-full flex flex-col items-center justify-center text-center py-8 lg:py-0">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-sage-100 mb-4">
                <Package className="w-7 h-7 text-forest-300" />
              </div>
              <h4 className="font-bold text-forest-700 mb-2">
                Resources coming soon
              </h4>
              <p className="text-sm text-forest-500 max-w-xs leading-relaxed mb-5">
                Downloads for this product will be available closer to its launch.
                Subscribe for updates.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-moss-600 hover:text-moss-700 transition-colors"
              >
                Get notified
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ) : (
            /* 4 个资源类别网格 */
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-forest-700 text-sm">
                  Download Categories
                </h4>
                <span className="text-xs text-forest-400">
                  Opens in Google Drive
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {product.resources.map((resource, i) => {
                  const config = resourceConfig[resource.category];
                  const Icon = config.icon;
                  return (
                    <motion.a
                      key={resource.category}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 + i * 0.08 }}
                      className="
                        group relative flex flex-col p-4 rounded-2xl
                        border border-sage-200 hover:border-moss-300
                        bg-cream-50/50 hover:bg-white
                        transition-all duration-200
                        hover:shadow-md hover:shadow-moss-600/5
                      "
                    >
                      {/* 图标 */}
                      <div
                        className={`
                          inline-flex items-center justify-center w-11 h-11 rounded-xl mb-3
                          bg-gradient-to-br ${config.accent}
                          group-hover:scale-105 transition-transform duration-300
                        `}
                      >
                        <Icon className={`w-5 h-5 ${config.color}`} />
                      </div>

                      {/* 标题 */}
                      <div className="flex items-center gap-2 mb-1">
                        <h5 className="font-bold text-forest-800 text-sm group-hover:text-moss-700 transition-colors">
                          {config.label}
                        </h5>
                        <ExternalLink className="w-3 h-3 text-forest-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>

                      {/* 描述 */}
                      <p className="text-xs text-forest-500 leading-relaxed">
                        {resource.description}
                      </p>

                      {/* 底部小提示 */}
                      <div className="mt-3 pt-3 border-t border-sage-100 flex items-center justify-between">
                        <span className="text-[10px] font-medium text-forest-400 uppercase tracking-wider">
                          Open Folder
                        </span>
                        <Download className="w-3.5 h-3.5 text-moss-500 group-hover:translate-y-0.5 transition-transform" />
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* 底部提示 */}
              <div className="mt-4 flex items-center gap-2 text-xs text-forest-400">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span>
                  All files are hosted on Google Drive and open in a new tab.
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
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
        <Search className="w-8 h-8 text-forest-300" />
      </div>
      <h3 className="font-bold text-lg text-forest-800 mb-2">No products found</h3>
      <p className="text-sm text-forest-500 mb-6 max-w-sm mx-auto">
        We couldn't find any products matching your search. Try different keywords or
        browse all products.
      </p>
      <a
        href="/contact"
        className="inline-flex items-center gap-2 text-sm font-semibold text-moss-600 hover:text-moss-700 transition-colors"
      >
        Request a file
        <ExternalLink className="w-4 h-4" />
      </a>
    </motion.div>
  );
}