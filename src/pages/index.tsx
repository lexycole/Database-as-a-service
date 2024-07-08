import * as React from 'react';
import { NextSeo } from 'next-seo';
import Home from './home';
import getLang from '@/lang/Lang';

export default function Index() {
  return (
    <>
      <NextSeo
        title={getLang('pageSEO', 'home').title}
        description={getLang('pageSEO', 'home').description}
      />
      <Home />
    </>
  );
}
