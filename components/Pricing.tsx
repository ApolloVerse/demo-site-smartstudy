
import React from 'react';
import { PRICING_PLANS } from '../constants';
import { Check, Star } from 'lucide-react';

interface PricingProps {
  onOpenLeadModal: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onOpenLeadModal }) => {
  return (
    <section id="pricing" className="py-24 bg-[#0a121e] overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-4 uppercase tracking-tighter">Nossos Planos</h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-medium">
            Soluções flexíveis para alunos individuais e parcerias institucionais customizadas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <div 
              key={plan.name} 
              className={`p-10 rounded-[40px] transition-all duration-500 relative flex flex-col h-full bg-[#162130] border-2 ${
                plan.recommended ? 'border-blue-500 shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)] scale-105 z-10' : 'border-gray-800'
              } hover:border-blue-500/50 group`}
            >
              {plan.recommended && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-6 py-2 rounded-full font-black text-xs flex items-center gap-2 shadow-xl uppercase tracking-widest whitespace-nowrap">
                  <Star className="w-3 h-3 fill-current" /> Recomendado para Escolas
                </div>
              )}
              
              <div className="mb-8">
                <h4 className={`text-2xl font-black mb-3 uppercase tracking-tight ${
                  plan.recommended ? 'text-blue-400' : 'text-white'
                }`}>
                  {plan.name}
                </h4>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-5xl font-black text-white tracking-tighter">{plan.price}</span>
                  {plan.price !== 'R$ 0,00' && <span className="text-gray-500 font-bold text-sm">/aluno*</span>}
                </div>
              </div>

              <div className="space-y-4 mb-12 flex-1">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 font-medium text-sm leading-snug">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={onOpenLeadModal}
                className={`w-full py-5 rounded-2xl font-black text-lg text-center transition-all transform active:scale-95 uppercase tracking-widest ${
                  plan.recommended 
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-600/20' 
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
        
        <p className="text-center text-gray-500 text-xs mt-12 font-bold uppercase tracking-widest opacity-50">
          * Valores institucionais sob consulta dependendo do volume de alunos.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
