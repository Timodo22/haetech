import React from 'react';
import { ArrowRight, Droplets } from 'lucide-react';
// Importeer de video uit je assets map
import rainVideo from '../assets/Rain.mp4';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          {/* Gebruik de geïmporteerde variabele hier */}
          <source src={rainVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Donkere overlays voor leesbaarheid */}
        <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        <div className="mb-6 animate-bounce-slow inline-block">
            <div className="bg-haetech/20 p-4 rounded-full backdrop-blur-md border border-haetech/30">
                <Droplets className="w-16 h-16 text-haetech" />
            </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl tracking-tight">
          <span className="text-haetech">Haetech</span> Carwash & Reiniging
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
          Specialist in carwash installaties, wasplaatsen en hoogwaardige reinigingstechniek. 
          <span className="block mt-2 font-semibold text-haetech">Officieel Kränzle Partner.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="group bg-haetech hover:bg-haetech-dark text-white text-lg font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(56,189,248,0.4)] flex items-center gap-2"
          >
            Neem Contact Op
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#kranzle"
            className="group bg-transparent border-2 border-white hover:bg-white/10 text-white text-lg font-bold py-4 px-10 rounded-full transition-all backdrop-blur-sm"
          >
            Bekijk Catalogus
          </a>
        </div>
      </div>

      {/* Wave Divider */}
{/* Wave Divider - Omgedraaid */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform scale-y-[-1]">
        <svg 
          className="relative block w-[calc(100%+1.3px)] h-[60px]" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              className="fill-white"
            ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;