import React, { useState, useRef, useEffect } from 'react';
import { Film, Play } from 'lucide-react';

export default function LazyVideoCard({ art, className = '' }) {
  const [isInView, setIsInView] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
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
                .then(() => setIsVideoPlaying(true))
                .catch(() => {
                  // Autoplay policy prevented playback, keep poster active until tapped
                });
            }
          }
        } else {
          // Pause when far out of view to save battery & network bandwidth
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      },
      {
        rootMargin: '400px 0px', // Buffer 400px ahead so stream is ready before in-view
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
    if (videoRef.current) {
      videoRef.current.play()
        .then(() => setIsVideoPlaying(true))
        .catch(() => {});
    }
  };

  return (
    <div 
      ref={containerRef} 
      onClick={handleManualPlay}
      className={`relative w-full h-full bg-dark-950 overflow-hidden select-none ${className}`}
    >
      {/* 1. Instant high-res WebP poster (displays in 0.001s, 0 blank frame) */}
      <img
        src={art.image}
        alt={art.title}
        loading="lazy"
        decoding="async"
        className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-300 absolute inset-0 ${
          isVideoPlaying ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* 2. Video element: handles mobile autoplay, webkit attributes, & error fallbacks */}
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
          onLoadedData={() => setIsVideoPlaying(true)}
          onCanPlay={() => {
            if (videoRef.current) {
              videoRef.current.play().catch(() => {});
            }
          }}
          onPlay={() => setIsVideoPlaying(true)}
          onPlaying={() => setIsVideoPlaying(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover group-hover:scale-105 transition-opacity duration-300 pointer-events-none absolute inset-0 ${
            isVideoPlaying ? 'opacity-100' : 'opacity-0'
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
