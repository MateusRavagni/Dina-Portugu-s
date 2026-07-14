import { Layers, GraduationCap, Clock, RefreshCw, ShieldCheck, Zap, BookOpen } from 'lucide-react';

const Purple3DGraduationCapIcon = () => (
  <svg 
    width="52" 
    height="52" 
    viewBox="0 0 52 52" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-[0_6px_12px_rgba(99,102,241,0.35)] select-none"
  >
    {/* Glassy violet-blue squircle */}
    <rect 
      x="1" 
      y="1" 
      width="50" 
      height="50" 
      rx="14" 
      fill="url(#purple3DGrad)" 
      stroke="white" 
      strokeWidth="0.5" 
      strokeOpacity="0.4"
    />
    
    {/* Sparkling rays on top-right */}
    <path 
      d="M 39 11 L 42 8" 
      stroke="#a78bfa" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
    />
    <path 
      d="M 43 15 L 47 14" 
      stroke="#a78bfa" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
    />

    {/* 3D Graduation Cap elements */}
    {/* Underneath Cap shadow */}
    <ellipse cx="26" cy="31" rx="9" ry="4" fill="#4f46e5" opacity="0.3" />

    {/* Cap skull-band base */}
    <path 
      d="M 20 28.5 C 20 31.5, 32 31.5, 32 28.5" 
      stroke="url(#capDarkGrad)" 
      strokeWidth="4.5" 
      strokeLinecap="round" 
    />
    <path 
      d="M 21 29 C 21 31, 31 31, 31 29" 
      stroke="#c084fc" 
      strokeWidth="1" 
      strokeLinecap="round" 
      opacity="0.5"
    />

    {/* Main Diamond Top (Rhombus) */}
    <path 
      d="M 26 17.5 L 37 22.5 L 26 27.5 L 15 22.5 Z" 
      fill="url(#capMainGrad)" 
      stroke="#4f46e5" 
      strokeWidth="0.8"
    />
    {/* Highlight reflection on diamond */}
    <path 
      d="M 26 19 L 34 22.5 L 26 25.5 L 18 22.5 Z" 
      fill="url(#capHighlightGrad)" 
      opacity="0.5"
    />

    {/* Tassel Button on center top */}
    <circle cx="26" cy="22.5" r="2" fill="#fbbf24" stroke="#d97706" strokeWidth="0.5" />

    {/* Hanging Tassel */}
    {/* Tassel cord */}
    <path 
      d="M 27 23 C 31 24.5, 32.5 28, 32.5 31.5" 
      stroke="#fbbf24" 
      strokeWidth="1.8" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    {/* Tassel fringe */}
    <path 
      d="M 32.5 31.5 L 34 35 M 32.5 31.5 L 31 35 M 32.5 31.5 L 32.5 36" 
      stroke="#f59e0b" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
    />

    <defs>
      {/* 3D Glassy backplate gradient */}
      <linearGradient id="purple3DGrad" x1="1" y1="1" x2="51" y2="51" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#f5f3ff" />
        <stop offset="40%" stopColor="#ddd6fe" />
        <stop offset="100%" stopColor="#c7d2fe" />
      </linearGradient>

      {/* Cap main surface gradient - rich violet to deep purple */}
      <linearGradient id="capMainGrad" x1="15" y1="22.5" x2="37" y2="22.5" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#818cf8" />
        <stop offset="50%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#4f46e5" />
      </linearGradient>

      {/* Cap highlight sheen */}
      <linearGradient id="capHighlightGrad" x1="26" y1="19" x2="26" y2="25.5" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="white" stopOpacity="0.4" />
        <stop offset="100%" stopColor="white" stopOpacity="0" />
      </linearGradient>

      {/* Base cylinder gradient */}
      <linearGradient id="capDarkGrad" x1="20" y1="29.5" x2="32" y2="29.5" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#4f46e5" />
        <stop offset="50%" stopColor="#3730a3" />
        <stop offset="100%" stopColor="#312e81" />
      </linearGradient>
    </defs>
  </svg>
);

