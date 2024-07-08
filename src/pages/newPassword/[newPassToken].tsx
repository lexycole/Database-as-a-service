import * as React from 'react';
import { useRouter } from 'next/router';
import { NewPasswordWrapper } from '@/view/passwordChange/NewPasswordWrapper';
import { GetServerSideProps } from 'next';

export type ServerProps = { host: string | null };

// noinspection JSUnusedGlobalSymbols
export const getServerSideProps: GetServerSideProps<ServerProps> = async (
  context,
) => ({ props: { host: context.req.headers.host || null } });

function NewPassword(props: ServerProps) {
  const router = useRouter();
  const { newPassToken } = router.query;

  let token: string | null = null;

  if (newPassToken !== undefined) {
    token = newPassToken.toString();
  }

  return <NewPasswordWrapper token={token} host={props.host} />;
}

export default NewPassword;
