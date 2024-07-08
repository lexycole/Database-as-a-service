import { ApiMethodsOld, prepareParams } from '../loader/ApiMethodsOld';
import { AccountFormQuery } from '../DataLoaderProps';
import { apiOld } from '../loader/ApiOld';
import { JsonApiResult } from '../DataType';

export type RegistrationQuery = AccountFormQuery;

export function registrationLoader(query: RegistrationQuery) {
  return apiOld.post<RegistrationResult>(
    ApiMethodsOld.registration,
    prepareParams(query),
  );
}

export type RegistrationResult = JsonApiResult & {
  result: {
    data: string;
  };
};
