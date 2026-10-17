import React from 'react';

export default function FivePillars({ onSelectCategory }) {
  const pillars = [
    {
      num: '01',
      title: 'Adhesi Pro',
      subtitle: 'Manufacturing & Supply of PVAc & PUR Adhesives',
      category: 'adhesives'
    },
    {
      num: '02',
      title: 'Woodworking Tools',
      subtitle: 'Yash Custom Cutters, PCD Blades & CNC Bits',
      category: 'tools'
    },
    {
      num: '03',
      title: 'Panel Processing Machines',
      subtitle: 'Panel Saws, Edge Banders, CNC & Cold Press',
      category: 'machines'
    },
    {
      num: '04',
      title: 'PVC Edge Tapes & Hardware',
      subtitle: 'Square One Tapes, Hinges, Channels & Cam Fittings',
      category: 'hardware'
    },
    {
      num: '05',
      title: 'Technical Servicing',
      subtitle: 'Machinery AMC, Setup, Calibration & Genuine Spares',
      category: 'services'
    }
  ];

  return (
    <section className="py-14 bg-gradient-to-b from-brand-bg to-brand-primary/[0.03] border-b border-brand-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-secondary block mb-1">
            THE 5 PILLARS
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-primary">
            Complete Factory Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {pillars.map((item) => (
            <button
              key={item.num}
              type="button"
              onClick={() => onSelectCategory(item.category)}
              className="text-left bg-brand-bg border border-brand-primary/15 rounded-lg p-5 hover:border-brand-secondary hover:bg-brand-secondary/[0.06] transition-all duration-200 group hover:-translate-y-1 shadow-sm"
            >
              <span className="font-serif text-xl font-bold text-brand-secondary block mb-2 group-hover:text-brand-primary transition-colors">
                {item.num}
              </span>
              <h4 className="text-sm font-bold uppercase tracking-wider text-brand-primary mb-1">
                {item.title}
              </h4>
              <p className="text-xs text-brand-primary/65 leading-relaxed">
                {item.subtitle}
              </p>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
