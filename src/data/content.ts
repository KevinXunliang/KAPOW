export type Flavour = {
  id: number;
  name: string;
  category: 'Mint & Menthol' | 'Fruity' | 'Berry' | 'Citrus';
  description: string;
  gradient: string;
  accent: string;
  icon: string;
};

export const flavours: Flavour[] = [
  {
    id: 1,
    name: 'Mint Menthol Ice',
    category: 'Mint & Menthol',
    description: 'A glacier-fresh blast of menthol wrapped in cool peppermint — crisp, clean, and invigorating.',
    gradient: 'linear-gradient(135deg, #b8e0d2 0%, #5fae93 100%)',
    accent: '#3e8f73',
    icon: 'snowflake',
  },
  {
    id: 2,
    name: 'Classic Mint',
    category: 'Mint & Menthol',
    description: 'Smooth, timeless spearmint with a naturally sweet finish — the mint you keep coming back to.',
    gradient: 'linear-gradient(135deg, #cdebd6 0%, #6fbf8b 100%)',
    accent: '#4ea068',
    icon: 'leaf',
  },
  {
    id: 3,
    name: 'Blue Raspberry Blue Rancher Ice',
    category: 'Berry',
    description: 'Blue raspberry candy sweetness with an icy rancher-shell crunch and a frosty exhale.',
    gradient: 'linear-gradient(135deg, #a8c5f5 0%, #5b8de8 100%)',
    accent: '#4277d4',
    icon: 'candy',
  },
  {
    id: 4,
    name: 'Blue Raspberry Watermelon',
    category: 'Berry',
    description: 'Tart blue raspberry poured over juicy summer watermelon — a sweet, hydrating fruit fusion.',
    gradient: 'linear-gradient(135deg, #a8c5f5 0%, #f4a6c0 100%)',
    accent: '#7b6fc7',
    icon: 'droplet',
  },
  {
    id: 5,
    name: 'Strawberry Ice',
    category: 'Berry',
    description: 'Sun-ripened strawberries with a glacial menthol finish — sweet, frosty, and endlessly satisfying.',
    gradient: 'linear-gradient(135deg, #f4a6c0 0%, #e0557a 100%)',
    accent: '#d43f66',
    icon: 'snowflake',
  },
  {
    id: 6,
    name: 'Lemon Heads',
    category: 'Citrus',
    description: 'Zesty lemon candy with a puckering sour-sweet shell — bright, playful, and citrus-forward.',
    gradient: 'linear-gradient(135deg, #f5e08c 0%, #e8c33d 100%)',
    accent: '#d4ad28',
    icon: 'citrus',
  },
  {
    id: 7,
    name: 'Apple Grape',
    category: 'Fruity',
    description: 'Crisp orchard apple blended with juicy vine-ripened grape — a fruit basket in every puff.',
    gradient: 'linear-gradient(135deg, #c5e0a0 0%, #8b5fc7 100%)',
    accent: '#7a4eb5',
    icon: 'apple',
  },
  {
    id: 8,
    name: 'Blue Raspberry Mellow',
    category: 'Berry',
    description: 'A softer, creamier blue raspberry — reduced tartness with a velvety smooth berry body.',
    gradient: 'linear-gradient(135deg, #b8c8e8 0%, #7b9ad6 100%)',
    accent: '#5e80c4',
    icon: 'cloud',
  },
  {
    id: 9,
    name: 'Punchy Peach',
    category: 'Fruity',
    description: 'Juicy, aromatic peach with a punch of ripe nectar — warm, sunny, and mouthwateringly sweet.',
    gradient: 'linear-gradient(135deg, #f5cc94 0%, #e89060 100%)',
    accent: '#d47848',
    icon: 'sun',
  },
  {
    id: 10,
    name: 'Cherry Strawberry',
    category: 'Berry',
    description: 'Dark cherry and wild strawberry tangled together — deep, jammy, and bright all at once.',
    gradient: 'linear-gradient(135deg, #e08a8a 0%, #c43d3d 100%)',
    accent: '#a82e2e',
    icon: 'cherry',
  },
  {
    id: 11,
    name: 'Blaze Dew',
    category: 'Citrus',
    description: 'A citrus-charged dew with electric energy — zesty, fizzy, and uniquely refreshing.',
    gradient: 'linear-gradient(135deg, #f5d96b 0%, #56b894 100%)',
    accent: '#3e9e7e',
    icon: 'zap',
  },
  {
    id: 12,
    name: 'Triple Berry Ice',
    category: 'Berry',
    description: 'Blackberry, blueberry, and raspberry layered with a cool icy finish — a triple-threat berry medley.',
    gradient: 'linear-gradient(135deg, #9b7fc4 0%, #5b3f8c 100%)',
    accent: '#4a3275',
    icon: 'snowflake',
  },
];

