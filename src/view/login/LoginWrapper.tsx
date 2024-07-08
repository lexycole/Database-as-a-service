import * as React from 'react';
import Link from 'next/link';
import getLang from '../../lang/Lang';
import { LoginForm } from '../../components/form/LoginForm';
import { getRegistrationUrl } from '../../components/link/RegistrationLink';
import { WebLinkStyle } from '../../components/link/WebLink';
import { getLostPasswordUrl } from '../../components/link/LostPasswordLink';
import { ContentWrapper } from '../ContentWrapper';
import { LoginLink } from './style/LoginStyle';
import { appTheme } from '@/storage/ThemeAtom';
import { useRecoilState } from 'recoil';

export function LoginWrapper() {
  const [theme] = useRecoilState(appTheme);

  return (
    <ContentWrapper title={getLang(`login`, `title`)}>
      <p>{getLang(`login`, `loginInfo`)}</p>
      <LoginForm />
      <LoginLink>
        <Link href={getRegistrationUrl()} passHref>
          <WebLinkStyle theme={theme}>
            {getLang(`registration`, `registration`)}
          </WebLinkStyle>
        </Link>
        |
        <Link href={getLostPasswordUrl()} passHref>
          <WebLinkStyle theme={theme}>
            {getLang(`lostPassword`, `title`)}
          </WebLinkStyle>
        </Link>
      </LoginLink>
    </ContentWrapper>
  );
}
