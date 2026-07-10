import { useState } from 'react';
import { clientTestimonials } from '../data/materials';
import { 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  Camera, 
  Phone, 
  Video, 
  MoreVertical, 
  Paperclip, 
  Mic, 
  Smile, 
  Heart, 
  Image as ImageIcon,
  CheckCheck,
  Send
} from 'lucide-react';

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? clientTestimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === clientTestimonials.length - 1 ? 0 : prev + 1));
  };

  const current = clientTestimonials[activeIndex];
  const isInstagram = current.theme === 'instagram';

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
            Prints reais de depoimentos recebidos de professores de todo o Brasil. Navegue pelas conversas abaixo! 💬📚
          </p>
        </div>

        {/* Testimonials Layout: Centered Mobile Simulator Device */}
        <div className="flex flex-col items-center justify-center space-y-6 max-w-sm mx-auto">
          
          {/* Mobile Simulator Device */}
          <div className={`relative w-full max-w-[320px] aspect-[9/18] rounded-[42px] shadow-2xl border-8 border-slate-900 overflow-hidden flex flex-col justify-between transition-colors duration-300 ${
            isInstagram ? 'bg-black text-white' : 'bg-[#efeae2]'
          }`}>
            
            {/* Dynamic Island Mock */}
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-800 absolute right-4"></span>
            </div>

            {/* Simulated Status Bar Info (10:42 / WiFi / 87% icons) */}
            <div className={`pt-1.5 px-6 flex justify-between items-center text-[9px] font-bold z-30 ${
              isInstagram ? 'text-white' : 'text-slate-700'
            }`}>
              <span>{current.timeSender || '10:42'}</span>
              <div className="flex items-center gap-1">
                <span>4G</span>
                <span className="w-2.5 h-1.5 border border-current rounded-xs inline-block relative">
                  <span className="absolute top-0 bottom-0 left-0 right-[20%] bg-current"></span>
                </span>
                <span>87%</span>
              </div>
            </div>

            {/* CHAT HEADER: WhatsApp Style vs Instagram Style */}
            {!isInstagram ? (
              /* --- WHATSAPP HEADER --- */
              <div className="bg-[#075e54] text-white pt-2.5 pb-2.5 px-4 flex items-center justify-between relative z-20 shadow-sm">
                <div className="flex items-center gap-2">
                  <button className="text-white text-sm -ml-1">←</button>
                  <img 
                    src={current.avatarUrl} 
                    alt={current.author} 
                    referrerPolicy="no-referrer"
                    className="w-9 h-9 rounded-full object-cover border border-white/20"
                  />
                  <div className="text-left">
                    <h4 className="text-xs font-bold leading-tight truncate w-32">{current.author}</h4>
                    <span className="text-[9px] text-emerald-100 font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block"></span>
                      online
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3.5 text-white/90">
                  <Video className="w-4 h-4" />
                  <Phone className="w-3.5 h-3.5" />
                  <MoreVertical className="w-4 h-4" />
                </div>
              </div>
            ) : (
              /* --- INSTAGRAM HEADER --- */
              <div className="bg-black text-white pt-2.5 pb-2 px-4 flex items-center justify-between relative z-20 border-b border-zinc-900">
                <div className="flex items-center gap-2">
                  <button className="text-white text-base -ml-1">←</button>
                  <img 
                    src={current.avatarUrl} 
                    alt={current.author} 
                    referrerPolicy="no-referrer"
                    className="w-9 h-9 rounded-full object-cover border border-zinc-800"
                  />
                  <div className="text-left">
                    <h4 className="text-xs font-bold leading-tight truncate w-28">{current.instagramUsername}</h4>
                    <span className="text-[9px] text-zinc-400 font-medium">{current.onlineStatus}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <Phone className="w-4 h-4" />
                  <Video className="w-4 h-4 text-white" />
                  <MoreVertical className="w-4 h-4" />
                </div>
              </div>
            )}

            {/* CHAT BODY */}
            <div className="flex-1 overflow-y-auto px-3.5 py-3.5 flex flex-col justify-end text-[11.5px] leading-relaxed relative">
              
              {/* WhatsApp background wallpaper */}
              {!isInstagram && (
                <div 
                  className="absolute inset-0 bg-repeat opacity-[0.06] pointer-events-none" 
                  style={{ backgroundImage: "url('https://web.whatsapp.com/img/bg-chat-tile-dark_a4be512e31d2d20682f57.png')" }} 
                />
              )}

              {/* Encryption Info notice for WhatsApp */}
              {!isInstagram && (
                <div className="bg-[#ffeecd] border border-amber-200/40 text-[9.5px] text-gray-700 px-3 py-1.5 rounded-lg text-center mx-1.5 mb-4 shadow-sm leading-normal z-10 font-sans">
                  🔒 As mensagens e as ligações são protegidas com a criptografia de ponta a ponta e ficam somente entre você e os participantes desta conversa. Nem mesmo o WhatsApp pode ler ou ouvi-las.
                </div>
              )}

              {/* Instagram Date Separator */}
              {isInstagram && (
                <div className="text-center text-[9.5px] text-zinc-500 my-4 tracking-tight z-10">
                  Hoje {current.timeSender || '16:15'}
                </div>
              )}

              {/* WhatsApp Date Separator */}
              {!isInstagram && (
                <div className="text-center bg-white/70 backdrop-blur-xs text-gray-500 font-medium text-[9px] px-2.5 py-0.5 rounded-md self-center mb-4 shadow-xs font-sans">
                  Hoje
                </div>
              )}

              {/* SENDER MESSAGE (Teacher testimonial feedback) */}
              {!isInstagram ? (
                /* --- WHATSAPP LEFT BUBBLE --- */
                <div className="bg-white rounded-xl rounded-tl-none p-2.5 shadow-xs max-w-[88%] self-start relative text-gray-800 text-left z-10 mb-3 animate-fade-in">
                  <div className="absolute left-[-6px] top-0 w-0 h-0 border-t-[8px] border-t-white border-l-[8px] border-l-transparent" />
                  <p className="font-black text-emerald-800 text-[9px] mb-0.5 uppercase tracking-wider font-mono">
                    {current.role}
                  </p>
                  <p className="text-gray-900 font-medium">{current.text}</p>
                  <span className="text-[8px] text-gray-400 block text-right mt-1 font-mono">
                    {current.timeSender || '10:35'}
                  </span>
                </div>
              ) : (
                /* --- INSTAGRAM RIGHT BUBBLE (Sender/Client) --- */
                <div className="flex flex-col items-end mb-4 z-10">
                  <div className={`rounded-2xl px-3.5 py-2.5 max-w-[85%] text-left text-white shadow-xs relative ${
                    current.id === 'test-5' 
                      ? 'bg-gradient-to-r from-violet-600 to-indigo-600' 
                      : 'bg-[#262626]'
                  }`}>
                    <p className="text-white font-medium text-[11.5px] leading-relaxed">
                      {current.text}
                    </p>
                    {/* Floating Heart reaction */}
                    <div className="absolute right-2 -bottom-2.5 bg-black border border-zinc-800 rounded-full px-1.5 py-0.5 shadow-md flex items-center gap-0.5">
                      <Heart className="w-2.5 h-2.5 text-red-500 fill-red-500" />
                    </div>
                  </div>
                  <span className="text-[8.5px] text-zinc-500 mr-2 mt-2 font-mono">
                    Entregue
                  </span>
                </div>
              )}

              {/* RECEIVER REPLY (Support answer) */}
              {!isInstagram ? (
                /* --- WHATSAPP RIGHT REPLY BUBBLE --- */
                <div className="bg-[#d9fdd3] rounded-xl rounded-tr-none p-2.5 shadow-xs max-w-[88%] self-end relative text-gray-800 text-left z-10 animate-fade-in">
                  <div className="absolute right-[-6px] top-0 w-0 h-0 border-t-[8px] border-t-[#d9fdd3] border-r-[8px] border-r-transparent" />
                  <p className="text-[9px] font-black text-emerald-700 mb-0.5 uppercase tracking-wider font-mono">
                    Suporte Pedagógico
                  </p>
                  <p className="text-gray-900 font-medium">
                    {current.replyText}
                  </p>
                  <div className="flex items-center justify-end gap-1 mt-1">
                    <span className="text-[8px] text-gray-400 font-mono">
                      {current.timeReply || '10:41'}
                    </span>
                    <CheckCheck className="w-3 h-3 text-[#34b7f1]" />
                  </div>
                </div>
              ) : (
                /* --- INSTAGRAM LEFT REPLY BUBBLE --- */
                <div className="flex items-end gap-2 self-start max-w-[88%] z-10 mb-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-700 flex items-center justify-center text-[10px] font-black border border-emerald-500/30 text-white shrink-0">
                    D
                  </div>
                  <div className="bg-[#262626] rounded-2xl px-3.5 py-2.5 text-left text-zinc-100 shadow-xs relative">
                    <p className="font-medium text-[11.5px] leading-relaxed">
                      {current.replyText}
                    </p>
                  </div>
                </div>
              )}

            </div>

            {/* SIMULATED BOTTOM BAR CHAT INPUT */}
            {!isInstagram ? (
              /* --- WHATSAPP CHAT INPUT --- */
              <div className="bg-[#f0f2f5] p-2.5 flex items-center gap-2 border-t border-gray-200 text-slate-400 text-[10px]">
                <div className="flex-1 bg-white rounded-full py-1.5 px-3.5 flex items-center justify-between text-gray-400 shadow-xs">
                  <div className="flex items-center gap-2">
                    <Smile className="w-4 h-4 text-slate-400 shrink-0" />
                    <span className="truncate max-w-28 text-slate-400 font-medium">Mensagem</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400 shrink-0">
                    <Paperclip className="w-4 h-4 rotate-45" />
                    <Camera className="w-4 h-4" />
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#128c7e] text-white flex items-center justify-center shrink-0 shadow-sm cursor-pointer active:scale-90 transition">
                  <Mic className="w-4 h-4" />
                </div>
              </div>
            ) : (
              /* --- INSTAGRAM CHAT INPUT --- */
              <div className="bg-black p-3.5 flex items-center gap-3 border-t border-zinc-900 text-zinc-400">
                <div className="flex-1 border border-zinc-800 rounded-full py-2 px-4 flex items-center justify-between text-[11px] text-zinc-500 bg-zinc-950">
                  <div className="flex items-center gap-2.5 w-full">
                    <Camera className="w-4 h-4 text-zinc-400" />
                    <span className="truncate max-w-28 text-zinc-500 font-medium">Mensagem...</span>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-400 shrink-0">
                    <Mic className="w-4 h-4" />
                    <ImageIcon className="w-4 h-4" />
                    <Smile className="w-4 h-4" />
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Testimonials Slide controls directly beneath the mobile device */}
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
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="bg-white border border-gray-200 hover:bg-slate-50 text-gray-700 p-2.5 rounded-full shadow-md hover:scale-105 active:scale-95 transition cursor-pointer"
                id="testimonial-prev-btn"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <span className="text-[11px] text-gray-500 font-mono font-bold select-none">
                {activeIndex + 1} de {clientTestimonials.length}
              </span>
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
