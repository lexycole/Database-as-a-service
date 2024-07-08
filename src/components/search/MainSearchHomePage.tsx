import * as React from 'react';
import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { FirmCountrySelect } from '../country/FirmCountrySelect';
import { SearchResultData } from '../../data/SearchResultData';
import SearchField from './SearchField';
import {
  SearchCategories,
  SearchCategoryType,
  SearchQuery,
} from './SearchProps';
import LocalitySelect from '../locality/LocalitySelect';
import { LocalityData } from '../locality/LocalityProps';
import { prepareOptions } from './SearchAutocompleteOptions';
import { CountryData } from '../country/CountryProps';
import { autocompleteLoader } from '../../data/search/AutocompleteLoader';
import useDebounce from './SearchDebounce';
import { getSearchUrl } from '../link/SearchLink';
import {
  InputFieldCard,
  SearchActions,
  SearchContainer,
  SearchFormContainer,
  SearchFormInputContainer,
  SearchInputContainer,
} from '../../view/search/style/SearchStyle';
import { AdvancedSearchButton } from './AdvancedSearchButton';
import {
  categoryState,
  countryState,
  localityState,
  searchTermState,
} from '../../storage/SearchAtom';
// import FilterListIcon from '@material-ui/icons/FilterList';

// import { withStyles } from '@material-ui/core/styles';
// import Menu, { MenuProps } from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
import { Button } from '@material-ui/core';
import { faSearch } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { appTheme } from '@/storage/ThemeAtom';
import { SearchNavWrapper } from './SearchNavWrapper';
import { CategorySearch } from './CategorySearch';

export interface ISearchValue {
  searchValue?: string;
}

type MainSearchHomePageProps = {
  searchOnTop?: boolean;
  homePageSearch?: boolean;
};

// menu

// const StyledMenu = withStyles({
//   paper: {
//     padding: '1rem',
//     width: '60vw',
//     minWidth: 250,
//     marginTop: '22px',
//     borderRadius: '5px',
//     boxShadow: '0px 1px 10px 0px rgba(0,0,0,0.12)',

//     '@media (max-width: 600px)': {
//       padding: '1rem 20%',
//     },
//   },
// })((props: MenuProps) => (
//   <Menu
//     elevation={0}
//     getContentAnchorEl={null}
//     anchorOrigin={{
//       vertical: 'bottom',
//       horizontal: 'right',
//     }}
//     transformOrigin={{
//       vertical: 'top',
//       horizontal: 'right',
//     }}
//     TransitionComponent={Fade}
//     {...props}
//   />
// ));

// const StyledMenuItem = withStyles((theme) => ({
//   root: {
//     '&:focus': {
//       backgroundColor: theme.palette.primary.main,
//       '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
//         color: theme.palette.common.white,
//       },
//     },
//   },
// }))(MenuItem);

