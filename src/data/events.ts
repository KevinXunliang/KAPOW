// src/data/events.ts

export type EventCategory = 'Promo' | 'Launch' | 'Partnership' | 'Community';
export type EventStatus = 'active' | 'upcoming' | 'ended';

export type BrandEvent = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  category: EventCategory;
  status: EventStatus;
  featured: boolean;
  startDate: string;
  endDate: string;
  heroGradient: string;
  accent: string;
  image: string;
  ctaLabel: string;
  ctaLink: string;
  tags: string[];
};

export const events: BrandEvent[] = [
  {
    id: 1,
    slug: 'summer-flavour-drop',
    title: 'Summer Flavour Drop',
    excerpt: '3 new limited-edition flavours join the KAPOW lineup.',
    description:
      'This summer, we\'re introducing three brand-new limited-edition flavours — Mango Glacier, Tropical Berry Blast, and Citrus Sunrise. Crafted for a pure, uncompromising taste, these flavours are available for a limited time only. Stock up before they\'re gone.',
    category: 'Launch',
    status: 'active',
    featured: true,
    startDate: '2026-06-01',
    endDate: '2026-08-31',
    heroGradient: 'linear-gradient(135deg, #f5cc94 0%, #e89060 100%)',
    accent: '#d47848',
    image: '/images/events/summer-flavour-drop.png',
    ctaLabel: 'Explore Flavours',
    ctaLink: '/product/kapow-85k#flavours',
    tags: ['Limited', 'New'],
  },
  {
    id: 2,
    slug: 'flavour-week-2026',
    title: 'Flavour Week 2026',
    excerpt: 'A week-long celebration of flavour, craft, and community.',
    description:
      'Join us for a week-long celebration of everything flavour. Exclusive in-store events, giveaways, and a first look at what\'s next for KAPOW. Visit a participating retailer for details and to experience our full flavour collection.',
    category: 'Community',
    status: 'upcoming',
    featured: true,
    startDate: '2026-09-20',
    endDate: '2026-09-27',
    heroGradient: 'linear-gradient(135deg, #86b99a 0%, #1f513a 100%)',
    accent: '#357d57',
    image: '/images/events/flavour-week-2026.png',
    ctaLabel: 'Learn More',
    ctaLink: '/blog',
    tags: ['Community', 'Flavour'],
  },
  {
    id: 3,
    slug: 'launch-week-2026',
    title: 'KAPOW 85K Launch Week',
    excerpt: 'Celebrate the launch of our flagship device.',
    description:
      'A week-long celebration of the KAPOW 85K launch. Exclusive in-store events, giveaways, and a first look at what\'s next for KAPOW. Visit a participating retailer for details.',
    category: 'Launch',
    status: 'ended',
    featured: false,
    startDate: '2026-01-15',
    endDate: '2026-01-22',
    heroGradient: 'linear-gradient(135deg, #a8c5f5 0%, #5b8de8 100%)',
    accent: '#4277d4',
    image: '/images/events/launch-week-2026.png',
    ctaLabel: 'View Recap',
    ctaLink: '/blog',
    tags: ['Launch'],
  },
];

// 获取当前主打活动
export const getFeaturedEvent = (): BrandEvent | undefined =>
  events.find((e) => e.featured && e.status === 'active') ??
  events.find((e) => e.featured && e.status === 'upcoming');

// 按状态筛选
export const getEventsByStatus = (status: EventStatus): BrandEvent[] =>
  events.filter((e) => e.status === status);