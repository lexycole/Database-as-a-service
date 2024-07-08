import { ICountryCodeQuery, IQuery } from '../DataLoaderProps';
import { ApiMethodsOld } from '../loader/ApiMethodsOld';
import { apiOld } from '../loader/ApiOld';
import { JsonApiResult } from '../DataType';
import { PhoneBasic } from '../../view/phone/PhoneBasicProps';

type TopSearchQuery = IQuery & ICountryCodeQuery;

export type TopSearchPhoneResult = JsonApiResult & {
  topSearchPhone: PhoneBasic[];
  topSearchPhoneCountry: PhoneBasic[];
};

export function topSearchPhoneLoader(countryCode: string) {
  const query: TopSearchQuery = {
    countryCode,
  };
  return apiOld.get<TopSearchPhoneResult>(ApiMethodsOld.topSearchPhone, {
    params: query,
  });
}
