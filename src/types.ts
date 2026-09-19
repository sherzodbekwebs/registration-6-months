export type MonthKey = 'jan' | 'feb' | 'mar' | 'apr' | 'may' | 'jun';

export interface EquipmentItem {
  name: string;
  jan: number;
  feb: number;
  mar: number;
  apr: number;
  may: number;
  jun: number;
  total: number;
}

export interface BrandItem {
  brand: string | null;
  source_name?: string;
  jan: number;
  feb: number;
  mar: number;
  apr: number;
  may: number;
  jun: number;
  total: number;
  equipment: EquipmentItem[];
}

export interface RegistrationTypeData {
  type_registration: string;
  total: number;
  brands: BrandItem[];
}

export interface N3Dataset {
  category: string;
  accounting_date: string;
  metric: string;
  months: MonthKey[];
  registration_types: {
    primary: RegistrationTypeData;
    secondary: RegistrationTypeData;
  };
}

export type RegistrationFilter = 'all' | 'primary' | 'secondary';

export type ViewTab = 'overview' | 'matrix' | 'equipment' | 'comparison';

export interface AggregatedBrand {
  brandName: string;
  primaryTotal: number;
  secondaryTotal: number;
  total: number;
  jan: number;
  feb: number;
  mar: number;
  apr: number;
  may: number;
  jun: number;
  share: number;
  equipmentMap: Record<string, { name: string; primary: number; secondary: number; total: number; months: Record<MonthKey, number> }>;
}

export interface AggregatedEquipment {
  name: string;
  primaryTotal: number;
  secondaryTotal: number;
  total: number;
  jan: number;
  feb: number;
  mar: number;
  apr: number;
  may: number;
  jun: number;
  share: number;
  topBrands: { brand: string; count: number }[];
}
