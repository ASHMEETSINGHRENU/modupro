import React, { useState, useEffect } from 'react';
import { MessageSquare, ArrowUp } from 'lucide-react';

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <aside className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      
      {/* Back to top button with smooth spring-like entrance */}
      <button
        type="button"
        onClick={scrollToTop}
        className={`w-11 h-11 rounded-pill bg-canvas border border-[#e5e5e5] text-obsidian hover:bg-obsidian hover:text-white shadow-md flex items-center justify-center transition-all duration-300 ease-out ${
          showBackToTop ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 translate-y-4 scale-90 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

      {/* Floating WhatsApp Quick Action with Ping Glow */}
      <a
        href="https://wa.me/918623041894?text=Hello%20Modu%20Pro%2C%20I%20would%20like%20to%20inquire%20about%20your%20woodworking%20machinery%20and%20adhesives."
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 p-3.5 rounded-pill bg-brand-primary text-white hover:bg-brand-secondary shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center group relative border border-white/20"
        aria-label="Direct WhatsApp Contact"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full animate-pulse" />
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="hidden sm:block absolute right-16 top-1/2 -translate-y-1/2 bg-obsidian text-white text-[11px] font-medium px-3 py-1.5 rounded-pill shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none tracking-tight">
          WhatsApp Sales Desk
        </span>
      </a>

    </aside>
  );
}
