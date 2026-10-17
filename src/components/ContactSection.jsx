import React from 'react';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const InstagramIcon = ({ className = "w-4 h-4 text-brand-primary" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-28 bg-canvas border-b border-[#e5e5e5] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        
        {/* Section Heading with ScrollReveal */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-tight uppercase text-brand-primary block mb-3">
            HEADQUARTERS &bull; DISPLAY CENTER
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-obsidian tracking-tight mb-4">
            Visit Us In Nagpur, Maharashtra
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-stone tracking-tight leading-relaxed max-w-xl mx-auto">
            Experience our machine showroom, evaluate Yash tooling profiles, and discuss bulk adhesive distribution agreements with our executive directors.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Left Column: Contact Cards */}
          <ScrollReveal 
            variant="scale" 
            className="lg:col-span-7 bg-bone border border-[#e5e5e5] rounded-card p-6 sm:p-10 flex flex-col justify-between card-hover-effect"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-tight text-brand-secondary block mb-1">
                Corporate Headquarters
              </span>
              <h3 className="text-xl sm:text-2xl font-normal text-obsidian tracking-tight mb-6">
                Modu Pro Innovation Pvt. Ltd.
              </h3>

              <div className="space-y-6">
                
                {/* Address */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-pill bg-canvas border border-[#e5e5e5] text-obsidian flex items-center justify-center shrink-0 shadow-xs">
                    <MapPin className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <strong className="block text-xs font-bold uppercase tracking-tight text-obsidian mb-1">
                      Registered Factory &amp; Office
                    </strong>
                    <p className="text-xs sm:text-sm text-stone leading-relaxed tracking-tight">
                      PLOT NO. 27, HANUMAN DAAL MILL ROAD,<br />
                      Satnami Nagar, Bhaurav Nagar,<br />
                      Opposite Royal Touch,<br />
                      Nagpur – 440008, Maharashtra, India.
                    </p>
                  </div>
                </div>

                {/* Phones */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-pill bg-canvas border border-[#e5e5e5] text-obsidian flex items-center justify-center shrink-0 shadow-xs">
                    <Phone className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <strong className="block text-xs font-bold uppercase tracking-tight text-obsidian mb-1">
                      Direct Telephone Lines
                    </strong>
                    <div className="text-xs sm:text-sm space-y-1 tracking-tight">
                      <p>
                        <a href="tel:+918623041894" className="text-obsidian hover:text-brand-primary font-medium transition-colors">
                          +91 86230 41894
                        </a>{' '}
                        <span className="text-stone">(Sales, Machinery &amp; Adhesives)</span>
                      </p>
                      <p>
                        <a href="tel:+918625832095" className="text-obsidian hover:text-brand-primary font-medium transition-colors">
                          +91 86258 32095
                        </a>{' '}
                        <span className="text-stone">(Technical &amp; Yash Tooling)</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-pill bg-canvas border border-[#e5e5e5] text-obsidian flex items-center justify-center shrink-0 shadow-xs">
                    <Mail className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <strong className="block text-xs font-bold uppercase tracking-tight text-obsidian mb-1">
                      Official Electronic Mail
                    </strong>
                    <p className="text-xs sm:text-sm tracking-tight">
                      <a 
                        href="mailto:moduproinnovations2805@gmail.com" 
                        className="text-brand-primary hover:underline font-medium"
                      >
                        moduproinnovations2805@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-pill bg-canvas border border-[#e5e5e5] text-obsidian flex items-center justify-center shrink-0 shadow-xs">
                    <InstagramIcon className="w-4 h-4 text-brand-primary" />
                  </div>
                  <div>
                    <strong className="block text-xs font-bold uppercase tracking-tight text-obsidian mb-1">
                      Verified Social Channels
                    </strong>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <a
                        href="https://instagram.com/yash_toolingsystem"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill text-xs font-medium bg-canvas border border-[#e5e5e5] text-obsidian hover:border-brand-primary hover:text-brand-primary transition-colors"
                      >
                        <span>@yash_toolingsystem</span>
                        <ExternalLink className="w-3 h-3 text-stone" />
                      </a>
                      <a
                        href="https://instagram.com/adhhesi_pro"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill text-xs font-medium bg-canvas border border-[#e5e5e5] text-obsidian hover:border-brand-primary hover:text-brand-primary transition-colors"
                      >
                        <span>@adhhesi_pro</span>
                        <ExternalLink className="w-3 h-3 text-stone" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#e5e5e5] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-stone tracking-tight">
              <span>Business Hours: Mon – Sat (9:30 AM – 7:30 PM IST)</span>
              <span className="font-semibold text-brand-primary">Central India Logistics Hub</span>
            </div>
          </ScrollReveal>

          {/* Right Column: Real Interactive Google Map Card */}
          <ScrollReveal 
            variant="scale" 
            delay={200}
            className="lg:col-span-5 bg-bone border border-[#e5e5e5] rounded-card overflow-hidden flex flex-col justify-between card-hover-effect"
          >
            {/* Header */}
            <div className="p-5 sm:p-6 bg-canvas border-b border-[#e5e5e5] flex items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-medium text-obsidian tracking-tight mb-1">
                  Nagpur Logistics &amp; Factory Location
                </h4>
                <p className="text-xs text-stone tracking-tight leading-relaxed">
                  PLOT NO.27, HANUMAN DAAL MILL ROAD, Satnami Nagar, bhaurav nagar, Nagpur, Maharashtra 440008
                </p>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-bone border border-[#e5e5e5] text-[11px] font-bold uppercase tracking-tight text-brand-primary shrink-0">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>Live Map</span>
              </span>
            </div>

            {/* Real Interactive Google Map Embed */}
            <div className="relative w-full h-[320px] sm:h-[380px] bg-canvas overflow-hidden">
              <iframe
                title="Modu Pro Innovation Pvt. Ltd. Nagpur Location"
                src="https://maps.google.com/maps?q=PLOT+NO.27,+HANUMAN+DAAL+MILL+ROAD,+Satnami+Nagar,+bhaurav+nagar,+Nagpur,+Maharashtra+440008&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-[0.95]"
              />
            </div>

            {/* Bottom Actions Bar */}
            <div className="p-4 sm:p-5 bg-canvas border-t border-[#e5e5e5] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="text-left">
                <span className="text-[11px] font-bold uppercase tracking-tight text-brand-primary block">
                  Central India Logistics Hub
                </span>
                <span className="text-xs text-stone tracking-tight">
                  Daily express shipping to modular factories nationwide
                </span>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=PLOT+NO.27,+HANUMAN+DAAL+MILL+ROAD,+Satnami+Nagar,+bhaurav+nagar,+Nagpur,+Maharashtra+440008"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-pill text-xs py-2.5 px-4 w-full sm:w-auto shrink-0 shadow-xs inline-flex items-center justify-center gap-1.5"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
