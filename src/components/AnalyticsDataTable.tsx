import React, { useState, useMemo } from 'react';
import { Table, ArrowUpDown, Download, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { FlatRecord } from '../data/filterQueryEngine';

interface AnalyticsDataTableProps {
  records: FlatRecord[];
  onExportCSV: () => void;
  selectedMonth: string;
}

export const AnalyticsDataTable: React.FC<AnalyticsDataTableProps> = ({
  records,
  onExportCSV,
  selectedMonth,
}) => {
  const [sortField, setSortField] = useState<'brand' | 'equipment' | 'type' | 'total' | 'jan' | 'feb' | 'mar' | 'apr' | 'may' | 'jun'>('total');
  const [sortAsc, setSortAsc] = useState(false);
  const [tableSearch, setTableSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;

  // Filter by local table search
  const filteredRecords = useMemo(() => {
    if (!tableSearch) return records;
    const q = tableSearch.toLowerCase();
    return records.filter(
      (r) =>
        r.brand.toLowerCase().includes(q) ||
        r.equipment.toLowerCase().includes(q) ||
        r.registrationLabel.toLowerCase().includes(q)
    );
  }, [records, tableSearch]);

  // Sort
  const sortedRecords = useMemo(() => {
    return [...filteredRecords].sort((a, b) => {
      let valA: string | number = 0;
      let valB: string | number = 0;

      if (sortField === 'brand') {
        valA = a.brand;
        valB = b.brand;
        return sortAsc ? valA.localeCompare(valB) : valB.localeCompare(valA);
      } else if (sortField === 'equipment') {
        valA = a.equipment;
        valB = b.equipment;
        return sortAsc ? valA.localeCompare(valB) : valB.localeCompare(valA);
      } else if (sortField === 'type') {
        valA = a.registrationType;
        valB = b.registrationType;
        return sortAsc ? valA.localeCompare(valB) : valB.localeCompare(valA);
      } else {
        valA = a[sortField];
        valB = b[sortField];
        return sortAsc ? (valA as number) - (valB as number) : (valB as number) - (valA as number);
      }
    });
  }, [filteredRecords, sortField, sortAsc]);

  const totalPages = Math.ceil(sortedRecords.length / pageSize);
  const paginatedRecords = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return sortedRecords.slice(start, start + pageSize);
  }, [sortedRecords, currentPage, pageSize]);

  const handleSort = (field: typeof sortField) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(false);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden my-4">
      {/* Table Header Controls */}
      <div className="p-4 sm:p-5 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Table className="h-5 w-5 text-blue-600" />
          <h2 className="text-base font-bold text-slate-900">
            Батафсил маълумотлар жадвали
          </h2>
          <span className="text-xs font-semibold px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md">
            {records.length.toLocaleString()} та қатор
          </span>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="h-3.5 w-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={tableSearch}
              onChange={(e) => {
                setTableSearch(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Жадвал ичидан қидириш..."
              className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-1 focus:ring-blue-500 focus:bg-white"
            />
          </div>

          <button
            onClick={onExportCSV}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-md border border-emerald-200 transition-colors cursor-pointer shrink-0 shadow-2xs"
            title="Excel форматда юклаб олиш"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Excel</span>
          </button>
        </div>
      </div>

      {/* Table Content (Full responsive) */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[750px] text-xs">
          <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200 uppercase tracking-wider text-2xs">
            <tr>
              <th className="py-2.5 px-3 w-10 text-center text-slate-400">#</th>
              <th
                onClick={() => handleSort('brand')}
                className="py-2.5 px-3 cursor-pointer hover:bg-slate-100 transition-colors"
              >
                <div className="flex items-center gap-1">
                  <span>Бренд</span>
                  <ArrowUpDown className="h-3 w-3 text-slate-400" />
                </div>
              </th>
              <th
                onClick={() => handleSort('equipment')}
                className="py-2.5 px-3 cursor-pointer hover:bg-slate-100 transition-colors"
              >
                <div className="flex items-center gap-1">
                  <span>Техника тури</span>
                  <ArrowUpDown className="h-3 w-3 text-slate-400" />
                </div>
              </th>
              <th
                onClick={() => handleSort('type')}
                className="py-2.5 px-3 cursor-pointer hover:bg-slate-100 transition-colors"
              >
                <div className="flex items-center gap-1">
                  <span>Ҳолати</span>
                  <ArrowUpDown className="h-3 w-3 text-slate-400" />
                </div>
              </th>
              <th
                onClick={() => handleSort('jan')}
                className={`py-2.5 px-2 text-right cursor-pointer hover:bg-slate-100 ${selectedMonth === 'jan' ? 'bg-blue-100/60 font-black' : ''}`}
              >
                Янв
              </th>
              <th
                onClick={() => handleSort('feb')}
                className={`py-2.5 px-2 text-right cursor-pointer hover:bg-slate-100 ${selectedMonth === 'feb' ? 'bg-blue-100/60 font-black' : ''}`}
              >
                Фев
              </th>
              <th
                onClick={() => handleSort('mar')}
                className={`py-2.5 px-2 text-right cursor-pointer hover:bg-slate-100 ${selectedMonth === 'mar' ? 'bg-blue-100/60 font-black' : ''}`}
              >
                Мар
              </th>
              <th
                onClick={() => handleSort('apr')}
                className={`py-2.5 px-2 text-right cursor-pointer hover:bg-slate-100 ${selectedMonth === 'apr' ? 'bg-blue-100/60 font-black' : ''}`}
              >
                Апр
              </th>
              <th
                onClick={() => handleSort('may')}
                className={`py-2.5 px-2 text-right cursor-pointer hover:bg-slate-100 ${selectedMonth === 'may' ? 'bg-blue-100/60 font-black' : ''}`}
              >
                Май
              </th>
              <th
                onClick={() => handleSort('jun')}
                className={`py-2.5 px-2 text-right cursor-pointer hover:bg-slate-100 ${selectedMonth === 'jun' ? 'bg-blue-100/60 font-black' : ''}`}
              >
                Июн
              </th>
              <th
                onClick={() => handleSort('total')}
                className="py-2.5 px-3 text-right cursor-pointer hover:bg-slate-100 font-black text-slate-900 bg-slate-100/80"
              >
                <div className="flex items-center justify-end gap-1">
                  <span>Жами</span>
                  <ArrowUpDown className="h-3 w-3 text-blue-600" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-medium">
            {paginatedRecords.map((r, idx) => {
              const rowIndex = (currentPage - 1) * pageSize + idx + 1;
              const isPrimary = r.registrationType === 'primary';
              return (
                <tr key={r.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-2 px-3 text-center text-slate-400 text-2xs">
                    {rowIndex}
                  </td>
                  <td className="py-2 px-3 font-bold text-slate-900">
                    {r.brand}
                  </td>
                  <td className="py-2 px-3 text-slate-700">
                    {r.equipment}
                  </td>
                  <td className="py-2 px-3">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded text-2xs font-semibold ${
                        isPrimary
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      }`}
                    >
                      {isPrimary ? 'Первичный' : 'Вторичный'}
                    </span>
                  </td>
                  <td className={`py-2 px-2 text-right text-slate-600 ${selectedMonth === 'jan' ? 'bg-blue-50/60 font-bold text-blue-900' : ''}`}>
                    {r.jan || '—'}
                  </td>
                  <td className={`py-2 px-2 text-right text-slate-600 ${selectedMonth === 'feb' ? 'bg-blue-50/60 font-bold text-blue-900' : ''}`}>
                    {r.feb || '—'}
                  </td>
                  <td className={`py-2 px-2 text-right text-slate-600 ${selectedMonth === 'mar' ? 'bg-blue-50/60 font-bold text-blue-900' : ''}`}>
                    {r.mar || '—'}
                  </td>
                  <td className={`py-2 px-2 text-right text-slate-600 ${selectedMonth === 'apr' ? 'bg-blue-50/60 font-bold text-blue-900' : ''}`}>
                    {r.apr || '—'}
                  </td>
                  <td className={`py-2 px-2 text-right text-slate-600 ${selectedMonth === 'may' ? 'bg-blue-50/60 font-bold text-blue-900' : ''}`}>
                    {r.may || '—'}
                  </td>
                  <td className={`py-2 px-2 text-right text-slate-600 ${selectedMonth === 'jun' ? 'bg-blue-50/60 font-bold text-blue-900' : ''}`}>
                    {r.jun || '—'}
                  </td>
                  <td className="py-2 px-3 text-right font-extrabold text-slate-900 bg-slate-50/40">
                    {r.total.toLocaleString()}
                  </td>
                </tr>
              );
            })}

            {paginatedRecords.length === 0 && (
              <tr>
                <td colSpan={11} className="py-8 text-center text-slate-400 font-semibold">
                  Танланган фильтрларга мос маълумот топилмади
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="p-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 bg-slate-50/50">
          <div>
            Жами <strong>{sortedRecords.length}</strong> та қатордан <strong>{(currentPage - 1) * pageSize + 1}</strong> &ndash; <strong>{Math.min(currentPage * pageSize, sortedRecords.length)}</strong> кўрсатилмоқда
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-1.5 rounded border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-white cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="px-2.5 font-bold text-slate-800">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-1.5 rounded border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-white cursor-pointer"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
