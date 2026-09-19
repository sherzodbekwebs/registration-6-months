export interface EquipmentInfo {
  uzName: string;
  simpleExplanation: string;
  iconName?: string;
}

export const EQUIPMENT_DESCRIPTIONS: Record<string, EquipmentInfo> = {
  'Тягач': {
    uzName: 'Тягач (Fura / Katta yuk tirkamasi)',
    simpleExplanation: 'Uzoq masofalarga katta pritsep ulab yuk tashiydigan xalqaro va viloyatlararo fura mashinasi.'
  },
  'Самосвал': {
    uzName: 'Самосвал (Yuk to\'kuvchi / Karyer mashinasi)',
    simpleExplanation: 'Qurilish, yo\'l ishlari, qum, shag\'al va toshlarni orqaga to\'kib beruvchi baquvvat yuk mashinasi.'
  },
  'Автокран': {
    uzName: 'Автокран (G\'ildirakli yuk ko\'tarish krani)',
    simpleExplanation: 'Qurilish va og\'ir uskunalarni balandlikka ko\'tarish va montaj qilish uchun kranli mashina.'
  },
  'Бетоносмеситель': {
    uzName: 'Бетоносмеситель (Beton qorgich / Mikser)',
    simpleExplanation: 'Qurilish maydonlariga tayyor quyma betonni aylanib qotib qolmasdan yetkazib beruvchi mashina.'
  },
  'Фургон': {
    uzName: 'Фургон (Yopiq kuzovli yuk mashinasi)',
    simpleExplanation: 'Yuklarni yomg\'ir, qor, quyosh va changdan himoya qilgan holda xavfsiz tashiydigan yopiq mashina.'
  },
  'Кранманипулятор': {
    uzName: 'Кран-манипулятор (O\'zi yuklovchi va tashuvchi kran)',
    simpleExplanation: 'Ham kichik krani, ham orqasida yuk tashiydigan ochiq borti bor qulay universal texnika.'
  },
  'Тентовый': {
    uzName: 'Тентовый (Brezentli / Tentli yuk mashinasi)',
    simpleExplanation: 'Kuzovi matoli brezent bilan yopilgan, yon va tepadan oson yuk ortiladigan yuk mashinasi.'
  },
  'Бортовой': {
    uzName: 'Бортовой (Ochiq bortli yuk mashinasi)',
    simpleExplanation: 'Orqa qismi ochiq bortli, uzun yoki keng yuklarni ortishga mo\'ljallangan klassik yuk mashinasi.'
  },
  'Водовоз': {
    uzName: 'Водовоз (Suv tashuvchi sisterna)',
    simpleExplanation: 'Aholi punktlari, dalalar yoki qurilishlarga texnik va ichimlik suvi yetkazib beruvchi bakli mashina.'
  },
  'Поливомойка': {
    uzName: 'Поливомойка (Yo\'l yuvish va sug\'orish mashinasi)',
    simpleExplanation: 'Shahar ko\'chalarini changdan yuvish va daraxt-ko\'chatlarni sug\'orish uchun maxsus purkagichli mashina.'
  },
  'Бензовоз': {
    uzName: 'Бензовоз (Yoqilg\'i tashuvchi sisterna)',
    simpleExplanation: 'Zapravka (AYQSH)larga benzin va dizel yoqilg\'isini xavfsiz tashish uchun ruxsat etilgan sisterna.'
  },
  'Рефрижератор': {
    uzName: 'Рефрижератор (Muzlatkichli / Sovutgichli yukxona)',
    simpleExplanation: 'Go\'sht, dori-darmon, meva va tez buziladigan oziq-ovqatlarni sovuq haroratda tashiydigan mashina.'
  },
  'Автовышка': {
    uzName: 'Автовышка (Odam ko\'taruvchi savatli kran)',
    simpleExplanation: 'Elektr simlarini tuzatish, simyog\'och va binolarni bo\'yash uchun odamni yuqoriga ko\'taradigan lyulka.'
  },
  'Автобентонасос': {
    uzName: 'Автобетононасос (Uzoqqa beton haydovchi nasos)',
    simpleExplanation: 'Ko\'p qavatli binolarning baland qavatlariga betonni uzun naycha (strela) orqali haydab beruvchi uskuna.'
  },
  'Мусоровоз': {
    uzName: 'Мусоровоз (Chiqindi tashuvchi shahar mashinasi)',
    simpleExplanation: 'Shahar va mahallalardan maishiy chiqindilarni presslab olib ketuvchi maxsus mashina.'
  },
  'Эвакуатор': {
    uzName: 'Эвакуатор (Buzilgan mashinalarni tashuvchi)',
    simpleExplanation: 'Nosoz yoki avariyaga uchragan avtomobillarni ortib ustaxonaga olib boruvchi maxsus platforma.'
  },
  'Цистерна': {
    uzName: 'Цистерна (Turli suyuqliklar tashuvchi bak)',
    simpleExplanation: 'Har xil suyuq kimyoviy yoki texnik moddalarni tashuvchi mustahkam bakli mashina.'
  },
  'Вахтовый': {
    uzName: 'Вахтовый (Ishchilarni qiyin yo\'llarda tashuvchi avtobus-mashina)',
    simpleExplanation: 'Kon, cho\'l va yo\'lsiz hududlarda ishlaydigan ishchilar brigadasini tashiydigan baquvvat mashina.'
  },
  'Буровая': {
    uzName: 'Буровая (Yer qazuvchi / burg\'ulash mashinasi)',
    simpleExplanation: 'Yer ostidan suv chiqarish yoki poydevor qoziqlari (svaya) uchun chuqur burg\'ulash apparati o\'rnatilgan texnika.'
  },
  'Изотермический': {
    uzName: 'Изотермический (Termos-furgon)',
    simpleExplanation: 'Sovutgichi yo\'q, lekin devorlari qalin bo\'lib, ichki haroratni saqlab turadigan termos kuzov.'
  },
  'Пожарная': {
    uzName: 'Пожарная (O\'t o\'chirish mashinasi)',
    simpleExplanation: 'Yong\'inni o\'chirish uchun suv zaxirasi, nasos va narvonga ega favqulodda xizmat mashinasi.'
  },
  'Специальная': {
    uzName: 'Специальная (Boshqa maxsus texnikalar)',
    simpleExplanation: 'Muayyan sohalar (kommunal, energetika, neft-gaz) uchun maxsus moslashtirilgan texnika.'
  },
  'Аварийная': {
    uzName: 'Аварийная (Tezkor ta\'mirlash brigadasi)',
    simpleExplanation: 'Gaz, suv, elektr tarmoqlaridagi avariyalarni tuzatish uchun asbob-uskunalar bilan jihozlangan texnika.'
  },
  'Прочее': {
    uzName: 'Прочее (Boshqa turlar)',
    simpleExplanation: 'Noyob yoki kam uchraydigan boshqa turdagi yuk mashinalari.'
  },
};

export function getEquipmentDisplay(rawName: string): { title: string; explanation: string } {
  const found = EQUIPMENT_DESCRIPTIONS[rawName];
  if (found) {
    return {
      title: found.uzName,
      explanation: found.simpleExplanation,
    };
  }
  return {
    title: rawName,
    explanation: 'Maxsus vazifalarni bajarishga mo\'ljallangan tijoriy transport vositasi.',
  };
}
