import { N3Dataset, MonthKey, AggregatedBrand, AggregatedEquipment, RegistrationFilter } from '../types';

export const rawData: N3Dataset = {
  category: "N3",
  accounting_date: "Все",
  metric: "Количество по полю Vin-kod",
  months: ["jan", "feb", "mar", "apr", "may", "jun"],
  registration_types: {
    primary: {
      type_registration: "Первичный",
      total: 1794,
      brands: [
        {
          brand: "KAMAZ",
          jan: 25,
          feb: 22,
          mar: 44,
          apr: 39,
          may: 17,
          jun: 36,
          total: 183,
          equipment: [
            { name: "Тягач", jan: 0, feb: 1, mar: 13, apr: 2, may: 7, jun: 5, total: 28 },
            { name: "Самосвал", jan: 4, feb: 6, mar: 11, apr: 3, may: 3, jun: 23, total: 50 },
            { name: "Бортовой", jan: 0, feb: 0, mar: 1, apr: 2, may: 0, jun: 1, total: 4 },
            { name: "Тентовый", jan: 10, feb: 2, mar: 1, apr: 0, may: 0, jun: 0, total: 13 },
            { name: "Фургон", jan: 0, feb: 0, mar: 0, apr: 1, may: 0, jun: 3, total: 4 },
            { name: "Аварийная", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 1, total: 1 },
            { name: "Автокран", jan: 1, feb: 1, mar: 11, apr: 30, may: 1, jun: 0, total: 44 },
            { name: "Бензовоз", jan: 3, feb: 0, mar: 1, apr: 0, may: 1, jun: 1, total: 6 },
            { name: "Вахтовый", jan: 1, feb: 0, mar: 2, apr: 0, may: 2, jun: 0, total: 5 },
            { name: "Водовоз", jan: 1, feb: 11, mar: 1, apr: 0, may: 0, jun: 1, total: 14 },
            { name: "Кранманипулятор", jan: 3, feb: 1, mar: 3, apr: 1, may: 2, jun: 1, total: 11 },
            { name: "Прочее", jan: 0, feb: 0, mar: 0, apr: 0, may: 1, jun: 0, total: 1 },
            { name: "Специальная", jan: 2, feb: 0, mar: 0, apr: 0, may: 0, jun: 0, total: 2 }
          ]
        },
        {
          brand: "MAN",
          jan: 16,
          feb: 13,
          mar: 34,
          apr: 2,
          may: 6,
          jun: 9,
          total: 80,
          equipment: [
            { name: "Тягач", jan: 14, feb: 1, mar: 1, apr: 2, may: 1, jun: 2, total: 21 },
            { name: "Самосвал", jan: 1, feb: 11, mar: 33, apr: 0, may: 5, jun: 6, total: 56 },
            { name: "Фургон", jan: 1, feb: 0, mar: 0, apr: 0, may: 0, jun: 0, total: 1 },
            { name: "Аварийная", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 1, total: 1 },
            { name: "Специальная", jan: 0, feb: 1, mar: 0, apr: 0, may: 0, jun: 0, total: 1 }
          ]
        },
        {
          brand: "VOLVO",
          jan: 0,
          feb: 1,
          mar: 0,
          apr: 1,
          may: 0,
          jun: 0,
          total: 2,
          equipment: [
            { name: "Тягач", jan: 0, feb: 0, mar: 0, apr: 1, may: 0, jun: 0, total: 1 },
            { name: "Автовышка", jan: 0, feb: 1, mar: 0, apr: 0, may: 0, jun: 0, total: 1 }
          ]
        },
        {
          brand: "MERCEDES BENZ",
          jan: 0,
          feb: 0,
          mar: 1,
          apr: 6,
          may: 9,
          jun: 0,
          total: 16,
          equipment: [
            { name: "Тягач", jan: 0, feb: 0, mar: 1, apr: 3, may: 0, jun: 0, total: 4 },
            { name: "Самосвал", jan: 0, feb: 0, mar: 0, apr: 2, may: 9, jun: 0, total: 11 },
            { name: "Автобентонасос", jan: 0, feb: 0, mar: 0, apr: 1, may: 0, jun: 0, total: 1 }
          ]
        },
        {
          brand: "KRANTAS",
          jan: 9,
          feb: 7,
          mar: 1,
          apr: 0,
          may: 1,
          jun: 8,
          total: 26,
          equipment: [
            { name: "Тягач", jan: 0, feb: 1, mar: 0, apr: 0, may: 0, jun: 0, total: 1 },
            { name: "Самосвал", jan: 0, feb: 1, mar: 0, apr: 0, may: 0, jun: 0, total: 1 },
            { name: "Автокран", jan: 0, feb: 2, mar: 0, apr: 0, may: 0, jun: 0, total: 2 },
            { name: "Вахтовый", jan: 2, feb: 0, mar: 0, apr: 0, may: 0, jun: 0, total: 2 },
            { name: "Водовоз", jan: 3, feb: 0, mar: 0, apr: 0, may: 0, jun: 0, total: 3 },
            { name: "Гудронатор", jan: 1, feb: 0, mar: 0, apr: 0, may: 0, jun: 0, total: 1 },
            { name: "Кранманипулятор", jan: 3, feb: 3, mar: 1, apr: 0, may: 0, jun: 8, total: 15 },
            { name: "Специальная", jan: 0, feb: 0, mar: 0, apr: 0, may: 1, jun: 0, total: 1 }
          ]
        },
        {
          brand: "ISUZU",
          jan: 4,
          feb: 8,
          mar: 12,
          apr: 13,
          may: 19,
          jun: 14,
          total: 70,
          equipment: [
            { name: "Самосвал", jan: 2, feb: 1, mar: 0, apr: 2, may: 1, jun: 2, total: 8 },
            { name: "Бортовой", jan: 0, feb: 2, mar: 0, apr: 0, may: 0, jun: 0, total: 2 },
            { name: "Тентовый", jan: 0, feb: 0, mar: 3, apr: 1, may: 0, jun: 1, total: 5 },
            { name: "Фургон", jan: 0, feb: 1, mar: 0, apr: 2, may: 8, jun: 4, total: 15 },
            { name: "Изотермический", jan: 0, feb: 0, mar: 0, apr: 0, may: 4, jun: 1, total: 5 },
            { name: "Автовышка", jan: 0, feb: 1, mar: 0, apr: 0, may: 0, jun: 0, total: 1 },
            { name: "Водовоз", jan: 0, feb: 0, mar: 0, apr: 0, may: 3, jun: 0, total: 3 },
            { name: "Кранманипулятор", jan: 0, feb: 2, mar: 1, apr: 0, may: 1, jun: 0, total: 4 },
            { name: "Мусоровоз", jan: 0, feb: 0, mar: 8, apr: 0, may: 0, jun: 0, total: 8 },
            { name: "Пожарная", jan: 0, feb: 0, mar: 0, apr: 5, may: 0, jun: 0, total: 5 },
            { name: "Поливомойка", jan: 2, feb: 1, mar: 0, apr: 3, may: 0, jun: 3, total: 9 },
            { name: "Рефрижератор", jan: 0, feb: 0, mar: 0, apr: 0, may: 2, jun: 3, total: 5 }
          ]
        },
        {
          brand: "SINOTRUK",
          jan: 82,
          feb: 108,
          mar: 85,
          apr: 46,
          may: 34,
          jun: 61,
          total: 416,
          equipment: [
            { name: "Тягач", jan: 38, feb: 65, mar: 65, apr: 16, may: 10, jun: 17, total: 211 },
            { name: "Самосвал", jan: 28, feb: 15, mar: 1, apr: 3, may: 1, jun: 9, total: 57 },
            { name: "Тентовый", jan: 0, feb: 1, mar: 0, apr: 0, may: 0, jun: 0, total: 1 },
            { name: "Фургон", jan: 12, feb: 22, mar: 16, apr: 21, may: 17, jun: 21, total: 109 },
            { name: "Автобентонасос", jan: 1, feb: 2, mar: 1, apr: 2, may: 2, jun: 3, total: 11 },
            { name: "Автовышка", jan: 0, feb: 0, mar: 1, apr: 0, may: 0, jun: 0, total: 1 },
            { name: "Автокран", jan: 0, feb: 0, mar: 1, apr: 0, may: 0, jun: 0, total: 1 },
            { name: "Бензовоз", jan: 0, feb: 0, mar: 0, apr: 1, may: 0, jun: 0, total: 1 },
            { name: "Бетоносмеситель", jan: 3, feb: 2, mar: 0, apr: 2, may: 4, jun: 6, total: 17 },
            { name: "Водовоз", jan: 0, feb: 1, mar: 0, apr: 0, may: 0, jun: 2, total: 3 },
            { name: "Гудронатор", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 1, total: 1 },
            { name: "Поливомойка", jan: 0, feb: 0, mar: 0, apr: 1, may: 0, jun: 0, total: 1 },
            { name: "Рефрижератор", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 2, total: 2 }
          ]
        },
        {
          brand: "SINOTRUK (UZTBM)",
          jan: 73,
          feb: 137,
          mar: 76,
          apr: 58,
          may: 131,
          jun: 59,
          total: 534,
          equipment: [
            { name: "Самосвал", jan: 54, feb: 87, mar: 62, apr: 55, may: 106, jun: 51, total: 415 },
            { name: "Бортовой", jan: 0, feb: 10, mar: 0, apr: 0, may: 0, jun: 0, total: 10 },
            { name: "Тентовый", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 1, total: 1 },
            { name: "Бензовоз", jan: 3, feb: 2, mar: 0, apr: 1, may: 0, jun: 0, total: 6 },
            { name: "Бетоносмеситель", jan: 12, feb: 30, mar: 13, apr: 1, may: 23, jun: 6, total: 85 },
            { name: "Деревовоз", jan: 0, feb: 0, mar: 0, apr: 0, may: 1, jun: 0, total: 1 },
            { name: "Кранманипулятор", jan: 4, feb: 6, mar: 1, apr: 1, may: 1, jun: 1, total: 14 },
            { name: "Учебный", jan: 0, feb: 2, mar: 0, apr: 0, may: 0, jun: 0, total: 2 }
          ]
        },
        {
          brand: "SHACMAN",
          jan: 3,
          feb: 4,
          mar: 5,
          apr: 51,
          may: 95,
          jun: 72,
          total: 230,
          equipment: [
            { name: "Тягач", jan: 1, feb: 3, mar: 1, apr: 43, may: 90, jun: 51, total: 189 },
            { name: "Самосвал", jan: 0, feb: 0, mar: 2, apr: 6, may: 3, jun: 20, total: 31 },
            { name: "Фургон", jan: 1, feb: 0, mar: 0, apr: 1, may: 1, jun: 0, total: 3 },
            { name: "Водовоз", jan: 1, feb: 0, mar: 2, apr: 0, may: 1, jun: 1, total: 5 },
            { name: "Гудронатор", jan: 0, feb: 0, mar: 0, apr: 1, may: 0, jun: 0, total: 1 },
            { name: "Специальная", jan: 0, feb: 1, mar: 0, apr: 0, may: 0, jun: 0, total: 1 }
          ]
        },
        {
          brand: "FAW",
          jan: 6,
          feb: 10,
          mar: 2,
          apr: 11,
          may: 4,
          jun: 34,
          total: 67,
          equipment: [
            { name: "Тягач", jan: 5, feb: 5, mar: 1, apr: 10, may: 2, jun: 32, total: 55 },
            { name: "Самосвал", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 1, total: 1 },
            { name: "Тентовый", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 1, total: 1 },
            { name: "Фургон", jan: 0, feb: 1, mar: 0, apr: 1, may: 1, jun: 0, total: 3 },
            { name: "Автобентонасос", jan: 0, feb: 0, mar: 0, apr: 0, may: 1, jun: 0, total: 1 },
            { name: "Автовышка", jan: 0, feb: 0, mar: 1, apr: 0, may: 0, jun: 0, total: 1 },
            { name: "Водовоз", jan: 1, feb: 0, mar: 0, apr: 0, may: 0, jun: 0, total: 1 },
            { name: "Рефрижератор", jan: 0, feb: 4, mar: 0, apr: 0, may: 0, jun: 0, total: 4 }
          ]
        },
        {
          brand: "CHENGLI",
          jan: 0,
          feb: 0,
          mar: 0,
          apr: 0,
          may: 0,
          jun: 2,
          total: 2,
          equipment: [
            { name: "Эвакуатор", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 2, total: 2 }
          ]
        },
        {
          brand: "DAF",
          jan: 0,
          feb: 0,
          mar: 0,
          apr: 0,
          may: 0,
          jun: 1,
          total: 1,
          equipment: [
            { name: "Тягач", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 1, total: 1 }
          ]
        },
        {
          brand: "DONGFENG",
          jan: 5,
          feb: 3,
          mar: 0,
          apr: 2,
          may: 4,
          jun: 2,
          total: 16,
          equipment: [
            { name: "Тягач", jan: 0, feb: 1, mar: 0, apr: 0, may: 0, jun: 0, total: 1 },
            { name: "Самосвал", jan: 0, feb: 0, mar: 0, apr: 0, may: 1, jun: 0, total: 1 },
            { name: "Бензовоз", jan: 0, feb: 0, mar: 0, apr: 0, may: 1, jun: 0, total: 1 },
            { name: "Буровая", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 1, total: 1 },
            { name: "Водовоз", jan: 0, feb: 0, mar: 0, apr: 0, may: 1, jun: 0, total: 1 },
            { name: "Поливомойка", jan: 5, feb: 2, mar: 0, apr: 2, may: 1, jun: 1, total: 11 }
          ]
        },
        {
          brand: "FOTON",
          jan: 0,
          feb: 0,
          mar: 0,
          apr: 0,
          may: 1,
          jun: 1,
          total: 2,
          equipment: [
            { name: "Фургон", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 1, total: 1 },
            { name: "Цементовоз", jan: 0, feb: 0, mar: 0, apr: 0, may: 1, jun: 0, total: 1 }
          ]
        },
        {
          brand: "GAZ",
          jan: 0,
          feb: 0,
          mar: 0,
          apr: 0,
          may: 1,
          jun: 0,
          total: 1,
          equipment: [
            { name: "Тентовый", jan: 0, feb: 0, mar: 0, apr: 0, may: 1, jun: 0, total: 1 }
          ]
        },
        {
          brand: "HANJIN",
          jan: 0,
          feb: 0,
          mar: 0,
          apr: 0,
          may: 0,
          jun: 1,
          total: 1,
          equipment: [
            { name: "Буровая", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 1, total: 1 }
          ]
        },
        {
          brand: "HONGYAN",
          jan: 0,
          feb: 0,
          mar: 0,
          apr: 0,
          may: 1,
          jun: 0,
          total: 1,
          equipment: [
            { name: "Тягач", jan: 0, feb: 0, mar: 0, apr: 0, may: 1, jun: 0, total: 1 }
          ]
        },
        {
          brand: "IVECO",
          jan: 3,
          feb: 0,
          mar: 0,
          apr: 2,
          may: 0,
          jun: 0,
          total: 5,
          equipment: [
            { name: "Тягач", jan: 3, feb: 0, mar: 0, apr: 2, may: 0, jun: 0, total: 5 }
          ]
        },
        {
          brand: "MAZ",
          jan: 0,
          feb: 0,
          mar: 1,
          apr: 0,
          may: 0,
          jun: 0,
          total: 1,
          equipment: [
            { name: "Самосвал", jan: 0, feb: 0, mar: 1, apr: 0, may: 0, jun: 0, total: 1 }
          ]
        },
        {
          brand: "NORT BENZ",
          jan: 2,
          feb: 0,
          mar: 0,
          apr: 0,
          may: 0,
          jun: 0,
          total: 2,
          equipment: [
            { name: "Тягач", jan: 1, feb: 0, mar: 0, apr: 0, may: 0, jun: 0, total: 1 },
            { name: "Кранманипулятор", jan: 1, feb: 0, mar: 0, apr: 0, may: 0, jun: 0, total: 1 }
          ]
        },
        {
          brand: "SANY",
          jan: 4,
          feb: 2,
          mar: 3,
          apr: 7,
          may: 1,
          jun: 3,
          total: 20,
          equipment: [
            { name: "Автобентонасос", jan: 1, feb: 2, mar: 3, apr: 5, may: 1, jun: 3, total: 15 },
            { name: "Автокран", jan: 1, feb: 0, mar: 0, apr: 1, may: 0, jun: 0, total: 2 },
            { name: "Бетоносмеситель", jan: 2, feb: 0, mar: 0, apr: 1, may: 0, jun: 0, total: 3 }
          ]
        },
        {
          brand: "SHANTUI",
          jan: 0,
          feb: 0,
          mar: 0,
          apr: 0,
          may: 0,
          jun: 2,
          total: 2,
          equipment: [
            { name: "Самосвал", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 2, total: 2 }
          ]
        },
        {
          brand: "XCMG",
          jan: 2,
          feb: 14,
          mar: 6,
          apr: 8,
          may: 11,
          jun: 7,
          total: 48,
          equipment: [
            { name: "Самосвал", jan: 0, feb: 0, mar: 4, apr: 4, may: 10, jun: 0, total: 18 },
            { name: "Бортовой", jan: 0, feb: 12, mar: 0, apr: 0, may: 0, jun: 0, total: 12 },
            { name: "Автобентонасос", jan: 0, feb: 1, mar: 0, apr: 1, may: 0, jun: 1, total: 3 },
            { name: "Автокран", jan: 2, feb: 1, mar: 2, apr: 3, may: 1, jun: 6, total: 15 }
          ]
        },
        {
          brand: "ZOOMLION",
          jan: 7,
          feb: 6,
          mar: 5,
          apr: 10,
          may: 7,
          jun: 7,
          total: 42,
          equipment: [
            { name: "Самосвал", jan: 0, feb: 0, mar: 0, apr: 5, may: 0, jun: 0, total: 5 },
            { name: "Автобентонасос", jan: 0, feb: 0, mar: 1, apr: 1, may: 0, jun: 2, total: 4 },
            { name: "Автовышка", jan: 0, feb: 0, mar: 0, apr: 0, may: 2, jun: 0, total: 2 },
            { name: "Автокран", jan: 7, feb: 6, mar: 4, apr: 4, may: 5, jun: 5, total: 31 }
          ]
        },
        {
          brand: "DAEWOO",
          jan: 0,
          feb: 4,
          mar: 0,
          apr: 1,
          may: 0,
          jun: 2,
          total: 7,
          equipment: [
            { name: "Автовышка", jan: 0, feb: 4, mar: 0, apr: 1, may: 0, jun: 2, total: 7 }
          ]
        },
        {
          brand: "HYUNDAI",
          jan: 1,
          feb: 1,
          mar: 0,
          apr: 0,
          may: 0,
          jun: 1,
          total: 3,
          equipment: [
            { name: "Тягач", jan: 1, feb: 0, mar: 0, apr: 0, may: 0, jun: 0, total: 1 },
            { name: "Автобентонасос", jan: 0, feb: 1, mar: 0, apr: 0, may: 0, jun: 0, total: 1 },
            { name: "Автовышка", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 1, total: 1 }
          ]
        },
        {
          brand: "URAL",
          jan: 0,
          feb: 0,
          mar: 0,
          apr: 0,
          may: 0,
          jun: 1,
          total: 1,
          equipment: [
            { name: "Буровая", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 1, total: 1 }
          ]
        },
        {
          brand: "Прочие",
          source_name: "Прочие",
          jan: 1,
          feb: 2,
          mar: 4,
          apr: 1,
          may: 0,
          jun: 7,
          total: 15,
          equipment: [
            { name: "Тягач", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 5, total: 5 },
            { name: "Самосвал", jan: 0, feb: 0, mar: 0, apr: 1, may: 0, jun: 0, total: 1 },
            { name: "Автобентонасос", jan: 0, feb: 0, mar: 1, apr: 0, may: 0, jun: 2, total: 3 },
            { name: "Автовышка", jan: 0, feb: 1, mar: 0, apr: 0, may: 0, jun: 0, total: 1 },
            { name: "Бензовоз", jan: 0, feb: 0, mar: 3, apr: 0, may: 0, jun: 0, total: 3 },
            { name: "Бетоносмеситель", jan: 1, feb: 0, mar: 0, apr: 0, may: 0, jun: 0, total: 1 },
            { name: "Буровая", jan: 0, feb: 1, mar: 0, apr: 0, may: 0, jun: 0, total: 1 }
          ]
        }
      ]
    },
    secondary: {
      type_registration: "Вторичный",
      total: 8969,
      brands: [
        {
          brand: "CAMC",
          jan: 7,
          feb: 5,
          mar: 14,
          apr: 17,
          may: 10,
          jun: 9,
          total: 62,
          equipment: [
            { name: "Тягач", jan: 4, feb: 3, mar: 8, apr: 11, may: 5, jun: 6, total: 37 },
            { name: "Самосвал", jan: 1, feb: 2, mar: 3, apr: 4, may: 3, jun: 3, total: 16 },
            { name: "Бетоносмеситель", jan: 2, feb: 0, mar: 3, apr: 2, may: 2, jun: 0, total: 9 }
          ]
        },
        {
          brand: "CHANGXING DELONG",
          jan: 0,
          feb: 0,
          mar: 0,
          apr: 1,
          may: 0,
          jun: 1,
          total: 2,
          equipment: [
            { name: "Автокран", jan: 0, feb: 0, mar: 0, apr: 1, may: 0, jun: 1, total: 2 }
          ]
        },
        {
          brand: "KAMAZ",
          jan: 103,
          feb: 261,
          mar: 239,
          apr: 287,
          may: 184,
          jun: 210,
          total: 1284,
          equipment: [
            { name: "Тягач", jan: 15, feb: 30, mar: 19, apr: 27, may: 19, jun: 29, total: 139 },
            { name: "Самосвал", jan: 65, feb: 169, mar: 147, apr: 174, may: 110, jun: 124, total: 789 },
            { name: "Бортовой", jan: 7, feb: 9, mar: 5, apr: 13, may: 7, jun: 13, total: 54 },
            { name: "Тентовый", jan: 2, feb: 6, mar: 2, apr: 11, may: 5, jun: 5, total: 31 },
            { name: "Фургон", jan: 6, feb: 31, mar: 41, apr: 40, may: 28, jun: 15, total: 161 },
            { name: "Автобентонасос", jan: 0, feb: 0, mar: 0, apr: 1, may: 0, jun: 0, total: 1 },
            { name: "Автовышка", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 1, total: 1 },
            { name: "Автокран", jan: 4, feb: 11, mar: 7, apr: 9, may: 5, jun: 7, total: 43 },
            { name: "Ассенизатор", jan: 0, feb: 1, mar: 1, apr: 0, may: 0, jun: 0, total: 2 },
            { name: "Бензовоз", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 2, total: 2 },
            { name: "Бетоносмеситель", jan: 0, feb: 0, mar: 3, apr: 0, may: 0, jun: 2, total: 5 },
            { name: "Буровая", jan: 0, feb: 0, mar: 3, apr: 0, may: 1, jun: 1, total: 5 },
            { name: "Вахтовый", jan: 1, feb: 0, mar: 0, apr: 0, may: 1, jun: 0, total: 2 },
            { name: "Водовоз", jan: 0, feb: 1, mar: 0, apr: 1, may: 0, jun: 0, total: 2 },
            { name: "Кранманипулятор", jan: 0, feb: 1, mar: 1, apr: 0, may: 6, jun: 4, total: 12 },
            { name: "Мусоровоз", jan: 1, feb: 0, mar: 0, apr: 1, may: 1, jun: 0, total: 3 },
            { name: "Пропановоз", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 1, total: 1 },
            { name: "Прочее", jan: 1, feb: 0, mar: 1, apr: 1, may: 0, jun: 0, total: 3 },
            { name: "Специальная", jan: 1, feb: 2, mar: 3, apr: 2, may: 0, jun: 4, total: 12 },
            { name: "Учебный", jan: 0, feb: 0, mar: 1, apr: 0, may: 0, jun: 0, total: 1 },
            { name: "Цельнометалика", jan: 0, feb: 0, mar: 0, apr: 1, may: 0, jun: 0, total: 1 },
            { name: "Цистерна", jan: 0, feb: 0, mar: 5, apr: 6, may: 1, jun: 2, total: 14 }
          ]
        },
        {
          brand: "MAN",
          jan: 261,
          feb: 334,
          mar: 325,
          apr: 314,
          may: 247,
          jun: 297,
          total: 1778,
          equipment: [
            { name: "Тягач", jan: 210, feb: 281, mar: 263, apr: 243, may: 194, jun: 219, total: 1410 },
            { name: "Самосвал", jan: 32, feb: 26, mar: 36, apr: 39, may: 30, jun: 56, total: 219 },
            { name: "Бортовой", jan: 0, feb: 1, mar: 1, apr: 1, may: 0, jun: 1, total: 4 },
            { name: "Тентовый", jan: 7, feb: 12, mar: 7, apr: 13, may: 7, jun: 6, total: 52 },
            { name: "Фургон", jan: 5, feb: 8, mar: 11, apr: 8, may: 8, jun: 3, total: 43 },
            { name: "Изотермический", jan: 1, feb: 0, mar: 1, apr: 0, may: 0, jun: 1, total: 3 },
            { name: "Автобентонасос", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 2, total: 2 },
            { name: "Автовышка", jan: 0, feb: 0, mar: 0, apr: 0, may: 1, jun: 0, total: 1 },
            { name: "Автокран", jan: 0, feb: 1, mar: 0, apr: 1, may: 1, jun: 1, total: 4 },
            { name: "Бетоносмеситель", jan: 1, feb: 0, mar: 1, apr: 1, may: 0, jun: 1, total: 4 },
            { name: "Водовоз", jan: 0, feb: 0, mar: 0, apr: 0, may: 1, jun: 0, total: 1 },
            { name: "Кранманипулятор", jan: 2, feb: 1, mar: 3, apr: 6, may: 3, jun: 1, total: 16 },
            { name: "Мусоровоз", jan: 1, feb: 0, mar: 0, apr: 1, may: 0, jun: 0, total: 2 },
            { name: "Рефрижератор", jan: 1, feb: 3, mar: 0, apr: 0, may: 1, jun: 1, total: 6 },
            { name: "Специальная", jan: 1, feb: 1, mar: 1, apr: 0, may: 1, jun: 3, total: 7 },
            { name: "Цистерна", jan: 0, feb: 0, mar: 1, apr: 0, may: 0, jun: 1, total: 2 },
            { name: "Эвакуатор", jan: 0, feb: 0, mar: 0, apr: 1, may: 0, jun: 1, total: 2 }
          ]
        },
        {
          brand: "VOLVO",
          jan: 66,
          feb: 72,
          mar: 93,
          apr: 65,
          may: 53,
          jun: 48,
          total: 397,
          equipment: [
            { name: "Тягач", jan: 58, feb: 67, mar: 83, apr: 58, may: 50, jun: 40, total: 356 },
            { name: "Самосвал", jan: 0, feb: 0, mar: 0, apr: 0, may: 2, jun: 0, total: 2 },
            { name: "Тентовый", jan: 6, feb: 3, mar: 7, apr: 3, may: 0, jun: 6, total: 25 },
            { name: "Фургон", jan: 1, feb: 1, mar: 1, apr: 1, may: 1, jun: 2, total: 7 },
            { name: "Изотермический", jan: 0, feb: 1, mar: 0, apr: 1, may: 0, jun: 0, total: 2 },
            { name: "Кранманипулятор", jan: 0, feb: 0, mar: 0, apr: 1, may: 0, jun: 0, total: 1 },
            { name: "Прочее", jan: 1, feb: 0, mar: 0, apr: 0, may: 0, jun: 0, total: 1 },
            { name: "Рефрижератор", jan: 0, feb: 0, mar: 2, apr: 1, may: 0, jun: 0, total: 3 }
          ]
        },
        {
          brand: "MERCEDES BENZ",
          jan: 49,
          feb: 65,
          mar: 67,
          apr: 76,
          may: 42,
          jun: 56,
          total: 355,
          equipment: [
            { name: "Тягач", jan: 37, feb: 51, mar: 48, apr: 59, may: 35, jun: 41, total: 271 },
            { name: "Самосвал", jan: 0, feb: 0, mar: 0, apr: 1, may: 0, jun: 0, total: 1 },
            { name: "Бортовой", jan: 1, feb: 0, mar: 0, apr: 0, may: 1, jun: 1, total: 3 },
            { name: "Тентовый", jan: 5, feb: 8, mar: 9, apr: 10, may: 0, jun: 5, total: 37 },
            { name: "Фургон", jan: 5, feb: 1, mar: 6, apr: 4, may: 1, jun: 4, total: 21 },
            { name: "Изотермический", jan: 0, feb: 1, mar: 0, apr: 0, may: 0, jun: 0, total: 1 },
            { name: "Автобентонасос", jan: 0, feb: 3, mar: 1, apr: 0, may: 1, jun: 1, total: 6 },
            { name: "Кранманипулятор", jan: 0, feb: 0, mar: 1, apr: 0, may: 1, jun: 2, total: 4 },
            { name: "Молоковоз", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 1, total: 1 },
            { name: "Рефрижератор", jan: 1, feb: 1, mar: 2, apr: 1, may: 1, jun: 0, total: 6 },
            { name: "Специальная", jan: 0, feb: 0, mar: 0, apr: 1, may: 1, jun: 1, total: 3 },
            { name: "Эвакуатор", jan: 0, feb: 0, mar: 0, apr: 0, may: 1, jun: 0, total: 1 }
          ]
        },
        {
          brand: "ISUZU",
          jan: 61,
          feb: 79,
          mar: 114,
          apr: 106,
          may: 53,
          jun: 69,
          total: 482,
          equipment: [
            { name: "Самосвал", jan: 2, feb: 0, mar: 4, apr: 8, may: 2, jun: 3, total: 19 },
            { name: "Бортовой", jan: 1, feb: 0, mar: 1, apr: 1, may: 1, jun: 0, total: 4 },
            { name: "Тентовый", jan: 39, feb: 39, mar: 66, apr: 48, may: 27, jun: 41, total: 260 },
            { name: "Фургон", jan: 14, feb: 33, mar: 38, apr: 42, may: 21, jun: 14, total: 162 },
            { name: "Изотермический", jan: 0, feb: 1, mar: 0, apr: 0, may: 0, jun: 1, total: 2 },
            { name: "Автовышка", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 3, total: 3 },
            { name: "Автокран", jan: 0, feb: 0, mar: 0, apr: 1, may: 0, jun: 1, total: 2 },
            { name: "Водовоз", jan: 1, feb: 0, mar: 0, apr: 1, may: 0, jun: 0, total: 2 },
            { name: "Кранманипулятор", jan: 0, feb: 0, mar: 0, apr: 1, may: 0, jun: 0, total: 1 },
            { name: "Поливомойка", jan: 0, feb: 0, mar: 2, apr: 1, may: 0, jun: 1, total: 4 },
            { name: "Рефрижератор", jan: 4, feb: 6, mar: 3, apr: 3, may: 1, jun: 2, total: 19 },
            { name: "Специальная", jan: 0, feb: 0, mar: 0, apr: 0, may: 1, jun: 1, total: 2 },
            { name: "Цистерна", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 1, total: 1 },
            { name: "Эвакуатор", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 1, total: 1 }
          ]
        },
        {
          brand: "SINOTRUK",
          jan: 184,
          feb: 296,
          mar: 311,
          apr: 327,
          may: 223,
          jun: 356,
          total: 1697,
          equipment: [
            { name: "Тягач", jan: 57, feb: 89, mar: 123, apr: 119, may: 97, jun: 129, total: 614 },
            { name: "Самосвал", jan: 102, feb: 148, mar: 157, apr: 163, may: 99, jun: 191, total: 860 },
            { name: "Бортовой", jan: 1, feb: 0, mar: 0, apr: 1, may: 0, jun: 2, total: 4 },
            { name: "Тентовый", jan: 0, feb: 1, mar: 0, apr: 0, may: 1, jun: 1, total: 3 },
            { name: "Фургон", jan: 2, feb: 6, mar: 2, apr: 6, may: 3, jun: 3, total: 22 },
            { name: "Изотермический", jan: 0, feb: 0, mar: 0, apr: 1, may: 0, jun: 0, total: 1 },
            { name: "Автобентонасос", jan: 0, feb: 0, mar: 0, apr: 1, may: 0, jun: 2, total: 3 },
            { name: "Автовышка", jan: 0, feb: 0, mar: 1, apr: 0, may: 0, jun: 0, total: 1 },
            { name: "Бетоносмеситель", jan: 17, feb: 43, mar: 27, apr: 34, may: 18, jun: 23, total: 162 },
            { name: "Водовоз", jan: 1, feb: 0, mar: 0, apr: 1, may: 1, jun: 0, total: 3 },
            { name: "Кранманипулятор", jan: 2, feb: 1, mar: 1, apr: 1, may: 0, jun: 0, total: 5 },
            { name: "Рефрижератор", jan: 0, feb: 2, mar: 0, apr: 0, may: 1, jun: 3, total: 6 },
            { name: "Специальная", jan: 2, feb: 3, mar: 0, apr: 0, may: 3, jun: 1, total: 9 },
            { name: "Учебный", jan: 0, feb: 1, mar: 0, apr: 0, may: 0, jun: 0, total: 1 },
            { name: "Цистерна", jan: 0, feb: 1, mar: 0, apr: 0, may: 0, jun: 0, total: 1 },
            { name: "Эвакуатор", jan: 0, feb: 1, mar: 0, apr: 0, may: 0, jun: 1, total: 2 }
          ]
        },
        {
          brand: "SINOTRUK (UZTBM)",
          jan: 7,
          feb: 20,
          mar: 20,
          apr: 35,
          may: 18,
          jun: 23,
          total: 123,
          equipment: [
            { name: "Самосвал", jan: 6, feb: 17, mar: 13, apr: 28, may: 18, jun: 18, total: 100 },
            { name: "Фургон", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 4, total: 4 },
            { name: "Бензовоз", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 1, total: 1 },
            { name: "Бетоносмеситель", jan: 0, feb: 2, mar: 7, apr: 7, may: 0, jun: 0, total: 16 },
            { name: "Кранманипулятор", jan: 1, feb: 1, mar: 0, apr: 0, may: 0, jun: 0, total: 2 }
          ]
        },
        {
          brand: "SHACMAN",
          jan: 73,
          feb: 93,
          mar: 94,
          apr: 106,
          may: 93,
          jun: 140,
          total: 599,
          equipment: [
            { name: "Тягач", jan: 9, feb: 11, mar: 12, apr: 16, may: 23, jun: 31, total: 102 },
            { name: "Самосвал", jan: 38, feb: 34, mar: 34, apr: 35, may: 32, jun: 72, total: 245 },
            { name: "Бортовой", jan: 0, feb: 2, mar: 1, apr: 5, may: 2, jun: 2, total: 12 },
            { name: "Тентовый", jan: 9, feb: 8, mar: 10, apr: 13, may: 4, jun: 2, total: 46 },
            { name: "Фургон", jan: 13, feb: 25, mar: 26, apr: 21, may: 12, jun: 23, total: 120 },
            { name: "Автокран", jan: 0, feb: 0, mar: 0, apr: 0, may: 1, jun: 0, total: 1 },
            { name: "Бензовоз", jan: 0, feb: 0, mar: 0, apr: 2, may: 0, jun: 1, total: 3 },
            { name: "Бетоносмеситель", jan: 1, feb: 6, mar: 5, apr: 10, may: 11, jun: 6, total: 39 },
            { name: "Водовоз", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 1, total: 1 },
            { name: "Кранманипулятор", jan: 2, feb: 3, mar: 4, apr: 1, may: 4, jun: 1, total: 15 },
            { name: "Молоковоз", jan: 0, feb: 0, mar: 0, apr: 1, may: 0, jun: 0, total: 1 },
            { name: "Мусоровоз", jan: 0, feb: 0, mar: 0, apr: 0, may: 1, jun: 0, total: 1 },
            { name: "Прочее", jan: 1, feb: 0, mar: 0, apr: 0, may: 0, jun: 0, total: 1 },
            { name: "Рефрижератор", jan: 0, feb: 0, mar: 0, apr: 2, may: 1, jun: 0, total: 3 },
            { name: "Специальная", jan: 0, feb: 2, mar: 0, apr: 0, may: 0, jun: 0, total: 2 },
            { name: "Цистерна", jan: 0, feb: 2, mar: 2, apr: 0, may: 2, jun: 1, total: 7 }
          ]
        },
        {
          brand: "FAW",
          jan: 32,
          feb: 44,
          mar: 47,
          apr: 58,
          may: 32,
          jun: 35,
          total: 248,
          equipment: [
            { name: "Тягач", jan: 20, feb: 33, mar: 26, apr: 32, may: 25, jun: 28, total: 164 },
            { name: "Самосвал", jan: 4, feb: 1, mar: 4, apr: 4, may: 0, jun: 3, total: 16 },
            { name: "Бортовой", jan: 0, feb: 0, mar: 1, apr: 0, may: 0, jun: 0, total: 1 },
            { name: "Тентовый", jan: 4, feb: 3, mar: 4, apr: 4, may: 0, jun: 0, total: 15 },
            { name: "Фургон", jan: 4, feb: 7, mar: 11, apr: 16, may: 5, jun: 4, total: 47 },
            { name: "Бензовоз", jan: 0, feb: 0, mar: 0, apr: 2, may: 1, jun: 0, total: 3 },
            { name: "Водовоз", jan: 0, feb: 0, mar: 1, apr: 0, may: 0, jun: 0, total: 1 },
            { name: "Цистерна", jan: 0, feb: 0, mar: 0, apr: 0, may: 1, jun: 0, total: 1 }
          ]
        },
        {
          brand: "CIMC",
          jan: 0,
          feb: 0,
          mar: 0,
          apr: 0,
          may: 1,
          jun: 0,
          total: 1,
          equipment: [
            { name: "Тягач", jan: 0, feb: 0, mar: 0, apr: 0, may: 1, jun: 0, total: 1 }
          ]
        },
        {
          brand: "DAF",
          jan: 119,
          feb: 203,
          mar: 197,
          apr: 203,
          may: 161,
          jun: 173,
          total: 1056,
          equipment: [
            { name: "Тягач", jan: 113, feb: 192, mar: 187, apr: 190, may: 148, jun: 163, total: 993 },
            { name: "Бортовой", jan: 0, feb: 2, mar: 0, apr: 0, may: 0, jun: 1, total: 3 },
            { name: "Тентовый", jan: 5, feb: 8, mar: 7, apr: 12, may: 10, jun: 4, total: 46 },
            { name: "Фургон", jan: 1, feb: 1, mar: 1, apr: 1, may: 0, jun: 3, total: 7 },
            { name: "Водовоз", jan: 0, feb: 0, mar: 1, apr: 0, may: 0, jun: 1, total: 2 },
            { name: "Кранманипулятор", jan: 0, feb: 0, mar: 0, apr: 0, may: 1, jun: 0, total: 1 },
            { name: "Прочее", jan: 0, feb: 0, mar: 1, apr: 0, may: 0, jun: 0, total: 1 },
            { name: "Рефрижератор", jan: 0, feb: 0, mar: 0, apr: 0, may: 1, jun: 0, total: 1 },
            { name: "Специальная", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 1, total: 1 },
            { name: "Эвакуатор", jan: 0, feb: 0, mar: 0, apr: 0, may: 1, jun: 0, total: 1 }
          ]
        },
        {
          brand: "DAYUN",
          jan: 1,
          feb: 0,
          mar: 0,
          apr: 1,
          may: 0,
          jun: 0,
          total: 2,
          equipment: [
            { name: "Тягач", jan: 0, feb: 0, mar: 0, apr: 1, may: 0, jun: 0, total: 1 },
            { name: "Тентовый", jan: 1, feb: 0, mar: 0, apr: 0, may: 0, jun: 0, total: 1 }
          ]
        },
        {
          brand: "DONGFENG",
          jan: 3,
          feb: 5,
          mar: 5,
          apr: 7,
          may: 7,
          jun: 3,
          total: 30,
          equipment: [
            { name: "Тягач", jan: 0, feb: 0, mar: 2, apr: 1, may: 0, jun: 0, total: 3 },
            { name: "Самосвал", jan: 3, feb: 3, mar: 2, apr: 1, may: 1, jun: 0, total: 10 },
            { name: "Фургон", jan: 0, feb: 0, mar: 0, apr: 4, may: 2, jun: 0, total: 6 },
            { name: "Автовышка", jan: 0, feb: 0, mar: 0, apr: 0, may: 2, jun: 0, total: 2 },
            { name: "Автокран", jan: 0, feb: 1, mar: 0, apr: 0, may: 0, jun: 0, total: 1 },
            { name: "Бензовоз", jan: 0, feb: 0, mar: 0, apr: 0, may: 1, jun: 1, total: 2 },
            { name: "Кранманипулятор", jan: 0, feb: 0, mar: 1, apr: 1, may: 1, jun: 2, total: 5 },
            { name: "Специальная", jan: 0, feb: 1, mar: 0, apr: 0, may: 0, jun: 0, total: 1 }
          ]
        },
        {
          brand: "FORD",
          jan: 0,
          feb: 1,
          mar: 0,
          apr: 0,
          may: 0,
          jun: 1,
          total: 2,
          equipment: [
            { name: "Тягач", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 1, total: 1 },
            { name: "Бортовой", jan: 0, feb: 1, mar: 0, apr: 0, may: 0, jun: 0, total: 1 }
          ]
        },
        {
          brand: "FORLAND",
          jan: 0,
          feb: 0,
          mar: 1,
          apr: 0,
          may: 0,
          jun: 0,
          total: 1,
          equipment: [
            { name: "Самосвал", jan: 0, feb: 0, mar: 1, apr: 0, may: 0, jun: 0, total: 1 }
          ]
        },
        {
          brand: "FOTON",
          jan: 3,
          feb: 7,
          mar: 5,
          apr: 8,
          may: 2,
          jun: 9,
          total: 34,
          equipment: [
            { name: "Тягач", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 3, total: 3 },
            { name: "Самосвал", jan: 3, feb: 4, mar: 4, apr: 5, may: 2, jun: 4, total: 22 },
            { name: "Бортовой", jan: 0, feb: 1, mar: 0, apr: 0, may: 0, jun: 0, total: 1 },
            { name: "Тентовый", jan: 0, feb: 1, mar: 0, apr: 1, may: 0, jun: 0, total: 2 },
            { name: "Фургон", jan: 0, feb: 0, mar: 1, apr: 0, may: 0, jun: 0, total: 1 },
            { name: "Автокран", jan: 0, feb: 1, mar: 0, apr: 0, may: 0, jun: 0, total: 1 },
            { name: "Бетоносмеситель", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 2, total: 2 },
            { name: "Водовоз", jan: 0, feb: 0, mar: 0, apr: 1, may: 0, jun: 0, total: 1 },
            { name: "Эвакуатор", jan: 0, feb: 0, mar: 0, apr: 1, may: 0, jun: 0, total: 1 }
          ]
        },
        {
          brand: "GAZ",
          jan: 1,
          feb: 3,
          mar: 1,
          apr: 2,
          may: 0,
          jun: 1,
          total: 8,
          equipment: [
            { name: "Самосвал", jan: 1, feb: 1, mar: 1, apr: 2, may: 0, jun: 0, total: 5 },
            { name: "Тентовый", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 1, total: 1 },
            { name: "Прочее", jan: 0, feb: 1, mar: 0, apr: 0, may: 0, jun: 0, total: 1 },
            { name: "Рефрижератор", jan: 0, feb: 1, mar: 0, apr: 0, may: 0, jun: 0, total: 1 }
          ]
        },
        {
          brand: "HANIA",
          jan: 0,
          feb: 0,
          mar: 1,
          apr: 0,
          may: 0,
          jun: 1,
          total: 2,
          equipment: [
            { name: "Самосвал", jan: 0, feb: 0, mar: 1, apr: 0, may: 0, jun: 1, total: 2 }
          ]
        },
        {
          brand: "HANJIN",
          jan: 0,
          feb: 0,
          mar: 0,
          apr: 0,
          may: 0,
          jun: 4,
          total: 4,
          equipment: [
            { name: "Буровая", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 4, total: 4 }
          ]
        },
        {
          brand: "HOHAN",
          jan: 0,
          feb: 2,
          mar: 2,
          apr: 1,
          may: 1,
          jun: 0,
          total: 6,
          equipment: [
            { name: "Бетоносмеситель", jan: 0, feb: 2, mar: 2, apr: 0, may: 1, jun: 0, total: 5 },
            { name: "Специальная", jan: 0, feb: 0, mar: 0, apr: 1, may: 0, jun: 0, total: 1 }
          ]
        },
        {
          brand: "HONGYAN",
          jan: 1,
          feb: 2,
          mar: 2,
          apr: 2,
          may: 0,
          jun: 2,
          total: 9,
          equipment: [
            { name: "Тягач", jan: 1, feb: 1, mar: 2, apr: 1, may: 0, jun: 2, total: 7 },
            { name: "Самосвал", jan: 0, feb: 1, mar: 0, apr: 1, may: 0, jun: 0, total: 2 }
          ]
        },
        {
          brand: "IVECO",
          jan: 31,
          feb: 41,
          mar: 50,
          apr: 40,
          may: 31,
          jun: 39,
          total: 232,
          equipment: [
            { name: "Тягач", jan: 31, feb: 39, mar: 49, apr: 39, may: 31, jun: 35, total: 224 },
            { name: "Тентовый", jan: 0, feb: 0, mar: 0, apr: 1, may: 0, jun: 0, total: 1 },
            { name: "Фургон", jan: 0, feb: 1, mar: 0, apr: 0, may: 0, jun: 2, total: 3 },
            { name: "Рефрижератор", jan: 0, feb: 0, mar: 1, apr: 0, may: 0, jun: 1, total: 2 },
            { name: "Цистерна", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 1, total: 1 },
            { name: "Эвакуатор", jan: 0, feb: 1, mar: 0, apr: 0, may: 0, jun: 0, total: 1 }
          ]
        },
        {
          brand: "JAC",
          jan: 1,
          feb: 1,
          mar: 1,
          apr: 0,
          may: 0,
          jun: 1,
          total: 4,
          equipment: [
            { name: "Тягач", jan: 1, feb: 0, mar: 0, apr: 0, may: 0, jun: 0, total: 1 },
            { name: "Самосвал", jan: 0, feb: 1, mar: 1, apr: 0, may: 0, jun: 1, total: 3 }
          ]
        },
        {
          brand: "JBC",
          jan: 0,
          feb: 0,
          mar: 3,
          apr: 0,
          may: 0,
          jun: 0,
          total: 3,
          equipment: [
            { name: "Бетоносмеситель", jan: 0, feb: 0, mar: 2, apr: 0, may: 0, jun: 0, total: 2 },
            { name: "Кранманипулятор", jan: 0, feb: 0, mar: 1, apr: 0, may: 0, jun: 0, total: 1 }
          ]
        },
        {
          brand: "JMC",
          jan: 0,
          feb: 1,
          mar: 1,
          apr: 1,
          may: 0,
          jun: 0,
          total: 3,
          equipment: [
            { name: "Тягач", jan: 0, feb: 0, mar: 1, apr: 1, may: 0, jun: 0, total: 2 },
            { name: "Автовышка", jan: 0, feb: 1, mar: 0, apr: 0, may: 0, jun: 0, total: 1 }
          ]
        },
        {
          brand: "KRAZ",
          jan: 0,
          feb: 0,
          mar: 2,
          apr: 0,
          may: 0,
          jun: 0,
          total: 2,
          equipment: [
            { name: "Тягач", jan: 0, feb: 0, mar: 1, apr: 0, may: 0, jun: 0, total: 1 },
            { name: "Фургон", jan: 0, feb: 0, mar: 1, apr: 0, may: 0, jun: 0, total: 1 }
          ]
        },
        {
          brand: "MAZ",
          jan: 13,
          feb: 16,
          mar: 24,
          apr: 26,
          may: 22,
          jun: 21,
          total: 122,
          equipment: [
            { name: "Тягач", jan: 2, feb: 0, mar: 3, apr: 3, may: 1, jun: 5, total: 14 },
            { name: "Самосвал", jan: 5, feb: 8, mar: 15, apr: 11, may: 16, jun: 7, total: 62 },
            { name: "Бортовой", jan: 0, feb: 0, mar: 1, apr: 2, may: 0, jun: 0, total: 3 },
            { name: "Фургон", jan: 1, feb: 1, mar: 0, apr: 1, may: 0, jun: 0, total: 3 },
            { name: "Автокран", jan: 4, feb: 5, mar: 5, apr: 6, may: 5, jun: 9, total: 34 },
            { name: "Бетоносмеситель", jan: 1, feb: 1, mar: 0, apr: 1, may: 0, jun: 0, total: 3 },
            { name: "Буровая", jan: 0, feb: 0, mar: 0, apr: 2, may: 0, jun: 0, total: 2 },
            { name: "Специальная", jan: 0, feb: 1, mar: 0, apr: 0, may: 0, jun: 0, total: 1 }
          ]
        },
        {
          brand: "NORT BENZ",
          jan: 2,
          feb: 3,
          mar: 1,
          apr: 10,
          may: 2,
          jun: 3,
          total: 21,
          equipment: [
            { name: "Тягач", jan: 0, feb: 0, mar: 0, apr: 3, may: 0, jun: 0, total: 3 },
            { name: "Самосвал", jan: 2, feb: 3, mar: 1, apr: 7, may: 2, jun: 2, total: 17 },
            { name: "Бетоносмеситель", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 1, total: 1 }
          ]
        },
        {
          brand: "RENAULT",
          jan: 5,
          feb: 2,
          mar: 6,
          apr: 5,
          may: 7,
          jun: 5,
          total: 30,
          equipment: [
            { name: "Тягач", jan: 5, feb: 2, mar: 6, apr: 3, may: 6, jun: 2, total: 24 },
            { name: "Тентовый", jan: 0, feb: 0, mar: 0, apr: 2, may: 1, jun: 1, total: 4 },
            { name: "Фургон", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 1, total: 1 },
            { name: "Кранманипулятор", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 1, total: 1 }
          ]
        },
        {
          brand: "SAMS",
          jan: 0,
          feb: 1,
          mar: 0,
          apr: 0,
          may: 0,
          jun: 0,
          total: 1,
          equipment: [
            { name: "Тягач", jan: 0, feb: 1, mar: 0, apr: 0, may: 0, jun: 0, total: 1 }
          ]
        },
        {
          brand: "SANY",
          jan: 3,
          feb: 6,
          mar: 3,
          apr: 9,
          may: 2,
          jun: 5,
          total: 28,
          equipment: [
            { name: "Автобентонасос", jan: 2, feb: 4, mar: 0, apr: 7, may: 2, jun: 2, total: 17 },
            { name: "Автокран", jan: 0, feb: 1, mar: 1, apr: 2, may: 0, jun: 2, total: 6 },
            { name: "Бетоносмеситель", jan: 1, feb: 1, mar: 2, apr: 0, may: 0, jun: 0, total: 4 },
            { name: "Специальная", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 1, total: 1 }
          ]
        },
        {
          brand: "SCANIA",
          jan: 5,
          feb: 16,
          mar: 9,
          apr: 16,
          may: 7,
          jun: 9,
          total: 62,
          equipment: [
            { name: "Тягач", jan: 4, feb: 9, mar: 6, apr: 15, may: 6, jun: 9, total: 49 },
            { name: "Тентовый", jan: 1, feb: 6, mar: 2, apr: 1, may: 0, jun: 0, total: 10 },
            { name: "Фургон", jan: 0, feb: 1, mar: 1, apr: 0, may: 1, jun: 0, total: 3 }
          ]
        },
        {
          brand: "XCMG",
          jan: 3,
          feb: 8,
          mar: 19,
          apr: 7,
          may: 2,
          jun: 14,
          total: 53,
          equipment: [
            { name: "Тягач", jan: 1, feb: 1, mar: 1, apr: 1, may: 0, jun: 0, total: 4 },
            { name: "Самосвал", jan: 1, feb: 0, mar: 7, apr: 0, may: 0, jun: 0, total: 8 },
            { name: "Бортовой", jan: 0, feb: 0, mar: 0, apr: 1, may: 1, jun: 0, total: 2 },
            { name: "Автобентонасос", jan: 0, feb: 1, mar: 1, apr: 1, may: 0, jun: 1, total: 4 },
            { name: "Автовышка", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 1, total: 1 },
            { name: "Автокран", jan: 1, feb: 5, mar: 9, apr: 1, may: 1, jun: 10, total: 27 },
            { name: "Бетоносмеситель", jan: 0, feb: 1, mar: 0, apr: 0, may: 0, jun: 0, total: 1 },
            { name: "Кранманипулятор", jan: 0, feb: 0, mar: 0, apr: 3, may: 0, jun: 2, total: 5 },
            { name: "Специальная", jan: 0, feb: 0, mar: 1, apr: 0, may: 0, jun: 0, total: 1 }
          ]
        },
        {
          brand: "ZIL",
          jan: 9,
          feb: 39,
          mar: 25,
          apr: 29,
          may: 15,
          jun: 20,
          total: 137,
          equipment: [
            { name: "Тягач", jan: 0, feb: 2, mar: 4, apr: 4, may: 1, jun: 1, total: 12 },
            { name: "Самосвал", jan: 8, feb: 24, mar: 12, apr: 18, may: 11, jun: 12, total: 85 },
            { name: "Бортовой", jan: 0, feb: 2, mar: 2, apr: 3, may: 1, jun: 4, total: 12 },
            { name: "Тентовый", jan: 0, feb: 4, mar: 4, apr: 1, may: 2, jun: 2, total: 13 },
            { name: "Фургон", jan: 0, feb: 3, mar: 2, apr: 2, may: 0, jun: 0, total: 7 },
            { name: "Автовышка", jan: 0, feb: 0, mar: 1, apr: 0, may: 0, jun: 0, total: 1 },
            { name: "Автокран", jan: 1, feb: 0, mar: 0, apr: 0, may: 0, jun: 0, total: 1 },
            { name: "Водовоз", jan: 0, feb: 2, mar: 0, apr: 0, may: 0, jun: 0, total: 2 },
            { name: "Специальная", jan: 0, feb: 1, mar: 0, apr: 0, may: 0, jun: 0, total: 1 },
            { name: "Цистерна", jan: 0, feb: 0, mar: 0, apr: 1, may: 0, jun: 1, total: 2 },
            { name: "Эвакуатор", jan: 0, feb: 1, mar: 0, apr: 0, may: 0, jun: 0, total: 1 }
          ]
        },
        {
          brand: "ZOOMLION",
          jan: 4,
          feb: 3,
          mar: 4,
          apr: 4,
          may: 5,
          jun: 3,
          total: 23,
          equipment: [
            { name: "Автобентонасос", jan: 0, feb: 0, mar: 1, apr: 0, may: 0, jun: 1, total: 2 },
            { name: "Автовышка", jan: 0, feb: 0, mar: 0, apr: 0, may: 1, jun: 0, total: 1 },
            { name: "Автокран", jan: 3, feb: 3, mar: 4, apr: 4, may: 4, jun: 2, total: 19 },
            { name: "Специальная", jan: 1, feb: 0, mar: 0, apr: 0, may: 0, jun: 0, total: 1 }
          ]
        },
        {
          brand: "ГАЗ",
          jan: 0,
          feb: 0,
          mar: 1,
          apr: 0,
          may: 0,
          jun: 0,
          total: 1,
          equipment: [
            { name: "Бортовой", jan: 0, feb: 0, mar: 1, apr: 0, may: 0, jun: 0, total: 1 }
          ]
        },
        {
          brand: "DAEWOO",
          jan: 0,
          feb: 1,
          mar: 1,
          apr: 2,
          may: 0,
          jun: 2,
          total: 6,
          equipment: [
            { name: "Бортовой", jan: 0, feb: 1, mar: 0, apr: 0, may: 0, jun: 1, total: 2 },
            { name: "Автовышка", jan: 0, feb: 0, mar: 1, apr: 2, may: 0, jun: 1, total: 4 }
          ]
        },
        {
          brand: "HYUNDAI",
          jan: 1,
          feb: 0,
          mar: 2,
          apr: 3,
          may: 0,
          jun: 0,
          total: 6,
          equipment: [
            { name: "Самосвал", jan: 0, feb: 0, mar: 1, apr: 2, may: 0, jun: 0, total: 3 },
            { name: "Бортовой", jan: 0, feb: 0, mar: 1, apr: 0, may: 0, jun: 0, total: 1 },
            { name: "Автобентонасос", jan: 1, feb: 0, mar: 0, apr: 0, may: 0, jun: 0, total: 1 },
            { name: "Автовышка", jan: 0, feb: 0, mar: 0, apr: 1, may: 0, jun: 0, total: 1 }
          ]
        },
        {
          brand: "URAL",
          jan: 2,
          feb: 5,
          mar: 5,
          apr: 3,
          may: 3,
          jun: 3,
          total: 21,
          equipment: [
            { name: "Тягач", jan: 1, feb: 0, mar: 2, apr: 0, may: 2, jun: 0, total: 5 },
            { name: "Самосвал", jan: 1, feb: 3, mar: 1, apr: 3, may: 1, jun: 2, total: 11 },
            { name: "Бортовой", jan: 0, feb: 0, mar: 2, apr: 0, may: 0, jun: 0, total: 2 },
            { name: "Фургон", jan: 0, feb: 1, mar: 0, apr: 0, may: 0, jun: 0, total: 1 },
            { name: "Автокран", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 1, total: 1 },
            { name: "Кранманипулятор", jan: 0, feb: 1, mar: 0, apr: 0, may: 0, jun: 0, total: 1 }
          ]
        },
        {
          brand: "Прочие",
          source_name: "Прочие",
          jan: 2,
          feb: 5,
          mar: 4,
          apr: 7,
          may: 4,
          jun: 10,
          total: 32,
          equipment: [
            { name: "Тягач", jan: 0, feb: 1, mar: 0, apr: 0, may: 1, jun: 1, total: 3 },
            { name: "Самосвал", jan: 1, feb: 1, mar: 1, apr: 3, may: 0, jun: 4, total: 10 },
            { name: "Бортовой", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 1, total: 1 },
            { name: "Тентовый", jan: 0, feb: 0, mar: 1, apr: 1, may: 0, jun: 0, total: 2 },
            { name: "Фургон", jan: 0, feb: 0, mar: 1, apr: 0, may: 0, jun: 0, total: 1 },
            { name: "Автобентонасос", jan: 0, feb: 0, mar: 0, apr: 1, may: 2, jun: 1, total: 4 },
            { name: "Автовышка", jan: 0, feb: 0, mar: 0, apr: 1, may: 0, jun: 2, total: 3 },
            { name: "Автокран", jan: 1, feb: 2, mar: 1, apr: 0, may: 0, jun: 0, total: 4 },
            { name: "Водовоз", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 1, total: 1 },
            { name: "Кранманипулятор", jan: 0, feb: 0, mar: 0, apr: 0, may: 1, jun: 0, total: 1 },
            { name: "Специальная", jan: 0, feb: 1, mar: 0, apr: 1, may: 0, jun: 0, total: 2 }
          ]
        }
      ]
    }
  }
};

