import React, { useState } from 'react';
import { X, ShoppingBag, Sparkles, CheckCircle2, Bell } from 'lucide-react';

export default function ShopModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/95">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-lg bg-dark-900 border-2 border-brand-amber shadow-2xl p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-dark-950 border border-dark-700 text-white hover:text-brand-amber transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-4">
          <div className="w-14 h-14 bg-brand-amber/10 border-2 border-brand-amber text-brand-amber flex items-center justify-center mx-auto shadow-solid-amber">
            <ShoppingBag className="w-7 h-7" />
          </div>

          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-brand-amber uppercase px-2 py-0.5 bg-brand-amber/10 border border-brand-amber/30 inline-block mb-2">
              Official Merch & Art Store
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              PRINTS & MERCH COMING SOON
            </h3>
          </div>

          <p className="text-sm text-neutral-300 leading-relaxed">
            I am currently preparing physical museum-grade holographic art prints, limited run art books, vinyl stickers, and apparel.
          </p>

          <div className="bg-dark-950 border border-dark-800 p-4 text-left space-y-2">
            <div className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">
              Upcoming Drops:
            </div>
            <ul className="text-xs text-neutral-300 space-y-1.5 font-mono">
              <li className="flex items-center gap-2">
                <span className="text-brand-amber">✦</span> Limited Edition Metallic Foil Prints (Zuko & Vampire Queen)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-amber">✦</span> "Unrivaled" Character Artbook Vol. 1
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-amber">✦</span> Waterproof Manga Vinyl Sticker Pack
              </li>
            </ul>
          </div>

          {submitted ? (
            <div className="bg-emerald-950/40 border border-emerald-500/50 p-4 flex items-center gap-3 text-emerald-400 text-left">
              <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider font-mono">You're On The VIP List!</p>
                <p className="text-xs text-neutral-300">We'll email you with private early access & a 15% launch discount code.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 pt-2">
              <p className="text-xs text-neutral-400 font-mono">Get notified the second the store launches + get 15% off:</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 bg-dark-950 border-2 border-dark-700 px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-amber font-mono"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-brand-amber text-dark-950 font-extrabold text-xs uppercase tracking-widest border-2 border-brand-amber hover:bg-amber-400 transition-colors flex items-center justify-center gap-2"
                >
                  <Bell className="w-4 h-4" />
                  <span>Notify Me</span>
                </button>
              </div>
            </form>
          )}

          <div className="pt-2">
            <button
              onClick={onClose}
              className="text-xs font-mono text-neutral-400 hover:text-white uppercase tracking-wider underline underline-offset-4"
            >
              Continue Browsing Art
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
