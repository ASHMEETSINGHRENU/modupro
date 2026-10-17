import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer({ onSelectCategory }) {
  return (
    <footer className="bg-brand-primary text-brand-bg pt-20 pb-10 border-t-2 border-brand-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-brand-secondary/30">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-5">
            <img 
              src="/assets/logo/modu pro logo@4x-8.png" 
              alt="Modu Pro Innovation" 
              className="h-12 w-auto object-contain brightness-0 invert" 
            />
            <p className="text-xs sm:text-sm text-brand-bg/80 leading-relaxed max-w-sm">
              Modu Pro Innovation Pvt. Ltd. &bull; Faithfully Delivering Excellence. Providing modular furniture, kitchen, and door manufacturers across India with an integrated one-roof supply chain for adhesives, tools, machinery, and hardware.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href="https://instagram.com/yash_toolingsystem"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-brand-bg/10 border border-brand-secondary/40 text-brand-bg hover:bg-brand-secondary hover:text-brand-bg transition-colors"
              >
                <span>@yash_toolingsystem</span>
                <ArrowUpRight className="w-3 h-3 text-brand-secondary" />
              </a>
              <a
                href="https://instagram.com/adhhesi_pro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-brand-bg/10 border border-brand-secondary/40 text-brand-bg hover:bg-brand-secondary hover:text-brand-bg transition-colors"
              >
                <span>@adhhesi_pro</span>
                <ArrowUpRight className="w-3 h-3 text-brand-secondary" />
              </a>
            </div>
          </div>

          {/* Col 2: Product Divisions */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-brand-secondary">
              Product Divisions
            </h4>
            <ul className="space-y-2.5 text-xs text-brand-bg/80">
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCategory('adhesives')}
                  className="hover:text-brand-secondary transition-colors text-left"
                >
                  Adhesi Pro™ (PVAc &amp; PUR)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCategory('tools')}
                  className="hover:text-brand-secondary transition-colors text-left"
                >
                  Yash Woodworking Tools &amp; PCD
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCategory('machines')}
                  className="hover:text-brand-secondary transition-colors text-left"
                >
                  Panel Processing Machinery
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCategory('hardware')}
                  className="hover:text-brand-secondary transition-colors text-left"
                >
                  Square One PVC Edge Tapes
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCategory('services')}
                  className="hover:text-brand-secondary transition-colors text-left"
                >
                  Technical Servicing &amp; Spares
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Address */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-brand-secondary">
              Nagpur Headquarters
            </h4>
            <p className="text-xs text-brand-bg/80 leading-relaxed">
              PLOT NO. 27, HANUMAN DAAL MILL ROAD,<br />
              Satnami Nagar, Bhaurav Nagar,<br />
              Opposite Royal Touch,<br />
              Nagpur – 440008, Maharashtra, India.
            </p>
            <div className="space-y-1 text-xs text-brand-bg/85 pt-2">
              <p>
                <strong>Sales &amp; RFQ:</strong>{' '}
                <a href="tel:+918623041894" className="text-brand-secondary hover:underline font-semibold">
                  +91 86230 41894
                </a>
              </p>
              <p>
                <strong>Technical Support:</strong>{' '}
                <a href="tel:+918625832095" className="text-brand-secondary hover:underline font-semibold">
                  +91 86258 32095
                </a>
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:moduproinnovations2805@gmail.com" className="text-brand-secondary hover:underline">
                  moduproinnovations2805@gmail.com
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Footer Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-bg/60">
          <p>
            &copy; {new Date().getFullYear()} Modu Pro Innovation Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-[11px] tracking-wider text-brand-secondary font-medium">
            Strict Palette: Primary (#8C460C) &bull; Secondary (#D17E3A) &bull; Background (#F8F5EF)
          </p>
        </div>

      </div>
    </footer>
  );
}
