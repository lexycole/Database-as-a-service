import { JsonApiResult } from '../DataType';
import { api } from '../loader/Api';
import { ApiMethods } from '../loader/ApiMethods';

export type FirmCountryCountSum = {
  totalFirm: number;
  totalCountry: number;
};

export type FirmCountryCountSumResult = JsonApiResult & FirmCountryCountSum;

export function firmCountryCountSumLoader() {
  return api.get<FirmCountryCountSumResult>(ApiMethods.firmCountryCountSum);
}
