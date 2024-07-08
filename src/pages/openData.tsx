import * as React from 'react';
import { NextSeo } from 'next-seo';
import { OpenDataWrapper } from '@/view/service/OpenDataWrapper';
import getLang from '@/lang/Lang';

export default function FirmDatabase() {
  return (
    <>
      <NextSeo
        title={getLang('pageSEO', 'openData').title}
        description={getLang('pageSEO', 'openData').description}
      />
      <OpenDataWrapper />
    </>
  );
}
