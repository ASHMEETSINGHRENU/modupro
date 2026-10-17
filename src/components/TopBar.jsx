import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function TopBar() {
  return (
    <aside className="bg-brand-primary text-brand-bg text-xs py-2 border-b border-brand-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <span className="bg-brand-secondary text-brand-bg px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wider uppercase flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            Nagpur, Maharashtra
          </span>
          <span className="text-brand-secondary/50">|</span>
          <span className="hidden md:inline font-medium tracking-wide opacity-90">
            MODU PRO INNOVATION PVT. LTD. &bull; One-Roof Woodworking &amp; Machinery Solutions
          </span>
        </div>

        <div className="flex items-center gap-4 text-[12px]">
          <a 
            href="tel:+918623041894" 
            className="flex items-center gap-1.5 hover:text-brand-secondary transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-brand-secondary" />
            <span>+91 86230 41894</span>
          </a>
          <span className="text-brand-secondary/50">|</span>
          <a 
            href="mailto:moduproinnovations2805@gmail.com" 
            className="hidden sm:flex items-center gap-1.5 hover:text-brand-secondary transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-brand-secondary" />
            <span>moduproinnovations2805@gmail.com</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
