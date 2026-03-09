
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href={WHATSAPP_URL} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] bg-[#25d366] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-90 animate-bounce flex items-center justify-center border-4 border-white"
      aria-label="Fale conosco no WhatsApp"
      style={{ animationDuration: '2s' }}
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 fill-current" />
      <span className="absolute -top-1 -left-1 flex h-4 w-4 md:h-5 md:w-5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 md:h-5 md:w-5 bg-green-500"></span>
      </span>
    </a>
  );
};

export default WhatsAppButton;