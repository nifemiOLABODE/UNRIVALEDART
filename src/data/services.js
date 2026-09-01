export const SERVICES = [
  {
    id: 'character-illustration',
    title: 'Character Illustration',
    tagline: 'Custom character artwork with vibrant lighting, detailed textures, and expressive styling.',
    badge: 'Starting $50',
    startingPrice: 50,
    turnaround: '5–10 Business Days',
    idealFor: 'Authors, VTubers, Gamers, OC Creators, Personal Gifts',
    tiers: [
      { name: 'Single Character', price: '$50', description: 'Single character custom illustration with clean lighting and expressive pose.' },
      { name: 'Character Turnaround Sheet', price: '$100', description: 'Full character turnaround model sheet with front, back, and side reference views (+$50).' }
    ],
    includes: [
      'High-resolution PNG / JPEG (300+ DPI)',
      'Transparent background version included',
      'Dedicated revision rounds',
      'Commercial usage available upon request'
    ],
    addons: [
      { name: 'Turnarounds', price: '+$50' },
      { name: 'Extras (Additional Character)', price: '+80%' }
    ]
  },
  {
    id: 'music-covers',
    title: 'Music Cover',
    tagline: 'High-impact illustrated single and album covers crafted for Spotify, Apple Music, vinyl, and streaming platforms.',
    badge: 'Starting $100',
    startingPrice: 100,
    turnaround: '5–10 Business Days',
    idealFor: 'Musicians, Producers, Bands, Record Labels, DJs',
    tiers: [
      { name: 'Single Front Cover', price: '$100', description: 'Square 3000x3000px high-res single front cover art optimized for all major DSPs.' },
      { name: 'Full Album Package', price: '$350', description: 'Complete album packaging: front, back tracklist layout, spine, and inner sleeve printable files.' },
      { name: 'Cover With Motion Animation', price: '$500', description: 'Full album cover art + seamless animated motion loop for Spotify Canvas & promotional teasers.' }
    ],
    includes: [
      '3000x3000px 300+ DPI master files',
      'Custom typography integration & title design',
      'Full commercial streaming & distribution rights'
    ],
    addons: []
  },
  {
    id: 'book-covers',
    title: 'Novel Cover',
    tagline: 'Cinematic, hook-driven illustrated novel covers that demand clicks on digital stores and webtoon platforms.',
    badge: 'Starting $150',
    startingPrice: 150,
    turnaround: '7–14 Business Days',
    idealFor: 'Fantasy & Sci-Fi Authors, Web Novelists, Graphic Novel Publishers',
    tiers: [
      { name: 'Novel Cover (Digital Copy Only)', price: '$150', description: 'Optimized high-impact digital novel/e-book cover with custom title styling (digital copy only).' }
    ],
    includes: [
      'High-resolution RGB Web PNGs & master files',
      'Custom typography integration & title styling',
      'Digital publishing commercial rights'
    ],
    addons: []
  },
  {
    id: 'comic-art',
    title: 'Comic & Sequential Pages',
    tagline: 'Visually gripping panel storytelling, explosive action layouts, and master-level inking & coloring.',
    badge: 'Starting $70',
    startingPrice: 70,
    turnaround: '3–7 Days per Page',
    idealFor: 'Webtoon Creators, Independent Comic Publishers, Manga Authors',
    tiers: [
      { name: 'Black and White Page', price: '$70 / page', description: 'Traditional manga/comic style inking with screentones, speedlines, and dynamic paneling.' },
      { name: 'Fully Colored Page', price: '$100 / page', description: 'Complete storyboard, lineart, full color rendering, and dramatic lighting passes.' }
    ],
    includes: [
      'High-resolution multi-layer print files (600 DPI for B&W / 300 DPI Color)',
      'Dialogue bubble and SFX sound effects placement'
    ],
    addons: []
  },
  {
    id: '2d-animation',
    title: '2D Animation',
    tagline: 'Hand-drawn sakuga action cuts, character turnaround loops, and dynamic motion animation.',
    badge: 'Starting $250',
    startingPrice: 250,
    turnaround: '10–20 Business Days',
    idealFor: 'Streamers, YouTubers, Music Artists, Game Trailers, Animated Intros',
    tiers: [
      { name: 'Character Turnaround Loops (Single Character)', price: '$250', description: 'Seamless looping 2D animated character turnaround cut.' },
      { name: 'Animation', price: '$10 / hour', description: 'Custom frame-by-frame 2D animation billed at $10 per hour.' }
    ],
    includes: [
      'Delivered in 4K MP4, WebM (with alpha transparency), and animated GIF',
      'Storyboard and rough animation line test previews'
    ],
    addons: []
  },
  {
    id: 'chibi-emotes',
    title: 'Chibi Art',
    tagline: 'Cute, expressive, stylized chibi character illustrations and custom emote packs with big personality.',
    badge: 'Starting $50',
    startingPrice: 50,
    turnaround: '3–5 Business Days',
    idealFor: 'Twitch Affiliates, Discord Communities, Merch Stickers, VTubers',
    tiers: [
      { name: 'Single Cute Chibi Character', price: '$50', description: 'Full body cute stylized chibi character with bold outlines & clean shading.' },
      { name: 'Emote Pack', price: '$80', description: 'Custom expressive Twitch/Discord sized emotes.' }
    ],
    includes: [
      'Pre-sized files ready for Discord, Twitch, and YouTube',
      'High-res master files for printing stickers and merch'
    ],
    addons: []
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