export type Feature = {
  id: number;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  icon: string;
};

export const features: Feature[] = [
  {
    id: 1,
    title: '85K-Puff Extended Satisfaction',
    shortTitle: '85K Puffs',
    description: 'Up to 85,000 puffs of non-nicotine enjoyment in a single device.',
    longDescription: 'The KAPOW 85K is engineered for longevity, delivering up to 85,000 puffs of pure, non-nicotine flavour. That means fewer replacements, less waste, and more value — a device designed to last while keeping its footprint small.',
    icon: 'wind',
  },
  {
    id: 2,
    title: 'Clear Tank. Visible Control',
    shortTitle: 'Clear Tank',
    description: 'See your e-liquid level at a glance — never caught off guard.',
    longDescription: 'Our transparent tank design lets you see exactly how much e-liquid remains, so you always know when it\'s time to recharge or replace. No guessing, no surprises — just clear, confident control over your experience.',
    icon: 'eye',
  },
  {
    id: 3,
    title: 'Smart Control at Your Fingertips',
    shortTitle: 'Smart Control',
    description: 'A side button cycles through ECO, BOOST, and TURBO power modes.',
    longDescription: 'A single side button gives you full command of your experience. Cycle through three power modes — ECO for extended sessions, BOOST for a richer hit, and TURBO for maximum intensity. A smart screen displays battery life and mode at a glance.',
    icon: 'settings',
  },
  {
    id: 4,
    title: 'Dual Mesh. Consistent Flavour',
    shortTitle: 'Dual Mesh',
    description: 'Dual mesh coils deliver even heating and bold flavour from first puff to last.',
    longDescription: 'Our dual mesh coil system ensures even heat distribution across the entire wicking surface. The result? Consistent, full-bodied flavour from your very first puff to your 85,000th — no dry hits, no flavour drop-off, just pure taste throughout.',
    icon: 'layers',
  },
  {
    id: 5,
    title: 'Ice Crack. Timeless Glow',
    shortTitle: 'Ice Crack',
    description: 'A unique ice-crack shell finish that catches light beautifully.',
    longDescription: 'Every KAPOW 85K features a distinctive ice-crack shell finish — no two devices are exactly alike. The textured surface catches and refracts light, giving each device a one-of-a-kind character that feels as premium as it looks.',
    icon: 'sparkles',
  },
  {
    id: 6,
    title: 'Worry-Free Fast Charge | 950mAh',
    shortTitle: 'Fast Charge',
    description: 'Type-C fast charging with built-in overcharge protection.',
    longDescription: 'The 950mAh battery powers through your day with ease, and Type-C fast charging gets you back to full in no time. Built-in overcharge protection means you can plug in and walk away without a second thought — safe, fast, worry-free.',
    icon: 'battery',
  },
];

export type Spec = {
  label: string;
  value: string;
};

