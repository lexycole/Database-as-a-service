import { ApiMethodsOld } from '../loader/ApiMethodsOld';
import { IQueryById } from '../DataLoaderProps';
import { CryptId, JsonApiResult } from '../DataType';
import { PersonProps } from '../../view/person/PersonProps';
import { apiOld } from '../loader/ApiOld';

type PersonQuery = IQueryById;

export function personLoader(id: CryptId) {
  const query: PersonQuery = {
    id,
  };
  return apiOld.get<PersonDetailResult>(ApiMethodsOld.personDetail, {
    params: query,
  });
}

export type PersonDetailResult = JsonApiResult & PersonProps;
