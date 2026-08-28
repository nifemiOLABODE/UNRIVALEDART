import React from 'react';
import { Sparkles, ShieldCheck, Clock, FileCheck, CheckCircle2 } from 'lucide-react';
import CommissionForm from '../components/CommissionForm';

export default function HireView({ preselectedService, preselectedArtwork }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-12">
      
      {/* Header Banner */}
      <div className="text-left space-y-4 border-b-2 border-dark-800 pb-8">
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>COMMISSIONS CURRENTLY OPEN</span>
          </div>
          <span className="text-xs font-mono text-neutral-400">
            • Q1/Q2 Project Slots Available
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display tracking-tight">
          HIRE UNRIVALED
        </h1>

        <p className="text-sm sm:text-base text-neutral-300 max-w-3xl leading-relaxed">
          Have an idea you'd like to bring to life? Fill out the project form below with as much detail as possible. I review every submission personally and respond within 24–48 hours with a finalized quote and timeline.
        </p>

        {/* Quick prep guidelines */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs font-mono text-neutral-300">
          <div className="bg-dark-900 border border-dark-700 p-3.5 flex items-start gap-2.5">
            <FileCheck className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
            <span>Have visual or mood references ready (Drive, Pinterest, etc.)</span>
          </div>
          <div className="bg-dark-900 border border-dark-700 p-3.5 flex items-start gap-2.5">
            <Clock className="w-4 h-4 text-brand-cyber flex-shrink-0 mt-0.5" />
            <span>Standard turnarounds are 5–14 days depending on complexity.</span>
          </div>
          <div className="bg-dark-900 border border-dark-700 p-3.5 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-brand-amber flex-shrink-0 mt-0.5" />
            <span>50% deposit begins the sketch stage; 3 revisions included.</span>
          </div>
        </div>
      </div>

      {/* Embedded Commission Form */}
      <CommissionForm 
        preselectedService={preselectedService} 
        preselectedArtwork={preselectedArtwork} 
      />

    </div>
  );
}
