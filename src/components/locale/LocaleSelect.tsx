import * as React from 'react';
import { useRouter } from 'next/router';
import { Button } from '@material-ui/core';
import { countryToFlag } from '../address/AddressValue';
import { LocaleFlag } from '../../view/menu/style/MenuStyle';
import { Languages } from './LocaleProps';
import { LIGHT_COLOR } from '@/../styles/BaseStyle';

function getFlagCode(locale: string): string {
  switch (locale) {
    case Languages.cs:
      return `cz`;
    case Languages.en:
      return `gb`;
    default:
      return `cz`;
  }
}

interface Props {
  light?: boolean;
}

export function LocaleSelect({ light }: Props) {
  const router = useRouter();
  const { pathname, asPath, query } = router;

  const handleChangeLanguage = (locale: string) => {
    router.push({ pathname, query }, asPath, { locale });
  };

  return (
    <>
      {router?.locales?.map((locale: string) => (
        <Button
          size="small"
          key={locale}
          style={{ margin: '3px', ...(light ? { color: LIGHT_COLOR } : {}) }}
          onClick={() => handleChangeLanguage(locale)}
        >
          <LocaleFlag>{countryToFlag(getFlagCode(locale))}</LocaleFlag>
          {` ${locale}`}
        </Button>
      ))}
    </>
  );
}
