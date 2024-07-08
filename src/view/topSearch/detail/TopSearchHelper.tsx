import Link from 'next/link';
import { Button } from '@material-ui/core';
import * as React from 'react';
import getLang from '../../../lang/Lang';
import { CountryData } from '../../../components/country/CountryProps';
import {
  getTopSearchFirmHref,
  getTopSearchPersonHref,
  getTopSearchPhoneHref,
} from '../../../components/link/TopSearchLink';

type TopSearchButtonProps = {
  country: CountryData | null;
};

export function TopSearchTitle(props: {
  base: string;
  country: CountryData | null;
}) {
  return (
    <>
      {`${props.base} ${getLang(
        `topSearch`,
        props.country ? `inCountry` : `inAllCountries`,
      )} ${props.country ? props.country.name : ``}`}
    </>
  );
}

export function TopSearchFirmButton(props: TopSearchButtonProps) {
  return (
    <div>
      <Link
        href={props.country ? getTopSearchFirmHref(props.country) : ''}
        passHref
      >
        <Button
          size="large"
          color="primary"
          style={{
            color: '#fff',
          }}
          disableElevation
          variant="contained"
          id="top-search-firm-button"
        >
          {getLang(`topSearch`, `titleFirm`)}
        </Button>
      </Link>
    </div>
  );
}

export function TopSearchPersonButton(props: TopSearchButtonProps) {
  return (
    <div>
      <Link
        href={props.country ? getTopSearchPersonHref(props.country) : ''}
        passHref
      >
        <Button
          size="large"
          color="primary"
          style={{
            color: '#fff',
          }}
          disableElevation
          variant="contained"
          id="top-search-person-button"
        >
          {getLang(`topSearch`, `titlePerson`)}
        </Button>
      </Link>
    </div>
  );
}

export function TopSearchPhoneButton(props: TopSearchButtonProps) {
  return (
    <div>
      <Link
        href={props.country ? getTopSearchPhoneHref(props.country) : ''}
        passHref
      >
        <Button
          size="large"
          style={{
            color: '#fff',
          }}
          color="primary"
          disableElevation
          variant="contained"
          id="top-search-phone-button"
        >
          {getLang(`topSearch`, `titlePhone`)}
        </Button>
      </Link>
    </div>
  );
}
