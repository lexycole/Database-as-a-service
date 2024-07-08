import { IAutocompleteQuery, ICountryCodeQuery } from '../DataLoaderProps';
import { ApiMethodsOld } from '../loader/ApiMethodsOld';
import { SearchCategoryType } from '../../components/search/SearchProps';
import { CountryData } from '../../components/country/CountryProps';
import { LocalityData } from '../../components/locality/LocalityProps';
import { JsonApiResult } from '../DataType';
import { AutocompleteResultMulti } from '../SearchResultData';
import { apiOld } from '../loader/ApiOld';

type SearchQuery = {
  category?: SearchCategoryType | null;
  city?: string;
  district?: string;
  region?: string;
} & IAutocompleteQuery &
  ICountryCodeQuery;

export function autocompleteLoader(
  term: string,
  category: SearchCategoryType | null,
  country: CountryData | null,
  locality?: LocalityData | any,
) {
  const query: SearchQuery = {
    term,
    category,
    countryCode: country?.code?.toLowerCase() ?? '',
  };
  if (locality) {
    query[locality.type] = locality.id;
  }

  // todo vz debug log
  console.log('MAKE FIRM REQUEST: ', query);

  return apiOld.get<AutocompleteResult>(ApiMethodsOld.autocompleteList, {
    params: query,
  });
}

export type AutocompleteResult = JsonApiResult & AutocompleteResultMulti;
