import React, { useState } from 'react';
import { Menu, X, Globe, ChevronDown, ArrowRight } from 'lucide-react';

export default function Navbar({ onNavigateHome, onNavigateCategory, activeView }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const categories = [
    { id: 'adhesives', label: 'Adhesi Pro™ Adhesives' },
    { id: 'machines', label: 'Panel Processing Machines' },
    { id: 'tools', label: 'Woodworking Tools (Yash)' },
    { id: 'hardware', label: 'PVC Edge Tapes & Hardware' },
    { id: 'services', label: 'Technical Servicing & Spares' },
  ];

  const handleCategoryClick = (id) => {
    onNavigateCategory(id);
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-canvas/95 backdrop-blur-md border-b border-[#e5e5e5] transition-all duration-300">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button
          type="button"
          onClick={onNavigateHome}
          className="flex items-center text-left transition-transform duration-200 active:scale-95"
          aria-label="Modu Pro Innovation Home"
        >
          <img
            src="/assets/logo/modu pro logo@4x-8.png"
            alt="Modu Pro Innovation Pvt. Ltd."
            className="h-10 sm:h-11 w-auto object-contain"
          />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          <button
            type="button"
            onClick={onNavigateHome}
            className={`px-4 py-2 rounded-card text-sm font-medium tracking-tight transition-all duration-200 ${
              activeView === 'home'
                ? 'text-brand-primary bg-bone font-semibold shadow-xs'
                : 'text-obsidian hover:text-brand-primary hover:bg-bone/50'
            }`}
          >
            Showroom Home
          </button>

          {/* Categories Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onMouseEnter={() => setDropdownOpen(true)}
              className={`px-4 py-2 rounded-card text-sm font-medium tracking-tight transition-all duration-200 inline-flex items-center gap-1.5 ${
                activeView !== 'home'
                  ? 'text-brand-primary bg-bone font-semibold shadow-xs'
                  : 'text-obsidian hover:text-brand-primary hover:bg-bone/50'
              }`}
            >
              <span>Production Per Category</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-brand-primary' : 'opacity-70'}`} />
            </button>

            {dropdownOpen && (
              <div
                onMouseLeave={() => setDropdownOpen(false)}
                className="absolute left-0 mt-1 w-64 bg-canvas border border-[#e5e5e5] rounded-card shadow-lg py-2 z-50 animate-fadeIn"
              >
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleCategoryClick(cat.id)}
                    className="w-full text-left px-4 py-2.5 text-xs font-medium tracking-tight text-obsidian hover:bg-bone hover:text-brand-primary transition-colors flex items-center justify-between group"
                  >
                    <span>{cat.label}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-brand-primary" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href="#industries"
            onClick={() => {
              if (activeView !== 'home') onNavigateHome();
            }}
            className="px-4 py-2 rounded-card text-sm font-medium tracking-tight text-obsidian hover:text-brand-primary hover:bg-bone/50 transition-colors"
          >
            Industries
          </a>

          <a
            href="#rfq"
            onClick={() => {
              if (activeView !== 'home') onNavigateHome();
            }}
            className="px-4 py-2 rounded-card text-sm font-medium tracking-tight text-obsidian hover:text-brand-primary hover:bg-bone/50 transition-colors"
          >
            Request Quote
          </a>

          <a
            href="#contact"
            onClick={() => {
              if (activeView !== 'home') onNavigateHome();
            }}
            className="px-4 py-2 rounded-card text-sm font-medium tracking-tight text-obsidian hover:text-brand-primary hover:bg-bone/50 transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Right Actions: Region Switcher + Primary Pill CTA */}
        <div className="hidden sm:flex items-center gap-4 sm:gap-5">
          <div className="flex items-center gap-1.5 text-xs text-stone tracking-tight font-medium">
            <Globe className="w-3.5 h-3.5 text-obsidian" />
            <span className="hidden md:inline">India (Nagpur HQ)</span>
            <span className="md:hidden">Nagpur</span>
          </div>

          <a
            href="#rfq"
            onClick={() => {
              if (activeView !== 'home') onNavigateHome();
            }}
            className="btn-primary-pill text-xs py-2 px-5 shadow-xs"
          >
            <span>Direct RFQ</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle (44px target) */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href="#rfq"
            onClick={() => {
              if (activeView !== 'home') onNavigateHome();
            }}
            className="sm:hidden btn-primary-pill text-[11px] py-1.5 px-3"
          >
            RFQ
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-11 h-11 flex items-center justify-center rounded-card text-obsidian hover:bg-bone transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-brand-primary" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Backdrop & Menu with Smooth Transitions */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-black/40 backdrop-blur-xs z-40 animate-fadeIn" onClick={() => setMobileMenuOpen(false)}>
          <div 
            className="bg-canvas border-b border-[#e5e5e5] px-6 py-6 shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-1">
              <button
                type="button"
                onClick={() => {
                  onNavigateHome();
                  setMobileMenuOpen(false);
                }}
                className="text-left min-h-[44px] flex items-center text-sm font-medium text-obsidian hover:text-brand-primary border-b border-[#e5e5e5]"
              >
                Showroom Home
              </button>

              <div className="py-3 border-b border-[#e5e5e5]">
                <span className="text-[11px] font-bold uppercase tracking-tight text-stone block mb-2">
                  Production Divisions
                </span>
                <div className="space-y-1 pl-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleCategoryClick(cat.id)}
                      className="min-h-[40px] flex items-center justify-between w-full text-left py-1 text-xs font-medium text-obsidian hover:text-brand-primary transition-colors"
                    >
                      <span>&bull; {cat.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-stone" />
                    </button>
                  ))}
                </div>
              </div>

              <a
                href="#industries"
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[44px] flex items-center text-sm font-medium text-obsidian hover:text-brand-primary border-b border-[#e5e5e5]"
              >
                Industries Served
              </a>

              <a
                href="#rfq"
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[44px] flex items-center text-sm font-medium text-obsidian hover:text-brand-primary border-b border-[#e5e5e5]"
              >
                Request Commercial Quote
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[44px] flex items-center text-sm font-medium text-obsidian hover:text-brand-primary"
              >
                Contact &amp; Location
              </a>

              <div className="pt-4 mt-2 border-t border-[#e5e5e5]">
                <a
                  href="#rfq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary-pill w-full text-center text-xs py-3.5"
                >
                  Request Factory RFQ
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
