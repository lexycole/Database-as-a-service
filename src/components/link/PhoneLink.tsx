import * as React from 'react';
import { WebLink } from './WebLink';
import getLang from '../../lang/Lang';
import { getLink, LinkProps } from './LinkProps';
import { Box } from '@material-ui/core';
import { useRecoilState } from 'recoil';
import {
  TEXT_COLOR_DARK_SECONDARY,
  TEXT_COLOR_SECONDARY,
} from '@/../styles/BaseStyle';
import { appTheme } from '@/storage/ThemeAtom';

type PhoneLinkProps = {
  viewCount?: number;
  showViewCount?: boolean;
} & LinkProps;

export function getPhoneUrl(): string {
  return getLink(getLang(`link`, `phone`));
}

export function getPhonesUrl(): string {
  return getLink(getLang(`link`, `phones`));
}

export function parsePhoneId(sourceUrl: string): string | null {
  // todo vz v url je primo telefon
  return sourceUrl;
}

function normalizePhoneNumber(phone: string): string {
  return phone.replaceAll(/\D/g, ``);
}

export function validatePhoneUrl(phoneUrl: string, phone: string): boolean {
  return phoneUrl === normalizePhoneNumber(phone);
}

export function PhoneAutocompleteLink(props: PhoneLinkProps) {
  const [theme] = useRecoilState(appTheme);

  // todo vz ma tam byt phone nebo id ???
  const url = `${getPhoneUrl()}/${normalizePhoneNumber(props?.name ?? '')}`;
  return (
    <WebLink href={url} title={props.title}>
      <div style={{ width: '100%' }}>
        <Box p={0} m={0} fontWeight={800}>
          {props.name}
        </Box>
        <Box
          color={`${theme ? TEXT_COLOR_SECONDARY : TEXT_COLOR_DARK_SECONDARY}`}
        >
          {props.viewCount && props.showViewCount
            ? `  (${props.viewCount.toFixed()})`
            : ``}
        </Box>
      </div>
    </WebLink>
  );
}

export function PhoneLink(props: PhoneLinkProps) {
  // todo vz ma tam byt phone nebo id ???
  const url = `${getPhoneUrl()}/${normalizePhoneNumber(props?.name ?? '')}`;
  return (
    <WebLink href={url} title={props.title} noWrap>
      {props.name +
        (props.viewCount && props.showViewCount
          ? `  (${props.viewCount.toFixed()})`
          : ``)}
    </WebLink>
  );
}
