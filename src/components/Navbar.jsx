import React, { useState } from 'react';
import { Menu, X, Sparkles, ShoppingBag, ArrowRight } from 'lucide-react';

export default function Navbar({ activeView, setActiveView, onOpenShop, onSelectService }) {
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
          <nav className="hidden md:flex items-center gap-8">
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

      {/* Mobile Dropdown Menu */}
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
