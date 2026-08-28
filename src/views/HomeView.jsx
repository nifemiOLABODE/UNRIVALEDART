import React from 'react';
import { Sparkles, ArrowRight, Palette, Layers, Film, BookOpen, Star, HelpCircle, ShieldCheck, ChevronRight } from 'lucide-react';
import { ARTWORKS } from '../data/artworks';
import { SERVICES, COMMISSION_STEPS } from '../data/services';
import { TESTIMONIALS } from '../data/testimonials';
import { FAQS } from '../data/faqs';

export default function HomeView({ setActiveView, onSelectArtwork, onSelectService }) {
  // Curate 6 selected works for the homepage asymmetrical showcase
  const featuredArtworks = ARTWORKS.filter(a => a.featured).slice(0, 6);

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 lg:pt-28 overflow-hidden">
        {/* Background Grid & Manga Accents */}
        <div className="absolute inset-0 pointer-events-none manga-dots opacity-20" />
        <div className="absolute -top-40 right-0 w-96 h-96 bg-brand-accent/10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-cyber/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-dark-900 border-2 border-dark-700 shadow-solid-sm">
                <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
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
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">100+</div>
                  <div className="text-[11px] text-neutral-500 uppercase">Original Works</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-brand-accent">5★</div>
                  <div className="text-[11px] text-neutral-500 uppercase">Client Rating</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-brand-cyber">2D</div>
                  <div className="text-[11px] text-neutral-500 uppercase">Sakuga & Motion</div>
                </div>
              </div>

            </div>

            {/* Hero Right Composition (Vampire Queen Spotlight) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Hero Card (Vampire Queen Splash Art) */}
                <div 
                  onClick={() => onSelectArtwork(ARTWORKS.find(a => a.id === 'ill-vampire-queen') || ARTWORKS[1])}
                  className="relative group cursor-pointer bg-dark-900 border-2 border-dark-700 hover:border-brand-accent transition-all duration-300 shadow-solid-lg overflow-hidden"
                >
                  <div className="relative aspect-[4/5] bg-dark-950 overflow-hidden">
                    <img
                      src="/opt/Illustrations/Vampire Queen splash art.webp"
                      alt="Vampire Queen by Unrivaled Art"
                      loading="eager"
                      decoding="async"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                    />
                    
                    {/* Hover overlay with details */}
                    <div className="absolute inset-0 bg-dark-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-6 flex flex-col justify-between text-left">
                      <span className="self-start px-2.5 py-1 bg-brand-accent text-white text-[11px] font-mono font-bold uppercase tracking-wider">
                        Featured Masterpiece
                      </span>
                      <div>
                        <h4 className="text-xl font-bold text-white font-display">Vampire Queen</h4>
                        <p className="text-xs text-neutral-300 mt-1 font-mono">Dark gothic character design & majestic aura</p>
                        <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-brand-cyber font-bold font-mono uppercase">
                          <span>Click to Inspect Full Art</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card footer badge */}
                  <div className="p-4 bg-dark-900 border-t-2 border-dark-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                        Vampire Queen
                      </div>
                      <div className="text-[11px] font-mono text-neutral-400">
                        Original Character • High Detail
                      </div>
                    </div>
                    <span className="px-2.5 py-1 bg-dark-800 border border-dark-700 text-brand-accent text-xs font-mono font-bold">
                      VIEW
                    </span>
                  </div>
                </div>

                {/* Floating Supporting Artwork Card (Zuko) */}
                <div 
                  onClick={() => onSelectArtwork(ARTWORKS.find(a => a.id === 'ill-zuko-splash') || ARTWORKS[0])}
                  className="hidden sm:block absolute -bottom-8 -left-10 w-48 bg-dark-900 border-2 border-dark-700 hover:border-brand-accent cursor-pointer shadow-solid transition-all duration-300 p-2 group"
                >
                  <div className="aspect-square bg-dark-950 overflow-hidden mb-2">
                    <img
                      src="/opt/Illustrations/Zuko splash art.webp"
                      alt="Zuko Splash Art"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-[10px] font-mono font-bold text-white uppercase truncate">
                    Zuko — Fire & Embers
                  </div>
                  <div className="text-[9px] font-mono text-brand-accent uppercase">
                    Splash Art
                  </div>
                </div>

                {/* Floating Tag */}
                <div className="absolute -top-4 -right-4 bg-brand-accent text-white px-3 py-1 font-mono text-xs font-bold tracking-widest uppercase shadow-solid-sm">
                  ⚡ ORIGINAL WORK
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SELECTED WORKS (ASYMMETRICAL CURATED SHOWCASE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          
          {/* Card 1: Large Featured Illustration */}
          <div 
            onClick={() => onSelectArtwork(featuredArtworks[0])}
            className="md:col-span-8 bg-dark-900 border-2 border-dark-800 hover:border-brand-accent transition-all duration-300 group cursor-pointer shadow-solid flex flex-col justify-between overflow-hidden"
          >
            <div className="relative aspect-[16/10] bg-dark-950 overflow-hidden">
              <img
                src={featuredArtworks[0].image}
                alt={featuredArtworks[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-dark-950/90 border border-dark-700 text-brand-accent font-mono text-xs font-bold uppercase tracking-wider">
                  {featuredArtworks[0].categoryLabel}
                </span>
              </div>
            </div>
            <div className="p-6 bg-dark-900 border-t-2 border-dark-800 flex items-center justify-between text-left">
              <div>
                <h3 className="text-xl font-bold text-white font-display">{featuredArtworks[0].title}</h3>
                <p className="text-xs text-neutral-400 font-mono mt-1">{featuredArtworks[0].description}</p>
              </div>
              <span className="btn-outline px-4 py-2 text-xs font-mono flex items-center gap-1">
                <span>INSPECT</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Card 2: Tall Comic / Book Cover */}
          <div 
            onClick={() => onSelectArtwork(featuredArtworks[2] || featuredArtworks[1])}
            className="md:col-span-4 bg-dark-900 border-2 border-dark-800 hover:border-brand-accent transition-all duration-300 group cursor-pointer shadow-solid flex flex-col justify-between overflow-hidden"
          >
            <div className="relative aspect-[3/4] bg-dark-950 overflow-hidden">
              <img
                src={featuredArtworks[2]?.image || featuredArtworks[1]?.image}
                alt="Featured Art"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-dark-950/90 border border-dark-700 text-brand-cyber font-mono text-xs font-bold uppercase tracking-wider">
                  {featuredArtworks[2]?.categoryLabel || 'Book Cover'}
                </span>
              </div>
            </div>
            <div className="p-6 bg-dark-900 border-t-2 border-dark-800 text-left">
              <h3 className="text-lg font-bold text-white font-display">{featuredArtworks[2]?.title}</h3>
              <p className="text-xs text-neutral-400 font-mono mt-1">{featuredArtworks[2]?.client}</p>
            </div>
          </div>

          {/* Card 3: 2D Animation Reel Cut (Auto-playing loop) */}
          <div 
            onClick={() => onSelectArtwork(ARTWORKS.find(a => a.isVideo) || featuredArtworks[3])}
            className="md:col-span-4 bg-dark-900 border-2 border-brand-cyber hover:border-cyan-400 transition-all duration-300 group cursor-pointer shadow-solid-cyber flex flex-col justify-between overflow-hidden"
          >
            <div className="relative aspect-[4/3] bg-dark-950 overflow-hidden flex items-center justify-center">
              <video
                src="/Animation/New Project 4 [64D7B43].mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 pointer-events-none"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-dark-950/90 border border-brand-cyber text-brand-cyber font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-cyber animate-pulse" />
                  <span>2D Sakuga Cut</span>
                </span>
              </div>
            </div>
            <div className="p-6 bg-dark-900 border-t-2 border-dark-800 text-left">
              <div className="text-xs font-mono font-bold text-brand-cyber uppercase mb-1">Sakuga 2D Animation</div>
              <h3 className="text-lg font-bold text-white font-display">Frame-By-Frame Action Cut</h3>
            </div>
          </div>

          {/* Card 4: Character Turnaround Sheet */}
          <div 
            onClick={() => onSelectArtwork(ARTWORKS.find(a => a.category === 'character-design') || featuredArtworks[4])}
            className="md:col-span-4 bg-dark-900 border-2 border-dark-800 hover:border-brand-accent transition-all duration-300 group cursor-pointer shadow-solid flex flex-col justify-between overflow-hidden"
          >
            <div className="relative aspect-[4/3] bg-dark-950 overflow-hidden">
              <img
                src="/Character design/character design PF copy.jpg"
                alt="Character Design Model Sheet"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-dark-950/90 border border-dark-700 text-brand-amber font-mono text-xs font-bold uppercase tracking-wider">
                  Character Design
                </span>
              </div>
            </div>
            <div className="p-6 bg-dark-900 border-t-2 border-dark-800 text-left">
              <h3 className="text-lg font-bold text-white font-display">Apex Striker Model Sheet</h3>
              <p className="text-xs text-neutral-400 font-mono mt-1">Full 3-view turnaround & expression art</p>
            </div>
          </div>

          {/* Card 5: Comic Manga Spread */}
          <div 
            onClick={() => onSelectArtwork(ARTWORKS.find(a => a.category === 'comic-pages') || featuredArtworks[5])}
            className="md:col-span-4 bg-dark-900 border-2 border-dark-800 hover:border-brand-accent transition-all duration-300 group cursor-pointer shadow-solid flex flex-col justify-between overflow-hidden"
          >
            <div className="relative aspect-[4/3] bg-dark-950 overflow-hidden">
              <img
                src="/Comic pages/export202504241909546842.png"
                alt="Manga Comic Spread"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-dark-950/90 border border-dark-700 text-brand-accent font-mono text-xs font-bold uppercase tracking-wider">
                  Sequential Art
                </span>
              </div>
            </div>
            <div className="p-6 bg-dark-900 border-t-2 border-dark-800 text-left">
              <h3 className="text-lg font-bold text-white font-display">Chrono Rift — Manga Page</h3>
              <p className="text-xs text-neutral-400 font-mono mt-1">Kinetic action inking & screentones</p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. SERVICES PREVIEW & PRICING */}
      <section className="bg-dark-900 border-y-2 border-dark-800 py-20">
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

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="bg-dark-950 border-2 border-dark-800 hover:border-brand-accent transition-all duration-300 p-8 flex flex-col justify-between text-left shadow-solid group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-brand-accent uppercase tracking-widest px-2 py-0.5 bg-brand-accent/10 border border-brand-accent/30">
                      {srv.badge}
                    </span>
                    <span className="text-xs font-mono text-neutral-500">{srv.turnaround}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-display group-hover:text-brand-accent transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {srv.tagline}
                  </p>

                  <div className="pt-2 border-t border-dark-800">
                    <div className="text-[10px] font-mono uppercase text-neutral-500">Starting Price</div>
                    <div className="text-3xl font-extrabold font-mono text-white mt-0.5">
                      ${srv.startingPrice}+ <span className="text-xs font-normal text-neutral-400 font-sans">USD</span>
                    </div>
                  </div>

                  <ul className="space-y-1.5 pt-2 text-xs font-mono text-neutral-300 border-t border-dark-800">
                    {srv.includes.slice(0, 3).map((inc, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-brand-accent">✓</span>
                        <span className="truncate">{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-dark-800 space-y-2">
                  <button
                    onClick={() => {
                      onSelectService(srv.id);
                      setActiveView('hire');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full btn-primary py-3 text-xs font-mono font-bold tracking-wider"
                  >
                    REQUEST THIS SERVICE
                  </button>

                  <button
                    onClick={() => {
                      setActiveView('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full btn-outline py-2.5 text-[11px] font-mono text-neutral-400 hover:text-white"
                  >
                    View All Tiers & Add-ons
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => {
                setActiveView('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-secondary px-8 py-4 text-xs font-mono font-bold tracking-widest uppercase"
            >
              EXPLORE FULL SERVICES & PRICING BREAKDOWN →
            </button>
          </div>

        </div>
      </section>

      {/* 4. THE 4-STEP COMMISSION PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-brand-cyber font-mono text-xs font-bold tracking-widest uppercase">
            <ShieldCheck className="w-4 h-4" />
            <span>Smooth & Reliable Execution</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            HOW COMMISSIONS WORK
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            A stress-free, step-by-step collaborative process from initial concept to master digital delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMMISSION_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="bg-dark-900 border-2 border-dark-800 p-8 text-left space-y-4 shadow-solid relative group hover:border-brand-accent transition-colors"
            >
              <div className="text-4xl font-extrabold font-mono text-brand-accent">
                {step.step}
              </div>
              <h3 className="text-lg font-bold text-white font-display uppercase tracking-wider">
                {step.title}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {step.description}
              </p>
              <div className="absolute top-4 right-4 text-xs font-mono text-neutral-600">
                STEP {idx + 1}/4
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="bg-dark-900 border-y-2 border-dark-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-amber">
              Client Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              TRUSTED BY CREATORS & AUTHORS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((test) => (
              <div
                key={test.id}
                className="bg-dark-950 border-2 border-dark-800 p-8 text-left flex flex-col justify-between shadow-solid space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-brand-amber">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-amber" />
                    ))}
                  </div>
                  <p className="text-sm text-neutral-300 leading-relaxed italic">
                    "{test.comment}"
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-dark-800 pt-4">
                  <div>
                    <h4 className="text-base font-bold text-white font-display">{test.name}</h4>
                    <p className="text-xs font-mono text-neutral-400">{test.role}</p>
                  </div>
                  <span className="text-[11px] font-mono text-brand-cyber bg-dark-900 px-2.5 py-1 border border-dark-700">
                    {test.project}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ PREVIEW */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 text-brand-accent font-mono text-xs font-bold tracking-widest uppercase">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.slice(0, 5).map((faq, i) => (
            <div key={i} className="bg-dark-900 border-2 border-dark-800 p-6 space-y-2">
              <h3 className="text-base sm:text-lg font-bold text-white font-display">
                {faq.question}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center pt-4">
          <button
            onClick={() => {
              setActiveView('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="btn-outline font-mono text-xs px-6 py-3"
          >
            VIEW ALL FAQS ON THE SERVICES PAGE →
          </button>
        </div>
      </section>

    </div>
  );
}
