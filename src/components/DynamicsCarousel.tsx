import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  ZoomIn, 
  X, 
  CheckCircle, 
  Users, 
  Award, 
  Printer
} from 'lucide-react';

// Static assets imported directly to leverage Vite's hashing and bundling engine
// @ts-ignore
import BatalhaAcentosImg from '../assets/images/batalha_acentos_1783873578631.jpg';
// @ts-ignore
import FakeNewsImg from '../assets/images/fake_news_1783873593932.jpg';
// @ts-ignore
import CacaConectivosImg from '../assets/images/caca_conectivos_1783873604352.jpg';
// @ts-ignore
import CorridaRevisaoImg from '../assets/images/corrida_revisao_1783873616306.jpg';
// @ts-ignore
import VocabularioDebateImg from '../assets/images/vocabulario_debate_1783873628850.jpg';
// @ts-ignore
import EscapeRoomImg from '../assets/images/escape_room_1783873639047.jpg';
// @ts-ignore
import MasMaisMasImg from '../assets/images/mas_mais_mas_1783873648921.jpg';
// @ts-ignore
import TribunalAmbientalImg from '../assets/images/tribunal_ambiental_1783873661281.jpg';
// @ts-ignore
import InfograficoImg from '../assets/images/infografico_1783873682082.jpg';
// @ts-ignore
import MemeDayImg from '../assets/images/meme_day_1783873694939.jpg';
// @ts-ignore
import SarauPoeticoImg from '../assets/images/sarau_poetico_1783873704661.jpg';
// @ts-ignore
import RedacaoEnemImg from '../assets/images/redacao_enem_1783874071671.jpg';
// @ts-ignore
import VanguardasEuropeiasImg from '../assets/images/vanguardas_europeias_1783874083732.jpg';
// @ts-ignore
import TeatroForumImg from '../assets/images/teatro_forum_1783874343228.jpg';
// @ts-ignore
import PonteMacarraoImg from '../assets/images/ponte_macarrao_1783874353666.jpg';
// @ts-ignore
import BatalhaNavalEquacoesImg from '../assets/images/batalha_naval_equacoes_1783874365989.jpg';
// @ts-ignore
import RegenciaVerbalImg from '../assets/images/regencia_verbal_masterclass_1783874375231.jpg';

interface DynamicItem {
  id: number;
  title: string;
  image: string;
  category: string;
  themeColor: string;
}

const dynamicsList: DynamicItem[] = [
  { id: 1, title: "Batalha dos Acentos", image: BatalhaAcentosImg, category: "Jogo de Tabuleiro • Gramática", themeColor: "border-purple-200 shadow-purple-100/50 hover:shadow-purple-200" },
  { id: 14, title: "Teatro-Fórum", image: TeatroForumImg, category: "Dinâmica • Teatro & Empatia (Ensino Médio)", themeColor: "border-amber-200 shadow-amber-100/50 hover:shadow-amber-200" },
  { id: 2, title: "Verdade ou Fake News", image: FakeNewsImg, category: "Dinâmica • Leitura Crítica", themeColor: "border-sky-200 shadow-sky-100/50 hover:shadow-sky-200" },
  { id: 3, title: "Caça aos Conectivos", image: CacaConectivosImg, category: "Dinâmica • Coesão & Sintaxe", themeColor: "border-amber-200 shadow-amber-100/50 hover:shadow-amber-200" },
  { id: 15, title: "Ponte de Macarrão", image: PonteMacarraoImg, category: "Desafio Maker • Física (Ensino Médio)", themeColor: "border-orange-200 shadow-orange-100/50 hover:shadow-orange-200" },
  { id: 12, title: "Redação Nota 1000", image: RedacaoEnemImg, category: "Oficina • Redação ENEM (Ensino Médio)", themeColor: "border-red-200 shadow-red-100/50 hover:shadow-red-200" },
  { id: 4, title: "Corrida de Revisão", image: CorridaRevisaoImg, category: "Desafio • Ortografia & Sintaxe", themeColor: "border-blue-200 shadow-blue-100/50 hover:shadow-blue-200" },
  { id: 16, title: "Batalha Naval das Equações", image: BatalhaNavalEquacoesImg, category: "Jogo • Matemática (Ensino Médio)", themeColor: "border-emerald-200 shadow-emerald-100/50 hover:shadow-emerald-200" },
  { id: 5, title: "Vocabulário & Expressão", image: VocabularioDebateImg, category: "Plano de Aula • Linguagem", themeColor: "border-rose-200 shadow-rose-100/50 hover:shadow-rose-200" },
  { id: 6, title: "Escape Room da Gramática", image: EscapeRoomImg, category: "Desafio • Resolução de Problemas", themeColor: "border-indigo-200 shadow-indigo-100/50 hover:shadow-indigo-200" },
  { id: 17, title: "Regência Verbal", image: RegenciaVerbalImg, category: "Masterclass • Português (Ensino Médio)", themeColor: "border-indigo-200 shadow-indigo-100/50 hover:shadow-indigo-200" },
  { id: 13, title: "Vanguardas Europeias", image: VanguardasEuropeiasImg, category: "Estudo • Literature & Arte (Ensino Médio)", themeColor: "border-violet-200 shadow-violet-100/50 hover:shadow-violet-200" },
  { id: 7, title: "Jogo do Mas, Mais, Más", image: MasMaisMasImg, category: "Dinâmica • Ortografia Prática", themeColor: "border-emerald-200 shadow-emerald-100/50 hover:shadow-emerald-200" },
  { id: 8, title: "Tribunal Ambiental", image: TribunalAmbientalImg, category: "Dinâmica • Júri Simulado", themeColor: "border-teal-200 shadow-teal-100/50 hover:shadow-teal-200" },
  { id: 9, title: "Criação de Infográfico", image: InfograficoImg, category: "Dinâmica • Gêneros Multimodais", themeColor: "border-cyan-200 shadow-cyan-100/50 hover:shadow-cyan-200" },
  { id: 10, title: "Meme Day na Escola", image: MemeDayImg, category: "Análise • Gêneros Digitais", themeColor: "border-orange-200 shadow-orange-100/50 hover:shadow-orange-200" },
  { id: 11, title: "Sarau Poético", image: SarauPoeticoImg, category: "Dinâmica • Literatura & Arte", themeColor: "border-fuchsia-200 shadow-fuchsia-100/50 hover:shadow-fuchsia-200" },
];

