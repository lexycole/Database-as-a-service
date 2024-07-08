import { ApiMethodsOld } from '../loader/ApiMethodsOld';
import { ICountryCodeQuery } from '../DataLoaderProps';
import { JsonApiResult } from '../DataType';
import { PackageBaseDataProps } from '../../view/package/props/PackageDataProps';
import { apiOld } from '../loader/ApiOld';

type PackageDataQuery = ICountryCodeQuery;

export function packageBaseDataLoader(countryCode: string) {
  const query: PackageDataQuery = {
    countryCode,
  };
  return apiOld.get<PackageDataResult>(ApiMethodsOld.packageData, {
    params: query,
  });
}

export type PackageDataResult = JsonApiResult & PackageBaseDataProps;
