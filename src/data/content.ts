// src/data/content.ts

// ============================================================
// Flavours
// ============================================================
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

// ============================================================
// Features
// ============================================================
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

// ============================================================
// Specs
// ============================================================
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

// ============================================================
// Blog
// ============================================================
export type BlogSection =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'quote'; text: string; author?: string }
  | { type: 'list'; items: string[] }
  | { type: 'callout'; text: string };

export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  category: 'Craftsmanship' | 'Product Knowledge' | 'Flavour' | 'Lifestyle';
  excerpt: string;
  date: string;
  readTime: string;
  gradient: string;
  image?: string;
  author: string;
  content: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  // ============================================================
  // 1. Craftsmanship - The Craftsmanship Behind the KAPOW 85K
  // ============================================================
  {
    id: 1,
    slug: 'craftsmanship-behind-kapow-85k',
    title: 'The Craftsmanship Behind the KAPOW 85K',
    category: 'Craftsmanship',
    excerpt: 'From coil geometry to shell finish, every element of the KAPOW 85K was designed with intent. Here\'s the thinking behind the details.',
    date: 'Aug 20, 2025',
    readTime: '9 min read',
    gradient: 'linear-gradient(135deg, #a8c09c 0%, #49693e 100%)',
    image: '/images/blog/craftsmanship-behind-kapow-85k.png',
    author: 'KAPOW Team',
    content: [
      { type: 'paragraph', text: 'Walk into any vape shop and you\'ll see the same scene: dozens of devices that look identical, promise the same things, and quietly disappoint after a few days. Flavour fades. Batteries drain faster than expected. The experience you paid for slowly disappears — often before you even realize it\'s happening.' },
      { type: 'paragraph', text: 'We thought that was a strange way to treat people. So we took a different approach with the KAPOW 85K. We started with a simple question: what would a disposable vape look like if it were designed the way a piece of consumer electronics should be? Not the cheapest possible device, but the best one we could build.' },

      { type: 'heading', text: 'Starting with the Coil' },
      { type: 'paragraph', text: 'The coil is where flavour is born. If heat isn\'t distributed evenly, you get hot spots — areas that vaporize faster than others. The wire in the center of a traditional coil gets hot first, then the heat radiates outward through the wick. This creates a temperature gradient that no amount of engineering can fully compensate for.' },
      { type: 'paragraph', text: 'The practical result is familiar to anyone who has used a disposable vape for more than a few days: the first puffs taste great, then gradually degrade. Dry hits appear out of nowhere. The session ends earlier than you expected because the coil simply can\'t keep up.' },
      { type: 'paragraph', text: 'We chose dual mesh coils specifically to solve this. Two layers of fine mesh spread heat across the entire wicking surface, ensuring every drop of e-liquid vaporizes at the same temperature. There\'s no gradient, no hot spot, no localized burning. The result is consistency — puff #1 and puff #5,000 taste the same.' },
      { type: 'quote', text: 'Consistency is the hardest thing to engineer — and the easiest thing to notice when it\'s missing.' },

      { type: 'heading', text: 'Then the Interface' },
      { type: 'paragraph', text: 'A good device gives you control without making you think about it. That sounds simple, but it\'s surprisingly hard to get right. Too many buttons and options become noise. Too few, and users feel boxed in. The balance has to feel effortless.' },
      { type: 'paragraph', text: 'We landed on a single side button with three power modes — ECO, BOOST, and TURBO — plus a smart screen that shows your battery life and current mode at a glance. Press once to cycle through the modes. Press again to move to the next. No menus, no confusion, no learning curve.' },
      { type: 'list', items: ['ECO for extended sessions and maximum puffs per charge', 'BOOST for a balanced, richer daily experience', 'TURBO for maximum intensity and bigger clouds', 'A smart screen that keeps everything visible without being distracting'] },
      { type: 'paragraph', text: 'What makes it work isn\'t the number of options — it\'s that each option has a distinct, meaningful purpose. You don\'t switch between modes to discover some hidden difference. You switch because you already know what you want and can immediately get it.' },

      { type: 'heading', text: 'And Finally, the Finish' },
      { type: 'paragraph', text: 'Every KAPOW 85K features a distinctive ice-crack shell finish. It\'s not just aesthetic — the textured surface catches and refracts light in a way that makes each device feel unique. No two are exactly alike, and over time, each one develops a subtle character of its own.' },
      { type: 'paragraph', text: 'But the finish isn\'t only about looks. It\'s about feel. A device that sits comfortably in your hand, that has a slight grip, that catches the light as you turn it — those things matter. They turn a tool into something you actually enjoy picking up.' },

      { type: 'heading', text: 'Battery Life and Charging' },
      { type: 'paragraph', text: 'We equipped the KAPOW 85K with a 950mAh battery and Type-C fast charging. On paper that sounds technical, but in practice it means something more useful: you don\'t have to think about charging very often, and when you do, it\'s quick and safe.' },
      { type: 'paragraph', text: 'Built-in overcharge protection means you can plug it in and walk away. You don\'t have to babysit the device while it charges, and you don\'t have to worry about leaving it on a charger longer than necessary. The device handles it for you.' },

      { type: 'heading', text: 'Why All of This Matters' },
      { type: 'paragraph', text: 'Because together, these details compound. A device that\'s thoughtfully designed in one area is usually thoughtfully designed in all of them. And that\'s the difference between a device you use and a device you enjoy.' },
      { type: 'paragraph', text: 'We could have cut corners. We could have sourced cheaper coils, a generic shell, a smaller battery. But then we wouldn\'t have built the KAPOW 85K — we would have built just another disposable vape. That wasn\'t the goal.' },
      { type: 'paragraph', text: 'The goal was to make something worth using. Something that feels like it was made with intent, because it was.' },

      { type: 'callout', text: 'The KAPOW 85K is available now, with 12 signature flavours and up to 85,000 puffs per device.' },
    ],
  },

  // ============================================================
  // 2. Product Knowledge - Dual Mesh Technology, Explained
  // ============================================================
  {
    id: 2,
    slug: 'dual-mesh-technology-explained',
    title: 'Dual Mesh Technology, Explained',
    category: 'Product Knowledge',
    excerpt: 'Dual mesh coils aren\'t a marketing term. Here\'s what they actually do — and why they change how a vape performs.',
    date: 'Aug 12, 2025',
    readTime: '8 min read',
    gradient: 'linear-gradient(135deg, #86b99a 0%, #1f513a 100%)',
    image: '/images/blog/dual-mesh-technology-explained.png',
    author: 'KAPOW Team',
    content: [
      { type: 'paragraph', text: 'If you\'ve looked at vape specifications lately, you\'ve probably seen the phrase "dual mesh coil" used as a selling point. It sounds impressive. It\'s often repeated without explanation. And most people have no idea what it actually means.' },
      { type: 'paragraph', text: 'So let\'s fix that. Here\'s what dual mesh is, why it exists, and why it changes the experience of using a vape.' },

      { type: 'heading', text: 'The Physics of a Puff' },
      { type: 'paragraph', text: 'When you take a puff, a chain reaction happens in a fraction of a second. Electricity hits the coil. The coil heats up. Heat transfers to the wick. The wick feeds e-liquid to the coil. The e-liquid vaporizes. Flavour compounds are released. Every part of that chain depends on the one before it — and if any link breaks or slows down, the experience suffers.' },
      { type: 'paragraph', text: 'The most common weak point is heat distribution. If the coil heats unevenly, the entire chain above it becomes inconsistent.' },

      { type: 'heading', text: 'The Problem with Single Coils' },
      { type: 'paragraph', text: 'Traditional single-wire coils heat from one point outward. The wire in the center gets hot first, then heat radiates outward through the wick toward the edges. This creates a temperature gradient — a hot center and cooler edges.' },
      { type: 'paragraph', text: 'The practical result is exactly what most disposable vape users experience: flavour that tastes great on the first puff and progressively worse as the coil ages. Dry hits that seem to come out of nowhere. A session that ends before you\'re ready because the coil can\'t keep up with demand.' },
      { type: 'quote', text: 'Flavour isn\'t about one perfect hit. It\'s about the same great hit, reliably, every time.' },

      { type: 'heading', text: 'How Dual Mesh Solves It' },
      { type: 'paragraph', text: 'Dual mesh coils replace the single wire with two layers of fine mesh. Because the mesh covers more surface area and has more uniform resistance, heat distributes evenly across the entire wicking surface rather than concentrating at one point.' },
      { type: 'paragraph', text: 'Instead of a temperature gradient, you get a temperature plateau. Every drop of e-liquid vaporizes at roughly the same temperature, releasing the same flavour profile regardless of where in the coil it happens to be.' },
      { type: 'list', items: ['Even heat distribution across the whole surface', 'No hot spots, no localized burning', 'Consistent flavour from first puff to last', 'Longer effective coil lifespan'] },

      { type: 'heading', text: 'What It Feels Like in Practice' },
      { type: 'paragraph', text: 'In theory, it sounds like a minor improvement. In practice, the difference is unmistakable. Puff #1 and puff #5,000 taste the same. There\'s no warm-up phase, no gradual decline, no surprises. Just the same flavour, delivered the same way, every time.' },
      { type: 'paragraph', text: 'You notice this most on long sessions. When a device uses a single coil, a long session can leave you with dry hits or a slightly burnt taste at the end. With dual mesh, that simply doesn\'t happen. The wick stays saturated, the coil stays even, and the flavour stays consistent throughout.' },

      { type: 'heading', text: 'The Engineering Trade-Off' },
      { type: 'paragraph', text: 'Dual mesh is harder to manufacture and more expensive than a single wire coil. The mesh has to be precisely formed and layered, and the assembly takes more time and quality control. For a disposable product, this is a meaningful cost.' },
      { type: 'paragraph', text: 'But for us, the trade-off is worth it. A device that performs consistently is a device worth building. Cutting corners here would mean delivering a product that feels cheaper than it looks — and that\'s not what we\'re trying to make.' },

      { type: 'heading', text: 'How It Extends Device Lifespan' },
      { type: 'paragraph', text: 'Because dual mesh distributes heat evenly, the coil and wick wear down more slowly than they would with a single-wire design. Hot spots are what cause premature coil degradation in most devices — eliminate the hot spots, and you extend the useful life of the entire system.' },
      { type: 'paragraph', text: 'That\'s part of how the KAPOW 85K delivers up to 85,000 puffs on a single device. It\'s not just a bigger battery or more e-liquid. It\'s an entire engineering philosophy around making every component last as long as it reasonably can.' },

      { type: 'callout', text: 'Every KAPOW 85K device comes equipped with dual mesh coils as standard — because we don\'t believe consistency should be an upgrade.' },
    ],
  },

  // ============================================================
  // 3. Product Knowledge - ECO / BOOST / TURBO
  // ============================================================
  {
    id: 3,
    slug: 'eco-boost-turbo-choosing-your-mode',
    title: 'ECO / BOOST / TURBO: Choosing Your Mode',
    category: 'Product Knowledge',
    excerpt: 'Three power modes, three distinct experiences. Here\'s how to get the most out of each mode on the KAPOW 85K.',
    date: 'Aug 5, 2025',
    readTime: '7 min read',
    gradient: 'linear-gradient(135deg, #e0ab8c 0%, #924430 100%)',
    image: '/images/blog/eco-boost-turbo-choosing-your-mode.png',
    author: 'KAPOW Team',
    content: [
      { type: 'paragraph', text: 'Most vapes only have one mode. You press a button, it fires, and you get whatever the manufacturer decided you wanted. That works fine — until it doesn\'t. Because the truth is, different moments call for different experiences.' },
      { type: 'paragraph', text: 'Maybe you want a long, slow session on a weekend morning. Maybe you want a quick, intense hit before heading out the door. Maybe you want something in between for most of the day. One mode can\'t do all three well.' },
      { type: 'paragraph', text: 'That\'s why the KAPOW 85K has three: ECO, BOOST, and TURBO. Each one is designed for a different use case, and knowing which one to use when makes a real difference.' },

      { type: 'heading', text: 'ECO — For the Long Haul' },
      { type: 'paragraph', text: 'ECO mode delivers the most puffs per charge, with a lighter vapour output. It\'s designed for extended sessions — long work days, road trips, evenings where you want to vape without thinking about battery life.' },
      { type: 'paragraph', text: 'The flavour in ECO mode is softer, more drawn out. It doesn\'t hit you in the face — it unfolds gradually, letting you enjoy the flavour profile over a longer period of time. For some users, this is actually the most enjoyable mode, because it feels more like a slow ritual than a quick hit.' },
      { type: 'paragraph', text: 'If you use ECO mode consistently, the 85,000-puff lifespan stretches even further. This is the mode to use if you want maximum value from a single device.' },

      { type: 'heading', text: 'BOOST — The Sweet Spot' },
      { type: 'paragraph', text: 'BOOST is our most balanced mode. Richer vapour, fuller flavour, and still plenty of battery life. If you only ever use one mode, make it this one — it\'s what most of us use day to day.' },
      { type: 'paragraph', text: 'The vapour output is noticeably stronger than ECO but not overwhelming. The flavour profile is at its most complete: every note in the profile comes through, without being compressed or exaggerated. It\'s the mode that most closely matches what we intended when we designed the device.' },
      { type: 'paragraph', text: 'You can use BOOST mode all day without worrying about draining the battery. It\'s balanced specifically to provide a great experience without sacrificing longevity.' },

      { type: 'heading', text: 'TURBO — Full Power' },
      { type: 'paragraph', text: 'TURBO pushes the device to its maximum intensity. Bigger clouds, bolder taste, more of everything. This is the mode for short, focused sessions when you want the full experience without compromise.' },
      { type: 'paragraph', text: 'Because TURBO draws more power, it drains the battery faster than the other two modes. But that\'s a deliberate trade-off. If you\'re going to use TURBO, you should be using it because you want intensity — and you should be aware that a charge will last proportionally fewer sessions.' },
      { type: 'paragraph', text: 'Most users find TURBO works best as an occasional mode — something to switch to when the moment calls for it, rather than the mode you leave the device on all day.' },

      { type: 'heading', text: 'Which Mode Should You Use?' },
      { type: 'paragraph', text: 'There\'s no single right answer — it depends on context. Here\'s a rough guide:' },
      { type: 'list', items: ['Long workday or road trip → ECO', 'Everyday use at home → BOOST', 'Short session or want maximum impact → TURBO', 'Want to maximize device lifespan → ECO', 'Want the most balanced experience → BOOST'] },

      { type: 'heading', text: 'Switching Between Modes' },
      { type: 'paragraph', text: 'Switching modes is deliberately simple. Press the side button once to cycle to the next mode. The smart screen immediately displays the current mode and battery life, so you always know what state the device is in.' },
      { type: 'paragraph', text: 'There\'s no menu, no app, no confusion. The interaction is designed to disappear into the background, so you can focus on the experience rather than the interface.' },

      { type: 'quote', text: 'The best device is the one that adapts to you — not the other way around.' },

      { type: 'heading', text: 'Why Three Modes Is the Right Number' },
      { type: 'paragraph', text: 'We considered adding more modes during development. But more modes means more decisions, and more decisions means more friction. Three is enough to cover every realistic use case without overwhelming the user.' },
      { type: 'paragraph', text: 'Each mode has a distinct, immediately noticeable personality. ECO feels relaxed. BOOST feels balanced. TURBO feels intense. You don\'t need to compare modes side by side to understand the difference — you feel it instantly.' },

      { type: 'callout', text: 'Switch modes by pressing the side button. The current mode is displayed on the smart screen.' },
    ],
  },

  // ============================================================
  // 4. Flavour - How to Choose Your Signature Flavour
  // ============================================================
  {
    id: 4,
    slug: 'how-to-choose-your-flavour',
    title: 'How to Choose Your Signature Flavour',
    category: 'Flavour',
    excerpt: 'With 12 flavours to choose from, picking the right one can feel overwhelming. Here\'s a simple guide to finding your signature.',
    date: 'Jul 28, 2025',
    readTime: '8 min read',
    gradient: 'linear-gradient(135deg, #cddbc6 0%, #3a5432 100%)',
    image: '/images/blog/how-to-choose-your-flavour.png',
    author: 'KAPOW Team',
    content: [
      { type: 'paragraph', text: 'Most people default to the first flavour they try and never explore beyond it. They pick a bottle from the shelf, decide it\'s "fine," and never go back to check whether something better was waiting one shelf over. That\'s a shame — because with 12 flavours available, there\'s usually a much better match waiting to be discovered.' },
      { type: 'paragraph', text: 'The good news is that choosing a flavour isn\'t complicated. It just requires a little thought about what you already enjoy and a willingness to explore a small amount before settling in.' },

      { type: 'heading', text: 'Start with Your Existing Preferences' },
      { type: 'paragraph', text: 'What do you already enjoy in food and drink? This is the single best predictor of what you\'ll enjoy in a vape. If you order sweet cocktails on a night out, you\'ll probably love berry-forward flavours. If you prefer iced coffee or mint tea, you\'ll gravitate toward menthol blends. If you drink citrus water or eat a lot of fruit, you\'ll probably respond well to citrus or fruit-forward profiles.' },
      { type: 'paragraph', text: 'The trick is to translate what you already like into vape language. Most vape flavour profiles fall into one of four broad categories, and each one maps fairly cleanly to flavours you might already enjoy in other contexts.' },

      { type: 'heading', text: 'The Four Flavour Families' },
      { type: 'paragraph', text: 'Every KAPOW 85K flavour belongs to one of four families. Understanding these families makes it much easier to narrow down what you want.' },
      { type: 'list', items: ['Mint & Menthol — crisp, clean, refreshing. Best for: iced drinks, mint tea, fresh air. Try: Mint Menthol Ice, Classic Mint.', 'Berry — tart, juicy, vibrant. Best for: fruit desserts, berry smoothies, red wine. Try: Triple Berry Ice, Strawberry Ice, Cherry Strawberry.', 'Fruity — sweet, aromatic, layered. Best for: fresh fruit, tropical drinks, stone fruits. Try: Punchy Peach, Apple Grape.', 'Citrus — zesty, bright, energizing. Best for: lemonade, soda water, citrus desserts. Try: Lemon Heads, Blaze Dew.'] },
      { type: 'paragraph', text: 'If you aren\'t sure where you fit, start with the family that most closely matches your general preferences. You can always branch out within the family or try a completely different one later.' },

      { type: 'heading', text: 'Consider the Time of Day' },
      { type: 'paragraph', text: 'Flavour preference isn\'t static. Many users find that their favourite flavour in the morning is different from their favourite in the evening. This makes sense — you\'re a slightly different person at 7am than you are at 9pm.' },
      { type: 'paragraph', text: 'In general, mornings tend to pair well with lighter, more refreshing flavours: mint, citrus, or lighter fruit blends. Evenings tend to pair well with richer, sweeter profiles: berry medleys, stone fruits, or dessert-style flavours. There\'s no rule that says you have to follow this pattern, but it\'s a useful starting point.' },
      { type: 'paragraph', text: 'Many experienced users keep at least two flavours on hand for exactly this reason. One for the day, one for the evening.' },

      { type: 'heading', text: 'Pay Attention to Intensity' },
      { type: 'paragraph', text: 'Within each family, flavours also vary in intensity. Some are lighter and more delicate — designed to be enjoyed slowly over long sessions. Others are bolder and more concentrated — designed for shorter, punchier experiences. Neither is better than the other. It\'s about matching the flavour\'s intensity to the kind of session you\'re looking for.' },
      { type: 'paragraph', text: 'If you like bold, distinctly noticeable flavours, lean toward options with "Ice," "Blaze," or "Punchy" in the name. If you prefer something smoother and more subtle, look for options with "Mellow," "Classic," or "Mellow" in the name.' },

      { type: 'heading', text: 'Try Small First' },
      { type: 'paragraph', text: 'If you\'re not sure where to start, don\'t commit to a full 12-bottle purchase. Our collection page lets you filter by category so you can explore a specific family without being overwhelmed by options.' },
      { type: 'paragraph', text: 'Start with two or three flavours within a family you think you\'ll like. Use them for a few days each. Pay attention not just to how they taste, but how they make you feel — refreshed, comforted, energized, relaxed. That emotional response is often a better guide than the flavour profile itself.' },

      { type: 'quote', text: 'Your signature flavour isn\'t the one you always use. It\'s the one you always come back to.' },

      { type: 'heading', text: 'How to Know You\'ve Found It' },
      { type: 'paragraph', text: 'You\'ll know you\'ve found your signature flavour when you stop thinking about it. When you reach for it without hesitation. When it becomes your default rather than your experiment. When you notice you\'ve finished a device and immediately want the same flavour again.' },
      { type: 'paragraph', text: 'That moment doesn\'t always come immediately. Sometimes it takes a few weeks of exploring. But it\'s worth the effort — because a good match makes the entire experience better, and a great match makes it something you look forward to.' },

      { type: 'callout', text: 'Explore the full KAPOW 85K flavour collection — 12 signature flavours across 4 flavour families.' },
    ],
  },

  // ============================================================
  // 5. Lifestyle - The Art of Slow Enjoyment
  // ============================================================
  {
    id: 5,
    slug: 'art-of-slow-enjoyment',
    title: 'The Art of Slow Enjoyment',
    category: 'Lifestyle',
    excerpt: 'Vaping isn\'t a race. Here\'s how to slow down, tune in to the details, and get more out of every session.',
    date: 'Jul 20, 2025',
    readTime: '7 min read',
    gradient: 'linear-gradient(135deg, #b6d5c1 0%, #266446 100%)',
    image: '/images/blog/art-of-slow-enjoyment.png',
    author: 'KAPOW Team',
    content: [
      { type: 'paragraph', text: 'Most of us rush through the things we enjoy without ever noticing them. A puff becomes muscle memory. The flavour passes without registering. The moment ends before we realize it started. This is the default mode of modern life — and it\'s a shame, because it means we get less out of the things we supposedly do for enjoyment.' },
      { type: 'paragraph', text: 'Slow enjoyment is about reversing that pattern. It\'s not about doing less. It\'s about noticing more. It\'s about turning an automatic action into a deliberate one, and getting everything out of it that you would if you were paying attention.' },

      { type: 'heading', text: 'Start with Attention' },
      { type: 'paragraph', text: 'Before you take a puff, pause. Notice what you\'re about to taste. Read the flavour profile on the packaging or recall what you remember about it. Set an expectation. This sounds simple, but it changes everything.' },
      { type: 'paragraph', text: 'The difference between tasting and just inhaling is attention. When you approach a flavour with curiosity rather than habit, you notice details you wouldn\'t otherwise. Notes you\'ve been missing. Subtle differences between two similar flavours. The way the flavour evolves over the course of a single puff.' },
      { type: 'paragraph', text: 'You don\'t have to do this every time. But doing it occasionally — even just once a day — can dramatically increase how much you get out of a session.' },

      { type: 'heading', text: 'Use the Modes Deliberately' },
      { type: 'paragraph', text: 'The KAPOW 85K\'s three power modes aren\'t just about vapour output. They\'re about pacing. Used thoughtfully, they can shape the entire experience of a session.' },
      { type: 'list', items: ['ECO — for long, slow, meditative sessions. Best when you have time and want to stretch the experience.', 'BOOST — for a fuller, richer daily hit. The mode most users default to, and with good reason.', 'TURBO — for moments when you want intensity. Best for short, focused sessions when you want to feel every part of the flavour.'] },
      { type: 'paragraph', text: 'Try switching modes mid-session. Start in ECO, then move to BOOST, then finish in TURBO. The shift in intensity makes the flavour feel different — almost like you\'re tasting it for the first time.' },

      { type: 'heading', text: 'Create a Ritual' },
      { type: 'paragraph', text: 'Rituals are how humans mark meaningful time. The morning coffee. The evening walk. The Sunday newspaper. Each of these turns an ordinary moment into something deliberate — something that makes the day feel more structured and more lived-in.' },
      { type: 'paragraph', text: 'A vape session can be the same. Maybe it\'s a specific chair. A specific time of day. A specific flavour that matches the mood. The details don\'t matter. What matters is that you notice them — that you treat the moment as something other than filler between tasks.' },
      { type: 'paragraph', text: 'Some people create rituals around food. Some around exercise. Some around reading. Adding a vaping ritual is no different. It just gives you another deliberate pause in a day that\'s otherwise built from automatic actions.' },

      { type: 'quote', text: 'Enjoyment doesn\'t require more. It requires attention.' },

      { type: 'heading', text: 'Notice How It Makes You Feel' },
      { type: 'paragraph', text: 'One of the most underrated aspects of slow enjoyment is paying attention to how a session makes you feel — not just what it tastes like. Do you feel more relaxed? More focused? More present? Does the flavour put you in a specific mood, or does it match a mood you\'re already in?' },
      { type: 'paragraph', text: 'Once you start noticing these things, you can start to choose flavours and modes that match your intentions. Want to focus? Choose a lighter, cleaner flavour in ECO mode. Want to wind down? Choose something richer and slower. Want to energize? Pick something citrus-forward in BOOST mode.' },
      { type: 'paragraph', text: 'The device isn\'t just delivering flavour. It\'s delivering a specific state of mind. Slow enjoyment is about understanding which state you want and choosing accordingly.' },

      { type: 'heading', text: 'The Ripple Effect' },
      { type: 'paragraph', text: 'The strange thing about slowing down one thing is that it makes it easier to slow down everything. If you can be fully present for a five-minute vape session, you can be fully present for a meal. If you can notice the details of one flavour, you can notice the details of a conversation, a walk, a book.' },
      { type: 'paragraph', text: 'Slowing down isn\'t about doing less. It\'s about doing more of what matters. A vape session is a small, easy place to start.' },

      { type: 'callout', text: 'The KAPOW 85K is designed to support slow, deliberate enjoyment. From the smart screen that keeps you informed to the dual mesh coil that keeps flavour consistent, every detail is built for moments worth noticing.' },
    ],
  },

  // ============================================================
  // 6. Craftsmanship - Design Details That Actually Matter
  // ============================================================
  {
    id: 6,
    slug: 'design-details-that-matter',
    title: 'Design Details That Actually Matter',
    category: 'Craftsmanship',
    excerpt: 'A closer look at the small design decisions that separate a great device from an average one — and why they\'re worth the effort.',
    date: 'Jul 12, 2025',
    readTime: '7 min read',
    gradient: 'linear-gradient(135deg, #b8e0d2 0%, #357d57 100%)',
    image: '/images/blog/design-details-that-matter.png',
    author: 'KAPOW Team',
    content: [
      { type: 'paragraph', text: 'Great design isn\'t always about big ideas. More often it\'s about the small decisions — the details that most people never consciously notice, but everyone feels when they\'re missing. These decisions add up. A device made from a hundred small considerations feels fundamentally different from one made from ten.' },
      { type: 'paragraph', text: 'When we designed the KAPOW 85K, we spent an unusual amount of time on details that wouldn\'t show up in a spec sheet. Here are a few of the ones we\'re most proud of — and why they matter.' },

      { type: 'heading', text: 'The Transparent Tank' },
      { type: 'paragraph', text: 'Most disposable vapes hide their internals. You can\'t see how much e-liquid remains or whether the device is working properly. You\'re essentially trusting the manufacturer to have estimated everything correctly, and hoping nothing goes wrong before you notice.' },
      { type: 'paragraph', text: 'Our transparent tank design lets you check your e-liquid level at a glance. You always know where you stand — no guessing, no surprises, no burned hits that appear without warning.' },
      { type: 'list', items: ['See exactly how much e-liquid remains', 'Know when it\'s time to recharge or replace', 'Verify device health without disassembly', 'Plan your sessions around actual remaining supply'] },
      { type: 'paragraph', text: 'This is a small feature that dramatically changes how you interact with the device. You stop being passive. You start being informed. That shift in dynamic is worth a lot.' },

      { type: 'heading', text: 'The Side Button Position' },
      { type: 'paragraph', text: 'Where a button sits on a device matters more than you\'d think. Too high, and you press it accidentally every time you pick the device up. Too low, and it\'s awkward to reach without adjusting your grip. Too close to the mouthpiece, and it interferes with how you hold the device.' },
      { type: 'paragraph', text: 'We placed the side button to fit naturally under the thumb, without interfering with the mouthpiece or the way you naturally hold the device. This might sound like a minor consideration, but it\'s the difference between a device that feels intuitive and one that always feels slightly wrong.' },

      { type: 'heading', text: 'The Ice-Crack Finish' },
      { type: 'paragraph', text: 'Every KAPOW 85K features a distinctive ice-crack shell finish. No two devices are exactly alike. The textured surface catches and refracts light in a way that feels premium in the hand and looks refined on any surface.' },
      { type: 'paragraph', text: 'The finish also serves a functional purpose. The subtle texture provides a slightly better grip than smooth plastic, which matters more than you\'d expect when you\'re using a device throughout the day. And it disguises fingerprints and smudges in a way that smooth surfaces don\'t.' },

      { type: 'heading', text: 'The Smart Screen' },
      { type: 'paragraph', text: 'A lot of vapes include a screen just to have one. It shows a battery icon and a percentage — information you could probably guess from how the device performs. That\'s not useful. That\'s decoration.' },
      { type: 'paragraph', text: 'Our smart screen displays the information you actually need: battery life, current mode, and confirmation that the device is functioning correctly. It\'s information you glance at briefly, absorb instantly, and never have to think about again. That\'s what a good interface does — it disappears.' },

      { type: 'quote', text: 'The best design is the design you never notice — because it just works.' },

      { type: 'heading', text: 'The Charging Port' },
      { type: 'paragraph', text: 'We use Type-C charging instead of the older micro-USB standard. This is partly because Type-C is faster, and partly because it\'s reversible — you can plug it in either way without fumbling in the dark. Small detail. Big difference in daily use.' },
      { type: 'paragraph', text: 'We also built in overcharge protection. You can plug the device in and walk away without worrying about it. The device knows when to stop charging, and it does the right thing without your involvement.' },

      { type: 'heading', text: 'Why Details Matter' },
      { type: 'paragraph', text: 'Because together, they compound. A device that\'s thoughtfully designed in one area is usually thoughtfully designed in all of them. A device that cuts corners in one place is usually cutting corners everywhere.' },
      { type: 'paragraph', text: 'The goal isn\'t to build something with the most features. The goal is to build something where every feature has a reason to exist, and where every decision — even the ones nobody consciously notices — makes the device slightly better.' },
      { type: 'paragraph', text: 'That\'s what craftsmanship means in a product like this. Not luxury for its own sake. Not complexity for the sake of appearing sophisticated. Just a commitment to doing the small things right.' },

      { type: 'callout', text: 'Every KAPOW 85K is designed with the same attention to detail — from the first puff to the last.' },
    ],
  },
];

// ============================================================
// Navigation
// ============================================================
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
  { label: 'Blog', path: '/blog' },
];