import { ICountryCodeQuery, IQuery } from '../DataLoaderProps';
import { ApiMethodsOld } from '../loader/ApiMethodsOld';
import { apiOld } from '../loader/ApiOld';
import { JsonApiResult } from '../DataType';
import { FirmBasic } from '../../view/firm/FirmBasicProps';

type TopSearchQuery = IQuery & ICountryCodeQuery;

export type TopSearchFirmResult = JsonApiResult & {
  topSearchFirm: FirmBasic[];
  topSearchFirmCountry: FirmBasic[];
};

export function topSearchFirmLoader(countryCode: string) {
  const query: TopSearchQuery = {
    countryCode,
  };
  return apiOld.get<TopSearchFirmResult>(ApiMethodsOld.topSearchFirm, {
    params: query,
  });
}
