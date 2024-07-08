import * as React from 'react';
import { CountryOptionStyle } from './CountryStyle';
import { countryToFlag } from '../address/AddressValue';
import { IdentifierId } from '../../data/DataType';
import getLang from '../../lang/Lang';

export type CountryData = {
  name: string;
  code: string;
  continent: string;
  continentName?: string;
  hasStates: boolean;
} & IdentifierId;

export function CountryOption(option: CountryData) {
  return (
    <CountryOptionStyle>
      <span>{countryToFlag(option.code)}</span>
      {option.name} ({option.code})
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
