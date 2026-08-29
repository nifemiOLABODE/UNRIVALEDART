import React, { useState, useRef, useEffect } from 'react';
import { Film } from 'lucide-react';

export default function LazyVideoCard({ art, className = '' }) {
  const [isInView, setIsInView] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (videoRef.current) {
            videoRef.current.play().catch(() => {});
          }
        } else {
          // Pause when far out of view to free hardware decoder / network bandwidth
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      },
      {
        rootMargin: '350px 0px', // Start streaming 350px before entering viewport
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

  return (
    <div ref={containerRef} className={`relative w-full h-full bg-dark-950 overflow-hidden ${className}`}>
      {/* 1. Ultra-fast WebP poster that displays immediately with 0 delay */}
      <img
        src={art.image}
        alt={art.title}
        loading="lazy"
        decoding="async"
        className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-500 absolute inset-0 ${
          isVideoPlaying ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* 2. Video element attaches and streams smoothly once in or near viewport */}
      {isInView && (
        <video
          ref={videoRef}
          src={art.video}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onPlaying={() => setIsVideoPlaying(true)}
          onCanPlay={() => {
            if (videoRef.current) {
              videoRef.current.play().catch(() => {});
            }
          }}
          className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-500 pointer-events-none absolute inset-0 ${
            isVideoPlaying ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {/* Animation Indicator Pill */}
      <div className="absolute top-3 right-3 bg-dark-950/85 border border-brand-cyber/50 text-brand-cyber text-[10px] font-mono px-2 py-0.5 uppercase tracking-wider flex items-center gap-1 z-10 pointer-events-none shadow-md">
        <Film className="w-3 h-3 text-brand-cyber" />
        <span>2D Cut</span>
      </div>
    </div>
  );
}
