import { JsonApiResult } from '../DataType';
import { ApiMethods } from '../loader/ApiMethods';
import { api } from '../loader/Api';

export type LogoutResult = {} & JsonApiResult;

export function logoutLoader() {
  return api.post<LogoutResult>(ApiMethods.logout);
}
