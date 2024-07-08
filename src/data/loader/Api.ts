import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { ApiMethods, DHO_LOGIN_TOKEN, DHO_REQUEST_TOKEN } from './ApiMethods';
import { getApiUrl, isDevelopment } from '../../environment/Environment';
import {
  clearTokenStorage,
  getLoginToken,
  getRequestToken,
  setToken,
} from '../../storage/TokenStorage';
import { tokenRenewLoader } from '@/data/token/TokenRenewLoader';

let actualRenewRequest: Promise<void> | undefined;

export const api: AxiosInstance = axios.create({
  baseURL: getApiUrl(),
});

export function refreshRequestToken() {
  const loginToken = getLoginToken();
  if (actualRenewRequest === undefined) {
    const config: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Accept: 'application/json',
      },
    };
    if (loginToken && config.headers) {
      config.headers[DHO_LOGIN_TOKEN] = loginToken;
    }
    actualRenewRequest = tokenRenewLoader()
      .then(({ data }) => {
        setToken(data);
        if (isDevelopment()) {
          // todo vz debug

          console.log('send refresh token');
          console.log(data);
        }

        actualRenewRequest = undefined;
      })
      .catch(() => {
        if (isDevelopment()) {
          // todo vz debug
          console.log('refresh token fail - clear token storage');
        }
        clearTokenStorage();
        actualRenewRequest = undefined;
      });
    return actualRenewRequest;
  }
  return actualRenewRequest;
}

export async function onRejectedDefault(error: unknown): Promise<unknown> {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
  // @ts-ignore
  const originalRequest = error.config;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  // @ts-ignore
  if (error.response.status === 401 && !originalRequest._retry) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    originalRequest._retry = true;
    return refreshRequestToken().then(() => api(originalRequest));
  }
  return Promise.reject(error);
}

api.interceptors.request.use(
  (request) => {
    const requestToken = getRequestToken();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    request.headers = {
      ...request.headers,
      'Content-Type': `application/json;charset=utf-8`,
      Accept: `application/json`,
    };
    if (
      requestToken !== null &&
      request.url !== ApiMethods.login &&
      request.url !== ApiMethods.tokenRenew
    ) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      request.headers[DHO_REQUEST_TOKEN] = requestToken;
    }

    return request;
  },
  (error) => {
    // eslint-disable-next-line no-void
    void Promise.reject(error);
  },
);

api.interceptors.response.use((response) => response, onRejectedDefault);
