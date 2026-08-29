import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export default function ContactView({ setActiveView }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16">
      
      {/* Header */}
      <div className="text-left space-y-4 border-b-2 border-dark-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-dark-900 border border-dark-700 text-brand-cyber font-mono text-xs font-bold uppercase tracking-widest">
          <Mail className="w-3.5 h-3.5" />
          <span>General Inquiries & Collaborations</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-display tracking-tight">
          GET IN TOUCH
        </h1>
        <p className="text-sm sm:text-base text-neutral-400 max-w-2xl leading-relaxed">
          For commercial licensing, studio partnerships, guest appearances, interviews, or general inquiries, please use the form below.
        </p>

        {/* Commission redirect notice */}
        <div className="bg-dark-900 border-2 border-brand-accent p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-brand-accent flex-shrink-0" />
            <p className="text-xs sm:text-sm text-neutral-200">
              <strong>Looking to hire for a specific illustration, book cover, or comic commission?</strong> Please use our dedicated commission form.
            </p>
          </div>
          <button
            onClick={() => {
              setActiveView('hire');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="btn-primary px-5 py-2.5 text-xs font-mono font-bold tracking-wider flex-shrink-0"
          >
            GO TO HIRE ME →
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-dark-900 border-2 border-dark-800 p-6 sm:p-10 shadow-2xl text-left">
          {submitted ? (
            <div className="p-8 text-center space-y-4 bg-dark-950 border-2 border-emerald-500">
              <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white font-display">MESSAGE SENT</h3>
              <p className="text-sm text-neutral-300">
                Thank you for reaching out! I will review your message and reply to <span className="text-brand-cyber">{formData.email}</span> shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-outline px-6 py-2.5 text-xs font-mono uppercase"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  Your Name <span className="text-brand-accent">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full bg-dark-950 border-2 border-dark-700 focus:border-brand-accent p-3.5 text-white text-sm focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  Email Address <span className="text-brand-accent">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="yourname@domain.com"
                  className="w-full bg-dark-950 border-2 border-dark-700 focus:border-brand-accent p-3.5 text-white text-sm focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Partnership, Press, or Question"
                  className="w-full bg-dark-950 border-2 border-dark-700 focus:border-brand-accent p-3.5 text-white text-sm focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  Message Details <span className="text-brand-accent">*</span>
                </label>
                <textarea
                  required
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we collaborate? Please provide as much context as possible..."
                  className="w-full bg-dark-950 border-2 border-dark-700 focus:border-brand-accent p-3.5 text-white text-sm focus:outline-none transition-colors leading-relaxed"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary py-4 text-xs font-mono font-bold tracking-widest flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>SEND DIRECT MESSAGE</span>
              </button>
            </form>
          )}
        </div>

        {/* Studio & Contact Info */}
        <div className="lg:col-span-5 text-left space-y-6">
          <div className="bg-dark-900 border-2 border-dark-800 p-6 sm:p-8 space-y-6 shadow-2xl">
            <h3 className="text-lg font-bold text-white font-display uppercase tracking-wider border-b border-dark-800 pb-3">
              Direct Contact
            </h3>
            
            <div className="space-y-4 text-sm">
              <div>
                <span className="text-xs font-mono text-neutral-500 uppercase block mb-1">Email</span>
                <a href="mailto:unrivaledart@gmail.com" className="text-brand-accent font-bold hover:underline font-mono text-base">
                  unrivaledart@gmail.com
                </a>
              </div>

              <div>
                <span className="text-xs font-mono text-neutral-500 uppercase block mb-1">Studio Availability</span>
                <span className="text-neutral-300 font-mono">Worldwide (Global Remote Client Studio) 🌍</span>
              </div>

              <div>
                <span className="text-xs font-mono text-neutral-500 uppercase block mb-1">Response Time</span>
                <span className="text-neutral-300 font-mono">Within 24–48 Hours</span>
              </div>
            </div>
          </div>

          <div className="bg-dark-900 border-2 border-dark-800 p-6 sm:p-8 space-y-4 shadow-2xl">
            <h3 className="text-lg font-bold text-white font-display uppercase tracking-wider border-b border-dark-800 pb-3">
              Official Hub & Channels
            </h3>
            <p className="text-xs text-neutral-400">
              Follow for official links, artwork releases, speedpaints, and animations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono pt-2">
              <a 
                href="https://linktr.ee/unrivaledart" 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 bg-dark-950 border border-dark-700 hover:border-brand-accent text-neutral-300 hover:text-white transition-colors flex items-center justify-between"
              >
                <span>Linktree Hub</span>
                <span>↗</span>
              </a>
              <a 
                href="https://youtube.com/@chuksjoseph0?si=AvsnJPqBNOsSNM3L" 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 bg-dark-950 border border-dark-700 hover:border-brand-accent text-neutral-300 hover:text-white transition-colors flex items-center justify-between"
              >
                <span>YouTube Channel</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
