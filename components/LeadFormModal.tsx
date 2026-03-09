
import React, { useState } from 'react';
import { X, Send, School, User, Briefcase, Loader2, CheckCircle2, Mail, Phone, AlertCircle } from 'lucide-react';
import { CONTACT_PHONE } from '../constants';

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadFormModal: React.FC<LeadFormModalProps> = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'redirecting'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    instituicao: '',
    cargo: ''
  });

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Validação Nome Completo (pelo menos duas palavras)
    const nomeTrimmed = formData.nome.trim();
    if (nomeTrimmed.split(/\s+/).length < 2) {
      newErrors.nome = "Insira seu nome e sobrenome.";
    }

    // Validação E-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Insira um e-mail válido.";
    }

    // Validação Telefone (apenas números, min 10 dígitos)
    const phoneDigits = formData.telefone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      newErrors.telefone = "Insira um telefone com DDD.";
    }

    // Campos simples obrigatórios
    if (!formData.instituicao.trim()) newErrors.instituicao = "Campo obrigatório.";
    if (!formData.cargo.trim()) newErrors.cargo = "Campo obrigatório.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setStatus('sending');

    try {
      /**
       * ENVIO REAL DE E-MAIL (Background)
       * Enviando para smartstudy480@gmail.com via FormSubmit.
       */
      const response = await fetch('https://formsubmit.co/ajax/smartstudy480@gmail.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `🚀 Lead Institucional: ${formData.nome}`,
          _captcha: "false",
          _template: "table",
          "Nome Completo": formData.nome,
          "E-mail": formData.email,
          "Telefone": formData.telefone,
          "Instituição": formData.instituicao,
          "Cargo": formData.cargo,
          "Data": new Date().toLocaleString('pt-BR')
        })
      });

      if (!response.ok) throw new Error('Falha no envio');

      setStatus('redirecting');

      // Mensagem personalizada para o WhatsApp
      const userInterestMessage = `Olá! Meu nome é ${formData.nome.split(' ')[0]} da ${formData.instituicao}. Acabei de preencher o formulário e gostaria de agendar uma demonstração do Smart Study.`;
      const encodedMessage = encodeURIComponent(userInterestMessage);
      const whatsappUrl = `https://api.whatsapp.com/send/?phone=${CONTACT_PHONE}&text=${encodedMessage}`;

      setTimeout(() => {
        window.location.assign(whatsappUrl);
        setTimeout(() => {
          setStatus('idle');
          setFormData({ nome: '', email: '', telefone: '', instituicao: '', cargo: '' });
          onClose();
        }, 1500);
      }, 1200);

    } catch (error) {
      console.error('Erro:', error);
      // Fallback para não perder o lead
      window.location.assign(`https://api.whatsapp.com/send/?phone=${CONTACT_PHONE}&text=Olá! Tentei preencher o formulário mas houve um erro. Gostaria de falar sobre a demonstração.`);
    }
  };

  const inputClasses = (fieldName: string) => `
    w-full bg-gray-50 border-2 rounded-2xl py-4 pl-12 pr-6 transition-all outline-none font-bold text-gray-700
    ${errors[fieldName] ? 'border-red-500 focus:bg-red-50' : 'border-transparent focus:border-blue-600 focus:bg-white'}
  `;

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-[40px] max-w-xl w-full p-8 md:p-10 relative shadow-2xl border border-gray-100 overflow-y-auto max-h-[90vh]">
        <button 
          onClick={onClose} 
          disabled={status !== 'idle'}
          className="absolute top-8 right-8 p-2 hover:bg-gray-100 rounded-full transition text-gray-500 disabled:opacity-0"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="mb-8">
          <h3 className="text-3xl font-black text-gray-900 uppercase tracking-tight mb-2">
            {status === 'idle' ? 'Solicitar Demo' : 'Sucesso!'}
          </h3>
          <p className="text-gray-500 font-medium">
            {status === 'idle' 
              ? 'Todos os campos são obrigatórios para validação.' 
              : 'Dados verificados e enviados.'}
          </p>
        </div>

        {status === 'idle' ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Campo Nome */}
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Nome e Sobrenome</label>
              <div className="relative">
                <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${errors.nome ? 'text-red-500' : 'text-gray-400'}`} />
                <input
                  type="text"
                  placeholder="Seu nome completo"
                  className={inputClasses('nome')}
                  value={formData.nome}
                  onChange={(e) => setFormData({...formData, nome: e.target.value})}
                />
              </div>
              {errors.nome && <p className="text-red-500 text-[10px] font-bold ml-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.nome}</p>}
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {/* Campo E-mail */}
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">E-mail Profissional</label>
                <div className="relative">
                  <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${errors.email ? 'text-red-500' : 'text-gray-400'}`} />
                  <input
                    type="email"
                    placeholder="email@escola.com"
                    className={inputClasses('email')}
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                {errors.email && <p className="text-red-500 text-[10px] font-bold ml-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</p>}
              </div>

              {/* Campo Telefone */}
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Telefone/WhatsApp</label>
                <div className="relative">
                  <Phone className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${errors.telefone ? 'text-red-500' : 'text-gray-400'}`} />
                  <input
                    type="tel"
                    placeholder="(11) 99999-9999"
                    className={inputClasses('telefone')}
                    value={formData.telefone}
                    onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                  />
                </div>
                {errors.telefone && <p className="text-red-500 text-[10px] font-bold ml-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.telefone}</p>}
              </div>
            </div>

            {/* Campo Instituição */}
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Escola / Instituição</label>
              <div className="relative">
                <School className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${errors.instituicao ? 'text-red-500' : 'text-gray-400'}`} />
                <input
                  type="text"
                  placeholder="Nome da instituição"
                  className={inputClasses('instituicao')}
                  value={formData.instituicao}
                  onChange={(e) => setFormData({...formData, instituicao: e.target.value})}
                />
              </div>
              {errors.instituicao && <p className="text-red-500 text-[10px] font-bold ml-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.instituicao}</p>}
            </div>

            {/* Campo Cargo */}
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Seu Cargo</label>
              <div className="relative">
                <Briefcase className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${errors.cargo ? 'text-red-500' : 'text-gray-400'}`} />
                <input
                  type="text"
                  placeholder="Ex: Diretor Pedagógico"
                  className={inputClasses('cargo')}
                  value={formData.cargo}
                  onChange={(e) => setFormData({...formData, cargo: e.target.value})}
                />
              </div>
              {errors.cargo && <p className="text-red-500 text-[10px] font-bold ml-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.cargo}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-xl hover:bg-blue-700 transition shadow-xl shadow-blue-200 flex items-center justify-center gap-3 mt-4 active:scale-95"
            >
              Confirmar e Abrir WhatsApp <Send className="w-5 h-5" />
            </button>
          </form>
        ) : (
          <div className="py-16 flex flex-col items-center justify-center space-y-6 text-center animate-fadeIn">
            <div className="relative">
              {status === 'sending' ? (
                <div className="flex items-center justify-center">
                  <Loader2 className="w-20 h-20 text-blue-600 animate-spin absolute" />
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                     <Send className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              ) : (
                <div className="bg-green-100 p-4 rounded-full animate-bounce">
                  <CheckCircle2 className="w-16 h-16 text-green-500" />
                </div>
              )}
            </div>
            <div>
              <p className="text-2xl font-black text-gray-900 mb-2">
                {status === 'sending' ? 'Validando e Enviando...' : 'Redirecionando...'}
              </p>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">
                {status === 'sending' ? 'Aguarde um momento' : 'Iniciando conversa no WhatsApp'}
              </p>
            </div>
          </div>
        )}
        
        <div className="mt-8 pt-6 border-t border-gray-100">
           <p className="text-center text-[10px] text-gray-400 uppercase font-black tracking-widest leading-relaxed">
             Segurança Smart Study. Seus dados são processados <br/> com criptografia para fins estritamente comerciais.
           </p>
        </div>
      </div>
    </div>
  );
};

export default LeadFormModal;
