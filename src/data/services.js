export const SERVICES = [
  {
    id: 'character-illustration',
    title: 'Character Illustration',
    tagline: 'Custom character artwork with vibrant lighting, detailed textures, and expressive styling.',
    badge: 'Most Popular',
    startingPrice: 50,
    turnaround: '5–10 Business Days',
    idealFor: 'Authors, VTubers, Gamers, OC Creators, Personal Gifts',
    tiers: [
      { name: 'Single Character', price: '$50', description: 'Single character custom illustration with vibrant lighting and expressive pose.' },
      { name: 'Character Turnaround Sheet', price: '$100', description: 'Full character turnaround model sheet with front, back, and side reference views (+$50).' }
    ],
    includes: [
      'High-resolution PNG / JPEG (300+ DPI)',
      'Transparent background version included',
      '3 Dedicated revision rounds (Rough, Lineart/Flat, Final Polish)',
      'Commercial usage available upon request'
    ],
    addons: [
      { name: 'Turnarounds', price: '+$50' },
      { name: 'Extra Character', price: '+80% (+$40)' },
      { name: 'Complex / Detailed Environment', price: '+$40–$80' },
      { name: 'Rush Delivery (3-day turnaround)', price: '+40%' }
    ]
  },
  {
    id: 'music-covers',
    title: 'Music Cover',
    tagline: 'High-impact illustrated single and album covers crafted for Spotify, Apple Music, vinyl, and streaming platforms.',
    badge: 'Single & Album Ready',
    startingPrice: 100,
    turnaround: '5–10 Business Days',
    idealFor: 'Musicians, Producers, Bands, Record Labels, DJs',
    tiers: [
      { name: 'Single Front Cover', price: '$100', description: 'Square 3000x3000px high-res single front cover art optimized for all major DSPs.' },
      { name: 'Full Album Package', price: '$350', description: 'Complete album packaging: front, back tracklist layout, spine, and inner sleeve printable files.' },
      { name: 'Cover With Motion Animation', price: '$500', description: 'Full album cover art + seamless animated motion loop for Spotify Canvas & promotional teasers.' }
    ],
    includes: [
      '3000x3000px 300+ DPI master files (RGB + CMYK print specs)',
      'Custom typography integration & title design',
      'Full commercial streaming & distribution rights',
      '3 Dedicated revision checkpoints'
    ],
    addons: [
      { name: 'Motion Animation', price: '+$150' },
      { name: 'Social Media Promo Banner Kit', price: '+$40' }
    ]
  },
  {
    id: 'book-covers',
    title: 'Novel Cover',
    tagline: 'Cinematic, hook-driven illustrated novel covers that demand clicks on digital stores and webtoon platforms.',
    badge: 'Bestseller Grade',
    startingPrice: 150,
    turnaround: '7–14 Business Days',
    idealFor: 'Fantasy & Sci-Fi Authors, Web Novelists, Graphic Novel Publishers',
    tiers: [
      { name: 'Novel Cover (Digital Copy Only)', price: '$150', description: 'Optimized high-impact digital novel/e-book cover with custom title styling (digital copy only).' }
    ],
    includes: [
      'High-resolution RGB Web PNGs & master files',
      'Custom typography integration & title styling',
      'Digital publishing commercial rights',
      '3D digital book mockup for promotions'
    ],
    addons: [
      { name: 'Social Media Banner', price: '+$40' },
      { name: 'Audiobook Square Crop', price: '+$30' }
    ]
  },
  {
    id: 'comic-art',
    title: 'Comic & Sequential Pages',
    tagline: 'Visually gripping panel storytelling, explosive action layouts, and master-level inking & coloring.',
    badge: 'Storyteller',
    startingPrice: 70,
    turnaround: '3–7 Days per Page',
    idealFor: 'Webtoon Creators, Independent Comic Publishers, Manga Authors',
    tiers: [
      { name: 'Black and White Page', price: '$70 / page', description: 'Traditional manga/comic style inking with screentones, speedlines, and dynamic paneling.' },
      { name: 'Fully Colored Page', price: '$100 / page', description: 'Complete storyboard, lineart, full color rendering, and dramatic lighting passes.' }
    ],
    includes: [
      'High-resolution multi-layer print files (600 DPI for B&W / 300 DPI Color)',
      'Dialogue bubble and SFX sound effects placement',
      'Multi-page volume discount (10+ pages: 15% off)',
      'Rough thumbnail storyboard approval stage before inking'
    ],
    addons: [
      { name: 'Custom Lettering & Typesetting', price: '+$20 / page' },
      { name: 'Variant Incentive Cover', price: '+$150' }
    ]
  },
  {
    id: '2d-animation',
    title: '2D Animation',
    tagline: 'Hand-drawn sakuga action cuts, character turnaround loops, and dynamic motion animation.',
    badge: 'Dynamic Motion',
    startingPrice: 250,
    turnaround: '10–20 Business Days',
    idealFor: 'Streamers, YouTubers, Music Artists, Game Trailers, Animated Intros',
    tiers: [
      { name: 'Character Turnaround Loop (Single Character)', price: '$250', description: 'Seamless looping 2D animated character turnaround cut.' },
      { name: 'Custom Animation (Hourly)', price: '$10 / hour', description: 'Dynamic sakuga cuts, action motion, scene sequences, and stream alerts billed at $10/hour.' }
    ],
    includes: [
      'Delivered in 4K MP4, WebM (with alpha transparency), and animated GIF',
      'Custom sound FX syncing upon request',
      'Storyboard and rough animation line test previews'
    ],
    addons: [
      { name: 'Additional Animation Hours', price: '+$10/hour' },
      { name: 'Live2D Rigging Prep', price: '+$150' }
    ]
  },
  {
    id: 'chibi-emotes',
    title: 'Chibi Art',
    tagline: 'Cute, expressive, stylized chibi character illustrations and custom emote packs with big personality.',
    badge: 'Chibi & Stream',
    startingPrice: 50,
    turnaround: '3–5 Business Days',
    idealFor: 'Twitch Affiliates, Discord Communities, Merch Stickers, VTubers',
    tiers: [
      { name: 'Single Cute Chibi Character', price: '$50', description: 'Full body cute stylized character with bold outlines & clean shading.' },
      { name: 'Emote Pack', price: '$80', description: 'Expressive Twitch/Discord sized emotes (112px, 56px, 28px).' }
    ],
    includes: [
      'Pre-sized files ready for Discord, Twitch, and YouTube',
      'High-res master files for printing stickers and merch',
      'Fast turnaround time'
    ],
    addons: [
      { name: 'Additional Emote', price: '+$25 each' },
      { name: 'Animated Emote (GIF format)', price: '+$30 each' }
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
