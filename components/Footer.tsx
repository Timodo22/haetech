import React from 'react';
import { COMPANY_INFO } from '../constants';

// Zorg dat het pad klopt met waar je bestand staat
import logoWhite from '../assets/haetechlogo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-footer text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* --- KOLOM 1: LOGO & OMSCHRIJVING --- */}
          <div>
            {/* Tekst vervangen door logo afbeelding.
                We gebruiken CSS filters om het wit te maken:
                - brightness-0: Maakt de afbeelding helemaal zwart.
                - invert: Draait de kleuren om (zwart wordt wit).
            */}
            <img 
              src={logoWhite} 
              alt="HAETECH" 
              className="h-12 w-auto mb-4 brightness-0 invert" 
            />
            <p className="text-sm leading-relaxed max-w-xs">
              Uw partner voor professionele carwash installaties en industriële reinigingstechniek.
            </p>
          </div>

          {/* --- KOLOM 2: LINKS --- */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Snelle Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-haetech transition-colors">Home</a></li>
              <li><a href="#carwash" className="hover:text-haetech transition-colors">Carwash</a></li>
              <li><a href="#reiniging" className="hover:text-haetech transition-colors">Reinigingstechniek</a></li>
              <li><a href="#kranzle" className="hover:text-haetech transition-colors">Kränzle</a></li>
            </ul>
          </div>

          {/* --- KOLOM 3: CONTACT --- */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Locatie</h4>
            <p>{COMPANY_INFO.address}</p>
            <p>{COMPANY_INFO.zipCity}</p>
            <p className="mt-2 text-haetech font-bold">{COMPANY_INFO.phone}</p>
            <p>{COMPANY_INFO.email}</p>
          </div>
        </div>
        
        {/* --- COPYRIGHT BALK --- */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {COMPANY_INFO.copyrightYear} {COMPANY_INFO.name}. Alle rechten voorbehouden.</p>
          <p className="mt-2 md:mt-0 opacity-60 hover:opacity-100 transition-opacity">
            Powered by spectux.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;