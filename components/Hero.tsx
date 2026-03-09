
import React, { useState } from 'react';
import { ChevronRight, PlayCircle, Star, ShieldCheck, X } from 'lucide-react';

interface HeroProps {
  onOpenLeadModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenLeadModal }) => {
  const [showModal, setShowModal] = useState(false);
  const arcadeUrl = "https://app.arcade.software/share/BhmetYqMSQMxOBnM0fv0";

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background decoration consistent with current style */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] opacity-40 -z-10"></div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full text-blue-700 text-xs font-bold mb-6 tracking-widest uppercase">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            Plataforma em fase de MVP | Parcerias Abertas
          </div>
          <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8 text-gray-900 tracking-tighter">
            Sistema de apoio pedagógico para aprovação no vestibulinho da <span className="text-blue-600">ETEC</span>
          </h1>
          <h2 className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl font-medium">
            Organização de estudos, prática guiada e acompanhamento de desempenho para alunos, escolas e edtechs.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button 
              onClick={onOpenLeadModal} 
              className="bg-blue-600 text-white px-8 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition shadow-xl shadow-blue-200 active:scale-95"
            >
              Solicitar Demonstração <ChevronRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setShowModal(true)}
              className="flex items-center justify-center gap-2 px-8 py-5 rounded-2xl font-bold text-lg border-2 border-gray-100 hover:border-blue-600 hover:text-blue-600 transition"
            >
              <PlayCircle className="w-6 h-6" /> Ver Como Funciona
            </button>
          </div>
          
          <p className="text-sm text-gray-400 font-bold italic tracking-wide">
            * Projeto em fase de validação com instituições de ensino.
          </p>
        </div>

        <div className="relative">
          <div className="bg-white p-4 rounded-[48px] shadow-2xl border border-gray-100 transform rotate-1 hover:rotate-0 transition duration-700 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop" 
              alt="Integração Escolar Smart Study" 
              className="rounded-[40px] w-full h-[450px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10 p-6 bg-white/95 backdrop-blur-md rounded-3xl border border-white shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white">
                  <Star className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <p className="text-gray-900 font-black text-lg">Smart Study Institucional</p>
                  <p className="text-gray-500 text-sm font-bold uppercase tracking-widest leading-none mt-1">Sua escola no próximo nível</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Tutorial */}
      {showModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/70 backdrop-blur-md animate-fadeIn">
          <div className="bg-white rounded-[40px] max-w-xl w-full p-10 relative shadow-2xl">
            <button onClick={() => setShowModal(false)} className="absolute top-8 right-8 p-2 hover:bg-gray-100 rounded-full transition text-gray-500">
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-3xl font-black mb-8 text-gray-900 uppercase tracking-tight">Fluxo Metodológico</h3>
            <div className="space-y-8 mb-10">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center font-black text-xl flex-shrink-0">1</div>
                <div><p className="font-black text-lg text-gray-900 mb-1">Diagnóstico</p><p className="text-gray-600">Identificação de lacunas com base no edital oficial da ETEC.</p></div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center font-black text-xl flex-shrink-0">2</div>
                <div><p className="font-black text-lg text-gray-900 mb-1">Prática Guiada</p><p className="text-gray-600">Cronograma focado nos temas de maior recorrência e peso na prova.</p></div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center font-black text-xl flex-shrink-0">3</div>
                <div><p className="font-black text-lg text-gray-900 mb-1">Acompanhamento</p><p className="text-gray-600">Painéis de evolução para análise de desempenho em tempo real.</p></div>
              </div>
            </div>
            <a href={arcadeUrl} target="_blank" rel="noopener noreferrer" className="block w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-center text-xl hover:bg-blue-700 transition shadow-xl shadow-blue-200">
              Quero levar para minha instituição
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
