import React, { useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Localization } from '@material-ui/core/locale';
import { useRouter } from 'next/router';
import moment from 'moment';
import { getUsedLang, Languages } from './LocaleProps';
import { getTheme } from '../theme/Theme';
import { appTheme, getCurrentTheme } from '@/storage/ThemeAtom';
import { useRecoilState } from 'recoil';
import 'moment/locale/cs';

type LocaleWrapperProps = {
  children: React.ReactNode;
};

export function LocaleWrapper(props: LocaleWrapperProps) {
  const router = useRouter();
  if (router.locale) {
    const routerLocale = router.locale;
    const locale =
      routerLocale in Languages
        ? Languages[routerLocale]
        : router.defaultLocale;
    const usedLang = getUsedLang(router);
    const currentLocalization = usedLang.get(locale);

    moment.locale(locale);

    const [theme, setTheme] = useRecoilState(appTheme);

    useEffect(() => {
      setTheme(getCurrentTheme());
    }, []);

    const renderApp = (locale: Localization) => (
      <ThemeProvider theme={getTheme(locale, theme)}>
        {props.children}
      </ThemeProvider>
    );

    if (currentLocalization) {
      return renderApp(currentLocalization);
    }
  }

  return <></>;
}
