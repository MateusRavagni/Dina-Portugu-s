import { useEffect, useState } from 'react';
import { Sparkles, ShoppingBag, X } from 'lucide-react';

const mockNames = [
  'Cláudia Rodrigues', 'José Carlos Souza', 'Patrícia Lima', 
  'Renato Antunes', 'Mariana Alencar', 'Camila Fagundes', 
  'Luciana Santos', 'Felipe Castro', 'Sandra Barbosa', 'Ricardo Nunes',
  'Ana Paula Diniz', 'Marcos Vinícius', 'Roberta Gontijo', 'Diego Mendes'
];

const mockCities = [
  'São Paulo - SP', 'Rio de Janeiro - RJ', 'Belo Horizonte - MG',
  'Porto Alegre - RS', 'Curitiba - PR', 'Salvador - BA', 'Fortaleza - CE',
  'Recife - PE', 'Brasília - DF', 'Goiânia - GO', 'Florianópolis - SC',
  'Manaus - AM', 'Belém - PA', 'Vitória - ES'
];

export default function AnnouncementBar() {
  const [timeLeft, setTimeLeft] = useState(899); // 14 min 59 sec
  const [notification, setNotification] = useState<{
    name: string;
    city: string;
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

  // Rolling notification logic
  useEffect(() => {
    const triggerNotification = () => {
      const randomName = mockNames[Math.floor(Math.random() * mockNames.length)];
      const randomCity = mockCities[Math.floor(Math.random() * mockCities.length)];
      const isComplete = Math.random() > 0.15; // 85% buy complete
      
      setNotification({
        name: randomName,
        city: randomCity,
        pkg: isComplete ? 'Pacote Completo (Bônus Inclusos)' : 'Pacote Básico',
        time: 'há 1 minuto'
      });
      setShowNotif(true);

      // Hide after 5 seconds
      setTimeout(() => {
        setShowNotif(false);
      }, 5500);
    };

    // Trigger first after 3 seconds, then every 20 seconds
    const initialTimeout = setTimeout(triggerNotification, 3000);
    const interval = setInterval(triggerNotification, 22000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
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

      {/* Floating social proof notification (Top-Right) */}
      <div 
        id="social-proof-toast"
        className={`fixed top-14 right-4 z-40 max-w-xs sm:max-w-sm bg-white/95 backdrop-blur shadow-2xl rounded-xl border border-gray-100 p-3 sm:p-4 transition-all duration-500 transform ${
          showNotif && notification
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
        }`}
      >
        {notification && (
          <div className="flex items-start gap-3">
            <div className="bg-green-100 p-2 rounded-full text-green-600 animate-bounce">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400 font-medium font-mono uppercase">Venda Recente ✅</span>
                <button 
                  onClick={() => setShowNotif(false)}
                  className="text-gray-400 hover:text-gray-600"
                  id="close-toast-btn"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-gray-900 mt-1">
                {notification.name}
              </p>
              <p className="text-xs text-gray-500 font-medium">
                {notification.city}
              </p>
              <p className="text-xs font-semibold text-blue-600 mt-1 bg-blue-50 py-0.5 px-2 rounded-md inline-block">
                Adquiriu o {notification.pkg}
              </p>
              <p className="text-[10px] text-gray-400 mt-1 font-mono">
                {notification.time}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
