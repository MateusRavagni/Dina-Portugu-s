import { useState, useEffect } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import Transformation from './components/Transformation';
import DynamicsCarousel from './components/DynamicsCarousel';
import FeaturesGrid from './components/FeaturesGrid';
import TestimonialSlider from './components/TestimonialSlider';
import Pricing from './components/Pricing';
import FAQAccordion from './components/FAQAccordion';
import CheckoutModal from './components/CheckoutModal';
import { CheckoutState } from './types';
import { 
  ShieldCheck, 
  Heart, 
  BookOpen, 
  Check, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';

export default function App() {
  const [checkoutState, setCheckoutState] = useState<CheckoutState>({
    isOpen: false,
    packageType: 'complete',
    price: 27.90
  });



  const scrollToPricing = () => {
    const pricing = document.getElementById('pricing-section');
    if (pricing) {
      pricing.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCheckout = (pkgType: 'basic' | 'complete', price: number) => {
    setCheckoutState({
      isOpen: true,
      packageType: pkgType,
      price: price
    });
  };

  const handleCloseCheckout = () => {
    setCheckoutState(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 antialiased selection:bg-blue-100 selection:text-blue-900">
      
      {/* 1. Rolling Announcement Bar (Special Offer Timer + Notifications) */}
      <AnnouncementBar />

      {/* 2. Hero Header & Video Demo Slider */}
      <Header onScrollToOffers={scrollToPricing} />

      {/* 3. Before/After Transformation list */}
      <Transformation />

      {/* 4. Animated Pedagogical Dynamics Carousel */}
      <DynamicsCarousel />

      {/* 5. Tudo o que você precisa em um só lugar */}
      <FeaturesGrid onScrollToOffers={scrollToPricing} />

      {/* 6. Real WhatsApp Reviews Device & Testimonial Slider */}
      <TestimonialSlider />

      {/* 8. Pricing Section */}
      <Pricing onSelectPackage={handleOpenCheckout} />

      {/* 7. Guaranteed Return Banner */}
      <section id="guarantee-section" className="py-16 px-4 bg-slate-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-blue-100 shadow-xl rounded-3xl p-6 sm:p-10 relative text-center">
            
            {/* Top Seal Badge */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white p-4 rounded-full shadow-lg border-4 border-white z-10">
              <ShieldCheck className="w-8 h-8" />
            </div>

            <div className="pt-8 sm:pt-10 space-y-4 max-w-2xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900">
                Garantia Incondicional de 7 Dias
              </h3>
              
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Se por qualquer motivo você não ficar satisfeito com o material de Língua Portuguesa, basta enviar um e-mail em até 7 dias que devolvemos <strong>100% do seu dinheiro</strong>. Sem perguntas, sem burocracia e sem complicação. O risco é todo nosso!
              </p>

              {/* Badges checklist */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-4 text-xs font-bold text-emerald-700">
                <span className="flex items-center gap-1">
                  <Check className="w-4 h-4 stroke-[3]" /> REEMBOLSO TOTAL
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-4 h-4 stroke-[3]" /> SEM PERGUNTAS
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-4 h-4 stroke-[3]" /> PROCESSO RÁPIDO
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. FAQ Accordions */}
      <FAQAccordion />

      {/* 10. Bottom CTA Section (High Conversion Hook) */}
      <section id="bottom-hook-section" className="py-20 px-4 bg-blue-600 text-white text-center relative overflow-hidden">
        {/* Organic circles background design */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
          <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-white blur-xl" />
          <div className="absolute -bottom-12 -right-12 w-80 h-80 rounded-full bg-white blur-xl" />
        </div>

        <div className="max-w-3xl mx-auto relative z-10 space-y-6">
          <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-black uppercase tracking-widest bg-white/15 px-3 py-1.5 rounded-full border border-white/10">
            <BookOpen className="w-3.5 h-3.5" />
            Vagas Promocionais Próximas ao Fim
          </span>
          
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight uppercase">
            Professor(a), Transforme Suas Aulas Hoje Mesmo!
          </h2>
          
          <p className="text-sm sm:text-lg text-blue-100 max-w-xl mx-auto leading-relaxed">
            Pare de perder domingos preparando materiais e listas de exercícios. Comece hoje a usar dinâmicas que os alunos amam e ganhe seu merecido descanso de volta.
          </p>

          <div className="pt-4 max-w-md mx-auto space-y-3">
            <button
              onClick={scrollToPricing}
              className="w-full py-4 px-8 bg-emerald-500 hover:bg-emerald-400 text-white font-black text-base sm:text-lg rounded-xl transition shadow-xl hover:shadow-emerald-900/30 flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
              id="bottom-cta-btn"
            >
              Quero economizar tempo agora
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <div className="flex justify-center items-center gap-4 text-[10px] sm:text-xs font-bold text-blue-100/90">
              <span className="flex items-center gap-0.5">✅ Acesso imediato</span>
              <span>•</span>
              <span className="flex items-center gap-0.5">✅ Garantia de 7 dias</span>
              <span>•</span>
              <span className="flex items-center gap-0.5">✅ Sem mensalidade</span>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Footer with Security Seals */}
      <footer id="app-footer" className="py-12 px-4 bg-slate-900 text-slate-400 text-xs sm:text-sm font-sans border-t border-slate-800">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-1 text-white font-extrabold text-base">
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>Dinâmicas de Português na Prática</span>
            </div>
            <p className="text-slate-500">
              © 2026 Dinâmicas de Português. Todos os direitos reservados.
            </p>
            <p className="text-[10px] text-slate-600">
              Este produto não possui vínculo de parceria oficial com o Google Drive, WhatsApp Inc, ou organizações BNCC governamentais. Apenas alinha-se aos parâmetros pedagógicos vigentes.
            </p>
          </div>

          {/* Security icons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-[11px] sm:text-xs text-slate-500 shrink-0 font-mono font-medium">
            <div className="flex items-center gap-1.5 border border-slate-800 bg-slate-950/40 p-2.5 rounded-xl">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
              <span>Segurança Garantida por SSL</span>
            </div>
            <div className="flex items-center gap-1.5 border border-slate-800 bg-slate-950/40 p-2.5 rounded-xl">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
              <span>Dados 100% Protegidos</span>
            </div>
          </div>
        </div>
      </footer>



      {/* 13. Interactive Checkout Drawer/Modal Dialog */}
      <CheckoutModal 
        state={checkoutState}
        onClose={handleCloseCheckout}
      />

    </div>
  );
}
