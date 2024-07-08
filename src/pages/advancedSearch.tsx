import * as React from 'react';
import { NextSeo } from 'next-seo';
import getLang from '@/lang/Lang';
import { AdvancedSearchWrapper } from '../view/search/AdvancedSearchWrapper';

type advancedSearchProps = {};

export function AdvancedSearch(props: advancedSearchProps) {
  return (
    <>
      <NextSeo
        title={getLang('pageSEO', 'advancedSearch').title}
        description={getLang('pageSEO', 'advancedSearch').description}
      />
      <AdvancedSearchWrapper />
    </>
  );
}

export default AdvancedSearch;
