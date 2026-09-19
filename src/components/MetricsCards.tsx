import React from 'react';
import { Truck, Sparkles, TrendingUp, Layers } from 'lucide-react';

interface MetricsCardsProps {
  totalCount: number;
  primaryCount: number;
  secondaryCount: number;
  primaryShare: number;
  secondaryShare: number;
  brandCount: number;
  equipmentCount: number;
  activeMonthLabel?: string;
}

export const MetricsCards: React.FC<MetricsCardsProps> = ({
  totalCount,
  primaryCount,
  secondaryCount,
  primaryShare,
  secondaryShare,
  brandCount,
  equipmentCount,
  activeMonthLabel,
}) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 my-4">
      {/* 1. Total */}
      <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 shadow-2xs">
        <div className="flex items-center justify-between text-slate-500 mb-1.5">
          <span className="text-xs font-bold uppercase tracking-wider">
            Жами Рўйхатдан Ўтган
          </span>
          <div className="p-2 bg-slate-100 rounded-lg text-slate-700">
            <Truck className="h-4 w-4" />
          </div>
        </div>
        <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {totalCount.toLocaleString()}
          <span className="text-xs sm:text-sm font-normal text-slate-500 ml-1.5">дона</span>
        </div>
        <div className="text-xs text-slate-500 mt-1 font-medium">
          {activeMonthLabel ? `${activeMonthLabel} ойи учун` : '6 ойлик умумий ҳажм'}
        </div>
      </div>

      {/* 2. Primary */}
      <div className="bg-white rounded-xl p-4 sm:p-5 border border-blue-200 shadow-2xs">
        <div className="flex items-center justify-between text-blue-700 mb-1.5">
          <span className="text-xs font-bold uppercase tracking-wider">
            Первичный (Янги Салондан)
          </span>
          <div className="p-2 bg-blue-50 rounded-lg text-blue-700">
            <Sparkles className="h-4 w-4" />
          </div>
        </div>
        <div className="text-2xl sm:text-3xl font-extrabold text-blue-900 tracking-tight">
          {primaryCount.toLocaleString()}
          <span className="text-xs sm:text-sm font-normal text-blue-600 ml-1.5">дона</span>
        </div>
        <div className="text-xs text-blue-700 mt-1 font-semibold">
          Улуш: {primaryShare.toFixed(1)}%
        </div>
      </div>

      {/* 3. Secondary */}
      <div className="bg-white rounded-xl p-4 sm:p-5 border border-emerald-200 shadow-2xs">
        <div className="flex items-center justify-between text-emerald-700 mb-1.5">
          <span className="text-xs font-bold uppercase tracking-wider">
            Вторичный (Бозордан Олинган)
          </span>
          <div className="p-2 bg-emerald-50 rounded-lg text-emerald-700">
            <TrendingUp className="h-4 w-4" />
          </div>
        </div>
        <div className="text-2xl sm:text-3xl font-extrabold text-emerald-900 tracking-tight">
          {secondaryCount.toLocaleString()}
          <span className="text-xs sm:text-sm font-normal text-emerald-600 ml-1.5">дона</span>
        </div>
        <div className="text-xs text-emerald-700 mt-1 font-semibold">
          Улуш: {secondaryShare.toFixed(1)}%
        </div>
      </div>

      {/* 4. Diversity / Segments */}
      <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 shadow-2xs">
        <div className="flex items-center justify-between text-slate-500 mb-1.5">
          <span className="text-xs font-bold uppercase tracking-wider">
            Қамров (Бренд ва Техникалар)
          </span>
          <div className="p-2 bg-amber-50 rounded-lg text-amber-700">
            <Layers className="h-4 w-4" />
          </div>
        </div>
        <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {brandCount}
          <span className="text-xs sm:text-sm font-normal text-slate-500 ml-1">бренд</span>
          <span className="text-slate-300 mx-1.5">/</span>
          {equipmentCount}
          <span className="text-xs sm:text-sm font-normal text-slate-500 ml-1">техника</span>
        </div>
        <div className="text-xs text-slate-500 mt-1 font-medium">
          Фильтрга мос келувчи позициялар
        </div>
      </div>
    </div>
  );
};
