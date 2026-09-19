import React, { useState } from 'react';
import { ChevronDown, ChevronRight, ArrowUpDown, Download, Search, Info } from 'lucide-react';
import { AggregatedBrand, MonthKey, RegistrationFilter } from '../types';
import { MONTH_NAMES } from '../data/n3Data';
import { getEquipmentDisplay } from '../data/equipmentDescriptions';

interface PivotTableProps {
  brands: AggregatedBrand[];
  filter: RegistrationFilter;
  searchQuery: string;
  onSelectBrand: (brand: AggregatedBrand) => void;
}

type SortField = 'brand' | 'jan' | 'feb' | 'mar' | 'apr' | 'may' | 'jun' | 'total' | 'share';

export const PivotTable: React.FC<PivotTableProps> = ({
  brands,
  filter,
  searchQuery,
  onSelectBrand,
}) => {
  const [expandedBrands, setExpandedBrands] = useState<Set<string>>(new Set());
  const [sortField, setSortField] = useState<SortField>('total');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [pageSize, setPageSize] = useState<number>(20);

  const toggleExpand = (brandName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const next = new Set(expandedBrands);
    if (next.has(brandName)) {
      next.delete(brandName);
    } else {
      next.add(brandName);
    }
    setExpandedBrands(next);
  };

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const filteredBrands = brands.filter(b => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    const matchBrand = b.brandName.toLowerCase().includes(q);
    const matchEq = Object.keys(b.equipmentMap).some(eq => eq.toLowerCase().includes(q));
    return matchBrand || matchEq;
  });

  const sortedBrands = [...filteredBrands].sort((a, b) => {
    let aVal: number | string = 0;
    let bVal: number | string = 0;

    if (sortField === 'brand') {
      aVal = a.brandName;
      bVal = b.brandName;
      return sortDirection === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
    } else if (sortField === 'share') {
      aVal = a.share;
      bVal = b.share;
    } else if (sortField === 'total') {
      aVal = filter === 'primary' ? a.primaryTotal : filter === 'secondary' ? a.secondaryTotal : a.total;
      bVal = filter === 'primary' ? b.primaryTotal : filter === 'secondary' ? b.secondaryTotal : b.total;
    } else {
      aVal = a[sortField];
      bVal = b[sortField];
    }

    return sortDirection === 'asc' ? Number(aVal) - Number(bVal) : Number(bVal) - Number(aVal);
  });

  const displayedList = sortedBrands.slice(0, pageSize);

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm mb-8 overflow-hidden">
      {/* Title & Controls */}
      <div className="p-6 sm:p-8 border-b border-slate-200 bg-slate-50/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Brendlar Bo&apos;yicha To&apos;liq Ma&apos;lumotlar Jadvali
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium mt-1">
            Har bir brendning oylik savdosi va mashina turlari (qator yonidagi strelkani bosib oching)
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-slate-700 bg-white px-3 py-1.5 rounded-xl border border-slate-200">
            Jami: {sortedBrands.length} ta brend
          </span>
        </div>
      </div>

      {/* Table with comfortable text size */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm sm:text-base border-collapse">
          <thead>
            <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold text-xs sm:text-sm uppercase tracking-wider">
              <th className="py-4 px-4 w-12 text-center">#</th>
              <th
                onClick={() => handleSort('brand')}
                className="py-4 px-4 cursor-pointer hover:text-indigo-600 transition-colors"
              >
                <div className="flex items-center gap-1.5">
                  <span>Brend Nomi</span>
                  <ArrowUpDown className="h-4 w-4 text-slate-400" />
                </div>
              </th>
              {(['jan', 'feb', 'mar', 'apr', 'may', 'jun'] as MonthKey[]).map(m => (
                <th
                  key={m}
                  onClick={() => handleSort(m)}
                  className="py-4 px-3 text-right cursor-pointer hover:text-indigo-600 transition-colors"
                >
                  <div className="flex items-center justify-end gap-1">
                    <span>{MONTH_NAMES[m].uz}</span>
                    <ArrowUpDown className="h-3 w-3 text-slate-400" />
                  </div>
                </th>
              ))}
              <th
                onClick={() => handleSort('total')}
                className="py-4 px-5 text-right cursor-pointer hover:text-indigo-600 transition-colors font-black text-slate-900"
              >
                <div className="flex items-center justify-end gap-1.5">
                  <span>Jami</span>
                  <ArrowUpDown className="h-4 w-4 text-slate-600" />
                </div>
              </th>
              <th
                onClick={() => handleSort('share')}
                className="py-4 px-4 text-right cursor-pointer hover:text-indigo-600 transition-colors"
              >
                <div className="flex items-center justify-end gap-1">
                  <span>Ulushi</span>
                  <ArrowUpDown className="h-3.5 w-3.5 text-slate-400" />
                </div>
              </th>
              {filter === 'all' && (
                <th className="py-4 px-4 text-center">Yangi / Bozor</th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {displayedList.map((b, idx) => {
              const isExpanded = expandedBrands.has(b.brandName);
              const eqKeys = Object.keys(b.equipmentMap);
              const relevantTotal = filter === 'primary' ? b.primaryTotal : filter === 'secondary' ? b.secondaryTotal : b.total;

              return (
                <React.Fragment key={b.brandName}>
                  <tr
                    onClick={() => onSelectBrand(b)}
                    className="hover:bg-indigo-50/40 transition-colors cursor-pointer group"
                  >
                    <td className="py-4 px-4 text-center text-slate-400 font-bold">
                      {idx + 1}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2.5">
                        {eqKeys.length > 0 && (
                          <button
                            onClick={(e) => toggleExpand(b.brandName, e)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-200 transition-colors cursor-pointer"
                            title="Mashina turlarini ko'rish"
                          >
                            {isExpanded ? (
                              <ChevronDown className="h-4 w-4 text-indigo-600" />
                            ) : (
                              <ChevronRight className="h-4 w-4" />
                            )}
                          </button>
                        )}
                        <span className="font-extrabold text-slate-900 text-base sm:text-lg group-hover:text-indigo-600 transition-colors">
                          {b.brandName}
                        </span>
                        <span className="text-xs text-slate-500 font-medium bg-slate-100 px-2 py-0.5 rounded-md">
                          {eqKeys.length} xil model
                        </span>
                      </div>
                    </td>

                    {/* Months */}
                    {(['jan', 'feb', 'mar', 'apr', 'may', 'jun'] as MonthKey[]).map(m => (
                      <td key={m} className="py-4 px-3 text-right font-medium text-slate-700 tabular-nums">
                        {b[m] > 0 ? b[m].toLocaleString() : <span className="text-slate-300">—</span>}
                      </td>
                    ))}

                    {/* Total */}
                    <td className="py-4 px-5 text-right font-black text-slate-900 text-base sm:text-lg tabular-nums">
                      {relevantTotal.toLocaleString()}
                    </td>

                    {/* Share */}
                    <td className="py-4 px-4 text-right font-bold text-slate-600 tabular-nums">
                      {b.share.toFixed(1)}%
                    </td>

                    {/* Primary / Secondary */}
                    {filter === 'all' && (
                      <td className="py-4 px-4 text-center">
                        <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                          <strong className="text-indigo-700">{b.primaryTotal}</strong> yangi / <strong className="text-emerald-700">{b.secondaryTotal}</strong> bozor
                        </span>
                      </td>
                    )}
                  </tr>

                  {/* Expanded Sub-table */}
                  {isExpanded && (
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <td colSpan={filter === 'all' ? 11 : 10} className="p-4 pl-14">
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
                          <div className="text-sm font-bold text-slate-800 mb-3 flex items-center justify-between">
                            <span>{b.brandName} brendiga tegishli mashinalar turlari:</span>
                            <span className="text-xs text-slate-500">{eqKeys.length} ta kategoriya</span>
                          </div>

                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b border-slate-200 text-slate-500 text-xs uppercase font-bold">
                                <th className="py-2 px-3 text-left">Mashina Turi</th>
                                <th className="py-2 px-2 text-right">Yan</th>
                                <th className="py-2 px-2 text-right">Fev</th>
                                <th className="py-2 px-2 text-right">Mar</th>
                                <th className="py-2 px-2 text-right">Apr</th>
                                <th className="py-2 px-2 text-right">May</th>
                                <th className="py-2 px-2 text-right">Iyun</th>
                                <th className="py-2 px-3 text-right font-black">Jami</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                              {Object.values(b.equipmentMap)
                                .sort((x, y) => y.total - x.total)
                                .map(eq => {
                                  const eqInfo = getEquipmentDisplay(eq.name);
                                  return (
                                    <tr key={eq.name} className="hover:bg-slate-50">
                                      <td className="py-2 px-3 font-semibold text-slate-900">
                                        {eqInfo.title}
                                      </td>
                                      {(['jan', 'feb', 'mar', 'apr', 'may', 'jun'] as MonthKey[]).map(m => (
                                        <td key={m} className="py-2 px-2 text-right text-slate-600">
                                          {eq.months[m] > 0 ? eq.months[m] : '—'}
                                        </td>
                                      ))}
                                      <td className="py-2 px-3 text-right font-black text-indigo-700">
                                        {eq.total}
                                      </td>
                                    </tr>
                                  );
                                })}
                            </tbody>
                          </table>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination controls */}
      {sortedBrands.length > pageSize && (
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-sm text-slate-600">
          <span>
            Ko&apos;rsatildi: <strong>{Math.min(pageSize, sortedBrands.length)}</strong> / {sortedBrands.length} ta brend
          </span>
          <button
            onClick={() => setPageSize(sortedBrands.length)}
            className="px-4 py-2 bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 font-bold rounded-xl transition-colors cursor-pointer"
          >
            Barcha {sortedBrands.length} ta brendni ko&apos;rsatish
          </button>
        </div>
      )}
    </div>
  );
};
