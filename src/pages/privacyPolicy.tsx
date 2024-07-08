import getLang from '@/lang/Lang';
import * as React from 'react';
import { NextSeo } from 'next-seo';
import { PrivacyPolicyWrapper } from '../view/footer/PrivacyPolicyWrapper';

export default function PrivacyPolicy() {
  return (
    <>
      <NextSeo
        title={getLang('pageSEO', 'privacyPolicy').title}
        description={getLang('pageSEO', 'privacyPolicy').description}
      />
      <PrivacyPolicyWrapper />
    </>
  );
}
