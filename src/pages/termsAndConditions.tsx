import * as React from 'react';
import { NextSeo } from 'next-seo';
import { TermsWrapper } from '../view/footer/TermsWrapper';
import getLang from '@/lang/Lang';

export default function TermsAndConditions() {
  return (
    <>
      <NextSeo
        title={getLang('pageSEO', 'termsAndConditions').title}
        description={getLang('pageSEO', 'termsAndConditions').description}
      />
      <TermsWrapper />
    </>
  );
}
