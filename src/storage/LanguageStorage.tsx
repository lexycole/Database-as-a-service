import { isClientSide } from '../environment/Environment';

const LANGUAGE = `lang`;

export function setLanguage(language: string): void {
  if (isClientSide()) {
    localStorage.setItem(LANGUAGE, language);
  }
}

export function getCurrentLanguage() {
  if (isClientSide()) {
    return localStorage.getItem(LANGUAGE);
  }
}

export function clearLanguageStorage(): void {
  if (isClientSide()) {
    localStorage.removeItem(LANGUAGE);
  }
}
