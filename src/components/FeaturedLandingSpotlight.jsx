import React from 'react';
import { ArrowRight, MessageSquare, Check } from 'lucide-react';
import { productsData } from '../data/products';
import ScrollReveal from './ScrollReveal';

export default function FeaturedLandingSpotlight({ onNavigateCategory }) {
  // Flagship products for each category
  const productAdhesives = productsData.find(p => p.id === 'lockpro-wr3') || productsData[0];
  const productTools = productsData.find(p => p.id === 'yash-pcd-blade') || productsData.find(p => p.category === 'tools');
  const productMachines = productsData.find(p => p.id === 'auto-edge-bander') || productsData.find(p => p.category === 'machines');
  const productHardware = productsData.find(p => p.id === 'squareone-woodgrain-tape') || productsData.find(p => p.category === 'hardware');

  const showcases = [
    {
      num: '01.',
      badgeTag: '01. SHOWROOM SPOTLIGHT • ADHESIVES MANUFACTURING',
      categoryTitle: 'Adhesi Pro™ Division',
      categoryId: 'adhesives',
      product: productAdhesives,
      badgeLabel: 'Flagship Formulation',
      categoryTag: 'Category 01 • Industrial Adhesives',
      specs: [
        { key: 'Grade Rating', val: 'Certified D3 Water Resistance (EN 204)' },
        { key: 'Base Polymer', val: 'PVAc Modified Synthetic Resin Emulsion' },
        { key: 'Solid Content', val: '48% – 52% High Solids' },
        { key: 'Curing Time', val: 'Initial grab 15–20 mins; Full cure 24 hrs' }
      ],
      points: [
        'Certified D3 Water Resistance (EN 204 Standard)',
        'Zero telegraphing under high-pressure lamination',
        'In-house manufacturing • Ready bulk drums and carboys'
      ],
      ctaLineText: 'View Full Adhesives Production Line (6 Items)'
    },
    {
      num: '02.',
      badgeTag: '02. SHOWROOM SPOTLIGHT • WOODWORKING TOOLS & PCD',
      categoryTitle: 'Woodworking Tools Division',
      categoryId: 'tools',
      product: productTools,
      badgeLabel: 'PCD Diamond Tooling',
      categoryTag: 'Category 02 • Woodworking Tools',
      specs: [
        { key: 'Dimensions', val: 'Ø 200 x 8 x 30 x 3 x 12 mm' },
        { key: 'Cutting Material', val: 'Polycrystalline Diamond (PCD)' },
        { key: 'Dynamic Balance', val: 'Precision G2.5 balanced up to 9,000 RPM' },
        { key: 'Re-sharpening', val: 'Supported up to 5 factory resharpen cycles' }
      ],
      points: [
        '20x longer working life compared to standard tungsten carbide',
        'Zero-chipping mirror edge finish on double-sided laminates',
        'Custom profiles manufactured directly from customer CAD drawings'
      ],
      ctaLineText: 'View Full Woodworking Tools Line (Custom & Standard)'
    },
    {
      num: '03.',
      badgeTag: '03. SHOWROOM SPOTLIGHT • WOODWORKING MACHINERY',
      categoryTitle: 'Panel Processing Machines Division',
      categoryId: 'machines',
      product: productMachines,
      badgeLabel: 'Turnkey Automated Line',
      categoryTag: 'Category 03 • Panel Processing Machines',
      specs: [
        { key: 'Feed Speed', val: '12–20 meters/minute variable inverter' },
        { key: 'Panel Thickness', val: '10 mm – 60 mm panel capacity' },
        { key: 'Edge Thickness', val: '0.4 mm – 3.0 mm (PVC / ABS / Veneer)' },
        { key: 'Workstations', val: 'Pre-milling, Glue, Snipping, Trimming, Buffing' }
      ],
      points: [
        'Delta PLC with full-color touch-screen intuitive HMI',
        'Teflon-coated quick-melt glue pot for PUR & EVA hotmelt',
        'On-site factory commissioning and full operator training included'
      ],
      ctaLineText: 'View Full Machinery Production Line (5 Machines)'
    },
    {
      num: '04.',
      badgeTag: '04. SHOWROOM SPOTLIGHT • PVC TAPES & HARDWARE',
      categoryTitle: 'PVC Edge-Banding Tapes & Hardware',
      categoryId: 'hardware',
      product: productHardware,
      badgeLabel: 'Official Square One Partner',
      categoryTag: 'Category 04 • PVC Edge Tapes & Hardware',
      specs: [
        { key: 'Material', val: '100% Virgin Grade Polyvinyl Chloride (PVC)' },
        { key: 'Thickness Options', val: '0.8mm, 1.0mm, 1.2mm, 2.0mm' },
        { key: 'Standard Widths', val: '22mm, 30mm, 45mm, 54mm' },
        { key: 'Surface Finish', val: 'UV-resistant coated, matte & high-gloss woodgrain' }
      ],
      points: [
        '100% decor and texture match with major Indian laminate brands',
        'Zero whitening or cracking during high-speed corner rounding',
        'Ex-stock bulk rolls available immediately from Nagpur warehouse'
      ],
      ctaLineText: 'View Full Hardware & Tapes Line (6 Fittings & Tapes)'
    }
  ];

  const handleWhatsApp = (item) => {
    const text = `Hello Modu Pro Innovation Team,%0A%0AI would like to inquire about this flagship product featured on the showroom landing page:%0A*Product:* ${encodeURIComponent(item.product?.name || item.categoryTitle)}%0A*Category:* ${encodeURIComponent(item.categoryTitle)}%0A%0APlease provide commercial price tiers, technical datasheets, and delivery timeline.%0A%0AThank you!`;
    window.open(`https://wa.me/918623041894?text=${text}`, '_blank');
  };

  return (
    <section className="bg-bone py-16 sm:py-24 lg:py-28 border-b border-[#e5e5e5] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-16 sm:space-y-24">
        
        {/* Main Section Header with Scroll Reveal */}
        <ScrollReveal className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-tight uppercase text-brand-primary block mb-3">
            SHOWROOM SPOTLIGHT &bull; CORE CATEGORY SHOWCASES
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-obsidian tracking-tight mb-4">
            Specialized Production Showcases
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-stone tracking-tight leading-relaxed max-w-2xl mx-auto">
            Explore our four core manufacturing and supply divisions. Each flagship showcase features industrial specifications, application profiles, and factory-direct procurement.
          </p>
        </ScrollReveal>

        {/* 4 Category Showcases */}
        {showcases.map((sc, index) => {
          const isEven = index % 2 === 1;

          return (
            <ScrollReveal 
              key={sc.categoryId} 
              variant="scale"
              threshold={0.08}
              className="space-y-4 sm:space-y-6"
            >
              {/* Category Header Bar */}
              <div className="pb-3 sm:pb-4 border-b border-[#e5e5e5]">
                <span className="text-xs font-bold tracking-tight uppercase text-brand-primary block mb-1">
                  {sc.badgeTag}
                </span>
                <h3 className="text-xl sm:text-3xl lg:text-4xl font-normal text-obsidian tracking-tight">
                  {sc.categoryTitle}
                </h3>
              </div>

              {/* Showcase Card with Smooth Hover Elevation */}
              <div className="bg-canvas border border-[#e5e5e5] rounded-card overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center p-5 sm:p-8 lg:p-12 gap-6 sm:gap-8 lg:gap-12 card-hover-effect">
                
                {/* Product Photography Container */}
                <div className={`lg:col-span-5 bg-bone rounded-card p-6 sm:p-8 flex items-center justify-center relative min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <span className="absolute top-4 left-4 bg-canvas border border-[#e5e5e5] text-obsidian text-[10px] sm:text-[11px] font-bold uppercase tracking-tight px-3 py-1 rounded-pill shadow-xs">
                    {sc.badgeLabel}
                  </span>
                  {sc.product?.image && (
                    <img
                      src={sc.product.image}
                      alt={sc.product.name}
                      className="max-h-60 sm:max-h-72 w-auto object-contain transition-transform duration-500 ease-out hover:scale-105"
                      loading="lazy"
                    />
                  )}
                </div>

                {/* Editorial Details & Specifications */}
                <div className={`lg:col-span-7 space-y-5 sm:space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div>
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-tight text-brand-secondary block mb-1">
                      {sc.categoryTag}
                    </span>
                    <h4 className="text-xl sm:text-2xl lg:text-3xl font-normal text-obsidian tracking-tight mb-2">
                      {sc.product?.name}
                    </h4>
                    <p className="text-stone text-xs sm:text-sm lg:text-base tracking-tight leading-relaxed">
                      {sc.product?.summary}
                    </p>
                  </div>

                  {/* Specifications Table - Mobile Overflow Safe */}
                  <div className="border border-[#e5e5e5] rounded-card overflow-x-auto -mx-1 sm:mx-0">
                    <table className="w-full text-left text-xs border-collapse min-w-[280px]">
                      <tbody>
                        {sc.specs.map((item, idx) => (
                          <tr key={item.key} className={idx % 2 === 0 ? 'bg-bone/50' : 'bg-canvas'}>
                            <th className="py-2.5 px-3 sm:px-4 font-normal text-stone border-b border-[#e5e5e5] w-2/5 whitespace-nowrap">
                              {item.key}
                            </th>
                            <td className="py-2.5 px-3 sm:px-4 font-medium text-obsidian border-b border-[#e5e5e5]">
                              {item.val}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Value Checkpoints */}
                  <div className="space-y-2 pt-1 text-xs text-stone">
                    {sc.points.map((pt) => (
                      <div key={pt} className="flex items-start sm:items-center gap-2">
                        <Check className="w-4 h-4 text-brand-primary shrink-0 mt-0.5 sm:mt-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                  {/* Dual Action CTAs - Responsive Stacking */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-[#e5e5e5]">
                    <button
                      type="button"
                      onClick={() => handleWhatsApp(sc)}
                      className="btn-primary-pill w-full sm:w-auto text-xs py-3"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Inquire About {sc.product?.name ? sc.product.name.split('(')[0] : 'Item'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onNavigateCategory(sc.categoryId)}
                      className="btn-ghost-pill w-full sm:w-auto text-xs py-3"
                    >
                      <span>{sc.ctaLineText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>

              </div>

            </ScrollReveal>
          );
        })}

      </div>
    </section>
  );
}
