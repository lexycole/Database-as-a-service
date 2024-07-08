import { ApiMethodsOld } from '../loader/ApiMethodsOld';
import { ICountryCodeQuery } from '../DataLoaderProps';
import { JsonApiResult } from '../DataType';
import { PackageEconomicDataProps } from '../../view/package/props/PackageDataProps';
import { apiOld } from '../loader/ApiOld';

type PackageDataQuery = ICountryCodeQuery;

export function packageEconomicDataLoader(countryCode: string) {
  const query: PackageDataQuery = {
    countryCode,
  };
  return apiOld.get<PackageEconomicDataResult>(
    ApiMethodsOld.packageEconomicData,
    {
      params: query,
    },
  );
}

export type PackageEconomicDataResult = JsonApiResult &
  PackageEconomicDataProps;
