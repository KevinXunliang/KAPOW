// src/components/Layout.tsx
import type { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { AgeGate } from './AgeGate';
import { ScrollToTop } from './ScrollToTop';
import { WarningBanner } from './WarningBanner';
import { ScrollToTopButton } from './ScrollToTopButton';
import { NavbarThemeProvider } from '@/context/NavbarThemeContext';
import { EventWidget } from './EventWidget';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <NavbarThemeProvider>
      <WarningBanner />
      <ScrollToTop />
      <AgeGate />
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <ScrollToTopButton />
      <EventWidget />
    </NavbarThemeProvider>
  );
}