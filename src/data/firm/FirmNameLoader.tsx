import { ICountryCodeQuery, IQueryByIdNumber } from '../DataLoaderProps';
import { CountryData } from '../../components/country/CountryProps';
import { ApiMethods } from '../loader/ApiMethods';
import { JsonApiResult } from '../DataType';
import { api } from '../loader/Api';

type FirmNameQuery = IQueryByIdNumber & ICountryCodeQuery;

export type FirmNameResult = JsonApiResult & {
  firmName: string;
};

export function firmNameLoader(idNumber: string, country: CountryData) {
  const query: FirmNameQuery = {
    idNumber,
    countryCode: country.code,
  };

  return api.get<FirmNameResult>(ApiMethods.firmName, {
    params: query,
  });
}
