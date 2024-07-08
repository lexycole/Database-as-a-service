import React, { useEffect } from 'react';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { LocaleFlag } from '@/view/menu/style/MenuStyle';
import { useRouter } from 'next/router';
import { countryToFlag } from '../address/AddressValue';
import { Languages } from './LocaleProps';
import { ToggleButtonLabel } from '../menu/SettingMenu';
import { getCurrentLanguage } from '@/storage/LanguageStorage';

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

export default function CustomizedDividers() {
  const router = useRouter();
  const [local, setLocal] = React.useState('left');
  const { pathname, asPath, query } = router;

  const handleChangeLanguage = (locale: string) => {
    router.push({ pathname, query }, asPath, { locale });
  };

  useEffect(() => {
    setLocal(getCurrentLanguage() ?? 'cz');
  }, []);

  const handleLocal = (
    event: React.MouseEvent<HTMLElement>,
    newLocal: string,
  ) => {
    setLocal(newLocal);
  };

  return (
    <div>
      <ToggleButtonGroup
        exclusive
        size="small"
        value={local}
        onChange={handleLocal}
        aria-label="text alignment"
      >
        {router?.locales?.map((locale: string) => (
          <ToggleButton
            value={locale}
            onClick={() => handleChangeLanguage(locale)}
          >
            <LocaleFlag>{countryToFlag(getFlagCode(locale))}</LocaleFlag>
            <ToggleButtonLabel>{` ${locale}`}</ToggleButtonLabel>
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
}
