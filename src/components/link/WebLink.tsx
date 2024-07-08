import * as React from 'react';
import { ReactNode } from 'react';
import Link from 'next/link';
import webalize from 'webalize';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { appTheme } from '@/storage/ThemeAtom';
import {
  LIGHT_LINK_COLOR,
  LIGHT_LINK_COLOR_DARK,
  PRIMARY_TEXT_COLOR,
  PRIMARY_TEXT_COLOR_DARK,
} from '@/../styles/BaseStyle';

export const UrlDelimiter = `-`;

type LocaleLinkProps = {
  href: string;
  title?: string;
  t?: boolean;
  lightColor?: boolean;
  children: ReactNode;
  noWrap?: boolean;
};

export const WebLinkStyle = styled.a<{ theme: boolean }>`
  padding: 0;
  margin: 0;
  width: 100%;
  font-size: 16px;
  /* border: 1px solid red; */
  /* background: red; */
  color: ${({ theme }) => (theme ? 'black' : 'white')};
  text-decoration: none;
`;

export const LinkStyled = styled.a`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export function rewriteUrl(url: string): string {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
  return webalize.webalize(url, true);
}

export function WebLink(props: LocaleLinkProps) {
  const [theme] = useRecoilState(appTheme);

  return (
    <Link
      href={
        useRouter().basePath +
        (props.href.charAt(0) === `/` ? `` : `/`) +
        props.href
      }
      passHref
    >
      <a
        className="webLink"
        style={{
          width: '100%',
          margin: 0,
          padding: 0,
          color: props.lightColor
            ? theme
              ? LIGHT_LINK_COLOR
              : LIGHT_LINK_COLOR_DARK
            : theme
            ? PRIMARY_TEXT_COLOR
            : PRIMARY_TEXT_COLOR_DARK,
          whiteSpace: props.noWrap ? 'nowrap' : 'normal',
        }}
        title={props.title}
      >
        {props.children}
      </a>
    </Link>
  );
}
