import React from 'react';

export default function ClientStrip() {
  const partners = [
    { name: 'Square One', role: 'Authorized Channel Partner' },
    { name: 'Yash Tooling System', role: 'Precision Tooling Division' },
    { name: 'Hunny Impex', role: 'Machinery Partner' },
    { name: 'Manyuan Machinery', role: 'Panel Saw Series' },
    { name: 'Adhesi Pro™', role: 'PVAc Adhesives Manufacturing' }
  ];

  return (
    <section className="bg-canvas border-y border-[#e5e5e5] py-8">
      <div className="max-w-[1280px] mx-auto px-6">
        <p className="text-center text-xs uppercase tracking-tight text-stone font-medium mb-6">
          Industrial Partnerships &bull; Direct Factory Brands
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-75">
          {partners.map((p) => (
            <div key={p.name} className="text-center group">
              <span className="block font-bold text-base text-obsidian tracking-tight group-hover:text-brand-primary transition-colors">
                {p.name}
              </span>
              <span className="block text-[11px] text-stone tracking-tight mt-0.5">
                {p.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