export function MainSearchHomePage({
  searchOnTop = false,
  homePageSearch = false,
}: MainSearchHomePageProps) {
  const [theme] = useRecoilState(appTheme);
  const router = useRouter();

  // search field props
  const [searchTerm, setSearchTerm] = useRecoilState(searchTermState);
  const [searchFieldOptions, setSearchFieldOptions] = useState<
    SearchResultData[]
  >([]);
  const [searchFieldOpen, setSearchFieldOpen] = useState(false);
  const [searchFieldLoading, setSearchFieldLoading] = useState(false);

  const [searchTermFocused, setSearchTermFocused] = useState(false);
  const [categoryFocused, setCategoryFocused] = useState(false);
  const [localityFocused, setLocalityFocused] = useState(false);
  const [countryFocused, setCountryFocused] = useState(false);

  // category
  const [selectedCategory, setSelectedCategory] = useRecoilState(categoryState);
  const setCategoryState = (category: SearchCategoryType) => {
    if (category) {
      setSelectedCategory(category as any);
    }
  };

  // locality
  const [selectedLocality, setSelectedLocality] = useRecoilState(localityState);
  const setLocalityState = (locality: LocalityData | null) => {
    setSelectedLocality(locality);
  };
  const [localityOptions, setLocalityOptions] = useState<LocalityData[]>([]);

  // country
  const [selectedCountry, setSelectedCountry] = useRecoilState(countryState);
  const setCountryState = (country?: CountryData) => {
    if (country) {
      setSelectedCountry(country);
    }
    // clear locality when change country
    if (country && selectedCountry && country.id !== selectedCountry.id) {
      setSelectedCountry(country);
      setLocalityState(null);
      setLocalityOptions([]);
    }
  };

  const debouncedSearchTerm = useDebounce(searchTerm);

  useEffect(() => {
    if (searchFieldLoading) {
      return;
    }

    // searchTerm and country is required, locality is optional
    if (debouncedSearchTerm && selectedCountry) {
      setSearchFieldLoading(true);

      autocompleteLoader(
        debouncedSearchTerm,
        selectedCategory,
        selectedCountry,
        selectedLocality,
      )
        .then(({ data }) => {
          setSearchFieldLoading(false);
          const autocompleteOptions: SearchResultData[] = prepareOptions(data);
          setSearchFieldOptions(autocompleteOptions);
        })
        .catch(() => {
          setSearchFieldLoading(false);
        });
    }
  }, [
    debouncedSearchTerm,
    // selectedCategory,
    // selectedLocality,
    // selectedCountry,
  ]);

  // todo vz reload autocomplete options when locality, country, category change ????

  useEffect(() => {
    if (!searchFieldOpen) {
      setSearchFieldOptions([]);
    }
  }, [searchFieldOpen]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchTerm.length >= 3) {
      const searchQuery: SearchQuery = {
        term: searchTerm,
        countryCode: selectedCountry
          ? selectedCountry?.code.toLowerCase() ?? ``
          : ``,
      };
      if (selectedCategory !== SearchCategories.all) {
        searchQuery.category = selectedCategory;
      }
      if (selectedLocality) {
        searchQuery[selectedLocality.type] = selectedLocality.id;
      }
      router.push({
        pathname: getSearchUrl(),
        query: searchQuery,
      });
    }
  };

  return (
    <SearchContainer t={theme} homeSearch>
      <SearchNavWrapper
        selectedCategory={selectedCategory}
        setSelectedCategory={setCategoryState}
      />

      <form
        noValidate
        autoComplete="off"
        action="search"
        onSubmit={handleSubmit}
      >
        {' '}
        <SearchFormContainer t={theme}>
          <SearchFormInputContainer t={theme}>
            <SearchInputContainer t={theme}>
              <div style={{ flex: 20, flexGrow: '1' }}>
                <InputFieldCard
                  t={theme}
                  topSearch={searchOnTop}
                  focused={searchTermFocused}
                >
                  <SearchField
                    onFocus={() => setSearchTermFocused(true)}
                    onBlur={() => setSearchTermFocused(false)}
                    searchValue={searchTerm}
                    setSearchValue={setSearchTerm}
                    searchFieldOpen={searchFieldOpen}
                    setSearchFieldOpen={setSearchFieldOpen}
                    searchFieldLoading={searchFieldLoading}
                    setSearchFieldLoading={setSearchFieldLoading}
                    selectedCategory={selectedCategory}
                    selectedCountry={selectedCountry}
                    selectedLocality={selectedLocality}
                    options={searchFieldOptions}
                  />
                </InputFieldCard>
              </div>

              <div className="filters">
                {!homePageSearch && (
                  <div
                    style={{
                      flex: 1,
                      marginLeft: searchOnTop ? '.5rem' : '0.7rem',
                    }}
                  >
                    <InputFieldCard
                      t={theme}
                      topSearch={searchOnTop}
                      focused={categoryFocused}
                    >
                      <CategorySearch
                        onFocus={() => setCategoryFocused(true)}
                        onBlur={() => setCategoryFocused(false)}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setCategoryState}
                      />
                    </InputFieldCard>
                  </div>
                )}

                <div
                  style={{
                    flex: 1,
                    padding: searchOnTop ? '0 .5rem' : '0 1rem',
                  }}
                >
                  <InputFieldCard
                    t={theme}
                    topSearch={searchOnTop}
                    focused={localityFocused}
                  >
                    <LocalitySelect
                      onFocus={() => setLocalityFocused(true)}
                      onBlur={() => setLocalityFocused(false)}
                      selectedLocality={selectedLocality}
                      selectedCountry={selectedCountry}
                      setSelectedLocality={setLocalityState}
                      localityOptions={localityOptions}
                      setLocalityOptions={setLocalityOptions}
                    />
                  </InputFieldCard>
                </div>
                <div style={{ flex: 1 }}>
                  <InputFieldCard
                    t={theme}
                    topSearch={searchOnTop}
                    focused={countryFocused}
                  >
                    <FirmCountrySelect
                      onFocus={() => setCountryFocused(true)}
                      onBlur={() => setCountryFocused(false)}
                      selectedCountry={selectedCountry}
                      setSelectedCountry={setCountryState}
                    />
                  </InputFieldCard>
                </div>
              </div>
            </SearchInputContainer>
          </SearchFormInputContainer>

          <SearchActions topSearch={searchOnTop}>
            <Button
              fullWidth
              type="submit"
              color="primary"
              variant="contained"
              className="search-button"
              style={{
                color: '#FFF',
                height: '86px',
                width: '95px',
                borderRadius: 14,
              }}
              disableElevation
              startIcon={
                <FontAwesomeIcon
                  className="search-icon"
                  size="4x"
                  icon={faSearch}
                />
              }
            />
            <AdvancedSearchButton />
          </SearchActions>
        </SearchFormContainer>
      </form>
    </SearchContainer>
  );
}
