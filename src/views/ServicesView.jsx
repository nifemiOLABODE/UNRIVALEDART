import React, { useState } from 'react';
import { Layers, Sparkles, Check, Plus, Clock, HelpCircle, ChevronDown, ChevronUp, ArrowRight, ShieldCheck } from 'lucide-react';
import { SERVICES } from '../data/services';
import { FAQS } from '../data/faqs';

export default function ServicesView({ setActiveView, onSelectService }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleRequestService = (serviceId) => {
    onSelectService(serviceId);
    setActiveView('hire');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-20">
      
      {/* Page Header */}
      <div className="text-left space-y-4 border-b-2 border-dark-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-dark-900 border border-dark-700 text-brand-accent font-mono text-xs font-bold uppercase tracking-widest">
          <Layers className="w-3.5 h-3.5" />
          <span>Services & Clear Pricing</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display tracking-tight">
          SERVICES & PRICING GUIDE
        </h1>
        <p className="text-sm sm:text-base text-neutral-400 max-w-3xl leading-relaxed">
          Transparent, upfront pricing designed for independent authors, game developers, comic creators, and collectors. Every commission includes full commercial master exports, transparent backgrounds, and dedicated milestone revision checkpoints.
        </p>

        {/* Pricing Philosophy Alert */}
        <div className="bg-dark-900 border-2 border-dark-700 p-4 sm:p-6 mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-brand-accent flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-sm font-bold text-white font-display uppercase tracking-wider">
                Our Pricing Philosophy
              </h4>
              <p className="text-xs text-neutral-400 mt-1">
                Prices are listed as starting rates based on standard scope. Final pricing is confirmed upfront before any payment and depends on detail complexity, background requirements, deadlines, and commercial usage rights.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              setActiveView('hire');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="btn-primary px-6 py-3 text-xs font-mono font-bold tracking-wider flex-shrink-0"
          >
            CUSTOM QUOTE BUILDER →
          </button>
        </div>
      </div>

      {/* Detailed Service Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {SERVICES.map((srv) => (
          <div
            key={srv.id}
            className="bg-dark-900 border-2 border-dark-800 hover:border-brand-accent transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between shadow-solid text-left space-y-6"
          >
            <div className="space-y-6">
              
              {/* Card Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-dark-800 pb-4">
                <span className="px-3 py-1 bg-brand-accent/10 border border-brand-accent/40 text-brand-accent text-xs font-mono font-bold uppercase tracking-widest">
                  {srv.badge}
                </span>
                <span className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-brand-cyber" />
                  {srv.turnaround}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                  {srv.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
                  {srv.tagline}
                </p>
                <div className="text-[11px] font-mono text-brand-cyber mt-2">
                  <strong>Ideal for:</strong> {srv.idealFor}
                </div>
              </div>

              {/* Tiers Breakdown */}
              <div className="space-y-3">
                <div className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400">
                  Standard Scope Tiers:
                </div>
                <div className="space-y-2">
                  {srv.tiers.map((tier, idx) => (
                    <div key={idx} className="bg-dark-950 border border-dark-800 p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <div className="text-xs font-bold text-white font-mono">{tier.name}</div>
                        <div className="text-[11px] text-neutral-400">{tier.description}</div>
                      </div>
                      <div className="text-sm font-mono font-extrabold text-brand-accent flex-shrink-0">
                        {tier.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Package Inclusions */}
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400 mb-2">
                  What's Included:
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-neutral-300">
                  {srv.includes.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2 bg-dark-950/60 p-2 border border-dark-800">
                      <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Optional Add-ons */}
              {srv.addons && srv.addons.length > 0 && (
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400 mb-2">
                    Available Add-ons:
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs font-mono">
                    {srv.addons.map((add, i) => (
                      <span key={i} className="px-2.5 py-1 bg-dark-950 border border-dark-700 text-neutral-300">
                        + {add.name} <strong className="text-brand-amber font-normal">({add.price})</strong>
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Request CTA Button */}
            <div className="pt-6 border-t-2 border-dark-800">
              <button
                onClick={() => handleRequestService(srv.id)}
                className="w-full btn-primary py-4 text-xs font-mono font-bold tracking-widest flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>REQUEST THIS SERVICE ({srv.tiers[0].price})</span>
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* Comprehensive FAQ Section */}
      <section className="bg-dark-900 border-2 border-dark-800 p-6 sm:p-12 shadow-2xl text-left space-y-8">
        <div className="border-b-2 border-dark-800 pb-6">
          <div className="inline-flex items-center gap-2 text-brand-accent font-mono text-xs font-bold tracking-widest uppercase mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Commission FAQ & Terms</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            ALL YOUR QUESTIONS ANSWERED
          </h2>
          <p className="text-sm text-neutral-400 mt-2">
            Everything you need to know regarding revisions, payment deposits, commercial copyright, and turnaround milestones.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx}
                className="bg-dark-950 border-2 border-dark-800 transition-colors duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-white font-display">
                    {faq.question}
                  </span>
                  <div className="w-7 h-7 bg-dark-900 border border-dark-700 flex items-center justify-center text-brand-accent flex-shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-neutral-300 leading-relaxed border-t border-dark-800 pt-4 font-sans">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="pt-6 border-t border-dark-800 text-center">
          <p className="text-xs font-mono text-neutral-400 mb-4">
            Have a custom requirement or question not listed above?
          </p>
          <button
            onClick={() => {
              setActiveView('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="btn-secondary px-8 py-3.5 text-xs font-mono font-bold tracking-widest uppercase"
          >
            SEND A DIRECT INQUIRY
          </button>
        </div>
      </section>

    </div>
  );
}
