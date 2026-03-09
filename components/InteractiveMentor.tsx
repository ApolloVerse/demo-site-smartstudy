
import React, { useState } from 'react';
import { Send, Bot, Loader2 } from 'lucide-react';
import { askMentor } from '../services/geminiService';

/**
 * InteractiveMentor component that allows users to interact with a Gemini-powered mentor.
 * This resolves the "not a module" error in AISection.tsx by providing a valid export.
 */
const InteractiveMentor: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim() || loading) return;

    setLoading(true);
    setResponse(null);
    try {
      // Calls the Gemini API service
      const result = await askMentor(question);
      setResponse(result || 'Desculpe, não consegui processar sua dúvida agora.');
    } catch (error) {
      console.error('Error asking mentor:', error);
      setResponse('Houve um erro ao consultar o mentor. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-[40px] shadow-2xl border border-gray-100 overflow-hidden flex flex-col h-[500px]">
      <div className="p-6 bg-blue-600 text-white flex items-center gap-3">
        <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center">
          <Bot className="w-6 h-6" />
        </div>
        <div>
          <h4 className="font-black uppercase tracking-widest text-sm">Mentor IA</h4>
          <p className="text-xs text-blue-100 font-bold">Especialista ETEC 24/7</p>
        </div>
      </div>

      <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-gray-50/50">
        {!response && !loading && (
          <div className="flex flex-col items-center justify-center h-full text-center text-gray-400 space-y-4 p-4">
            <Bot className="w-12 h-12 opacity-20" />
            <p className="font-bold text-sm uppercase tracking-widest leading-relaxed">
              Olá! Pergunte algo sobre o vestibulinho da ETEC ou como organizar seus estudos.
            </p>
          </div>
        )}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm flex items-center gap-3 max-w-[85%]">
              <Loader2 className="w-5 h-5 text-blue-600 animate-spin" />
              <p className="text-sm font-bold text-gray-400 italic tracking-tight">Analisando sua dúvida...</p>
            </div>
          </div>
        )}

        {response && (
          <div className="flex justify-start">
            <div className="bg-white p-5 rounded-3xl rounded-tl-none border border-blue-100 shadow-sm text-gray-700 text-sm leading-relaxed max-w-[85%]">
              <div className="flex items-center gap-2 mb-3">
                <Bot className="w-4 h-4 text-blue-600" />
                <span className="text-[10px] font-black uppercase text-blue-600 tracking-widest">Resposta do Mentor</span>
              </div>
              {response}
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-100">
        <div className="relative">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ex: Como organizar meu cronograma?"
            className="w-full bg-gray-50 border-2 border-transparent focus:border-blue-600 focus:bg-white rounded-2xl py-4 pl-6 pr-14 transition-all outline-none font-bold text-gray-700 placeholder:text-gray-400"
          />
          <button
            type="submit"
            disabled={loading || !question.trim()}
            className="absolute right-2 top-2 p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-200"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default InteractiveMentor;