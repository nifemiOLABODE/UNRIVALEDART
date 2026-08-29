import React, { useState, useEffect } from 'react';
import { Sparkles, Film, Lock, Eye, ShieldCheck, ChevronDown, Check } from 'lucide-react';
import { ARTWORKS, NSFW_ARTWORKS, CATEGORIES } from '../data/artworks';
import LazyVideoCard from '../components/LazyVideoCard';

const BATCH_SIZE = 12;

export default function PortfolioView({ 
  onSelectArtwork, 
  onOpenAgeGate, 
  isAgeVerified,
  activeCategory = 'all',
  setActiveCategory
}) {
  const [internalCategory, setInternalCategory] = useState(activeCategory || 'all');
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

  // Sync internal category with prop if provided
  useEffect(() => {
    if (activeCategory) {
      setInternalCategory(activeCategory);
      setVisibleCount(BATCH_SIZE);
    }
  }, [activeCategory]);

  const currentCategory = activeCategory || internalCategory;

  const handleCategoryChange = (catId) => {
    if (catId === 'nsfw' && !isAgeVerified) {
      onOpenAgeGate();
      return;
    }
    setVisibleCount(BATCH_SIZE);
    if (setActiveCategory) {
      setActiveCategory(catId);
    } else {
      setInternalCategory(catId);
    }
  };

  const getAllCategoryWorks = () => {
    if (currentCategory === 'nsfw') {
      return isAgeVerified ? NSFW_ARTWORKS : [];
    }
    if (currentCategory === 'all') {
      return ARTWORKS;
    }
    return ARTWORKS.filter(art => art.category === currentCategory);
  };

  const allFilteredWorks = getAllCategoryWorks();
  const displayedWorks = allFilteredWorks.slice(0, visibleCount);
  const hasMore = visibleCount < allFilteredWorks.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + BATCH_SIZE, allFilteredWorks.length));
  };

  const handleLoadAll = () => {
    setVisibleCount(allFilteredWorks.length);
  };

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
          Browse original illustrations, character designs, serialized comic pages, cinematic book covers, 2D animation clips, and 18+ mature vault pieces. Click any artwork to inspect in high resolution.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        {CATEGORIES.map((cat) => {
          const isActive = currentCategory === cat.id;
          const isVault = cat.id === 'nsfw';

          return (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`px-4 py-2.5 text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-2 border-2 ${
                isActive
                  ? 'bg-brand-accent text-white border-brand-accent shadow-solid-accent'
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
        <span>
          {currentCategory === 'nsfw' && !isAgeVerified 
            ? '18+ VAULT (AGE VERIFICATION REQUIRED)' 
            : `SHOWING ${displayedWorks.length} OF ${allFilteredWorks.length} ARTWORKS`}
        </span>
        <span className="hidden sm:inline">SMOOTH LAZY-RENDERED GALLERY</span>
      </div>

      {/* Vault Locked Notification if user selected NSFW without age verification */}
      {currentCategory === 'nsfw' && !isAgeVerified && (
        <div className="bg-dark-900 border-2 border-brand-accent p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-6 shadow-solid-accent my-8">
          <div className="w-14 h-14 bg-brand-accent/10 border-2 border-brand-accent text-brand-accent flex items-center justify-center mx-auto">
            <Lock className="w-7 h-7" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-extrabold text-white font-display">
              18+ VAULT RESTRICTED
            </h3>
            <p className="text-sm text-neutral-300 max-w-md mx-auto">
              This category contains 53 mature, pin-up, and uncensored character artworks. Please verify your age to enter.
            </p>
          </div>
          <button
            onClick={onOpenAgeGate}
            className="btn-primary px-8 py-3.5 font-mono text-xs tracking-widest inline-flex items-center gap-2"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>CONFIRM AGE TO VIEW VAULT (18+)</span>
          </button>
        </div>
      )}

      {/* Gallery Grid */}
      {displayedWorks.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedWorks.map((art) => (
            <div
              key={art.id}
              onClick={() => onSelectArtwork(art)}
              className={`${
                art.desktopOnly ? 'hidden sm:flex' : 'flex'
              } group bg-dark-900 border-2 border-dark-800 hover:border-brand-accent transition-all duration-200 cursor-pointer shadow-solid overflow-hidden flex-col justify-between`}
            >
              {/* Image/Video Thumbnail Container */}
              <div className="relative aspect-[4/5] bg-dark-950 overflow-hidden flex items-center justify-center">
                {art.isVideo ? (
                  <LazyVideoCard art={art} />
                ) : (
                  <img
                    src={art.image}
                    alt={art.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
                      <span>Click to View Full Art</span>
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
                  <span className="text-[11px] font-mono text-neutral-500 uppercase">
                    {art.categoryLabel || art.category}
                  </span>
                </div>
                <div className="w-8 h-8 bg-dark-950 border border-dark-700 flex items-center justify-center text-neutral-400 group-hover:text-brand-accent group-hover:border-brand-accent transition-colors flex-shrink-0">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Progressive Load More Bar */}
      {hasMore && (
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 border-t-2 border-dark-800">
          <button
            onClick={handleLoadMore}
            className="w-full sm:w-auto btn-primary px-8 py-4 font-mono text-xs tracking-widest flex items-center justify-center gap-2"
          >
            <ChevronDown className="w-4 h-4" />
            <span>LOAD MORE WORKS (+{Math.min(BATCH_SIZE, allFilteredWorks.length - visibleCount)})</span>
          </button>

          <button
            onClick={handleLoadAll}
            className="w-full sm:w-auto btn-secondary px-6 py-4 font-mono text-xs tracking-widest text-neutral-400 hover:text-white"
          >
            <span>LOAD ALL ({allFilteredWorks.length})</span>
          </button>
        </div>
      )}
    </div>
  );
}
