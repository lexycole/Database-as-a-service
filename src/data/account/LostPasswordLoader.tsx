import { ApiMethodsOld, prepareParams } from '../loader/ApiMethodsOld';
import { IQuery } from '../DataLoaderProps';
import { FormApiResult } from '../DataType';
import { apiOld } from '../loader/ApiOld';

type LostPasswordQuery = {
  email: string;
  backUrl: string;
} & IQuery;

export type LostPasswordResult = FormApiResult;

export function lostPasswordLoader(email: string, backUrl: string) {
  const query: LostPasswordQuery = {
    email,
    backUrl,
  };
  return apiOld.post<LostPasswordResult>(
    ApiMethodsOld.lostPassword,
    prepareParams(query),
  );
}
