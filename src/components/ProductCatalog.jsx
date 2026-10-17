import React, { useState, useMemo } from 'react';
import { Search, Info, MessageSquare } from 'lucide-react';
import { productsData } from '../data/products';

export default function ProductCatalog({ activeCategory, setActiveCategory, onOpenModal }) {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Products (19)' },
    { id: 'adhesives', label: 'Adhesi Pro (Adhesives)' },
    { id: 'machines', label: 'Panel Machines' },
    { id: 'tools', label: 'Woodworking Tools' },
    { id: 'hardware', label: 'Edge Tapes & Hardware' },
  ];

  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const matchCat = activeCategory === 'all' || product.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchSearch =
        query === '' ||
        product.name.toLowerCase().includes(query) ||
        product.summary.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query);

      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleQuickWhatsApp = (product) => {
    const text = `Hello Modu Pro Innovation Pvt. Ltd.,%0A%0AI would like to inquire about:%0A*Product:* ${encodeURIComponent(product.name)}%0A*Brand Division:* ${encodeURIComponent(product.brand)}%0A*Category:* ${encodeURIComponent(product.categoryLabel)}%0A%0APlease provide commercial quote and technical specs for delivery in Nagpur / Maharashtra.%0A%0AThank you!`;
    window.open(`https://wa.me/918623041894?text=${text}`, '_blank');
  };

  return (
    <section id="catalog" className="py-20 lg:py-28 bg-brand-bg border-b border-brand-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-secondary block mb-2">
            CATALOGUE &amp; EQUIPMENT SHOWCASE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-primary mb-4">
            Engineered For Industrial Performance
          </h2>
          <div className="w-12 h-0.5 bg-brand-secondary mx-auto mb-6 relative">
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-brand-primary rotate-45" />
          </div>
          <p className="text-base text-brand-primary/75 leading-relaxed">
            Browse our core manufactured and distributed lines across high-performance adhesives, heavy panel sizing &amp; edge banding machines, Yash diamond cutters, and Square One hardware.
          </p>
        </div>

        {/* Controls: Category Filter Tabs & Search Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-brand-primary/[0.04] rounded-lg border border-brand-primary/15">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-brand-primary text-brand-bg shadow-sm'
                    : 'text-brand-primary hover:text-brand-secondary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full max-w-xs">
            <Search className="w-4 h-4 text-brand-secondary absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search product, model, adhesive..."
              className="w-full pl-10 pr-4 py-2.5 rounded-md border border-brand-primary/20 bg-brand-bg text-brand-primary text-xs font-medium focus:outline-none focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 transition-all placeholder:text-brand-primary/40"
            />
          </div>

        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-brand-primary/[0.02] rounded-lg border border-dashed border-brand-secondary/40">
            <p className="text-base font-bold text-brand-primary">No matching products found.</p>
            <p className="text-xs text-brand-primary/60 mt-1">Please try modifying your search keyword or selecting a different category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const specEntries = Object.entries(product.specifications).slice(0, 2);

              return (
                <article
                  key={product.id}
                  className="bg-brand-bg border border-brand-primary/15 rounded-lg overflow-hidden flex flex-col shadow-sm hover:shadow-luxury hover:border-brand-secondary/50 hover:-translate-y-1 transition-all duration-300 group"
                >
                  {/* Image Frame */}
                  <div className="relative h-60 bg-gradient-to-br from-brand-secondary/[0.06] to-brand-primary/[0.06] border-b border-brand-primary/10 p-6 flex items-center justify-center">
                    <span className="absolute top-3 left-3 bg-brand-bg border border-brand-secondary/40 text-brand-primary text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-sm">
                      {product.brand}
                    </span>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-44 w-auto max-w-[85%] object-contain drop-shadow-[0_8px_16px_rgba(140,70,12,0.15)] group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-secondary mb-1">
                      {product.categoryLabel}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-brand-primary mb-2 leading-snug group-hover:text-brand-secondary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-brand-primary/75 leading-relaxed mb-4 line-clamp-3">
                      {product.summary}
                    </p>

                    {/* Spec preview rows */}
                    <div className="mt-auto pt-3 border-t border-dashed border-brand-primary/15 space-y-1.5 mb-5">
                      {specEntries.map(([key, val]) => (
                        <div key={key} className="flex justify-between text-[11px]">
                          <span className="text-brand-primary/55">{key}:</span>
                          <span className="font-semibold text-brand-primary text-right">{val}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => onOpenModal(product)}
                        className="inline-flex items-center justify-center gap-1.5 py-2.5 rounded text-xs font-bold uppercase tracking-wider border border-brand-secondary/50 text-brand-primary hover:bg-brand-primary hover:text-brand-bg hover:border-brand-primary transition-colors"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>Specs</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleQuickWhatsApp(product)}
                        className="inline-flex items-center justify-center gap-1.5 py-2.5 rounded text-xs font-bold uppercase tracking-wider bg-brand-primary text-brand-bg hover:bg-brand-secondary transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Inquire</span>
                      </button>
                    </div>

                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Catalog Footer Banner */}
        <div className="mt-16 p-8 bg-brand-primary/[0.03] border border-dashed border-brand-secondary/50 rounded-lg text-center">
          <p className="font-serif text-lg font-bold text-brand-primary mb-2">
            Looking for specific machinery configurations or custom Yash tooling profiles?
          </p>
          <p className="text-xs text-brand-primary/70 mb-5 max-w-xl mx-auto">
            Our technical engineering division manufactures custom profile cutters, custom grooving tooling, and sources specialized machinery for specific factory setups.
          </p>
          <a
            href="#rfq"
            className="inline-flex items-center gap-2 px-6 py-3 rounded text-xs font-bold uppercase tracking-wider bg-brand-primary text-brand-bg hover:bg-brand-secondary transition-colors"
          >
            <span>Request Custom Solution / Proposal</span>
          </a>
        </div>

      </div>
    </section>
  );
}
