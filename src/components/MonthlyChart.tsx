import React, { useState } from 'react';
import { Calendar, BarChart3, HelpCircle, ArrowUpRight } from 'lucide-react';
import { RegistrationFilter, MonthKey } from '../types';
import { getMonthlyTotals, MONTH_NAMES } from '../data/n3Data';

interface MonthlyChartProps {
  filter: RegistrationFilter;
  selectedMonth: MonthKey | null;
  onSelectMonth: (month: MonthKey | null) => void;
}

export const MonthlyChart: React.FC<MonthlyChartProps> = ({
  filter,
  selectedMonth,
  onSelectMonth,
}) => {
  const data = getMonthlyTotals('all');

  const maxTotal = Math.max(...data.map(d => d.primary + d.secondary));
  const yMax = Math.ceil(maxTotal * 1.15);

  return (
    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm mb-8">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <Calendar className="h-6 w-6 text-indigo-600" />
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Oylar Bo&apos;yicha Savdo Qanday Bo&apos;lgan?
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 font-medium mt-1">
            Qaysi oylarda yuk mashinalari eng ko&apos;p xarid qilingan? (Yanvar &ndash; Iyun)
          </p>
        </div>

        {selectedMonth && (
          <button
            onClick={() => onSelectMonth(null)}
            className="text-xs sm:text-sm text-indigo-700 bg-indigo-50 hover:bg-indigo-100 font-bold px-3.5 py-2 rounded-xl border border-indigo-200 transition-colors cursor-pointer self-start sm:self-auto"
          >
            Filtrni bekor qilish ({MONTH_NAMES[selectedMonth].uz}) ✕
          </button>
        )}
      </div>

      {/* Color Legend in plain language */}
      <div className="flex items-center gap-6 mb-6 text-sm sm:text-base font-semibold text-slate-700 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-md bg-indigo-600 inline-block shadow-2xs" />
          <span>Yangi Salondan (Первичный)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-md bg-emerald-500 inline-block shadow-2xs" />
          <span>Bozordan Olingan (Вторичный)</span>
        </div>
      </div>

      {/* Responsive Bar Grid (Clean HTML / CSS Cards that are 100% accessible and readable) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-6">
        {data.map((d, idx) => {
          const total = d.primary + d.secondary;
          const isSelected = selectedMonth === d.month;
          const heightPercent = Math.round((total / maxTotal) * 100);

          return (
            <div
              key={d.month}
              onClick={() => onSelectMonth(isSelected ? null : d.month)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-indigo-50/80 border-indigo-500 ring-2 ring-indigo-500/20 shadow-md'
                  : 'bg-slate-50/80 hover:bg-white hover:border-slate-300 border-slate-200 shadow-2xs'
              }`}
            >
              <div>
                <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">
                  {d.labelUz}
                </div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                  {total.toLocaleString()}
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  dona mashina
                </div>
              </div>

              {/* Visual mini-bar */}
              <div className="mt-4 pt-3 border-t border-slate-200/80 space-y-1.5 text-xs font-semibold">
                <div className="flex justify-between text-indigo-700">
                  <span>Yangi:</span>
                  <span>{d.primary} ta</span>
                </div>
                <div className="flex justify-between text-emerald-700">
                  <span>Bozor:</span>
                  <span>{d.secondary} ta</span>
                </div>

                <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden flex mt-2">
                  <div
                    className="bg-indigo-600 h-full"
                    style={{ width: `${(d.primary / total) * 100}%` }}
                    title={`Yangi: ${d.primary}`}
                  />
                  <div
                    className="bg-emerald-500 h-full"
                    style={{ width: `${(d.secondary / total) * 100}%` }}
                    title={`Ishlatilgan: ${d.secondary}`}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs sm:text-sm text-slate-600 flex items-center gap-2">
        <HelpCircle className="h-4 w-4 text-indigo-600 shrink-0" />
        <span>Istalgan oy kartasiga bosib, butun hisobotni faqat o&apos;sha oyga moslashingiz mumkin.</span>
      </div>
    </div>
  );
};
