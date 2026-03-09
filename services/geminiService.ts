
import { GoogleGenAI } from "@google/genai";

export const askMentor = async (question: string) => {
  // Always use a named parameter and process.env.API_KEY directly as per guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  // Use ai.models.generateContent directly with model name and content
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Você é o Mentor IA do Smart Study, especializado no vestibulinho da ETEC (Centro Paula Souza - São Paulo). 
    Sua missão é ajudar estudantes a passarem na prova. 
    Responda de forma motivadora, clara e direta à seguinte pergunta: ${question}. 
    Se a pergunta não for sobre estudos ou ETEC, gentilmente redirecione o foco para a aprovação.`,
    config: {
      temperature: 0.7,
      topP: 0.8,
      topK: 40,
    }
  });

  // response.text is a property, not a method
  return response.text;
};