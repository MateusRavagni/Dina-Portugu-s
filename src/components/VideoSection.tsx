import { Play, Sparkles, Film, ArrowRight } from 'lucide-react';

export default function VideoSection() {
  return (
    <section id="video-demo-section" className="py-16 px-4 bg-slate-50 border-b border-gray-100">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        {/* Section Heading */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
            <Film className="w-3.5 h-3.5" />
            Demonstração Prática
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Veja o nosso material <span className="text-blue-600 font-black">em ação!</span>
          </h2>
          <p className="text-gray-500 font-medium text-sm sm:text-base max-w-xl mx-auto">
            Assista ao vídeo rápido de 5 segundos abaixo para ver a facilidade de organização, os objetivos cumpridos e a qualidade visual de cada pasta do acervo.
          </p>
        </div>

        {/* Video Player Container with Premium Design */}
        <div className="relative mx-auto max-w-3xl bg-white p-3 rounded-2xl shadow-xl border border-gray-200/60 overflow-hidden group">
          
          {/* Subtle decorative background gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/30 to-emerald-50/20 pointer-events-none" />
          
          <div className="relative aspect-[7/3] w-full rounded-xl overflow-hidden bg-slate-950 shadow-inner">
            <video
              className="w-full h-full object-cover"
              controls
              preload="metadata"
              playsInline
              src="/video1.mp4"
              poster="/assets/video-poster.jpg" // optional fallback
              id="acervo-demo-video"
            >
              Seu navegador não suporta a reprodução de vídeos.
            </video>
          </div>
          
          {/* Bottom Video Badge Info */}
          <div className="mt-3 flex items-center justify-between text-xs text-gray-400 px-1 font-mono">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500/20" />
              100% Prático & Alinhado à BNCC
            </span>
            <span>Resolução HD</span>
          </div>
        </div>

        {/* Action callout */}
        <div className="pt-2">
          <p className="text-sm text-gray-500">
            Aulas planejadas, dinâmicas envolventes e materiais prontos para imprimir e aplicar.
          </p>
        </div>

      </div>
    </section>
  );
}
