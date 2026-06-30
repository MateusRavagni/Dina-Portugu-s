import { useState } from 'react';
import { faqList } from '../data/materials';
import { ChevronDown, HelpCircle, ChevronUp } from 'lucide-react';

export default function FAQAccordion() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq-section" className="py-16 px-4 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-600 font-extrabold uppercase tracking-widest text-xs font-mono">Dúvidas Frequentes</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mt-1">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-500 font-medium text-sm sm:text-base mt-2">
            Ainda tem alguma dúvida sobre o material de Língua Portuguesa? Veja as respostas rápidas abaixo:
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {faqList.map((faq) => {
            const isExpanded = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-slate-50 border border-gray-200/60 rounded-2xl overflow-hidden transition-all duration-300"
                id={`faq-item-${faq.id}`}
              >
                {/* Accordion trigger header */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-gray-900 text-sm sm:text-base hover:bg-slate-100/50 transition cursor-pointer"
                  id={`faq-trigger-${faq.id}`}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-blue-500 shrink-0" />
                    <span>{faq.question}</span>
                  </div>
                  
                  <span className="shrink-0 text-gray-400 bg-white p-1 rounded-full shadow-sm">
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-blue-600" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {/* Accordion content body */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isExpanded 
                      ? 'max-h-60 opacity-100 border-t border-gray-100 p-4 sm:p-5 bg-white' 
                      : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
