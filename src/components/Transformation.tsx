import { X, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Transformation() {
  const transitions = [
    {
      before: "Planejamento demorado e estressante de madrugada",
      after: "Aulas completas e planejadas prontas em minutos"
    },
    {
      before: "Alunos desinteressados, no celular ou dispersos",
      after: "Dinâmicas que engajam e geram participação ativa"
    },
    {
      before: "Material didático genérico, caro e desatualizado",
      after: "+100 dinâmicas e 100+ atividades prontas para usar"
    },
    {
      before: "Domingos inteiros perdidos preparando planos de aula",
      after: "Sua paz de espírito e domingos livres com sua família de volta"
    }
  ];

  return (
    <section id="transformation-section" className="py-16 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Sua <span className="text-blue-600">Transformação</span>
          </h2>
          <p className="text-gray-500 font-medium text-base sm:text-lg mt-3 max-w-lg mx-auto">
            Reconhece alguma dessas situações? Veja como sua rotina vai mudar a partir de hoje:
          </p>
        </div>

        {/* Transition List */}
        <div className="space-y-4">
          {transitions.map((item, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300 flex flex-col md:flex-row items-center justify-between gap-4"
            >
              {/* Before State */}
              <div className="flex items-center gap-3 w-full md:w-[45%] text-left">
                <div className="bg-red-50 p-2 rounded-xl text-red-500 shrink-0">
                  <X className="w-5 h-5 stroke-[3px]" />
                </div>
                <span className="text-sm sm:text-base text-gray-500 font-medium line-through decoration-red-300 decoration-2">
                  {item.before}
                </span>
              </div>

              {/* Arrow Indicator */}
              <div className="hidden md:flex bg-blue-50 p-2 rounded-full text-blue-600 animate-pulse shrink-0">
                <ArrowRight className="w-5 h-5" />
              </div>
              <div className="md:hidden flex items-center justify-center text-blue-500 my-1 py-1 px-3 bg-blue-50 rounded-full text-xs font-bold gap-1 self-start ml-12">
                <span>Passa a ser:</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>

              {/* After State */}
              <div className="flex items-center gap-3 w-full md:w-[45%] text-left">
                <div className="bg-emerald-50 p-2 rounded-xl text-emerald-600 shrink-0">
                  <CheckCircle2 className="w-5 h-5 stroke-[2.5px] fill-emerald-50 text-emerald-600" />
                </div>
                <span className="text-sm sm:text-base text-gray-900 font-bold">
                  {item.after}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
