import { ApiMethods } from '../loader/ApiMethods';
import { JsonApiResult } from '../DataType';
import { CountryData } from '../../components/country/CountryProps';
import { api } from '../loader/Api';

export type LocalityCountryResult = {
  localityCountry: CountryData[];
} & JsonApiResult;

export function countryLoader() {
  return api.get<LocalityCountryResult>(ApiMethods.localityCountry);
}
