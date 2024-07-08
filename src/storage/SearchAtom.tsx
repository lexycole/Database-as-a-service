import { atom } from 'recoil';
import { SearchCategories } from '../components/search/SearchProps';
import { CountryData } from '../components/country/CountryProps';
import { LocalityData } from '../components/locality/LocalityProps';

// todo vz tady by muzou byt def a pak docist
export const searchTermState = atom<string>({
  key: `searchTerm`,
  default: '',
});

export const firmCountriesState = atom<CountryData[] | null>({
  key: `firmCountriesState`,
  default: null,
});

export const countryState = atom<CountryData | null>({
  key: `countryState`,
  default: null,
});

export const categoryState = atom<SearchCategories>({
  key: `categoryState`,
  default: SearchCategories.all,
});

export const localityState = atom<LocalityData | null>({
  key: `localityState`,
  default: null,
});
