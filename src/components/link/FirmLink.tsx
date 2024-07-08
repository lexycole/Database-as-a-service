import * as React from 'react';
import getLang from '../../lang/Lang';
import { getLink, LinkProps } from './LinkProps';
import { countryToFlag } from '../address/AddressValue';
import { FirmBasic } from '../../view/firm/FirmBasicProps';
import { rewriteUrl, UrlDelimiter, WebLink } from './WebLink';
import { parseUidFromUrl, validateUidUrl } from '../../url/UrlParser';
import { appTheme } from '@/storage/ThemeAtom';
import { Box } from '@material-ui/core';
import { useRecoilState } from 'recoil';
import {
  TEXT_COLOR_DARK_SECONDARY,
  TEXT_COLOR_SECONDARY,
} from '@/../styles/BaseStyle';

type FirmLinkProps = {
  showIdNumber?: boolean;
  showCity?: boolean;
  showCountry?: boolean;
  lightColor?: boolean;
} & FirmBasic &
  LinkProps;

export function getFirmUrl(): string {
  return getLink(getLang(`link`, `firm`));
}

export function getDatabaseFirmUrl(): string {
  return getLink(getLang(`link`, `databaseFirm`));
}

function getFirmFullName(props: FirmBasic): string {
  let fullName: string = props.name;

  if (props.visible) {
    fullName += props.address?.street ? `-${props.address.street}` : ``;
    fullName += props.address?.city ? `-${props.address?.city}` : ``;
  }

  return fullName;
}

function makeFirmDetailUrl(props: FirmBasic): string {
  return props.uid + UrlDelimiter + rewriteUrl(getFirmFullName(props));
}

export function parseFirmUid(sourceUrl: string): string | null {
  return parseUidFromUrl(sourceUrl);
}

export function validateFirmUrl(originalUrl: string, firm: FirmBasic): boolean {
  return validateUidUrl(originalUrl, rewriteUrl(getFirmFullName(firm)));
}

export function FirmAutocompleteLink(props: FirmLinkProps) {
  const [theme] = useRecoilState(appTheme);

  const url = `${getFirmUrl()}/${makeFirmDetailUrl(props)}`;
  return (
    <WebLink href={url} title={props.title}>
      <div style={{ width: '100%', padding: 0, margin: 0 }}>
        <Box p={0} m={0} fontWeight={800}>
          {props.name}
        </Box>
        <Box
          color={`${theme ? TEXT_COLOR_SECONDARY : TEXT_COLOR_DARK_SECONDARY}`}
        >
          {props.showCountry && props.countryCode
            ? ` ${countryToFlag(props.countryCode)} `
            : ``}
          {(props.idNumber && props.showIdNumber ? ` ${props.idNumber}` : ``) +
            (props.showCity && props.address?.city
              ? ` - ${props.address.city}`
              : ``) +
            (props.textAfter ? props.textAfter : ``)}
        </Box>
      </div>
    </WebLink>
  );
}

export function FirmLink(props: FirmLinkProps) {
  const url = `${getFirmUrl()}/${makeFirmDetailUrl(props)}`;
  return (
    <WebLink href={url} title={props.title} lightColor={props.lightColor}>
      {props.showCountry && props.countryCode
        ? ` ${countryToFlag(props.countryCode)} `
        : ``}
      {(props.idNumber && props.showIdNumber ? ` ${props.idNumber} - ` : ``) +
        props.name +
        (props.showCity && props.address?.city
          ? ` - ${props.address.city}`
          : ``) +
        (props.textAfter ? props.textAfter : ``)}
    </WebLink>
  );
}