export const MONTH_NAMES: Record<MonthKey, { short: string; full: string; uz: string }> = {
  jan: { short: 'Янв', full: 'Январь', uz: 'Yanvar' },
  feb: { short: 'Фев', full: 'Февраль', uz: 'Fevral' },
  mar: { short: 'Мар', full: 'Март', uz: 'Mart' },
  apr: { short: 'Апр', full: 'Апрель', uz: 'Aprel' },
  may: { short: 'Май', full: 'Май', uz: 'May' },
  jun: { short: 'Июн', full: 'Июнь', uz: 'Iyun' },
};

export function getAggregatedBrands(filter: RegistrationFilter): AggregatedBrand[] {
  const brandMap = new Map<string, AggregatedBrand>();

  const processList = (brands: typeof rawData.registration_types.primary.brands, isPrimary: boolean) => {
    for (const b of brands) {
      const name = b.brand || b.source_name || "Noma'lum";
      if (!brandMap.has(name)) {
        brandMap.set(name, {
          brandName: name,
          primaryTotal: 0,
          secondaryTotal: 0,
          total: 0,
          jan: 0,
          feb: 0,
          mar: 0,
          apr: 0,
          may: 0,
          jun: 0,
          share: 0,
          equipmentMap: {}
        });
      }

      const item = brandMap.get(name)!;
      if (isPrimary) {
        item.primaryTotal += b.total;
      } else {
        item.secondaryTotal += b.total;
      }
      item.total += b.total;
      item.jan += b.jan;
      item.feb += b.feb;
      item.mar += b.mar;
      item.apr += b.apr;
      item.may += b.may;
      item.jun += b.jun;

      for (const eq of b.equipment) {
        if (!item.equipmentMap[eq.name]) {
          item.equipmentMap[eq.name] = {
            name: eq.name,
            primary: 0,
            secondary: 0,
            total: 0,
            months: { jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 0 }
          };
        }
        const eqItem = item.equipmentMap[eq.name];
        if (isPrimary) {
          eqItem.primary += eq.total;
        } else {
          eqItem.secondary += eq.total;
        }
        eqItem.total += eq.total;
        eqItem.months.jan += eq.jan;
        eqItem.months.feb += eq.feb;
        eqItem.months.mar += eq.mar;
        eqItem.months.apr += eq.apr;
        eqItem.months.may += eq.may;
        eqItem.months.jun += eq.jun;
      }
    }
  };

  if (filter === 'all' || filter === 'primary') {
    processList(rawData.registration_types.primary.brands, true);
  }
  if (filter === 'all' || filter === 'secondary') {
    processList(rawData.registration_types.secondary.brands, false);
  }

  // Calculate total across all brands for share calculation
  let overallTotal = 0;
  for (const b of brandMap.values()) {
    const val = filter === 'primary' ? b.primaryTotal : filter === 'secondary' ? b.secondaryTotal : b.total;
    overallTotal += val;
  }

  const list: AggregatedBrand[] = [];
  for (const b of brandMap.values()) {
    const relevantTotal = filter === 'primary' ? b.primaryTotal : filter === 'secondary' ? b.secondaryTotal : b.total;
    if (relevantTotal > 0) {
      b.share = overallTotal > 0 ? (relevantTotal / overallTotal) * 100 : 0;
      list.push(b);
    }
  }

  return list.sort((a, b) => {
    const valA = filter === 'primary' ? a.primaryTotal : filter === 'secondary' ? a.secondaryTotal : a.total;
    const valB = filter === 'primary' ? b.primaryTotal : filter === 'secondary' ? b.secondaryTotal : b.total;
    return valB - valA;
  });
}

