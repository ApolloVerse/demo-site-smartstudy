
import React, { useState, useEffect } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenLeadModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenLeadModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setMobileMenuOpen(false);
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-xl py-4' : 'bg-white/90 backdrop-blur-md py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Rocket className="w-8 h-8 text-blue-600 transition-transform group-hover:scale-110" />
          <span className="text-2xl font-black tracking-tighter text-gray-900 uppercase">
            Smart<span className="text-blue-600">Study</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <button onClick={() => scrollToSection('funcionalidades')} className="text-sm font-black uppercase tracking-widest text-gray-500 hover:text-blue-600 transition">
            Benefícios
          </button>
          <button onClick={() => scrollToSection('faq')} className="text-sm font-black uppercase tracking-widest text-gray-500 hover:text-blue-600 transition">
            FAQ
          </button>
          <button 
            onClick={onOpenLeadModal} 
            className="bg-blue-600 text-white px-7 py-3 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition shadow-lg shadow-blue-200"
          >
            Solicitar Demonstração
          </button>
        </div>

        <button className="md:hidden text-blue-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 p-8 shadow-2xl border-t border-gray-50 flex flex-col gap-6 animate-fadeIn">
          <button onClick={() => scrollToSection('funcionalidades')} className="text-left font-black uppercase tracking-widest text-gray-600">Benefícios</button>
          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenLeadModal(); }} 
            className="bg-blue-600 text-white p-5 rounded-2xl font-black text-center uppercase tracking-widest shadow-xl"
          >
            Solicitar Demonstração
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
