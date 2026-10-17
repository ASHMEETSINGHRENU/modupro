import React from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function ProductionGrid({ onSelectCategory }) {
  const divisions = [
    {
      num: '01.',
      id: 'adhesives',
      title: 'Adhesi Pro™ Adhesives',
      desc: 'PVAc white glue, Certified D3 water-resistant formulas, 1K PUR, and post-forming resins for modular cabinetry.',
      image: '/assets/products/Adhhesi pro/808 MOCKUP@4x-8.png',
      count: '6 Products',
      delay: 100
    },
    {
      num: '02.',
      id: 'tools',
      title: 'Woodworking Tools',
      desc: 'Yash Tooling System: Custom shaper cutters, PCD pre-milling blades, and solid carbide CNC router bits.',
      image: '/assets/products/Woodworking Tools/4c6e378e-3b05-4e8f-b71e-bf83d9989023-Photoroom.png',
      count: 'Custom & Standard',
      delay: 200
    },
    {
      num: '03.',
      id: 'machines',
      title: 'Panel Processing Machines',
      desc: 'Manyuan MJ-320 sliding panel saws, automatic edge banders, CNC routers, multi-boring, and 50T cold presses.',
      image: '/assets/products/Panel Processing Machine/586f2b47-642a-402c-9e3f-91986a5c0779-Photoroom.png',
      count: '5 Machinery Lines',
      delay: 300
    },
    {
      num: '04.',
      id: 'hardware',
      title: 'Square One Hardware & Tapes',
      desc: 'Virgin PVC edge-banding tapes in woodgrains and solids, soft-close 3D hinges, telescopic slides, and cam bolts.',
      image: '/assets/products/pvg edge banding tapes/ChatGPT Image Aug 8, 2026, 01_11_17 PM-Photoroom.png',
      count: '6 Fittings & Tapes',
      delay: 400
    },
    {
      num: '05.',
      id: 'services',
      title: 'Technical Servicing & Spares',
      desc: 'Turnkey machine commissioning, scheduled factory AMC, PCD diamond retipping, and ready spare parts.',
      image: '/assets/products/Panel Processing Machine/IMG_9659-Photoroom.png',
      count: 'Zero-Downtime Desk',
      delay: 500
    }
  ];

  return (
    <section className="bg-canvas py-16 sm:py-24 lg:py-28 border-b border-[#e5e5e5] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        
        {/* Section Header with ScrollReveal */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-tight uppercase text-brand-primary block mb-3">
            SEPARATE PRODUCTION DIVISIONS
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-obsidian tracking-tight mb-4">
            Production Per Category
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-stone tracking-tight leading-relaxed max-w-xl mx-auto">
            Choose a specialized production division to view full technical datasheets, machine capacities, and volume ordering.
          </p>
        </ScrollReveal>

        {/* Feature Cards Grid with Staggered ScrollReveal and Hover Elevation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8">
          {divisions.map((item) => (
            <ScrollReveal
              key={item.id}
              delay={item.delay}
              className="group cursor-pointer flex flex-col justify-between p-4 sm:p-5 rounded-card bg-bone/35 border border-[#e5e5e5] card-hover-effect"
              onClick={() => onSelectCategory(item.id)}
            >
              <div>
                {/* 4:3 Image Container with sharp editorial edges */}
                <div className="bg-canvas rounded-card overflow-hidden h-48 sm:h-52 flex items-center justify-center p-4 mb-5 border border-[#e5e5e5] group-hover:border-brand-primary transition-colors">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-36 sm:max-h-40 w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Numbered Label 01. in 20px weight 700 */}
                <span className="text-lg sm:text-xl font-bold text-obsidian block mb-1.5 tracking-tight group-hover:text-brand-primary transition-colors">
                  {item.num}
                </span>

                {/* Heading */}
                <h3 className="text-base sm:text-lg font-medium text-obsidian tracking-tight mb-2">
                  {item.title}
                </h3>

                {/* Body Copy */}
                <p className="text-xs sm:text-sm text-stone tracking-tight leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>

              {/* Action indicator */}
              <div className="pt-2 border-t border-[#e5e5e5]/60">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-tight uppercase text-obsidian group-hover:text-brand-primary transition-colors">
                  <span>Enter Division ({item.count})</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
