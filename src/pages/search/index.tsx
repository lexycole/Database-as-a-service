import * as React from 'react';
import { useRouter } from 'next/router';
import { SearchResultList } from '../../view/search/SearchResultList';
import {
  SearchCategories,
  SearchCategoryType,
} from '../../components/search/SearchProps';
import { PageParamsError } from '../../error/PageParamsError';

function Search() {
  const router = useRouter();
  const { term, category, city, district, region, countryCode } = router.query;

  let searchTerm: string | null = null;
  let searchCategory: SearchCategoryType = SearchCategories.all;

  // server side - empty query
  if (term !== undefined) {
    searchTerm = term.toString();

    if (category && category.toString() in SearchCategories) {
      searchCategory = SearchCategories[category.toString()];
    }

    // todo vz validace parametru !!!
    if (term.length < 3) {
      return <PageParamsError />;
    }
  }

  return (
    <SearchResultList
      key={searchTerm}
      term={searchTerm ?? ``}
      category={searchCategory}
      city={city ? city.toString() : ``}
      region={region ? region.toString() : ``}
      district={district ? district.toString() : ``}
      countryCode={countryCode ? countryCode.toString() : ``}
    />
  );
}

export default Search;
