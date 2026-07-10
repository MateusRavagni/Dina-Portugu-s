import { Layers, GraduationCap, Clock, RefreshCw, ShieldCheck, Zap } from 'lucide-react';

interface FeaturesGridProps {
  onScrollToOffers: () => void;
}

export default function FeaturesGrid({ onScrollToOffers }: FeaturesGridProps) {
  const features = [
    {
      id: 1,
      icon: Layers,
      title: '+100 Dinâmicas Prontas',
      subtitle: 'Prontas para imprimir, editar e aplicar direto em sala.',
      color: 'text-blue-600 bg-blue-50 border-blue-100',
    },
    {
      id: 2,
      icon: GraduationCap,
      title: 'Do Fundamental II ao Ensino Médio',
      subtitle: 'Materiais graduados alinhados às competências da BNCC.',
      color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
    },
    {
      id: 3,
      icon: Clock,
      title: 'Acesso Vitalício',
      subtitle: 'Compre uma única vez e use o acervo para sempre nas suas aulas.',
      color: 'text-amber-600 bg-amber-50 border-amber-100',
    },
    {
      id: 5,
      icon: ShieldCheck,
      title: 'Garantia de 7 Dias',
      subtitle: 'Seu investimento está 100% seguro com risco zero de perda.',
      color: 'text-red-600 bg-red-50 border-red-100',
    },
    {
      id: 6,
      icon: Zap,
      title: 'Entrega Imediata',
      subtitle: 'Acesso liberado automaticamente para download logo após o pagamento.',
      color: 'text-pink-600 bg-pink-50 border-pink-100',
    },
  ];

  return (
    <section id="features-grid-section" className="py-16 px-4 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Tudo o que você precisa <br />
            <span className="text-blue-600 font-black">em um só lugar</span>
          </h2>
          <p className="text-gray-500 font-medium text-sm sm:text-base mt-3 max-w-lg mx-auto">
            Esqueça as pesquisas exaustivas na internet ou as madrugadas em claro. Tenha um ecossistema pedagógico de Língua Portuguesa pronto para o seu dia a dia.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {features.map((feat) => {
            const IconComponent = feat.icon;
            return (
              <div
                key={feat.id}
                className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-blue-100 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
                id={`feature-card-${feat.id}`}
              >
                {/* Visual Icon Container */}
                <div className={`p-4 rounded-2xl border ${feat.color} shrink-0 mb-4 transition-transform group-hover:scale-110`}>
                  <IconComponent className="w-6 h-6 stroke-[2.5]" />
                </div>

                <h3 className="font-extrabold text-gray-900 text-lg leading-snug">
                  {feat.title}
                </h3>
                
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  {feat.subtitle}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quick CTA button for immediate transition */}
        <div className="flex flex-col items-center justify-center gap-2">
          <button
            onClick={onScrollToOffers}
            className="w-full sm:w-auto px-10 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-lg transition-all transform active:scale-95 cursor-pointer"
            id="features-cta-btn"
          >
            Quero Transformar Minhas Aulas
          </button>
        </div>

      </div>
    </section>
  );
}
