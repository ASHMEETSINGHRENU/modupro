import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientStrip from './components/ClientStrip';
import AboutSection from './components/AboutSection';
import FeaturedLandingSpotlight from './components/FeaturedLandingSpotlight';
import ProductionGrid from './components/ProductionGrid';
import CategoryPage from './components/CategoryPage';
import IndustriesServed from './components/IndustriesServed';
import TechnicalServicing from './components/TechnicalServicing';
import RfqBuilder from './components/RfqBuilder';
import ContactSection from './components/ContactSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import FloatingActions from './components/FloatingActions';
import ScrollProgressBar from './components/ScrollProgressBar';

export default function App() {
  const [activeView, setActiveView] = useState('home'); // 'home' | 'category'
  const [activeCategory, setActiveCategory] = useState('adhesives');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [rfqPrefill, setRfqPrefill] = useState('');

  const handleNavigateHome = () => {
    setActiveView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateCategory = (categoryId) => {
    setActiveCategory(categoryId);
    setActiveView('category');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenRfq = (itemOrText) => {
    if (typeof itemOrText === 'string') {
      setRfqPrefill(itemOrText);
    } else if (itemOrText?.name) {
      setRfqPrefill(itemOrText.name);
    }
    const rfqEl = document.getElementById('rfq');
    if (rfqEl) {
      rfqEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="min-h-screen bg-canvas text-obsidian flex flex-col font-sans selection:bg-brand-primary selection:text-white relative">
      {/* Sleek Hardware-Accelerated Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Top Notification Bar */}
      <TopBar />

      {/* Main Scandinavian Showroom Sticky Navbar */}
      <Navbar
        onNavigateHome={handleNavigateHome}
        onNavigateCategory={handleNavigateCategory}
        activeView={activeView}
      />

      <main className="flex-grow">
        {activeView === 'home' ? (
          <>
            {/* Showroom Hero */}
            <Hero
              onExploreCategory={() => {
                const el = document.getElementById('spotlight');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onOpenRfq={() => handleOpenRfq('Bulk Industrial Factory Inquiries')}
            />

            {/* Industrial Partner & Channel Ecosystem Strip */}
            <ClientStrip />

            {/* Company Overview & The One-Roof Proposition */}
            <AboutSection />

            {/* LANDING PAGE MANDATE: ONLY 1 Category & 1 Product Showcase */}
            <div id="spotlight">
              <FeaturedLandingSpotlight onNavigateCategory={handleNavigateCategory} />
            </div>

            {/* SEPARATE PRODUCTION DIVISIONS: Links to Dedicated Category Pages */}
            <ProductionGrid onSelectCategory={handleNavigateCategory} />

            {/* Customer Segments / Industries We Serve */}
            <div id="industries">
              <IndustriesServed />
            </div>

            {/* Division 05 Technical Servicing & Spare Parts Zero-Downtime Guarantee */}
            <div id="services">
              <TechnicalServicing />
            </div>

            {/* Integrated RFQ Form with MongoDB & WhatsApp Dispatch */}
            <div id="rfq">
              <RfqBuilder prefilledRequirement={rfqPrefill} />
            </div>

            {/* Verified Nagpur HQ & Factory Contacts with Maps */}
            <div id="contact">
              <ContactSection />
            </div>

            {/* B2B Procurement FAQ */}
            <FaqSection />
          </>
        ) : (
          <>
            {/* SEPARATE PRODUCTION PER CATEGORY: Dedicated Full Product Line, Specs & RFQ */}
            <CategoryPage
              categoryId={activeCategory}
              onBackToHome={handleNavigateHome}
              onNavigateCategory={handleNavigateCategory}
              onOpenModal={handleOpenModal}
              onSelectForRfq={handleOpenRfq}
            />

            {/* Category-Specific RFQ Dispatch */}
            <div id="rfq">
              <RfqBuilder prefilledRequirement={rfqPrefill || `Category RFQ: ${activeCategory}`} />
            </div>

            {/* Nagpur Contact Desk */}
            <div id="contact">
              <ContactSection />
            </div>
          </>
        )}
      </main>

      {/* Scandinavian Showroom Footer */}
      <Footer onSelectCategory={handleNavigateCategory} />

      {/* Detailed Technical Specification Sheet Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onSelectForRfq={handleOpenRfq}
      />

      {/* Direct WhatsApp Concierge & Back-to-Top Controls */}
      <FloatingActions />
    </div>
  );
}
