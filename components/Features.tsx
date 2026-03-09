
import React from 'react';
import { INSTITUTIONAL_BENEFITS } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="funcionalidades" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-blue-600 font-bold tracking-widest uppercase mb-4">Diferenciais Estratégicos</h2>
        <h3 className="text-4xl md:text-5xl font-black mb-16 max-w-3xl mx-auto tracking-tight">
          Benefícios para instituições focadas em aprovação.
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {INSTITUTIONAL_BENEFITS.map((feature) => (
            <div key={feature.id} className="p-10 rounded-[40px] bg-white border border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-500 group">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition duration-300">
                {feature.icon}
              </div>
              <h4 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">{feature.title}</h4>
              <p className="text-gray-500 leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-blue-50 rounded-[32px] border border-blue-100 inline-block">
          <p className="text-blue-900 font-bold flex items-center gap-3">
             Fácil de integrar à rotina escolar e funciona como suporte complementar ao currículo oficial.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
