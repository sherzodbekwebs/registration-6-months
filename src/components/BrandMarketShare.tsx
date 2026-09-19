import React, { useState } from 'react';
import { Trophy, ChevronRight, Eye, Sparkles } from 'lucide-react';
import { AggregatedBrand, MonthKey, RegistrationFilter } from '../types';
import { getEquipmentDisplay } from '../data/equipmentDescriptions';

interface BrandMarketShareProps {
  brands: AggregatedBrand[];
  filter: RegistrationFilter;
  selectedMonth: MonthKey | null;
  onSelectBrand: (brand: AggregatedBrand) => void;
}

export const BrandMarketShare: React.FC<BrandMarketShareProps> = ({
  brands,
  filter,
  selectedMonth,
  onSelectBrand,
}) => {
  const [displayCount, setDisplayCount] = useState<number>(8);

  const getBrandValue = (b: AggregatedBrand) => {
    if (selectedMonth) {
      return b[selectedMonth];
    }
    return filter === 'primary' ? b.primaryTotal : filter === 'secondary' ? b.secondaryTotal : b.total;
  };

  const sortedBrands = [...brands]
    .map(b => ({
      ...b,
      currentValue: getBrandValue(b),
    }))
    .filter(b => b.currentValue > 0)
    .sort((a, b) => b.currentValue - a.currentValue);

  const totalCurrentValue = sortedBrands.reduce((acc, b) => acc + b.currentValue, 0);
  const displayedBrands = sortedBrands.slice(0, displayCount);

  return (
    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <Trophy className="h-6 w-6 text-amber-500" />
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Eng Ko&apos;p Sotilgan Brendlar (Reyting)
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 font-medium mt-1">
            Qaysi marka O&apos;zbekiston bozorida ko&apos;proq xarid qilingan?
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="text-xs sm:text-sm font-bold text-slate-500">Ro&apos;yxat:</span>
          {[8, 15, 30].map(cnt => (
            <button
              key={cnt}
              onClick={() => setDisplayCount(cnt)}
              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                displayCount === cnt
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Top {cnt}
            </button>
          ))}
        </div>
      </div>

      {/* Brand list with large, legible typography */}
      <div className="space-y-4">
        {displayedBrands.map((b, idx) => {
          const share = totalCurrentValue > 0 ? (b.currentValue / totalCurrentValue) * 100 : 0;

          // Find top equipment for this brand
          const sortedEq = Object.values(b.equipmentMap).sort((x, y) => y.total - x.total);
          const topModel = sortedEq[0];
          const topModelDisplay = topModel ? getEquipmentDisplay(topModel.name) : null;

          return (
            <div
              key={b.brandName}
              onClick={() => onSelectBrand(b)}
              className="p-5 rounded-2xl bg-slate-50/70 hover:bg-indigo-50/50 border border-slate-200 hover:border-indigo-300 transition-all cursor-pointer group shadow-2xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                {/* Left side: Rank + Brand Name */}
                <div className="flex items-center gap-3.5">
                  <div className={`h-10 w-10 rounded-xl flex items-center justify-center font-black text-base shrink-0 ${
                    idx === 0 ? 'bg-amber-100 text-amber-900 ring-2 ring-amber-300' : idx === 1 ? 'bg-slate-200 text-slate-800' : idx === 2 ? 'bg-amber-50 text-amber-800' : 'bg-white text-slate-600 border border-slate-200'
                  }`}>
                    {idx + 1}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {b.brandName}
                      </span>
                      <span className="text-xs sm:text-sm font-bold bg-white text-slate-700 px-2.5 py-0.5 rounded-md border border-slate-200">
                        {share.toFixed(1)}% bozor
                      </span>
                    </div>

                    {/* Plain language subtext */}
                    {topModel && (
                      <div className="text-xs sm:text-sm text-slate-600 mt-1">
                        Asosiy modeli: <strong className="text-slate-900">{topModel.name}</strong> ({topModel.total} dona)
                      </div>
                    )}
                  </div>
                </div>

                {/* Right side: Big Number & Action */}
                <div className="flex items-center justify-between sm:justify-end gap-4 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-200">
                  <div className="text-left sm:text-right">
                    <div className="text-xl sm:text-2xl font-black text-slate-900">
                      {b.currentValue.toLocaleString()} dona
                    </div>
                    {filter === 'all' && (
                      <div className="text-xs text-slate-500 font-medium">
                        Yangi: <strong className="text-indigo-700">{b.primaryTotal}</strong> | Bozor: <strong className="text-emerald-700">{b.secondaryTotal}</strong>
                      </div>
                    )}
                  </div>

                  <div className="h-8 w-8 rounded-lg bg-white group-hover:bg-indigo-600 group-hover:text-white text-slate-400 flex items-center justify-center border border-slate-200 transition-colors shrink-0">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden flex mt-3">
                {filter === 'all' && !selectedMonth ? (
                  <>
                    <div
                      className="bg-indigo-600 h-full"
                      style={{ width: `${b.total > 0 ? (b.primaryTotal / b.total) * share : 0}%` }}
                      title={`Yangi: ${b.primaryTotal}`}
                    />
                    <div
                      className="bg-emerald-600 h-full"
                      style={{ width: `${b.total > 0 ? (b.secondaryTotal / b.total) * share : 0}%` }}
                      title={`Ishlatilgan: ${b.secondaryTotal}`}
                    />
                  </>
                ) : (
                  <div
                    className="bg-indigo-600 h-full rounded-full"
                    style={{ width: `${Math.min(share, 100)}%` }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-sm text-slate-600">
        <span>Jami <strong>{sortedBrands.length} ta</strong> brend sotuvda qatnashgan</span>
        <span className="text-indigo-600 font-bold flex items-center gap-1.5">
          <Eye className="h-4 w-4" />
          Istalgan brend ustiga bossangiz, to&apos;liq ma&apos;lumoti ochiladi
        </span>
      </div>
    </div>
  );
};
