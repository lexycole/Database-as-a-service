import * as React from 'react';
import { NextSeo } from 'next-seo';
import { NextPage } from 'next';
import {
  LostPasswordProps,
  LostPasswordWrapper,
} from '@/view/passwordChange/LostPasswordWrapper';
import getLang from '@/lang/Lang';

import type { GetServerSideProps } from 'next';

// noinspection JSUnusedGlobalSymbols
export const getServerSideProps: GetServerSideProps<LostPasswordProps> = async (
  context,
) => ({ props: { host: context.req.headers.host || null } });

const LostPassword: NextPage<LostPasswordProps> = (
  props: LostPasswordProps,
) => (
  <>
    <NextSeo
      title={getLang('pageSEO', 'lostPassword').title}
      description={getLang('pageSEO', 'lostPassword').description}
    />
    <LostPasswordWrapper {...props} />
  </>
);

export default LostPassword;
