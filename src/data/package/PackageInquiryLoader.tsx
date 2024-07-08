import { ApiMethodsOld, prepareParams } from '../loader/ApiMethodsOld';
import { AccountFormQuery, PackageFilterQuery } from '../DataLoaderProps';
import { apiOld } from '../loader/ApiOld';
import { JsonApiResult } from '../DataType';

export type PackageInquiryQuery = AccountFormQuery & PackageFilterQuery;

export type PackageInquirySendResult = JsonApiResult & {
  result: {
    data: string;
  };
};

export function packageInquiryLoader(query: PackageInquiryQuery) {
  return apiOld.post<PackageInquirySendResult>(
    ApiMethodsOld.sendPackageInquiry,
    prepareParams(query),
  );
}