const Blue3DLayersIcon = () => (
  <svg 
    width="52" 
    height="52" 
    viewBox="0 0 52 52" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-[0_6px_14px_rgba(29,78,216,0.35)] select-none"
  >
    {/* iOS squircle with gradient, 3D pill look */}
    <rect 
      x="1" 
      y="1" 
      width="50" 
      height="50" 
      rx="14" 
      fill="url(#blue3DGrad)" 
      stroke="white" 
      strokeWidth="0.5" 
      strokeOpacity="0.3"
    />
    
    {/* Glossy top-to-bottom edge overlay */}
    <rect 
      x="1.5" 
      y="1.5" 
      width="49" 
      height="49" 
      rx="13.5" 
      stroke="url(#glossGrad)" 
      strokeWidth="1" 
      fill="none" 
      opacity="0.8"
    />

    {/* Realistic soft grounding shadow for the 3D stack */}
    <ellipse cx="26" cy="38" rx="14" ry="4.5" fill="#020617" opacity="0.45" filter="url(#shadowBlur)" />
    
    {/* Bottom stack layer */}
    <path 
      d="M 26 26.5 L 38.5 31.5 L 26 36.5 L 13.5 31.5 Z" 
      fill="rgba(255, 255, 255, 0.25)" 
      stroke="rgba(255, 255, 255, 0.45)" 
      strokeWidth="1" 
      strokeLinejoin="round"
    />
    <path 
      d="M 13.5 31.5 L 13.5 33 L 26 38 L 38.5 33 L 38.5 31.5 L 26 36.5 Z" 
      fill="rgba(255, 255, 255, 0.15)" 
    />
    
    {/* Middle stack layer */}
    <path 
      d="M 26 22 L 38.5 27 L 26 32 L 13.5 27 Z" 
      fill="rgba(255, 255, 255, 0.45)" 
      stroke="rgba(255, 255, 255, 0.7)" 
      strokeWidth="1" 
      strokeLinejoin="round"
    />
    <path 
      d="M 13.5 27 L 13.5 28.5 L 26 33.5 L 38.5 28.5 L 38.5 27 L 26 32 Z" 
      fill="rgba(255, 255, 255, 0.25)" 
    />
    
    {/* Top stack layer (Hollow center/rhombus cutout for premium realism) */}
    <path 
      d="M 26 17 L 38.5 22 L 26 27 L 13.5 22 Z M 26 19.8 L 33.5 22 L 26 24.2 L 18.5 22 Z" 
      fill="url(#topPlateGrad)" 
      stroke="white" 
      strokeWidth="1.2" 
      strokeLinejoin="round"
      fillRule="evenodd"
    />
    <path 
      d="M 13.5 22 L 13.5 23.8 L 26 28.8 L 38.5 23.8 L 38.5 22 L 26 27 Z" 
      fill="url(#plateThicknessGrad)" 
    />

    {/* Elegant 4-pointed stars (sparkles/glimmers) on the top-right */}
    <path 
      d="M 39 8.5 Q 39 13 43.5 13 Q 39 13 39 17.5 Q 39 13 34.5 13 Q 39 13 39 8.5 Z" 
      fill="white" 
    />
    <path 
      d="M 33.5 14.7 Q 33.5 17.5 36.3 17.5 Q 33.5 17.5 33.5 20.3 Q 33.5 17.5 30.7 17.5 Q 33.5 17.5 33.5 14.7 Z" 
      fill="white" 
      opacity="0.9"
    />
    <path 
      d="M 43.5 16.3 Q 43.5 18.5 45.7 18.5 Q 43.5 18.5 43.5 20.7 Q 43.5 18.5 41.3 18.5 Q 43.5 18.5 43.5 16.3 Z" 
      fill="white" 
      opacity="0.9"
    />

    <defs>
      {/* Glossy gradient from vibrant cyan-blue to deep royal blue */}
      <linearGradient id="blue3DGrad" x1="1" y1="1" x2="51" y2="51" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="50%" stopColor="#1d4ed8" />
        <stop offset="100%" stopColor="#0b2c9b" />
      </linearGradient>

      {/* Glossy rim overlay gradient */}
      <linearGradient id="glossGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="white" stopOpacity="0.6" />
        <stop offset="100%" stopColor="white" stopOpacity="0.0" />
      </linearGradient>

      {/* Top plate semi-transparent surface gradient */}
      <linearGradient id="topPlateGrad" x1="26" y1="17" x2="26" y2="27" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="white" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#dbeafe" stopOpacity="0.85" />
      </linearGradient>

      {/* Plate thickness 3D depth gradient */}
      <linearGradient id="plateThicknessGrad" x1="26" y1="22" x2="26" y2="28.8" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#bfdbfe" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.65" />
      </linearGradient>

      {/* Soft shadow blur filter */}
      <filter id="shadowBlur" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2" />
      </filter>
    </defs>
  </svg>
);

