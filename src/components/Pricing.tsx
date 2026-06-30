import { Mail, Check, X, Shield, ArrowRight, Smartphone, Printer } from 'lucide-react';

interface PricingProps {
  onSelectPackage: (pkgType: 'basic' | 'complete', price: number) => void;
}

export default function Pricing({ onSelectPackage }: PricingProps) {
  return (
    <section id="pricing-section" className="py-16 px-4 bg-white relative">
      {/* Background radial accent */}
      <div className="absolute inset-0 bg-radial from-blue-50/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-blue-600 font-extrabold uppercase tracking-widest text-xs font-mono">Você já viu o que tem lá dentro. Agora...</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mt-1 leading-tight">
            Quanto vale o seu domingo de volta?
          </h2>
          <p className="text-gray-500 font-medium text-sm sm:text-lg mt-3 max-w-xl mx-auto">
            Acesso completo a materiais pedagógicos inovadores por um preço único que cabe perfeitamente no seu bolso.
          </p>

          {/* Quick trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6 text-xs text-blue-800 font-bold">
            <span className="flex items-center gap-1 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100/50">
              <Smartphone className="w-3.5 h-3.5 text-blue-600" />
              ENVIADO NO E-MAIL E WHATSAPP
            </span>
            <span className="flex items-center gap-1 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100/50">
              <Printer className="w-3.5 h-3.5 text-blue-600" />
              PODE SER IMPRESSO E EDITADO
            </span>
            <span className="flex items-center gap-1 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100/50">
              <Shield className="w-3.5 h-3.5 text-blue-600" />
              GARANTIA INCONDICIONAL DE 7 DIAS
            </span>
          </div>
        </div>

        {/* Pricing columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          
          {/* Card 1: Pacote Básico */}
          <div className="bg-white border-2 border-gray-100 rounded-3xl p-6 sm:p-8 hover:border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Header */}
              <div>
                <h4 className="text-xl sm:text-2xl font-black text-gray-900">Pacote Básico</h4>
                <p className="text-xs text-gray-500 mt-1">Essencial para quem quer focar no básico</p>
                
                {/* Pricing Block */}
                <div className="mt-4">
                  <span className="text-sm text-gray-400 line-through">R$ 37,90</span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-3xl sm:text-4xl font-extrabold text-gray-900">R$ 10,00</span>
                    <span className="text-xs text-gray-500 font-semibold">Pagamento único</span>
                  </div>
                  <span className="bg-gray-100 text-gray-700 font-extrabold text-[10px] uppercase px-2 py-0.5 rounded inline-block mt-2 font-mono">
                    Economize R$ 27,90
                  </span>
                </div>
              </div>

              {/* Bullet list */}
              <div className="space-y-3 pt-4 border-t border-gray-100">
                <span className="text-xs font-bold text-gray-400 block uppercase tracking-wider">Recursos Inclusos:</span>
                
                <div className="flex items-start gap-2.5 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 stroke-[3]" />
                  <span><strong>+400 Dinâmicas</strong> de Português Prontas</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 stroke-[3]" />
                  <span><strong>+500 Atividades</strong> para Imprimir</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 stroke-[3]" />
                  <span>Acesso Vitalício ao material básico</span>
                </div>

                <span className="text-xs font-bold text-red-400 block uppercase tracking-wider pt-2">Não Inclusos Neste Pacote:</span>
                
                <div className="flex items-start gap-2.5 text-sm text-gray-400">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>+250 Flashcards de Vocabulário</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-gray-400">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>Slides Didáticos Prontos (Editáveis)</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-gray-400">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>Kit Português Interativo (Jogos)</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-gray-400">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>Guia de Planejamento BNCC</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-gray-400">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>Kit de Aulas de Emergência</span>
                </div>
              </div>

            </div>

            <div className="mt-8 space-y-3">
              <button
                onClick={() => onSelectPackage('basic', 10)}
                className="w-full py-3.5 px-4 bg-gray-900 hover:bg-gray-800 text-white font-extrabold text-sm sm:text-base rounded-xl transition shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                id="buy-basic-btn"
              >
                Quero o pacote básico
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[10px] text-gray-400 text-center">
                Receba o link de download instantaneamente no seu e-mail e WhatsApp.
              </p>
            </div>
          </div>

          {/* Card 2: Pacote Completo (MELHOR ESCOLHA) */}
          <div className="bg-slate-900 border-4 border-blue-500 rounded-3xl p-6 sm:p-8 shadow-2xl relative flex flex-col justify-between overflow-hidden transform md:scale-105">
            {/* Top Badge ribbon */}
            <div className="absolute top-0 right-0 bg-blue-500 text-white font-black text-[9px] uppercase tracking-widest px-4 py-1 rounded-bl-xl font-mono">
              ⭐ MELHOR ESCOLHA ⭐
            </div>

            <div className="space-y-6">
              
              {/* Header */}
              <div>
                <span className="text-yellow-400 text-xs font-bold font-mono">RECOMENDADO</span>
                <h4 className="text-xl sm:text-2xl font-black text-white mt-1">Pacote Completo</h4>
                <p className="text-xs text-slate-400 mt-1">Tudo do Básico + Todos os Bônus + Suporte VIP</p>
                
                {/* Pricing Block */}
                <div className="mt-4">
                  <span className="text-sm text-slate-500 line-through">R$ 127,90</span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400">R$ 27,90</span>
                    <span className="text-xs text-slate-400 font-semibold">Pagamento único</span>
                  </div>
                  <span className="bg-blue-600/30 text-blue-300 border border-blue-500/20 font-extrabold text-[10px] uppercase px-2.5 py-0.5 rounded inline-block mt-2 font-mono animate-pulse">
                    🔥 Economize R$ 100,00
                  </span>
                </div>
              </div>

              {/* Bullet list */}
              <div className="space-y-3 pt-4 border-t border-slate-800">
                <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider">Tudo o que você vai receber:</span>
                
                <div className="flex items-start gap-2.5 text-sm text-slate-200">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 stroke-[3]" />
                  <span><strong>Tudo do Pacote Básico</strong> (+400 Dinâmicas + 500 Atividades)</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-200">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 stroke-[3]" />
                  <span>Atualizações semanais com novos materiais</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-200">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 stroke-[3]" />
                  <span>Suporte Prioritário VIP via WhatsApp</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-200">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 stroke-[3]" />
                  <span>Acesso vitalício aos materiais e futuros bônus</span>
                </div>

                <span className="text-xs font-bold text-yellow-400 block uppercase tracking-wider pt-2">🎁 Todos os Bônus Inclusos (Valor: R$ 97,24 por R$ 0,00):</span>
                
                <div className="flex items-start gap-2.5 text-sm text-slate-300">
                  <Check className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5 stroke-[3]" />
                  <span>🗂️ +250 Flashcards de Vocabulário</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-300">
                  <Check className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5 stroke-[3]" />
                  <span>📽️ Slides Didáticos Prontos</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-300">
                  <Check className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5 stroke-[3]" />
                  <span>🎮 Kit Português Interativo (Jogos)</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-300">
                  <Check className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5 stroke-[3]" />
                  <span>📅 Guia de Planejamento BNCC</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-300">
                  <Check className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5 stroke-[3]" />
                  <span>🚨 Kit de Aulas de Emergência</span>
                </div>
              </div>

            </div>

            <div className="mt-8 space-y-3">
              <button
                onClick={() => onSelectPackage('complete', 27.90)}
                className="w-full py-4 px-4 bg-emerald-500 hover:bg-emerald-600 text-white font-black text-sm sm:text-base rounded-xl transition shadow-xl hover:shadow-emerald-950/20 flex items-center justify-center gap-2 cursor-pointer transform active:scale-95"
                id="buy-complete-btn"
              >
                Quero o Pacote Completo
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[10px] text-slate-400 text-center">
                Receba o link de download instantaneamente no seu e-mail e WhatsApp.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
