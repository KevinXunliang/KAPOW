// src/components/Breadcrumbs.tsx

import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { blogPosts } from '@/data/content';
import { events } from '@/data/events';

// ============================================================
// 路径段 → 显示名称 的映射表
// ============================================================
const pathLabels: Record<string, string> = {
  '': 'Home',
  'product': 'Product',
  'kapow-85k': 'KAPOW 85K',
  'about': 'About Us',
  'blog': 'Blog',
  'contact': 'Contact Us',
  'verification': 'Verification',
  'faq': 'FAQs',
  'faqs': 'FAQs',
  'download': 'Download',
  'events': 'Events',
  'privacy': 'Privacy Policy',
  'terms': 'Terms of Service',
  'age-policy': 'Age Policy',
  'warranty': 'Warranty',
};

// ============================================================
// 面包屑项类型
// ============================================================
type Crumb = {
  label: string;
  path: string;
};

// ============================================================
// 根据当前路径生成面包屑
// ============================================================
function generateCrumbs(pathname: string): Crumb[] {
  const segments = pathname.split('/').filter(Boolean);
  const crumbs: Crumb[] = [{ label: 'Home', path: '/' }];

  let currentPath = '';

  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;

    // 处理动态路由（博客详情页）
    if (segments[index - 1] === 'blog' && segment !== 'blog') {
      const post = blogPosts.find((p) => p.slug === segment);
      crumbs.push({
        label: post?.title ?? segment,
        path: currentPath,
      });
      return;
    }

    // 处理动态路由（活动详情页）
    if (segments[index - 1] === 'events' && segment !== 'events') {
      const event = events.find((e) => e.slug === segment);
      crumbs.push({
        label: event?.title ?? segment,
        path: currentPath,
      });
      return;
    }

    // 普通路径，从映射表获取
    const label =
      pathLabels[segment] ||
      segment
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    crumbs.push({
      label,
      path: currentPath,
    });
  });

  return crumbs;
}

// ============================================================
// 面包屑主组件
// ============================================================
export function Breadcrumbs() {
  const { pathname } = useLocation();

  // 首页不显示面包屑
  if (pathname === '/') return null;

  const crumbs = generateCrumbs(pathname);

  return (
    <div className="bg-cream-50 border-b border-sage-200/50 pt-[120px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 py-3 text-sm overflow-x-auto scrollbar-hide"
        >
          {crumbs.map((crumb, index) => {
            const isLast = index === crumbs.length - 1;
            return (
              <div
                key={`${crumb.path}-${index}`}
                className="flex items-center gap-1.5 shrink-0"
              >
                {/* 分隔符 */}
                {index > 0 && (
                  <ChevronRight className="w-3.5 h-3.5 text-forest-300 shrink-0" />
                )}

                {/* 面包屑项 */}
                {isLast ? (
                  <span
                    className="text-forest-800 font-medium truncate max-w-[200px] lg:max-w-md"
                    aria-current="page"
                  >
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    to={crumb.path}
                    className="
                      inline-flex items-center gap-1.5 text-forest-500
                      hover:text-moss-600 transition-colors truncate max-w-[150px]
                    "
                  >
                    {/* 首页图标 */}
                    {index === 0 && <Home className="w-3.5 h-3.5 shrink-0" />}
                    <span className="truncate">{crumb.label}</span>
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}