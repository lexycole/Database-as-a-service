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
import {
  BORDER_TOP_SEARCH,
  BORDER_TOP_SEARCH_DARK,
} from '@/../styles/BaseStyle';

export interface ISearchValue {
  searchValue?: string;
}

type MainSearchProps = {
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

export function MainSearch({
  searchOnTop = false,
  homePageSearch = false,
}: MainSearchProps) {
  const [theme] = useRecoilState(appTheme);
  const router = useRouter();

  // search field props
  // const [searchTerm, setSearchTerm] = useRecoilState(searchTermState);
  const [searchTerm, setSearchTerm] = useState(``);

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
    <SearchContainer t={theme} searchOnTop>
      {homePageSearch && (
        <SearchNavWrapper
          selectedCategory={selectedCategory}
          setSelectedCategory={setCategoryState}
        />
      )}

      <form
        noValidate
        autoComplete="off"
        action="search"
        onSubmit={handleSubmit}
      >
        <SearchFormContainer t={theme} searchOnTop={searchOnTop}>
          <InputFieldCard
            t={theme}
            topSearch={searchOnTop}
            focused={
              searchTermFocused ||
              categoryFocused ||
              localityFocused ||
              countryFocused
            }
            searchOnTop={searchOnTop}
          >
            <SearchFormInputContainer t={theme} searchOnTop={searchOnTop}>
              <SearchInputContainer t={theme} searchOnTop={searchOnTop}>
                <div className="flex-[15] flex-grow pr-4">
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
                </div>

                <div className="filters">
                  {!homePageSearch && (
                    <div
                      className={`flex-1 border-l ml-[${
                        searchOnTop ? '.5rem' : '0.7rem'
                      }] pr-4`}
                      style={{
                        borderLeft: `2px solid ${
                          theme ? BORDER_TOP_SEARCH : BORDER_TOP_SEARCH_DARK
                        }`,
                      }}
                    >
                      <CategorySearch
                        onFocus={() => setCategoryFocused(true)}
                        onBlur={() => setCategoryFocused(false)}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setCategoryState}
                      />
                    </div>
                  )}

                  <div
                    className={`flex-1 border-l ml-[${
                      searchOnTop ? '.2rem' : '0.7rem'
                    }] pr-4`}
                    style={{
                      borderLeft: `2px solid ${
                        theme ? BORDER_TOP_SEARCH : BORDER_TOP_SEARCH_DARK
                      }`,
                    }}
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
                  </div>
                  <div
                    className={`flex-1 border-l ml-[${
                      searchOnTop ? '.2rem' : '0.7rem'
                    }]`}
                    style={{
                      borderLeft: `2px solid ${
                        theme ? BORDER_TOP_SEARCH : BORDER_TOP_SEARCH_DARK
                      }`,
                      width: searchOnTop ? 140 : 'auto',
                    }}
                  >
                    <FirmCountrySelect
                      dropDownWidth="138%"
                      searchOnTop={searchOnTop}
                      onFocus={() => setCountryFocused(true)}
                      onBlur={() => setCountryFocused(false)}
                      selectedCountry={selectedCountry}
                      setSelectedCountry={setCountryState}
                    />
                  </div>
                </div>
              </SearchInputContainer>
            </SearchFormInputContainer>
          </InputFieldCard>

          <SearchActions topSearch={searchOnTop}>
            <Button
              fullWidth
              type="submit"
              color="primary"
              variant="contained"
              className="search-button"
              style={{ color: '#FFF', marginLeft: '1rem' }}
              disableElevation
              startIcon={
                <FontAwesomeIcon
                  className="search-icon"
                  size="2x"
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
