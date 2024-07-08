import { atom } from 'recoil';
import {
  PackageBaseDataProps,
  PackageEconomicDataProps,
} from '../view/package/props/PackageDataProps';
import { CountryData } from '../components/country/CountryProps';

export const packageCountryState = atom<CountryData | null>({
  key: `packageCountryState`,
  default: null,
});

export const packageBaseDataState = atom<PackageBaseDataProps | null>({
  key: `packageBaseDataState`,
  default: null,
});

export const packageEconomicDataState = atom<PackageEconomicDataProps | null>({
  key: `packageEconomicDataState`,
  default: null,
});
