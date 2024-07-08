import { atom } from 'recoil';
import { isClientSide } from '../environment/Environment';

export const appTheme = atom<boolean | string | null>({
  key: `appTheme`,
  default: false,
});

const THEME = `theme`;

export function setAppTheme(theme: any): void {
  if (isClientSide()) {
    localStorage.setItem(THEME, JSON.stringify(theme));
  }
}

export function getCurrentTheme() {
  if (isClientSide()) {
    return JSON.parse(JSON.stringify(localStorage.getItem(THEME) ?? 'true'));
  }
}

export function clearThemeStorage(): void {
  if (isClientSide()) {
    localStorage.removeItem(THEME);
  }
}
