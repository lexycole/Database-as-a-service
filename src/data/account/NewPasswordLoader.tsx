import { ApiMethodsOld, prepareParams } from '../loader/ApiMethodsOld';
import { IQuery } from '../DataLoaderProps';
import { JsonApiResult } from '../DataType';
import { apiOld } from '../loader/ApiOld';

type NewPasswordQuery = {
  password: string;
  token: string;
  serverUrl: string;
} & IQuery;

export type NewPasswordResult = {
  sent: string;
} & JsonApiResult;

export function newPasswordLoader(
  password: string,
  token: string,
  serverUrl: string,
) {
  const query: NewPasswordQuery = {
    password,
    token,
    serverUrl,
  };

  return apiOld.post<NewPasswordResult>(
    ApiMethodsOld.newPassword,
    prepareParams(query),
  );
}
