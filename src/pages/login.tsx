import * as React from 'react';
import { NextSeo } from 'next-seo';
import { LoginWrapper } from '../view/login/LoginWrapper';
import RequiresVisitor from '@/components/Auth/RequiresVisitor';
import getLang from '@/lang/Lang';

export function Login() {
  return (
    <RequiresVisitor>
      <NextSeo
        title={getLang('pageSEO', 'login').title}
        description={getLang('pageSEO', 'login').description}
      />
      <LoginWrapper />
    </RequiresVisitor>
  );
}
export default Login;
