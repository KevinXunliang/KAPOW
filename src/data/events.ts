// src/data/events.ts

export type EventCategory = 'Promo' | 'Launch' | 'Eco' | 'Partnership';
export type EventStatus = 'active' | 'upcoming' | 'ended';

export type BrandEvent = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  category: EventCategory;
  status: EventStatus;
  featured: boolean;          // 是否在首页/挂件中展示
  startDate: string;          // ISO 格式
  endDate: string;
  heroGradient: string;       // 主视觉渐变
  accent: string;             // 强调色
  image: string;              // 主视觉图（可选）
  ctaLabel: string;
  ctaLink: string;
  tags: string[];             // 标签，如 ["Limited", "New"]
};

export const events: BrandEvent[] = [
  {
    id: 1,
    slug: 'summer-flavour-drop',
    title: 'Summer Flavour Drop',
    excerpt: '3 new limited-edition flavours join the KAPOW lineup.',
    description:
      'This summer, we\'re introducing three brand-new limited-edition flavours — Mango Glacier, Tropical Berry Blast, and Citrus Sunrise. Crafted with clean, non-nicotine ingredients, these flavours are available for a limited time only. Stock up before they\'re gone.',
    category: 'Launch',
    status: 'active',
    featured: true,
    startDate: '2026-06-01',
    endDate: '2026-08-31',
    heroGradient: 'linear-gradient(135deg, #f5cc94 0%, #e89060 100%)',
    accent: '#d47848',
    image: '/images/event.jpg',
    ctaLabel: 'Explore Flavours',
    ctaLink: '/product/kapow-85k#flavours',
    tags: ['Limited', 'New'],
  },
  {
    id: 2,
    slug: 'earth-month-2026',
    title: 'Earth Month 2026',
    excerpt: 'For every device recycled, we plant a tree.',
    description:
      'Throughout April, we\'re partnering with reforestation organizations to plant one tree for every KAPOW device recycled at any of our partner locations. Join us in building a cleaner future — one puff, one tree at a time.',
    category: 'Eco',
    status: 'upcoming',
    featured: true,
    startDate: '2026-04-01',
    endDate: '2026-04-30',
    heroGradient: 'linear-gradient(135deg, #86b99a 0%, #1f513a 100%)',
    accent: '#357d57',
    image: '/images/event-earth.jpg',
    ctaLabel: 'Learn More',
    ctaLink: '/about',
    tags: ['Sustainability'],
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
    image: '/images/event-launch.jpg',
    ctaLabel: 'View Recap',
    ctaLink: '/blog',
    tags: ['Launch'],
  },
];

// 获取当前主打活动（用于首页和挂件）
export const getFeaturedEvent = (): BrandEvent | undefined =>
  events.find((e) => e.featured && e.status === 'active') ??
  events.find((e) => e.featured && e.status === 'upcoming');

// 按状态筛选
export const getEventsByStatus = (status: EventStatus): BrandEvent[] =>
  events.filter((e) => e.status === status);