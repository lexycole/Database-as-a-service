import { JsonApiResult } from '../DataType';
import { ApiMethods } from '../loader/ApiMethods';
import { api } from '../loader/Api';
import { TokenList } from '../TokenProps';

type LoginQuery = {
  login: string;
  password: string;
};

export type LoginResult = {} & JsonApiResult & TokenList;

export function loginLoader(email: string, password: string) {
  const query: LoginQuery = {
    login: email,
    password,
  };

  return api.post<LoginResult>(ApiMethods.login, query);
}
