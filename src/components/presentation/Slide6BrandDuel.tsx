import React, { useState } from 'react';
import { Swords, ArrowRight, Check, Award, Shield, Fuel } from 'lucide-react';
import { AggregatedBrand } from '../../types';

interface SlideProps {
  brands: AggregatedBrand[];
  onNextSlide?: () => void;
}

export const Slide6BrandDuel: React.FC<SlideProps> = ({ brands, onNextSlide }) => {
  const [selectedGiant, setSelectedGiant] = useState<string>('all');

  const giants = [
    {
      id: 'sinotruk',
      name: 'SINOTRUK (+UZTBM)',
      rank: 1,
      total: 2231,
      share: 20.7,
      primary: 621,
      secondary: 1610,
      country: 'Xitoy / Mahalliy yig\'uv',
      bestFor: 'Samosval (HOWO) va Qurilish',
      color: 'border-blue-500 bg-blue-50/40',
      badge: 'bg-blue-600 text-white',
      accentText: 'text-blue-900',
      strengths: [
        'Yangi salondan xarid qilish bo\'yicha 1-o\'rin (621 ta)',
        'Arzon narx va ommabop HOWO modellari',
        'Mahalliy UZTBM ishlab chiqarishi sababli bojxona yengilliklari'
      ],
      drawbacks: 'Ikkilamchi bozorda narxi tezroq pasayadi'
    },
    {
      id: 'man',
      name: 'MAN',
      rank: 2,
      total: 1858,
      share: 17.3,
      primary: 272,
      secondary: 1586,
      country: 'Germaniya / Samarqand zavodi',
      bestFor: 'Magistral Furalar (Тягач)',
      color: 'border-indigo-500 bg-indigo-50/40',
      badge: 'bg-indigo-600 text-white',
      accentText: 'text-indigo-900',
      strengths: [
        'Ikkilamchi bozorda eng ko\'p sotilgan brend (1,586 ta)',
        'Furalar (Тягач) segmentida yaqqol №1 yetakchi',
        'Yuqori nemis sifati va chidamliligi'
      ],
      drawbacks: 'Ehtiyot qismlari va yangi mashinaning narxi yuqoriroq'
    },
    {
      id: 'kamaz',
      name: 'KAMAZ',
      rank: 3,
      total: 1467,
      share: 13.6,
      primary: 454,
      secondary: 1013,
      country: 'Rossiya / Dilerlik tarmog\'i',
      bestFor: 'Qurilish, Qishloq xo\'jaligi, Karyer',
      color: 'border-amber-500 bg-amber-50/40',
      badge: 'bg-amber-600 text-white',
      accentText: 'text-amber-900',
      strengths: [
        'Har qanday viloyat va tumanda usta va zapchast borligi',
        'Og\'ir yo\'lsizlik sharoitlariga moslashgan',
        'Yangi texnikalarda 454 ta bilan 2-o\'rinda'
      ],
      drawbacks: 'Yoqilg\'i sarfi va haydovchi qulayligi Yevropa furalaridan pastroq'
    },
  ];

  return (
    <div className="w-full flex-1 flex flex-col justify-between py-2 sm:py-4">
      {/* Header */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-100 text-indigo-900 border border-indigo-200 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
          <Swords className="h-4 w-4 text-amber-600" />
          6-Slayd: Gigantlar To&apos;qnashuvi
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          SINOTRUK vs MAN vs KAMAZ
        </h2>
        <p className="text-base sm:text-xl text-slate-600 font-medium mt-2 max-w-4xl">
          Bozorning 51.6% ini bo&apos;lib olgan 3 ta asosiy brendning qiyosiy taqqoslanishi
        </p>
      </div>

      {/* 3 Columns (Full Width Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {giants.map((g) => (
          <div
            key={g.id}
            className={`rounded-3xl p-6 sm:p-7 border-2 shadow-sm flex flex-col justify-between transition-all ${g.color} hover:shadow-md`}
          >
            <div>
              {/* Brand Top bar */}
              <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-black/10">
                <div className="flex items-center gap-2.5">
                  <span className={`h-8 w-8 rounded-xl flex items-center justify-center font-black text-sm ${g.badge}`}>
                    #{g.rank}
                  </span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                      {g.name}
                    </h3>
                    <span className="text-xs text-slate-500 font-bold block">
                      {g.country}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xl sm:text-2xl font-black text-slate-900 block">
                    {g.total.toLocaleString()}
                  </span>
                  <span className="text-xs font-black text-slate-600">
                    {g.share}% ulush
                  </span>
                </div>
              </div>

              {/* Segment Tag */}
              <div className="mb-4 bg-white/90 p-3 rounded-2xl border border-black/5">
                <span className="text-2xs font-black text-slate-500 uppercase tracking-wider block">
                  Asosiy ixtisoslashuvi:
                </span>
                <span className="text-sm font-extrabold text-slate-900">
                  {g.bestFor}
                </span>
              </div>

              {/* Primary vs Secondary mini breakdown */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-white/80 p-2.5 rounded-xl border border-black/5 text-center">
                  <span className="text-2xs font-bold text-indigo-700 block">Yangi:</span>
                  <span className="text-base font-black text-slate-900">{g.primary} ta</span>
                </div>
                <div className="bg-white/80 p-2.5 rounded-xl border border-black/5 text-center">
                  <span className="text-2xs font-bold text-emerald-700 block">Ikkilamchi:</span>
                  <span className="text-base font-black text-slate-900">{g.secondary} ta</span>
                </div>
              </div>

              {/* Strengths list */}
              <div className="space-y-2 mt-4">
                <span className="text-xs font-black text-slate-700 uppercase tracking-wider block">
                  Kuchli tomonlari:
                </span>
                {g.strengths.map((str, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{str}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Caution */}
            <div className="mt-6 pt-3 border-t border-black/10 text-2xs sm:text-xs text-slate-600">
              ⚠️ <strong>E&apos;tibor berish kerak:</strong> {g.drawbacks}
            </div>
          </div>
        ))}
      </div>

      {/* Duel Conclusion */}
      <div className="bg-slate-900 text-white rounded-3xl p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs sm:text-sm text-slate-300">
          💡 <strong>Qaysi birini tanlash kerak?</strong> Shaharlararo va xalqaro yuk tashish uchun &mdash; <strong>MAN</strong>; Karyer, shahar qurilishi va narx muhim bo&apos;lsa &mdash; <strong>SINOTRUK</strong>; Viloyatlarda ehtiyot qismlar qulayligi kerak bo&apos;lsa &mdash; <strong>KAMAZ</strong>.
        </div>

        {onNextSlide && (
          <button
            onClick={onNextSlide}
            className="inline-flex items-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-sm rounded-xl shrink-0 transition-colors cursor-pointer"
          >
            <span>7-Slayd: Interaktiv Matritsa va Qidiruv</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
};
