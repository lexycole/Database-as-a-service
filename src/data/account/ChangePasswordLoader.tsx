import { ApiMethodsOld, prepareParams } from '../loader/ApiMethodsOld';
import { IQuery } from '../DataLoaderProps';
import { JsonApiResult } from '../DataType';
import { apiOld } from '../loader/ApiOld';

type ChangePasswordQuery = {
  password: string;
  serverUrl: string;
} & IQuery;

export type ChangePasswordResult = {
  sent: string;
} & JsonApiResult;

export function changePasswordLoader(password: string, serverUrl: string) {
  const query: ChangePasswordQuery = {
    password,
    serverUrl,
  };

  return apiOld.post<ChangePasswordResult>(
    ApiMethodsOld.changePassword,
    prepareParams(query),
  );
}
