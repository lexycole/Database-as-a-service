import {
  AutocompleteResultMulti,
  SearchResultData,
} from '../../data/SearchResultData';
import {
  getCategoryName,
  SearchCategories,
  SearchCategoryType,
} from './SearchProps';

function prepareOptionsCategory(
  input: SearchResultData[],
  options: SearchResultData[],
  category: SearchCategoryType,
) {
  input.map((item: SearchResultData) => {
    item.category = category;
    item.categoryName = getCategoryName(category);
    options.push(item);
  });
}

export function prepareOptions(
  searchResult: AutocompleteResultMulti,
): SearchResultData[] {
  const options: SearchResultData[] = [];
  // single search
  if (searchResult.data && searchResult.category) {
    prepareOptionsCategory(searchResult.data, options, searchResult.category);
  }
  // multi search
  if (searchResult.firm && searchResult?.firm.rows) {
    if (searchResult?.firm.rows > 0) {
      prepareOptionsCategory(
        searchResult.firm.data,
        options,
        SearchCategories.firm,
      );
    }
  }
  if (searchResult.product && searchResult.product.rows) {
    if (searchResult.product.rows > 0) {
      prepareOptionsCategory(
        searchResult.product.data,
        options,
        SearchCategories.product,
      );
    }
  }
  if (searchResult.phone && searchResult.phone.rows) {
    if (searchResult.phone.rows > 0) {
      prepareOptionsCategory(
        searchResult.phone.data,
        options,
        SearchCategories.phone,
      );
    }
  }

  return options;
}
