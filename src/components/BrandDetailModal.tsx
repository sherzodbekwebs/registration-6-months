import React, { useEffect } from 'react';
import { X, Award, Truck, Calendar, Layers, ShieldCheck } from 'lucide-react';
import { AggregatedBrand, MonthKey } from '../types';
import { MONTH_NAMES } from '../data/n3Data';
import { getEquipmentDisplay } from '../data/equipmentDescriptions';

interface BrandDetailModalProps {
  brand: AggregatedBrand | null;
  onClose: () => void;
}

export const BrandDetailModal: React.FC<BrandDetailModalProps> = ({ brand, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!brand) return null;

  const months: MonthKey[] = ['jan', 'feb', 'mar', 'apr', 'may', 'jun'];
  const maxMonthVal = Math.max(...months.map(m => brand[m]), 1);

  const primaryPct = brand.total > 0 ? ((brand.primaryTotal / brand.total) * 100).toFixed(0) : '0';
  const secondaryPct = brand.total > 0 ? ((brand.secondaryTotal / brand.total) * 100).toFixed(0) : '0';

  const eqList = Object.values(brand.equipmentMap).sort((a, b) => b.total - a.total);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div
        className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3.5">
            <div className="h-12 w-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-black text-lg shadow-sm">
              {brand.brandName.slice(0, 3)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  {brand.brandName}
                </h3>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800">
                  {brand.share.toFixed(1)}% Bozor ulushi
                </span>
              </div>
              <p className="text-sm text-slate-500 font-medium mt-0.5">
                Ushbu brendning 6 oylik barcha mashinalari
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Key Numbers */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <span className="text-xs font-bold text-slate-500 uppercase block">Jami Sotilgan</span>
              <span className="text-3xl font-black text-slate-900 mt-1 block">{brand.total.toLocaleString()}</span>
              <span className="text-xs text-slate-500 font-medium">dona texnika</span>
            </div>

            <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-200">
              <span className="text-xs font-bold text-indigo-700 uppercase block">Yangi Salondan</span>
              <span className="text-3xl font-black text-indigo-900 mt-1 block">{brand.primaryTotal.toLocaleString()}</span>
              <span className="text-xs text-indigo-700 font-bold">{primaryPct}% ulushi</span>
            </div>

            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200">
              <span className="text-xs font-bold text-emerald-700 uppercase block">Bozordan Olingan</span>
              <span className="text-3xl font-black text-emerald-900 mt-1 block">{brand.secondaryTotal.toLocaleString()}</span>
              <span className="text-xs text-emerald-700 font-bold">{secondaryPct}% ulushi</span>
            </div>
          </div>

          {/* Monthly Bars */}
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
            <span className="text-sm font-bold text-slate-800 uppercase tracking-wider block mb-3">
              Oylar bo&apos;yicha qancha sotilgan?
            </span>
            <div className="grid grid-cols-6 gap-2 text-center">
              {months.map(m => {
                const val = brand[m];
                return (
                  <div key={m} className="bg-white p-2.5 rounded-xl border border-slate-200">
                    <div className="text-xs text-slate-400 font-bold uppercase">{MONTH_NAMES[m].uz}</div>
                    <div className="text-base sm:text-lg font-black text-slate-900 mt-1">{val}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Equipment Types Table */}
          <div>
            <span className="text-sm font-bold text-slate-800 uppercase tracking-wider block mb-3">
              Qaysi turdagi mashinalari bor? ({eqList.length} xil)
            </span>
            <div className="border border-slate-200 rounded-2xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 text-slate-600 uppercase text-xs font-bold">
                    <th className="py-3 px-4 text-left">Mashina Turi</th>
                    <th className="py-3 px-3 text-right">Yangi</th>
                    <th className="py-3 px-3 text-right">Bozor</th>
                    <th className="py-3 px-4 text-right font-black">Jami</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {eqList.map(eq => {
                    const eqDisplay = getEquipmentDisplay(eq.name);
                    return (
                      <tr key={eq.name} className="hover:bg-slate-50">
                        <td className="py-2.5 px-4 font-semibold text-slate-900">{eqDisplay.title}</td>
                        <td className="py-2.5 px-3 text-right text-indigo-700 font-bold">{eq.primary}</td>
                        <td className="py-2.5 px-3 text-right text-emerald-700 font-bold">{eq.secondary}</td>
                        <td className="py-2.5 px-4 text-right font-black text-slate-900">{eq.total}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-sm font-bold bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Yopish
          </button>
        </div>
      </div>
    </div>
  );
};
