import React from 'react';
import { Phone, CheckCircle, MessageSquare } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function TechnicalServicing() {
  const servicePoints = [
    {
      title: 'Turnkey Commissioning & On-Site Alignment',
      desc: 'Expert on-site installation of sliding table panel saws, automatic edge banders, CNC routers, and multi-boring machines with operator safety training.'
    },
    {
      title: 'Ready Inventory of Genuine Machine Spares',
      desc: 'Ex-stock supply in Nagpur: spindle motors, inverters, linear guide rails, pneumatic cylinders, Teflon glue pots, scraping blades, and buffing wheels.'
    },
    {
      title: 'Yash Tooling Re-Sharpening & PCD Retipping',
      desc: 'Precision CNC diamond grinding and PCD retipping services for router bits, panel saw blades, and custom shaper heads to restore factory precision.'
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-24 lg:py-28 bg-bone border-b border-[#e5e5e5] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        
        <ScrollReveal 
          variant="scale"
          className="bg-canvas border border-[#e5e5e5] rounded-card p-6 sm:p-10 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center card-hover-effect"
        >
          
          {/* Left Column: Details */}
          <div className="lg:col-span-7">
            <span className="text-xs font-bold tracking-tight uppercase text-brand-primary block mb-3">
              05. ZERO-DOWNTIME GUARANTEE &bull; TECHNICAL SERVICING &amp; SPARES
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-obsidian tracking-tight mb-4">
              Uninterrupted Factory Operation
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-stone tracking-tight leading-relaxed mb-6 sm:mb-8">
              Machinery downtime cuts into factory margins. Modu Pro Innovation maintains a dedicated engineering team and an active warehouse of original machine components in Nagpur to keep your production running without costly interruptions.
            </p>

            <div className="space-y-5 sm:space-y-6 mb-8 sm:mb-10">
              {servicePoints.map((point) => (
                <div key={point.title} className="flex gap-3 sm:gap-4">
                  <div className="w-8 h-8 rounded-pill bg-bone border border-[#e5e5e5] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <CheckCircle className="w-4 h-4 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-medium tracking-tight text-obsidian mb-1">
                      {point.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-stone tracking-tight leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-[#e5e5e5] flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href="tel:+918625832095"
                className="btn-primary-pill text-xs py-3.5 w-full sm:w-auto"
              >
                <Phone className="w-4 h-4" />
                <span>Call Technical Desk: +91 86258 32095</span>
              </a>
              <a
                href="https://wa.me/918625832095?text=Hello%20Modu%20Pro%2C%20I%20require%20urgent%20machine%20spare%20parts%20or%20service%20support."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-pill text-xs py-3.5 w-full sm:w-auto"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Technical Support</span>
              </a>
            </div>

          </div>

          {/* Right Column: Visual Cold Press Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="bg-bone rounded-card border border-[#e5e5e5] p-6 sm:p-8 w-full flex flex-col items-center justify-center">
              <img
                src="/assets/products/Panel Processing Machine/IMG_9659-Photoroom.png"
                alt="Hunny Impex Hi-50T Cold Press Machine"
                className="max-h-64 sm:max-h-80 w-auto object-contain transition-transform duration-500 ease-out hover:scale-105"
                loading="lazy"
              />
              <div className="mt-5 text-center">
                <span className="text-sm font-medium text-obsidian tracking-tight block">
                  Hunny Impex Hi-50T Hydraulic Cold Press
                </span>
                <span className="text-xs text-stone tracking-tight">
                  Factory Calibrated &bull; Full Maintenance Warranty
                </span>
              </div>
            </div>
          </div>

        </ScrollReveal>

      </div>
    </section>
  );
}
