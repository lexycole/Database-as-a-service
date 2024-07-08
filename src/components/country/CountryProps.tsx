import * as React from 'react';
import { CountryOptionStyle } from './CountryStyle';
import { countryToFlag } from '../address/AddressValue';
import { IdentifierId } from '../../data/DataType';
import getLang from '../../lang/Lang';
import { Languages } from '../locale/LocaleProps';

export type CountryData = {
  name: string;
  nameUn: string;
  code: string;
  continent: string;
  continentName?: string;
  continentNameUn?: string;
  hasStates: boolean;
} & IdentifierId;

export function CountryOption(option: CountryData, currentLang: Languages) {
  return (
    <CountryOptionStyle>
      <span>{countryToFlag(option.code)}</span>
      {currentLang === Languages.cs ? option.name : option.nameUn} (
      {option.code})
    </CountryOptionStyle>
  );
}

export function sortCountriesByContinent(countries: CountryData[]) {
  if (countries !== null) {
    countries.sort(
      (a: CountryData, b: CountryData) =>
        -b.continent.localeCompare(a.continent),
    );
    countries.map(
      (item: CountryData) =>
        (item.continentName = getLang(
          `continent`,
          item.continent.toLowerCase(),
        )),
    );
  }

  return countries;
}

export function getCountryByCode(
  countries: CountryData[],
  countryCode: string,
): CountryData | null {
  return (
    countries.find(
      (item: CountryData) =>
        item.code.toLowerCase() === countryCode.toLowerCase(),
    ) ?? null
  );
}