const Orange3DClockIcon = () => (
  <svg 
    width="52" 
    height="52" 
    viewBox="0 0 52 52" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-[0_6px_14px_rgba(249,115,22,0.35)] select-none"
  >
    {/* iOS squircle with beautiful soft orange-peach to cream gradient */}
    <rect 
      x="1" 
      y="1" 
      width="50" 
      height="50" 
      rx="14" 
      fill="url(#orange3DGrad)" 
      stroke="white" 
      strokeWidth="0.5" 
      strokeOpacity="0.4"
    />
    
    {/* Glossy top edge overlay */}
    <rect 
      x="1.5" 
      y="1.5" 
      width="49" 
      height="49" 
      rx="13.5" 
      stroke="url(#orangeGlossGrad)" 
      strokeWidth="1" 
      fill="none" 
      opacity="0.8"
    />

    {/* Realistic soft grounding shadow for the clock */}
    <circle cx="26" cy="27" r="13" fill="#431407" opacity="0.45" filter="url(#clockShadowBlur)" />

    {/* Outer Clock Body / Rim (Vibrant Orange with 3D bevel) */}
    <circle cx="26" cy="25" r="13" fill="url(#clockRimGrad)" stroke="#ea580c" strokeWidth="0.5" />
    
    {/* Clock Face (Off-white, sunken look) */}
    <circle cx="26" cy="25" r="10.2" fill="url(#clockFaceGrad)" />
    
    {/* Clock Hour Ticks (Orange dashes at 12, 3, 6, 9) */}
    <line x1="26" y1="16.5" x2="26" y2="18.2" stroke="#ea580c" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="26" y1="31.8" x2="26" y2="33.5" stroke="#ea580c" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="32.8" y1="25" x2="31.1" y2="25" stroke="#ea580c" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="19.2" y1="25" x2="20.9" y2="25" stroke="#ea580c" strokeWidth="1.2" strokeLinecap="round" />

    {/* Hour Hand (Points to 4 o'clock, with rounded cap) */}
    <line 
      x1="26" 
      y1="25" 
      x2="30.5" 
      y2="28" 
      stroke="#ea580c" 
      strokeWidth="2.2" 
      strokeLinecap="round" 
    />
    
    {/* Minute Hand (Points to 12 o'clock, with rounded cap) */}
    <line 
      x1="26" 
      y1="25" 
      x2="26" 
      y2="18.5" 
      stroke="#ea580c" 
      strokeWidth="2.2" 
      strokeLinecap="round" 
    />

    {/* Center Pin / Cap */}
    <circle cx="26" cy="25" r="1.5" fill="#f97316" stroke="#c2410c" strokeWidth="0.5" />

    <defs>
      {/* 3D Glassy backplate gradient - soft warm orange/peach to vanilla cream */}
      <linearGradient id="orange3DGrad" x1="1" y1="1" x2="51" y2="51" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fff7ed" />
        <stop offset="40%" stopColor="#ffedd5" />
        <stop offset="100%" stopColor="#fed7aa" />
      </linearGradient>

      {/* Glossy rim overlay gradient */}
      <linearGradient id="orangeGlossGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="white" stopOpacity="0.85" />
        <stop offset="100%" stopColor="white" stopOpacity="0.0" />
      </linearGradient>

      {/* Real clock rim gradient */}
      <linearGradient id="clockRimGrad" x1="13" y1="12" x2="39" y2="38" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ff7e36" />
        <stop offset="100%" stopColor="#ea580c" />
      </linearGradient>

      {/* Clock Face gradient - crisp soft warm white with inner shadow simulation */}
      <linearGradient id="clockFaceGrad" x1="26" y1="15" x2="26" y2="35" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fdfdfd" />
        <stop offset="100%" stopColor="#f4f4f5" />
      </linearGradient>

      {/* Soft shadow blur filter */}
      <filter id="clockShadowBlur" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="1.5" />
      </filter>
    </defs>
  </svg>
);

