import { bonusItems } from '../data/materials';
import { 
  Award, 
  Sparkles, 
  Gift, 
  Check, 
  HelpCircle, 
  CheckSquare, 
  Presentation, 
  FileCheck, 
  ShieldAlert, 
  Star 
} from 'lucide-react';

export default function BonusGrid() {
  return (
    <section id="bonus-section" className="py-20 px-4 bg-slate-50/50 relative border-b border-gray-100">
      {/* Soft background accents */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Badge & Title (Matches high-converting landing page) */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200/50 text-blue-600 text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <Award className="w-3.5 h-3.5" />
            BÔNUS EXCLUSIVOS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight">
            E tem mais! Leve também:
          </h2>
          <p className="text-gray-500 font-medium text-sm sm:text-base mt-3 max-w-xl mx-auto leading-relaxed">
            Garantindo hoje o seu acesso ao Pacote Completo, você leva essa coleção inédita de materiais premium de graça.
          </p>
        </div>

        {/* Bonus Grid with centered visual cards ("Panfletos" layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch mb-16">
          {bonusItems.map((item) => {
            // Determine custom styling based on bonus item ID
            let badgeBg = 'bg-[#f3e8ff] text-[#6b21a8] border-[#e9d5ff]/50';
            let badgeText = item.badge;
            
            if (item.id === 'bonus-1') {
              badgeBg = 'bg-[#f3e8ff] text-[#6b21a8] border-[#e9d5ff]/50';
              badgeText = '🗂️ Vocabulário & Estilo';
            } else if (item.id === 'bonus-2') {
              badgeBg = 'bg-violet-600 text-white border-transparent';
              badgeText = '📄 Atividades Prontas';
            } else if (item.id === 'bonus-3') {
              badgeBg = 'bg-[#fef3c7] text-[#b45309] border-[#fde68a]/50';
              badgeText = '★ Dinâmicas Premium';
            } else if (item.id === 'bonus-5') {
              badgeBg = 'bg-emerald-50 text-emerald-700 border-emerald-100';
              badgeText = '📅 Alinhado à BNCC';
            } else if (item.id === 'bonus-6') {
              badgeBg = 'bg-rose-50 text-rose-700 border-rose-100';
              badgeText = '🚨 Salva-Vidas';
            }

            return (
              <div 
                key={item.id}
                className="bg-white border border-gray-100/90 rounded-[40px] p-6 sm:p-8 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-center relative overflow-hidden shadow-xl"
                id={`bonus-card-${item.id}`}
              >
                {/* Center Badge at top of Flyer */}
                <div className="flex justify-center mt-2 mb-6">
                  <span className={`text-[11px] font-black uppercase tracking-wider px-4 py-1.5 rounded-full border shadow-xs ${badgeBg}`}>
                    {badgeText}
                  </span>
                </div>

                {/* Center Flyer Illustration Area */}
                <div className="w-full h-48 flex items-center justify-center mb-6 bg-slate-50/50 rounded-[28px] border border-slate-100/70 overflow-hidden relative select-none">
                  
                  {/* ILLUSTRATION 1: Flashcards Flyer Layout */}
                  {item.id === 'bonus-1' && (
                    <div className="relative w-full h-full flex items-center justify-center">
                      {/* Back card 1 (Purple) */}
                      <div className="absolute w-22 h-30 bg-[#a78bfa] border border-[#c084fc] shadow-lg rounded-2xl transform -rotate-12 -translate-x-12 translate-y-2 flex flex-col justify-between p-3">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
                          <span className="text-[6px] text-white/90 font-black tracking-wider uppercase font-mono">FIGURAS</span>
                        </div>
                        <div className="w-full h-1 bg-white/20 rounded" />
                        <div className="w-3/4 h-1 bg-white/20 rounded" />
                        <div className="w-full h-1.5 bg-white/10 rounded" />
                      </div>
                      
                      {/* Back card 2 (Green) */}
                      <div className="absolute w-22 h-30 bg-[#34d399] border border-[#059669]/20 shadow-lg rounded-2xl transform rotate-12 translate-x-12 translate-y-2 flex flex-col justify-between p-3">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
                          <span className="text-[6px] text-white/90 font-black tracking-wider uppercase font-mono">CLASSES</span>
                        </div>
                        <div className="w-full h-1 bg-white/20 rounded" />
                        <div className="w-3/4 h-1 bg-white/20 rounded" />
                        <div className="w-full h-1.5 bg-white/10 rounded" />
                      </div>

                      {/* Main front card (Tilted, clean, apple book layout) */}
                      <div className="absolute w-24 h-32 bg-white border border-slate-100 shadow-2xl rounded-2xl z-10 flex flex-col justify-between p-3 transform rotate-[-3deg] hover:scale-105 transition-all">
                        <div className="flex justify-between items-center text-[7px] text-slate-400 font-bold uppercase tracking-wider font-mono">
                          <span>Gramática</span>
                          <span className="text-amber-400">★</span>
                        </div>
                        
                        {/* Red Apple-Book Illustration */}
                        <div className="flex flex-col items-center justify-center my-2 relative">
                          <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-red-600 rounded-full relative flex items-center justify-center shadow-md">
                            {/* Stem & Leaf */}
                            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-amber-800" />
                            <div className="absolute -top-1.5 left-1/2 w-2 h-2 bg-emerald-500 rounded-full transform rotate-45" />
                            
                            {/* Book lines on apple */}
                            <div className="flex flex-col gap-0.5 w-6 items-center">
                              <div className="w-5 h-0.5 bg-white rounded-full opacity-90" />
                              <div className="w-5 h-0.5 bg-white rounded-full opacity-90" />
                              <div className="w-4 h-0.5 bg-white rounded-full opacity-80" />
                            </div>
                          </div>
                          <span className="text-[11px] font-black text-slate-800 mt-2 tracking-tight">Metáfora</span>
                          <div className="w-6 h-0.5 bg-purple-500 rounded-full mt-1" />
                        </div>

                        <div className="w-full h-1 bg-slate-100 rounded" />
                      </div>
                    </div>
                  )}

                  {/* ILLUSTRATION 2: 100+ Atividades Flyer Layout */}
                  {item.id === 'bonus-2' && (
                    <div className="relative w-full h-full flex items-center justify-center">
                      {/* Paper sheet 3 (back) */}
                      <div className="absolute w-28 h-40 bg-white border border-slate-200/50 shadow-md rounded-2xl transform -rotate-6 translate-x-3 -translate-y-2 flex flex-col p-3 space-y-2 opacity-80">
                        <div className="w-1/2 h-2 bg-slate-200 rounded" />
                        <div className="w-full h-1 bg-slate-100 rounded" />
                        <div className="w-full h-1 bg-slate-100 rounded" />
                        <div className="w-full h-1 bg-slate-100 rounded" />
                      </div>

                      {/* Paper sheet 2 (middle) */}
                      <div className="absolute w-28 h-40 bg-white border border-slate-200/50 shadow-lg rounded-2xl transform rotate-3 -translate-x-3 -translate-y-1 flex flex-col p-3 space-y-2 opacity-90">
                        <div className="w-1/2 h-2 bg-slate-200 rounded" />
                        <div className="w-full h-1 bg-slate-100 rounded" />
                        <div className="w-full h-1 bg-slate-100 rounded" />
                        <div className="w-full h-1 bg-slate-100 rounded" />
                      </div>

                      {/* Main front activity page (Detailed real worksheet) */}
                      <div className="absolute w-32 h-44 bg-white border border-indigo-600/80 shadow-2xl rounded-2xl z-10 flex flex-col justify-between p-3.5 transform hover:scale-105 transition-all text-left">
                        
                        {/* Colorful tabs on right edge */}
                        <div className="absolute right-[-6px] top-10 space-y-2 flex flex-col">
                          <div className="w-2.5 h-4 bg-purple-500 rounded-r-md shadow-xs"></div>
                          <div className="w-2.5 h-4 bg-sky-400 rounded-r-md shadow-xs"></div>
                          <div className="w-2.5 h-4 bg-emerald-400 rounded-r-md shadow-xs"></div>
                        </div>

                        {/* Top Metal Binder Clip */}
                        <div className="absolute top-[-8px] left-5 z-20 flex flex-col items-center">
                          <div className="w-6 h-3 bg-purple-700 rounded-t-lg shadow-sm border border-purple-500"></div>
                          {/* Clip handles */}
                          <div className="w-4 h-4 border-2 border-slate-400 rounded-t-full -mt-0.5"></div>
                        </div>

                        {/* Document Content */}
                        <div className="flex-1 flex flex-col space-y-1.5 mt-1 overflow-hidden">
                          {/* Document Header */}
                          <div className="text-center">
                            <span className="text-[5.5px] font-black text-indigo-700 tracking-wider font-mono uppercase block">LÍNGUA PORTUGUESA</span>
                            <div className="w-full h-[1px] bg-slate-200 mt-0.5" />
                          </div>

                          {/* Question 01 */}
                          <div className="space-y-1">
                            <span className="text-[5px] font-bold text-slate-800 block leading-none">01. Leia o texto a seguir e responda:</span>
                            
                            {/* Text Box (Real text) */}
                            <div className="bg-purple-50/60 border border-purple-100/50 rounded p-1 text-[4px] text-slate-600 leading-normal font-medium">
                              A linguagem é o que nos diferencia enquanto seres humanos. Por meio dela, expressamos ideias, sentimentos, compartilhamos experiências e construímos o mundo ao nosso redor.
                            </div>
                          </div>

                          {/* Question a */}
                          <div className="space-y-0.5">
                            <span className="text-[4.5px] font-bold text-slate-800 block leading-none">a) Qual é a ideia central do texto?</span>
                            <div className="w-full h-[1px] bg-slate-300 mt-1" />
                          </div>

                          {/* Question b */}
                          <div className="space-y-1">
                            <span className="text-[4.5px] font-bold text-slate-800 block leading-none">b) Assinale a alternativa correta:</span>
                            
                            {/* Options */}
                            <div className="space-y-0.5 pl-0.5">
                              <div className="flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full border border-slate-300 flex items-center justify-center text-[3.5px] text-slate-400"></span>
                                <span className="text-[3.5px] text-slate-500 leading-none">A) Apenas transmitir ordens.</span>
                              </div>
                              <div className="flex items-center gap-1 bg-emerald-50/50 rounded px-0.5 py-[1px]">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex items-center justify-center text-[3.5px] text-white font-bold">✓</span>
                                <span className="text-[3.5px] text-emerald-800 font-bold leading-none">B) Expressar ideias e sentimentos.</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full border border-slate-300 flex items-center justify-center text-[3.5px] text-slate-400"></span>
                                <span className="text-[3.5px] text-slate-500 leading-none">C) Substituir a comunicação verbal.</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full border border-slate-300 flex items-center justify-center text-[3.5px] text-slate-400"></span>
                                <span className="text-[3.5px] text-slate-500 leading-none">D) Evitar conflitos.</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* stamp/gabarito bottom bar */}
                        <div className="mt-1 bg-violet-600/10 border border-violet-500/20 text-violet-700 font-black text-[4.5px] py-1 px-1.5 rounded-md flex items-center justify-between gap-1 leading-none select-none">
                          <span className="flex items-center gap-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex items-center justify-center text-white text-[3.5px]">✓</span>
                            GABARITO:
                          </span>
                          <span className="font-mono text-[4px] text-violet-600">01. a) A linguagem nos diferencia... b) B</span>
                        </div>

                      </div>
                    </div>
                  )}

                  {/* ILLUSTRATION 3: Slides Editáveis Flyer Layout */}
                  {item.id === 'bonus-3' && (
                    <div className="relative w-full h-full flex items-center justify-center">
                      {/* Background decorative dots */}
                      <div className="absolute top-6 left-6 grid grid-cols-3 gap-1 opacity-20">
                        <span className="w-1 h-1 bg-slate-900 rounded-full"></span>
                        <span className="w-1 h-1 bg-slate-900 rounded-full"></span>
                        <span className="w-1 h-1 bg-slate-900 rounded-full"></span>
                        <span className="w-1 h-1 bg-slate-900 rounded-full"></span>
                        <span className="w-1 h-1 bg-slate-900 rounded-full"></span>
                        <span className="w-1 h-1 bg-slate-900 rounded-full"></span>
                      </div>

                      {/* Presentation Tablet Mockup */}
                      <div className="w-38 h-26 bg-slate-950 border-4 border-slate-800 rounded-[18px] shadow-2xl relative flex flex-col p-1 overflow-hidden transform rotate-[3deg] hover:rotate-0 transition-transform">
                        {/* Slide Content with dark premium design */}
                        <div className="bg-gradient-to-br from-[#10172a] via-[#1e1b4b] to-[#0f0a1d] rounded-xl w-full h-full p-2.5 text-left flex flex-col justify-between relative border border-slate-700/30">
                          <div>
                            <span className="text-[6px] font-black text-amber-400 uppercase tracking-widest block font-mono">SINTAXE NA PRÁTICA</span>
                            <span className="text-[11px] font-black text-white leading-tight block mt-0.5">Dinâmicas Prontas para Aula</span>
                          </div>

                          {/* Presentation slide content mockup */}
                          <div className="flex items-center justify-between gap-1 mt-1 border-t border-slate-800 pt-1.5">
                            <div className="flex gap-1.5">
                              <span className="text-[5px] text-slate-400 font-bold">● Análise</span>
                              <span className="text-[5px] text-slate-400 font-bold">● Concordância</span>
                              <span className="text-[5px] text-slate-400 font-bold">● Crase</span>
                            </div>
                            <span className="text-[5px] font-mono text-amber-400">Pág 05/15</span>
                          </div>

                          {/* Editable sticker badge */}
                          <div className="absolute right-1 top-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[5px] font-extrabold px-1 py-0.5 rounded">
                            ✍️ 100% EDITÁVEL
                          </div>
                        </div>
                      </div>

                      {/* Stand base underneath tablet */}
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-800 -z-10" />
                      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-12 h-1 bg-slate-700 rounded-full -z-10" />
                    </div>
                  )}

                  {/* ILLUSTRATION 5: Guia BNCC Flyer Layout */}
                  {item.id === 'bonus-5' && (
                    <div className="relative w-full h-full flex items-center justify-center">
                      {/* Calendar/Planner Book */}
                      <div className="w-24 h-32 bg-white border border-slate-100 shadow-xl rounded-2xl flex flex-col relative overflow-hidden transform -rotate-3 hover:rotate-0 transition-transform">
                        {/* Metal binding coils on the left side */}
                        <div className="absolute left-0 top-0 bottom-0 w-3 bg-slate-50 border-r border-slate-100 flex flex-col justify-around py-3">
                          <div className="w-1.5 h-1.5 bg-slate-300 rounded-full shadow-inner" />
                          <div className="w-1.5 h-1.5 bg-slate-300 rounded-full shadow-inner" />
                          <div className="w-1.5 h-1.5 bg-slate-300 rounded-full shadow-inner" />
                          <div className="w-1.5 h-1.5 bg-slate-300 rounded-full shadow-inner" />
                          <div className="w-1.5 h-1.5 bg-slate-300 rounded-full shadow-inner" />
                          <div className="w-1.5 h-1.5 bg-slate-300 rounded-full shadow-inner" />
                        </div>

                        {/* Planner body content */}
                        <div className="flex-1 pl-4.5 p-3 text-left flex flex-col justify-between">
                          <div className="space-y-1.5">
                            <span className="text-[7px] font-black text-emerald-600 uppercase tracking-wider block font-mono">GUIA COMPLETO</span>
                            <div className="w-11/12 h-2.5 bg-slate-900 rounded" />
                            <div className="w-full h-1 bg-slate-200 rounded" />
                            <div className="w-full h-1 bg-slate-100 rounded" />
                            <div className="w-3/4 h-1 bg-slate-100 rounded" />
                          </div>

                          {/* BNCC gold guarantee badge seal */}
                          <div className="bg-gradient-to-r from-amber-500 to-yellow-400 text-white font-extrabold text-[7px] py-1 rounded-lg border border-white/40 shadow-sm text-center">
                            🎗️ BNCC SEM MISTÉRIO
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ILLUSTRATION 6: Aulas de Emergência Flyer Layout */}
                  {item.id === 'bonus-6' && (
                    <div className="relative w-full h-full flex items-center justify-center">
                      {/* Emergency lesson document sticking out behind */}
                      <div className="absolute -top-3 w-28 h-12 bg-white border border-slate-100 rounded-t-xl -z-10 flex items-center justify-center p-2 pt-1 shadow-md">
                        <span className="text-[7px] text-rose-500 font-extrabold uppercase tracking-widest font-mono">PLANO DE SUBSTITUIÇÃO</span>
                      </div>

                      {/* Red medical/first aid box mockup representing saving grace */}
                      <div className="w-32 h-24 bg-rose-500 border border-rose-400 rounded-2xl shadow-xl relative flex flex-col items-center justify-center overflow-hidden transform hover:scale-105 transition-all">
                        {/* Metal lock on first aid kit */}
                        <div className="absolute top-0 w-6 h-1 bg-slate-300 rounded-b" />

                        {/* White SOS cross */}
                        <div className="bg-white p-3 rounded-xl shadow-lg flex items-center justify-center relative border border-rose-200/40">
                          <span className="text-rose-500 text-xs font-black font-mono">SOS</span>
                        </div>

                        {/* Stripe pattern on bottom */}
                        <div className="absolute -bottom-2 inset-x-0 h-4 bg-rose-600/30" />
                      </div>
                    </div>
                  )}

                </div>

                {/* Card Title (Tailored exactly like the flyers) */}
                <div className="space-y-1.5 mb-2.5">
                  {item.id === 'bonus-1' ? (
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight">
                      <span className="text-purple-600 block text-2xl sm:text-3xl font-extrabold">+100</span>
                      Flashcards de Português Prontos
                    </h3>
                  ) : item.id === 'bonus-2' ? (
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight">
                      <span className="text-indigo-600 block text-2xl sm:text-3xl font-extrabold">100+</span>
                      Atividades de Língua Portuguesa
                      <span className="text-indigo-600 block mt-1 text-base sm:text-lg font-bold">✨ para Imprimir ✨</span>
                    </h3>
                  ) : item.id === 'bonus-3' ? (
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight">
                      Dinâmicas Prontas para Aula
                      <span className="text-amber-600 block mt-1 text-base sm:text-lg font-bold">(Editáveis)</span>
                    </h3>
                  ) : item.id === 'bonus-5' ? (
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight">
                      Guia de Planejamento
                      <span className="text-emerald-600 block mt-1 text-base sm:text-lg font-bold">BNCC Sem Mistério</span>
                    </h3>
                  ) : (
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight">
                      Kit de Aulas
                      <span className="text-rose-600 block mt-1 text-base sm:text-lg font-bold">de Emergência</span>
                    </h3>
                  )}
                </div>
                
                {/* Card Description */}
                <p className="text-sm text-gray-500 leading-relaxed font-medium px-1 mb-6">
                  {item.description}
                </p>

                {/* Card Footer - Custom designed Flyer Bottom bar with red crossed out price and ORANGE gradient button */}
                <div className="mt-auto pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-left">
                    <span className="text-[10px] text-gray-400 block font-mono leading-none uppercase">Valor Individual:</span>
                    <span className="text-gray-400 line-through text-sm font-semibold inline-block mt-1">
                      De {item.realPrice}
                    </span>
                  </div>
                  
                  {/* Glowing Orange to Yellow gradient pill button matching high converting CTA */}
                  <div className="bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-white font-extrabold text-xs sm:text-sm py-2.5 px-5 rounded-full flex items-center gap-1.5 shadow-md hover:shadow-lg transition-all duration-300 transform active:scale-95 select-none shrink-0 border-b-2 border-amber-600">
                    <Gift className="w-4 h-4 text-white shrink-0 animate-bounce" />
                    <span>GRÁTIS HOJE</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bonus Value Banner */}
        <div 
          id="bonus-banner"
          className="bg-slate-900 border-2 border-slate-800 text-white rounded-[32px] p-6 sm:p-10 shadow-xl text-center flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto"
        >
          <div className="text-center md:text-left space-y-1">
            <p className="text-blue-400 uppercase font-black tracking-widest text-[11px] font-mono">VALOR TOTAL DOS BÔNUS SOMADOS</p>
            <h3 className="text-3xl sm:text-4xl font-black text-white">
              De <span className="line-through text-slate-500">R$ 56,70</span> por <span className="text-emerald-400">R$ 0,00</span>
            </h3>
          </div>

          <div className="bg-blue-600/10 border border-blue-500/20 py-3.5 px-6 rounded-2xl text-center md:text-right">
            <span className="text-[10px] text-yellow-400 font-black tracking-widest uppercase block font-mono">PROMOÇÃO LIMITADA</span>
            <span className="text-sm sm:text-base font-extrabold mt-0.5 block text-blue-100">
              Liberado automaticamente ao comprar o <strong className="text-white">Pacote Completo</strong>.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
