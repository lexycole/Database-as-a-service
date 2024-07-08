import { rewriteUrl, UrlDelimiter } from './WebLink';
import getLang from '../../lang/Lang';
import {
  parseCountryCodeFromUrl,
  validateCountryCodeUrl,
} from '../../url/UrlParser';
import { CountryData } from '../country/CountryProps';
import { getLink } from './LinkProps';

export function getTopSearchFirmUrl(): string {
  return getLink(getLang(`link`, `topSearchFirm`));
}

export function getTopSearchPersonUrl(): string {
  return getLink(getLang(`link`, `topSearchPerson`));
}

export function getTopSearchPhoneUrl(): string {
  return getLink(getLang(`link`, `topSearchPhone`));
}

function makeTopSearchDetailUrl(props: CountryData): string {
  const countryName: string = props.name;

  return props.code.toLowerCase() + UrlDelimiter + rewriteUrl(countryName);
}

export function parseTopSearchCountryCode(sourceUrl: string): string | null {
  return parseCountryCodeFromUrl(sourceUrl);
}

export function getTopSearchFirmHref(props: CountryData) {
  return `${getTopSearchFirmUrl()}/${makeTopSearchDetailUrl(props)}`;
}

export function getTopSearchPersonHref(props: CountryData) {
  return `${getTopSearchPersonUrl()}/${makeTopSearchDetailUrl(props)}`;
}

export function getTopSearchPhoneHref(props: CountryData) {
  return `${getTopSearchPhoneUrl()}/${makeTopSearchDetailUrl(props)}`;
}

export function validateTopSearchUrl(
  originalUrl: string,
  country: CountryData,
): boolean {
  return validateCountryCodeUrl(originalUrl, rewriteUrl(country.name));
}
