
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Semana 1', nota: 45 },
  { name: 'Semana 2', nota: 52 },
  { name: 'Semana 3', nota: 68 },
  { name: 'Semana 4', nota: 75 },
  { name: 'Semana 5', nota: 80 },
  { name: 'Semana 6', nota: 88 },
];

const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase mb-4">Visibilidade do Aprendizado</h2>
            <h3 className="text-4xl font-extrabold mb-8">Dados que ajudam você a entender seu ritmo.</h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              O Smart Study oferece um painel de métricas para que você acompanhe sua frequência e desempenho. Ver seus pontos de melhoria é o primeiro passo para um estudo mais consciente e produtivo.
            </p>
            
            <div className="space-y-6">
              {[
                { label: 'Crescimento na retenção de conteúdo*', value: '+40%' },
                { label: 'Alunos que seguem o plano regularmente*', value: '82%' },
                { label: 'Eficiência na organização semanal*', value: 'Alto Impacto' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900">{item.label}</p>
                  </div>
                  <p className="text-2xl font-black text-blue-600">{item.value}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-xs mt-6 italic">*Estimativas baseadas em dados de uso e engajamento da plataforma.</p>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-gray-50 p-8 rounded-[40px] border border-gray-100 shadow-lg h-[450px]">
              <h4 className="text-lg font-bold mb-8 text-center text-gray-800">Curva de Aprendizado Típica (Média de Desempenho)</h4>
              <ResponsiveContainer width="100%" height="80%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorNota" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                  <Tooltip 
                    contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="nota" 
                    stroke="#3b82f6" 
                    strokeWidth={4} 
                    fillOpacity={1} 
                    fill="url(#colorNota)" 
                    animationDuration={2000}
                  />
                </AreaChart>
              </ResponsiveContainer>
              <p className="text-center text-xs text-gray-400 mt-4 uppercase font-bold tracking-widest">Representação ilustrativa de progresso consistente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
