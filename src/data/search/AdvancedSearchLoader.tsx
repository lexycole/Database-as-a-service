import { IAutocompleteQuery, ICountryCodeQuery } from '../DataLoaderProps';
import { ApiMethodsOld } from '../loader/ApiMethodsOld';
import { SearchCategoryType } from '../../components/search/SearchProps';
import { apiOld } from '../loader/ApiOld';
import { AutocompleteResultMulti } from '../SearchResultData';

type AdvancedSearchQuery = {
  category?: SearchCategoryType;
  city?: string;
  district?: string;
  region?: string;
  searchInactive?: boolean;
} & IAutocompleteQuery &
  ICountryCodeQuery;

export function advancedSearchLoader(query: AdvancedSearchQuery) {
  return apiOld.get<AutocompleteResultMulti>(ApiMethodsOld.advancedSearch, {
    params: query,
  });
}
