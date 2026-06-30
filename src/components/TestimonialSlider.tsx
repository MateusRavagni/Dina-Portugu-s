import { useState } from 'react';
import { clientTestimonials } from '../data/materials';
import { ChevronLeft, ChevronRight, MessageSquare, Check, ArrowRight } from 'lucide-react';

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? clientTestimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === clientTestimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials-section" className="py-16 px-4 bg-slate-50 border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-blue-600 font-extrabold uppercase tracking-widest text-xs font-mono">Feedback Real</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mt-1">
            O que dizem nossos clientes
          </h2>
          <p className="text-gray-500 font-medium text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Prints reais de depoimentos e entregas do material. Nosso suporte pedagógico está sempre à sua disposição via WhatsApp! 💙
          </p>
        </div>

        {/* Testimonials Layout: Split screen or Sliding WhatsApp device */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: WhatsApp Simulator Device (Highly Visual!) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[280px] aspect-[9/18] bg-slate-950 rounded-[36px] shadow-2xl border-8 border-slate-900 overflow-hidden flex flex-col justify-between">
              
              {/* Dynamic Island Mock */}
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-28 h-4.5 bg-black rounded-full z-30 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-800 absolute right-4"></span>
              </div>

              {/* Chat Header */}
              <div className="bg-emerald-600 text-white pt-6 pb-2.5 px-3 flex items-center gap-2 relative z-25">
                <div className="w-8 h-8 rounded-full bg-emerald-700 font-extrabold text-xs flex items-center justify-center shrink-0 border border-emerald-500/30">
                  {clientTestimonials[activeIndex].author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xs font-bold leading-tight">{clientTestimonials[activeIndex].author}</h4>
                  <span className="text-[9px] text-emerald-100 font-medium flex items-center gap-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse inline-block"></span>
                    online agora
                  </span>
                </div>
              </div>

              {/* Chat Body */}
              <div className="flex-1 bg-[#efeae2] p-3 overflow-y-auto space-y-2.5 flex flex-col justify-end text-[11px] leading-relaxed relative">
                {/* Chat wallpaper decoration */}
                <div className="absolute inset-0 bg-repeat opacity-5 pointer-events-none" style={{ backgroundImage: "url('https://web.whatsapp.com/img/bg-chat-tile-dark_a4be512e31d2d20682f57.png')" }} />
                
                {/* Recipient Message (Simulating Teacher message) */}
                <div className="bg-white rounded-lg p-2.5 shadow-sm max-w-[85%] self-start relative text-gray-800 z-10">
                  <div className="absolute -left-1.5 top-2.5 w-0 h-0 border-t-[6px] border-t-white border-l-[6px] border-l-transparent" />
                  <p className="font-semibold text-blue-700 text-[10px] mb-0.5">{clientTestimonials[activeIndex].role}</p>
                  <p>{clientTestimonials[activeIndex].text}</p>
                  <span className="text-[8px] text-gray-400 block text-right mt-1 font-mono">{clientTestimonials[activeIndex].date}</span>
                </div>

                {/* Sender Reply (Simulating Support message) */}
                <div className="bg-[#d9fdd3] rounded-lg p-2.5 shadow-sm max-w-[85%] self-end relative text-gray-800 z-10">
                  <div className="absolute -right-1.5 top-2.5 w-0 h-0 border-t-[6px] border-t-[#d9fdd3] border-r-[6px] border-r-transparent" />
                  <p className="text-[10px] font-bold text-emerald-700 mb-0.5">Suporte Dinâmicas</p>
                  <p>Ficamos extremamente felizes em ler isso, {clientTestimonials[activeIndex].author.split(' ')[0]}! Essa é exatamente a nossa missão: devolver o domingo dos professores com aulas nota 10! 😍📖</p>
                  <div className="flex items-center justify-end gap-0.5 mt-1">
                    <span className="text-[8px] text-gray-400 font-mono">Agora mesmo</span>
                    <div className="flex text-blue-500 shrink-0">
                      <Check className="w-3 h-3 -mr-1" />
                      <Check className="w-3 h-3" />
                    </div>
                  </div>
                </div>

              </div>

              {/* Simulated chat input */}
              <div className="bg-[#f0f2f5] p-2 flex items-center justify-between border-t border-gray-200 text-slate-400 text-[10px] font-sans">
                <span className="truncate">Escrever mensagem...</span>
                <span className="text-emerald-500 text-xs font-bold">Enviar</span>
              </div>

            </div>
          </div>

          {/* Right Column: Normal Testimonial Card & controls */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-xl relative">
              <MessageSquare className="w-12 h-12 text-blue-100 absolute top-4 right-6 stroke-[1.5]" />
              
              <p className="text-gray-700 text-base sm:text-lg italic leading-relaxed relative z-10 font-medium">
                "{clientTestimonials[activeIndex].text}"
              </p>

              <div className="mt-6 pt-5 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-extrabold text-gray-900 text-base sm:text-lg">
                    {clientTestimonials[activeIndex].author}
                  </h4>
                  <p className="text-xs text-blue-600 font-semibold mt-0.5">
                    {clientTestimonials[activeIndex].role}
                  </p>
                  <p className="text-xs text-gray-400">
                    {clientTestimonials[activeIndex].school}
                  </p>
                </div>

                <div className="bg-blue-50 px-3.5 py-1.5 rounded-xl border border-blue-100/50 self-start text-xs font-mono font-bold text-blue-700">
                  {clientTestimonials[activeIndex].date}
                </div>
              </div>

            </div>

            {/* Testimonials Slide controls */}
            <div className="flex items-center justify-between">
              <div className="flex gap-1">
                {clientTestimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeIndex === idx ? 'w-8 bg-blue-600' : 'w-2.5 bg-gray-200'
                    }`}
                    id={`dot-btn-${idx}`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={handlePrev}
                  className="bg-white border border-gray-100 hover:bg-gray-50 text-gray-700 p-2.5 rounded-full shadow-md hover:scale-105 active:scale-95 transition"
                  id="testimonial-prev-btn"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="bg-white border border-gray-100 hover:bg-gray-50 text-gray-700 p-2.5 rounded-full shadow-md hover:scale-105 active:scale-95 transition"
                  id="testimonial-next-btn"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
