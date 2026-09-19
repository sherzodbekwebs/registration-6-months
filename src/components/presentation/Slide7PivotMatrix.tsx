import React, { useState, useMemo } from 'react';
import { Table, Search, Filter, ArrowRight, ArrowUpDown, ChevronDown, ChevronUp } from 'lucide-react';
import { AggregatedBrand } from '../../types';
import { rawData } from '../../data/n3Data';

interface SlideProps {
  brands: AggregatedBrand[];
  onNextSlide?: () => void;
  onSelectBrand?: (brand: AggregatedBrand) => void;
}

export const Slide7PivotMatrix: React.FC<SlideProps> = ({ brands, onNextSlide, onSelectBrand }) => {
  const [search, setSearch] = useState('');
  const [regFilter, setRegFilter] = useState<'all' | 'primary' | 'secondary'>('all');
  const [sortField, setSortField] = useState<'total' | 'primary' | 'secondary' | 'name'>('total');
  const [sortAsc, setSortAsc] = useState(false);

  const filteredBrands = useMemo(() => {
    return brands
      .filter((b) => {
        const matchesSearch = b.brandName.toLowerCase().includes(search.toLowerCase());
        if (!matchesSearch) return false;
        if (regFilter === 'primary' && b.primaryTotal === 0) return false;
        if (regFilter === 'secondary' && b.secondaryTotal === 0) return false;
        return true;
      })
      .sort((a, b) => {
        if (sortField === 'name') {
          return sortAsc
            ? a.brandName.localeCompare(b.brandName)
            : b.brandName.localeCompare(a.brandName);
        } else if (sortField === 'primary') {
          return sortAsc
            ? a.primaryTotal - b.primaryTotal
            : b.primaryTotal - a.primaryTotal;
        } else if (sortField === 'secondary') {
          return sortAsc
            ? a.secondaryTotal - b.secondaryTotal
            : b.secondaryTotal - a.secondaryTotal;
        } else {
          return sortAsc ? a.total - b.total : b.total - a.total;
        }
      });
  }, [brands, search, regFilter, sortField, sortAsc]);

  const handleSort = (field: 'total' | 'primary' | 'secondary' | 'name') => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(false);
    }
  };

  return (
    <div className="w-full flex-1 flex flex-col justify-between py-2 sm:py-4">
      {/* Header */}
      <div className="mb-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-100 text-indigo-900 border border-indigo-200 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
          <Table className="h-4 w-4 text-amber-600" />
          7-Slayd: To&apos;liq Ma&apos;lumotlar Matritsasi
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Barcha 45+ Brendlar Ro&apos;yxati
        </h2>
        <p className="text-base sm:text-lg text-slate-600 font-medium mt-1 max-w-4xl">
          Qidiruv, saralash va har bir brendning oylik va turlar bo&apos;yicha to&apos;liq statistikasi
        </p>
      </div>

      {/* Control filters bar (100% width) */}
      <div className="bg-white rounded-2xl p-4 border-2 border-slate-200 shadow-sm mb-4 flex flex-col md:flex-row items-center justify-between gap-3 w-full">
        {/* Search input */}
        <div className="relative w-full md:w-80">
          <Search className="h-5 w-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Brend nomini qidiring (masalan: MAN, HOWO)..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:bg-white"
          />
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          <span className="text-xs font-bold text-slate-500 hidden sm:inline">Holat:</span>
          {(['all', 'primary', 'secondary'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setRegFilter(mode)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                regFilter === mode
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {mode === 'all' && 'Barchasi (10,763)'}
              {mode === 'primary' && 'Yangi salondan (1,794)'}
              {mode === 'secondary' && 'Ikkilamchi bozor (8,969)'}
            </button>
          ))}
        </div>
      </div>

      {/* 100% Width Table Container */}
      <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-sm overflow-hidden mb-6 w-full">
        <div className="overflow-x-auto max-h-[460px] overflow-y-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead className="bg-slate-900 text-white sticky top-0 z-10 text-xs sm:text-sm font-extrabold uppercase tracking-wider">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">#</th>
                <th
                  onClick={() => handleSort('name')}
                  className="py-3.5 px-4 sm:px-6 cursor-pointer hover:bg-slate-800"
                >
                  <div className="flex items-center gap-1.5">
                    <span>Brend Nomi</span>
                    <ArrowUpDown className="h-3.5 w-3.5 text-slate-400" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('primary')}
                  className="py-3.5 px-4 text-center cursor-pointer hover:bg-slate-800 text-indigo-300"
                >
                  <div className="flex items-center justify-center gap-1">
                    <span>Yangi (Birlamchi)</span>
                    <ArrowUpDown className="h-3.5 w-3.5" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('secondary')}
                  className="py-3.5 px-4 text-center cursor-pointer hover:bg-slate-800 text-emerald-300"
                >
                  <div className="flex items-center justify-center gap-1">
                    <span>Ikkilamchi (Bozor)</span>
                    <ArrowUpDown className="h-3.5 w-3.5" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('total')}
                  className="py-3.5 px-4 sm:px-6 text-right cursor-pointer hover:bg-slate-800"
                >
                  <div className="flex items-center justify-end gap-1">
                    <span>Jami Hajm</span>
                    <ArrowUpDown className="h-3.5 w-3.5 text-amber-400" />
                  </div>
                </th>
                <th className="py-3.5 px-4 text-right">Bozor Ulushi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              {filteredBrands.map((b, idx) => {
                const sharePct = ((b.total / 10763) * 100).toFixed(1);
                return (
                  <tr
                    key={b.brandName}
                    onClick={() => onSelectBrand?.(b)}
                    className="hover:bg-indigo-50/60 transition-colors cursor-pointer group"
                  >
                    <td className="py-3 px-4 sm:px-6 font-bold text-slate-400">
                      {idx + 1}
                    </td>
                    <td className="py-3 px-4 sm:px-6 font-extrabold text-slate-900 group-hover:text-indigo-700">
                      {b.brandName}
                    </td>
                    <td className="py-3 px-4 text-center font-bold text-indigo-700 bg-indigo-50/20">
                      {b.primaryTotal > 0 ? b.primaryTotal.toLocaleString() : '—'}
                    </td>
                    <td className="py-3 px-4 text-center font-bold text-emerald-700 bg-emerald-50/20">
                      {b.secondaryTotal > 0 ? b.secondaryTotal.toLocaleString() : '—'}
                    </td>
                    <td className="py-3 px-4 sm:px-6 text-right font-black text-slate-900 text-sm sm:text-base">
                      {b.total.toLocaleString()}
                    </td>
                    <td className="py-3 px-4 text-right font-black text-amber-700">
                      {sharePct}%
                    </td>
                  </tr>
                );
              })}

              {filteredBrands.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-slate-400 font-bold">
                    Hech qanday brend topilmadi (&ldquo;{search}&rdquo;)
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Navigation footer */}
      {onNextSlide && (
        <div className="flex justify-end">
          <button
            onClick={onNextSlide}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-sm sm:text-base rounded-2xl shadow-md transition-all cursor-pointer"
          >
            <span>8-Slayd: Strategik Xulosalar va Tavsiyalar</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
};
