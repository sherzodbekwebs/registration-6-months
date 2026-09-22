import React from 'react';
import { Calendar, Layers, Truck, PieChart } from 'lucide-react';
import { MonthKey } from '../types';

interface MonthlyItem {
  key: MonthKey;
  nameUz: string;
  nameShort?: string;
  primary: number;
  secondary: number;
  total: number;
  isSelected: boolean;
}

interface BrandItem {
  brand: string;
  primary: number;
  secondary: number;
  total: number;
  share: number;
}

interface EquipmentItem {
  equipment: string;
  primary: number;
  secondary: number;
  total: number;
  share: number;
}

interface DiagramsSectionProps {
  monthlyData: MonthlyItem[];
  brandList: BrandItem[];
  equipmentList: EquipmentItem[];
  primaryCount: number;
  secondaryCount: number;
  totalCount: number;
  onSelectMonth: (month: 'all' | MonthKey) => void;
  onSelectBrand: (brand: string) => void;
  onSelectEquipment: (equipment: string) => void;
  selectedMonth: 'all' | MonthKey;
  selectedBrand: string;
  selectedEquipment: string;
}

export const DiagramsSection: React.FC<DiagramsSectionProps> = ({
  monthlyData,
  brandList,
  equipmentList,
  primaryCount,
  secondaryCount,
  totalCount,
  onSelectMonth,
  onSelectBrand,
  onSelectEquipment,
  selectedMonth,
  selectedBrand,
  selectedEquipment,
}) => {
  // Max values for relative bar widths
  const maxMonthTotal = Math.max(...monthlyData.map((m) => m.total), 1);
  const topBrands = brandList.slice(0, 10);
  const maxBrandTotal = topBrands.length > 0 ? topBrands[0].total : 1;
  const topEquipment = equipmentList.slice(0, 8);
  const maxEquipmentTotal = topEquipment.length > 0 ? topEquipment[0].total : 1;

  const primaryShare = totalCount > 0 ? (primaryCount / totalCount) * 100 : 0;
  const secondaryShare = totalCount > 0 ? (secondaryCount / totalCount) * 100 : 0;

  return (
    <div className="space-y-4 my-4">
      {/* 2-Column Grid: Monthly Chart & Primary/Secondary Proportion */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Diagram 1: Ойлик Динамика Bar Chart (8 cols) */}
        <div className="lg:col-span-8 bg-white rounded-xl p-4 sm:p-6 border border-slate-200 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              <h2 className="text-base font-bold text-slate-900">
                1. Ойлик реализация динамикаси (Январь &ndash; Июнь)
              </h2>
            </div>

            <div className="flex items-center gap-4 text-xs font-semibold">
              <span className="inline-flex items-center gap-1.5 text-blue-700">
                <span className="w-3 h-3 rounded-xs bg-blue-600" />
                Первичный ({primaryCount.toLocaleString()})
              </span>
              <span className="inline-flex items-center gap-1.5 text-emerald-700">
                <span className="w-3 h-3 rounded-xs bg-emerald-500" />
                Вторичный ({secondaryCount.toLocaleString()})
              </span>
            </div>
          </div>

          {/* Monthly Bars */}
          <div className="grid grid-cols-6 gap-2 sm:gap-4 items-end h-56 pt-6">
            {monthlyData.map((m) => {
              const isSelected = selectedMonth === m.key;
              const heightPct = (m.total / maxMonthTotal) * 100;
              const pHeightPct = m.total > 0 ? (m.primary / m.total) * 100 : 0;
              const sHeightPct = m.total > 0 ? (m.secondary / m.total) * 100 : 0;
              const label = m.nameShort || m.nameUz.slice(0, 3);

              return (
                <button
                  key={m.key}
                  onClick={() => onSelectMonth(isSelected ? 'all' : m.key)}
                  className={`group flex flex-col items-center justify-end h-full w-full rounded-lg p-1 transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-blue-50 ring-2 ring-blue-600'
                      : 'hover:bg-slate-50'
                  }`}
                  title={`${m.nameUz}: Жами ${m.total.toLocaleString()} (Первичный: ${m.primary}, Вторичный: ${m.secondary})`}
                >
                  {/* Value on top */}
                  <span className={`text-2xs sm:text-xs font-bold mb-1.5 ${
                    isSelected ? 'text-blue-900 font-extrabold' : 'text-slate-700'
                  }`}>
                    {m.total.toLocaleString()}
                  </span>

                  {/* Stacked Bar */}
                  <div className="w-full max-w-[48px] bg-slate-100 rounded-t-md overflow-hidden flex flex-col justify-end" style={{ height: `${Math.max(heightPct, 8)}%` }}>
                    {/* Secondary portion (top) */}
                    <div
                      className="w-full bg-emerald-500 transition-all group-hover:brightness-95"
                      style={{ height: `${sHeightPct}%` }}
                    />
                    {/* Primary portion (bottom) */}
                    <div
                      className="w-full bg-blue-600 transition-all group-hover:brightness-95"
                      style={{ height: `${pHeightPct}%` }}
                    />
                  </div>

                  {/* Month Label */}
                  <span className={`text-2xs sm:text-xs font-semibold mt-2 ${
                    isSelected ? 'text-blue-700 font-bold' : 'text-slate-600'
                  }`}>
                    {label}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-3 pt-2 text-2xs text-slate-500 flex items-center justify-between border-t border-slate-100">
            <span>💡 Ойни босиб, ўша ой бўйича тезкор фильтрланг</span>
            {selectedMonth !== 'all' && (
              <button
                onClick={() => onSelectMonth('all')}
                className="text-blue-600 font-bold hover:underline cursor-pointer"
              >
                Барча ойларни қайтариш
              </button>
            )}
          </div>
        </div>

        {/* Diagram 2: Registration Type Proportion (4 cols) */}
        <div className="lg:col-span-4 bg-white rounded-xl p-4 sm:p-6 border border-slate-200 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3 pb-3 border-b border-slate-100">
              <PieChart className="h-5 w-5 text-blue-600" />
              <h2 className="text-base font-bold text-slate-900">
                2. Бозор структураси (Нисбат)
              </h2>
            </div>

            {/* Split Bar */}
            <div className="space-y-3 my-4">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-blue-700 font-bold">Первичный (Янги)</span>
                  <span className="text-blue-900 font-extrabold">{primaryCount.toLocaleString()} та ({primaryShare.toFixed(1)}%)</span>
                </div>
                <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                  <div
                    className="bg-blue-600 h-full rounded-full"
                    style={{ width: `${primaryShare}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-emerald-700 font-bold">Вторичный (Бозордан)</span>
                  <span className="text-emerald-900 font-extrabold">{secondaryCount.toLocaleString()} та ({secondaryShare.toFixed(1)}%)</span>
                </div>
                <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                  <div
                    className="bg-emerald-500 h-full rounded-full"
                    style={{ width: `${secondaryShare}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Visual ratio badge */}
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-200 text-xs text-slate-700 space-y-1">
              <div className="font-bold text-slate-900">Нисбат хулосаси:</div>
              <p>
                Ҳар <strong>10 та</strong> машинадан <strong>~8.3 таси</strong> иккиламчи бозордан рўйхатдан ўтган, <strong>~1.7 таси</strong> эса янги салондан олинган.
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 text-2xs text-slate-500 font-medium">
            Жами таҳлил қилинган ҳажм: <strong>{totalCount.toLocaleString()} дона</strong>
          </div>
        </div>
      </div>

      {/* 2-Column Grid: Equipment Breakdown & Top Brands */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Diagram 3: Техникалар бўйича тақсимот (Самосвал, Тягач...) */}
        <div className="bg-white rounded-xl p-4 sm:p-6 border border-slate-200 shadow-2xs">
          <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Layers className="h-5 w-5 text-blue-600" />
              <h2 className="text-base font-bold text-slate-900">
                3. Техника турлари тақсимоти (Самосвал, Тягач...)
              </h2>
            </div>
            <span className="text-2xs font-semibold px-2 py-0.5 bg-slate-100 rounded text-slate-600">
              {equipmentList.length} хил тур
            </span>
          </div>

          <div className="space-y-2.5">
            {topEquipment.map((eq) => {
              const isSelected = selectedEquipment.toLowerCase() === eq.equipment.toLowerCase();
              const widthPct = (eq.total / maxEquipmentTotal) * 100;

              return (
                <div
                  key={eq.equipment}
                  onClick={() => onSelectEquipment(isSelected ? 'all' : eq.equipment)}
                  className={`p-2.5 rounded-lg border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-blue-50 border-blue-400 ring-1 ring-blue-500'
                      : 'border-slate-100 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-bold text-slate-900">
                      {eq.equipment}
                    </span>
                    <div className="text-right">
                      <span className="font-extrabold text-slate-900">
                        {eq.total.toLocaleString()} дона
                      </span>
                      <span className="text-slate-500 ml-1.5 font-medium">
                        ({eq.share.toFixed(1)}%)
                      </span>
                    </div>
                  </div>

                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden flex">
                    <div
                      className="bg-blue-600 h-full rounded-full transition-all duration-300"
                      style={{ width: `${widthPct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-3 text-2xs text-slate-400 font-medium">
            Босиш орқали айнан шу техника турини фильтрланг
          </div>
        </div>

        {/* Diagram 4: Топ Брендлар Тақсимоти */}
        <div className="bg-white rounded-xl p-4 sm:p-6 border border-slate-200 shadow-2xs">
          <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-blue-600" />
              <h2 className="text-base font-bold text-slate-900">
                4. Брендлар бўйича тақсимот (Топ 10)
              </h2>
            </div>
            <span className="text-2xs font-semibold px-2 py-0.5 bg-slate-100 rounded text-slate-600">
              {brandList.length} бренд
            </span>
          </div>

          <div className="space-y-2.5">
            {topBrands.map((b, idx) => {
              const isSelected = selectedBrand.toLowerCase() === b.brand.toLowerCase();
              const widthPct = (b.total / maxBrandTotal) * 100;

              return (
                <div
                  key={b.brand}
                  onClick={() => onSelectBrand(isSelected ? 'all' : b.brand)}
                  className={`p-2.5 rounded-lg border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-blue-50 border-blue-400 ring-1 ring-blue-500'
                      : 'border-slate-100 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-2xs font-black text-slate-400 w-4">
                        #{idx + 1}
                      </span>
                      <span className="font-bold text-slate-900">
                        {b.brand}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="font-extrabold text-slate-900">
                        {b.total.toLocaleString()} дона
                      </span>
                      <span className="text-slate-500 ml-1.5 font-medium">
                        ({b.share.toFixed(1)}%)
                      </span>
                    </div>
                  </div>

                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden flex">
                    <div
                      className="bg-indigo-600 h-full rounded-full transition-all duration-300"
                      style={{ width: `${widthPct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-3 text-2xs text-slate-400 font-medium">
            Босиш орқали айнан шу брендни фильтрланг
          </div>
        </div>
      </div>
    </div>
  );
};
