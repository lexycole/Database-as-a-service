import { atom } from 'recoil';
import { CountryData } from '../components/country/CountryProps';
import { UserData } from '../components/user/UserData';
import { FirmCountryCountSum } from '../data/firm/FirmCountryCountSumLoader';
import { AccountData } from '@/components/account/AccountData';

export const countriesState = atom<CountryData[] | null>({
  key: `countriesState`,
  default: null,
});

export const loggedState = atom<boolean | null>({
  key: `loggedState`,
  default: null,
});

export const userState = atom<UserData | null>({
  key: `userState`,
  default: null,
});

export const accountState = atom<AccountData | null>({
  key: `accountState`,
  default: null,
});

export const firmCountrySumState = atom<FirmCountryCountSum | null>({
  key: `firmCountrySumState`,
  default: null,
});
