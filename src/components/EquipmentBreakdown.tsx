import React, { useState } from 'react';
import { Layers, Truck, ArrowUpDown, Info, HelpCircle } from 'lucide-react';
import { AggregatedEquipment, RegistrationFilter } from '../types';
import { getEquipmentDisplay } from '../data/equipmentDescriptions';

interface EquipmentBreakdownProps {
  equipmentList: AggregatedEquipment[];
  filter: RegistrationFilter;
  onSelectBrandByName?: (brandName: string) => void;
}

export const EquipmentBreakdown: React.FC<EquipmentBreakdownProps> = ({
  equipmentList,
  filter,
  onSelectBrandByName,
}) => {
  const [selectedEquipment, setSelectedEquipment] = useState<string | null>(equipmentList[0]?.name || null);
  const grandEquipmentTotal = equipmentList.reduce((acc, eq) => acc + eq.total, 0);

  const activeEq = equipmentList.find(eq => eq.name === selectedEquipment) || equipmentList[0];
  const activeEqDisplay = activeEq ? getEquipmentDisplay(activeEq.name) : null;

  return (
    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm mb-8">
      {/* Header */}
      <div className="mb-6 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Layers className="h-6 w-6 text-indigo-600" />
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Mashina Turlari (Kuzov va Vazifasi Bo&apos;yicha)
          </h2>
        </div>
        <p className="text-sm sm:text-base text-slate-600 font-medium mt-1">
          O&apos;zbekiston bozorida asosan qanday mashinalar xarid qilingan? (Fura, Samosval, Avtokran, Mikser va h.k.)
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side: Equipment Cards */}
        <div className="lg:col-span-7 space-y-3.5 max-h-[600px] overflow-y-auto pr-2">
          {equipmentList.map((eq, i) => {
            const isSelected = selectedEquipment === eq.name;
            const percentage = grandEquipmentTotal > 0 ? (eq.total / grandEquipmentTotal) * 100 : 0;
            const displayInfo = getEquipmentDisplay(eq.name);

            return (
              <div
                key={eq.name}
                onClick={() => setSelectedEquipment(eq.name)}
                className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer shadow-2xs ${
                  isSelected
                    ? 'bg-indigo-50/70 border-indigo-400 ring-2 ring-indigo-500/20'
                    : 'bg-slate-50/70 border-slate-200 hover:border-slate-300 hover:bg-slate-100/70'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-start sm:items-center gap-3">
                    <span className="h-7 w-7 rounded-lg bg-white border border-slate-200 text-slate-700 flex items-center justify-center text-xs font-black shrink-0">
                      {i + 1}
                    </span>
                    <div>
                      <div className="text-base sm:text-lg font-black text-slate-900">
                        {displayInfo.title}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 font-medium line-clamp-1 mt-0.5">
                        {displayInfo.explanation}
                      </p>
                    </div>
                  </div>

                  <div className="text-left sm:text-right shrink-0">
                    <div className="text-lg sm:text-xl font-black text-slate-900">
                      {eq.total.toLocaleString()} dona
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-indigo-700">
                      {percentage.toFixed(1)}% ulush
                    </div>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden flex mt-2.5">
                  <div
                    className="bg-indigo-600 h-full rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(percentage * 2, 100)}%` }}
                  />
                </div>

                {/* Top brand summary */}
                <div className="mt-2 text-xs sm:text-sm text-slate-600 flex items-center justify-between">
                  <span>
                    Yangi: <strong className="text-indigo-700">{eq.primaryTotal}</strong> | Ishlatilgan: <strong className="text-emerald-700">{eq.secondaryTotal}</strong>
                  </span>
                  <span>
                    Eng ko&apos;p brend: <strong className="text-slate-900">{eq.topBrands[0]?.brand || '—'}</strong>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side: Selected Equipment Detailed Insight */}
        <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-7 rounded-3xl border border-slate-200 flex flex-col justify-between">
          {activeEq && activeEqDisplay ? (
            <div>
              {/* Header Box */}
              <div className="pb-4 border-b border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200/80">
                  Tanlangan Texnika Turi
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                  {activeEqDisplay.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed bg-white p-3.5 rounded-xl border border-slate-200">
                  💡 <strong>Vazifasi:</strong> {activeEqDisplay.explanation}
                </p>
              </div>

              {/* Total volume for this type */}
              <div className="my-5 p-4 bg-white rounded-2xl border border-slate-200 flex items-center justify-between">
                <div>
                  <div className="text-xs sm:text-sm text-slate-500 font-bold uppercase">
                    Ushbu turdagi jami mashinalar
                  </div>
                  <div className="text-3xl font-black text-slate-900 mt-0.5">
                    {activeEq.total.toLocaleString()} dona
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs sm:text-sm font-bold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
                    Bozorning {activeEq.share.toFixed(1)}% qismi
                  </span>
                </div>
              </div>

              {/* Top Brands in this segment */}
              <div>
                <h4 className="text-sm sm:text-base font-bold text-slate-800 mb-3">
                  &ldquo;{activeEq.name}&rdquo; turida qaysi brendlar yetakchi?
                </h4>
                <div className="space-y-2.5 max-h-64 overflow-y-auto pr-1">
                  {activeEq.topBrands.map((tb, idx) => {
                    const brandShareInThisEq = activeEq.total > 0 ? (tb.count / activeEq.total) * 100 : 0;
                    return (
                      <div
                        key={tb.brand}
                        onClick={() => onSelectBrandByName && onSelectBrandByName(tb.brand)}
                        className="bg-white p-3.5 rounded-xl border border-slate-200 hover:border-indigo-400 hover:shadow-xs transition-all flex items-center justify-between cursor-pointer group"
                      >
                        <div className="flex items-center gap-3">
                          <span className={`h-7 w-7 rounded-md flex items-center justify-center text-xs font-black ${
                            idx === 0 ? 'bg-amber-100 text-amber-900' : 'bg-slate-100 text-slate-700'
                          }`}>
                            {idx + 1}
                          </span>
                          <span className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                            {tb.brand}
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="text-sm sm:text-base font-black text-slate-900">
                            {tb.count.toLocaleString()} dona
                          </span>
                          <span className="text-xs font-bold text-slate-400 w-12 text-right">
                            {brandShareInThisEq.toFixed(0)}%
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16 text-slate-400 text-base">
              Texnika turini tanlang
            </div>
          )}

          <div className="mt-5 pt-4 border-t border-slate-200 text-xs sm:text-sm text-slate-500 flex items-center gap-2">
            <Truck className="h-4 w-4 text-indigo-500 shrink-0" />
            <span>Brend ustiga bosib, uning boshqa mashinalarini ham ko&apos;rishingiz mumkin</span>
          </div>
        </div>
      </div>
    </div>
  );
};
