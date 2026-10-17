import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero({ onExploreCategory, onOpenRfq }) {
  const bannerUrl = 'https://image.made-in-china.com/2f0j00demhbuMfQFzy/Factory-Supply-Edge-Banding-Machine-for-Furniture.jpg';

  return (
    <section 
      className="relative bg-[#191614] bg-cover bg-center py-20 sm:py-28 lg:py-36 text-white overflow-hidden border-b border-[#e5e5e5]"
      style={{
        backgroundImage: `linear-gradient(rgba(18, 16, 14, 0.74), rgba(18, 16, 14, 0.84)), url('${bannerUrl}')`,
        backgroundPosition: 'center 38%'
      }}
    >
      {/* Subtle vignette layer */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/35 pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 z-10">
        
        {/* Centered Editorial Block with Staggered Entrance Animations */}
        <div className="max-w-[860px] mx-auto text-center space-y-6">
          
          {/* Badge: Step 1 */}
          <div className="animate-fade-in-down inline-flex items-center gap-2 px-3.5 py-1.5 rounded-pill bg-black/45 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs font-medium text-white/95 tracking-tight shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse" />
            <span className="font-semibold text-white">MODU PRO INNOVATION PVT. LTD.</span>
            <span className="text-white/40">&bull;</span>
            <span className="text-white/85">Nagpur, Maharashtra</span>
          </div>

          {/* Heading: Step 2 */}
          <h1 
            className="text-3xl sm:text-5xl lg:text-[4.25rem] font-normal text-white tracking-tight leading-[1.1] animate-fade-in-up"
            style={{ animationDelay: '100ms', animationFillMode: 'both' }}
          >
            An integrated one-roof ecosystem for modern woodworking.
          </h1>

          {/* Subtext: Step 3 */}
          <p 
            className="text-sm sm:text-base lg:text-xl text-[#e7e4dc] tracking-tight leading-relaxed max-w-2xl mx-auto font-normal animate-fade-in-up"
            style={{ animationDelay: '220ms', animationFillMode: 'both' }}
          >
            Direct PVAc adhesives manufacturing, Yash precision tooling, heavy panel processing machinery, and Square One hardware for modular furniture, kitchen, and door manufacturers across India.
          </p>

          {/* CTA Pair: Step 4 */}
          <div 
            className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-in-up"
            style={{ animationDelay: '340ms', animationFillMode: 'both' }}
          >
            <button
              type="button"
              onClick={onExploreCategory}
              className="btn-primary-pill w-full sm:w-auto shadow-md"
            >
              <span>Explore Spotlight Showcases</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onOpenRfq}
              className="px-6 py-3.5 rounded-pill text-xs font-bold tracking-tight uppercase border border-white/70 text-white hover:bg-white hover:text-black transition-all bg-black/30 backdrop-blur-sm w-full sm:w-auto"
            >
              <span>Request Factory Quotation</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
