import * as React from 'react';
import { getLink } from './LinkProps';
import getLang from '../../lang/Lang';
import { WebLink } from './WebLink';

export function getPrivacyPolicyUrl(): string {
  return getLink(getLang(`link`, `privacyPolicy`));
}

export function getTermsUrl(): string {
  return getLink(getLang(`link`, `termsAndConditions`));
}

export function PrivacyPolicyLink() {
  return (
    <WebLink href={getPrivacyPolicyUrl()}>
      {getLang(`footer`, `privacyPolicy`)}
    </WebLink>
  );
}

export function TermsLink() {
  return (
    <WebLink href={getTermsUrl()}>
      {getLang(`footer`, `termsAndConditions`)}
    </WebLink>
  );
}
