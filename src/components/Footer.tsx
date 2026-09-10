// src/components/Footer.tsx

import { Link } from 'react-router-dom';
import { Instagram, Facebook, Leaf } from 'lucide-react';
import { navLinks, type NavLink } from '@/data/content';

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.73 2.89 2.89 0 0 1 2.31-4.55c.3 0 .6.05.88.13V9.4a6.33 6.33 0 0 0-.88-.06A6.34 6.34 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7.03a8.27 8.27 0 0 0 4.83 1.54V6.69h-1.1z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// ============================================================
// 从 navLinks 派生 Footer 列
// 有 children 的导航项 → 独立一列（用 label 作标题，children 作链接）
// 无 children 的导航项 → 汇总到 "Company" 列
// ============================================================
function getFooterColumns(): { title: string; links: { label: string; path: string }[] }[] {
  const columns: { title: string; links: { label: string; path: string }[] }[] = [];

  // 有子菜单的导航项 → 独立列
  navLinks.forEach((link: NavLink) => {
    if (link.children && link.children.length > 0) {
      columns.push({
        title: link.label,
        links: link.children.map((child) => ({
          label: child.label,
          path: child.path || '#',
        })),
      });
    }
  });

  // 无子菜单的导航项 → 归入 "Company" 列
  const standaloneLinks = navLinks
    .filter((link: NavLink) => !link.children || link.children.length === 0)
    .filter((link: NavLink) => link.path !== '/') // 排除 "Home" 
    .map((link: NavLink) => ({
      label: link.label,
      path: link.path || '#',
    }));

  if (standaloneLinks.length > 0) {
    columns.push({
      title: 'Company',
      links: standaloneLinks,
    });
  }

  return columns;
}

export function Footer() {
  const footerColumns = getFooterColumns();

  return (
    <footer className="bg-forest-900 text-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 顶部区域 */}
        <div className="py-16 grid gap-12 lg:grid-cols-5">
          {/* 品牌区（占 2 列） */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-moss-500 text-cream-50 font-bold text-sm">
                K
              </span>
              <span className="font-bold text-xl tracking-tight">KAPOW</span>
            </Link>

            <p className="text-cream-100/70 text-sm leading-relaxed max-w-md mb-6">
              Pure flavour. Zero nicotine. Zero compromise. KAPOW is an eco-conscious,
              wellness-forward disposable vape designed for those who choose clean enjoyment
              without compromise.
            </p>

            {/* 社交图标 */}
            <div className="flex items-center gap-3">
              {[
                { Icon: Instagram, label: 'Instagram' },
                { Icon: TikTokIcon, label: 'TikTok' },
                { Icon: Facebook, label: 'Facebook' },
                { Icon: XIcon, label: 'X' },
              ].map(({ Icon: I, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-forest-800 hover:bg-moss-600 flex items-center justify-center transition-colors"
                >
                  <I className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* 导航列（自动从 navLinks 派生） */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold text-sm tracking-wide uppercase text-cream-100/90 mb-4">
                {column.title}
              </h3>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}`}>
                    <Link
                      to={link.path}
                      className="text-sm text-cream-100/70 hover:text-moss-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 品牌承诺条 */}
        <div className="border-t border-forest-800 py-6">
          <div className="flex items-center justify-center gap-2 text-sm text-cream-100/70">
            <Leaf className="w-4 h-4 text-moss-400 shrink-0" />
            <p>KAPOW is committed to a cleaner, greener future — one puff at a time.</p>
          </div>
        </div>

        {/* 底部版权信息 */}
        <div className="border-t border-forest-800 py-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-cream-100/50">
              © 2026 KAPOW. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-cream-100/50">
              <a href="/privacy-policy" className="hover:text-moss-300 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="hover:text-moss-300 transition-colors">
                Terms of Service
              </a>
              <a href="/age-policy" className="hover:text-moss-300 transition-colors">
                Age Policy
              </a>
              <a href="/warranty-policy" className="hover:text-moss-300 transition-colors">
                Warranty Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}