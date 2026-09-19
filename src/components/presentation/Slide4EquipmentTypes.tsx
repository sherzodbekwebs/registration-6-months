import React from 'react';
import { Layers, ArrowRight, Truck, Wrench, Shield, CheckCircle2 } from 'lucide-react';
import { AggregatedEquipment } from '../../types';
import { EQUIPMENT_DESCRIPTIONS } from '../../data/equipmentDescriptions';

interface SlideProps {
  equipment: AggregatedEquipment[];
  onNextSlide?: () => void;
}

export const Slide4EquipmentTypes: React.FC<SlideProps> = ({ equipment, onNextSlide }) => {
  const topCategories = [
    {
      name: 'Седельный тягач',
      uzbekName: 'Fura (Tir tirkama tortuvchi)',
      count: 4213,
      share: 39.1,
      desc: 'Xalqaro va viloyatlararo konteyner, tentli tirkamalarni tortuvchi katta magistral mashinalar.',
      highlight: 'Eng ko\'p talab qilinadigan tur!',
      color: 'border-indigo-400 bg-indigo-50/50 text-indigo-900',
      badgeColor: 'bg-indigo-600 text-white'
    },
    {
      name: 'Самосвал',
      uzbekName: 'Samosval (Qum, tosh to\'kuvchi)',
      count: 3091,
      share: 28.7,
      desc: 'Kuzovi o\'zi ko\'tarilib to\'kiladigan yuk mashinasi. Yo\'l qurilishi, shag\'al, sement va kon ishlari.',
      highlight: 'Qurilish sektorining asosi',
      color: 'border-amber-400 bg-amber-50/50 text-amber-900',
      badgeColor: 'bg-amber-600 text-white'
    },
    {
      name: 'Бортовой / Тентованный',
      uzbekName: 'Bortli va Tentli yuk mashinalari',
      count: 720,
      share: 6.7,
      desc: 'Yon bortlari ochiladigan ochiq yoki brezent bilan qoplangan oddiy yuk mashinalari.',
      highlight: 'Universal yuk tashish',
      color: 'border-slate-300 bg-slate-50 text-slate-800',
      badgeColor: 'bg-slate-700 text-white'
    },
    {
      name: 'Фургон / Рефрижератор',
      uzbekName: 'Budkali va Sovitgichli mashinalar',
      count: 530,
      share: 4.9,
      desc: 'Yopiq kuzovli, oziq-ovqat, dori-darmon yoki nozik tovarlarni sovuqda buzmasdan tashish.',
      highlight: 'Oziq-ovqat logistikasi',
      color: 'border-cyan-300 bg-cyan-50/50 text-cyan-900',
      badgeColor: 'bg-cyan-700 text-white'
    },
    {
      name: 'Автокран',
      uzbekName: 'Avtokran (Kranli mashina)',
      count: 470,
      share: 4.4,
      desc: 'Shassi ustiga o\'rnatilgan ko\'chma kran. Og\'ir konstruksiyalarni ko\'tarish va montaj ishlari.',
      highlight: 'Sanoat montaji',
      color: 'border-orange-300 bg-orange-50/50 text-orange-900',
      badgeColor: 'bg-orange-600 text-white'
    },
    {
      name: 'Бетоносмеситель (Mixer)',
      uzbekName: 'Beton qorgich (Mixer)',
      count: 410,
      share: 3.8,
      desc: 'Aylanuvchi bochka bilan tayyor betonni qurilish ob\'ektiga qotib qolmasdan yetkazib beruvchi texnika.',
      highlight: 'Bino qurilishi',
      color: 'border-emerald-300 bg-emerald-50/50 text-emerald-900',
      badgeColor: 'bg-emerald-600 text-white'
    }
  ];

  return (
    <div className="w-full flex-1 flex flex-col justify-between py-2 sm:py-4">
      {/* Header */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-100 text-indigo-900 border border-indigo-200 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
          <Layers className="h-4 w-4 text-amber-600" />
          4-Slayd: Mashina Turlari va Vazifalari
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Qanday Vazifadagi Mashinalar Olingan?
        </h2>
        <p className="text-base sm:text-xl text-slate-600 font-medium mt-2 max-w-4xl">
          Texnik terminlar sodda o&apos;zbek tilida tushuntirilgan &bull; Bozor ehtiyojlari
        </p>
      </div>

      {/* Grid of Equipment Cards (Full Width) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
        {topCategories.map((item, idx) => (
          <div
            key={item.name}
            className={`rounded-3xl p-5 sm:p-6 border-2 shadow-sm flex flex-col justify-between transition-all ${item.color}`}
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-3">
                <span className={`px-2.5 py-1 rounded-lg text-xs font-black uppercase tracking-wider ${item.badgeColor}`}>
                  {item.share}% bozor
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-white/80 border border-current/20">
                  {item.highlight}
                </span>
              </div>

              <div className="text-2xl sm:text-3xl font-black text-slate-900">
                {item.uzbekName}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-500 mb-3">
                Hujjatdagi nomi: &ldquo;{item.name}&rdquo;
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium mb-4">
                {item.desc}
              </p>
            </div>

            <div className="pt-3 border-t border-black/10 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-600 uppercase">Jami ro&apos;yxatdan o&apos;tgan:</span>
              <span className="text-xl font-black text-slate-900">{item.count.toLocaleString()} ta</span>
            </div>
          </div>
        ))}
      </div>

      {/* Presentation summary bar */}
      <div className="bg-slate-900 text-white rounded-3xl p-5 sm:p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center font-black">
            68%
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-black text-white">
              Fura (39.1%) + Samosval (28.7%) = Bozorning 67.8% qismi!
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              O&apos;zbekiston iqtisodiyoti asosan xalqaro savdo (tranzit) va yangi bino/yo&apos;l qurilishlariga tayanmoqda.
            </p>
          </div>
        </div>

        {onNextSlide && (
          <button
            onClick={onNextSlide}
            className="inline-flex items-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-sm rounded-xl shrink-0 transition-colors cursor-pointer"
          >
            <span>5-Slayd: Oylik Savdo Dinamikasi</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
};
