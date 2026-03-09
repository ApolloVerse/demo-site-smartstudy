
import React from 'react';
import { Rocket, Shield } from 'lucide-react';

interface FooterProps {
  onOpenLeadModal: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenLeadModal }) => {
  return (
    <footer className="bg-white text-gray-900 py-20 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Rocket className="w-8 h-8 text-blue-600" />
              <span className="text-3xl font-black tracking-tighter uppercase">
                Smart<span className="text-blue-600">Study</span>
              </span>
            </div>
            <p className="text-gray-500 text-lg leading-relaxed max-w-sm mb-6 font-medium">
              Sistema de apoio pedagógico para aprovação no vestibulinho da ETEC. Potencializando o mérito através da tecnologia.
            </p>
            <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-xl text-gray-600 text-xs font-black uppercase tracking-widest">
              <Shield className="w-4 h-4" /> MVP em fase de validação
            </div>
          </div>

          <div>
            <h5 className="text-xs font-black uppercase tracking-widest mb-8 text-gray-400">Institucional</h5>
            <ul className="space-y-4 font-bold text-gray-700">
              <li><button onClick={onOpenLeadModal} className="hover:text-blue-600 transition">Solicitar Demonstração</button></li>
              <li><button onClick={onOpenLeadModal} className="hover:text-blue-600 transition">Falar sobre Parceria</button></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-black uppercase tracking-widest mb-8 text-gray-400">Contato Comercial</h5>
            <p className="text-gray-500 text-sm font-medium leading-relaxed">São Paulo, SP - Disponível para atendimento em todo o Brasil.</p>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 text-sm font-bold uppercase tracking-widest">
          <p>© 2026 Smart Study. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <p>Conteúdo demonstrativo. Acesso sob solicitação.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