export default function DynamicsCarousel() {
  const [selectedImage, setSelectedImage] = useState<DynamicItem | null>(null);

  // Double the list exactly once to create a flawless infinite marquee loop
  const doubledList = [...dynamicsList, ...dynamicsList];

  return (
    <section id="dynamics-visual-carousel" className="py-16 px-4 bg-slate-50 border-y border-slate-100 overflow-hidden">
      
      {/* Dynamic Keyframes for flawless continuous horizontal marquee */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .animate-marquee-continuous {
          animation: marquee 55s linear infinite;
        }
        .pause-hover:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 fill-blue-500/20" />
            Amostra Visual do Acervo
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight">
            Nossas Dinâmicas <span className="text-blue-600">por Dentro</span>
          </h2>
          <p className="text-gray-500 font-medium text-sm sm:text-base max-w-2xl mx-auto">
            Role a tela ou passe o mouse abaixo para conferir o visual incrível dos nossos materiais pedagógicos. Cartazes ricos, lúdicos e prontos para aplicar.
          </p>
          

        </div>

        {/* Carousel Continuous Viewport */}
        <div className="relative w-full">
          
          {/* Premium Gradient Masks for fade-in & fade-out effects at edges */}
          <div className="absolute inset-y-0 left-0 w-8 sm:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-8 sm:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

          {/* Marquee Track Container */}
          <div className="overflow-hidden py-4 px-1 rounded-3xl">
            <div className="flex gap-2 animate-marquee-continuous pause-hover w-max">
              {doubledList.map((item, index) => (
                <div 
                  key={`${item.id}-${index}`}
                  className="w-[180px] sm:w-[220px] shrink-0"
                >
                  {/* Poster Card */}
                  <div 
                    onClick={() => setSelectedImage(item)}
                    className={`group relative aspect-[3/4] bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-lg ${item.themeColor} transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01] cursor-pointer flex flex-col`}
                    id={`poster-card-${item.id}-${index}`}
                  >
                    {/* Main Image content */}
                    <div className="relative w-full h-full overflow-hidden bg-slate-950 flex-1">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Zoom Indicator overlay */}
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white/90 backdrop-blur-sm text-slate-800 rounded-full px-4 py-2 flex items-center gap-2 text-xs font-bold shadow-xl scale-90 group-hover:scale-100 transition-transform duration-300">
                          <ZoomIn className="w-4 h-4 text-blue-600" />
                          Ampliar Cartaz
                        </div>
                      </div>
                    </div>

                    {/* Quick description text strip */}
                    <div className="bg-white p-4 border-t border-slate-50 flex flex-col justify-between h-20">
                      <span className="text-[10px] font-black text-blue-600 uppercase tracking-wider mb-1 leading-none truncate">
                        {item.category}
                      </span>
                      <h3 className="text-sm font-bold text-slate-800 tracking-tight leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Horizontal Trust Seals */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 text-center border-t border-slate-200/60 max-w-3xl mx-auto text-xs text-slate-400 font-medium">
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            <span>Alinhado 100% à BNCC</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-blue-500" />
            <span>Foco em Atividades Práticas</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-amber-500" />
            <span>Material de Altíssima Qualidade</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Printer className="w-4 h-4 text-purple-500" />
            <span>Pronto para Impressão PDF</span>
          </div>
        </div>

      </div>

      {/* Lightbox Modal / Popup displaying poster in full dimensions */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative max-w-md w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-colors z-10 border border-white/10 cursor-pointer"
                aria-label="Fechar ampliação"
                id="close-lightbox-btn"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Full Image frame */}
              <div className="aspect-[3/4] bg-slate-950 relative w-full overflow-hidden">
                <img 
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Lightbox footer text */}
              <div className="p-6 bg-white space-y-1 border-t border-slate-50">
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest block">
                  {selectedImage.category}
                </span>
                <h3 className="text-xl font-black text-slate-800 tracking-tight">
                  {selectedImage.title}
                </h3>
                <p className="text-xs font-semibold text-slate-400">
                  Amostra em alta resolução de acordo com os padrões visuais pedagógicos do acervo completo.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
