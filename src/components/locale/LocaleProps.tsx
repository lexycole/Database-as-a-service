import { csCZ, enUS, Localization } from '@material-ui/core/locale';
import { NextRouter } from 'next/router';

export enum Languages {
  cs = `cs`,
  en = `en`,
}

export type LangType = keyof typeof Languages;

export function getUsedLang(router: NextRouter): Map<LangType, Localization> {
  const usedLang = new Map<LangType, Localization>();

  router?.locales?.map((langCode: any) => {
    switch (langCode) {
      case Languages.cs:
        usedLang.set(Languages.cs, csCZ);
        break;
      case Languages.en:
        usedLang.set(Languages.en, enUS);
        break;
    }
  });

  return usedLang;
}
