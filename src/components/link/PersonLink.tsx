import * as React from 'react';
import { rewriteUrl, UrlDelimiter, WebLink } from './WebLink';
import getLang from '../../lang/Lang';
import { getLink, LinkProps } from './LinkProps';
import { parseCryptIdFromUrl, validateCryptUrl } from '../../url/UrlParser';
import { PersonBasic } from '../../view/person/PersonBasicProps';
import { countryToFlag } from '../address/AddressValue';

type PersonLinkProps = {
  showCountry?: boolean;
} & LinkProps &
  PersonBasic;

export function getPersonUrl(): string {
  return getLink(getLang(`link`, `person`));
}

function makePersonDetailUrl(props: PersonBasic): string {
  const personName: string = props.name;

  return props.id + UrlDelimiter + rewriteUrl(personName);
}

export function parsePersonId(sourceUrl: string): string | null {
  return parseCryptIdFromUrl(sourceUrl);
}

export function validatePersonUrl(
  originalUrl: string,
  personName: string,
): boolean {
  return validateCryptUrl(originalUrl, rewriteUrl(personName));
}

export function PersonLink(props: PersonLinkProps) {
  const url = `${getPersonUrl()}/${makePersonDetailUrl(props)}`;

  return (
    <WebLink href={url} title={props.title} lightColor>
      {props.showCountry && props?.address?.countryCode
        ? ` ${countryToFlag(props?.address?.countryCode)} `
        : ``}
      {props.name + (props.textAfter ? props.textAfter : ``)}
    </WebLink>
  );
}
