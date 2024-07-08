import * as React from 'react';
import { NextSeo } from 'next-seo';
import getLang from '@/lang/Lang';
import { ChangePasswordWrapper } from '@/view/passwordChange/ChangePasswordWrapper';
import { ServerProps } from '@/pages/newPassword/[newPassToken]';
import { GetServerSideProps } from 'next';

// noinspection JSUnusedGlobalSymbols
export const getServerSideProps: GetServerSideProps<ServerProps> = async (
  context,
) => ({ props: { host: context.req.headers.host || null } });

export default function ChangePassword(props: ServerProps) {
  return (
    <>
      <NextSeo
        title={getLang('pageSEO', 'changePassword').title}
        description={getLang('pageSEO', 'changePassword').description}
      />
      <ChangePasswordWrapper host={props.host} />
    </>
  );
}
