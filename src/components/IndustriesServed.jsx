import React from 'react';
import { Home, Armchair, DoorClosed, Wrench, Grid } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function IndustriesServed() {
  const industries = [
    {
      num: '01.',
      title: 'Modular Kitchen Manufacturers',
      icon: Home,
      desc: 'High-moisture resistance is vital. We supply Lockpro WR 3 (Certified D3) white glues, Square One PVC edge-banding tapes, soft-close 3D hydraulic hinges, telescopic drawer channels, and high-speed edge banding machinery.',
      tags: ['Lockpro WR 3 D3', 'PVC Edge Tapes', 'Soft-Close Hinges', 'Auto Edge Banders'],
      delay: 100
    },
    {
      num: '02.',
      title: 'Furniture Manufacturers',
      icon: Armchair,
      desc: 'Living room, bedroom, and office furniture lines: Lockpro 808 PVAc glues, Manyuan sliding panel saws, Yash TCT and PCD saw blades, minifix cam fittings, nylon bushes, and rapid technical servicing support.',
      tags: ['Lockpro 808', 'Panel Saws', 'Cam & Bolts', 'Telescopic Slides'],
      delay: 200
    },
    {
      num: '03.',
      title: 'Door Manufacturers',
      icon: DoorClosed,
      desc: 'High-tonnage cold pressing and lamination: Hunny Impex Hi-50T Cold Press machines, Lockpro VUS 1K PUR adhesives for exterior doors, and custom Yash profile cutters for solid wood and flush door edge shaping.',
      tags: ['Hi-50T Cold Press', '1K PUR Glue', 'Yash Profile Cutters'],
      delay: 300
    },
    {
      num: '04.',
      title: 'Woodworking Industries',
      icon: Wrench,
      desc: 'Industrial woodworking factories requiring uninterrupted supplies of Lockpro 707 & 808 PR, CNC compression router bits, multi-boring bits, custom tooling profiles, maintenance contracts, and spare part replacements.',
      tags: ['CNC Router Bits', 'Multi-Boring Bits', 'Bulk Adhesives', 'Machine Spares'],
      delay: 400
    },
    {
      num: '05.',
      title: 'Panel-Processing Units',
      icon: Grid,
      desc: 'High-throughput panel sizing and pre-milling centers: Hunny Impex multi-boring machines, Manyuan panel saws, Yash PCD pre-milling cutters, scoring blades, and certified technicians for periodic machine alignment.',
      tags: ['Multi-Boring HI-202', 'PCD Pre-Milling Cutters', 'Scoring Blades'],
      delay: 500
    }
  ];

  return (
    <section id="industries" className="bg-canvas py-16 sm:py-24 lg:py-28 border-b border-[#e5e5e5] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        
        {/* Centered Section Header with ScrollReveal */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-tight uppercase text-brand-primary block mb-3">
            CUSTOMER SEGMENTS
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-obsidian tracking-tight mb-4">
            Industries We Serve
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-stone tracking-tight leading-relaxed max-w-xl mx-auto">
            Tailored supply chain workflows designed specifically to meet the production cycles, quality standards, and output demands of specialized woodworking manufacturers.
          </p>
        </ScrollReveal>

        {/* 5-Item Editorial Grid with Staggered ScrollReveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            const isWide = idx === 4;

            return (
              <ScrollReveal
                key={ind.title}
                delay={ind.delay}
                variant="scale"
                className={`bg-bone border border-[#e5e5e5] rounded-card p-6 sm:p-8 flex flex-col justify-between card-hover-effect ${
                  isWide ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-pill bg-canvas border border-[#e5e5e5] flex items-center justify-center text-obsidian shadow-xs">
                      <Icon className="w-5 h-5 text-brand-primary" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-stone tracking-tight">
                      {ind.num}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-medium text-obsidian tracking-tight mb-3">
                    {ind.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone tracking-tight leading-relaxed mb-6">
                    {ind.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#e5e5e5]">
                  {ind.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] sm:text-[11px] font-bold uppercase tracking-tight bg-canvas text-obsidian border border-[#e5e5e5] px-3 py-1 rounded-pill"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
