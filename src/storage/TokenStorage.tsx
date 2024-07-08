import { isClientSide } from '../environment/Environment';
import { TokenList } from '@/data/TokenProps';

const LOGIN_TOKEN = `loginToken`;
const REQUEST_TOKEN = `requestToken`;

export function setLoginToken(token: string): void {
  localStorage.setItem(LOGIN_TOKEN, token);
}

export function setRequestToken(token: string): void {
  localStorage.setItem(REQUEST_TOKEN, token);
}

export function setToken(tokenList: TokenList) {
  setLoginToken(tokenList.loginToken.token);
  setRequestToken(tokenList.requestToken.token);
}

export function clearTokenStorage(): void {
  if (isClientSide()) {
    localStorage.removeItem(LOGIN_TOKEN);
    localStorage.removeItem(REQUEST_TOKEN);
  }
}

export function getLoginToken(): string | null {
  return localStorage.getItem(LOGIN_TOKEN);
}

export function getRequestToken(): string | null {
  return localStorage.getItem(REQUEST_TOKEN);
}
