import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function FaqSection() {
  const faqs = [
    {
      q: 'What types of adhesives does Adhesi Pro manufacture?',
      a: 'Adhesi Pro manufactures high-solid PVAc white glues, Certified D3 water-resistant formulas (Lockpro WR 3), Commercial D3, D2 grade glues, PVC/Acrylic adhesives, and 1K PUR polyurethane glues designed specifically for humid factory conditions in modular furniture and flush door manufacturing.'
    },
    {
      q: 'Can Yash Tooling fabricate custom router bits and cutters?',
      a: 'Yes. Yash Tooling engineers both standard catalogue items and fully customized tooling, including diamond-tipped (PCD) pre-milling cutters, TCT grooving blades, solid carbide CNC compression spiral bits, multi-boring bits, and spindle shaper profile cutter heads.'
    },
    {
      q: 'Which panel processing machinery brands and types do you provide?',
      a: 'We supply Manyuan MJ-320 precision sliding table panel saws, high-speed automated edge banding machines, dual-spindle CNC router machines, Hunny Impex Hi-202 two-head multi-boring machines, and Hunny Impex Hi-50T hydraulic cold press machines with complete on-site installation.'
    },
    {
      q: 'How does your Technical Servicing & Spare Parts division operate?',
      a: 'We maintain an active warehouse of original machine components (inverters, spindle motors, linear guides, pneumatic cylinders, Teflon glue pots, scraping blades, and buffing wheels) in Nagpur with certified service technicians for preventative maintenance, emergency breakdown repairs, and Yash tooling diamond retipping.'
    },
    {
      q: 'Are you an authorized channel partner of Square One?',
      a: 'Yes, Modu Pro Innovation Pvt. Ltd. is an identified channel partner of Square One for PVC edge-banding tapes, soft-close 2D & 3D concealed hinges, telescopic ball-bearing drawer slides, cam fittings, nylon bushes, and furniture fittings.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-bone border-b border-[#e5e5e5] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading with ScrollReveal */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-bold tracking-tight uppercase text-brand-primary block mb-3">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-2xl sm:text-4xl font-normal text-obsidian tracking-tight mb-4">
            Industrial Client Queries
          </h2>
          <p className="text-sm sm:text-base text-stone tracking-tight leading-relaxed">
            Essential answers on direct procurement, technical guarantees, and machine installations.
          </p>
        </ScrollReveal>

        {/* Exclusive Accordion Set with ScrollReveal */}
        <ScrollReveal variant="scale" className="space-y-3.5">
          {faqs.map((faq, idx) => (
            <details
              key={faq.q}
              name="modu-faq"
              open={idx === 0}
              className="bg-canvas border border-[#e5e5e5] rounded-card open:border-brand-primary/60 transition-all duration-300 group"
            >
              <summary className="p-4 sm:p-5 text-sm sm:text-base font-medium text-obsidian cursor-pointer list-none flex items-center justify-between select-none hover:text-brand-primary transition-colors tracking-tight">
                <span className="pr-4">{faq.q}</span>
                <span className="text-brand-primary text-xl font-light transition-transform duration-300 group-open:rotate-45 ml-auto shrink-0 w-6 h-6 rounded-pill bg-bone flex items-center justify-center">
                  +
                </span>
              </summary>
              <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-stone leading-relaxed border-t border-[#e5e5e5] pt-3 tracking-tight">
                <p>{faq.a}</p>
              </div>
            </details>
          ))}
        </ScrollReveal>

      </div>
    </section>
  );
}