const Red3DShieldIcon = () => (
  <svg 
    width="52" 
    height="52" 
    viewBox="0 0 52 52" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-[0_6px_14px_rgba(239,68,68,0.35)] select-none"
  >
    {/* iOS squircle with soft red-pink to creamy light-rose gradient */}
    <rect 
      x="1" 
      y="1" 
      width="50" 
      height="50" 
      rx="14" 
      fill="url(#red3DGrad)" 
      stroke="white" 
      strokeWidth="0.5" 
      strokeOpacity="0.4"
    />
    
    {/* Glossy top edge overlay */}
    <rect 
      x="1.5" 
      y="1.5" 
      width="49" 
      height="49" 
      rx="13.5" 
      stroke="url(#redGlossGrad)" 
      strokeWidth="1" 
      fill="none" 
      opacity="0.85"
    />

    {/* Soft dark red shadow behind the shield for depth */}
    <path 
      d="M 26 13.5 C 21 13.5, 16.5 14.5, 16.5 16.5 C 16.5 25.5, 23 32, 26 33.5 C 29 32, 35.5 25.5, 35.5 16.5 C 35.5 14.5, 31 13.5, 26 13.5 Z" 
      fill="#4c0519" 
      opacity="0.3" 
      filter="url(#shieldShadowBlur)"
    />

    {/* 3D Beveled Outer Shield Border (Glossy Red) */}
    <path 
      d="M 26 13 C 20.5 13, 16 14, 16 16 C 16 25.5, 22.5 32.5, 26 34 C 29.5 32.5, 36 25.5, 36 16 C 36 14, 31.5 13, 26 13 Z" 
      fill="url(#shieldBevelGrad)"
    />

    {/* Inner Shield Face (Vibrant glossy red) */}
    <path 
      d="M 26 14.5 C 21.5 14.5, 17.5 15.3, 17.5 17 C 17.5 24.8, 23 30.8, 26 32.2 C 29 30.8, 34.5 24.8, 34.5 17 C 34.5 15.3, 30.5 14.5, 26 14.5 Z" 
      fill="url(#shieldFaceGrad)"
      stroke="#b91c1c"
      strokeWidth="0.5"
    />

    {/* Glossy top sheen for 3D realism */}
    <path 
      d="M 26 15.2 C 22.2 15.2, 18.5 15.8, 18.5 17.2 C 18.5 20.5, 20.5 22.5, 26 22.5 C 31.5 22.5, 33.5 20.5, 33.5 17.2 C 33.5 15.8, 29.8 15.2, 26 15.2 Z" 
      fill="url(#shieldHighlightGrad)"
      opacity="0.5"
    />

    {/* Glowing checkmark 3D shadow */}
    <path 
      d="M 21.5 23.8 L 24.5 26.8 L 30.5 20.3" 
      stroke="#7f1d1d" 
      strokeWidth="3.2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      opacity="0.6"
    />

    {/* Clean White Checkmark */}
    <path 
      d="M 21.5 23 L 24.5 26 L 30.5 19.5" 
      stroke="white" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />

    <defs>
      {/* iOS squircle container gradient - beautiful soft red-pink to creamy light-rose */}
      <linearGradient id="red3DGrad" x1="1" y1="1" x2="51" y2="51" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fff5f5" />
        <stop offset="40%" stopColor="#ffe4e6" />
        <stop offset="100%" stopColor="#fecdd3" />
      </linearGradient>

      {/* Glossy overlay */}
      <linearGradient id="redGlossGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="white" stopOpacity="0.85" />
        <stop offset="100%" stopColor="white" stopOpacity="0.0" />
      </linearGradient>

      {/* 3D Bevel Red Gradient */}
      <linearGradient id="shieldBevelGrad" x1="26" y1="13" x2="26" y2="34" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ef4444" />
        <stop offset="100%" stopColor="#991b1b" />
      </linearGradient>

      {/* Shield inner face gradient */}
      <linearGradient id="shieldFaceGrad" x1="26" y1="14.5" x2="26" y2="32.2" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ef4444" />
        <stop offset="100%" stopColor="#b91c1c" />
      </linearGradient>

      {/* Gloss sheen */}
      <linearGradient id="shieldHighlightGrad" x1="26" y1="15.2" x2="26" y2="22.5" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="white" stopOpacity="0.6" />
        <stop offset="100%" stopColor="white" stopOpacity="0" />
      </linearGradient>

      {/* Soft shadow blur filter */}
      <filter id="shieldShadowBlur" x="-25%" y="-25%" width="150%" height="150%">
        <feGaussianBlur stdDeviation="1.5" />
      </filter>
    </defs>
  </svg>
);

