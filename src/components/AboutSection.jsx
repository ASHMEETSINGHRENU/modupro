import React from 'react';
import { Layers, Factory, Link2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function AboutSection() {
  const cards = [
    {
      icon: Layers,
      tag: 'Proposition',
      title: 'The One-Roof Solution',
      desc: 'Eliminate multi-vendor friction. By consolidating adhesives, precision tooling, machinery, hardware, and service under one entity, factories cut operational downtime and achieve consistent edge and joint quality.',
      footer: '• Single procurement • Unified accountability',
      delay: 100
    },
    {
      icon: Factory,
      tag: 'Manufacturing',
      title: 'Adhesi Pro™ Division',
      desc: 'Direct chemical manufacturing of PVAc white glues, Certified D3 water-resistant formulas, Commercial D3, D2 grade glues, PVC/Acrylic adhesives, and 1K PUR polyurethane adhesives engineered for tropical factory humidity.',
      footer: '• Certified D3 / D4 • Bulk Carboys & Drums',
      delay: 250
    },
    {
      icon: Link2,
      tag: 'Alliance',
      title: 'Square One Channel Partner',
      desc: 'Authorized distribution partner of Square One for PVC edge-banding tapes in solid and woodgrain decors, soft-close 2D/3D hydraulic hinges, full extension telescopic drawer slides, cam fittings, and nylon bushes.',
      footer: '• Synchronized Decors • 50,000 Cycle Testing',
      delay: 400
    }
  ];

  return (
    <section id="about" className="bg-canvas py-16 sm:py-24 lg:py-28 border-b border-[#e5e5e5] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        
        {/* Centered Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-tight uppercase text-brand-primary block mb-3">
            COMPANY OVERVIEW &bull; MODU PRO INNOVATION
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-obsidian tracking-tight mb-4">
            An Unmatched Industrial Ecosystem
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-stone tracking-tight leading-relaxed max-w-xl mx-auto">
            Modu Pro Innovation Pvt. Ltd. provides a single integrated supplier for woodworking, modular kitchen, furniture, and door manufacturing plants.
          </p>
        </ScrollReveal>

        {/* 3-Column Feature Cards with ScrollReveal and Hover Elevation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <ScrollReveal
                key={c.title}
                delay={c.delay}
                variant="scale"
                className="bg-bone border border-[#e5e5e5] rounded-card p-6 sm:p-8 lg:p-10 flex flex-col justify-between card-hover-effect"
              >
                <div>
                  <div className="w-10 h-10 rounded-pill bg-canvas border border-[#e5e5e5] flex items-center justify-center text-obsidian mb-6 shadow-xs">
                    <Icon className="w-5 h-5 text-brand-primary" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-tight text-brand-secondary block mb-1">
                    {c.tag}
                  </span>
                  <h3 className="text-lg sm:text-xl font-medium text-obsidian tracking-tight mb-3">
                    {c.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone tracking-tight leading-relaxed mb-6">
                    {c.desc}
                  </p>
                </div>
                <div className="text-xs text-obsidian font-medium tracking-tight pt-4 border-t border-[#e5e5e5]">
                  {c.footer}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
