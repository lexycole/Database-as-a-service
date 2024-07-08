import * as React from 'react';
import { NextSeo } from 'next-seo';
import RequiresAuth from '@/components/Auth/RequiresAuth';
import { AccountWrapper } from '../view/account/AccountWrapper';
import getLang from '@/lang/Lang';

export function Account() {
  return (
    <RequiresAuth>
      <NextSeo
        title={getLang('pageSEO', 'account').title}
        description={getLang('pageSEO', 'account').description}
      />
      <AccountWrapper />
    </RequiresAuth>
  );
}

export default Account;
