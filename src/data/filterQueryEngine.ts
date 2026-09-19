import { rawData, MONTH_NAMES } from './n3Data';
import { MonthKey } from '../types';

export interface FlatRecord {
  id: string;
  registrationType: 'primary' | 'secondary';
  registrationLabel: string;
  brand: string;
  equipment: string;
  jan: number;
  feb: number;
  mar: number;
  apr: number;
  may: number;
  jun: number;
  total: number;
}

export interface FilterParams {
  registrationType: 'all' | 'primary' | 'secondary';
  month: 'all' | MonthKey;
  brand: 'all' | string;
  equipment: 'all' | string;
  searchQuery: string;
}

function cleanEntityName(val: string | null | undefined): string {
  if (!val) return 'Прочие';
  const trimmed = val.trim();
  const lower = trimmed.toLowerCase();
  if (
    lower === '(пусто)' ||
    lower === 'пусто' ||
    lower === 'pusto' ||
    lower === '(pusto)' ||
    lower === 'boshqa' ||
    lower === 'noma\'lum' ||
    lower === 'null' ||
    lower === 'undefined'
  ) {
    return 'Прочие';
  }
  return trimmed;
}

// Build initial flattened list once
export function getAllFlatRecords(): FlatRecord[] {
  const records: FlatRecord[] = [];
  let counter = 1;

  // Primary
  for (const b of rawData.registration_types.primary.brands) {
    const brandName = cleanEntityName(b.brand || b.source_name);
    for (const eq of b.equipment) {
      const eqName = cleanEntityName(eq.name);
      records.push({
        id: `p-${counter++}`,
        registrationType: 'primary',
        registrationLabel: 'Первичный (янги)',
        brand: brandName,
        equipment: eqName,
        jan: eq.jan || 0,
        feb: eq.feb || 0,
        mar: eq.mar || 0,
        apr: eq.apr || 0,
        may: eq.may || 0,
        jun: eq.jun || 0,
        total: eq.total || 0,
      });
    }
  }

  // Secondary
  for (const b of rawData.registration_types.secondary.brands) {
    const brandName = cleanEntityName(b.brand || b.source_name);
    for (const eq of b.equipment) {
      const eqName = cleanEntityName(eq.name);
      records.push({
        id: `s-${counter++}`,
        registrationType: 'secondary',
        registrationLabel: 'Вторичный (бозордан)',
        brand: brandName,
        equipment: eqName,
        jan: eq.jan || 0,
        feb: eq.feb || 0,
        mar: eq.mar || 0,
        apr: eq.apr || 0,
        may: eq.may || 0,
        jun: eq.jun || 0,
        total: eq.total || 0,
      });
    }
  }

  return records;
}

const ALL_RECORDS = getAllFlatRecords();

// Get unique brand list with counts
export function getUniqueBrands(): { name: string; total: number }[] {
  const map = new Map<string, number>();
  for (const r of ALL_RECORDS) {
    map.set(r.brand, (map.get(r.brand) || 0) + r.total);
  }
  return Array.from(map.entries())
    .map(([name, total]) => ({ name, total }))
    .sort((a, b) => b.total - a.total);
}

// Get unique equipment list with counts
export function getUniqueEquipment(): { name: string; total: number }[] {
  const map = new Map<string, number>();
  for (const r of ALL_RECORDS) {
    map.set(r.equipment, (map.get(r.equipment) || 0) + r.total);
  }
  return Array.from(map.entries())
    .map(([name, total]) => ({ name, total }))
    .sort((a, b) => b.total - a.total);
}

// Execute query based on active filters
export function executeFilter(filters: FilterParams) {
  const { registrationType, month, brand, equipment, searchQuery } = filters;
  const q = searchQuery.trim().toLowerCase();

  // 1. Filter the records
  const filtered = ALL_RECORDS.filter((r) => {
    // Type filter (pervichny / vtarechny / all)
    if (registrationType !== 'all' && r.registrationType !== registrationType) {
      return false;
    }

    // Brand filter
    if (brand !== 'all' && r.brand.toLowerCase() !== brand.toLowerCase()) {
      return false;
    }

    // Equipment filter (samosval / tigach / etc.)
    if (equipment !== 'all' && r.equipment.toLowerCase() !== equipment.toLowerCase()) {
      return false;
    }

    // Search query
    if (q) {
      const matchBrand = r.brand.toLowerCase().includes(q);
      const matchEq = r.equipment.toLowerCase().includes(q);
      if (!matchBrand && !matchEq) return false;
    }

    // If specific month is chosen, ensure that row has > 0 in that month
    if (month !== 'all') {
      if ((r[month] || 0) === 0) return false;
    }

    return true;
  });

  // 2. Summary stats
  let totalCount = 0;
  let primaryCount = 0;
  let secondaryCount = 0;

  for (const r of filtered) {
    const val = month === 'all' ? r.total : r[month];
    totalCount += val;
    if (r.registrationType === 'primary') {
      primaryCount += val;
    } else {
      secondaryCount += val;
    }
  }

  // 3. Monthly Chart Data
  const monthKeys: MonthKey[] = ['jan', 'feb', 'mar', 'apr', 'may', 'jun'];
  const monthlyData = monthKeys.map((m) => {
    let p = 0;
    let s = 0;
    for (const r of filtered) {
      if (r.registrationType === 'primary') p += r[m];
      else s += r[m];
    }
    return {
      key: m,
      nameUz: MONTH_NAMES[m].full, // 'Январь', etc.
      nameShort: MONTH_NAMES[m].short, // 'Янв', etc.
      primary: p,
      secondary: s,
      total: p + s,
      isSelected: month === m,
    };
  });

  // 4. Brand breakdown
  const brandMap = new Map<string, { brand: string; primary: number; secondary: number; total: number }>();
  for (const r of filtered) {
    const existing = brandMap.get(r.brand) || { brand: r.brand, primary: 0, secondary: 0, total: 0 };
    const val = month === 'all' ? r.total : r[month];
    if (r.registrationType === 'primary') {
      existing.primary += val;
    } else {
      existing.secondary += val;
    }
    existing.total += val;
    brandMap.set(r.brand, existing);
  }

  const brandList = Array.from(brandMap.values())
    .filter((b) => b.total > 0)
    .sort((a, b) => b.total - a.total)
    .map((b) => ({
      ...b,
      share: totalCount > 0 ? (b.total / totalCount) * 100 : 0,
    }));

  // 5. Equipment breakdown
  const eqMap = new Map<string, { equipment: string; primary: number; secondary: number; total: number }>();
  for (const r of filtered) {
    const existing = eqMap.get(r.equipment) || { equipment: r.equipment, primary: 0, secondary: 0, total: 0 };
    const val = month === 'all' ? r.total : r[month];
    if (r.registrationType === 'primary') {
      existing.primary += val;
    } else {
      existing.secondary += val;
    }
    existing.total += val;
    eqMap.set(r.equipment, existing);
  }

  const equipmentList = Array.from(eqMap.values())
    .filter((e) => e.total > 0)
    .sort((a, b) => b.total - a.total)
    .map((e) => ({
      ...e,
      share: totalCount > 0 ? (e.total / totalCount) * 100 : 0,
    }));

  return {
    filteredRecords: filtered,
    totalCount,
    primaryCount,
    secondaryCount,
    primaryShare: totalCount > 0 ? (primaryCount / totalCount) * 100 : 0,
    secondaryShare: totalCount > 0 ? (secondaryCount / totalCount) * 100 : 0,
    brandCount: brandList.length,
    equipmentCount: equipmentList.length,
    monthlyData,
    brandList,
    equipmentList,
  };
}
