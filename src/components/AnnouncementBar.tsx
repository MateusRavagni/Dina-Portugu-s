import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

const mockNames = [
  'Sara Mendes',
  'Roberta Gontijo',
  'Cláudia Rodrigues',
  'José Carlos Souza',
  'Patrícia Lima',
  'Renato Antunes',
  'Mariana Alencar',
  'Camila Fagundes',
  'Luciana Santos',
  'Felipe Castro',
  'Sandra Barbosa',
  'Ricardo Nunes',
  'Ana Paula Diniz',
  'Marcos Vinícius',
  'Diego Mendes',
  'Juliana Costa',
  'Thiago Oliveira',
  'Larissa Pereira'
];

export default function AnnouncementBar() {
  const [timeLeft, setTimeLeft] = useState(899); // 14 min 59 sec
  const [notification, setNotification] = useState<{
    name: string;
    pkg: string;
    time: string;
  } | null>(null);

  const [showNotif, setShowNotif] = useState(false);

  // Ticking countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 899));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Rolling notification logic with 10s interval
  useEffect(() => {
    let hideTimeout: NodeJS.Timeout;

    const triggerNotification = () => {
      const randomName = mockNames[Math.floor(Math.random() * mockNames.length)];
      const randomMinutes = Math.floor(Math.random() * 55) + 3; // e.g. 3 to 58 minutes ago
      const isComplete = Math.random() > 0.15; // 85% buy complete
      
      setNotification({
        name: randomName,
        pkg: isComplete ? 'Pacote Completo' : 'Pacote Básico',
        time: `HÁ ${randomMinutes} MINUTOS`
      });
      setShowNotif(true);

      // Hide after 4.5 seconds to allow a nice break before the next one at 10s
      hideTimeout = setTimeout(() => {
        setShowNotif(false);
      }, 4500);
    };

    // Trigger initial notification after 6s
    const startTimeout = setTimeout(() => {
      triggerNotification();
    }, 6000);

    // Setup recurring interval of 25s
    const interval = setInterval(() => {
      triggerNotification();
    }, 25000);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(interval);
      if (hideTimeout) clearTimeout(hideTimeout);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      {/* Top Banner Bar */}
      <div 
        id="announcement-bar"
        className="bg-gradient-to-r from-red-600 via-orange-600 to-red-600 text-white font-sans text-xs sm:text-sm py-2 px-4 sticky top-0 z-50 shadow-md text-center flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 transition-all duration-300"
      >
        <span className="flex items-center gap-1 font-semibold animate-pulse">
          <Sparkles className="w-4 h-4 text-yellow-300 fill-yellow-300" />
          OFERTA ESPECIAL POR TEMPO LIMITADO:
        </span>
        <span className="opacity-95 text-center">
          Material Completo de Português com desconto exclusivo para novos professores.
        </span>
        <span className="font-mono bg-white/15 px-2 py-0.5 rounded text-yellow-300 font-bold tracking-wider flex items-center gap-1">
          {formatTime(timeLeft)}
        </span>
      </div>

      {/* Floating social proof notification (Top-Right, Identical to Screenshot) */}
      <div 
        id="social-proof-toast"
        className={`fixed top-16 right-4 z-[60] w-72 sm:w-[320px] bg-white shadow-xl rounded-[22px] border border-slate-100 p-4 transition-all duration-500 transform ${
          showNotif && notification
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
        }`}
      >
        {notification && (
          <div className="flex items-center gap-4">
            {/* Blue circular checkmark icon perfectly matching the reference image */}
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#edf5ff] shrink-0">
              <div className="flex items-center justify-center w-8.5 h-8.5 rounded-full border-2 border-[#3b82f6] bg-white">
                <svg className="w-4.5 h-4.5 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            {/* Text details */}
            <div className="flex-1 min-w-0 text-left">
              <h5 className="text-[14px] sm:text-[15px] font-black text-slate-900 leading-snug">
                {notification.name}
              </h5>
              <p className="text-[12px] sm:text-[13px] text-slate-400 font-semibold leading-tight mt-0.5">
                Adquiriu o <span className="text-slate-800 font-black">{notification.pkg}</span>
              </p>
              <p className="text-[10px] sm:text-[11px] text-[#3b82f6] font-extrabold tracking-wide mt-1.5 uppercase">
                {notification.time}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
