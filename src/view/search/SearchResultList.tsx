import * as React from 'react';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { SearchQuery } from '../../components/search/SearchProps';
import { IAutocompleteResult } from '../../data/SearchResultData';
import { SearchList } from './result/SearchList';
import { searchLoader } from '../../data/search/SearchLoader';
import {
  prepareSearchQuery,
  prepareSearchResult,
  SearchResultListProps,
} from './SearchOptions';
import { ContentWrapper } from '../ContentWrapper';
import { countryState } from '../../storage/SearchAtom';

export function SearchResultList(props: SearchResultListProps) {
  const [selectedCountry] = useRecoilState(countryState);

  const [isError, setError] = useState(false);
  const [searchResult, setSearchResult] = useState<IAutocompleteResult[]>();
  const [countryCode, setCountryCode] = useState(props.countryCode);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedCountry) {
      setCountryCode(selectedCountry.code);
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (countryCode) {
      setLoading(true);
      const searchQuery: SearchQuery = prepareSearchQuery(props);
      searchLoader(searchQuery)
        .then(({ data }) => {
          const multiResult: IAutocompleteResult[] = prepareSearchResult(data);
          setError(false);
          setSearchResult(multiResult);
          setLoading(false);
        })
        .catch(() => {
          setError(true);
          setLoading(false);
        });
    }
  }, [countryCode]);

  return (
    <ContentWrapper isError={isError}>
      <SearchList
        term={props.term}
        category={props.category}
        searchResult={searchResult}
        loading={loading}
      />
    </ContentWrapper>
  );
}
