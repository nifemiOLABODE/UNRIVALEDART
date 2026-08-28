import React from 'react';
import { Sparkles, Palette, Monitor, Heart, ArrowRight } from 'lucide-react';

export default function AboutView({ setActiveView }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-20">
      
      {/* 1. Header & Hero Intro */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
        
        {/* Left Bio Content */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-dark-900 border border-dark-700 text-brand-accent font-mono text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Behind The Canvas</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display tracking-tight leading-tight">
            I AM <span className="text-brand-accent">UNRIVALED.</span>
          </h1>

          <p className="text-lg sm:text-xl font-semibold text-neutral-300 font-display">
            Freelance Illustrator, Character Artist, Comic Creator & 2D Animator based in Nigeria.
          </p>

          <div className="space-y-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
            <p>
              Art is more than just drawing pretty visuals — it is the translation of emotion, kinetic momentum, and worldbuilding into a singular image that commands attention.
            </p>
            <p>
              Under the brand <strong>UNRIVALED ART</strong>, I collaborate with indie authors, comic publishers, game developers, VTubers, and passionate creators worldwide to turn raw concepts into unforgettable characters, bestselling book covers, and high-energy 2D action animation.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={() => {
                setActiveView('hire');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-primary px-8 py-4 text-xs font-mono font-bold tracking-widest"
            >
              COMMISSION MY WORK
            </button>
            <button
              onClick={() => {
                setActiveView('portfolio');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-secondary px-8 py-4 text-xs font-mono font-bold tracking-widest"
            >
              EXPLORE WORKS ARCHIVE
            </button>
          </div>
        </div>

        {/* Right Artist Visual Showcase (Female 2D Animation Cut) */}
        <div className="lg:col-span-5 relative">
          <div className="bg-dark-900 border-2 border-brand-accent p-4 shadow-solid-lg space-y-4">
            <div className="aspect-[4/5] bg-dark-950 overflow-hidden border border-dark-800 relative">
              <video
                src="/Animation/New Project 1 [DBD0A9F].mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover filter contrast-105 pointer-events-none"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-dark-950/90 border border-dark-700 p-3 text-left">
                <div className="text-xs font-mono font-bold text-white uppercase">UNRIVALED ART</div>
                <div className="text-[11px] font-mono text-brand-accent">2D Sakuga Animation & Character Art</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono text-neutral-300">
              <div className="bg-dark-950 p-3 border border-dark-800">
                <span className="text-neutral-500 block text-[10px] uppercase">Specialty</span>
                <span className="text-white font-bold">Characters & Sakuga</span>
              </div>
              <div className="bg-dark-950 p-3 border border-dark-800">
                <span className="text-neutral-500 block text-[10px] uppercase">Origin</span>
                <span className="text-white font-bold">Nigeria 🇳🇬</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* 2. My Artistic Approach & Philosophy */}
      <section className="bg-dark-900 border-2 border-dark-800 p-8 sm:p-12 shadow-2xl text-left space-y-8">
        <div className="border-b-2 border-dark-800 pb-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display uppercase tracking-tight">
            MY CREATIVE PILLARS
          </h2>
          <p className="text-sm text-neutral-400 mt-1">
            Every stroke and frame is guided by three non-negotiable principles:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-dark-950 border-2 border-dark-800 p-6 space-y-3">
            <div className="w-10 h-10 bg-brand-accent/10 border border-brand-accent text-brand-accent font-mono font-bold flex items-center justify-center">
              01
            </div>
            <h3 className="text-lg font-bold text-white font-display">DYNAMIC MOMENTUM</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              No stiff, lifeless poses. Every character has weight, kinetic direction, explosive silhouette angles, and intentional anatomical tension.
            </p>
          </div>

          <div className="bg-dark-950 border-2 border-dark-800 p-6 space-y-3">
            <div className="w-10 h-10 bg-brand-cyber/10 border border-brand-cyber text-brand-cyber font-mono font-bold flex items-center justify-center">
              02
            </div>
            <h3 className="text-lg font-bold text-white font-display">CINEMATIC LIGHTING</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Master-level color harmony, rim lighting, atmospheric depth, and particle rendering that elevates your project to bestseller quality.
            </p>
          </div>

          <div className="bg-dark-950 border-2 border-dark-800 p-6 space-y-3">
            <div className="w-10 h-10 bg-brand-amber/10 border border-brand-amber text-brand-amber font-mono font-bold flex items-center justify-center">
              03
            </div>
            <h3 className="text-lg font-bold text-white font-display">PROFESSIONAL PIPELINE</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Strict adherence to deadlines, transparent communication, dedicated revision checkpoints, and 300+ DPI master file packaging.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Bottom Call To Action */}
      <div className="bg-dark-900 border-2 border-brand-accent p-8 sm:p-12 text-center space-y-6">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
          READY TO WORK TOGETHER?
        </h3>
        <p className="text-sm text-neutral-300 max-w-xl mx-auto leading-relaxed">
          Whether you're looking for a single character splash art or long-term visual development for your comic or game, let's create something extraordinary.
        </p>
        <button
          onClick={() => {
            setActiveView('hire');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="btn-primary px-10 py-4 text-sm font-bold tracking-widest uppercase"
        >
          START A COMMISSION INQUIRY
        </button>
      </div>

    </div>
  );
}
