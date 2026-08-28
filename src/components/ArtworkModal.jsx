import React from 'react';
import { X, Sparkles, Calendar, Tag, UserCheck, ArrowRight, ExternalLink } from 'lucide-react';

export default function ArtworkModal({ artwork, onClose, onCommissionLikeThis }) {
  if (!artwork) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-dark-950/95 overflow-y-auto">
      {/* Click backdrop to close */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-5xl bg-dark-900 border-2 border-dark-700 shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col md:flex-row">
        
        {/* Close Button Top Right */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 bg-dark-950 border border-dark-700 text-white hover:text-brand-accent hover:border-brand-accent transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Container (Image or Video) */}
        <div className="md:w-3/5 bg-dark-950 border-b-2 md:border-b-0 md:border-r-2 border-dark-800 flex items-center justify-center p-4 sm:p-8 min-h-[300px] max-h-[55vh] md:max-h-[80vh]">
          {artwork.isVideo ? (
            <video
              src={artwork.video}
              controls
              autoPlay
              loop
              playsInline
              className="max-h-full max-w-full object-contain border border-dark-700"
            />
          ) : (
            <img
              src={artwork.image}
              alt={artwork.title}
              className="max-h-full max-w-full object-contain select-none"
            />
          )}
        </div>

        {/* Details & Specs Sidebar */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-dark-900">
          <div className="space-y-6">
            {/* Category badge */}
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-brand-accent/10 border border-brand-accent/40 text-brand-accent text-xs font-mono font-bold tracking-widest uppercase">
                {artwork.categoryLabel || artwork.category}
              </span>
              <span className="font-mono text-xs text-neutral-400 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {artwork.year || '2025–2026'}
              </span>
            </div>

            {/* Title */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight">
                {artwork.title}
              </h2>
              {artwork.client && (
                <p className="text-xs font-mono text-neutral-400 mt-1 flex items-center gap-1">
                  <UserCheck className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>Project / Client: {artwork.client}</span>
                </p>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-neutral-300 leading-relaxed border-l-2 border-brand-accent pl-3.5">
              {artwork.description || 'Original artwork crafted with high-impact dynamic styling, lighting, and detail.'}
            </p>

            {/* Tags */}
            {artwork.tags && (
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-1">
                  <Tag className="w-3.5 h-3.5 text-brand-accent" />
                  <span>Attributes & Style</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {artwork.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="px-2.5 py-1 bg-dark-800 border border-dark-700 text-neutral-300 text-xs font-mono"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Commission Trigger */}
          <div className="pt-8 mt-6 border-t border-dark-800 space-y-3">
            <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
              LIKE WHAT YOU SEE?
            </div>
            <button
              onClick={() => {
                onClose();
                onCommissionLikeThis(artwork);
              }}
              className="w-full btn-primary py-3.5 flex items-center justify-center gap-2 group"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>COMMISSION SIMILAR ART</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-[11px] font-mono text-center text-neutral-500">
              Slots open • Average turnaround 5–14 days
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
