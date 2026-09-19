import React from 'react';
import { Truck, Trophy, Calendar, Layers, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { RegistrationFilter, AggregatedBrand, AggregatedEquipment } from '../types';
import { getMonthlyTotals, rawData } from '../data/n3Data';
import { getEquipmentDisplay } from '../data/equipmentDescriptions';

interface KPICardsProps {
  filter: RegistrationFilter;
  brands: AggregatedBrand[];
  equipmentList: AggregatedEquipment[];
}

export const KPICards: React.FC<KPICardsProps> = ({ filter, brands, equipmentList }) => {
  const monthlyTotals = getMonthlyTotals(filter);

  const totalRegistrations = brands.reduce((acc, b) => {
    return acc + (filter === 'primary' ? b.primaryTotal : filter === 'secondary' ? b.secondaryTotal : b.total);
  }, 0);

  const grandPrimary = rawData.registration_types.primary.total;
  const grandSecondary = rawData.registration_types.secondary.total;
  const grandTotal = grandPrimary + grandSecondary;

  const primaryShare = ((grandPrimary / grandTotal) * 100).toFixed(0);
  const secondaryShare = ((grandSecondary / grandTotal) * 100).toFixed(0);

  // Peak month
  let peakMonth = monthlyTotals[0];
  for (const m of monthlyTotals) {
    if (m.total > (peakMonth ? peakMonth.total : 0)) {
      peakMonth = m;
    }
  }

  // Top brand
  const topBrand = brands.length > 0 ? brands[0] : null;
  const topBrandTotal = topBrand
    ? filter === 'primary' ? topBrand.primaryTotal : filter === 'secondary' ? topBrand.secondaryTotal : topBrand.total
    : 0;
  const topBrandShare = totalRegistrations > 0 ? ((topBrandTotal / totalRegistrations) * 100).toFixed(1) : '0';

  // Top equipment
  const topEquipment = equipmentList.length > 0 ? equipmentList[0] : null;
  const topEqDisplay = topEquipment ? getEquipmentDisplay(topEquipment.name) : null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
      {/* Card 1: Total Volume */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:border-slate-300 transition-all">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">
            1. Jami Mashinalar Soni
          </span>
          <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <Truck className="h-5 w-5" />
          </div>
        </div>
        <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          {totalRegistrations.toLocaleString()}
        </div>
        <div className="text-sm font-semibold text-slate-500 mt-1">
          dona yuk mashinasi ro&apos;yxatga olingan
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm">
          <span className="text-indigo-600 font-bold">Yangi: {primaryShare}%</span>
          <span className="text-emerald-600 font-bold">Ishlatilgan: {secondaryShare}%</span>
        </div>
      </div>

      {/* Card 2: Leader Brand */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:border-slate-300 transition-all">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">
            2. 1-O&apos;rindagi Brend
          </span>
          <div className="h-10 w-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <Trophy className="h-5 w-5" />
          </div>
        </div>
        <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight truncate">
          {topBrand ? topBrand.brandName : '—'}
        </div>
        <div className="text-sm font-semibold text-amber-700 mt-1">
          {topBrandTotal.toLocaleString()} dona sotilgan ({topBrandShare}% ulush)
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-500">
          O&apos;zbekistonda eng ommabop tanlov
        </div>
      </div>

      {/* Card 3: Top Equipment */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:border-slate-300 transition-all">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">
            3. Eng Ommabop Mashina Turi
          </span>
          <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Layers className="h-5 w-5" />
          </div>
        </div>
        <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          {topEquipment ? topEquipment.name : '—'}
        </div>
        <div className="text-sm font-semibold text-blue-700 mt-1">
          {topEquipment ? topEquipment.total.toLocaleString() : 0} dona (Fura yuk mashinalari)
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-500">
          Bozorning {topEquipment?.share.toFixed(0)}% qismi furalardan iborat
        </div>
      </div>

      {/* Card 4: Peak Month */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:border-slate-300 transition-all">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">
            4. Eng Ko&apos;p Sotilgan Oy
          </span>
          <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <Calendar className="h-5 w-5" />
          </div>
        </div>
        <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          {peakMonth ? peakMonth.labelUz : '—'}
        </div>
        <div className="text-sm font-semibold text-emerald-700 mt-1">
          {peakMonth ? peakMonth.total.toLocaleString() : 0} dona yuk mashinasi
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-500">
          Bahor oylarida xaridlar cho&apos;qqiga chiqqan
        </div>
      </div>
    </div>
  );
};
