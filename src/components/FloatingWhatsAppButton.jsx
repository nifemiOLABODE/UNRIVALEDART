import React, { useState } from 'react';

export default function FloatingWhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  // WhatsApp quick inquiry direct deep-link without exposing phone number in DOM text
  const whatsappUrl = 'https://wa.me/2348029029190?text=' + encodeURIComponent("Hi Unrivaled Art, I'm interested in commissioning an artwork / project!");

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-dark-900/90 border-2 border-brand-accent hover:border-brand-cyber backdrop-blur-md rounded-full shadow-[0_0_20px_rgba(255,51,102,0.4)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 p-2.5"
        aria-label="Direct Studio WhatsApp Inquiry"
      >
        {/* Animated Glow Pulse Ring */}
        <span className="absolute inset-0 rounded-full border border-brand-accent/60 animate-ping pointer-events-none opacity-40" />

        {/* Studio Logo Icon */}
        <img
          src="/logo/My logo.PNG"
          alt="Studio Logo"
          className="w-full h-full object-contain filter contrast-125 group-hover:rotate-12 transition-transform duration-300 pointer-events-none"
        />

        {/* Hover Tooltip Popup */}
        <div
          className={`absolute right-full mr-3.5 px-3 py-1.5 bg-dark-950 border border-dark-700 text-white font-mono text-xs font-bold uppercase tracking-wider whitespace-nowrap shadow-xl transition-all duration-200 pointer-events-none ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
          }`}
        >
          <span className="text-brand-accent mr-1.5">◆</span>
          <span>Direct Studio Chat</span>
        </div>
      </a>
    </div>
  );
}
