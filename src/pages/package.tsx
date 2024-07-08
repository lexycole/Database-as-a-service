import * as React from 'react';
import { NextSeo } from 'next-seo';
import { PackageWrapper } from '../view/package/PackageWrapper';
import getLang from '@/lang/Lang';

export function Package() {
  return (
    <>
      <NextSeo
        title={getLang('pageSEO', 'packages').title}
        description={getLang('pageSEO', 'packages').description}
      />
      <PackageWrapper />
    </>
  );
}
export default Package;
