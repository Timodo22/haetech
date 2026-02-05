import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import KranzleSection from './components/KranzleSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <KranzleSection />
        <Contact />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default App;