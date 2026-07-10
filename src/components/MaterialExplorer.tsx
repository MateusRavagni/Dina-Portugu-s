import { useState } from 'react';
import { sampleFolders } from '../data/materials';
import { DriveFolder, MaterialItem } from '../types';
import { 
  Folder, 
  ChevronRight, 
  FileText, 
  Compass, 
  Sparkles, 
  Clock, 
  ArrowLeft,
  Search,
  Grid,
  List as ListIcon,
  Download
} from 'lucide-react';

interface MaterialExplorerProps {
  onScrollToOffers: () => void;
}

export default function MaterialExplorer({ onScrollToOffers }: MaterialExplorerProps) {
  const [selectedFolder, setSelectedFolder] = useState<DriveFolder | null>(null);
  const [selectedItem, setSelectedItem] = useState<MaterialItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Handle folder select
  const handleFolderClick = (folder: DriveFolder) => {
    setSelectedFolder(folder);
    setSelectedItem(null);
  };

  // Back actions
  const handleBackToFolders = () => {
    setSelectedFolder(null);
    setSelectedItem(null);
  };

  const handleBackToItems = () => {
    setSelectedItem(null);
  };

  // Filter folder or general search if in folder
  const filteredFolders = sampleFolders.filter(f => 
    f.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredItems = selectedFolder 
    ? selectedFolder.items.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <section id="material-explorer-section" className="py-16 px-4 bg-white border-y border-gray-100">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            🕵️ Visualização Exclusiva
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mt-3">
            Explore o material <span className="text-blue-600">por dentro</span>
          </h2>
          <p className="text-gray-500 font-medium text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Criamos um emulador do Google Drive abaixo para você navegar pelas pastas reais do acervo e sentir o gostinho de ter aulas incríveis prontas.
          </p>
        </div>

        {/* The Google Drive Emulator Shell */}
        <div className="bg-slate-900 text-slate-100 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden max-w-4xl mx-auto">
          
          {/* Top Address Bar / Search */}
          <div className="bg-slate-950 p-4 border-b border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <span className="text-blue-400 font-bold">MEU DRIVE</span>
              <ChevronRight className="w-3.5 h-3.5" />
              <span>ACERVO PORTUGUÊS 2026</span>
              {selectedFolder && (
                <>
                  <ChevronRight className="w-3.5 h-3.5" />
                  <span className="text-slate-200 truncate max-w-[150px]">{selectedFolder.name}</span>
                </>
              )}
              {selectedItem && (
                <>
                  <ChevronRight className="w-3.5 h-3.5" />
                  <span className="text-emerald-400 truncate max-w-[120px]">{selectedItem.title}</span>
                </>
              )}
            </div>

            {/* Simulated Search bar */}
            <div className="relative w-full sm:w-auto shrink-0">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={selectedFolder ? "Buscar dinâmica..." : "Buscar pasta..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-slate-900/80 border border-slate-800 rounded-lg pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 w-full sm:w-56"
                id="drive-search-input"
              />
            </div>
          </div>

          {/* Drive Workspace Panel */}
          <div className="p-4 sm:p-6 min-h-[380px] bg-slate-900/60 flex flex-col justify-between">
            
            {/* View State 1: Folders List/Grid */}
            {!selectedFolder && !selectedItem && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-xs font-bold text-slate-400 tracking-wider">Pastas Principais ({filteredFolders.length})</span>
                  <div className="flex items-center gap-2">
                    <button onClick={() => setViewMode('grid')} className={`p-1 rounded ${viewMode === 'grid' ? 'text-blue-400 bg-slate-800' : 'text-slate-500'}`}>
                      <Grid className="w-4 h-4" />
                    </button>
                    <button onClick={() => setViewMode('list')} className={`p-1 rounded ${viewMode === 'list' ? 'text-blue-400 bg-slate-800' : 'text-slate-500'}`}>
                      <ListIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {filteredFolders.length === 0 ? (
                  <div className="text-center py-12 text-slate-500">Nenhuma pasta encontrada com esse termo.</div>
                ) : viewMode === 'grid' ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
                    {filteredFolders.map((folder) => (
                      <div
                        key={folder.id}
                        onClick={() => handleFolderClick(folder)}
                        className="bg-slate-950/80 hover:bg-slate-950 border border-slate-800 hover:border-slate-700 p-4 rounded-xl cursor-pointer transition-all duration-300 transform hover:-translate-y-0.5 group flex items-start gap-3"
                        id={`folder-grid-${folder.id}`}
                      >
                        <div className={`p-3 rounded-lg text-slate-900 shrink-0 ${folder.color}`}>
                          <Folder className="w-6 h-6 fill-current" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-bold text-sm text-slate-200 group-hover:text-blue-400 transition-colors truncate">
                            {folder.name}
                          </h4>
                          <p className="text-xs text-slate-500 font-mono mt-1">
                            {folder.itemsCount} arquivos inclusos
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-2">
                    {filteredFolders.map((folder) => (
                      <div
                        key={folder.id}
                        onClick={() => handleFolderClick(folder)}
                        className="bg-slate-950/50 hover:bg-slate-950/90 border border-slate-800/80 p-3 rounded-xl cursor-pointer transition-all flex items-center justify-between group"
                        id={`folder-list-${folder.id}`}
                      >
                        <div className="flex items-center gap-3">
                          <Folder className="w-5 h-5 text-yellow-400 fill-yellow-400/10 shrink-0" />
                          <span className="font-semibold text-sm text-slate-200 group-hover:text-blue-400">{folder.name}</span>
                        </div>
                        <span className="text-xs text-slate-500 font-mono">{folder.itemsCount} dinâmicas</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* View State 2: Inside a Folder */}
            {selectedFolder && !selectedItem && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <button 
                    onClick={handleBackToFolders}
                    className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 font-medium bg-slate-850 py-1 px-2.5 rounded-lg border border-slate-800 transition"
                    id="back-to-folders-btn"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Voltar para Pastas
                  </button>
                  <span className="text-xs text-slate-400 font-mono">{selectedFolder.name}</span>
                </div>

                <div className="space-y-2">
                  {filteredItems.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setSelectedItem(item)}
                      className="bg-slate-950/70 hover:bg-slate-950 border border-slate-800/80 hover:border-slate-700/80 p-3.5 rounded-xl cursor-pointer transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                      id={`item-row-${item.id}`}
                    >
                      <div className="flex items-start gap-3 min-w-0">
                        <div className="bg-blue-950 p-2.5 rounded-lg text-blue-400 shrink-0 mt-0.5 group-hover:bg-blue-900 group-hover:text-blue-200 transition-all">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-bold text-sm text-slate-200 group-hover:text-blue-400 transition-colors">
                            {item.title}
                          </h4>
                          <div className="flex flex-wrap items-center gap-2 mt-1.5">
                            <span className="bg-slate-900 border border-slate-800 text-[10px] text-blue-300 font-semibold px-2 py-0.5 rounded-md">
                              {item.category}
                            </span>
                            <span className="text-[10px] text-slate-500 flex items-center gap-1 font-mono">
                              <Compass className="w-3.5 h-3.5" /> {item.bncc}
                            </span>
                            <span className="text-[10px] text-slate-500 flex items-center gap-1 font-mono">
                              <Clock className="w-3.5 h-3.5" /> {item.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-end shrink-0">
                        <span className="text-xs text-emerald-400 font-bold bg-emerald-950 border border-emerald-900 px-3 py-1 rounded-lg flex items-center gap-1 group-hover:scale-105 transition-transform">
                          <Sparkles className="w-3.5 h-3.5 fill-current" />
                          Visualizar
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* View State 3: Detailed Document Preview */}
            {selectedItem && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <button 
                    onClick={handleBackToItems}
                    className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 font-medium bg-slate-850 py-1 px-2.5 rounded-lg border border-slate-800 transition"
                    id="back-to-items-btn"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Voltar para Arquivos
                  </button>
                  <span className="text-[10px] sm:text-xs text-amber-400 font-mono font-bold uppercase tracking-wider bg-amber-950/60 px-2 py-1 rounded border border-amber-900/30">
                    Amostra Grátis Liberada
                  </span>
                </div>

                {/* Simulated Sheet Paper */}
                <div className="bg-white text-gray-800 rounded-xl p-5 sm:p-7 shadow-2xl space-y-5 border border-gray-100 max-h-[450px] overflow-y-auto font-sans leading-relaxed">
                  
                  {/* Sheet Header */}
                  <div className="border-b border-gray-100 pb-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <span className="bg-blue-50 text-blue-700 text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md self-start">
                        {selectedItem.category}
                      </span>
                      <span className="text-xs text-gray-400 font-mono">Registro BNCC: <strong className="text-gray-800 font-semibold">{selectedItem.bncc}</strong></span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 mt-2">
                      {selectedItem.title}
                    </h3>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3.5 bg-slate-50 p-2.5 rounded-lg text-xs font-mono">
                      <div>
                        <span className="text-gray-400 block text-[10px]">PÚBLICO</span>
                        <strong className="text-gray-700">{selectedItem.level}</strong>
                      </div>
                      <div>
                        <span className="text-gray-400 block text-[10px]">DURAÇÃO ESTIMADA</span>
                        <strong className="text-gray-700">{selectedItem.duration}</strong>
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <span className="text-gray-400 block text-[10px]">ORGANIZAÇÃO</span>
                        <strong className="text-gray-700">Equipes / Individual</strong>
                      </div>
                    </div>
                  </div>

                  {/* Objective */}
                  <div className="space-y-1.5">
                    <h5 className="font-bold text-xs text-blue-600 uppercase tracking-widest">Objetivo Geral</h5>
                    <p className="text-sm text-gray-700">{selectedItem.objective}</p>
                  </div>

                  {/* Materials */}
                  <div className="space-y-1.5">
                    <h5 className="font-bold text-xs text-blue-600 uppercase tracking-widest">Materiais Necessários</h5>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm text-gray-600 list-disc pl-4">
                      {selectedItem.materialsNeeded.map((m, idx) => (
                        <li key={idx}>{m}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Step By Step */}
                  <div className="space-y-2.5">
                    <h5 className="font-bold text-xs text-blue-600 uppercase tracking-widest">Passo a Passo de Execução</h5>
                    <ol className="space-y-2 text-sm text-gray-700 pl-4 list-decimal">
                      {selectedItem.stepByStep.map((step, idx) => (
                        <li key={idx} className="pl-1">
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Secret Tip */}
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg space-y-1">
                    <h6 className="font-bold text-xs text-amber-800 uppercase tracking-widest flex items-center gap-1">
                      💡 Super Dica do Especialista
                    </h6>
                    <p className="text-xs sm:text-sm text-amber-900 leading-relaxed italic">
                      "{selectedItem.tip}"
                    </p>
                  </div>

                </div>
              </div>
            )}

            {/* Bottom drive actions summary banner */}
            <div className="mt-4 border-t border-slate-800 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
              <span className="text-center sm:text-left">
                Gostou desta dinâmica? Ela é apenas <strong className="text-white">1 das 100</strong> do nosso acervo completo!
              </span>
              <button
                onClick={onScrollToOffers}
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs px-4 py-2 rounded-lg flex items-center gap-1.5 transition-all shadow-md shrink-0 cursor-pointer"
                id="drive-download-cta"
              >
                <Download className="w-3.5 h-3.5" />
                Baixar Acervo Completo
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
