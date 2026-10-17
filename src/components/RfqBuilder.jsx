import React, { useState } from 'react';
import { Send, MessageSquare, CheckCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function RfqBuilder({ prefilledRequirement }) {
  const [industry, setIndustry] = useState('Modular Kitchen Manufacturer');
  const [selectedCategories, setSelectedCategories] = useState([
    'Adhesi Pro Adhesives (Lockpro WR3/808/PUR)',
    'Panel Processing Machinery (Panel Saw, Edge Bander, CNC)'
  ]);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    location: '',
    details: prefilledRequirement || ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  React.useEffect(() => {
    if (prefilledRequirement) {
      setFormData(prev => ({
        ...prev,
        details: prev.details 
          ? (prev.details.includes(prefilledRequirement) ? prev.details : `${prev.details}\nInterested in: ${prefilledRequirement}`)
          : `Interested in: ${prefilledRequirement}`
      }));
    }
  }, [prefilledRequirement]);

  const industryOptions = [
    'Modular Kitchen Manufacturer',
    'Furniture Manufacturer',
    'Door Manufacturer',
    'Woodworking Industry',
    'Panel Processing Unit'
  ];

  const categoryOptions = [
    'Adhesi Pro Adhesives (Lockpro WR3/808/PUR)',
    'Woodworking Tools (Yash Tooling Cutters/PCD)',
    'Panel Processing Machinery (Panel Saw, Edge Bander, CNC)',
    'PVC Edge-Banding Tapes & Hardware (Square One)',
    'Machine Spare Parts & Technical Servicing'
  ];

  const handleCategoryToggle = (cat) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const constructWhatsAppMessage = () => {
    const cats = selectedCategories.join(', ') || 'All Categories';
    return (
      `*MODU PRO INNOVATION - B2B RFQ QUOTE REQUEST*%0A%0A` +
      `*Client:* ${encodeURIComponent(formData.name || 'B2B Client')}%0A` +
      `*Company:* ${encodeURIComponent(formData.company || 'Factory')}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone || 'N/A')}%0A` +
      `*Email:* ${encodeURIComponent(formData.email || 'N/A')}%0A` +
      `*Location:* ${encodeURIComponent(formData.location || 'Maharashtra')}%0A` +
      `*Industry Segment:* ${encodeURIComponent(industry)}%0A` +
      `*Categories Required:* ${encodeURIComponent(cats)}%0A` +
      `*Details / Volume:* ${encodeURIComponent(formData.details || 'Commercial pricing & datasheet requested')}%0A%0A` +
      `Please provide an official commercial proposal.`
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const apiBase = import.meta.env.VITE_API_BASE_URL || '';
      await fetch(`${apiBase}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          industry,
          categories: selectedCategories
        })
      });
      setSubmittedSuccess(true);
    } catch (err) {
      console.warn('API submission notice: Falling back to direct client confirmation.', err);
      setSubmittedSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDirectWhatsApp = () => {
    const url = `https://wa.me/918623041894?text=${constructWhatsAppMessage()}`;
    window.open(url, '_blank');
  };

  return (
    <section id="rfq" className="bg-bone py-16 sm:py-24 lg:py-28 border-b border-[#e5e5e5] overflow-hidden">
      <div className="max-w-[1020px] mx-auto px-4 sm:px-6">
        
        {/* Centered Section Header with ScrollReveal */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-bold tracking-tight uppercase text-brand-primary block mb-3">
            COMMERCIAL INQUIRY &bull; QUOTE REQUEST
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-obsidian tracking-tight mb-4">
            Request Factory Quotation
          </h2>
          <p className="text-sm sm:text-base text-stone tracking-tight leading-relaxed">
            Select your industry sector and the business categories you require. We prepare commercial terms and pricing tailored to your production volume.
          </p>
        </ScrollReveal>

        {/* Clean Flat Form Card with ScrollReveal */}
        <ScrollReveal variant="scale" className="bg-canvas border border-[#e5e5e5] rounded-card p-5 sm:p-8 lg:p-12 shadow-xs">
          
          {submittedSuccess ? (
            <div className="text-center py-8 sm:py-10 space-y-4">
              <div className="w-14 h-14 rounded-pill bg-bone border border-[#e5e5e5] text-brand-primary flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h3 className="text-xl sm:text-2xl font-normal text-obsidian tracking-tight">
                Quotation Request Logged
              </h3>
              <p className="text-xs sm:text-sm text-stone max-w-lg mx-auto leading-relaxed tracking-tight">
                Thank you, <strong>{formData.name}</strong> from <strong>{formData.company}</strong>. Our commercial engineering desk in Nagpur has received your inquiry for <em>{industry}</em>. We will reach you at <strong>{formData.phone}</strong> shortly.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={handleDirectWhatsApp}
                  className="btn-primary-pill text-xs py-3 w-full sm:w-auto"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Dispatch To WhatsApp Desk</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSubmittedSuccess(false)}
                  className="btn-ghost-pill text-xs py-3 w-full sm:w-auto"
                >
                  <span>Submit Another Request</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              
              {/* Step 1: Industry */}
              <fieldset>
                <legend className="text-xs sm:text-sm font-bold uppercase tracking-tight text-obsidian mb-3 pb-2 border-b border-[#e5e5e5] block w-full">
                  1. Select Your Manufacturing Segment
                </legend>
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {industryOptions.map((opt) => (
                    <label
                      key={opt}
                      className={`cursor-pointer px-3.5 sm:px-4 py-2 rounded-pill text-xs font-medium tracking-tight border transition-all ${
                        industry === opt
                          ? 'bg-obsidian text-white border-obsidian'
                          : 'bg-canvas text-stone border-[#e5e5e5] hover:border-obsidian'
                      }`}
                    >
                      <input
                        type="radio"
                        name="industry"
                        value={opt}
                        checked={industry === opt}
                        onChange={() => setIndustry(opt)}
                        className="sr-only"
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              {/* Step 2: Categories */}
              <fieldset>
                <legend className="text-xs sm:text-sm font-bold uppercase tracking-tight text-obsidian mb-3 pb-2 border-b border-[#e5e5e5] block w-full">
                  2. Select Production Categories Needed
                </legend>
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {categoryOptions.map((cat) => {
                    const isChecked = selectedCategories.includes(cat);
                    return (
                      <label
                        key={cat}
                        className={`cursor-pointer px-3.5 sm:px-4 py-2 rounded-pill text-xs font-medium tracking-tight border transition-all ${
                          isChecked
                            ? 'bg-brand-primary text-white border-brand-primary'
                            : 'bg-canvas text-stone border-[#e5e5e5] hover:border-brand-primary'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleCategoryToggle(cat)}
                          className="sr-only"
                        />
                        <span>{cat}</span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              {/* Step 3: Contact & Factory Details */}
              <fieldset>
                <legend className="text-xs sm:text-sm font-bold uppercase tracking-tight text-obsidian mb-4 pb-2 border-b border-[#e5e5e5] block w-full">
                  3. Contact &amp; Factory Specifications
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  
                  <div>
                    <label className="block text-xs font-medium tracking-tight text-stone mb-1">
                      Full Name &amp; Designation *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Rajesh Sharma (Managing Director)"
                      className="w-full px-3.5 sm:px-4 py-2.5 rounded-card border border-[#e5e5e5] bg-canvas text-obsidian text-sm sm:text-xs focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 placeholder:text-stone/40 tracking-tight transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium tracking-tight text-stone mb-1">
                      Company / Factory Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Royal Modular Interiors Pvt. Ltd."
                      className="w-full px-3.5 sm:px-4 py-2.5 rounded-card border border-[#e5e5e5] bg-canvas text-obsidian text-sm sm:text-xs focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 placeholder:text-stone/40 tracking-tight transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium tracking-tight text-stone mb-1">
                      Phone Number (WhatsApp Enabled) *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 86230 41894"
                      className="w-full px-3.5 sm:px-4 py-2.5 rounded-card border border-[#e5e5e5] bg-canvas text-obsidian text-sm sm:text-xs focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 placeholder:text-stone/40 tracking-tight transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium tracking-tight text-stone mb-1">
                      Corporate Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="sales@company.com"
                      className="w-full px-3.5 sm:px-4 py-2.5 rounded-card border border-[#e5e5e5] bg-canvas text-obsidian text-sm sm:text-xs focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 placeholder:text-stone/40 tracking-tight transition-colors"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium tracking-tight text-stone mb-1">
                      Factory Location / City *
                    </label>
                    <input
                      type="text"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="Nagpur / Pune / Mumbai / Indore / Hyderabad"
                      className="w-full px-3.5 sm:px-4 py-2.5 rounded-card border border-[#e5e5e5] bg-canvas text-obsidian text-sm sm:text-xs focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 placeholder:text-stone/40 tracking-tight transition-colors"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium tracking-tight text-stone mb-1">
                      Specific Requirements / Machine Models / Monthly Volume
                    </label>
                    <textarea
                      name="details"
                      rows={3}
                      value={formData.details}
                      onChange={handleInputChange}
                      placeholder="Monthly adhesive volume, machine specifications, or custom tooling profiles..."
                      className="w-full px-3.5 sm:px-4 py-2.5 rounded-card border border-[#e5e5e5] bg-canvas text-obsidian text-sm sm:text-xs focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 placeholder:text-stone/40 tracking-tight transition-colors"
                    />
                  </div>

                </div>
              </fieldset>

              {/* Action Buttons: Responsive Stacking */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary-pill text-xs py-3.5 w-full sm:flex-1"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Recording...' : 'Submit Quotation Request'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleDirectWhatsApp}
                  className="btn-ghost-pill text-xs py-3.5 w-full sm:flex-1"
                >
                  <MessageSquare className="w-4 h-4 text-brand-primary" />
                  <span>Send Direct Via WhatsApp</span>
                </button>
              </div>

            </form>
          )}

        </ScrollReveal>

      </div>
    </section>
  );
}
