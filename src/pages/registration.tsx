import * as React from 'react';
import getLang from '@/lang/Lang';
import { NextSeo } from 'next-seo';
import RequiresVisitor from '@/components/Auth/RequiresVisitor';
import { RegistrationWrapper } from '../view/registration/RegistrationWrapper';

export default function Registration() {
  return (
    <RequiresVisitor>
      <NextSeo
        title={getLang('pageSEO', 'registration').title}
        description={getLang('pageSEO', 'registration').description}
      />
      <RegistrationWrapper />
    </RequiresVisitor>
  );
}
