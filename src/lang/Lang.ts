import { LangCSText } from './LangCS';
import { LangENText } from './LangEN';
import { Languages } from '../components/locale/LocaleProps';
import { getCurrentLanguage } from '@/storage/LanguageStorage';

export type LangSection = object;

export default function getLang(
  section: string,
  key: string,
  langVal?: Languages,
): string | any {
  const currentLang = langVal || (getCurrentLanguage() ?? Languages.cs);

  const langStorage = currentLang === Languages.en ? LangENText : LangCSText;

  if (!Object.prototype.hasOwnProperty.call(langStorage, section)) {
    // todo vz debug
    return `unknown section ${section}`;
  }

  const langTextElement: string = langStorage[section];
  if (Object.prototype.hasOwnProperty.call(langTextElement, key)) {
    return langTextElement[key];
  }
  // todo vz debug
  return `unknown lang key "${section}" - "${key}"`;
}

export function langByCount(section: string, key: string, count: number) {
  let postfix = 1;
  if (count > 1 && count < 5) {
    postfix = 2;
  } else if (count >= 5) {
    postfix = 5;
  }
  return getLang(section, key + postfix.toFixed());
}
