import { IQuery } from '../DataLoaderProps';
import { ApiMethods } from '../loader/ApiMethods';
import { JsonApiResult } from '../DataType';
import { CountryData } from '../../components/country/CountryProps';
import { api } from '../loader/Api';

type FirmCountryQuery = {
  allCountries?: boolean;
  includeZero?: boolean;
  firmCount?: boolean;
} & IQuery;

export type FirmCountryResult = {
  firmCountry: CountryData[];
} & JsonApiResult;

export function firmCountryLoader() {
  const query: FirmCountryQuery = {};

  return api.get<FirmCountryResult>(ApiMethods.firmCountry, {
    params: query,
  });
}
