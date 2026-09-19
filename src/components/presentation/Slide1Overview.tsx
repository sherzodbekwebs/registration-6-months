import React from 'react';
import { Truck, Sparkles, TrendingUp, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { rawData } from '../../data/n3Data';

interface SlideProps {
  onNextSlide?: () => void;
}

export const Slide1Overview: React.FC<SlideProps> = ({ onNextSlide }) => {
  const primary = rawData.registration_types.primary.total; // 1794
  const secondary = rawData.registration_types.secondary.total; // 8969
  const grandTotal = primary + secondary; // 10763

  return (
    <div className="w-full flex-1 flex flex-col justify-between py-2 sm:py-4">
      {/* Top Hero Banner */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-100 text-indigo-900 border border-indigo-200 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
          <Sparkles className="h-4 w-4 text-amber-600" />
          1-Slayd: Kirish va Umumiy Ko&apos;lam
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          O&apos;zbekistonda Tijoriy Yuk Mashinalari Bozori
        </h1>
        <p className="text-base sm:text-xl text-slate-600 font-medium mt-2 max-w-4xl">
          N3 Toifasi (og&apos;irligi 12 tonnadan yuqori bo&apos;lgan barcha yuk mashinalari) bo&apos;yicha 6 oylik (Yanvar &ndash; Iyun) rasmiy hisobot
        </p>
      </div>

      {/* 3 Giant Metric Cards (Full Width Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 my-4">
        {/* Metric 1 */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200 shadow-sm flex flex-col justify-between hover:border-indigo-400 transition-all">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs sm:text-sm font-black text-slate-500 uppercase tracking-wider">
                Jami Ro&apos;yxatga Olingan
              </span>
              <span className="p-2.5 bg-slate-100 rounded-2xl text-slate-700">
                <Truck className="h-6 w-6" />
              </span>
            </div>
            <div className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight">
              {grandTotal.toLocaleString()}
            </div>
            <div className="text-sm sm:text-base font-semibold text-slate-500 mt-2">
              dona og&apos;ir yuk mashinasi
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-600">
            Oyiga o&apos;rtacha <strong>~1,794 dona</strong> mashina xarid qilingan
          </div>
        </div>

        {/* Metric 2 */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-indigo-200 bg-gradient-to-b from-indigo-50/40 to-white shadow-sm flex flex-col justify-between hover:border-indigo-400 transition-all">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs sm:text-sm font-black text-indigo-700 uppercase tracking-wider">
                Yangi Salondan Chiqqan (Birlamchi)
              </span>
              <span className="p-2.5 bg-indigo-100 rounded-2xl text-indigo-700">
                <Sparkles className="h-6 w-6" />
              </span>
            </div>
            <div className="text-4xl sm:text-6xl font-black text-indigo-900 tracking-tight">
              {primary.toLocaleString()}
            </div>
            <div className="text-sm sm:text-base font-bold text-indigo-700 mt-2">
              Bozorning 16.7% ulushi
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-indigo-100 text-xs sm:text-sm text-indigo-900">
            Asosan lizing va yangi loyihalar uchun olingan yangi mashinalar
          </div>
        </div>

        {/* Metric 3 */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-200 bg-gradient-to-b from-emerald-50/40 to-white shadow-sm flex flex-col justify-between hover:border-emerald-400 transition-all">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs sm:text-sm font-black text-emerald-700 uppercase tracking-wider">
                Bozordan Olingan (Ikkilamchi)
              </span>
              <span className="p-2.5 bg-emerald-100 rounded-2xl text-emerald-700">
                <TrendingUp className="h-6 w-6" />
              </span>
            </div>
            <div className="text-4xl sm:text-6xl font-black text-emerald-900 tracking-tight">
              {secondary.toLocaleString()}
            </div>
            <div className="text-sm sm:text-base font-bold text-emerald-700 mt-2">
              Bozorning 83.3% ulushi
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-emerald-100 text-xs sm:text-sm text-emerald-900">
            Har 10 ta yuk mashinasidan 8 tasi ikkilamchi bozordan sotib olingan
          </div>
        </div>
      </div>

      {/* Presentation Key Insights (3 big points) */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 mt-4 shadow-md">
        <h3 className="text-lg sm:text-xl font-black text-amber-300 uppercase tracking-wider mb-4 flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-amber-400" />
          Prezentatsiya uchun 3 ta asosiy xulosa:
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm sm:text-base text-slate-200">
          <div className="space-y-1.5">
            <strong className="text-white text-base sm:text-lg block">1. Ikkilamchi bozor ustunligi</strong>
            <p className="text-slate-300 leading-relaxed">
              O&apos;zbekiston yuk transporti parki asosan ikkilamchi aylanma (83.3%) hisobiga to&apos;ldirilmoqda. Korxonalar uchun arzonlik va tezkor foydalanish ustuvor.
            </p>
          </div>

          <div className="space-y-1.5">
            <strong className="text-white text-base sm:text-lg block">2. 3 ta brend bozorning yarmini boshqaradi</strong>
            <p className="text-slate-300 leading-relaxed">
              <strong>SINOTRUK</strong>, <strong>MAN</strong> va <strong>KAMAZ</strong> brendlarining umumiy ulushi 50% dan oshadi.
            </p>
          </div>

          <div className="space-y-1.5">
            <strong className="text-white text-base sm:text-lg block">3. Asosiy talab: Fura va Samosval</strong>
            <p className="text-slate-300 leading-relaxed">
              Tijoriy texnikaning qariyb 70% qismi xalqaro/viloyatlararo yuk tashuvchi Furalar va qurilish samosvallariga to&apos;g&apos;ri keladi.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation footer prompt */}
      {onNextSlide && (
        <div className="mt-6 flex justify-end">
          <button
            onClick={onNextSlide}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-sm sm:text-base rounded-2xl shadow-md transition-all cursor-pointer"
          >
            <span>2-Slayd: Yangi vs Ikkilamchi Bozor Tahlili</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
};
