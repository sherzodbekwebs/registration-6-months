import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Play,
  Pause,
  LayoutGrid,
  Presentation,
  Download,
  FileSpreadsheet
} from 'lucide-react';

interface SlideHeaderProps {
  currentSlide: number;
  totalSlides: number;
  slideTitles: string[];
  onPrev: () => void;
  onNext: () => void;
  onGoToSlide: (index: number) => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  isAutoPlay: boolean;
  onToggleAutoPlay: () => void;
  viewMode: 'slides' | 'dashboard';
  onToggleViewMode: () => void;
  onExportCSV: () => void;
}

export const SlideHeader: React.FC<SlideHeaderProps> = ({
  currentSlide,
  totalSlides,
  slideTitles,
  onPrev,
  onNext,
  onGoToSlide,
  isFullscreen,
  onToggleFullscreen,
  isAutoPlay,
  onToggleAutoPlay,
  viewMode,
  onToggleViewMode,
  onExportCSV,
}) => {
  return (
    <header className="bg-slate-900 text-white w-full sticky top-0 z-40 shadow-lg border-b border-slate-800">
      <div className="w-full px-4 sm:px-8 py-3.5 flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Left: Brand / Title */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-indigo-500 text-white flex items-center justify-center font-black shadow-md">
              <Presentation className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-white">
                  N3 Tijoriy Texnikalar Bozori
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-indigo-500/30 text-indigo-300 border border-indigo-400/30">
                  Prezentatsiya
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium">
                O&apos;zbekiston 6 oylik hisoboti (10,763 ta mashina)
              </p>
            </div>
          </div>

          {/* View mode toggle button on mobile */}
          <div className="md:hidden flex items-center gap-1.5">
            <button
              onClick={onToggleViewMode}
              className="px-2.5 py-1.5 bg-slate-800 rounded-lg text-xs font-bold text-slate-200"
            >
              {viewMode === 'slides' ? 'Barchasi' : 'Slaydlar'}
            </button>
          </div>
        </div>

        {/* Center: Slide Stepper / Navigation (if in slide mode) */}
        {viewMode === 'slides' ? (
          <div className="flex items-center gap-2 sm:gap-3 bg-slate-800/90 p-1.5 rounded-2xl border border-slate-700/80 shadow-inner">
            <button
              onClick={onPrev}
              disabled={currentSlide === 0}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
              title="Oldingi slayd (yoki chapga strelka ←)"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Slide Dots / Titles */}
            <div className="flex items-center gap-1 sm:gap-1.5 px-2">
              {slideTitles.map((title, idx) => {
                const isActive = currentSlide === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => onGoToSlide(idx)}
                    className={`transition-all cursor-pointer flex items-center justify-center rounded-lg ${
                      isActive
                        ? 'bg-indigo-600 text-white font-black px-2.5 sm:px-3 py-1 text-xs shadow-md'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/60 w-6 sm:w-7 h-6 sm:h-7 text-xs font-semibold'
                    }`}
                    title={`${idx + 1}-slayd: ${title}`}
                  >
                    {isActive ? `${idx + 1}. ${title}` : idx + 1}
                  </button>
                );
              })}
            </div>

            <button
              onClick={onNext}
              disabled={currentSlide === totalSlides - 1}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
              title="Keyingi slayd (yoki o'ngga strelka →)"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        ) : (
          <div className="text-xs font-bold text-slate-400 bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700">
            Barcha ma&apos;lumotlar bitta sahifada
          </div>
        )}

        {/* Right: Presentation Utilities */}
        <div className="hidden sm:flex items-center gap-2">
          {viewMode === 'slides' && (
            <button
              onClick={onToggleAutoPlay}
              className={`p-2 rounded-xl text-xs font-bold flex items-center gap-1.5 border transition-all cursor-pointer ${
                isAutoPlay
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
              }`}
              title={isAutoPlay ? "Avtomatik o'tishni to'xtatish" : "Avtomatik o'tishni yoqish (har 8 soniyada)"}
            >
              {isAutoPlay ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              <span>{isAutoPlay ? 'To\'xtatish' : 'Avto-slayd'}</span>
            </button>
          )}

          <button
            onClick={onToggleViewMode}
            className="px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 transition-colors cursor-pointer"
            title="Rejimni almashtirish"
          >
            {viewMode === 'slides' ? (
              <>
                <LayoutGrid className="h-4 w-4 text-indigo-400" />
                <span>Bitta sahifada ko&apos;rish</span>
              </>
            ) : (
              <>
                <Presentation className="h-4 w-4 text-indigo-400" />
                <span>Slayd Rejimiga o&apos;tish</span>
              </>
            )}
          </button>

          <button
            onClick={onToggleFullscreen}
            className="p-2 rounded-xl bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 transition-colors cursor-pointer"
            title={isFullscreen ? "To'liq ekrandan chiqish" : "To'liq ekran rejimiga o'tish (F11)"}
          >
            {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </button>

          <button
            onClick={onExportCSV}
            className="px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 bg-emerald-600/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-600/30 transition-colors cursor-pointer"
            title="Excel formatida yuklab olish"
          >
            <FileSpreadsheet className="h-4 w-4 text-emerald-400" />
            <span>Excel</span>
          </button>
        </div>
      </div>

      {/* Slide Progress bar (100% full width) */}
      {viewMode === 'slides' && (
        <div className="w-full h-1 bg-slate-800 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-500 transition-all duration-300"
            style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
          />
        </div>
      )}
    </header>
  );
};
