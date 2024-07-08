import * as React from 'react';
import getLang from '@/lang/Lang';
import { NextSeo } from 'next-seo';
import { LatestPhoneWrapper } from '../view/topSearch/LatestPhoneWrapper';

function Phones() {
  return (
    <>
      <NextSeo
        title={getLang('pageSEO', 'phones').title}
        description={getLang('pageSEO', 'phones').description}
      />
      <LatestPhoneWrapper />
    </>
  );
}

export default Phones;
