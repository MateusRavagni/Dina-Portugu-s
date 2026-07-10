import { ArrowRight, Lock } from 'lucide-react';

interface ActionCtaProps {
  onScrollToOffers: () => void;
}

export default function ActionCta({ onScrollToOffers }: ActionCtaProps) {
  return (
    <section id="action-cta-section" className="py-16 px-4 bg-[#f4f8fc] border-b border-gray-100 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10 space-y-6">
        
        {/* Top subtle text (matches italicized styling of original image) */}
        <p className="text-gray-600 text-base sm:text-xl italic font-semibold tracking-tight">
          Já imaginou ter tudo isso nas suas mãos?
        </p>

        {/* Main Header */}
        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
          Comece a transformar suas aulas <span className="text-blue-600">agora mesmo</span>
        </h2>

        {/* Green high-conversion button */}
        <div className="pt-4 max-w-xs sm:max-w-md mx-auto">
          <button
            onClick={onScrollToOffers}
            className="w-full sm:w-auto px-10 py-4 bg-[#22c55e] hover:bg-[#16a34a] text-white font-black text-base sm:text-lg rounded-2xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:scale-95"
            id="action-cta-btn"
          >
            Ver Ofertas Especiais
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Guarantee and single payment footer row */}
        <div className="flex justify-center items-center gap-2 text-xs sm:text-sm font-bold text-slate-500 pt-2">
          <span className="flex items-center gap-1">
            <Lock className="w-4 h-4 text-amber-500 fill-amber-100 stroke-[2.5]" />
            Garantia de 7 dias
          </span>
          <span>•</span>
          <span>Pagamento único</span>
        </div>

      </div>
    </section>
  );
}