export const specs: Spec[] = [
  { label: 'Puff Count', value: '85,000' },
  { label: 'Battery Capacity', value: '950mAh' },
  { label: 'Charging Port', value: 'Type-C Fast Charging' },
  { label: 'Button Type', value: 'Side Button' },
  { label: 'Shell Finish', value: 'Ice Crack' },
  { label: 'Power Mode', value: 'ECO / BOOST / TURBO' },
  { label: 'Airflow', value: 'Adjustable' },
  { label: 'Dimensions', value: '92×53×29mm' },
  { label: 'Overcharge Protection', value: 'Supported' },
];

export type BlogPost = {
  id: number;
  title: string;
  category: 'Wellness' | 'Sustainability' | 'Product Education' | 'Lifestyle';
  excerpt: string;
  date: string;
  readTime: string;
  gradient: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Breathing Freely: The Non-Nicotine Lifestyle',
    category: 'Wellness',
    excerpt: 'Choosing non-nicotine isn\'t just about what you\'re avoiding — it\'s about what you\'re gaining. We explore the wellness mindset behind guilt-free enjoyment.',
    date: 'Aug 15, 2025',
    readTime: '5 min read',
    gradient: 'linear-gradient(135deg, #a8c09c 0%, #49693e 100%)',
  },
  {
    id: 2,
    title: 'Sustainability in Vaping: Where the Industry Must Go',
    category: 'Sustainability',
    excerpt: 'The vaping industry has a waste problem. Here\'s how eco-conscious design, recyclable materials, and responsible disposal can change the conversation.',
    date: 'Aug 8, 2025',
    readTime: '7 min read',
    gradient: 'linear-gradient(135deg, #86b99a 0%, #1f513a 100%)',
  },
  {
    id: 3,
    title: 'Flavour Science: How Dual Mesh Technology Works',
    category: 'Product Education',
    excerpt: 'Dual mesh coils aren\'t just a buzzword. We break down the engineering behind even heating, consistent flavour, and why it matters for your experience.',
    date: 'Jul 30, 2025',
    readTime: '6 min read',
    gradient: 'linear-gradient(135deg, #e0ab8c 0%, #924430 100%)',
  },
  {
    id: 4,
    title: 'Clean Living: Daily Habits for an Eco-Conscious Life',
    category: 'Lifestyle',
    excerpt: 'Small choices add up. From mindful consumption to sustainable swaps, here are practical habits that align your lifestyle with a greener future.',
    date: 'Jul 22, 2025',
    readTime: '4 min read',
    gradient: 'linear-gradient(135deg, #cddbc6 0%, #3a5432 100%)',
  },
  {
    id: 5,
    title: 'ECO / BOOST / TURBO: Finding Your Perfect Mode',
    category: 'Product Education',
    excerpt: 'Three power modes, three distinct experiences. We guide you through when to use each mode and how to get the most out of your KAPOW 85K.',
    date: 'Jul 14, 2025',
    readTime: '5 min read',
    gradient: 'linear-gradient(135deg, #b6d5c1 0%, #266446 100%)',
  },
  {
    id: 6,
    title: 'Why Clear-Tank Design Matters for a Better Experience',
    category: 'Product Education',
    excerpt: 'Transparency isn\'t just aesthetic — it\'s practical. Discover how visible e-liquid levels give you control and confidence in every session.',
    date: 'Jul 5, 2025',
    readTime: '4 min read',
    gradient: 'linear-gradient(135deg, #b8e0d2 0%, #357d57 100%)',
  },
];

export type NavLink = {
  label: string;
  path?: string;
  children?: NavLink[];
};

export const navLinks: NavLink[] = [
  { label: 'Home', path: '/' },
  {
    label: 'Product',
    path: '/product/kapow-85k',
    children: [
      { label: 'KAPOW 85K', path: '/product/kapow-85k' },
      { label: 'Discover More', path: '/product' },
    ],
  },
  { label: 'Events', path: '/events' },
  { label: 'About Us', path: '/about' },
  {
    label: 'Support',
    children: [
      { label: 'Verification', path: '/verification' },
      { label: 'FAQs', path: '/faq' },
      { label: 'Contact Us', path: '/contact' },
      { label: 'Download', path: '/download' },
    ],
  },
];