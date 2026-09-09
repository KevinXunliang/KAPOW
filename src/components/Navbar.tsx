// src/components/Navbar.tsx
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
import { navLinks } from '@/data/content';
import { useNavbarTheme } from '@/context/NavbarThemeContext'; // ← 新增

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { theme } = useNavbarTheme(); // ← 获取主题

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // 有效主题：滚动后强制使用浅色（深色文字），否则使用 context 主题
  const effectiveTheme = scrolled ? 'light' : theme;

  return (
    <header
      className={`fixed top-10 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-50/90 backdrop-blur-lg shadow-sm border-b border-sage-200/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" aria-label="KAPOW home">
            <span
              className={`inline-flex items-center justify-center w-9 h-9 rounded-xl font-bold text-sm group-hover:scale-105 transition-transform ${
                effectiveTheme === 'dark'
                  ? 'bg-white/20 text-white'
                  : 'bg-moss-600 text-cream-50'
              }`}
            >
              K
            </span>
            <span
              className={`font-bold text-xl tracking-tight transition-colors ${
                effectiveTheme === 'dark' ? 'text-white' : 'text-forest-800'
              }`}
            >
              KAPOW
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? effectiveTheme === 'dark'
                        ? 'text-white bg-white/20'
                        : 'text-moss-700 bg-moss-100'
                      : effectiveTheme === 'dark'
                      ? 'text-white/80 hover:text-white hover:bg-white/10'
                      : 'text-forest-700 hover:text-moss-700 hover:bg-sage-100'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Eco badge */}
          <div className="hidden lg:flex items-center gap-4">
            <span
              className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
                effectiveTheme === 'dark'
                  ? 'text-white/90 bg-white/10 border-white/20'
                  : 'text-moss-600 bg-moss-50 border-moss-200'
              }`}
            >
              <Leaf className="w-3.5 h-3.5" />
              Non-Nicotine · Eco-Conscious
            </span>
          </div>

          {/* Mobile toggle */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              effectiveTheme === 'dark'
                ? 'text-white hover:bg-white/10'
                : 'text-forest-700 hover:bg-sage-100'
            }`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className={`lg:hidden border-t ${
            effectiveTheme === 'dark'
              ? 'bg-black/40 backdrop-blur-lg border-white/10'
              : 'bg-cream-50/95 backdrop-blur-lg border-sage-200/50'
          }`}
        >
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? effectiveTheme === 'dark'
                        ? 'text-white bg-white/20'
                        : 'text-moss-700 bg-moss-100'
                      : effectiveTheme === 'dark'
                      ? 'text-white/80 hover:text-white hover:bg-white/10'
                      : 'text-forest-700 hover:bg-sage-100'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-2">
              <span
                className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border ${
                  effectiveTheme === 'dark'
                    ? 'text-white/90 bg-white/10 border-white/20'
                    : 'text-moss-600 bg-moss-50 border-moss-200'
                }`}
              >
                <Leaf className="w-3.5 h-3.5" />
                Non-Nicotine · Eco-Conscious
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}