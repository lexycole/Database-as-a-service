import * as React from 'react';
import Link from 'next/link';
import { Button, Container } from '@material-ui/core';
import { isDevelopment } from '../../environment/Environment';
import { LogoBlock } from '../home/LogoBlock';
import {
  ArticleContainer,
  FooterContainer,
  FooterLogo,
  FooterNav,
} from './style/FooterStyle';
import {
  FooterNavItems,
  NavigationItemType,
} from '../../components/navigation/NavigationProps';
import getLang from '../../lang/Lang';
import { PrivacyPolicyLink, TermsLink } from '../../components/link/FooterLink';
import { appTheme } from '@/storage/ThemeAtom';
import { useRecoilState } from 'recoil';

function FooterNavBlock() {
  return (
    <FooterNav>
      {FooterNavItems.map((item: NavigationItemType, key: number) => (
        <Link key={key} href={item.url} passHref>
          <Button
            style={{
              fontSize: '1.2rem',
            }}
          >
            {getLang(`footer`, item.key)}
          </Button>
        </Link>
      ))}
    </FooterNav>
  );
}

export function Footer() {
  const [theme] = useRecoilState(appTheme);

  return (
    <>
      <FooterContainer t={theme}>
        <Container>
          <div className="container">
            <FooterLogo>
              <LogoBlock color={theme ? '0f0e0b' : '#fff'} />
            </FooterLogo>
            <FooterNavBlock />
            <FooterLogo />
          </div>
          <div>
            <ArticleContainer>
              <TermsLink />
              <span style={{ margin: '0 1rem' }}>|</span>
              <PrivacyPolicyLink />
            </ArticleContainer>
          </div>
        </Container>
      </FooterContainer>

      {isDevelopment() && (
        <>
          {/* <hr/> */}
          {/* <WebLink href="test">test</WebLink> */}
        </>
      )}
    </>
  );
}
