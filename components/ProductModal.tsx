import React from 'react';
import { X, Check, Phone, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: any; // Using any for simplicity with the constants structure
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, product }) => {
  if (!isOpen || !product) return null;

  // Close on backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row relative animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-gray-900"
        >
          <X size={24} />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-2/5 bg-gray-100 relative min-h-[300px] md:min-h-full">
            <img 
              src={product.image} 
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-haetech text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                {product.category}
            </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h2>
            <p className="text-haetech-dark font-medium text-lg mb-6">{product.shortDesc}</p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
                {product.description}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Check size={18} className="text-haetech" /> Kenmerken
                    </h3>
                    <ul className="space-y-2">
                        {product.features && product.features.map((feature: string, idx: number) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-haetech rounded-full mt-1.5 flex-shrink-0"></span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <FileText size={18} className="text-haetech" /> Specificaties
                    </h3>
                    <div className="space-y-2">
                        {product.specs && Object.entries(product.specs).map(([key, value]) => (
                            <div key={key} className="flex justify-between text-sm border-b border-gray-100 pb-1 last:border-0">
                                <span className="text-gray-500">{key}:</span>
                                <span className="font-medium text-gray-900">{(value as string)}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-auto pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
                <a 
                    href={`https://wa.me/${COMPANY_INFO.cleanPhone}?text=Ik%20heb%20interesse%20in%20de%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-6 rounded-lg text-center transition-colors flex items-center justify-center gap-2"
                >
                    <Phone size={18} />
                    App over dit product
                </a>
                 <a 
                    href="#contact"
                    onClick={(e) => {
                        e.preventDefault();
                        onClose();
                        const el = document.getElementById('contact');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex-1 bg-footer hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors"
                >
                    Offerte aanvragen
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;