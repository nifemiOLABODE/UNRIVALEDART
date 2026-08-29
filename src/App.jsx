import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ArtworkModal from './components/ArtworkModal';
import ShopModal from './components/ShopModal';
import AgeGateModal from './components/AgeGateModal';

import HomeView from './views/HomeView';
import PortfolioView from './views/PortfolioView';
import ServicesView from './views/ServicesView';
import AboutView from './views/AboutView';
import HireView from './views/HireView';
import ContactView from './views/ContactView';
import PrivacyView from './views/PrivacyView';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';

export default function App() {
  const [activeView, setActiveView] = useState('home');
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [preselectedArtworkForCommission, setPreselectedArtworkForCommission] = useState(null);
  const [portfolioCategory, setPortfolioCategory] = useState('all');

  // Background idle prefetching for 2D Animation video assets
  useEffect(() => {
    const prefetchAnimationMedia = () => {
      const animationVideos = [
        '/Animation/New_Project_4.mp4',
        '/Animation/InShot_20260323_224612253.mp4',
        '/Animation/New_Project.mp4',
        '/Animation/lv_0_20260614194337.mp4',
        '/Animation/Test1.mp4',
        '/Animation/New_Project_1.mp4',
        '/Animation/Untitled6.mp4',
        '/Animation/Untitled7_Restored2.mp4',
        '/Animation/Untitled8.mp4',
        '/Animation/lv_0_20251130045857.mp4',
        '/Animation/lv_0_20260607210309.mp4'
      ];

      animationVideos.forEach((videoPath, index) => {
        setTimeout(() => {
          try {
            const link = document.createElement('link');
            link.rel = 'prefetch';
            link.as = 'video';
            link.href = videoPath;
            document.head.appendChild(link);
          } catch (e) {}
        }, index * 200);
      });
    };

    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(prefetchAnimationMedia, { timeout: 2500 });
    } else {
      setTimeout(prefetchAnimationMedia, 1200);
    }
  }, []);
  
  const [isShopModalOpen, setIsShopModalOpen] = useState(false);
  const [isAgeGateOpen, setIsAgeGateOpen] = useState(false);
  const [isAgeVerified, setIsAgeVerified] = useState(() => {
    try {
      return localStorage.getItem('unrivaled_age_verified') === 'true';
    } catch {
      return false;
    }
  });

  // Commission button inside artwork lightbox
  const handleCommissionLikeThis = (artwork) => {
    setPreselectedArtworkForCommission(artwork);
    if (artwork.category === 'illustration') setSelectedService('character-illustration');
    else if (artwork.category === 'cover-arts') setSelectedService('book-covers');
    else if (artwork.category === 'comic-pages') setSelectedService('comic-art');
    else if (artwork.category === 'animation') setSelectedService('2d-animation');
    else setSelectedService('music-covers');
    
    setActiveView('hire');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectService = (serviceId) => {
    setSelectedService(serviceId);
  };

  const handleConfirmAge = () => {
    try {
      localStorage.setItem('unrivaled_age_verified', 'true');
    } catch {}
    setIsAgeVerified(true);
    setIsAgeGateOpen(false);
    setPortfolioCategory('nsfw');
    setActiveView('portfolio');
  };

  return (
    <div className="min-h-screen bg-dark-950 text-neutral-100 flex flex-col font-sans selection:bg-brand-accent selection:text-white">
      
      {/* Top Navigation */}
      <Navbar 
        activeView={activeView} 
        setActiveView={setActiveView}
        onOpenShop={() => setIsShopModalOpen(true)}
        onSelectService={handleSelectService}
      />

      {/* Main Dynamic View Content */}
      <main className="flex-grow">
        {activeView === 'home' && (
          <HomeView 
            setActiveView={setActiveView}
            onSelectArtwork={(art) => setSelectedArtwork(art)}
            onSelectService={handleSelectService}
          />
        )}

        {activeView === 'portfolio' && (
          <PortfolioView 
            onSelectArtwork={(art) => setSelectedArtwork(art)}
            onOpenAgeGate={() => setIsAgeGateOpen(true)}
            isAgeVerified={isAgeVerified}
            activeCategory={portfolioCategory}
            setActiveCategory={setPortfolioCategory}
          />
        )}

        {activeView === 'services' && (
          <ServicesView 
            setActiveView={setActiveView}
            onSelectService={handleSelectService}
          />
        )}

        {activeView === 'about' && (
          <AboutView 
            setActiveView={setActiveView}
          />
        )}

        {activeView === 'hire' && (
          <HireView 
            preselectedService={selectedService}
            preselectedArtwork={preselectedArtworkForCommission}
          />
        )}

        {activeView === 'contact' && (
          <ContactView 
            setActiveView={setActiveView}
          />
        )}

        {activeView === 'privacy' && (
          <PrivacyView 
            setActiveView={setActiveView}
          />
        )}
      </main>

      {/* Footer */}
      <Footer 
        setActiveView={setActiveView} 
        onOpenShop={() => setIsShopModalOpen(true)} 
      />

      {/* Floating Studio Logo WhatsApp Button */}
      <FloatingWhatsAppButton />

      {/* Lightbox Modal */}
      <ArtworkModal
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
        onCommissionLikeThis={handleCommissionLikeThis}
      />

      {/* Merch / Shop Coming Soon Modal */}
      <ShopModal
        isOpen={isShopModalOpen}
        onClose={() => setIsShopModalOpen(false)}
      />

      {/* 18+ Vault Age Gate Modal */}
      <AgeGateModal
        isOpen={isAgeGateOpen}
        onConfirm={handleConfirmAge}
        onCancel={() => setIsAgeGateOpen(false)}
      />

    </div>
  );
}
