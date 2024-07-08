import { IAutocompleteQuery, ICountryCodeQuery } from '../DataLoaderProps';
import { ApiMethodsOld } from '../loader/ApiMethodsOld';
import { SearchCategoryType } from '../../components/search/SearchProps';
import { apiOld } from '../loader/ApiOld';
import { AutocompleteResultMulti } from '../SearchResultData';

type SearchQuery = {
  category?: SearchCategoryType;
  city?: string;
  district?: string;
  region?: string;
} & IAutocompleteQuery &
  ICountryCodeQuery;

export function searchLoader(query: SearchQuery) {
  return apiOld.get<AutocompleteResultMulti>(ApiMethodsOld.autocompleteList, {
    params: query,
  });
}
