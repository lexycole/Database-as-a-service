import * as React from 'react';
import { NextSeo } from 'next-seo';
import getLang from '@/lang/Lang';
import { EshopWrapper } from '../view/eshop/EshopWrapper';

export default function Eshop() {
  return (
    <>
      <NextSeo
        title={getLang('pageSEO', 'eshop').title}
        description={getLang('pageSEO', 'eshop').description}
      />
      <EshopWrapper />
    </>
  );
}
