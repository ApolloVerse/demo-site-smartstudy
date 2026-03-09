
import React from 'react';
import { Cpu, Zap, Target, Sparkles } from 'lucide-react';
import InteractiveMentor from './InteractiveMentor';

const AISection: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-1 rounded-full text-xs font-black uppercase mb-6 tracking-widest">
              <Sparkles className="w-4 h-4" /> Inteligência Educacional Smart Study
            </div>
            <h3 className="text-4xl md:text-5xl font-black mb-8 text-gray-900 leading-tight tracking-tighter">
              Tecnologia que entende o ritmo do aluno.
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed mb-10 font-medium">
              A plataforma utiliza Inteligência Artificial para analisar o desempenho do aluno, identificar padrões de erro e ajustar o plano de estudos e os exercícios de forma personalizada, otimizando tempo e foco.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                <Zap className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="font-black text-gray-900 mb-2">Ajuste Dinâmico</h4>
                <p className="text-sm text-gray-600">O sistema prioriza matérias com maior dificuldade detectada automaticamente.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                <Target className="w-8 h-8 text-purple-600 mb-4" />
                <h4 className="font-black text-gray-900 mb-2">Foco no Edital</h4>
                <p className="text-sm text-gray-600">Garante que o aluno não perca tempo com conteúdos que não caem na prova.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
             <div className="relative">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-100 rounded-full blur-[80px] -z-10"></div>
                <InteractiveMentor />
                <p className="text-center text-xs text-gray-400 mt-4 font-bold uppercase tracking-widest">Demonstração: Assistente Pedagógico via IA</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
