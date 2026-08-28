import React from 'react';
import { ArrowUpRight, Sparkles, Heart } from 'lucide-react';

export default function Footer({ setActiveView, onOpenShop }) {
  const currentYear = new Date().getFullYear();

  const handleNav = (view) => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 border-t-2 border-dark-800 text-neutral-400">
      {/* Commission Banner CTA */}
      <div className="border-b-2 border-dark-800 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-accent/10 border border-brand-accent/30 text-brand-accent text-xs font-mono font-bold tracking-widest uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Ready To Bring Your Vision To Life?</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display mb-3">
                LET'S CREATE SOMETHING <span className="text-brand-accent">UNRIVALED.</span>
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base">
                Whether you need a bestselling book cover, iconic character turnaround sheets, dynamic comic pages, or sakuga 2D animation — let’s make it unforgettable.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => handleNav('hire')}
                className="w-full sm:w-auto btn-primary px-8 py-4 text-sm font-bold tracking-widest"
              >
                START A COMMISSION
              </button>
              <button
                onClick={() => handleNav('services')}
                className="w-full sm:w-auto btn-secondary px-8 py-4 text-sm font-bold tracking-widest"
              >
                VIEW PRICING
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-dark-900 border-2 border-dark-700 flex items-center justify-center p-1">
                <img 
                  src="/logo/My logo.PNG" 
                  alt="Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <div>
                <div className="text-xl font-extrabold text-white font-display tracking-[0.18em] flex items-center select-none uppercase">
                  <span>UNRIVAL</span>
                  <span className="text-brand-accent font-mono mx-[1px] font-bold">Ξ</span>
                  <span>D</span>
                </div>
                <div className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                  Art & Visual Studio
                </div>
              </div>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              Illustrator, character designer, comic artist, and 2D animator based in Nigeria. Transforming raw concepts into iconic characters and immersive visual stories.
            </p>
            <div className="pt-2">
              <span className="font-mono text-xs text-neutral-500 block">
                Direct Contact: <a href="mailto:unrivaledart@gmail.com" className="text-brand-accent hover:underline font-semibold">unrivaledart@gmail.com</a>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-white border-b border-dark-800 pb-2">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-brand-accent transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('portfolio')} className="hover:text-brand-accent transition-colors">
                  Full Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-brand-accent transition-colors">
                  Services & Pricing
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-brand-accent transition-colors">
                  About the Artist
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-brand-accent transition-colors">
                  General Contact
                </button>
              </li>
              <li>
                <button onClick={onOpenShop} className="text-brand-amber hover:text-amber-300 transition-colors flex items-center gap-1">
                  <span>Merch & Prints</span>
                  <span className="text-[10px] bg-dark-800 px-1 py-0.2 border border-dark-700">SOON</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-white border-b border-dark-800 pb-2">
              Creative Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-brand-accent transition-colors">
                  Character Illustration
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-brand-accent transition-colors">
                  Character Design & Model Sheets
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-brand-accent transition-colors">
                  Book & Novel Covers
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-brand-accent transition-colors">
                  Comic & Manga Pages
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-brand-accent transition-colors">
                  2D Sakuga Animation
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-brand-accent transition-colors">
                  Chibi & Stream Emotes
                </button>
              </li>
            </ul>
          </div>

          {/* Social Channels */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-white border-b border-dark-800 pb-2">
              Follow & Connect
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-brand-accent transition-colors flex items-center justify-between group"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </li>
              <li>
                <a 
                  href="https://x.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-brand-accent transition-colors flex items-center justify-between group"
                >
                  <span>X (Twitter)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </li>
              <li>
                <a 
                  href="https://tiktok.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-brand-accent transition-colors flex items-center justify-between group"
                >
                  <span>TikTok</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </li>
              <li>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-brand-accent transition-colors flex items-center justify-between group"
                >
                  <span>YouTube</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </li>
              <li>
                <a 
                  href="https://artstation.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-brand-accent transition-colors flex items-center justify-between group"
                >
                  <span>ArtStation</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-8 border-t border-dark-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <p>© {currentYear} UNRIVALED ART. All rights reserved. Original artwork & characters.</p>
          <div className="flex items-center gap-1 text-neutral-400">
            <span>Crafted with passion for stories & characters</span>
            <Heart className="w-3.5 h-3.5 text-brand-accent fill-brand-accent inline" />
          </div>
        </div>
      </div>
    </footer>
  );
}
