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

        {/* Testimonials Layout: Centered WhatsApp Simulator Device */}
        <div className="flex flex-col items-center justify-center space-y-6 max-w-sm mx-auto">
          
          {/* WhatsApp Simulator Device */}
          <div className="relative w-full max-w-[300px] aspect-[9/18] bg-slate-950 rounded-[42px] shadow-2xl border-8 border-slate-900 overflow-hidden flex flex-col justify-between">
            
            {/* Dynamic Island Mock */}
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-800 absolute right-4"></span>
            </div>

            {/* Chat Header */}
            <div className="bg-emerald-600 text-white pt-7 pb-3 px-4 flex items-center gap-2.5 relative z-25">
              <div className="w-9 h-9 rounded-full bg-emerald-700 font-extrabold text-sm flex items-center justify-center shrink-0 border border-emerald-500/30">
                {clientTestimonials[activeIndex].author.charAt(0)}
              </div>
              <div className="flex-1 min-w-0 text-left">
                <h4 className="text-xs font-bold leading-tight truncate">{clientTestimonials[activeIndex].author}</h4>
                <span className="text-[9px] text-emerald-100 font-medium flex items-center gap-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse inline-block"></span>
                  online
                </span>
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 bg-[#efeae2] p-4 overflow-y-auto space-y-3 flex flex-col justify-end text-[11.5px] leading-relaxed relative">
              {/* Chat wallpaper decoration */}
              <div className="absolute inset-0 bg-repeat opacity-5 pointer-events-none" style={{ backgroundImage: "url('https://web.whatsapp.com/img/bg-chat-tile-dark_a4be512e31d2d20682f57.png')" }} />
              
              {/* Recipient Message (Simulating Teacher message) */}
              <div className="bg-white rounded-xl p-3 shadow-sm max-w-[88%] self-start relative text-gray-800 text-left z-10">
                <div className="absolute -left-1.5 top-3 w-0 h-0 border-t-[6px] border-t-white border-l-[6px] border-l-transparent" />
                <p className="font-extrabold text-blue-700 text-[9.5px] mb-0.5 uppercase tracking-wide font-mono">{clientTestimonials[activeIndex].role}</p>
                <p className="text-gray-900 font-medium">"{clientTestimonials[activeIndex].text}"</p>
                <span className="text-[8px] text-gray-400 block text-right mt-1.5 font-mono">{clientTestimonials[activeIndex].date}</span>
              </div>

              {/* Sender Reply (Simulating Support message) */}
              <div className="bg-[#d9fdd3] rounded-xl p-3 shadow-sm max-w-[88%] self-end relative text-gray-800 text-left z-10">
                <div className="absolute -right-1.5 top-3 w-0 h-0 border-t-[6px] border-t-[#d9fdd3] border-r-[6px] border-r-transparent" />
                <p className="text-[9.5px] font-extrabold text-emerald-700 mb-0.5 uppercase tracking-wide font-mono">Suporte Dinâmicas</p>
                <p className="text-gray-900 font-medium">Ficamos extremamente felizes em ler isso, {clientTestimonials[activeIndex].author.split(' ')[0]}! Essa é exatamente a nossa missão: devolver o domingo dos professores com aulas nota 10! 😍📖</p>
                <div className="flex items-center justify-end gap-0.5 mt-1.5">
                  <span className="text-[8px] text-gray-400 font-mono">Agora mesmo</span>
                  <div className="flex text-blue-500 shrink-0">
                    <Check className="w-3 h-3 -mr-1 stroke-[2.5]" />
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                </div>
              </div>

            </div>

            {/* Simulated chat input */}
            <div className="bg-[#f0f2f5] p-2.5 flex items-center justify-between border-t border-gray-200 text-slate-400 text-[10.5px] font-sans">
              <span className="truncate">Escrever mensagem...</span>
              <span className="text-emerald-500 text-xs font-black">Enviar</span>
            </div>

          </div>

          {/* Testimonials Slide controls directly beneath the WhatsApp device */}
          <div className="w-full flex flex-col items-center justify-center gap-4 pt-2">
            
            {/* Indicator Dots */}
            <div className="flex gap-1.5">
              {clientTestimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === idx ? 'w-8 bg-blue-600' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                  id={`dot-btn-${idx}`}
                  aria-label={`Ir para depoimento ${idx + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="bg-white border border-gray-200 hover:bg-slate-50 text-gray-700 p-2.5 rounded-full shadow-md hover:scale-105 active:scale-95 transition cursor-pointer"
                id="testimonial-prev-btn"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={handleNext}
                className="bg-white border border-gray-200 hover:bg-slate-50 text-gray-700 p-2.5 rounded-full shadow-md hover:scale-105 active:scale-95 transition cursor-pointer"
                id="testimonial-next-btn"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
