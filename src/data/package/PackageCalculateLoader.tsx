import { ApiMethodsOld, prepareParams } from '../loader/ApiMethodsOld';
import { IQuery, PackageFilterQuery } from '../DataLoaderProps';
import { PackageFilterData } from '../../components/package/PackageFilterProps';
import { JsonApiResult } from '../DataType';
import { PackageCalculateData } from '../../view/package/PackageCalculateProps';
import { apiOld } from '../loader/ApiOld';

type PackageCalculateQuery = IQuery & PackageFilterQuery;

export function packageCalculateLoader(packageFilter: PackageFilterData) {
  const query: PackageCalculateQuery = {
    packageFilter,
  };
  return apiOld.post<PackageCalculateResult>(
    ApiMethodsOld.packageCalculate,
    prepareParams(query),
  );
}

export type PackageCalculateResult = JsonApiResult & PackageCalculateData;
