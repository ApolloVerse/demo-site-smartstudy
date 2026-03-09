
import React, { useState } from 'react';
import { ShieldCheck, Rocket, ChevronRight } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import AISection from './components/AISection';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import LeadFormModal from './components/LeadFormModal';

const App: React.FC = () => {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  const openLeadModal = () => setIsLeadModalOpen(true);

  return (
    <div className="min-h-screen bg-white">
      <Header onOpenLeadModal={openLeadModal} />
      <WhatsAppButton />
      <LeadFormModal isOpen={isLeadModalOpen} onClose={() => setIsLeadModalOpen(false)} />
      
      <main>
        <Hero onOpenLeadModal={openLeadModal} />
        
        {/* Institutional Validation Banner */}
        <section className="py-12 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 opacity-80">
            <div className="flex items-center gap-4">
              <ShieldCheck className="w-8 h-8 text-blue-600" />
              <span className="text-sm font-black text-gray-900 uppercase tracking-widest leading-tight">
                Validação <br/> Institucional
              </span>
            </div>
            <div className="h-px w-20 bg-gray-300 hidden md:block"></div>
            <p className="text-center md:text-left text-gray-500 font-bold max-w-2xl leading-relaxed">
              “Projeto em fase de validação e conversas em andamento com instituições de ensino.”
            </p>
          </div>
        </section>

        <AISection />
        
        <Features />
        
        {/* Institutional CTA Section */}
        <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
          <div className="container mx-auto px-6 text-center relative z-10">
            <h4 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter uppercase">Potencialize o resultado dos seus alunos</h4>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Leve o Smart Study para sua instituição e ofereça um diferencial tecnológico real na preparação para o vestibulinho.
            </p>
            <button 
              onClick={openLeadModal}
              className="bg-white text-blue-600 px-12 py-6 rounded-3xl font-black text-2xl hover:bg-gray-100 transition shadow-2xl hover:-translate-y-1 transform inline-flex items-center gap-3"
            >
              FALAR SOBRE PARCERIA <ChevronRight className="w-8 h-8" />
            </button>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-[150px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
        </section>

        <div id="faq">
          <FAQ />
        </div>

        {/* Closing Final Card */}
        <section className="py-24">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="bg-gray-950 rounded-[56px] p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter uppercase">
                  A ferramenta que <span className="text-blue-500">amplifica</span> o mérito escolar.
                </h2>
                <p className="text-xl opacity-70 mb-12 max-w-xl mx-auto font-medium">
                  Agende uma call institucional para entender como podemos elevar a taxa de aprovação do seu cursinho ou escola.
                </p>
                <button 
                  onClick={openLeadModal}
                  className="bg-blue-600 text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-blue-700 transition shadow-2xl inline-block tracking-widest uppercase"
                >
                  Agendar Demonstração
                </button>
              </div>
              <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                <Rocket className="w-80 h-80 -rotate-12" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer onOpenLeadModal={openLeadModal} />
    </div>
  );
};

export default App;
