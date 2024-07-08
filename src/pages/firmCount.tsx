import * as React from 'react';
import { NextSeo } from 'next-seo';
import { FirmCountWrapper } from '../view/firmCount/FirmCountWrapper';
import { ApiMethods } from '../data/loader/ApiMethods';
import { FirmCountProps } from '../view/firmCount/FirmCountProps';
import { getApiUrl } from '../environment/Environment';
import { FirmCountryCountResult } from '../data/firm/FirmCountryCountLoader';
import getLang from '@/lang/Lang';

export async function getStaticProps() {
  const response = await fetch(getApiUrl() + ApiMethods.firmCountryCount);
  const apiResult: FirmCountryCountResult = await response.json();

  if (!apiResult) {
    return {
      notFound: true,
    };
  }

  return {
    props: apiResult,
  };
}

export default function FirmCount(props: FirmCountProps) {
  return (
    <>
      <NextSeo
        title={getLang('pageSEO', 'firmCount').title}
        description={getLang('pageSEO', 'firmCount').description}
      />
      <FirmCountWrapper {...props} />
    </>
  );
}
