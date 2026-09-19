import React from 'react';
import { Sparkles, TrendingUp, ArrowRight, ShieldCheck, ShoppingCart, Award } from 'lucide-react';
import { rawData } from '../../data/n3Data';

interface SlideProps {
  onNextSlide?: () => void;
}

export const Slide2PrimaryVsSecondary: React.FC<SlideProps> = ({ onNextSlide }) => {
  const primaryTotal = rawData.registration_types.primary.total; // 1794
  const secondaryTotal = rawData.registration_types.secondary.total; // 8969
  const grandTotal = primaryTotal + secondaryTotal;

  // Top 5 primary brands
  const topPrimary = [
    { name: 'SINOTRUK (+UZTBM)', count: 621, share: 34.6 },
    { name: 'KAMAZ', count: 454, share: 25.3 },
    { name: 'MAN', count: 272, share: 15.2 },
    { name: 'KRANTAS', count: 128, share: 7.1 },
    { name: 'ISUZU', count: 110, share: 6.1 },
  ];

  // Top 5 secondary brands
  const topSecondary = [
    { name: 'MAN', count: 1586, share: 17.7 },
    { name: 'SINOTRUK (+UZTBM)', count: 1610, share: 17.9 },
    { name: 'KAMAZ', count: 1013, share: 11.3 },
    { name: 'DAF', count: 1057, share: 11.8 },
    { name: 'SHACMAN', count: 755, share: 8.4 },
  ];

  return (
    <div className="w-full flex-1 flex flex-col justify-between py-2 sm:py-4">
      {/* Header */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-100 text-indigo-900 border border-indigo-200 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
          <Sparkles className="h-4 w-4 text-amber-600" />
          2-Slayd: Segmentlar Tahlili
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Yangi Mashinalar vs Ikkilamchi Bozor
        </h2>
        <p className="text-base sm:text-xl text-slate-600 font-medium mt-2 max-w-4xl">
          Qaysi brendlar salondan yangi sotilmoqda va qaysilari haydalgan holatda qo&apos;ldan-qo&apos;lga o&apos;tmoqda?
        </p>
      </div>

      {/* Visual Ratio Bar (Full Width) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200 shadow-sm mb-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mb-3">
          <span className="text-base sm:text-lg font-black text-indigo-700 flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-indigo-600" />
            Yangi Salondan: 1,794 dona (16.7%)
          </span>
          <span className="text-base sm:text-lg font-black text-emerald-700 flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-emerald-500" />
            Ikkilamchi Bozor: 8,969 dona (83.3%)
          </span>
        </div>

        {/* Big Visual Ratio Bar */}
        <div className="w-full h-8 sm:h-10 bg-slate-100 rounded-2xl overflow-hidden flex shadow-inner p-1">
          <div
            className="bg-indigo-600 h-full rounded-xl flex items-center justify-center text-white text-xs sm:text-sm font-black transition-all"
            style={{ width: '16.7%' }}
          >
            16.7%
          </div>
          <div
            className="bg-emerald-500 h-full rounded-xl flex items-center justify-center text-white text-xs sm:text-sm font-black transition-all ml-1"
            style={{ width: '83.3%' }}
          >
            83.3%
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-500 font-medium mt-3 text-center">
          Har 6 ta yuk mashinasidan faqat 1 tasi yangi, qolgan 5 tasi ikkilamchi bozordan ro&apos;yxatdan o&apos;tgan.
        </p>
      </div>

      {/* Two Columns: Primary vs Secondary Top Brands */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-2">
        {/* Primary Leaderboard */}
        <div className="bg-indigo-50/50 rounded-3xl p-6 sm:p-8 border-2 border-indigo-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-indigo-200">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-indigo-950">
                  Yangi Salondan Chiqqanlar
                </h3>
                <span className="text-xs sm:text-sm text-indigo-700 font-semibold">
                  Jami 1,794 dona &bull; Rasmiy dilerlar va mahalliy zavodlar
                </span>
              </div>
              <span className="p-2.5 bg-indigo-600 text-white rounded-2xl">
                <Award className="h-6 w-6" />
              </span>
            </div>

            <div className="space-y-3">
              {topPrimary.map((b, idx) => (
                <div key={b.name} className="bg-white p-3.5 rounded-2xl border border-indigo-100 flex items-center justify-between shadow-2xs">
                  <div className="flex items-center gap-3">
                    <span className="h-8 w-8 rounded-xl bg-indigo-100 text-indigo-900 flex items-center justify-center font-black text-sm">
                      #{idx + 1}
                    </span>
                    <span className="font-extrabold text-base sm:text-lg text-slate-900">
                      {b.name}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-lg sm:text-xl font-black text-indigo-900">
                      {b.count} ta
                    </span>
                    <span className="text-xs text-indigo-600 font-bold block">
                      {b.share}% ulush
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-indigo-200 text-xs sm:text-sm text-indigo-900 font-medium">
            💡 <strong>Xulosa:</strong> Yangi sotuvda <strong>SINOTRUK (UZTBM)</strong> va <strong>KAMAZ</strong> yetakchilik qilmoqda (ikki brendning o&apos;zi yangi bozorning 60% ini egallagan).
          </div>
        </div>

        {/* Secondary Leaderboard */}
        <div className="bg-emerald-50/50 rounded-3xl p-6 sm:p-8 border-2 border-emerald-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-emerald-200">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-emerald-950">
                  Ikkilamchi Bozor (Haydalgan)
                </h3>
                <span className="text-xs sm:text-sm text-emerald-700 font-semibold">
                  Jami 8,969 dona &bull; Ichki aylanma va import qilingan texnikalar
                </span>
              </div>
              <span className="p-2.5 bg-emerald-600 text-white rounded-2xl">
                <TrendingUp className="h-6 w-6" />
              </span>
            </div>

            <div className="space-y-3">
              {topSecondary.map((b, idx) => (
                <div key={b.name} className="bg-white p-3.5 rounded-2xl border border-emerald-100 flex items-center justify-between shadow-2xs">
                  <div className="flex items-center gap-3">
                    <span className="h-8 w-8 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-black text-sm">
                      #{idx + 1}
                    </span>
                    <span className="font-extrabold text-base sm:text-lg text-slate-900">
                      {b.name}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-lg sm:text-xl font-black text-emerald-900">
                      {b.count} ta
                    </span>
                    <span className="text-xs text-emerald-600 font-bold block">
                      {b.share}% ulush
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-emerald-200 text-xs sm:text-sm text-emerald-900 font-medium">
            💡 <strong>Xulosa:</strong> Ikkilamchi bozorda Yevropa brendlari <strong>MAN</strong> (1,586) va <strong>DAF</strong> (1,057) juda yuqori talabga ega, chunki xalqaro yuk tashuvchilar ularni ishonchli deb bilishadi.
          </div>
        </div>
      </div>

      {/* Navigation footer */}
      {onNextSlide && (
        <div className="mt-6 flex justify-end">
          <button
            onClick={onNextSlide}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-sm sm:text-base rounded-2xl shadow-md transition-all cursor-pointer"
          >
            <span>3-Slayd: Top Brendlar va Bozor Ulushi</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
};
