export const SERVICES = [
  {
    id: 'character-illustration',
    title: 'Character Illustration',
    tagline: 'Custom character artwork with vibrant lighting, detailed textures, and expressive styling.',
    badge: 'Most Popular',
    startingPrice: 120,
    turnaround: '5–10 Business Days',
    idealFor: 'Authors, VTubers, Gamers, OC Creators, Personal Gifts',
    tiers: [
      { name: 'Bust / Portrait', price: '$120+', description: 'Head to shoulders, clean lighting, simple or transparent background.' },
      { name: 'Half-Body', price: '$180+', description: 'Waist-up with detailed costume rendering, hands, dynamic pose.' },
      { name: 'Full-Body Splash Art', price: '$260+', description: 'Head-to-toe full character render with detailed FX & perspective.' }
    ],
    includes: [
      'High-resolution PNG / JPEG (300+ DPI)',
      'Transparent background version included',
      '3 Dedicated revision rounds (Rough, Lineart/Flat, Final Polish)',
      'Commercial usage available upon request'
    ],
    addons: [
      { name: 'Additional Character', price: '+$80–$150 per character' },
      { name: 'Complex / Detailed Environment', price: '+$60–$140' },
      { name: 'Weapons / Mechanical Props', price: '+$35–$70' },
      { name: 'Rush Delivery (3-day turnaround)', price: '+40% of total' }
    ]
  },
  {
    id: 'character-design',
    title: 'Character Design & Model Sheets',
    tagline: 'From initial sketch to turnarounds and expression charts for 3D animators, comics, and games.',
    badge: 'Game & Comic Ready',
    startingPrice: 220,
    turnaround: '7–14 Business Days',
    idealFor: 'Indie Game Developers, Comic Writers, Animation Studios, Brand Mascots',
    tiers: [
      { name: 'Concept & Silhouette Sheet', price: '$220+', description: '3 Initial silhouette concepts + 1 fully rendered front view.' },
      { name: 'Full 3-View Turnaround', price: '$350+', description: 'Front, Side, and Back views with orthographic accuracy.' },
      { name: 'Master Production Bible', price: '$500+', description: 'Turnaround + 4 Expressions + Weapon/Prop callouts + Color palette hex codes.' }
    ],
    includes: [
      'Layered PSD source file + high-res PNGs',
      'Color palette breakdown & reference callouts',
      'Orthographic proportions ready for 3D sculptors or 2D animators',
      'Up to 4 revision stages'
    ],
    addons: [
      { name: 'Extra Expression Sheet (4 faces)', price: '+$60' },
      { name: 'Alternate Costume Variant', price: '+$90' },
      { name: 'Companion Creature / Pet Design', price: '+$75' }
    ]
  },
  {
    id: 'book-covers',
    title: 'Book & Novel Covers',
    tagline: 'Cinematic, hook-driven illustrated book covers that demand clicks on digital stores and bookshelves.',
    badge: 'Bestseller Grade',
    startingPrice: 300,
    turnaround: '10–18 Business Days',
    idealFor: 'Fantasy & Sci-Fi Authors, Web Novelists, Graphic Novel Publishers',
    tiers: [
      { name: 'E-Book Front Cover', price: '$300+', description: 'Optimized high-impact digital cover with custom typography placement.' },
      { name: 'Full Wrap Paperback & Hardcover', price: '$450+', description: 'Front, Spine, and Back cover formatted to printer CMYK specs with bleed.' },
      { name: 'Cover + Promo Art Package', price: '$600+', description: 'Full wrap cover + 2 social media character banners + 3D mockup renders.' }
    ],
    includes: [
      'CMYK Print-ready PDF + RGB Web PNGs',
      'Custom typography integration & title styling',
      'Full commercial publishing rights',
      'Free 3D book mockup for pre-orders and promotional campaigns'
    ],
    addons: [
      { name: 'Dust Jacket Flaps', price: '+$50' },
      { name: 'Audiobook Square Crop', price: '+$40' },
      { name: 'Animated Cover / Motion Teaser', price: '+$160' }
    ]
  },
  {
    id: 'comic-art',
    title: 'Comic Art & Sequential Pages',
    tagline: 'Visually gripping panel storytelling, explosive action layouts, and master-level inking & screentoning.',
    badge: 'Storyteller',
    startingPrice: 150,
    turnaround: '5–10 Days per Page',
    idealFor: 'Webtoon Creators, Independent Comic Publishers, Manga Authors',
    tiers: [
      { name: 'Inks & Screentones (B&W)', price: '$150 / page', description: 'Traditional manga/comic style inking with screentones & speedlines.' },
      { name: 'Full Color Illustrated Page', price: '$240 / page', description: 'Complete storyboard, lineart, color rendering, and dramatic lighting passes.' },
      { name: 'Webtoon Vertical Episode (25 panels)', price: '$650 / episode', description: 'Continuous vertical scroll format formatted for Webtoon / Tapas.' }
    ],
    includes: [
      'High-resolution multi-layer print files (600 DPI for B&W / 300 DPI Color)',
      'Dialogue bubble and SFX sound effects placement',
      'Multi-page volume discount (10+ pages: 15% off)',
      'Rough thumbnail storyboard approval stage before inking'
    ],
    addons: [
      { name: 'Custom Lettering & Typesetting', price: '+$25 / page' },
      { name: 'Variant Incentive Cover', price: '+$200' }
    ]
  },
  {
    id: '2d-animation',
    title: '2D Animation & Motion Design',
    tagline: 'Hand-drawn sakuga action cuts, character idle loops, stream alerts, and dynamic cinematic trailers.',
    badge: 'Dynamic Motion',
    startingPrice: 280,
    turnaround: '10–20 Business Days',
    idealFor: 'Streamers, YouTubers, Music Artists, Game Trailers, Animated Intros',
    tiers: [
      { name: 'Animated Loop (VTuber / Stream)', price: '$280+', description: '5–10s seamless looping character animation with glowing FX.' },
      { name: 'Short Sakuga Cut (1–3s action)', price: '$400+', description: 'Frame-by-frame sakuga keyframes, smears, and explosive impact frames.' },
      { name: 'Music Video / Trailer Cut (10–30s)', price: '$850+', description: 'Multi-scene animated sequence with camera movements and composite FX.' }
    ],
    includes: [
      'Delivered in 4K MP4, WebM (with alpha transparency), and animated GIF',
      'Custom sound FX syncing upon request',
      'Storyboard and rough animation line test previews'
    ],
    addons: [
      { name: 'Extended Duration (per second)', price: '+$75/sec' },
      { name: 'Live2D Rigging Prep', price: '+$180' }
    ]
  },
  {
    id: 'chibi-emotes',
    title: 'Chibi Art & Stream Badges',
    tagline: 'Cute, expressive, stylized chibi character illustrations and custom emote packs with big personality.',
    badge: 'Chibi & Stream',
    startingPrice: 60,
    turnaround: '3–5 Business Days',
    idealFor: 'Twitch Affiliates, Discord Communities, Merch Stickers, VTubers',
    tiers: [
      { name: 'Single Chibi Character', price: '$60+', description: 'Full body cute stylized character with bold outlines & clean shading.' },
      { name: 'Emote Pack (3 Emotes)', price: '$90+', description: 'Expressive Twitch/Discord sized emotes (112px, 56px, 28px).' },
      { name: 'Ultimate Streamer Bundle', price: '$180+', description: '6 Custom emotes + 1 Full Chibi avatar + 3 Sub Badges.' }
    ],
    includes: [
      'Pre-sized files ready for Discord, Twitch, and YouTube',
      'High-res master files for printing stickers and merch',
      'Fast turnaround time'
    ],
    addons: [
      { name: 'Animated Emote (GIF format)', price: '+$35 each' }
    ]
  }
];

export const COMMISSION_STEPS = [
  {
    step: '01',
    title: 'SUBMIT YOUR IDEA',
    description: 'Use the Hire Me form to share your vision, character references, style preferences, and deadline.',
    icon: 'Sparkles'
  },
  {
    step: '02',
    title: 'DISCUSS & QUOTE',
    description: 'I review your project requirements, clarify scope, confirm the final transparent quote, and agree on milestones.',
    icon: 'MessageSquare'
  },
  {
    step: '03',
    title: 'SKETCH & CREATION',
    description: 'You receive initial rough compositions/poses for approval, followed by lineart, colors, and final polish passes.',
    icon: 'Palette'
  },
  {
    step: '04',
    title: 'FINAL DELIVERY',
    description: 'Receive your full-resolution master files, printable formats, and transparent assets ready for launch.',
    icon: 'CheckCircle2'
  }
];
