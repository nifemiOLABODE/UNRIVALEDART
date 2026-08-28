import React from 'react';
import { AlertTriangle, ShieldCheck, X } from 'lucide-react';

export default function AgeGateModal({ isOpen, onConfirm, onCancel }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/95">
      <div className="relative z-10 w-full max-w-md bg-dark-900 border-2 border-brand-accent shadow-2xl p-6 sm:p-8 text-center space-y-5">
        <div className="w-14 h-14 bg-brand-accent/10 border-2 border-brand-accent text-brand-accent flex items-center justify-center mx-auto shadow-solid-accent">
          <AlertTriangle className="w-7 h-7" />
        </div>

        <div>
          <span className="text-xs font-mono font-bold tracking-widest text-brand-accent uppercase px-2.5 py-0.5 bg-brand-accent/10 border border-brand-accent/30 inline-block mb-2">
            Restricted Content
          </span>
          <h3 className="text-2xl font-extrabold text-white font-display">
            AGE VERIFICATION REQUIRED
          </h3>
        </div>

        <p className="text-sm text-neutral-300 leading-relaxed">
          This gallery section contains adult/mature themes, pin-up artwork, and uncensored illustrations meant exclusively for audiences <strong className="text-white">18 years of age or older</strong>.
        </p>

        <div className="space-y-3 pt-2">
          <button
            onClick={onConfirm}
            className="w-full btn-primary py-3.5 flex items-center justify-center gap-2 font-mono text-xs tracking-widest"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>I AM 18+ — ENTER VAULT</span>
          </button>
          
          <button
            onClick={onCancel}
            className="w-full btn-secondary py-3.5 font-mono text-xs tracking-widest text-neutral-400"
          >
            RETURN TO GENERAL PORTFOLIO
          </button>
        </div>

        <p className="text-[11px] font-mono text-neutral-500">
          By proceeding, you verify that you meet the age requirements of your local jurisdiction.
        </p>
      </div>
    </div>
  );
}
