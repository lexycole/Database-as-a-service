import {
  AutocompleteResultMulti,
  IAutocompleteResult,
} from '../../data/SearchResultData';
import {
  SearchCategories,
  SearchCategoryType,
  SearchQuery,
} from '../../components/search/SearchProps';

export type SearchResultListProps = {
  term: string;
  category: SearchCategoryType;
  countryCode: string;
  city?: string;
  district?: string;
  region?: string;
  searchInactive?: boolean;
};

export function prepareSearchQuery(props: SearchResultListProps): SearchQuery {
  const searchQuery: SearchQuery = {
    countryCode: props.countryCode,
    term: props.term,
    category: props.category,
  };
  if (props.city) {
    searchQuery.city = props.city;
  }
  if (props.district) {
    searchQuery.district = props.district;
  }
  if (props.region) {
    searchQuery.region = props.region;
  }

  if (props.searchInactive !== null) {
    searchQuery.searchInactive = props.searchInactive;
  }

  return searchQuery;
}

export function prepareSearchResult(
  searchResult: AutocompleteResultMulti,
): IAutocompleteResult[] {
  const multiResult: IAutocompleteResult[] = [];

  // single search
  if (searchResult.rows !== undefined && searchResult.rows > 0) {
    multiResult.push(searchResult);
  }

  // multi search
  if (searchResult.firm !== undefined && searchResult?.firm?.rows) {
    if (searchResult.firm.rows > 0) {
      searchResult.firm.category = SearchCategories.firm;
      multiResult.push(searchResult.firm);
    }
  }
  if (searchResult.product !== undefined && searchResult?.product?.rows) {
    if (searchResult.product.rows > 0) {
      searchResult.product.category = SearchCategories.product;
      multiResult.push(searchResult.product);
    }
  }
  if (searchResult.phone !== undefined && searchResult?.phone?.rows) {
    if (searchResult.phone.rows > 0) {
      searchResult.phone.category = SearchCategories.phone;
      multiResult.push(searchResult.phone);
    }
  }

  return multiResult;
}
