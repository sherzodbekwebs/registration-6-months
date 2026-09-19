import React from 'react';
import { Calendar, ArrowRight, TrendingUp, AlertCircle } from 'lucide-react';
import { rawData } from '../../data/n3Data';

interface SlideProps {
  onNextSlide?: () => void;
}

export const Slide5MonthlyTrends: React.FC<SlideProps> = ({ onNextSlide }) => {
  const monthsData = [
    {
      month: 'Yanvar',
      total: 1411,
      primary: 235,
      secondary: 1176,
      note: 'Qish mavsumi, past faollik',
      growth: 'Boshlang\'ich oy'
    },
    {
      month: 'Fevral',
      total: 1595,
      primary: 260,
      secondary: 1335,
      note: 'Tayyorgarlik davri',
      growth: '+13.0% o\'sish'
    },
    {
      month: 'Mart',
      total: 1939,
      primary: 310,
      secondary: 1629,
      note: 'Qurilish mavsumining ochilishi',
      growth: '+21.6% sakrash!'
    },
    {
      month: 'Aprel',
      total: 1957,
      primary: 334,
      secondary: 1623,
      note: 'Yillik cho\'qqi nuqta',
      growth: 'Eng yuqori oy (Cho\'qqi)'
    },
    {
      month: 'May',
      total: 1934,
      primary: 325,
      secondary: 1609,
      note: 'Muntazam barqaror talab',
      growth: '-1.2% (barqaror)'
    },
    {
      month: 'Iyun',
      total: 1927,
      primary: 330,
      secondary: 1597,
      note: 'Yuqori yozgi faollik',
      growth: '-0.4% (barqaror)'
    },
  ];

  const maxMonth = 1957;

  return (
    <div className="w-full flex-1 flex flex-col justify-between py-2 sm:py-4">
      {/* Header */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-100 text-indigo-900 border border-indigo-200 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
          <Calendar className="h-4 w-4 text-amber-600" />
          5-Slayd: Oylik Dinamika
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          6 Oylik Savdo Oqimi (Yanvar &ndash; Iyun)
        </h2>
        <p className="text-base sm:text-xl text-slate-600 font-medium mt-2 max-w-4xl">
          Bozor qaysi oylarda eng qizg&apos;in bo&apos;ldi va nima uchun?
        </p>
      </div>

      {/* Monthly Chart Presentation Card (Full width) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200 shadow-sm mb-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-6">
          {monthsData.map((m, idx) => {
            const heightPct = (m.total / maxMonth) * 100;
            const isPeak = m.total === maxMonth;
            return (
              <div
                key={m.month}
                className={`p-4 rounded-2xl border flex flex-col justify-between transition-all ${
                  isPeak
                    ? 'bg-amber-50 border-amber-300 ring-2 ring-amber-400'
                    : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-extrabold text-sm sm:text-base text-slate-800">
                      {m.month}
                    </span>
                    {isPeak && (
                      <span className="px-2 py-0.5 bg-amber-500 text-white rounded text-2xs font-black uppercase">
                        Cho&apos;qqi
                      </span>
                    )}
                  </div>

                  <div className="text-2xl sm:text-3xl font-black text-slate-900">
                    {m.total.toLocaleString()}
                  </div>

                  <span className={`text-xs font-bold block mt-1 ${
                    isPeak ? 'text-amber-700 font-black' : 'text-slate-500'
                  }`}>
                    {m.growth}
                  </span>
                </div>

                {/* Vertical visual representation */}
                <div className="mt-4">
                  <div className="w-full bg-slate-200 h-24 rounded-xl p-1 flex flex-col justify-end">
                    <div
                      className={`w-full rounded-lg transition-all duration-500 ${
                        isPeak ? 'bg-amber-500' : 'bg-indigo-600'
                      }`}
                      style={{ height: `${heightPct}%` }}
                    />
                  </div>

                  <div className="mt-2 text-2xs text-slate-500 font-medium leading-tight">
                    {m.note}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Analytical Explanation */}
        <div className="bg-slate-900 text-slate-200 rounded-2xl p-5 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-white text-base sm:text-lg font-black mb-2 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-emerald-400" />
              Bahorgi 38% lik o&apos;sish sababi:
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Yanvar oyidagi 1,411 ta mashinadan Apreldagi 1,957 tagacha <strong>+38.7%</strong> o&apos;sish kuzatildi. Bunga sabab: qishdan so&apos;ng barcha yo&apos;l qurilishlari, g&apos;isht va sement zavodlari to&apos;liq quvvatda ishlay boshlaydi hamda xalqaro yuk tashish shartnomalari faollashadi.
            </p>
          </div>

          <div>
            <h4 className="text-white text-base sm:text-lg font-black mb-2 flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-amber-400" />
              May-Iyun oylaridagi barqarorlik:
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Mart, Aprel, May va Iyun oylarida bozor doimiy ravishda <strong>~1,930 dona</strong> hajmida ushlanib turdi. Bu O&apos;zbekiston iqtisodiyoti har oyda kamida 1,900 ta yangi/ikkilamchi yuk mashinasiga talab bildirayotganini ko&apos;rsatadi.
            </p>
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
            <span>6-Slayd: Yetakchi Brendlar To&apos;qnashuvi (MAN vs SINOTRUK vs KAMAZ)</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
};
