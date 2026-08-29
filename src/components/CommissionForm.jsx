import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Calculator, Sparkles, Shield, Copy, Check, ArrowRight, RefreshCw, AlertCircle } from 'lucide-react';
import { SERVICES } from '../data/services';

export default function CommissionForm({ preselectedService, preselectedArtwork }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    socialHandle: '',
    service: 'character-illustration',
    projectTitle: '',
    description: '',
    characterCount: '1',
    scopeTier: 'half-body',
    stylePreference: 'Anime / Dynamic Action',
    intendedUse: 'Personal Use',
    backgroundDetail: 'Simple / Graphic Lighting',
    deadline: 'Standard (2–3 Weeks)',
    budgetRange: '$150 – $300',
    referenceLinks: '',
    extraNotes: '',
    antiSpam: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [copied, setCopied] = useState(false);

  // Sync preselection
  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({
        ...prev,
        service: preselectedService
      }));
    }
  }, [preselectedService]);

  useEffect(() => {
    if (preselectedArtwork) {
      setFormData(prev => ({
        ...prev,
        projectTitle: `Project inspired by "${preselectedArtwork.title}"`,
        description: `I would like artwork in the style/vibe of "${preselectedArtwork.title}" (${preselectedArtwork.categoryLabel})...`
      }));
    }
  }, [preselectedArtwork]);

  // Live estimated calculation
  const calculateEstimate = () => {
    let base = 120;
    if (formData.service === 'chibi-emotes') base = 60;
    else if (formData.service === 'character-illustration') {
      if (formData.scopeTier === 'bust') base = 120;
      else if (formData.scopeTier === 'half-body') base = 180;
      else if (formData.scopeTier === 'full-body') base = 260;
    } else if (formData.service === 'music-covers' || formData.service === 'character-design') {
      if (formData.scopeTier === 'single' || formData.scopeTier === 'concept') base = 200;
      else if (formData.scopeTier === 'album' || formData.scopeTier === 'turnaround') base = 350;
      else base = 450;
    } else if (formData.service === 'book-covers') {
      if (formData.scopeTier === 'ebook') base = 300;
      else if (formData.scopeTier === 'wrap') base = 450;
      else base = 600;
    } else if (formData.service === 'comic-art') {
      base = 150;
    } else if (formData.service === '2d-animation') {
      base = 280;
    }

    const chars = parseInt(formData.characterCount) || 1;
    if (chars > 1) {
      base += (chars - 1) * (base * 0.65);
    }

    if (formData.backgroundDetail === 'Full Detailed Scene') {
      base += 90;
    } else if (formData.backgroundDetail === 'Complex Cityscape / Fantasy Architecture') {
      base += 150;
    }

    if (formData.intendedUse === 'Commercial / Indie Game / Publishing') {
      base *= 1.4;
    } else if (formData.intendedUse === 'Merchandise / Franchise IP') {
      base *= 1.7;
    }

    if (formData.deadline === 'Rush Delivery (3–5 Days)') {
      base *= 1.4;
    }

    return Math.round(base);
  };

  const currentEstimate = calculateEstimate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.antiSpam && formData.antiSpam.trim() !== '') {
      // Honeypot hit
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({
        ...formData,
        estimatedPrice: currentEstimate,
        submittedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      });
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }, 1000);
  };

  const copyBriefToClipboard = () => {
    if (!submittedData) return;
    const text = `UNRIVALED ART COMMISSION BRIEF
----------------------------------------
Client: ${submittedData.name} (${submittedData.email})
Social Handle: ${submittedData.socialHandle || 'N/A'}
Service: ${submittedData.service}
Scope: ${submittedData.scopeTier}
Style: ${submittedData.stylePreference}
Characters: ${submittedData.characterCount}
Usage: ${submittedData.intendedUse}
Background: ${submittedData.backgroundDetail}
Deadline: ${submittedData.deadline}
Estimated Range: ~$${submittedData.estimatedPrice} USD
References: ${submittedData.referenceLinks || 'None provided'}
Project Details: ${submittedData.description}
----------------------------------------`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  if (submittedData) {
    return (
      <div className="bg-dark-900 border-2 border-brand-accent p-8 sm:p-12 shadow-2xl text-left space-y-8 max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-dark-800 pb-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-emerald-500/10 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">
                Commission Inquiry Received
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                THANK YOU, {submittedData.name.toUpperCase()}!
              </h3>
            </div>
          </div>

          <div className="bg-dark-950 border border-dark-700 px-4 py-2 text-right">
            <div className="text-[10px] font-mono text-neutral-400 uppercase">Estimated Ballpark</div>
            <div className="text-2xl font-mono font-bold text-brand-accent">~${submittedData.estimatedPrice} USD</div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Your project brief has been registered with <strong>UNRIVALED ART</strong>. You will receive a direct reply at <span className="text-brand-cyber font-mono">{submittedData.email}</span> within <strong>24–48 hours</strong> with a confirmed timeline and milestone invoice.
          </p>

          <div className="bg-dark-950 border-2 border-dark-800 p-6 space-y-4 font-mono text-xs text-neutral-300">
            <div className="text-white font-bold uppercase tracking-widest border-b border-dark-800 pb-2 flex items-center justify-between">
              <span>Commission Summary Brief</span>
              <span className="text-neutral-500">{submittedData.submittedAt}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div><strong className="text-neutral-400">Service:</strong> {submittedData.service}</div>
              <div><strong className="text-neutral-400">Scope:</strong> {submittedData.scopeTier}</div>
              <div><strong className="text-neutral-400">Characters:</strong> {submittedData.characterCount}</div>
              <div><strong className="text-neutral-400">Usage Rights:</strong> {submittedData.intendedUse}</div>
              <div><strong className="text-neutral-400">Deadline:</strong> {submittedData.deadline}</div>
              <div><strong className="text-neutral-400">Style:</strong> {submittedData.stylePreference}</div>
            </div>
            {submittedData.description && (
              <div className="pt-2 border-t border-dark-800">
                <strong className="text-neutral-400 block mb-1">Project Vision:</strong>
                <p className="text-neutral-300 whitespace-pre-line font-sans">{submittedData.description}</p>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-dark-800">
          <button
            onClick={copyBriefToClipboard}
            className="btn-secondary flex-1 py-4 flex items-center justify-center gap-2 font-mono text-xs"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-white" />}
            <span>{copied ? 'BRIEF COPIED TO CLIPBOARD' : 'COPY BRIEF FOR YOUR RECORDS'}</span>
          </button>
          
          <button
            onClick={() => setSubmittedData(null)}
            className="btn-outline px-6 py-4 flex items-center justify-center gap-2 font-mono text-xs"
          >
            <RefreshCw className="w-4 h-4" />
            <span>SUBMIT ANOTHER INQUIRY</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-7xl mx-auto">
      
      {/* Main Form Fields */}
      <div className="lg:col-span-8 bg-dark-900 border-2 border-dark-800 p-6 sm:p-10 shadow-2xl">
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Honeypot for Anti-Spam */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="antiSpam"
              value={formData.antiSpam}
              onChange={handleChange}
              tabIndex="-1"
              autoComplete="off"
            />
          </div>

          {/* Section 1: Contact Info */}
          <div>
            <div className="flex items-center gap-2 pb-3 border-b-2 border-dark-800 mb-6">
              <span className="w-6 h-6 bg-brand-accent text-white font-mono text-xs font-bold flex items-center justify-center">1</span>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider font-display">
                Client & Contact Info
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  Your Name / Creator Name <span className="text-brand-accent">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Thorne"
                  className="w-full bg-dark-950 border-2 border-dark-700 focus:border-brand-accent p-3.5 text-white text-sm focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  Email Address <span className="text-brand-accent">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alex@example.com"
                  className="w-full bg-dark-950 border-2 border-dark-700 focus:border-brand-accent p-3.5 text-white text-sm focus:outline-none transition-colors"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  Social Handle / Discord (Optional)
                </label>
                <input
                  type="text"
                  name="socialHandle"
                  value={formData.socialHandle}
                  onChange={handleChange}
                  placeholder="@handle on X / Discord Username"
                  className="w-full bg-dark-950 border-2 border-dark-700 focus:border-brand-accent p-3.5 text-white text-sm focus:outline-none transition-colors font-mono"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Service Selection */}
          <div>
            <div className="flex items-center gap-2 pb-3 border-b-2 border-dark-800 mb-6">
              <span className="w-6 h-6 bg-brand-accent text-white font-mono text-xs font-bold flex items-center justify-center">2</span>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider font-display">
                Service & Deliverables
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  Select Creative Service <span className="text-brand-accent">*</span>
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-dark-950 border-2 border-dark-700 focus:border-brand-accent p-3.5 text-white text-sm focus:outline-none transition-colors font-mono"
                >
                  <option value="character-illustration">Character Illustration ($120+)</option>
                  <option value="music-covers">Music & Album Cover ($200+)</option>
                  <option value="book-covers">Book & Novel Cover ($300+)</option>
                  <option value="comic-art">Comic & Manga Sequential Art ($150+/pg)</option>
                  <option value="2d-animation">2D Sakuga Animation ($280+)</option>
                  <option value="chibi-emotes">Chibi & Stream Emote Pack ($60+)</option>
                  <option value="custom-project">Custom / Long-Term IP Project</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  Scope Tier
                </label>
                <select
                  name="scopeTier"
                  value={formData.scopeTier}
                  onChange={handleChange}
                  className="w-full bg-dark-950 border-2 border-dark-700 focus:border-brand-accent p-3.5 text-white text-sm focus:outline-none transition-colors font-mono"
                >
                  <option value="bust">Bust / Headshot (Standard)</option>
                  <option value="half-body">Half-Body (Waist-Up)</option>
                  <option value="full-body">Full-Body (Head-to-Toe Splash Art)</option>
                  <option value="concept">Turnaround Sheet / 3-Views</option>
                  <option value="wrap">Full Wrap Book Cover (Front + Spine + Back)</option>
                  <option value="animation-loop">Looping Stream Animation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  Number of Characters
                </label>
                <select
                  name="characterCount"
                  value={formData.characterCount}
                  onChange={handleChange}
                  className="w-full bg-dark-950 border-2 border-dark-700 focus:border-brand-accent p-3.5 text-white text-sm focus:outline-none transition-colors font-mono"
                >
                  <option value="1">1 Character</option>
                  <option value="2">2 Characters (+65%)</option>
                  <option value="3">3 Characters</option>
                  <option value="4">4+ Characters / Ensemble</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  Background Complexity
                </label>
                <select
                  name="backgroundDetail"
                  value={formData.backgroundDetail}
                  onChange={handleChange}
                  className="w-full bg-dark-950 border-2 border-dark-700 focus:border-brand-accent p-3.5 text-white text-sm focus:outline-none transition-colors font-mono"
                >
                  <option value="Simple / Graphic Lighting">Simple / Graphic / Transparent</option>
                  <option value="Full Detailed Scene">Full Atmospheric Environment (+$90)</option>
                  <option value="Complex Cityscape / Fantasy Architecture">Complex Architecture / Cityscape (+$150)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 3: Project Details & References */}
          <div>
            <div className="flex items-center gap-2 pb-3 border-b-2 border-dark-800 mb-6">
              <span className="w-6 h-6 bg-brand-accent text-white font-mono text-xs font-bold flex items-center justify-center">3</span>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider font-display">
                Project Vision & References
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  Project Description & Character Details <span className="text-brand-accent">*</span>
                </label>
                <textarea
                  name="description"
                  required
                  rows="4"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe your character's personality, expression, pose, outfit, colors, weapons, mood, and any specific story elements you want to emphasize..."
                  className="w-full bg-dark-950 border-2 border-dark-700 focus:border-brand-accent p-3.5 text-white text-sm focus:outline-none transition-colors leading-relaxed"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  Reference Links (Google Drive, Pinterest, Imgur, Dropbox)
                </label>
                <input
                  type="url"
                  name="referenceLinks"
                  value={formData.referenceLinks}
                  onChange={handleChange}
                  placeholder="https://drive.google.com/... or https://pinterest.com/..."
                  className="w-full bg-dark-950 border-2 border-dark-700 focus:border-brand-accent p-3.5 text-white text-sm focus:outline-none transition-colors font-mono"
                />
                <p className="text-[11px] font-mono text-neutral-500 mt-1">
                  You can also reply to the confirmation email with direct image attachments.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Timeline, Usage & Budget */}
          <div>
            <div className="flex items-center gap-2 pb-3 border-b-2 border-dark-800 mb-6">
              <span className="w-6 h-6 bg-brand-accent text-white font-mono text-xs font-bold flex items-center justify-center">4</span>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider font-display">
                Usage Rights & Timeline
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  Intended Usage
                </label>
                <select
                  name="intendedUse"
                  value={formData.intendedUse}
                  onChange={handleChange}
                  className="w-full bg-dark-950 border-2 border-dark-700 focus:border-brand-accent p-3.5 text-white text-sm focus:outline-none transition-colors font-mono"
                >
                  <option value="Personal Use">Personal (Avatars, Wallpapers, OC art)</option>
                  <option value="Commercial / Indie Game / Publishing">Commercial Book / Indie Game / Music Cover</option>
                  <option value="Merchandise / Franchise IP">Merchandise / Print Sales / VTuber IP</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  Required Deadline
                </label>
                <select
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  className="w-full bg-dark-950 border-2 border-dark-700 focus:border-brand-accent p-3.5 text-white text-sm focus:outline-none transition-colors font-mono"
                >
                  <option value="Standard (2–3 Weeks)">Standard (2–3 Weeks)</option>
                  <option value="1 Month+ (Flexible)">1 Month+ (Flexible Timeline)</option>
                  <option value="Rush Delivery (3–5 Days)">Rush Delivery (3–5 Days) [+40%]</option>
                </select>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4 border-t-2 border-dark-800">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary py-5 text-base font-extrabold tracking-widest flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  <span>TRANSMITTING COMMISSION BRIEF...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>SUBMIT COMMISSION REQUEST</span>
                </>
              )}
            </button>
            <p className="text-xs font-mono text-center text-neutral-500 mt-3 flex items-center justify-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>Direct artist review • No spam • 24–48hr response guarantee</span>
            </p>
          </div>

        </form>
      </div>

      {/* Sidebar: Dynamic Live Quote Estimator & Workflow */}
      <div className="lg:col-span-4 space-y-6">
        
        {/* Real-time Dynamic Calculator Card */}
        <div className="bg-dark-900 border-2 border-brand-accent p-6 shadow-2xl space-y-4">
          <div className="flex items-center justify-between border-b border-dark-800 pb-3">
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-brand-accent" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-white">
                Live Estimate Calculator
              </span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 border border-emerald-500/40">
              REAL-TIME
            </span>
          </div>

          <div>
            <div className="text-xs font-mono text-neutral-400 uppercase">Estimated Starting Total</div>
            <div className="text-4xl font-extrabold font-mono text-brand-accent mt-1">
              ~${currentEstimate} <span className="text-sm text-neutral-400 font-sans font-normal">USD</span>
            </div>
            <p className="text-[11px] font-mono text-neutral-500 mt-1">
              *Starting quote based on chosen character count, scope & licensing.
            </p>
          </div>

          <div className="bg-dark-950 border border-dark-800 p-3.5 space-y-2 text-xs font-mono text-neutral-300">
            <div className="flex justify-between">
              <span className="text-neutral-500">Service:</span>
              <span className="text-white truncate max-w-[150px]">{formData.service}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">Characters:</span>
              <span className="text-white">{formData.characterCount}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">License:</span>
              <span className="text-white truncate max-w-[150px]">{formData.intendedUse}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">Timeline:</span>
              <span className="text-white">{formData.deadline.split(' ')[0]}</span>
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t border-dark-800 text-xs text-neutral-400">
            <div className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-brand-amber flex-shrink-0 mt-0.5" />
              <span>Includes 3 dedicated revision milestones.</span>
            </div>
            <div className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-brand-cyber flex-shrink-0 mt-0.5" />
              <span>300+ DPI master export files + transparent cutout.</span>
            </div>
          </div>
        </div>

        {/* 4-Step Process Reminder */}
        <div className="bg-dark-900 border-2 border-dark-800 p-6 space-y-4">
          <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white border-b border-dark-800 pb-2">
            The Commission Workflow
          </h4>
          
          <div className="space-y-3 font-mono text-xs">
            <div className="flex gap-3">
              <span className="text-brand-accent font-bold">01</span>
              <div>
                <div className="text-white font-bold">Submit Form</div>
                <p className="text-neutral-400 font-sans text-[12px]">Share references and project goals.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-brand-accent font-bold">02</span>
              <div>
                <div className="text-white font-bold">Review & 50% Deposit</div>
                <p className="text-neutral-400 font-sans text-[12px]">Confirm invoice and secure queue date.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-brand-accent font-bold">03</span>
              <div>
                <div className="text-white font-bold">Rough Sketch to Colors</div>
                <p className="text-neutral-400 font-sans text-[12px]">Feedback iterations on pose and palette.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-brand-accent font-bold">04</span>
              <div>
                <div className="text-white font-bold">High-Res Delivery</div>
                <p className="text-neutral-400 font-sans text-[12px]">Final payment & master file download.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
