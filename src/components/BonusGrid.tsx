import { bonusItems } from '../data/materials';
import { Gift, Sparkles, CheckSquare, Presentation, HelpCircle, FileCheck, ShieldAlert } from 'lucide-react';

const icons: Record<string, any> = {
  'bonus-1': HelpCircle, // Flashcards
  'bonus-2': CheckSquare, // Atividades
  'bonus-3': Presentation, // Slides
  'bonus-4': Sparkles, // Kit Interativo
  'bonus-5': FileCheck, // Guia BNCC
  'bonus-6': ShieldAlert // Emergência
};

export default function BonusGrid() {
  return (
    <section id="bonus-section" className="py-16 px-4 bg-white relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Badge & Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-800 text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
            <Gift className="w-3.5 h-3.5 fill-current" />
            Bônus Exclusivos
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            E tem mais! Leve também:
          </h2>
          <p className="text-gray-500 font-medium text-sm sm:text-base mt-2 max-w-lg mx-auto">
            Garantindo hoje o seu acesso, você leva uma coleção de materiais complementares que aceleram ainda mais o seu planejamento.
          </p>
        </div>

        {/* Bonus Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {bonusItems.map((item) => {
            const IconComponent = icons[item.id] || Gift;
            return (
              <div 
                key={item.id}
                className="bg-slate-50 hover:bg-slate-50/50 border border-gray-100 hover:border-blue-100 hover:shadow-lg rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between"
                id={`bonus-card-${item.id}`}
              >
                <div>
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-700 font-bold text-[10px] uppercase tracking-wider px-2 py-1 rounded-md">
                      {item.badge}
                    </span>
                    <span className="text-xs text-gray-400 line-through">
                      {item.realPrice}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3 mt-1">
                    <div className="bg-blue-600 text-white p-2.5 rounded-xl shrink-0 shadow-md">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-gray-900 text-base sm:text-lg leading-snug">
                        {item.title}
                      </h4>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-gray-200/50 flex justify-between items-center">
                  <span className="text-xs text-gray-500 font-mono">No pacote completo:</span>
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold tracking-wider px-2.5 py-1 rounded">
                    GRÁTIS
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bonus Value Banner */}
        <div 
          id="bonus-banner"
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-6 sm:p-8 shadow-xl text-center flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto"
        >
          <div className="text-center sm:text-left">
            <p className="text-blue-100 uppercase font-black tracking-widest text-xs sm:text-sm font-mono">Valor Total Somado dos Bônus</p>
            <h3 className="text-2xl sm:text-3xl font-black mt-1 text-white line-through opacity-85">R$ 97,24</h3>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 py-3 px-6 rounded-2xl flex flex-col items-center sm:items-end">
            <span className="text-[10px] sm:text-xs text-yellow-300 font-black tracking-widest uppercase">Oferta de Lançamento</span>
            <span className="text-lg sm:text-2xl font-black mt-0.5">
              Inclusos <span className="bg-white text-blue-700 px-2 py-0.5 rounded-md font-extrabold shadow ml-1">GRÁTIS</span> no Pacote Completo!
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
