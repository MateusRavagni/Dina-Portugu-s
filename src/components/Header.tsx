import React, { useState, useEffect } from 'react';
import { Star, ChevronRight, Upload, Settings, Link2, RotateCcw, Check, HelpCircle, Film } from 'lucide-react';

// IndexedDB Helper for persistent local video cache
const DB_NAME = 'VideoCacheDB';
const STORE_NAME = 'videos';
const DB_KEY = 'sarau_video';

function initDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function saveVideoToDB(blob: Blob): Promise<void> {
  return initDB().then((db) => {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.put(blob, DB_KEY);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  });
}

function loadVideoFromDB(): Promise<Blob | null> {
  return initDB().then((db) => {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(DB_KEY);
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => reject(request.error);
    });
  });
}

function clearVideoFromDB(): Promise<void> {
  return initDB().then((db) => {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.delete(DB_KEY);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  });
}

// Helpers for Video Type Resolution
function getVideoType(url: string): 'youtube' | 'vimeo' | 'direct' {
  if (!url) return 'direct';
  if (url.includes('youtube.com') || url.includes('youtu.be')) return 'youtube';
  if (url.includes('vimeo.com')) return 'vimeo';
  return 'direct';
}

function getYouTubeEmbedUrl(url: string): string | null {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) 
    ? `https://www.youtube.com/embed/${match[2]}?autoplay=1&mute=1&loop=1&playlist=${match[2]}` 
    : null;
}

function getVimeoEmbedUrl(url: string): string | null {
  if (!url) return null;
  const regExp = /vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
  const match = url.match(regExp);
  return match ? `https://player.vimeo.com/video/${match[3]}?autoplay=1&muted=1&loop=1` : null;
}

const DEFAULT_VIDEO_PATHS = [
  '/video.mp4',
  '/sarau.mp4',
  '/sarau-poetico.mp4',
  '/sarau_poetico.mp4',
  '/video_sarau.mp4',
];

interface HeaderProps {
  onScrollToOffers: () => void;
}

export default function Header({ onScrollToOffers }: HeaderProps) {
  const [videoSrc, setVideoSrc] = useState<string>('');
  const [videoError, setVideoError] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [fallbackIndex, setFallbackIndex] = useState<number>(-1);
  
  // Custom states for setting URL directly
  const [inputUrl, setInputUrl] = useState<string>('');
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [showSaveSuccess, setShowSaveSuccess] = useState(false);

  // Initialize from default video path (ensuring newly uploaded file is played)
  useEffect(() => {
    // Clear any cached / outdated stored videos to prioritize the newly uploaded /video.mp4
    localStorage.removeItem('sarau_video_url');
    clearVideoFromDB().catch(console.error);

    setVideoSrc(DEFAULT_VIDEO_PATHS[0]);
    setVideoError(false);
    setFallbackIndex(0);
  }, []);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        setIsSaving(true);
        const url = URL.createObjectURL(file);
        setVideoSrc(url);
        setVideoError(false);
        setFallbackIndex(-1);
        localStorage.removeItem('sarau_video_url'); // Prefer File
        setInputUrl('');
        await saveVideoToDB(file);
        setShowSaveSuccess(true);
        setTimeout(() => setShowSaveSuccess(false), 3000);
      } catch (err) {
        console.error('Erro ao salvar vídeo localmente:', err);
      } finally {
        setIsSaving(false);
      }
    }
  };

  const handleUrlSave = () => {
    if (inputUrl.trim()) {
      localStorage.setItem('sarau_video_url', inputUrl.trim());
      setVideoSrc(inputUrl.trim());
      setVideoError(false);
      setFallbackIndex(-1);
      clearVideoFromDB().catch(console.error); // Prefer URL
      setShowSaveSuccess(true);
      setTimeout(() => setShowSaveSuccess(false), 3000);
    }
  };

  const handleResetToDefault = async () => {
    try {
      localStorage.removeItem('sarau_video_url');
      setInputUrl('');
      await clearVideoFromDB();
      setFallbackIndex(0);
      setVideoSrc(DEFAULT_VIDEO_PATHS[0]);
      setVideoError(false);
      setShowSaveSuccess(true);
      setTimeout(() => setShowSaveSuccess(false), 3000);
    } catch (err) {
      console.error('Erro ao restaurar padrão:', err);
    }
  };

  const handleVideoError = () => {
    if (fallbackIndex >= 0 && fallbackIndex < DEFAULT_VIDEO_PATHS.length - 1) {
      const nextIndex = fallbackIndex + 1;
      setFallbackIndex(nextIndex);
      setVideoSrc(DEFAULT_VIDEO_PATHS[nextIndex]);
      setVideoError(false);
    } else if (fallbackIndex === DEFAULT_VIDEO_PATHS.length - 1) {
      setFallbackIndex(-1);
      // Failover to our beautiful public ready-made Mixkit video
      setVideoSrc('https://assets.mixkit.co/videos/preview/mixkit-turning-the-pages-of-a-book-4680-large.mp4');
      setVideoError(false);
    } else {
      setVideoError(true);
    }
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
              <Star key={i} className="w-4 h-4 fill-amber-400 animate-pulse" style={{ animationDelay: `${i * 150}ms` }} />
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
          Chega de perder horas planejando. <strong className="text-gray-900 font-semibold">+100 dinâmicas</strong>, atividades práticas, dinâmicas prontas para aula e recursos lúdicos de português (Ensino Fundamental II e Médio) prontos para aplicar.
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



        {/* Real Video Player Container */}
        <div 
          id="demo-video-player"
          className="relative mt-12 max-w-[340px] mx-auto bg-transparent rounded-2xl overflow-hidden shadow-2xl border-4 border-white flex items-center justify-center aspect-[464/832]"
        >
          {!videoError && videoSrc ? (
            <div className="relative w-full h-full">
              {getVideoType(videoSrc) === 'youtube' && getYouTubeEmbedUrl(videoSrc) ? (
                <iframe
                  src={getYouTubeEmbedUrl(videoSrc)!}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  title="YouTube video player"
                />
              ) : getVideoType(videoSrc) === 'vimeo' && getVimeoEmbedUrl(videoSrc) ? (
                <iframe
                  src={getVimeoEmbedUrl(videoSrc)!}
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Vimeo video player"
                />
              ) : (
                <video
                  key={videoSrc}
                  src={videoSrc}
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="auto"
                  autoPlay
                  muted
                  controlsList="nodownload"
                  disablePictureInPicture
                  onContextMenu={(e) => e.preventDefault()}
                  onError={handleVideoError}
                >
                  Seu navegador não suporta a tag de vídeo.
                </video>
              )}
            </div>
          ) : (
            /* SIMPLE SLEEK MINIMALIST ERROR/LOADING STATE */
            <div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center p-6 text-white text-center">
              <Film className="w-12 h-12 text-slate-700 animate-pulse mb-3" />
              <p className="text-xs text-slate-500 font-mono">
                {videoError ? 'Vídeo temporariamente indisponível' : 'Carregando demonstração...'}
              </p>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}
