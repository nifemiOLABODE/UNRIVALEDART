import React from 'react';

export default function FloatingWhatsAppButton() {
  // WhatsApp quick inquiry direct deep-link without exposing phone number in DOM text
  const whatsappUrl = 'https://wa.me/2348029029190?text=' + encodeURIComponent("Hi Unrivaled Art, I'm interested in commissioning an artwork / project!");

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
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
      </a>
    </div>
  );
}
