
import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-4xl font-extrabold mb-4 text-center">Dúvidas Frequentes</h2>
        <p className="text-gray-500 text-center mb-12">Tudo o que você precisa saber sobre o melhor preparatório ETEC.</p>
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300">
              <button 
                className="w-full p-6 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-gray-900">{faq.question}</span>
                <div className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <ChevronDown />
                </div>
              </button>
              <div className={`faq-content px-6 text-gray-600 bg-gray-50 ${openIndex === index ? 'open' : ''}`}>
                <div className="pt-2 border-t border-gray-100">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;