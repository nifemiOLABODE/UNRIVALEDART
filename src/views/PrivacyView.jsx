import React from 'react';
import { ShieldCheck, Lock, FileText, ArrowLeft, Sparkles, Mail } from 'lucide-react';

export default function PrivacyView({ setActiveView }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-left space-y-12">
      
      {/* Back button & Header */}
      <div className="space-y-4 border-b-2 border-dark-800 pb-8">
        <button
          onClick={() => {
            setActiveView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="btn-outline px-4 py-2 text-xs font-mono inline-flex items-center gap-2 mb-4"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK TO HOME</span>
        </button>

        <div className="inline-flex items-center gap-2 px-3 py-1 bg-dark-900 border border-dark-700 text-brand-accent font-mono text-xs font-bold uppercase tracking-widest">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Client Confidentiality & Data Protection</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
          PRIVACY POLICY
        </h1>

        <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-sans">
          Last Updated: 2026. This Privacy Policy details how <strong>UNRIVALED ART</strong> collects, protects, and handles client project briefs, intellectual property, and personal communication data.
        </p>
      </div>

      {/* Policy Sections */}
      <div className="space-y-10 font-sans text-neutral-300 text-sm sm:text-base leading-relaxed">
        
        {/* Section 1 */}
        <section className="bg-dark-900 border-2 border-dark-800 p-6 sm:p-8 space-y-3 shadow-solid">
          <div className="flex items-center gap-3 text-white font-display font-bold text-lg border-b border-dark-800 pb-3">
            <Lock className="w-5 h-5 text-brand-accent" />
            <h2>1. Client Project Confidentiality & Non-Disclosure</h2>
          </div>
          <p className="text-neutral-400 text-sm">
            I deeply respect the proprietary nature of your intellectual property, unreleased book manuscripts, game designs, and character lore. All project briefs, mood boards, character descriptions, and reference files shared with UNRIVALED ART are treated as strictly confidential.
          </p>
          <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-neutral-300 pt-2 font-mono">
            <li>Unreleased artwork is never publicly shared or posted to social media prior to your official launch date.</li>
            <li>Custom NDA (Non-Disclosure Agreement) requests are gladly signed and honored for commercial contracts.</li>
            <li>Your reference files and assets are stored securely and never shared with third parties.</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="bg-dark-900 border-2 border-dark-800 p-6 sm:p-8 space-y-3 shadow-solid">
          <div className="flex items-center gap-3 text-white font-display font-bold text-lg border-b border-dark-800 pb-3">
            <FileText className="w-5 h-5 text-brand-cyber" />
            <h2>2. Information Collected</h2>
          </div>
          <p className="text-neutral-400 text-sm">
            When commissioning through the Hire Me form or direct communication, the only personal information gathered is what is required to deliver and invoice your project:
          </p>
          <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-neutral-300 pt-2 font-mono">
            <li>Client Name / Pen Name / Studio Alias</li>
            <li>Email address for project communication and deliverable file dispatch</li>
            <li>Project specifications, style preferences, and visual references</li>
            <li>Billing contact info for milestone invoicing</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="bg-dark-900 border-2 border-dark-800 p-6 sm:p-8 space-y-3 shadow-solid">
          <div className="flex items-center gap-3 text-white font-display font-bold text-lg border-b border-dark-800 pb-3">
            <ShieldCheck className="w-5 h-5 text-brand-amber" />
            <h2>3. Secure Payment Processing</h2>
          </div>
          <p className="text-neutral-400 text-sm">
            Payment transactions (deposits and final milestone payments) are conducted securely through industry-standard third-party merchant platforms including <strong>Stripe</strong>, <strong>PayPal</strong>, and <strong>Wise</strong>. UNRIVALED ART does not store, process, or have access to your credit card numbers or banking passwords.
          </p>
        </section>

        {/* Section 4 */}
        <section className="bg-dark-900 border-2 border-dark-800 p-6 sm:p-8 space-y-3 shadow-solid">
          <div className="flex items-center gap-3 text-white font-display font-bold text-lg border-b border-dark-800 pb-3">
            <Mail className="w-5 h-5 text-brand-accent" />
            <h2>4. Contact & Privacy Inquiries</h2>
          </div>
          <p className="text-neutral-400 text-sm">
            If you have any questions about this Privacy Policy or wish to request the deletion of your project consultation records, please contact:
          </p>
          <div className="pt-2">
            <a
              href="mailto:unrivaledart@gmail.com"
              className="text-brand-accent font-bold font-mono text-base hover:underline"
            >
              unrivaledart@gmail.com
            </a>
          </div>
        </section>

      </div>

      {/* Bottom CTA */}
      <div className="pt-8 border-t-2 border-dark-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={() => {
            setActiveView('hire');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="btn-primary px-8 py-4 text-xs font-mono font-bold tracking-widest w-full sm:w-auto"
        >
          START A COMMISSION INQUIRY
        </button>

        <button
          onClick={() => {
            setActiveView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="btn-secondary px-8 py-4 text-xs font-mono font-bold tracking-widest w-full sm:w-auto"
        >
          RETURN TO HOME
        </button>
      </div>

    </div>
  );
}
