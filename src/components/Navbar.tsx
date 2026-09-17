// src/components/Navbar.tsx

import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, ChevronDown, ArrowRight } from 'lucide-react';
import { navLinks, type NavLink } from '@/data/content';
import { useNavbarTheme } from '@/context/NavbarThemeContext';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [navHeight, setNavHeight] = useState(0);
  const location = useLocation();
  const { theme } = useNavbarTheme();
  const closeTimeoutRef = useRef<number | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);

  // 仅保留滚动状态用于其他逻辑（如阴影），但不再影响文字颜色
  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.getBoundingClientRect().height);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const handleMouseEnter = (label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const isActive = (path: string) => location.pathname === path;

  const hasActiveChild = (children: NavLink[] | undefined) => {
    if (!children) return false;
    return children.some((child) => location.pathname === child.path);
  };

  // ============================================================
  // 固定纯色样式：纯白背景，深色文字
  // ============================================================
  const bgClass = 'bg-white';
  const borderClass = 'border-sage-200';
  const textClass = 'text-forest-800';
  const textMutedClass = 'text-forest-600';
  const textActiveClass = 'text-moss-700';
  const bgHoverClass = 'hover:bg-sage-100';
  const bgActiveClass = 'bg-moss-100';
  const ecoBadgeClass = 'text-moss-600 bg-moss-50 border-moss-200';

  // 二级菜单固定样式
  const dropdownBgClass = bgClass;
  const dropdownBorderClass = 'border-sage-200';
  const dropdownTextClass = textClass;
  const dropdownSubTextClass = 'text-forest-400/70';
  const dropdownHoverTextClass = 'hover:text-moss-600';

  // Logo 固定样式
  const logoSpanClass = 'bg-moss-600 text-cream-50';

  // ============================================================
  // 桌面导航渲染
  // ============================================================
  const renderDesktopNav = () => {
    return navLinks.map((link) => {
      const hasChildren = link.children && link.children.length > 0;
      const isDropdownOpen = openDropdown === link.label;
      const isLinkActive = link.path ? isActive(link.path) : false;
      const isChildActive = hasChildren ? hasActiveChild(link.children) : false;
      const isActiveState = isLinkActive || isChildActive;

      if (hasChildren) {
        return (
          <div
            key={link.label}
            className="relative"
            onMouseEnter={() => handleMouseEnter(link.label)}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`
                flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors
                ${isActiveState
                  ? `${textActiveClass} ${bgActiveClass}`
                  : `${textMutedClass} ${bgHoverClass}`
                }
              `}
            >
              {link.label}
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  isDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>
        );
      }

      return (
        <Link
          key={link.label}
          to={link.path || '#'}
          className={`
            px-4 py-2 rounded-lg text-sm font-medium transition-colors
            ${isActiveState
              ? `${textActiveClass} ${bgActiveClass}`
              : `${textMutedClass} ${bgHoverClass}`
            }
          `}
        >
          {link.label}
        </Link>
      );
    });
  };

  // ============================================================
  // 移动端导航
  // ============================================================
  const renderMobileNav = () => {
    return navLinks.map((link) => {
      const hasChildren = link.children && link.children.length > 0;
      const isDropdownOpen = openDropdown === link.label;
      const isLinkActive = link.path ? isActive(link.path) : false;
      const isChildActive = hasChildren ? hasActiveChild(link.children) : false;
      const isActiveState = isLinkActive || isChildActive;

      if (hasChildren) {
        return (
          <div key={link.label} className="border-b border-sage-100/50 last:border-0">
            <button
              onClick={() => toggleDropdown(link.label)}
              className={`
                w-full flex items-center justify-between px-4 py-3.5 text-sm font-medium transition-colors
                ${isActiveState ? textActiveClass : textMutedClass}
              `}
            >
              <span>{link.label}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isDropdownOpen && (
              <div className="pl-4 pb-3 space-y-1">
                {link.children?.map((child) => {
                  const isChildActive = isActive(child.path || '');
                  return (
                    <Link
                      key={child.label}
                      to={child.path || '#'}
                      className={`
                        block px-4 py-2.5 text-sm rounded-lg transition-colors
                        ${isChildActive
                          ? `${textActiveClass} ${bgActiveClass}`
                          : `${textMutedClass} ${bgHoverClass}`
                        }
                      `}
                    >
                      {child.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        );
      }

      return (
        <Link
          key={link.label}
          to={link.path || '#'}
          className={`
            block px-4 py-3.5 rounded-lg text-sm font-medium transition-colors
            ${isActiveState
              ? `${textActiveClass} ${bgActiveClass}`
              : `${textMutedClass} ${bgHoverClass}`
            }
          `}
        >
          {link.label}
        </Link>
      );
    });
  };

  const getActiveDropdownContent = () => {
    if (!openDropdown) return null;
    const link = navLinks.find((l) => l.label === openDropdown);
    if (!link || !link.children) return null;
    return { label: link.label, children: link.children };
  };

  const activeDropdown = getActiveDropdownContent();

  return (
    <header
      ref={navRef}
      className={`
        fixed top-10 inset-x-0 z-40 transition-all duration-300
        ${bgClass} border-b ${borderClass}
      `}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" aria-label="KAPOW home">
            <span
              className={`
                inline-flex items-center justify-center w-9 h-9 rounded-xl font-bold text-sm
                group-hover:scale-105 transition-transform
                ${logoSpanClass}
              `}
            >
              K
            </span>
            <span className={`font-bold text-xl tracking-tight transition-colors ${textClass}`}>
              KAPOW
            </span>
          </Link>

          {/* 桌面导航 */}
          <div className="hidden lg:flex items-center gap-1">
            {renderDesktopNav()}
          </div>

          {/* Eco 标签 */}
          <div className="hidden lg:flex items-center gap-4">
            <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${ecoBadgeClass}`}>
              <Sparkles className="w-3.5 h-3.5" />
              Premium Vape · Crafted for Flavour
            </span>
          </div>

          {/* 移动端按钮 */}
          <button
            className={`
              lg:hidden p-2 rounded-lg transition-colors
              text-forest-700 hover:bg-sage-100
            `}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* 移动端菜单 */}
      {mobileOpen && (
        <div className={`lg:hidden border-t ${borderClass} ${bgClass}`}>
          <div className="px-4 py-3 space-y-0.5">
            {renderMobileNav()}
            <div className="pt-3 mt-3 border-t border-sage-100/50">
              <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border ${ecoBadgeClass}`}>
                <Sparkles className="w-3.5 h-3.5" />
                Premium Vape · Crafted for Flavour
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          全屏宽下拉菜单 - 纯白背景，无毛玻璃
          ============================================================ */}
      {activeDropdown && !mobileOpen && (
        <div
          className={`absolute left-0 right-0 shadow-xl shadow-forest-900/5 border-t z-50 transition-colors duration-300 ${dropdownBgClass} ${dropdownBorderClass}`}
          style={{ top: navHeight || 80 }}
          onMouseEnter={() => {
            if (closeTimeoutRef.current) {
              clearTimeout(closeTimeoutRef.current);
              closeTimeoutRef.current = null;
            }
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex items-start justify-start">
              {activeDropdown.label === 'Product' ? (
                // ================================================
                // Product 下拉：产品卡片 + Discover More
                // ================================================
                <>
                  {activeDropdown.children
                    .filter((child) => child.label === 'KAPOW 85K')
                    .map((child) => (
                      <Link
                        key={child.label}
                        to={child.path || '#'}
                        className={`group flex-shrink-0 w-[140px] mr-8 ${dropdownTextClass}`}
                      >
                        <div className="aspect-square rounded-xl overflow-hidden relative">
                          <img
                            src="/images/image.png"
                            alt={child.label}
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement!;
                              parent.style.background = 'linear-gradient(135deg, #daeadf, #b6d5c1)';
                              const fallback = document.createElement('span');
                              fallback.className =
                                'w-full h-full flex items-center justify-center text-5xl font-bold text-moss-400/50';
                              fallback.textContent = child.label.charAt(0);
                              parent.appendChild(fallback);
                            }}
                          />
                          <span className="absolute top-2 left-2 text-[10px] font-bold text-white bg-red-500 px-1.5 py-0.5 rounded-full">
                            NEW
                          </span>
                        </div>
                        <div className="text-center mt-3">
                          <span className={`font-semibold text-sm transition-colors ${dropdownHoverTextClass}`}>
                            {child.label}
                          </span>
                        </div>
                      </Link>
                    ))}

                  {activeDropdown.children
                    .filter((child) => child.label === 'Discover More')
                    .map((child) => (
                      <Link
                        key={child.label}
                        to={child.path || '#'}
                        className={`flex flex-col items-start justify-center min-h-[140px] group ${dropdownTextClass}`}
                      >
                        <span className={`text-xl font-semibold transition-colors ${dropdownHoverTextClass}`}>
                          {child.label}
                        </span>
                        <span className={`text-sm ${dropdownSubTextClass} mt-1`}>
                          Explore our full range
                        </span>
                        <ArrowRight className="w-5 h-5 mt-2 transition-transform group-hover:translate-x-1 text-moss-400" />
                      </Link>
                    ))}
                </>
              ) : (
                // ================================================
                // 其他下拉（Support等）：文字菜单，增强悬停交互
                // ================================================
                <div className="flex items-center gap-8 py-2 flex-wrap">
    {activeDropdown.children.map((child) => {
      const isChildActive = isActive(child.path || '');
      return (
        <Link
          key={child.label}
          to={child.path || '#'}
          className={`
            group relative py-2 text-sm transition-colors duration-200
            ${isChildActive
              ? 'text-moss-600 font-semibold'
              : 'text-forest-600 hover:text-moss-600'
            }
          `}
        >
          {child.label}

          {/* 下划线 - 激活时全宽，悬停时展开 */}
          <span
            className={`
              absolute bottom-0 left-0 h-0.5 rounded-full bg-moss-500
              transition-all duration-300 ease-out
              ${isChildActive ? 'w-full' : 'w-0 group-hover:w-full'}
            `}
          />
        </Link>
      );
    })}
  </div>
)}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}