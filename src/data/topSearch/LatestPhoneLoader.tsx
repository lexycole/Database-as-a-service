import { ICountryCodeQuery, IQuery } from '../DataLoaderProps';
import { ApiMethodsOld } from '../loader/ApiMethodsOld';
import { apiOld } from '../loader/ApiOld';
import { JsonApiResult } from '../DataType';
import { FirmBasic } from '../../view/firm/FirmBasicProps';
import { PhoneBasic } from '../../view/phone/PhoneBasicProps';

type TopSearchQuery = IQuery & ICountryCodeQuery;

export type LatestPhone = {
  firmId: FirmBasic;
  contact: string;
};

export type LatestPhoneResult = JsonApiResult & {
  latestPhone: LatestPhone[];
  latestPhoneRating: PhoneBasic[];
};

export function latestPhoneLoader(countryCode: string) {
  const query: TopSearchQuery = {
    countryCode,
  };
  return apiOld.get<LatestPhoneResult>(ApiMethodsOld.latestPhone, {
    params: query,
  });
}
