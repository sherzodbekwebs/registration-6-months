import React from 'react';
import { Trophy, ArrowRight, Globe2, ShieldCheck } from 'lucide-react';
import { AggregatedBrand } from '../../types';

interface SlideProps {
  brands: AggregatedBrand[];
  onNextSlide?: () => void;
  onSelectBrand?: (brand: AggregatedBrand) => void;
}

export const Slide3TopBrands: React.FC<SlideProps> = ({ brands, onNextSlide, onSelectBrand }) => {
  // Combine SINOTRUK and SINOTRUK (UZTBM) for unified industry presentation, or display top list
  const top10 = [
    { rank: 1, name: 'SINOTRUK (+UZTBM)', total: 2231, share: 20.7, origin: 'Xitoy / Mahalliy yig\'uv', segment: 'Samosval va Furalar' },
    { rank: 2, name: 'MAN', total: 1858, share: 17.3, origin: 'Germaniya / Samarqand zavodi', segment: 'Furalar (Тягач) yetakchisi' },
    { rank: 3, name: 'KAMAZ', total: 1467, share: 13.6, origin: 'Rossiya / Mahalliy dilerlar', segment: 'Universal va Karyer' },
    { rank: 4, name: 'DAF', total: 1057, share: 9.8, origin: 'Niderlandiya (Yevropa)', segment: 'Xalqaro yuk tashuvchi Furalar' },
    { rank: 5, name: 'SHACMAN', total: 829, share: 7.7, origin: 'Xitoy', segment: 'Og\'ir Samosvallar' },
    { rank: 6, name: 'ISUZU', total: 552, share: 5.1, origin: 'Yaponiya / SamAuto', segment: 'Shahar va kommunal texnikalar' },
    { rank: 7, name: 'FAW', total: 418, share: 3.9, origin: 'Xitoy', segment: 'Samosval va Bortovoy' },
    { rank: 8, name: 'MERCEDES-BENZ', total: 379, share: 3.5, origin: 'Germaniya', segment: 'Premium Fura (Actros)' },
    { rank: 9, name: 'VOLVO', total: 345, share: 3.2, origin: 'Shvetsiya', segment: 'Uzoq masofali Fura (FH)' },
    { rank: 10, name: 'KRANTAS', total: 133, share: 1.2, origin: 'O\'zbekiston (Mahalliy)', segment: 'Avtokran va maxsus texnika' },
  ];

  const maxTotal = top10[0].total;

  return (
    <div className="w-full flex-1 flex flex-col justify-between py-2 sm:py-4">
      {/* Header */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-100 text-indigo-900 border border-indigo-200 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
          <Trophy className="h-4 w-4 text-amber-600" />
          3-Slayd: Bozor Reytingi
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Top 10 Brendlar va Bozor Ulushi
        </h2>
        <p className="text-base sm:text-xl text-slate-600 font-medium mt-2 max-w-4xl">
          O&apos;zbekiston bozorida qaysi avtomarka eng ko&apos;p xarid qilingan?
        </p>
      </div>

      {/* Leaderboard Table / Cards Grid (Full width) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200 shadow-sm mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {top10.map((b) => {
            const widthPct = (b.total / maxTotal) * 100;
            return (
              <div
                key={b.name}
                className={`p-4 sm:p-5 rounded-2xl border transition-all shadow-2xs flex flex-col justify-between ${
                  b.rank <= 3
                    ? 'bg-amber-50/40 border-amber-300 ring-1 ring-amber-400/30'
                    : 'bg-slate-50/70 border-slate-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-3">
                      <span className={`h-8 w-8 sm:h-9 sm:w-9 rounded-xl flex items-center justify-center font-black text-sm sm:text-base ${
                        b.rank === 1
                          ? 'bg-amber-500 text-white shadow-sm'
                          : b.rank === 2
                          ? 'bg-slate-700 text-white'
                          : b.rank === 3
                          ? 'bg-amber-700 text-white'
                          : 'bg-white text-slate-700 border border-slate-300'
                      }`}>
                        #{b.rank}
                      </span>
                      <div>
                        <span className="text-base sm:text-xl font-black text-slate-900">
                          {b.name}
                        </span>
                        <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5 mt-0.5">
                          <span>{b.origin}</span>
                          <span>&bull;</span>
                          <span className="font-semibold text-indigo-700">{b.segment}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="text-lg sm:text-2xl font-black text-slate-900">
                        {b.total.toLocaleString()} ta
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-amber-700">
                        {b.share}% ulush
                      </span>
                    </div>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden flex mt-2.5">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      b.rank === 1 ? 'bg-amber-500' : b.rank === 2 ? 'bg-indigo-600' : b.rank === 3 ? 'bg-slate-800' : 'bg-slate-600'
                    }`}
                    style={{ width: `${widthPct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Strategic Takeaway for Presentation */}
        <div className="mt-6 pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm text-slate-600">
          <div className="flex items-center gap-2 font-medium">
            <Globe2 className="h-5 w-5 text-indigo-600 shrink-0" />
            <span>Top 3 brend (<strong>SINOTRUK, MAN, KAMAZ</strong>) butun O&apos;zbekiston bozorining <strong>51.6%</strong> qismini to&apos;liq nazorat qiladi.</span>
          </div>
          <span className="px-3 py-1 bg-slate-100 rounded-full font-bold text-slate-800 shrink-0">
            Top 10 brend = 86.0% bozor
          </span>
        </div>
      </div>

      {/* Navigation footer */}
      {onNextSlide && (
        <div className="mt-6 flex justify-end">
          <button
            onClick={onNextSlide}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-sm sm:text-base rounded-2xl shadow-md transition-all cursor-pointer"
          >
            <span>4-Slayd: Mashina Turlari va Vazifalari</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
};
