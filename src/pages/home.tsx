import * as React from 'react';
import { NextSeo } from 'next-seo';
import getLang from '@/lang/Lang';
import { HomeWrapper } from '../view/home/HomeWrapper';

export default function Home() {
  return (
    <>
      <NextSeo
        title={getLang('pageSEO', 'home').title}
        description={getLang('pageSEO', 'home').description}
      />
      <HomeWrapper />
    </>
  );
}
