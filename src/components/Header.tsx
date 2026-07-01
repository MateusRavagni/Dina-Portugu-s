import { useState, useEffect } from 'react';
import { Star, Play, Pause, ChevronRight, Folder, FileText, CheckCircle2 } from 'lucide-react';

interface HeaderProps {
  onScrollToOffers: () => void;
}

export default function Header({ onScrollToOffers }: HeaderProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [videoProgress, setVideoProgress] = useState(0);

  const slides = [
    {
      title: "Como funciona o seu novo acervo?",
      subtitle: "Todas as pastas organizadas no Google Drive para download imediato",
      visual: "drive",
      highlight: "Praticidade e Organização"
    },
    {
      title: "Material 100% Editável e Imprimível",
      subtitle: "Arquivos em Word (editável) e PDF de alta qualidade prontos para imprimir",
      visual: "activities",
      highlight: "+500 Exercícios Práticos"
    },
    {
      title: "Aulas lúdicas e engajadoras",
      subtitle: "Dinâmicas passo a passo que fazem os alunos amarem gramática e literatura",
      visual: "games",
      highlight: "Engajamento Real em Sala"
    },
    {
      title: "Planejamento BNCC completo",
      subtitle: "Modelos com códigos de competência prontos para preencher e assinar",
      visual: "bncc",
      highlight: "Economize 10+ horas semanais"
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setVideoProgress((prev) => {
          if (prev >= 100) {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
            return 0;
          }
          return prev + 1.5;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleSlideSelect = (index: number) => {
    setCurrentSlide(index);
    setVideoProgress(0);
  };

  return (
    <header id="app-header" className="relative bg-gradient-to-b from-blue-50/70 via-white to-white py-10 sm:py-16 px-4 overflow-hidden">
      {/* Background organic shape */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] aspect-square rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute bottom-[20%] right-[-10%] w-[45%] aspect-square rounded-full bg-orange-100/50 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Approved Stamp Badge */}
        <div className="inline-flex items-center gap-1.5 bg-blue-50/80 backdrop-blur-sm border border-blue-100/80 px-4 py-1.5 rounded-full shadow-sm hover:scale-105 transition-transform duration-300 mb-6">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
          </div>
          <span className="text-xs sm:text-sm font-semibold text-gray-800">
            Aprovado por <span className="text-blue-600 font-bold">1.250+ professores</span> de Português
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.15] max-w-3xl mx-auto">
          Professor(a), <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">economize tempo</span> e tenha aulas incríveis <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">prontas em minutos</span>
        </h1>

        {/* Hero Subtitle */}
        <p className="text-base sm:text-xl text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
          Chega de perder horas planejando. <strong className="text-gray-900 font-semibold">+400 dinâmicas</strong>, atividades práticas, slides editáveis e recursos lúdicos de português (Ensino Fundamental II e Médio) prontos para aplicar.
        </p>

        {/* Action button inside Hero */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onScrollToOffers}
            className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-base sm:text-lg rounded-xl shadow-lg hover:shadow-emerald-100 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
            id="hero-cta-btn"
          >
            Quero Acessar Agora
            <ChevronRight className="w-5 h-5" />
          </button>
          
          <span className="text-xs text-gray-500 font-mono flex items-center gap-1">
            🔒 Compra Segura • Garantia de 7 Dias
          </span>
        </div>

        {/* Video Prompt */}
        <div className="mt-12 mb-4 flex items-center justify-center gap-1.5 text-blue-600 font-bold text-sm sm:text-base animate-bounce">
          <span>👇 Assista à demonstração do material</span>
        </div>

        {/* Interactive Video Player */}
        <div 
          id="demo-video-player"
          className="relative max-w-2xl mx-auto aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-white group/video"
        >
          {/* Custom Video Playback States */}
          <div className="absolute inset-0 flex flex-col justify-between p-4 z-20 bg-gradient-to-b from-black/50 via-transparent to-black/75">
            
            {/* Top header within mock video */}
            <div className="flex items-center justify-between opacity-0 group-hover/video:opacity-100 transition-opacity duration-300">
              <span className="bg-black/40 text-white text-[10px] sm:text-xs font-semibold px-2 py-1 rounded-md backdrop-blur-sm">
                Tour_Do_Material_Completo_2026.mp4
              </span>
              <span className="bg-emerald-500 text-white text-[10px] font-mono px-1.5 py-0.5 rounded font-bold animate-pulse">
                AO VIVO
              </span>
            </div>

            {/* Middle Big Play Button if paused */}
            {!isPlaying && (
              <button 
                onClick={() => setIsPlaying(true)}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
                id="play-button-center"
              >
                <Play className="w-8 h-8 fill-white ml-1" />
              </button>
            )}

            {/* Screen Content Simulator (Rendered dynamically as a simulated video) */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 to-indigo-950 flex flex-col items-center justify-center text-white p-6 select-none">
              
              {slides[currentSlide].visual === "drive" && (
                <div className="text-center animate-fade-in w-full max-w-md">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Folder className="w-14 h-14 text-yellow-400 fill-yellow-400/20" />
                    <Folder className="w-16 h-16 text-blue-400 fill-blue-400/20 shadow-xl" />
                    <Folder className="w-14 h-14 text-green-400 fill-green-400/20" />
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 inline-flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="font-mono text-xs text-blue-200">Google Drive Organizado</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white">
                    400+ Dinâmicas por Temas BNCC
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mt-2">
                    Gramática contextualizada, Literatura ativa, Redação prática e muito mais!
                  </p>
                </div>
              )}

              {slides[currentSlide].visual === "activities" && (
                <div className="text-center animate-fade-in w-full max-w-md">
                  <div className="bg-white text-gray-800 rounded-xl p-4 shadow-xl max-w-xs mx-auto text-left transform -rotate-2 border border-gray-100">
                    <div className="flex items-center gap-2 border-b border-gray-100 pb-2 mb-2">
                      <FileText className="w-5 h-5 text-blue-500" />
                      <span className="text-xs font-bold font-mono">Sujeito_e_Predicado.pdf</span>
                    </div>
                    <div className="space-y-1.5 text-[10px]">
                      <div className="h-2 w-3/4 bg-gray-200 rounded"></div>
                      <div className="h-2 w-1/2 bg-gray-200 rounded"></div>
                      <div className="p-2 bg-blue-50 border border-blue-100 rounded mt-1">
                        <span className="font-bold text-[9px] text-blue-700">Tirinha do Chico Bento:</span>
                        <div className="h-1.5 w-full bg-gray-300/60 rounded mt-1"></div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white mt-4">
                    Exercícios Práticos Prontos
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1">
                    Gabarito passo a passo integrado para correção instantânea.
                  </p>
                </div>
              )}

              {slides[currentSlide].visual === "games" && (
                <div className="text-center animate-fade-in w-full max-w-md">
                  <div className="flex justify-center gap-3 mb-4">
                    <div className="bg-amber-500 text-white font-black text-xs px-3 py-2 rounded-lg rotate-6 shadow-lg">
                      TABULEIRO DA CRASE
                    </div>
                    <div className="bg-indigo-600 text-white font-black text-xs px-3 py-2 rounded-lg -rotate-6 shadow-lg">
                      FLASHCARDS FIGURAS
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white">
                    Metodologia Ativa de Verdade
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mt-2">
                    Seus alunos vão implorar por mais aulas de português e literatura.
                  </p>
                  <div className="mt-3 flex justify-center gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400" />)}
                  </div>
                </div>
              )}

              {slides[currentSlide].visual === "bncc" && (
                <div className="text-center animate-fade-in w-full max-w-md">
                  <div className="bg-emerald-950/60 border border-emerald-500/30 rounded-xl p-4 text-left max-w-sm mx-auto flex items-start gap-3">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400 shrink-0" />
                    <div>
                      <span className="text-[10px] text-emerald-400 font-bold font-mono">PLANEJAMENTO BNCC</span>
                      <h4 className="font-bold text-xs sm:text-sm text-white">Habilidades descritas nos códigos exatos:</h4>
                      <p className="text-[10px] text-gray-300 mt-1 font-mono">EF69LP55, EM13LP06, EM13LP08...</p>
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white mt-4">
                    Chega de Burocracia Estressante
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1">
                    Insira seu nome, assine e entregue para o coordenador pedagógico.
                  </p>
                </div>
              )}

            </div>

            {/* Bottom Controls Panel */}
            <div className="bg-black/60 backdrop-blur-sm rounded-xl p-2.5 flex items-center justify-between gap-4">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-white text-gray-900 p-2 rounded-lg hover:scale-105 transition-transform"
                id="play-pause-btn"
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-black" /> : <Play className="w-4 h-4 fill-black" />}
              </button>

              {/* Progress Bar inside Video */}
              <div className="flex-1">
                <div className="flex justify-between items-center text-[10px] text-gray-300 font-mono mb-1">
                  <span>Módulo {currentSlide + 1} de {slides.length}</span>
                  <span className="bg-white/10 px-1 py-0.2 rounded text-yellow-300 font-bold">
                    {slides[currentSlide].highlight}
                  </span>
                </div>
                <div className="w-full bg-gray-700/60 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-blue-500 h-full rounded-full transition-all duration-100 ease-linear"
                    style={{ width: `${videoProgress}%` }}
                  />
                </div>
              </div>

              {/* Volume/Time Mock */}
              <div className="text-[10px] text-gray-400 font-mono hidden sm:block text-right shrink-0">
                <span>02:14 / 04:30</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </header>
  );
}
