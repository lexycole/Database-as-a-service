import * as React from 'react';
import { FormEvent, useState } from 'react';
import { useRecoilState } from 'recoil';
import getLang from '../../lang/Lang';
import { AdvancedSearchForm } from '../../components/form/AdvancedSearchForm';
import { PackageInfoBlock } from './advanced/PackageInfoBlock';
import { IAutocompleteResult } from '../../data/SearchResultData';
import {
  SearchCategories,
  SearchQuery,
} from '../../components/search/SearchProps';
import {
  prepareSearchQuery,
  prepareSearchResult,
  SearchResultListProps,
} from './SearchOptions';
import { advancedSearchLoader } from '../../data/search/AdvancedSearchLoader';
import { ContentWrapper } from '../ContentWrapper';
import { SearchList } from './result/SearchList';
import { countryState, localityState } from '../../storage/SearchAtom';

export function AdvancedSearchWrapper() {
  // form data
  const [searchTerm, setSearchTerm] = useState<string>(``);
  const [selectedCountry, setSelectedCountry] = useRecoilState(countryState);
  const [selectedLocality, setSelectedLocality] = useRecoilState(localityState);
  const [searchInactive, setSearchInactive] = useState(false);
  const [validTerm, setValidTerm] = useState(true);

  // result data
  const [searchTermResult, setSearchTermResult] = useState<string>(``);
  const [isError, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState<IAutocompleteResult[]>();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (validTerm && loading === false) {
      setError(false);
      setSearchTermResult(searchTerm);
      const searchProps: SearchResultListProps = {
        term: searchTerm,
        category: SearchCategories.firm,
        countryCode: selectedCountry?.code.toLowerCase() || '',
        searchInactive,
      };
      if (selectedLocality) {
        searchProps[selectedLocality.type] = selectedLocality.id;
      }
      const searchQuery: SearchQuery = prepareSearchQuery(searchProps);
      setLoading(true);
      advancedSearchLoader(searchQuery)
        .then(({ data }) => {
          const multiResult: IAutocompleteResult[] = prepareSearchResult(data);
          setSearchResult(multiResult);
          setLoading(false);
        })
        .catch(() => {
          setError(false);
          setLoading(false);
        });
    }
  }

  return (
    <ContentWrapper
      isError={isError}
      title={getLang(`advancedSearch`, `title`)}
    >
      <PackageInfoBlock />
      <AdvancedSearchForm
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        handleSubmit={handleSubmit}
        selectedLocality={selectedLocality}
        setSelectedLocality={setSelectedLocality}
        searchInactive={searchInactive}
        setSearchInactive={setSearchInactive}
        setValidSearchTerm={setValidTerm}
        validSearchTerm={validTerm}
      />
      <SearchList
        term={searchTermResult}
        searchResult={searchResult}
        loading={loading}
      />
    </ContentWrapper>
  );
}
