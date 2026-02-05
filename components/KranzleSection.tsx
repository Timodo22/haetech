import React, { useState } from 'react';
import { ArrowRight, Star, Search, Plus } from 'lucide-react';
import { CATALOG_PRODUCTS } from '../constants';
import ProductModal from './ProductModal';

const KranzleSection: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  return (
    <section id="kranzle" className="py-20 bg-footer text-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-haetech rounded-full blur-[120px] opacity-20 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-haetech-dark rounded-full blur-[100px] opacity-20 -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 text-haetech mb-4">
                <Star className="fill-current" size={20} />
                <span className="font-bold tracking-widest uppercase">Officieel Partner</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Kränzle <span className="text-haetech">Catalogus</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
                Haetech is officieel partner van Kränzle. Bekijk hieronder ons assortiment. Klik op een product voor alle specificaties en details.
            </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {CATALOG_PRODUCTS.map((product) => (
                <div 
                    key={product.id} 
                    onClick={() => setSelectedProduct(product)}
                    className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-haetech/50 transition-all duration-300 cursor-pointer flex flex-col h-full hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(91,192,222,0.15)]"
                >
                    <div className="h-56 overflow-hidden relative bg-white">
                         {/* Badge */}
                        <div className="absolute top-4 left-4 z-10 bg-haetech text-footer text-xs font-bold px-3 py-1 rounded-full uppercase">
                            {product.category}
                        </div>
                        
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        
                        {/* Overlay with magnifying glass */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white border border-white/30">
                                <Search size={24} />
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-haetech transition-colors">{product.name}</h4>
                        <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3">{product.shortDesc}</p>
                        
                        <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between text-haetech font-bold text-sm">
                            <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                                Bekijk Details <ArrowRight size={16} />
                            </span>
                            <div className="bg-haetech/20 p-1.5 rounded-lg">
                                <Plus size={16} />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
        {/* Full Catalog PDF CTA */}
        <div className="bg-gradient-to-r from-haetech to-haetech-dark rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-2xl gap-8">
            <div className="text-left md:w-2/3">
                <h3 className="text-2xl md:text-3xl font-bold text-footer mb-2">
                    Zoekt u iets specifieks?
                </h3>
                <p className="text-footer/80 text-lg">
                    Wij leveren het complete Kränzle assortiment. Staat uw machine er niet tussen? Download de volledige catalogus of neem contact op.
                </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                 <a href="#contact" className="bg-footer text-white hover:bg-gray-800 py-3 px-8 rounded-full font-bold transition-all duration-300 shadow-lg text-center whitespace-nowrap">
                    Neem contact op
                </a>
                <button className="bg-white/20 hover:bg-white/30 border border-white/40 text-footer hover:text-white py-3 px-8 rounded-full font-bold transition-all duration-300 text-center whitespace-nowrap backdrop-blur-sm">
                    Download PDF
                </button>
            </div>
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        product={selectedProduct} 
      />
      
    </section>
  );
};

export default KranzleSection;