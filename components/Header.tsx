import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

// --- PAS DEZE PADEN AAN NAAR JOUW BESTANDEN ---
// 'logo-white.png' is voor op de transparante achtergrond (bovenin de pagina)
// 'logo-color.png' is voor op de witte achtergrond (als je scrollt)
// Als je geen afbeeldingen hebt, zet deze regels dan in commentaar of pas ze aan.
import logoWhite from '../assets/haetechlogo.png'; 
import logoColor from '../assets/haetechlogo.png'; 

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`Element with id ${id} not found`);
      if(id === '#home') window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Kränzle', href: '#kranzle' },
    { name: 'Carwash', href: '#carwash' },
    { name: 'Reinigingstechniek', href: '#reiniging' },

    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* --- LOGO AREA (AANGEPAST) --- */}
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="cursor-pointer block"
            >
              {/* Wisselt tussen wit logo en kleurenlogo op basis van scroll */}
              <img 
                src={isScrolled ? logoColor : logoWhite} 
                alt="HAETECH Logo" 
                // h-10 is ongeveer 40px hoog. Pas aan naar h-8 of h-12 indien nodig.
                className="h-10 w-auto object-contain transition-all duration-300"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium hover:text-haetech transition-colors cursor-pointer ${
                  isScrolled ? 'text-gray-700' : 'text-white drop-shadow-md'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href={`tel:${COMPANY_INFO.cleanPhone}`}
              className="bg-haetech hover:bg-haetech-dark text-white px-4 py-2 rounded-full font-bold transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 duration-200"
            >
              <Phone size={16} />
              {COMPANY_INFO.phone}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-gray-700' : 'text-white'}`}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full border-t border-gray-100 animate-in slide-in-from-top-5 duration-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-haetech hover:bg-gray-50 border-b border-gray-100 last:border-0"
              >
                {link.name}
              </a>
            ))}
             <a
              href={`tel:${COMPANY_INFO.cleanPhone}`}
              className="block w-full text-center mt-4 bg-haetech text-white px-4 py-3 rounded-lg font-bold shadow-md"
            >
              Bel Direct
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;