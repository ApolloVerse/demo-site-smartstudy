
import React from 'react';
import { Target, TrendingUp, LayoutDashboard, Zap, ShieldCheck, Users } from 'lucide-react';
import { Feature, FAQItem, PricingPlan } from './types';

export const APP_URL = "https://smart-study-295232260367.us-west1.run.app/";
export const CONTACT_PHONE = "5511961054592";
export const WHATSAPP_URL = `https://api.whatsapp.com/send/?phone=${CONTACT_PHONE}&text=Ol%C3%A1%21+Gostaria+de+come%C3%A7ar+a+estudar+e+queria+mais+informa%C3%A7%C3%B5es+sobre+como+funciona+o+Smart+Study.&type=phone_number&app_absent=0`;

export const INSTITUTIONAL_BENEFITS: Feature[] = [
  {
    id: 'org',
    title: 'Organização do Aluno',
    description: 'Melhora a gestão do tempo e o engajamento individual com os estudos através de cronogramas inteligentes.',
    icon: <Target className="w-6 h-6 text-blue-600" />,
    isPremium: false
  },
  {
    id: 'approval',
    title: 'Taxa de Aprovação',
    description: 'Foco total nas competências exigidas pelo edital da ETEC, elevando o índice de sucesso da instituição.',
    icon: <Zap className="w-6 h-6 text-amber-500" />,
    isPremium: false
  },
  {
    id: 'data',
    title: 'Dados de Desempenho',
    description: 'Oferece relatórios e métricas claras sobre a evolução pedagógica para tomadas de decisão rápidas.',
    icon: <TrendingUp className="w-6 h-6 text-green-600" />,
    isPremium: false
  },
  {
    id: 'integration',
    title: 'Suporte Complementar',
    description: 'Funciona como uma extensão digital do currículo, integrando-se facilmente à rotina escolar existente.',
    icon: <LayoutDashboard className="w-6 h-6 text-purple-600" />,
    isPremium: false
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Plano Gratuito',
    price: 'R$ 0,00',
    features: [
      'Cronograma básico de estudos',
      'Acesso a 5 simulados por mês',
      'Dicas diárias de estudo',
      'Comunidade de alunos'
    ],
    recommended: false,
    cta: 'Começar Agora'
  },
  {
    name: 'Plano Essencial',
    price: 'R$ 29,90',
    features: [
      'Tudo do Plano Gratuito',
      'Simulados ilimitados',
      'Análise de desempenho detalhada',
      'Mentor IA (Limite diário)'
    ],
    recommended: false,
    cta: 'Assinar Essencial'
  },
  {
    name: 'Plano Premium',
    price: 'R$ 49,90',
    features: [
      'Tudo do Plano Essencial',
      'Mentor IA Ilimitado 24/7',
      'Aulas gravadas exclusivas',
      'Suporte prioritário via WhatsApp',
      'Cronograma personalizado por IA'
    ],
    recommended: true,
    cta: 'Seja Premium'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Como funciona a implementação nas escolas?',
    answer: 'A implementação é simples e extremamente rápida, ocorrendo em menos de 48h. Fornecemos o acesso para os grupos de alunos e realizamos um treinamento rápido com a coordenação pedagógica para acompanhamento dos dados.'
  },
  {
    question: 'A plataforma cobre todo o edital da ETEC?',
    answer: 'Sim, o sistema é alimentado com base nos editais oficiais do Centro Paula Souza, garantindo que o aluno pratique exatamente o que será cobrado.'
  },
  {
    question: 'É possível testar o sistema antes da parceria?',
    answer: 'Sim, oferecemos uma demonstração guiada e um período de teste para turmas selecionadas em fase de validação.'
  }
];
