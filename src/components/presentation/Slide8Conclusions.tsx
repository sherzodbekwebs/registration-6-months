import React from 'react';
import { Target, CheckCircle2, FileSpreadsheet, RotateCcw, ArrowRight, TrendingUp, Lightbulb } from 'lucide-react';

interface SlideProps {
  onRestart?: () => void;
  onExportCSV?: () => void;
  onOpenTable?: () => void;
}

export const Slide8Conclusions: React.FC<SlideProps> = ({ onRestart, onExportCSV, onOpenTable }) => {
  const recommendations = [
    {
      title: '1. Ikkilamchi Bozor uchun Lizing va Trade-in',
      desc: 'Bozorning 83.3% qismi ikkilamchi texnikaga to\'g\'ri keladi. Dilerlar va banklar faqat yangi emas, balki sertifikatlangan haydalgan yuk mashinalariga lizing va Trade-in xizmatlarini joriy etsa, savdo hajmi 2 baravar oshishi mumkin.',
      icon: TrendingUp,
      color: 'bg-emerald-50 border-emerald-300 text-emerald-950',
      badge: 'bg-emerald-600 text-white'
    },
    {
      title: '2. Furalar (Тягач) Segmentiga Asosiy Urg\'u',
      desc: '39.1% (4,213 dona) ulush bilan Furalar mutlaq peshqadam. O\'zbekiston orqali xalqaro yuk tashishlar oshayotgani sababli, MAN, DAF va Sinotruk tortuvchi mashinalariga talab eng barqaror bo\'lib qoladi.',
      icon: Target,
      color: 'bg-indigo-50 border-indigo-300 text-indigo-950',
      badge: 'bg-indigo-600 text-white'
    },
    {
      title: '3. Xitoy Brendlarining Bozor Hukmronligi',
      desc: 'SINOTRUK (HOWO), SHACMAN va FAW jami bozorning 32%+ qismini egalladi. Ularning tez yetkazib berilishi, arzon narxi va mahalliy zavod (UZTBM) mavjudligi Yevropa brendlariga jiddiy raqobat tug\'dirmoqda.',
      icon: Lightbulb,
      color: 'bg-amber-50 border-amber-300 text-amber-950',
      badge: 'bg-amber-600 text-white'
    },
    {
      title: '4. Fevral-Mart Oylaridagi Mavsumiy Tayyorgarlik',
      desc: 'Savdolar Yanvardan Aprelgacha +38% ga sakraydi. Avtodilerlar va logistika kompaniyalari buyurtmalarni dekabr-yanvar oylarida shakllantirishi, apreldagi eng yuqori talabga tayyor bo\'lishi shart.',
      icon: CheckCircle2,
      color: 'bg-cyan-50 border-cyan-300 text-cyan-950',
      badge: 'bg-cyan-600 text-white'
    }
  ];

  return (
    <div className="w-full flex-1 flex flex-col justify-between py-2 sm:py-4">
      {/* Header */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-100 text-indigo-900 border border-indigo-200 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
          <Target className="h-4 w-4 text-amber-600" />
          8-Slayd: Xulosa va Biznes Tavsiyalar
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Rahbariyat va Biznes uchun Asosiy Tavsiyalar
        </h2>
        <p className="text-base sm:text-xl text-slate-600 font-medium mt-2 max-w-4xl">
          Ushbu tahliliy ma&apos;lumotlar asosida qabul qilinishi kerak bo&apos;lgan 4 ta strategik qaror
        </p>
      </div>

      {/* 4 Recommendations Grid (Full Width) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {recommendations.map((rec) => {
          const Icon = rec.icon;
          return (
            <div
              key={rec.title}
              className={`rounded-3xl p-6 sm:p-7 border-2 shadow-xs flex flex-col justify-between transition-all ${rec.color}`}
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className={`p-2.5 rounded-xl ${rec.badge}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg sm:text-xl font-black">
                    {rec.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed font-medium opacity-90">
                  {rec.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Action Bar (Restart / Export / Full Table) */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-base sm:text-lg font-black text-white">
            Prezentatsiya yakunlandi
          </h4>
          <p className="text-xs sm:text-sm text-slate-400">
            Hisobot ma&apos;lumotlarini Excel formatida saqlab olishingiz yoki boshidan qayta boshlashingiz mumkin.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          {onRestart && (
            <button
              onClick={onRestart}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm rounded-xl transition-colors cursor-pointer border border-slate-700"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Boshiga qaytish</span>
            </button>
          )}

          {onExportCSV && (
            <button
              onClick={onExportCSV}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm rounded-xl transition-colors cursor-pointer shadow-md"
            >
              <FileSpreadsheet className="h-4 w-4" />
              <span>Excel yuklab olish</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
