import React, { useState } from 'react';
import { ArrowLeft, MessageSquare, ArrowRight, Check, Wrench, ShieldCheck, Phone } from 'lucide-react';
import { productsData } from '../data/products';
import ScrollReveal from './ScrollReveal';

export default function CategoryPage({ categoryId, onBackToHome, onNavigateCategory, onOpenModal, onSelectForRfq }) {
  const categoryMeta = {
    adhesives: {
      num: '01.',
      title: 'Adhesi Pro™ Division',
      badge: 'Direct Adhesives Manufacturing & Trading',
      subtitle: 'Industrial PVAc White Glues, Certified D3 Water-Resistant Adhesives, 1K PUR, and High-Tack Resins',
      desc: 'Our specialized adhesive manufacturing facility produces high-solid PVAc white glues, Certified D3 water-resistant formulas (Lockpro WR 3), Commercial D3, D2 grade glues, PVC/Acrylic adhesives, and Lockpro VUS 1K PUR adhesives. Engineered for high humidity and Indian manufacturing climates.',
      filterKey: 'adhesives'
    },
    machines: {
      num: '02.',
      title: 'Panel Processing Machines',
      badge: 'Heavy Woodworking Machinery & Setup',
      subtitle: 'Precision Sliding Table Panel Saws, Automatic Edge Banders, CNC Routers, Multi-Boring & Cold Press',
      desc: 'Heavy industrial equipment complete with turnkey commissioning, leveling, operator training, and warranty.',
      filterKey: 'machines'
    },
    tools: {
      num: '03.',
      title: 'Woodworking Tools & Yash Tooling System',
      badge: 'Standard & Custom Precision Tooling',
      subtitle: 'PCD Pre-Milling Cutters, TCT Panel Saw Blades, CNC Router Bits & Custom Shaper Profile Heads',
      desc: 'Dynamic balancing, micro-grain carbide, and polycrystalline diamond (PCD) teeth engineered for superior tool life.',
      filterKey: 'tools'
    },
    hardware: {
      num: '04.',
      title: 'Square One PVC Edge Tapes & Hardware',
      badge: 'Official Square One Channel Partner',
      subtitle: 'Virgin PVC Edge-Banding Tapes, Soft-Close 2D/3D Hinges, Telescopic Slides, Cam & Bolt Fittings',
      desc: 'Official channel partner supplying exact woodgrain decor matches, hydraulic soft-close hinges, telescopic slides, and cam connectors.',
      filterKey: 'hardware'
    },
    services: {
      num: '05.',
      title: 'Technical Servicing & Spare Parts',
      badge: 'Factory Zero-Downtime Guarantee',
      subtitle: 'Turnkey Commissioning, Emergency Maintenance, Yash Tooling Retipping & Ready Machine Spares',
      desc: 'Preventing machine downtime is our highest commitment. We maintain an active inventory of genuine machine components in Nagpur alongside certified service technicians for preventative maintenance, breakdown repair, and PCD diamond blade resharpening.',
      filterKey: 'services'
    }
  };

  const meta = categoryMeta[categoryId] || categoryMeta.adhesives;
  const categoryProducts = productsData.filter(p => p.category === meta.filterKey);

  const handleWhatsAppProduct = (product) => {
    const text = `Hello Modu Pro Innovation Team,%0A%0AI would like to inquire about this product from the ${encodeURIComponent(meta.title)} production page:%0A*Product:* ${encodeURIComponent(product.name)}%0A*Category:* ${encodeURIComponent(product.categoryLabel)}%0A%0APlease provide commercial price quote, technical specs, and shipping timeframe for Nagpur / Maharashtra.%0A%0AThank you!`;
    window.open(`https://wa.me/918623041894?text=${text}`, '_blank');
  };

  return (
    <div className="bg-canvas min-h-screen py-12 lg:py-20 animate-fadeIn">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Top Breadcrumb & Back Navigation */}
        <div className="flex items-center justify-between pb-8 mb-10 border-b border-[#e5e5e5]">
          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-tight text-obsidian hover:text-brand-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Showroom Home</span>
          </button>

          <span className="text-xs uppercase tracking-tight text-stone">
            Showroom / Production / {meta.title}
          </span>
        </div>

        {/* Category Header (Editorial Nornorm Scandinavian layout) with ScrollReveal */}
        <ScrollReveal className="max-w-4xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-pill bg-bone border border-[#e5e5e5] text-xs font-bold uppercase tracking-tight text-brand-primary mb-4">
            <span>{meta.num}</span>
            <span>{meta.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal text-obsidian tracking-tight mb-4">
            {meta.title}
          </h1>

          <p className="text-base sm:text-xl text-stone tracking-tight font-normal mb-6">
            {meta.subtitle}
          </p>

          <p className="text-xs sm:text-base text-stone tracking-tight leading-relaxed max-w-3xl">
            {meta.desc}
          </p>
        </ScrollReveal>

        {/* Special Services Callout if Services Category */}
        {categoryId === 'services' && (
          <div className="bg-bone border border-[#e5e5e5] rounded-card p-8 mb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <span className="text-lg font-bold text-obsidian block mb-2">01. On-Site Commissioning</span>
              <p className="text-sm text-stone leading-relaxed">
                Complete electrical, pneumatic, and mechanical leveling of panel saws, edge banders, and CNC routers with operator safety training.
              </p>
            </div>
            <div>
              <span className="text-lg font-bold text-obsidian block mb-2">02. Ready Spare Parts</span>
              <p className="text-sm text-stone leading-relaxed">
                Inverters, spindle motors, linear guide rails, pneumatics, Teflon glue pots, scraping blades, and buffing pads ex-stock in Nagpur.
              </p>
            </div>
            <div>
              <span className="text-lg font-bold text-obsidian block mb-2">03. Yash PCD Retipping</span>
              <p className="text-sm text-stone leading-relaxed">
                Precision CNC diamond grinding and PCD retipping for panel saw blades and pre-milling cutters to restore factory precision.
              </p>
            </div>
          </div>
        )}

        {/* Product Catalog Grid for this Specific Category */}
        <div className="mb-20">
          <div className="flex items-center justify-between pb-4 mb-8 border-b border-[#e5e5e5]">
            <h2 className="text-2xl font-normal text-obsidian tracking-tight">
              Production Line ({categoryProducts.length} Available Models)
            </h2>
            <span className="text-xs font-medium text-stone tracking-tight">
              Factory Certified &bull; Direct Supply
            </span>
          </div>

          {categoryProducts.length === 0 ? (
            <div className="text-center py-16 bg-bone rounded-card">
              <p className="text-base font-medium text-obsidian">Technical servicing request desk is ready.</p>
              <p className="text-xs text-stone mt-2">Call our Nagpur technical desk directly: +91 86258 32095</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {categoryProducts.map((product, idx) => (
                <ScrollReveal
                  key={product.id}
                  variant="scale"
                  delay={(idx % 3) * 100}
                  className="bg-canvas border border-[#e5e5e5] rounded-card overflow-hidden flex flex-col group card-hover-effect"
                >
                  {/* Sharp Editorial Image Frame */}
                  <div className="bg-bone h-56 sm:h-64 p-6 sm:p-8 flex items-center justify-center relative border-b border-[#e5e5e5]">
                    <span className="absolute top-3 left-3 bg-canvas border border-[#e5e5e5] text-obsidian text-[10px] font-bold uppercase tracking-tight px-2.5 py-1 rounded-pill shadow-xs">
                      {product.brand}
                    </span>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-40 sm:max-h-48 w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 flex flex-col flex-grow">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-tight text-brand-secondary mb-1">
                      {product.categoryLabel}
                    </span>

                    <h3 className="text-base sm:text-lg font-medium text-obsidian tracking-tight mb-2 group-hover:text-brand-primary transition-colors">
                      {product.name}
                    </h3>

                    <p className="text-xs text-stone tracking-tight leading-relaxed mb-5">
                      {product.summary}
                    </p>

                    {/* Specifications List */}
                    <div className="mt-auto border-t border-[#e5e5e5] pt-3 pb-5 space-y-1.5 text-xs">
                      {Object.entries(product.specifications).slice(0, 3).map(([key, val]) => (
                        <div key={key} className="flex justify-between tracking-tight">
                          <span className="text-stone">{key}:</span>
                          <span className="font-medium text-obsidian text-right">{val}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <button
                        type="button"
                        onClick={() => onOpenModal(product)}
                        className="py-2.5 px-3 rounded-pill text-xs font-medium tracking-tight border border-obsidian text-obsidian hover:bg-obsidian hover:text-white transition-colors"
                      >
                        Specs Sheet
                      </button>

                      <button
                        type="button"
                        onClick={() => handleWhatsAppProduct(product)}
                        className="py-2.5 px-3 rounded-pill text-xs font-medium tracking-tight bg-brand-primary text-white hover:bg-brand-secondary transition-colors inline-flex items-center justify-center gap-1.5"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Inquire</span>
                      </button>
                    </div>

                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>

        {/* Quick Category Switcher Footer */}
        <div className="bg-bone border border-[#e5e5e5] rounded-card p-8 text-center space-y-4">
          <p className="text-xs uppercase tracking-tight font-bold text-stone">
            Explore Other Production Divisions
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {Object.keys(categoryMeta).map((key) => {
              if (key === categoryId) return null;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => onNavigateCategory(key)}
                  className="px-5 py-2.5 rounded-pill text-xs font-medium tracking-tight bg-canvas border border-[#e5e5e5] hover:border-brand-primary hover:text-brand-primary transition-colors"
                >
                  {categoryMeta[key].title}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
