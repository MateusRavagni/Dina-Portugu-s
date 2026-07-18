import { Check, X, Shield, Smartphone, Printer } from 'lucide-react';

interface PricingProps {
  onSelectPackage: (pkgType: 'basic' | 'complete', price: number) => void;
}

export default function Pricing({ onSelectPackage }: PricingProps) {
  return (
    <section id="pricing-section" className="py-20 px-4 bg-white relative border-b border-gray-100">
      {/* Background radial accent */}
      <div className="absolute inset-0 bg-radial from-blue-50/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-black uppercase tracking-widest text-xs font-mono">Você já viu o que tem lá dentro. Agora...</p>
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight mt-2 leading-tight">
            Quanto vale o seu domingo de volta?
          </h2>
          <p className="text-gray-500 font-medium text-sm sm:text-lg mt-3 max-w-xl mx-auto leading-relaxed">
            Acesso completo a materiais pedagógicos inovadores por um preço único que cabe perfeitamente no seu bolso.
          </p>

          {/* Quick trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-xs text-blue-800 font-extrabold">
            <span className="flex items-center gap-1.5 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100/50">
              <Smartphone className="w-3.5 h-3.5 text-blue-600" />
              ACESSO E DOWNLOAD IMEDIATO
            </span>
            <span className="flex items-center gap-1.5 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100/50">
              <Printer className="w-3.5 h-3.5 text-blue-600" />
              PODE SER IMPRESSO E EDITADO
            </span>
            <span className="flex items-center gap-1.5 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100/50">
              <Shield className="w-3.5 h-3.5 text-blue-600" />
              GARANTIA INCONDICIONAL DE 7 DIAS
            </span>
          </div>
        </div>

        {/* Pricing columns (Two perfectly stylized cards mimicking the reference image) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          
          {/* Card 1: Pacote Básico */}
          <div 
            className="bg-white border border-gray-200/60 rounded-[32px] p-6 sm:p-8 hover:border-blue-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            id="pricing-card-basic"
          >
            <div>
              {/* Header & Pricing */}
              <div className="text-center pb-6 border-b border-slate-100">
                <h4 className="text-2xl sm:text-3xl font-black text-gray-900">Pacote Básico</h4>
                
                <div className="mt-4">
                  <span className="text-sm text-gray-400 line-through font-bold">R$ 37,90</span>
                  <div className="text-4xl sm:text-5xl font-black text-[#22c55e] tracking-tight mt-0.5">R$ 10</div>
                  <span className="text-xs text-gray-400 font-bold block mt-1">Pagamento Único</span>
                  
                  <div className="mt-2.5">
                    <span className="bg-[#effaf3] text-[#16a34a] font-extrabold text-[11px] uppercase px-3 py-1 rounded-full border border-emerald-100/50 font-mono">
                      ECONOMIZE R$ 27,90
                    </span>
                  </div>
                </div>
              </div>

              {/* Included features list */}
              <div className="space-y-4 py-6">
                <div className="flex items-center gap-2.5 text-[14px] font-bold text-gray-800 leading-snug">
                  <Check className="w-4 h-4 text-[#22c55e] shrink-0 stroke-[3]" />
                  <span>+50 Dinâmicas de Português Prontas</span>
                </div>
                <div className="flex items-center gap-2.5 text-[14px] font-bold text-gray-800 leading-snug">
                  <Check className="w-4 h-4 text-[#22c55e] shrink-0 stroke-[3]" />
                  <span>+50 Atividades Para Imprimir</span>
                </div>
                <div className="flex items-center gap-2.5 text-[14px] font-extrabold text-[#16a34a]">
                  <span className="text-lg leading-none shrink-0 font-black">∞</span>
                  <span>Acesso Vitalício</span>
                </div>
              </div>

              {/* Excluded features list */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-[11px] font-black text-gray-400 block uppercase tracking-wider mb-3">
                  NÃO INCLUSOS NESTE PACOTE:
                </span>
                <div className="space-y-3">
                  {[
                    'Dinâmicas Prontas para Aula',
                    'Guia de Planejamento'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-[13px] text-gray-300 font-semibold select-none">
                      <X className="w-3.5 h-3.5 text-gray-300 shrink-0 stroke-[2.5]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom action bar */}
            <div>
              {/* Delivery info block */}
              <div className="bg-[#f0fdf4] border border-emerald-100/50 rounded-2xl p-3 flex items-start gap-2.5 text-left mb-4 mt-8">
                <div className="p-1 rounded bg-emerald-100 text-emerald-600 shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
                <p className="text-[11px] leading-relaxed text-emerald-800 font-bold">
                  Receba o link para download imediato dos arquivos em formato PDF.
                </p>
              </div>

              <a
                href="https://ggcheckout.app/checkout/v5/dnut1AeeoTVMqUSFw58h"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 px-4 bg-[#22c55e] hover:bg-[#16a34a] text-white font-black text-base sm:text-lg rounded-2xl shadow-lg hover:shadow-emerald-500/20 transition-all duration-200 cursor-pointer transform active:scale-95 text-center"
                id="buy-basic-btn"
              >
                Quero o pacote básico
              </a>
            </div>
          </div>

          {/* Card 2: Pacote Completo */}
          <div 
            className="bg-white border-[3px] border-[#3b82f6] rounded-[32px] relative overflow-hidden flex flex-col justify-between"
            id="pricing-card-complete"
          >
            {/* Ribbon on Top */}
            <div className="bg-[#f97316] w-full py-2 text-center text-white text-xs sm:text-[13px] font-black uppercase tracking-widest flex items-center justify-center gap-1 select-none">
              <span>⭐</span>
              <span>MELHOR ESCOLHA</span>
              <span>⭐</span>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                {/* Header & Pricing */}
                <div className="text-center pb-6 border-b border-slate-100">
                  <h4 className="text-2xl sm:text-3xl font-black text-gray-900">Pacote Completo</h4>
                  
                  <div className="mt-4">
                    <span className="text-sm text-gray-400 line-through font-bold">R$ 127,90</span>
                    <div className="text-4xl sm:text-5xl font-black text-[#22c55e] tracking-tight mt-0.5">R$ 27,90</div>
                    <span className="text-xs text-gray-400 font-bold block mt-1">Pagamento Único</span>
                    
                    <div className="mt-2.5">
                      <span className="bg-[#effaf3] text-[#16a34a] font-extrabold text-[11px] uppercase px-3.5 py-1 rounded-full border border-emerald-100/50 font-mono">
                        🔥 ECONOMIZE R$ 100,00
                      </span>
                    </div>
                  </div>
                </div>

                {/* Included features list */}
                <div className="space-y-4 py-6">
                  <div className="flex items-start gap-2.5 text-[14px] font-bold text-gray-800 leading-snug">
                    <Check className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5 stroke-[3]" />
                    <span>Tudo do Pacote Básico (+50 Dinâmicas + 50 Atividades) + 50 Atividades Bônus + Bônus Exclusivos</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-[14px] font-extrabold text-emerald-600">
                    <span className="text-lg leading-none shrink-0 font-black">∞</span>
                    <span>Acesso vitalício ao material principal e bônus</span>
                  </div>
                </div>

                {/* Blue custom Box for Exclusive Bonuses */}
                <div className="bg-[#eff6ff] rounded-[24px] p-4 border border-blue-200/60 text-left space-y-3 mb-4">
                  <div className="text-[12px] font-black text-blue-800 flex items-center gap-1.5 uppercase tracking-wide">
                    <span>🎁</span>
                    <span>BÔNUS EXCLUSIVOS (VALOR: R$ 56,70 POR R$ 0,00)</span>
                  </div>
                  
                  <div className="space-y-2">
                    {[
                      { title: 'Dinâmicas Prontas para Aula', emoji: '📽️' },
                      { title: 'Guia de Planejamento', emoji: '📅' }
                    ].map((bonus, bIdx) => (
                      <div 
                        key={bIdx} 
                        className="bg-white rounded-xl py-2.5 px-3.5 border border-blue-100/40 flex items-center gap-2.5 text-[13px] font-bold text-slate-700 shadow-sm"
                      >
                        <span className="text-base leading-none">{bonus.emoji}</span>
                        <span>{bonus.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom action bar */}
              <div>
                {/* Delivery info block */}
                <div className="bg-[#f0fdf4] border border-emerald-100/50 rounded-2xl p-3 flex items-start gap-2.5 text-left mb-4 mt-8">
                  <div className="p-1 rounded bg-emerald-100 text-emerald-600 shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </div>
                  <p className="text-[11px] leading-relaxed text-emerald-800 font-bold">
                    Receba o link para download imediato dos arquivos em formato PDF.
                  </p>
                </div>

                <a
                  href="https://ggcheckout.app/checkout/v5/js0LEyuje4eXmc4N0w60"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 px-4 bg-[#22c55e] hover:bg-[#16a34a] text-white font-black text-base sm:text-lg rounded-2xl shadow-lg hover:shadow-emerald-500/20 transition-all duration-200 cursor-pointer transform active:scale-95 text-center"
                  id="buy-complete-btn"
                >
                  Quero o Pacote Completo
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
