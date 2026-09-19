import React from 'react';
import { Truck, Download, Search, FileSpreadsheet, RotateCcw, BarChart3, Trophy, Layers, Calendar, TableProperties, GitCompare } from 'lucide-react';
import { RegistrationFilter, ViewTab } from '../types';
import { rawData } from '../data/n3Data';

interface HeaderProps {
  activeFilter: RegistrationFilter;
  setActiveFilter: (filter: RegistrationFilter) => void;
  activeTab: ViewTab | 'monthly';
  setActiveTab: (tab: any) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onExportCSV: () => void;
  onExportJSON: () => void;
  onResetFilters: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeFilter,
  setActiveFilter,
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  onExportCSV,
  onExportJSON,
  onResetFilters,
}) => {
  const primaryTotal = rawData.registration_types.primary.total;
  const secondaryTotal = rawData.registration_types.secondary.total;
  const grandTotal = primaryTotal + secondaryTotal;

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-4">
        {/* Main Title Row */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="h-12 w-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-sm shrink-0">
              <Truck className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
                  O&apos;zbekistonda Yuk Mashinalari Bozori
                </h1>
                <span className="px-3 py-1 text-xs sm:text-sm font-bold bg-amber-100 text-amber-900 rounded-full border border-amber-300/80">
                  N3 Toifasi (Og&apos;ir texnika)
                </span>
              </div>
              <p className="text-sm sm:text-base text-slate-600 font-medium mt-1">
                6 oylik (Yanvar – Iyun) hisoboti: qaysi mashinalar ko&apos;p olingan va bozor holati qanday?
              </p>
            </div>
          </div>

          {/* Search and Action Buttons */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <div className="relative flex-1 sm:flex-initial">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                id="search-input"
                type="text"
                placeholder="Qidiruv: MAN, KAMAZ, Fura..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-11 pr-8 py-2.5 text-sm sm:text-base bg-slate-50 hover:bg-slate-100/90 focus:bg-white border border-slate-300 rounded-xl w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-slate-900 font-medium shadow-2xs transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-1 text-sm font-bold"
                  title="Tozalash"
                >
                  ✕
                </button>
              )}
            </div>

            <button
              onClick={onExportCSV}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 rounded-xl shadow-2xs transition-colors cursor-pointer"
              title="Excel formatida yuklab olish"
            >
              <FileSpreadsheet className="h-4 w-4 text-emerald-600" />
              <span>Excel (CSV)</span>
            </button>

            <button
              onClick={onResetFilters}
              className="p-2.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors cursor-pointer"
              title="Filtrlarni tiklash"
            >
              <RotateCcw className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Big Filter Tabs: Yangi vs Ishlatilgan */}
        <div className="mt-5 pt-4 border-t border-slate-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-bold text-slate-700 mr-1">Holati:</span>
            <div className="inline-flex p-1 bg-slate-100 rounded-2xl border border-slate-200/90">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 text-sm font-bold rounded-xl transition-all cursor-pointer ${
                  activeFilter === 'all'
                    ? 'bg-white text-slate-900 shadow-xs ring-1 ring-slate-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Barchasi ({grandTotal.toLocaleString()} dona)
              </button>

              <button
                onClick={() => setActiveFilter('primary')}
                className={`px-4 py-2 text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                  activeFilter === 'primary'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-indigo-600'
                }`}
              >
                <span className={`w-2.5 h-2.5 rounded-full ${activeFilter === 'primary' ? 'bg-white' : 'bg-indigo-500'}`} />
                Yangi Salondan ({primaryTotal.toLocaleString()})
              </button>

              <button
                onClick={() => setActiveFilter('secondary')}
                className={`px-4 py-2 text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                  activeFilter === 'secondary'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-emerald-600'
                }`}
              >
                <span className={`w-2.5 h-2.5 rounded-full ${activeFilter === 'secondary' ? 'bg-white' : 'bg-emerald-500'}`} />
                Bozordan olingan ({secondaryTotal.toLocaleString()})
              </button>
            </div>
          </div>

          {/* Navigation View Tabs */}
          <nav className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            <button
              onClick={() => setActiveTab('overview')}
              className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <BarChart3 className="h-4 w-4" />
              Asosiy Xulosalar
            </button>

            <button
              onClick={() => setActiveTab('matrix')}
              className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'matrix'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <TableProperties className="h-4 w-4" />
              Katta Jadval
            </button>

            <button
              onClick={() => setActiveTab('equipment')}
              className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'equipment'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Layers className="h-4 w-4" />
              Mashina Turlari (Fura, Samosval...)
            </button>

            <button
              onClick={() => setActiveTab('comparison')}
              className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'comparison'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <GitCompare className="h-4 w-4" />
              Brendlarni Solishtirish
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
