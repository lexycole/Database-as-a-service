import axios from 'axios';
import { TokenList } from '../TokenProps';
import { JsonApiResult } from '../DataType';
import { getApiUrl } from '@/environment/Environment';
import { getLoginToken } from '@/storage/TokenStorage';
import { ApiMethods, DHO_LOGIN_TOKEN } from '../loader/ApiMethods';

export type TokenRenewResult = TokenList & JsonApiResult;

export const tokenRenewLoader = () => {
  const loginToken = getLoginToken();
  const headers = {
    [DHO_LOGIN_TOKEN]: loginToken ?? '',
  };

  return axios.post<TokenRenewResult>(
    `${getApiUrl()}${ApiMethods.tokenRenew}`,
    {},
    {
      headers,
    },
  );
};
