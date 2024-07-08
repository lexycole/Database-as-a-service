import * as React from 'react';
// import PropTypes from 'prop-types';
import '../../styles/global.css';
import { RecoilRoot } from 'recoil';
import Head from 'next/head';
import { Layout } from '../view/layout/Layout';
import NextNProgress from 'nextjs-progressbar';
import { NextRouter, useRouter } from 'next/router';
import { setLanguage } from '@/storage/LanguageStorage';
import LoadingScreen from '@/components/utils/LoadingScreen';
import OfflineStatus from '@/components/utils/OfflineStatus';
import { isInternetConnected } from '@/utils/checkOffline';
import TagManager from 'react-gtm-module';
import { isDevelopment } from '@/environment/Environment';

import { DefaultSeo } from 'next-seo';
import SEO from '../utils/seo/next-seo.config';

export interface IPageProps {
  data: [];
  route: string;
}

type ApplicationProps = {
  Component;
  router: NextRouter;
  pageProps: IPageProps;
};

export default function App(props: ApplicationProps) {
  const { Component, pageProps } = props;
  const { locale } = useRouter();
  const [initPageLoading, setInitPageLoading] = React.useState<any>(false);
  const [_, setRenderOnLangChange] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => {
      if (setInitPageLoading) {
        setInitPageLoading(true);
      }
    }, 500);

    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector(`#jss-server-side`);
    if (jssStyles) {
      jssStyles.remove();
    }

    if (!isDevelopment()) TagManager.initialize({ gtmId: 'GTM-TDGTSS8' });
  }, []);

  React.useEffect(() => {
    // add current lang to local storage
    if (locale) {
      setRenderOnLangChange(Math.random());
      setLanguage(locale);
    }
  }, [locale]);

  return (
    <RecoilRoot>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <DefaultSeo {...SEO} />

      {initPageLoading ? (
        <Layout {...pageProps}>
          <NextNProgress
            color="#FFF"
            startPosition={0.3}
            // stopDelayMs={300}
            height={2}
            showOnShallow
          />
          {!isInternetConnected() && <OfflineStatus />}
          <Component {...pageProps} />
        </Layout>
      ) : (
        <LoadingScreen />
      )}
    </RecoilRoot>
  );
}

// App.propTypes = {    // todo toto nevim jestli jeste potreba
//   Component: PropTypes.elementType.isRequired,
//   pageProps: PropTypes.object.isRequired,
// };
