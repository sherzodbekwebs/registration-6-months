import React from 'react';
import { Truck, Sparkles, HelpCircle, Layers, ArrowUpRight } from 'lucide-react';
import { RegistrationFilter } from '../types';
import { rawData } from '../data/n3Data';

interface QuickExplanationProps {
  filter: RegistrationFilter;
}

export const QuickExplanation: React.FC<QuickExplanationProps> = ({ filter }) => {
  const primaryTotal = rawData.registration_types.primary.total;
  const secondaryTotal = rawData.registration_types.secondary.total;
  const grandTotal = primaryTotal + secondaryTotal;

  return (
    <div className="bg-gradient-to-r from-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-md mb-8">
      <div className="flex items-center gap-2 mb-3">
        <span className="px-3 py-1 bg-indigo-500/30 text-indigo-200 border border-indigo-400/30 rounded-full text-xs font-bold tracking-wide uppercase flex items-center gap-1.5">
          <Sparkles className="h-3.5 w-3.5 text-amber-300" />
          Oddiy tilda: 1 daqiqada tushunish
        </span>
      </div>

      <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight mb-3">
        Bu ma&apos;lumotlar nimani bildiradi?
      </h2>

      <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-4xl mb-6">
        Ushbu hisobotda 6 oy davomida (Yanvar – Iyun) O&apos;zbekistonda ro&apos;yxatga olingan <strong>12 tonnadan og&apos;ir bo&apos;lgan barcha yuk mashinalari</strong> (N3 toifasi) to&apos;plangan.
      </p>

      {/* 3 Key Takeaways in plain language */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Point 1 */}
        <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-5 border border-white/15">
          <div className="text-amber-300 font-bold text-sm mb-1 flex items-center gap-1.5">
            <span>1. Yangi vs Ishlatilgan</span>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white mb-2">
            83% ishlatilgan
          </div>
          <p className="text-slate-200 text-sm leading-normal">
            Jami <strong>{grandTotal.toLocaleString()}</strong> ta mashinadan <strong>{secondaryTotal.toLocaleString()}</strong> tasi ikkilamchi bozordan (haydalgan) olingan. Yangi salondan chiqqani <strong>{primaryTotal.toLocaleString()}</strong> ta (17%).
          </p>
        </div>

        {/* Point 2 */}
        <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-5 border border-white/15">
          <div className="text-emerald-300 font-bold text-sm mb-1 flex items-center gap-1.5">
            <span>2. Eng Xaridorgir Brendlar</span>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white mb-2">
            MAN va SINOTRUK
          </div>
          <p className="text-slate-200 text-sm leading-normal">
            Bozorda eng ko&apos;p <strong>MAN</strong> (1,858 dona), <strong>SINOTRUK</strong> (2,113 dona) va <strong>KAMAZ</strong> (1,467 dona) xarid qilingan. Bu 3 ta brend bozorning qariyb 50% qismini tashkil qiladi.
          </p>
        </div>

        {/* Point 3 */}
        <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-5 border border-white/15">
          <div className="text-cyan-300 font-bold text-sm mb-1 flex items-center gap-1.5">
            <span>3. Eng Ko&apos;p Kerakli Texnika</span>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white mb-2">
            Fura (Тягач) va Samosval
          </div>
          <p className="text-slate-200 text-sm leading-normal">
            O&apos;zbekistonda eng katta talab yuk tashiydigan <strong>Furalarga (Тягач - 4,200+ dona)</strong> hamda qurilish va qum-tosh to&apos;kuvchi <strong>Samosvallarga (3,000+ dona)</strong> to&apos;g&apos;ri keladi.
          </p>
        </div>
      </div>
    </div>
  );
};
