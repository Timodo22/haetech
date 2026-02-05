import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-haetech text-lg font-bold uppercase tracking-wide mb-2">Contact</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900">Kom in contact</h3>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Heeft u vragen over carwash installaties, zoekt u een specifiek Kränzle onderdeel of wilt u een afspraak maken voor onderhoud?
            </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 h-full border-l-8 border-haetech">
                <h4 className="text-2xl font-bold text-gray-900 mb-8">Contactgegevens</h4>
                
                <div className="space-y-8">
                    <div className="flex items-start gap-4 group">
                        <div className="bg-haetech/10 p-3 rounded-full text-haetech group-hover:bg-haetech group-hover:text-white transition-colors">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <p className="font-bold text-gray-900">Adres</p>
                            <p className="text-gray-600">{COMPANY_INFO.address}</p>
                            <p className="text-gray-600">{COMPANY_INFO.zipCity}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                        <div className="bg-haetech/10 p-3 rounded-full text-haetech group-hover:bg-haetech group-hover:text-white transition-colors">
                            <Phone size={24} />
                        </div>
                        <div>
                            <p className="font-bold text-gray-900">Telefoon</p>
                            <a href={`tel:${COMPANY_INFO.cleanPhone}`} className="text-gray-600 hover:text-haetech transition-colors">
                                {COMPANY_INFO.phone}
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                        <div className="bg-haetech/10 p-3 rounded-full text-haetech group-hover:bg-haetech group-hover:text-white transition-colors">
                            <Mail size={24} />
                        </div>
                        <div>
                            <p className="font-bold text-gray-900">E-mail</p>
                            <a href={`mailto:${COMPANY_INFO.email}`} className="text-gray-600 hover:text-haetech transition-colors">
                                {COMPANY_INFO.email}
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                        <div className="bg-haetech/10 p-3 rounded-full text-haetech group-hover:bg-haetech group-hover:text-white transition-colors">
                            <Clock size={24} />
                        </div>
                        <div>
                            <p className="font-bold text-gray-900">Openingstijden</p>
                            <p className="text-gray-600">Maandag - Vrijdag: 08:00 - 17:00</p>
                            <p className="text-gray-600">Zaterdag & Zondag: Gesloten</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Placeholder / Form Area */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full flex flex-col">
                <div className="p-8 md:p-12 flex-1">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Stuur een bericht</h4>
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="Naam" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-haetech focus:ring-2 focus:ring-haetech/20 outline-none transition-all" />
                            <input type="text" placeholder="Telefoon" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-haetech focus:ring-2 focus:ring-haetech/20 outline-none transition-all" />
                        </div>
                        <input type="email" placeholder="E-mailadres" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-haetech focus:ring-2 focus:ring-haetech/20 outline-none transition-all" />
                        <textarea rows={4} placeholder="Uw bericht" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-haetech focus:ring-2 focus:ring-haetech/20 outline-none transition-all"></textarea>
                        <button type="button" className="w-full bg-footer hover:bg-haetech text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                            Verstuur Bericht
                        </button>
                    </form>
                </div>
                {/* Visual Bottom of card - abstract water graphic */}
                <div className="h-24 bg-gradient-to-r from-footer to-haetech relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                         <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                         </svg>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;