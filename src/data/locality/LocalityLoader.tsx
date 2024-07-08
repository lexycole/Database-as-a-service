import { ApiMethodsOld } from '../loader/ApiMethodsOld';
import { IAutocompleteQuery } from '../DataLoaderProps';
import { JsonApiResult } from '../DataType';
import { AutocompleteLocalityData } from '../../components/locality/LocalityProps';
import { apiOld } from '../loader/ApiOld';

type LocalityQuery = {
  countryCode: string;
} & IAutocompleteQuery;

export function localityLoader(searchTerm, countryCode?: string) {
  const query: LocalityQuery = {
    term: searchTerm,
    countryCode: countryCode ?? ``,
  };
  return apiOld.get<AutocompleteLocalityResult>(
    ApiMethodsOld.localityAutocomplete,
    {
      params: query,
    },
  );
}

export type AutocompleteLocalityResult = JsonApiResult &
  AutocompleteLocalityData;
