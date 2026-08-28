import React, { useState } from 'react';
import { Menu, X, Sparkles, ShoppingBag, ArrowRight, Lock, ShieldCheck } from 'lucide-react';

export default function Navbar({ activeView, setActiveView, onOpenShop, onSelectService, onOpenVault, isAgeVerified }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'services', label: 'Services & Pricing' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActiveView(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-dark-950 border-b-2 border-dark-800">
      {/* Top micro-announcement bar */}
      <div className="bg-dark-900 border-b border-dark-800 px-4 py-1.5 text-xs text-neutral-400 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-emerald-400 font-semibold tracking-wider">COMMISSIONS OPEN</span>
          <span className="hidden sm:inline text-neutral-500">• Available for covers, character art & animation</span>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono">
          {/* Direct 18+ Vault Top Link */}
          <button 
            onClick={onOpenVault}
            className="flex items-center gap-1.5 text-brand-accent hover:text-red-400 transition-colors uppercase tracking-wider font-semibold"
          >
            {isAgeVerified ? <ShieldCheck className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
            <span>18+ Vault</span>
            <span className="bg-brand-accent/20 text-brand-accent text-[10px] px-1 py-0.2 border border-brand-accent/40">
              53 WORKS
            </span>
          </button>

          <button 
            onClick={onOpenShop}
            className="hidden sm:flex items-center gap-1.5 text-brand-amber hover:text-amber-300 transition-colors uppercase tracking-wider font-semibold"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Merch / Shop</span>
            <span className="bg-brand-amber/20 text-brand-amber text-[10px] px-1.5 py-0.5 border border-brand-amber/40">SOON</span>
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none flex-shrink-0"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 bg-dark-900 border-2 border-dark-700 group-hover:border-brand-accent transition-colors flex items-center justify-center p-1 shadow-solid-sm flex-shrink-0">
              <img 
                src="/logo/My logo.PNG" 
                alt="Unrivaled Art Logo" 
                className="w-full h-full object-contain filter contrast-125"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-extrabold text-white group-hover:text-brand-accent transition-colors font-display tracking-[0.18em] flex items-center select-none uppercase">
                <span>UNRIVAL</span>
                <span className="text-brand-accent font-mono mx-[1px] font-bold">Ξ</span>
                <span>D</span>
              </div>
              <div className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-neutral-400">
                ART & VISUAL STUDIO
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm font-semibold tracking-wider uppercase transition-all relative py-2 ${
                    isActive 
                      ? 'text-brand-accent font-bold' 
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-accent" />
                  )}
                </button>
              );
            })}

            {/* Direct 18+ Vault Button in Nav */}
            <button
              onClick={onOpenVault}
              className="text-xs font-mono font-bold tracking-wider uppercase text-brand-accent border border-brand-accent/40 bg-dark-900 hover:border-brand-accent hover:bg-brand-accent/10 px-3 py-1.5 transition-all flex items-center gap-1.5"
            >
              {isAgeVerified ? <ShieldCheck className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
              <span>18+ Vault</span>
            </button>

            {/* Direct Shop button */}
            <button
              onClick={onOpenShop}
              className="text-sm font-semibold tracking-wider uppercase text-neutral-300 hover:text-brand-amber transition-colors flex items-center gap-1.5"
            >
              Shop
              <span className="text-[10px] bg-dark-800 text-brand-amber px-1.5 py-0.5 border border-dark-700 font-mono">
                Soon
              </span>
            </button>
          </nav>

          {/* Hire Me Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleNavClick('hire')}
              className="btn-primary flex items-center gap-2 group"
            >
              <Sparkles className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
              <span>HIRE ME</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('hire')}
              className="px-3.5 py-2 bg-brand-accent text-white font-bold text-xs uppercase tracking-wider border border-brand-accent"
            >
              HIRE ME
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 bg-dark-900 border border-dark-700 text-neutral-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu (Solid, no glassmorphism) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-900 border-b-2 border-dark-700 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-base font-bold tracking-wider uppercase py-2.5 px-3 border-l-2 transition-all ${
                  activeView === item.id
                    ? 'border-brand-accent text-brand-accent bg-dark-800'
                    : 'border-transparent text-neutral-300 hover:text-white hover:bg-dark-850'
                }`}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVault();
              }}
              className="text-left text-base font-bold tracking-wider uppercase py-2.5 px-3 border-l-2 border-brand-accent text-brand-accent bg-brand-accent/10 flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                <span>18+ Vault Gallery</span>
              </div>
              <span className="text-xs bg-brand-accent text-white px-2 py-0.5 font-mono font-bold">
                53 WORKS
              </span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenShop();
              }}
              className="text-left text-base font-bold tracking-wider uppercase py-2.5 px-3 border-l-2 border-transparent text-brand-amber hover:bg-dark-850 flex items-center justify-between"
            >
              <span>Merch & Prints Shop</span>
              <span className="text-xs bg-dark-800 text-brand-amber px-2 py-0.5 border border-brand-amber/30 font-mono">
                COMING SOON
              </span>
            </button>
          </div>

          <div className="pt-4 border-t border-dark-800">
            <button
              onClick={() => handleNavClick('hire')}
              className="w-full btn-primary py-4 text-center font-bold tracking-widest text-sm"
            >
              START A COMMISSION
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
