import React, { useState, useMemo, useCallback } from 'react';
import { TopFilterBar } from './components/TopFilterBar';
import { MetricsCards } from './components/MetricsCards';
import { DiagramsSection } from './components/DiagramsSection';
import { AnalyticsDataTable } from './components/AnalyticsDataTable';
import {
  FilterParams,
  getUniqueBrands,
  getUniqueEquipment,
  executeFilter,
} from './data/filterQueryEngine';
import { MONTH_NAMES } from './data/n3Data';
import { MonthKey } from './types';

const INITIAL_FILTERS: FilterParams = {
  registrationType: 'all',
  month: 'all',
  brand: 'all',
  equipment: 'all',
  searchQuery: '',
};

export default function App() {
  const [filters, setFilters] = useState<FilterParams>(INITIAL_FILTERS);

  // Pre-aggregated static lists for dropdown options
  const uniqueBrands = useMemo(() => getUniqueBrands(), []);
  const uniqueEquipment = useMemo(() => getUniqueEquipment(), []);

  // Update one or more filter fields
  const handleFilterChange = useCallback((newPartial: Partial<FilterParams>) => {
    setFilters((prev) => ({ ...prev, ...newPartial }));
  }, []);

  // Reset all filters to default
  const handleResetFilters = useCallback(() => {
    setFilters(INITIAL_FILTERS);
  }, []);

  // Execute reactive query over dataset
  const queryResult = useMemo(() => {
    return executeFilter(filters);
  }, [filters]);

  // CSV Export with UTF-8 BOM and Cyrillic headers
  const handleExportCSV = () => {
    const headers = [
      'Бренд',
      'Техника тури',
      'Ҳолати',
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Жами',
    ];

    const rows = queryResult.filteredRecords.map((r) => [
      `"${r.brand}"`,
      `"${r.equipment}"`,
      `"${r.registrationLabel}"`,
      r.jan,
      r.feb,
      r.mar,
      r.apr,
      r.may,
      r.jun,
      r.total,
    ]);

    const csvContent =
      'data:text/csv;charset=utf-8,\uFEFF' +
      [headers.join(','), ...rows.map((row) => row.join(','))].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute(
      'download',
      `n3_yuk_mashinalari_hisoboti_${new Date().toISOString().slice(0, 10)}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const activeMonthLabel =
    filters.month !== 'all' ? MONTH_NAMES[filters.month].full : undefined;

  return (
    <div className="min-h-screen bg-slate-100/60 text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* 1. Top Dedicated Filter Bar */}
      <TopFilterBar
        filters={filters}
        onFilterChange={handleFilterChange}
        onResetFilters={handleResetFilters}
        brandsList={uniqueBrands}
        equipmentList={uniqueEquipment}
        onExportCSV={handleExportCSV}
        totalFilteredCount={queryResult.totalCount}
      />

      {/* 2. Main Dashboard Content (100% full width, responsive, clean) */}
      <main className="w-full flex-1 px-4 sm:px-6 lg:px-8 py-4 space-y-4">
        {/* KPI Metrics summary */}
        <MetricsCards
          totalCount={queryResult.totalCount}
          primaryCount={queryResult.primaryCount}
          secondaryCount={queryResult.secondaryCount}
          primaryShare={queryResult.primaryShare}
          secondaryShare={queryResult.secondaryShare}
          brandCount={queryResult.brandCount}
          equipmentCount={queryResult.equipmentCount}
          activeMonthLabel={activeMonthLabel}
        />

        {/* Dynamic Diagrams (Monthly chart, Split ratio, Equipment breakdown, Top Brands) */}
        <DiagramsSection
          monthlyData={queryResult.monthlyData}
          brandList={queryResult.brandList}
          equipmentList={queryResult.equipmentList}
          primaryCount={queryResult.primaryCount}
          secondaryCount={queryResult.secondaryCount}
          totalCount={queryResult.totalCount}
          onSelectMonth={(m) => handleFilterChange({ month: m })}
          onSelectBrand={(b) => handleFilterChange({ brand: b })}
          onSelectEquipment={(eq) => handleFilterChange({ equipment: eq })}
          selectedMonth={filters.month}
          selectedBrand={filters.brand}
          selectedEquipment={filters.equipment}
        />

        {/* Detailed Data Table */}
        <AnalyticsDataTable
          records={queryResult.filteredRecords}
          onExportCSV={handleExportCSV}
          selectedMonth={filters.month}
        />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-3 text-xs text-slate-500 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800">
              N3 Юк машиналари бозори (12+ тонна)
            </span>
            <span>&bull;</span>
            <span>6 ойлик ҳисобот (Январь &ndash; Июнь)</span>
          </div>

          <div className="flex items-center gap-3 text-slate-600 font-medium">
            <span>Первичный: 1,794 (16.7%)</span>
            <span>&bull;</span>
            <span>Вторичный: 8,969 (83.3%)</span>
            <span>&bull;</span>
            <span className="font-bold text-slate-900">Жами: 10,763 дона</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
