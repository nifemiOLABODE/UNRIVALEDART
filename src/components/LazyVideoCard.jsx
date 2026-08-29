import React, { useState, useRef, useEffect } from 'react';
import { Film } from 'lucide-react';

export default function LazyVideoCard({ art, className = '' }) {
  const [isInView, setIsInView] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (videoRef.current) {
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
              playPromise
                .then(() => setIsVideoReady(true))
                .catch(() => {
                  // Mobile autoplay blocked: poster image stays visible
                });
            }
          }
        } else {
          // Pause when scrolling away to save bandwidth & GPU cycles
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      },
      {
        rootMargin: '350px 0px',
        threshold: 0.05
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleManualPlay = () => {
    if (videoRef.current && !hasError) {
      videoRef.current.play()
        .then(() => setIsVideoReady(true))
        .catch(() => {});
    }
  };

  return (
    <div 
      ref={containerRef} 
      onClick={handleManualPlay}
      className={`relative w-full h-full bg-dark-950 overflow-hidden select-none ${className}`}
    >
      {/* 1. Permanent High-Resolution WebP Artwork (Always visible, 0% chance of blank box) */}
      <img
        src={art.image}
        alt={art.title}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 absolute inset-0"
      />

      {/* 2. Video Overlay: Renders on top only after frames start streaming */}
      {isInView && !hasError && (
        <video
          ref={videoRef}
          src={art.video}
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          preload="auto"
          onPlaying={() => setIsVideoReady(true)}
          onTimeUpdate={() => {
            if (!isVideoReady) setIsVideoReady(true);
          }}
          onError={() => {
            setHasError(true);
            setIsVideoReady(false);
          }}
          className={`w-full h-full object-cover group-hover:scale-105 transition-opacity duration-300 pointer-events-none absolute inset-0 ${
            isVideoReady ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {/* Animation Indicator Pill */}
      <div className="absolute top-3 right-3 bg-dark-950/85 border border-brand-cyber/50 text-brand-cyber text-[10px] font-mono px-2 py-0.5 uppercase tracking-wider flex items-center gap-1 z-10 pointer-events-none shadow-md">
        <Film className="w-3 h-3 text-brand-cyber" />
        <span>2D Motion</span>
      </div>
    </div>
  );
}
