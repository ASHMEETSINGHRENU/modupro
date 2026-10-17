import React, { useEffect, useRef } from 'react';
import { X, MessageSquare, ArrowRight } from 'lucide-react';

export default function ProductModal({ product, onClose, onSelectForRfq }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (product) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [product]);

  if (!product) return null;

  const handleBackdropClick = (e) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  const handleWhatsApp = () => {
    const text = `Hello Modu Pro Innovation Team,%0A%0AI would like to inquire about the technical specifications and bulk pricing for:%0A*Product:* ${encodeURIComponent(product.name)}%0A*Brand Division:* ${encodeURIComponent(product.brand)}%0A*Category:* ${encodeURIComponent(product.categoryLabel)}%0A%0APlease share availability and delivery timeframe for Nagpur / Maharashtra.%0A%0AThank you!`;
    window.open(`https://wa.me/918623041894?text=${text}`, '_blank');
  };

  return (
    <dialog
      ref={dialogRef}
      onCancel={onClose}
      onClick={handleBackdropClick}
      className="p-4 sm:p-6 bg-transparent max-w-3xl w-full m-auto outline-none backdrop:bg-obsidian/40 backdrop:backdrop-blur-sm"
    >
      <div className="bg-canvas border border-[#e5e5e5] rounded-card overflow-hidden relative max-h-[90vh] flex flex-col">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-pill bg-bone hover:bg-obsidian hover:text-white text-obsidian flex items-center justify-center transition-colors border border-[#e5e5e5]"
          aria-label="Close details"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-6">
          
          {/* Header Row: Image & Key Meta */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center border-b border-[#e5e5e5] pb-6">
            <div className="sm:col-span-5 h-52 bg-bone rounded-card border border-[#e5e5e5] p-6 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-40 w-auto max-w-full object-contain"
              />
            </div>

            <div className="sm:col-span-7">
              <span className="text-xs font-bold uppercase tracking-tight text-brand-primary block mb-1">
                {product.brand} &bull; {product.categoryLabel}
              </span>
              <h2 className="text-2xl sm:text-3xl font-normal text-obsidian tracking-tight mb-3">
                {product.name}
              </h2>
              <p className="text-sm text-stone tracking-tight leading-relaxed">
                {product.summary}
              </p>
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-tight text-obsidian mb-3">
              Technical Specifications
            </h4>
            <div className="border border-[#e5e5e5] rounded-card overflow-hidden">
              <table className="w-full text-left text-xs border-collapse">
                <tbody>
                  {Object.entries(product.specifications).map(([key, val], idx) => (
                    <tr
                      key={key}
                      className={idx % 2 === 0 ? 'bg-bone/50' : 'bg-canvas'}
                    >
                      <th className="py-2.5 px-4 font-normal text-stone border-b border-[#e5e5e5] w-2/5">
                        {key}
                      </th>
                      <td className="py-2.5 px-4 font-medium text-obsidian border-b border-[#e5e5e5]">
                        {val}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Industrial Applications Box */}
          <div className="p-4 rounded-card bg-bone border border-[#e5e5e5]">
            <h5 className="text-xs font-bold uppercase tracking-tight text-brand-secondary mb-1">
              Industrial Applications
            </h5>
            <p className="text-xs text-stone tracking-tight leading-relaxed">
              {product.applications}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#e5e5e5]">
            <button
              type="button"
              onClick={handleWhatsApp}
              className="btn-primary-pill flex-1"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire on WhatsApp (+91 86230 41894)</span>
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onSelectForRfq(product);
              }}
              className="btn-ghost-pill"
            >
              <span>Add to Quote Form</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </dialog>
  );
}
