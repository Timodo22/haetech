import React from 'react';
import { SERVICES_CARWASH, SERVICES_CLEANING } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-haetech text-lg font-bold uppercase tracking-wide mb-2">Onze Expertise</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900">Wat wij voor u doen</h3>
            <div className="w-24 h-1 bg-haetech mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Carwash Column */}
          <div id="carwash" className="bg-slate-50 rounded-2xl p-8 md:p-12 shadow-lg border-t-4 border-haetech hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-haetech/10 rounded-2xl flex items-center justify-center mb-6 text-haetech">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Carwash</h4>
            <p className="text-gray-600 mb-6">
              Haetech verzorgt de complete aanleg van en het professionele onderhoud aan uw wasinstallaties. Wij zorgen dat uw bedrijf blijft draaien.
            </p>
            <ul className="space-y-4">
              {SERVICES_CARWASH.map((service, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-haetech mt-1 flex-shrink-0">
                    <CheckCircle2 size={20} />
                  </span>
                  <span className="text-gray-700 font-medium">{service.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cleaning Tech Column */}
          <div id="reiniging" className="bg-slate-50 rounded-2xl p-8 md:p-12 shadow-lg border-t-4 border-haetech-dark hover:shadow-xl transition-shadow duration-300">
             <div className="w-16 h-16 bg-haetech-dark/10 rounded-2xl flex items-center justify-center mb-6 text-haetech-dark">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Reinigingstechniek</h4>
            <p className="text-gray-600 mb-6">
              Haetech verzorgt de service van en het onderhoud aan een breed scala reinigingsapparatuur. Van stoomcleaners tot osmose-installaties.
            </p>
            <ul className="space-y-4">
              {SERVICES_CLEANING.map((service, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-haetech-dark mt-1 flex-shrink-0">
                    <CheckCircle2 size={20} />
                  </span>
                  <span className="text-gray-700 font-medium">{service.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;