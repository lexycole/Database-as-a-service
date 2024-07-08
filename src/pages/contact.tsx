import * as React from 'react';
import { NextSeo } from 'next-seo';
import getLang from '@/lang/Lang';
import { ContactWrapper } from '../view/contact/ContactWrapper';

export default function Contact() {
  return (
    <>
      <NextSeo
        title={getLang('pageSEO', 'contact').title}
        description={getLang('pageSEO', 'contact').description}
      />
      <ContactWrapper />
    </>
  );
}