interface FeaturesGridProps {
  onScrollToOffers: () => void;
}

export default function FeaturesGrid({ onScrollToOffers }: FeaturesGridProps) {
  const features = [
    {
      id: 1,
      icon: Layers,
      title: (
        <span>
          <span className="text-[#2563eb] font-extrabold">+100</span> Dinâmicas Prontas
        </span>
      ),
      subtitle: 'Prontas para imprimir, editar e aplicar direto em sala.',
      color: 'text-blue-600 bg-blue-50 border-blue-100',
    },
    {
      id: 2,
      icon: GraduationCap,
      title: 'Do Fundamental II ao Ensino Médio',
      subtitle: (
        <span>
          Materiais <span className="text-indigo-600 font-extrabold">organizados</span> para <span className="text-blue-500 font-extrabold">cada etapa</span>, do <span className="text-amber-500 font-extrabold">fundamental II</span> ao <span className="text-purple-600 font-extrabold">ensino médio</span>.
        </span>
      ),
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
      subtitle: (
        <span>
          Seu investimento está <span className="text-red-600 font-extrabold">100%</span> seguro com risco zero de perda.
        </span>
      ),
      color: 'text-red-600 bg-red-50 border-red-100',
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
                {feat.id === 1 ? (
                  <div className="p-3 bg-blue-50/60 border border-blue-100/50 rounded-2xl mb-4 transition-transform group-hover:scale-110 flex items-center justify-center">
                    <Blue3DLayersIcon />
                  </div>
                ) : feat.id === 2 ? (
                  <div className="p-3 bg-indigo-50/60 border border-indigo-100/50 rounded-2xl mb-4 transition-transform group-hover:scale-110 flex items-center justify-center">
                    <Purple3DGraduationCapIcon />
                  </div>
                ) : feat.id === 3 ? (
                  <div className="p-3 bg-amber-50/60 border border-amber-100/50 rounded-2xl mb-4 transition-transform group-hover:scale-110 flex items-center justify-center">
                    <Orange3DClockIcon />
                  </div>
                ) : feat.id === 5 ? (
                  <div className="p-3 bg-red-50/60 border border-red-100/50 rounded-2xl mb-4 transition-transform group-hover:scale-110 flex items-center justify-center">
                    <Red3DShieldIcon />
                  </div>
                ) : (
                  <div className={`p-4 rounded-2xl border ${feat.color} shrink-0 mb-4 transition-transform group-hover:scale-110`}>
                    <IconComponent className="w-6 h-6 stroke-[2.5]" />
                  </div>
                )}

                <h3 className="font-extrabold text-gray-900 text-lg leading-snug">
                  {feat.title}
                </h3>
                
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  {feat.subtitle}
                </p>

                {feat.id === 2 && (
                  <div className="mt-4 inline-flex items-center gap-1.5 bg-violet-50 border border-violet-100 text-violet-700 text-xs font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-sm">
                    <BookOpen className="w-3.5 h-3.5 text-violet-600" />
                    BNCC
                  </div>
                )}
              </div>
            );
          })}
        </div>



      </div>
    </section>
  );
}
