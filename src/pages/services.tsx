import * as React from 'react';
import { NextSeo } from 'next-seo';
import { ServicesWrapper } from '../view/service/ServicesWrapper';
import getLang from '@/lang/Lang';

export default function Services() {
  return (
    <>
      <NextSeo
        title={getLang('pageSEO', 'services').title}
        description={getLang('pageSEO', 'services_description').description}
      />
      <ServicesWrapper />
    </>
  );
}
