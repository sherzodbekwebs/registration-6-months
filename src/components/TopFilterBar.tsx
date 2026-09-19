import React from 'react';
import { RotateCcw, Download, Search, Truck, Calendar, Layers, ShieldCheck } from 'lucide-react';
import { FilterParams } from '../data/filterQueryEngine';
import { MonthKey } from '../types';

interface TopFilterBarProps {
  filters: FilterParams;
  onFilterChange: (newFilters: Partial<FilterParams>) => void;
  onResetFilters: () => void;
  brandsList: { name: string; total: number }[];
  equipmentList: { name: string; total: number }[];
  onExportCSV: () => void;
  totalFilteredCount: number;
}

export const TopFilterBar: React.FC<TopFilterBarProps> = ({
  filters,
  onFilterChange,
  onResetFilters,
  brandsList,
  equipmentList,
  onExportCSV,
  totalFilteredCount,
}) => {
  const months: { key: 'all' | MonthKey; label: string }[] = [
    { key: 'all', label: 'Барча ойлар (Янв–Июн)' },
    { key: 'jan', label: 'Январь' },
    { key: 'feb', label: 'Февраль' },
    { key: 'mar', label: 'Март' },
    { key: 'apr', label: 'Апрель' },
    { key: 'may', label: 'Май' },
    { key: 'jun', label: 'Июнь' },
  ];

  const hasActiveFilters =
    filters.registrationType !== 'all' ||
    filters.month !== 'all' ||
    filters.brand !== 'all' ||
    filters.equipment !== 'all' ||
    filters.searchQuery !== '';

  return (
    <div className="w-full bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-3.5">
        {/* Top title line with quick actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold shadow-xs">
              <Truck className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-none">
                N3 Тижорат юк машиналари таҳлили
              </h1>
              <p className="text-xs text-slate-500 mt-1 font-normal">
                Фильтрлар орқали ойлар, брендлар ва техникалар кесимидаги диаграмма ва жадваллар
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="text-xs font-semibold px-3 py-1.5 bg-blue-50 text-blue-700 rounded-md border border-blue-200">
              Танланган: <strong className="font-bold text-blue-900">{totalFilteredCount.toLocaleString()}</strong> та
            </div>

            {hasActiveFilters && (
              <button
                onClick={onResetFilters}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-md border border-red-200 transition-colors cursor-pointer"
                title="Барча фильтрларни тозалаш"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Тозалаш</span>
              </button>
            )}

            <button
              onClick={onExportCSV}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-md border border-emerald-200 transition-colors cursor-pointer shadow-2xs"
              title="Excel форматда юклаб олиш"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Excel</span>
            </button>
          </div>
        </div>

        {/* Filters Controls Grid (4 main filters) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-1">
          {/* Filter 1: Первичный / Вторичный / Барчаси */}
          <div className="flex flex-col">
            <label className="text-xs font-bold text-slate-600 mb-1 flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
              1. Рўйхат тури (Первичный / Вторичный)
            </label>
            <div className="grid grid-cols-3 bg-slate-100 p-1 rounded-lg border border-slate-200">
              <button
                onClick={() => onFilterChange({ registrationType: 'all' })}
                className={`py-1 text-xs font-bold rounded-md transition-all cursor-pointer ${
                  filters.registrationType === 'all'
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Барчаси
              </button>
              <button
                onClick={() => onFilterChange({ registrationType: 'primary' })}
                className={`py-1 text-xs font-bold rounded-md transition-all cursor-pointer ${
                  filters.registrationType === 'primary'
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Первичный — янги салондан"
              >
                Первичный
              </button>
              <button
                onClick={() => onFilterChange({ registrationType: 'secondary' })}
                className={`py-1 text-xs font-bold rounded-md transition-all cursor-pointer ${
                  filters.registrationType === 'secondary'
                    ? 'bg-emerald-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Вторичный — бозордан олинган"
              >
                Вторичный
              </button>
            </div>
          </div>

          {/* Filter 2: Ойлар бўйича фильтр */}
          <div className="flex flex-col">
            <label className="text-xs font-bold text-slate-600 mb-1 flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5 text-blue-600" />
              2. Ойлар бўйича фильтр
            </label>
            <div className="relative">
              <select
                value={filters.month}
                onChange={(e) => onFilterChange({ month: e.target.value as 'all' | MonthKey })}
                className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm rounded-lg px-3 py-1.5 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:bg-white font-medium cursor-pointer"
              >
                {months.map((m) => (
                  <option key={m.key} value={m.key}>
                    {m.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Filter 3: Брендлар бўйича фильтр */}
          <div className="flex flex-col">
            <label className="text-xs font-bold text-slate-600 mb-1 flex items-center gap-1">
              <Truck className="h-3.5 w-3.5 text-blue-600" />
              3. Брендлар бўйича фильтр
            </label>
            <div className="relative">
              <select
                value={filters.brand}
                onChange={(e) => onFilterChange({ brand: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm rounded-lg px-3 py-1.5 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:bg-white font-medium cursor-pointer"
              >
                <option value="all">Барча брендлар (45+ бренд)</option>
                {brandsList.map((b) => (
                  <option key={b.name} value={b.name}>
                    {b.name} ({b.total.toLocaleString()} та)
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Filter 4: Техникалар бўйича фильтр (Самосвал, Тягач...) */}
          <div className="flex flex-col">
            <label className="text-xs font-bold text-slate-600 mb-1 flex items-center gap-1">
              <Layers className="h-3.5 w-3.5 text-blue-600" />
              4. Техникалар (Самосвал, Тягач...)
            </label>
            <div className="relative">
              <select
                value={filters.equipment}
                onChange={(e) => onFilterChange({ equipment: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm rounded-lg px-3 py-1.5 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:bg-white font-medium cursor-pointer"
              >
                <option value="all">Барча техникалар (Барчаси)</option>
                {equipmentList.map((eq) => (
                  <option key={eq.name} value={eq.name}>
                    {eq.name} ({eq.total.toLocaleString()} та)
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Quick Search line */}
        <div className="mt-2.5 pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="relative w-full sm:w-80">
            <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={filters.searchQuery}
              onChange={(e) => onFilterChange({ searchQuery: e.target.value })}
              placeholder="Тезкор қидирув (масалан: HOWO, Кран)..."
              className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-xs font-medium text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:ring-1 focus:ring-blue-500 focus:bg-white"
            />
          </div>

          {/* Quick shortcuts for most popular equipment */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 text-xs">
            <span className="text-slate-400 font-semibold whitespace-nowrap">Оммабоп:</span>
            {['Тягач', 'Самосвал', 'Автокран', 'Бортовой', 'Бетоносмеситель'].map((eqName) => {
              const isActive = filters.equipment.toLowerCase() === eqName.toLowerCase();
              return (
                <button
                  key={eqName}
                  onClick={() => onFilterChange({ equipment: isActive ? 'all' : eqName })}
                  className={`px-2.5 py-1 rounded-md font-semibold text-xs transition-colors cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {eqName}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