export function getAggregatedEquipment(filter: RegistrationFilter): AggregatedEquipment[] {
  const eqMap = new Map<string, AggregatedEquipment>();
  const brands = getAggregatedBrands(filter);

  let grandTotal = 0;

  for (const b of brands) {
    for (const eqName in b.equipmentMap) {
      const eq = b.equipmentMap[eqName];
      const count = filter === 'primary' ? eq.primary : filter === 'secondary' ? eq.secondary : eq.total;
      if (count <= 0) continue;

      if (!eqMap.has(eqName)) {
        eqMap.set(eqName, {
          name: eqName,
          primaryTotal: 0,
          secondaryTotal: 0,
          total: 0,
          jan: 0,
          feb: 0,
          mar: 0,
          apr: 0,
          may: 0,
          jun: 0,
          share: 0,
          topBrands: []
        });
      }

      const item = eqMap.get(eqName)!;
      item.primaryTotal += eq.primary;
      item.secondaryTotal += eq.secondary;
      item.total += count;
      item.jan += eq.months.jan;
      item.feb += eq.months.feb;
      item.mar += eq.months.mar;
      item.apr += eq.months.apr;
      item.may += eq.months.may;
      item.jun += eq.months.jun;
      item.topBrands.push({ brand: b.brandName, count });
      grandTotal += count;
    }
  }

  const result: AggregatedEquipment[] = [];
  for (const item of eqMap.values()) {
    item.share = grandTotal > 0 ? (item.total / grandTotal) * 100 : 0;
    item.topBrands.sort((a, b) => b.count - a.count);
    result.push(item);
  }

  return result.sort((a, b) => b.total - a.total);
}

export function getMonthlyTotals(filter: RegistrationFilter): {
  month: MonthKey;
  labelUz: string;
  labelRu: string;
  primary: number;
  secondary: number;
  total: number;
}[] {
  const months: MonthKey[] = rawData.months;

  return months.map(m => {
    let p = 0;
    let s = 0;
    for (const b of rawData.registration_types.primary.brands) {
      p += b[m] || 0;
    }
    for (const b of rawData.registration_types.secondary.brands) {
      s += b[m] || 0;
    }

    return {
      month: m,
      labelUz: MONTH_NAMES[m].uz,
      labelRu: MONTH_NAMES[m].full,
      primary: p,
      secondary: s,
      total: filter === 'primary' ? p : filter === 'secondary' ? s : p + s
    };
  });
}
