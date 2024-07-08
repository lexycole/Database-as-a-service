import axios, { AxiosInstance } from 'axios';
import { getApiUrlOld } from '../../environment/Environment';
import { ApiMethods, DHO_REQUEST_TOKEN } from '@/data/loader/ApiMethods';
import { getRequestToken } from '@/storage/TokenStorage';
import { api, onRejectedDefault } from '@/data/loader/Api';

export const apiOld: AxiosInstance = axios.create({
  baseURL: getApiUrlOld(),
});

apiOld.interceptors.request.use(
  (request) => {
    request.params = { q: JSON.stringify(request.params) };

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

apiOld.interceptors.response.use((response) => response, onRejectedDefault);
