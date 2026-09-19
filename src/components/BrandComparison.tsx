import React, { useState } from 'react';
import { GitCompare, Check, TrendingUp, Layers, Award } from 'lucide-react';
import { AggregatedBrand, MonthKey, RegistrationFilter } from '../types';
import { MONTH_NAMES } from '../data/n3Data';
import { getEquipmentDisplay } from '../data/equipmentDescriptions';

interface BrandComparisonProps {
  brands: AggregatedBrand[];
  filter: RegistrationFilter;
}

export const BrandComparison: React.FC<BrandComparisonProps> = ({ brands, filter }) => {
  const topNames = brands.slice(0, 10).map(b => b.brandName);

  const [brandA, setBrandA] = useState<string>(topNames[0] || 'MAN');
  const [brandB, setBrandB] = useState<string>(topNames[1] || 'SINOTRUK');
  const [brandC, setBrandC] = useState<string>(topNames[2] || 'KAMAZ');

  const bA = brands.find(b => b.brandName === brandA);
  const bB = brands.find(b => b.brandName === brandB);
  const bC = brands.find(b => b.brandName === brandC);

  const selectedList = [bA, bB, bC].filter(Boolean) as AggregatedBrand[];
  const months: MonthKey[] = ['jan', 'feb', 'mar', 'apr', 'may', 'jun'];

  const allEqNames = Array.from(
    new Set(selectedList.flatMap(b => Object.keys(b.equipmentMap)))
  ).slice(0, 10);

  const colors = [
    { bg: 'bg-indigo-600', text: 'text-indigo-700', border: 'border-indigo-500' },
    { bg: 'bg-emerald-600', text: 'text-emerald-700', border: 'border-emerald-500' },
    { bg: 'bg-amber-600', text: 'text-amber-700', border: 'border-amber-500' },
  ];

  return (
    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm mb-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <GitCompare className="h-6 w-6 text-indigo-600" />
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Brendlarni O&apos;zaro Taqqoslash
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 font-medium mt-1">
            2 yoki 3 ta brendni tanlab, ularning ko&apos;rsatkichlarini yonma-yon solishtiring
          </p>
        </div>

        {/* Brand Selectors */}
        <div className="flex flex-wrap items-center gap-2.5">
          <select
            value={brandA}
            onChange={(e) => setBrandA(e.target.value)}
            className="text-sm font-bold px-3.5 py-2.5 rounded-xl border border-indigo-300 bg-indigo-50 text-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
          >
            {brands.map(b => (
              <option key={b.brandName} value={b.brandName}>1-brend: {b.brandName}</option>
            ))}
          </select>

          <select
            value={brandB}
            onChange={(e) => setBrandB(e.target.value)}
            className="text-sm font-bold px-3.5 py-2.5 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
          >
            {brands.map(b => (
              <option key={b.brandName} value={b.brandName}>2-brend: {b.brandName}</option>
            ))}
          </select>

          <select
            value={brandC}
            onChange={(e) => setBrandC(e.target.value)}
            className="text-sm font-bold px-3.5 py-2.5 rounded-xl border border-amber-300 bg-amber-50 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
          >
            {brands.map(b => (
              <option key={b.brandName} value={b.brandName}>3-brend: {b.brandName}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        {selectedList.map((b, idx) => {
          const c = colors[idx % colors.length];
          const primaryPct = b.total > 0 ? ((b.primaryTotal / b.total) * 100).toFixed(0) : '0';
          const secondaryPct = b.total > 0 ? ((b.secondaryTotal / b.total) * 100).toFixed(0) : '0';

          return (
            <div key={b.brandName} className="p-6 rounded-3xl border border-slate-200 bg-slate-50 relative overflow-hidden shadow-2xs">
              <div className={`h-2 w-full absolute top-0 left-0 ${c.bg}`} />
              <div className="flex items-center justify-between mb-3">
                <span className="font-black text-xl text-slate-900">{b.brandName}</span>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${c.text} bg-white border border-slate-200`}>
                  {b.share.toFixed(1)}% Bozor
                </span>
              </div>

              <div className="text-3xl font-black text-slate-900 mb-1">
                {b.total.toLocaleString()} dona
              </div>
              <p className="text-xs text-slate-500 font-medium mb-4">
                jami 6 oyda ro&apos;yxatga olingan
              </p>

              <div className="space-y-2 text-sm text-slate-700 pt-3 border-t border-slate-200">
                <div className="flex justify-between">
                  <span>Yangi Salondan:</span>
                  <strong className="text-indigo-700">{b.primaryTotal} ({primaryPct}%)</strong>
                </div>
                <div className="flex justify-between">
                  <span>Bozordan olingan:</span>
                  <strong className="text-emerald-700">{b.secondaryTotal} ({secondaryPct}%)</strong>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Monthly comparison cards */}
      <div className="pt-6 border-t border-slate-200">
        <h3 className="text-base font-bold text-slate-800 uppercase tracking-wider mb-4">
          Oylar bo&apos;yicha solishtirish (dona)
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-3">
          {months.map(m => (
            <div key={m} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-center">
              <span className="text-xs font-bold text-slate-500 uppercase">{MONTH_NAMES[m].uz}</span>
              <div className="space-y-1 mt-2">
                {selectedList.map((b, idx) => (
                  <div key={b.brandName} className="text-xs font-bold flex justify-between">
                    <span className="text-slate-500 truncate w-16 text-left">{b.brandName}:</span>
                    <span className={colors[idx].text}>{b[m]}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
