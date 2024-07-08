import * as React from 'react';
import { AddressData } from './AddressProps';
import {
  AddressValueNode,
  CountryFlagSpan,
  CountryValueNode,
} from '../../../styles/Style';

// ISO 3166-1 alpha-2
// ⚠️ No support for IE 11
export function countryToFlag(isoCode: string) {
  return typeof String.fromCodePoint !== `undefined`
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) =>
          String.fromCodePoint(char.charCodeAt(0) + 127397),
        )
    : isoCode;
}

export function AddressValue(props: {
  addressData: AddressData;
  includeCountry?: boolean;
}) {
  const displayCountry =
    props.includeCountry || props.addressData.countryCode !== `cz`;
  return (
    <AddressValueNode>
      {props.addressData.address !== undefined && (
        <>
          {props.addressData.address}

          {displayCountry && (
            <>
              <CountryFlagSpan>
                {countryToFlag(props.addressData.countryCode)}
              </CountryFlagSpan>
              {props.addressData.country}
            </>
          )}
        </>
      )}
    </AddressValueNode>
  );
}

export function CountryValue(props: {
  addressData: AddressData;
  includeCountry?: boolean;
}) {
  return (
    <CountryValueNode>
      {props.addressData.address !== undefined && (
        <>
          <CountryFlagSpan>
            {countryToFlag(props.addressData.countryCode)}
          </CountryFlagSpan>

          {props.addressData.country}
        </>
      )}
    </CountryValueNode>
  );
}
