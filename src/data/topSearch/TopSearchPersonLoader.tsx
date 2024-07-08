import { ICountryCodeQuery, IQuery } from '../DataLoaderProps';
import { ApiMethodsOld } from '../loader/ApiMethodsOld';
import { apiOld } from '../loader/ApiOld';
import { JsonApiResult } from '../DataType';
import { PersonBasic } from '../../view/person/PersonBasicProps';

type TopSearchQuery = IQuery & ICountryCodeQuery;

export type TopSearchPersonResult = JsonApiResult & {
  topSearchPerson: PersonBasic[];
  topSearchPersonCountry: PersonBasic[];
};

export function topSearchPersonLoader(countryCode: string) {
  const query: TopSearchQuery = {
    countryCode,
  };
  return apiOld.get<TopSearchPersonResult>(ApiMethodsOld.topSearchPerson, {
    params: query,
  });
}
