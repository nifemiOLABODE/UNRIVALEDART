import React, { useState } from 'react';
import { Sparkles, Film, ArrowRight, Lock, Eye, Check } from 'lucide-react';
import { ARTWORKS, NSFW_ARTWORKS, CATEGORIES } from '../data/artworks';

export default function PortfolioView({ onSelectArtwork, onOpenAgeGate, isAgeVerified }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleCategoryChange = (catId) => {
    if (catId === 'nsfw' && !isAgeVerified) {
      onOpenAgeGate();
      return;
    }
    setActiveCategory(catId);
  };

  const getFilteredArtworks = () => {
    if (activeCategory === 'nsfw') {
      return isAgeVerified ? NSFW_ARTWORKS : [];
    }
    if (activeCategory === 'all') {
      return ARTWORKS;
    }
    return ARTWORKS.filter(art => art.category === activeCategory);
  };

  const displayedWorks = getFilteredArtworks();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-12">
      
      {/* Page Header */}
      <div className="text-left space-y-4 border-b-2 border-dark-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-dark-900 border border-dark-700 text-brand-accent font-mono text-xs font-bold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Complete Works Archive</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display tracking-tight">
          PORTFOLIO ARCHIVE
        </h1>
        <p className="text-sm sm:text-base text-neutral-400 max-w-2xl">
          Browse original illustrations, character designs, serialized comic pages, cinematic book covers, and 2D animation clips. Click any artwork to view high-resolution details or request a custom commission.
        </p>
      </div>

      {/* Filter Tabs (Solid buttons without glassmorphism) */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          const isVault = cat.id === 'nsfw';

          return (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`px-4 py-2.5 text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-2 border-2 ${
                isActive
                  ? isVault
                    ? 'bg-brand-accent text-white border-brand-accent shadow-solid-accent'
                    : 'bg-brand-accent text-white border-brand-accent shadow-solid-accent'
                  : isVault
                    ? 'bg-dark-900 text-brand-accent border-brand-accent/40 hover:border-brand-accent'
                    : 'bg-dark-900 text-neutral-300 border-dark-700 hover:border-neutral-400 hover:text-white'
              }`}
            >
              {isVault && <Lock className="w-3.5 h-3.5" />}
              <span>{cat.label}</span>
              {isVault && !isAgeVerified && (
                <span className="text-[10px] bg-dark-950 px-1.5 py-0.2 border border-brand-accent/40 text-brand-accent">
                  18+
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Category count indicator */}
      <div className="flex items-center justify-between text-xs font-mono text-neutral-500 border-b border-dark-800 pb-3">
        <span>SHOWING {displayedWorks.length} ARTWORKS</span>
        <span className="hidden sm:inline">HIGH-RESOLUTION RENDERINGS & ANIMATION REELS</span>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedWorks.map((art) => (
          <div
            key={art.id}
            onClick={() => onSelectArtwork(art)}
            className="group bg-dark-900 border-2 border-dark-800 hover:border-brand-accent transition-all duration-300 cursor-pointer shadow-solid overflow-hidden flex flex-col justify-between"
          >
            {/* Image/Video Thumbnail Container */}
            <div className="relative aspect-[4/5] bg-dark-950 overflow-hidden flex items-center justify-center">
              {art.isVideo ? (
                <div className="relative w-full h-full">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-dark-950/40">
                    <div className="w-12 h-12 bg-brand-cyber text-dark-950 flex items-center justify-center shadow-solid-sm group-hover:scale-110 transition-transform">
                      <Film className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              ) : (
                <img
                  src={art.image}
                  alt={art.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              )}

              {/* Hover Details Overlay */}
              <div className="absolute inset-0 bg-dark-950/85 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-6 flex flex-col justify-between text-left">
                <span className="self-start px-2 py-1 bg-brand-accent text-white text-[10px] font-mono font-bold uppercase tracking-wider">
                  {art.categoryLabel || art.category}
                </span>

                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-white font-display leading-snug">
                    {art.title}
                  </h4>
                  <p className="text-xs text-neutral-300 font-mono line-clamp-2">
                    {art.description}
                  </p>
                  <div className="pt-2 flex items-center gap-1 text-xs font-mono text-brand-cyber font-bold uppercase">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Click to Expand Details</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card Bar */}
            <div className="p-4 bg-dark-900 border-t-2 border-dark-800 flex items-center justify-between text-left">
              <div className="truncate pr-2">
                <h3 className="text-sm font-bold text-white font-display truncate">
                  {art.title}
                </h3>
                <span className="text-[11px] font-mono text-neutral-400">
                  {art.year || '2025–2026'} • {art.categoryLabel}
                </span>
              </div>
              <span className="text-xs font-mono font-bold text-brand-accent flex-shrink-0">
                VIEW →
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
