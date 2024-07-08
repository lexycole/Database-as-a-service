import * as React from 'react';
import { NextSeo } from 'next-seo';
import getLang from '@/lang/Lang';
import { AccountDataChangeWrapper } from '@/view/account/AccountDataChangeWrapper';

export default function AccountDataChange() {
  return (
    <>
      <NextSeo
        title={getLang('pageSEO', 'accountDataChange').title}
        description={getLang('pageSEO', 'accountDataChange').description}
      />
      <AccountDataChangeWrapper />
    </>
  );
}
