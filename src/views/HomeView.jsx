import React from 'react';
import { Sparkles, ArrowRight, Palette, Layers, Star, HelpCircle, ChevronRight } from 'lucide-react';
import { ARTWORKS } from '../data/artworks';
import { SERVICES, COMMISSION_STEPS } from '../data/services';
import { TESTIMONIALS } from '../data/testimonials';
import { FAQS } from '../data/faqs';

export default function HomeView({ setActiveView, onSelectArtwork, onSelectService }) {
  // Key artworks
  const vampireQueenArt = ARTWORKS.find(a => a.id === 'ill-vampire-queen') || ARTWORKS[1];
  const zukoArt = ARTWORKS.find(a => a.id === 'ill-zuko-splash') || ARTWORKS[0];
  const battleElfArt = ARTWORKS.find(a => a.id === 'ill-battle-elf') || ARTWORKS[2];
  const animationArt = ARTWORKS.find(a => a.isVideo) || ARTWORKS[0];
  const characterDesignArt = ARTWORKS.find(a => a.category === 'character-design') || ARTWORKS[2];
  const comicArt = ARTWORKS.find(a => a.category === 'comic-pages') || ARTWORKS[3];
  const coverArt = ARTWORKS.find(a => a.category === 'cover-arts') || ARTWORKS[4];

  // Dynamic ember particles for background animation
  const sparks = [
    { left: '8%', size: '3px', duration: '9s', delay: '0s', color: '#FF3366' },
    { left: '22%', size: '4px', duration: '12s', delay: '2s', color: '#00F0FF' },
    { left: '38%', size: '2px', duration: '8s', delay: '1s', color: '#FFB800' },
    { left: '55%', size: '5px', duration: '14s', delay: '4s', color: '#FF3366' },
    { left: '68%', size: '3px', duration: '10s', delay: '3s', color: '#00F0FF' },
    { left: '82%', size: '4px', duration: '11s', delay: '1.5s', color: '#FFB800' },
    { left: '94%', size: '2px', duration: '13s', delay: '5s', color: '#FF3366' },
  ];

  return (
    <div className="relative overflow-hidden space-y-20 sm:space-y-28 pb-20">
      
      {/* ═══════════════════════════════════════════════════════════
          DYNAMIC SAKUGA / LASER GRID BACKGROUND
          ═══════════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Moving Laser Grid */}
        <div className="absolute inset-0 sakuga-grid-bg opacity-45" />

        {/* Ambient Top Glow Orbs */}
        <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-brand-accent/15 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-brand-cyber/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-40 left-10 w-[550px] h-[550px] bg-brand-amber/10 rounded-full blur-[160px]" />

        {/* Rising Sakuga Embers / Spark Particles */}
        {sparks.map((spark, idx) => (
          <span
            key={idx}
            className="sakuga-spark"
            style={{
              left: spark.left,
              width: spark.size,
              height: spark.size,
              backgroundColor: spark.color,
              boxShadow: `0 0 10px ${spark.color}, 0 0 20px ${spark.color}`,
              animationDuration: spark.duration,
              animationDelay: spark.delay,
            }}
          />
        ))}
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative pt-4 sm:pt-6 lg:pt-8 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-dark-900 border-2 border-dark-700 shadow-solid-sm hover:border-brand-accent transition-colors">
                <span className="w-2 h-2 rounded-full bg-brand-accent animate-ping" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-300">
                  Illustrator • Character Artist • Comic Artist • Animator
                </span>
              </div>

              {/* Main Brand Title */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-display text-white leading-[1.05]">
                  UNRIVALED <span className="text-brand-accent">ART</span>
                </h1>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-300 font-display tracking-tight leading-snug">
                  I turn ideas into <span className="text-white border-b-2 border-brand-accent">characters</span>, <span className="text-brand-cyber">stories</span> & <span className="text-brand-amber">worlds</span>.
                </p>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-neutral-400 max-w-xl leading-relaxed">
                Welcome to the official creative home of <strong>Unrivaled Art</strong>. Delivering iconic character designs, best-selling book covers, sequential comic pages, and 2D sakuga animations for authors, game developers, and creators worldwide.
              </p>

              {/* Hero Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <button
                  onClick={() => {
                    setActiveView('hire');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="btn-primary px-8 py-4 text-sm font-bold tracking-widest flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>HIRE ME / COMMISSION</span>
                </button>

                <button
                  onClick={() => {
                    setActiveView('portfolio');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="btn-secondary px-8 py-4 text-sm font-bold tracking-widest flex items-center justify-center gap-2"
                >
                  <span>VIEW MY WORK</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Quick stats / proof */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t-2 border-dark-800 text-left font-mono">
                <div className="group cursor-default">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-brand-accent transition-colors">220+</div>
                  <div className="text-[11px] text-neutral-500 uppercase">Original Works</div>
                </div>
                <div className="group cursor-default">
                  <div className="text-2xl sm:text-3xl font-extrabold text-brand-accent group-hover:scale-105 transition-transform inline-block">5★</div>
                  <div className="text-[11px] text-neutral-500 uppercase">Client Rating</div>
                </div>
                <div className="group cursor-default">
                  <div className="text-2xl sm:text-3xl font-extrabold text-brand-cyber group-hover:text-cyan-300 transition-colors">2D</div>
                  <div className="text-[11px] text-neutral-500 uppercase">Sakuga & Motion</div>
                </div>
              </div>

            </div>

            {/* Hero Right Composition (2D Sakuga Cut Hero Spotlight) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Hero Card (2D Sakuga Cut - Pure video without any text caption) */}
                <div 
                  onClick={() => onSelectArtwork(animationArt)}
                  className="relative group cursor-pointer bg-dark-900 border-2 border-brand-cyber hover:border-cyan-400 transition-all duration-300 shadow-[0_10px_35px_rgba(0,240,255,0.2)] hover:shadow-[0_15px_45px_rgba(0,240,255,0.4)] overflow-hidden"
                >
                  <div className="relative aspect-[4/5] bg-dark-950 overflow-hidden flex items-center justify-center">
                    <video
                      src="/Animation/New Project 4 [64D7B43].mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                    />
                  </div>
                </div>

                {/* Floating Supporting Artwork Thumbnail (Battle Elf - Pure Image Without Caption) */}
                <div 
                  onClick={() => onSelectArtwork(battleElfArt)}
                  className="hidden sm:block absolute -bottom-6 -left-8 w-36 aspect-square bg-dark-900 border-2 border-dark-700 hover:border-brand-accent hover:scale-105 cursor-pointer shadow-[0_8px_25px_rgba(0,0,0,0.9)] transition-all duration-300 p-1.5 group overflow-hidden"
                >
                  <div className="w-full h-full bg-dark-950 overflow-hidden">
                    <img
                      src="/opt/Illustrations/Battle elf illustration.webp"
                      alt="Featured Artwork"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Floating Clean Badge */}
                <div className="absolute -top-3 -right-3 bg-brand-cyber text-dark-950 px-3 py-1 font-mono text-xs font-bold tracking-widest uppercase shadow-solid-sm">
                  ⚡ 2D SAKUGA
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SELECTED WORKS (CURATED SHOWCASE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 border-b-2 border-dark-800 pb-6 text-left">
          <div>
            <div className="inline-flex items-center gap-2 text-brand-accent font-mono text-xs font-bold tracking-widest uppercase mb-2">
              <Palette className="w-4 h-4" />
              <span>Curated Masterpieces</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
              SELECTED WORKS
            </h2>
          </div>

          <button
            onClick={() => {
              setActiveView('portfolio');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="btn-secondary self-start md:self-auto flex items-center gap-2 font-mono text-xs tracking-wider"
          >
            <span>VIEW FULL PORTFOLIO ({ARTWORKS.length}+ WORKS)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Asymmetrical Gallery Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Large Featured Illustration (VAMPIRE QUEEN BOLD) */}
          <div 
            onClick={() => onSelectArtwork(vampireQueenArt)}
            className="md:col-span-8 bg-dark-900 border-2 border-dark-800 hover:border-brand-accent transition-all duration-300 group cursor-pointer shadow-solid hover:shadow-[0_10px_35px_rgba(255,51,102,0.25)] flex flex-col justify-between overflow-hidden"
          >
            <div className="relative aspect-[16/10] bg-dark-950 overflow-hidden">
              <img
                src="/opt/Illustrations/Vampire Queen splash art.webp"
                alt="Vampire Queen Splash Art"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-dark-950/90 border border-brand-accent text-brand-accent font-mono text-xs font-bold uppercase tracking-wider">
                  Featured Masterpiece
                </span>
              </div>
            </div>
            <div className="p-6 bg-dark-900 border-t-2 border-dark-800 flex items-center justify-between text-left">
              <div>
                <h3 className="text-2xl font-extrabold text-white font-display group-hover:text-brand-accent transition-colors">Vampire Queen</h3>
                <p className="text-xs text-neutral-400 font-mono mt-1">Dark gothic fantasy character design & royal atmosphere</p>
              </div>
              <span className="btn-outline px-4 py-2 text-xs font-mono flex items-center gap-1 group-hover:bg-brand-accent group-hover:text-white transition-colors">
                <span>INSPECT</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Card 2: Book / Comic Cover */}
          <div 
            onClick={() => onSelectArtwork(coverArt)}
            className="md:col-span-4 bg-dark-900 border-2 border-dark-800 hover:border-brand-accent transition-all duration-300 group cursor-pointer shadow-solid hover:shadow-[0_10px_30px_rgba(0,240,255,0.2)] flex flex-col justify-between overflow-hidden"
          >
            <div className="relative aspect-[3/4] bg-dark-950 overflow-hidden">
              <img
                src={coverArt?.image}
                alt={coverArt?.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-dark-950/90 border border-dark-700 text-brand-cyber font-mono text-xs font-bold uppercase tracking-wider">
                  {coverArt?.categoryLabel || 'Book Cover'}
                </span>
              </div>
            </div>
            <div className="p-6 bg-dark-900 border-t-2 border-dark-800 text-left">
              <h3 className="text-lg font-bold text-white font-display group-hover:text-brand-cyber transition-colors">{coverArt?.title}</h3>
              <p className="text-xs text-neutral-400 font-mono mt-1">{coverArt?.description}</p>
            </div>
          </div>

          {/* Card 3: Zuko Splash Art (Mini Media in Grid, Not Bold) */}
          <div 
            onClick={() => onSelectArtwork(zukoArt)}
            className="md:col-span-4 bg-dark-900 border-2 border-dark-800 hover:border-brand-accent transition-all duration-300 group cursor-pointer shadow-solid hover:shadow-[0_10px_30px_rgba(255,51,102,0.2)] flex flex-col justify-between overflow-hidden"
          >
            <div className="relative aspect-[4/3] bg-dark-950 overflow-hidden">
              <img
                src="/opt/Illustrations/Zuko splash art.webp"
                alt="Zuko Splash Art"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-dark-950/90 border border-dark-700 text-brand-accent font-mono text-xs font-bold uppercase tracking-wider">
                  Character Splash
                </span>
              </div>
            </div>
            <div className="p-6 bg-dark-900 border-t-2 border-dark-800 text-left">
              <h3 className="text-lg font-bold text-white font-display group-hover:text-brand-accent transition-colors">Zuko — Flame Master</h3>
              <p className="text-xs text-neutral-400 font-mono mt-1">High-impact dynamic lighting illustration</p>
            </div>
          </div>

          {/* Card 4: Character Turnaround Sheet */}
          <div 
            onClick={() => onSelectArtwork(characterDesignArt)}
            className="md:col-span-4 bg-dark-900 border-2 border-dark-800 hover:border-brand-accent transition-all duration-300 group cursor-pointer shadow-solid hover:shadow-[0_10px_30px_rgba(255,184,0,0.2)] flex flex-col justify-between overflow-hidden"
          >
            <div className="relative aspect-[4/3] bg-dark-950 overflow-hidden">
              <img
                src={characterDesignArt?.image}
                alt="Character Design Model Sheet"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-dark-950/90 border border-dark-700 text-brand-amber font-mono text-xs font-bold uppercase tracking-wider">
                  Character Design
                </span>
              </div>
            </div>
            <div className="p-6 bg-dark-900 border-t-2 border-dark-800 text-left">
              <h3 className="text-lg font-bold text-white font-display group-hover:text-brand-amber transition-colors">{characterDesignArt?.title || 'Model Sheet'}</h3>
              <p className="text-xs text-neutral-400 font-mono mt-1">Full 3-view turnaround & expression art</p>
            </div>
          </div>

          {/* Card 5: Comic Manga Spread */}
          <div 
            onClick={() => onSelectArtwork(comicArt)}
            className="md:col-span-4 bg-dark-900 border-2 border-dark-800 hover:border-brand-accent transition-all duration-300 group cursor-pointer shadow-solid hover:shadow-[0_10px_30px_rgba(255,51,102,0.2)] flex flex-col justify-between overflow-hidden"
          >
            <div className="relative aspect-[4/3] bg-dark-950 overflow-hidden">
              <img
                src={comicArt?.image}
                alt="Manga Comic Spread"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-dark-950/90 border border-dark-700 text-brand-accent font-mono text-xs font-bold uppercase tracking-wider">
                  Sequential Art
                </span>
              </div>
            </div>
            <div className="p-6 bg-dark-900 border-t-2 border-dark-800 text-left">
              <h3 className="text-lg font-bold text-white font-display group-hover:text-brand-accent transition-colors">{comicArt?.title || 'Manga Page'}</h3>
              <p className="text-xs text-neutral-400 font-mono mt-1">Kinetic action inking & screentones</p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. SERVICES PREVIEW & PRICING */}
      <section className="bg-dark-900/90 border-y-2 border-dark-800 py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-brand-accent font-mono text-xs font-bold tracking-widest uppercase">
              <Layers className="w-4 h-4" />
              <span>Transparent & Professional</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
              SERVICES & STARTING RATES
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base">
              Clear upfront pricing with zero guesswork. Starting rates cover high-resolution digital master files and dedicated revision milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-dark-950 border-2 border-dark-800 hover:border-brand-accent transition-all duration-300 p-6 flex flex-col justify-between group shadow-solid hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(255,51,102,0.2)]"
              >
                <div className="space-y-4 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{service.icon}</span>
                    <span className="font-mono text-xs text-neutral-400 uppercase bg-dark-900 px-2 py-1 border border-dark-800">
                      {service.turnaround}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white font-display group-hover:text-brand-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-2 line-clamp-2">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-dark-800">
                    <div className="text-2xl font-black font-display text-white">
                      {service.startingPrice}
                    </div>
                    <div className="text-[11px] font-mono text-neutral-500">Starting baseline</div>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => {
                      onSelectService(service.id);
                      setActiveView('hire');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full btn-outline text-center justify-center font-mono text-xs tracking-wider group-hover:bg-brand-accent group-hover:text-white group-hover:border-brand-accent transition-colors"
                  >
                    <span>Request This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => {
                setActiveView('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-secondary px-8 py-4 font-mono text-xs tracking-widest inline-flex items-center gap-2"
            >
              <span>VIEW FULL PRICING BREAKDOWN & COMMERCIAL TIERS</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 4. FOUR-STEP COMMISSION WORKFLOW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left relative z-10">
        <div className="mb-12 border-b-2 border-dark-800 pb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-accent uppercase">
            Simple & Transparent
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight mt-1">
            HOW COMMISSIONING WORKS
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMMISSION_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-dark-900 border-2 border-dark-800 p-6 space-y-4 shadow-solid relative overflow-hidden group hover:border-brand-accent hover:-translate-y-1 transition-all"
            >
              <div className="text-4xl font-extrabold font-display text-dark-700 group-hover:text-brand-accent/40 transition-colors">
                {step.step}
              </div>
              <h3 className="text-lg font-bold text-white font-display">{step.title}</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-sans">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CLIENT TESTIMONIALS & REVIEWS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-left mb-12 border-b-2 border-dark-800 pb-6">
          <div className="inline-flex items-center gap-1.5 text-brand-amber font-mono text-xs font-bold tracking-widest uppercase mb-1">
            <Star className="w-4 h-4 fill-brand-amber text-brand-amber" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            CLIENT REVIEWS & REPUTATION
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-dark-900 border-2 border-dark-800 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-solid hover:border-brand-accent hover:-translate-y-1 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-amber text-brand-amber" />
                  ))}
                </div>
                <p className="text-sm text-neutral-200 leading-relaxed italic">
                  "{review.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-dark-800 flex items-center justify-between">
                <div>
                  <div className="font-bold text-white font-display text-sm">{review.author}</div>
                  <div className="text-[11px] font-mono text-neutral-400">{review.role}</div>
                </div>
                <span className="text-[10px] font-mono bg-dark-950 px-2 py-1 border border-dark-800 text-brand-accent">
                  {review.project}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. COMMON QUESTIONS (FAQ PREVIEW) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left relative z-10">
        <div className="text-center mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 text-brand-cyber font-mono text-xs font-bold tracking-widest uppercase">
            <HelpCircle className="w-4 h-4" />
            <span>Quick Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.slice(0, 4).map((faq, idx) => (
            <div
              key={idx}
              className="bg-dark-900 border-2 border-dark-800 hover:border-brand-cyber p-6 space-y-2 shadow-solid transition-colors"
            >
              <h3 className="text-base font-bold text-white font-display flex items-center gap-3">
                <span className="font-mono text-xs text-brand-accent">0{idx + 1}.</span>
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pl-7">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
          <button
            onClick={() => {
              setActiveView('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-mono font-bold tracking-wider uppercase text-brand-accent hover:text-white inline-flex items-center gap-1.5 transition-colors"
          >
            <span>HAVE MORE QUESTIONS? VISIT CONTACT & FAQ</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

    </div>
  );
}
