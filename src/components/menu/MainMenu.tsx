import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from 'next/link';
import { Hidden } from '@material-ui/core';
import styled from 'styled-components';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import getLang from '../../lang/Lang';
import { AccountBlock } from '../account/AccountBlock';
import {
  NavigationHome,
  NavigationItems,
  NavigationItemType,
} from '../navigation/NavigationProps';
import { NavBarItems, NavWrapper } from '../../view/menu/style/MenuStyle';
import DrawerMenu from './DrawerMenu';
import { useRouter } from 'next/router';

import SettingMenu from './SettingMenu';
import { LocaleSelect } from '../locale/LocaleSelect';
import {
  PRIMARY_COLOR,
  TEXT_COLOR_DARK_SECONDARY,
} from '@/../styles/BaseStyle';

const AppLogoImage = styled.img`
  height: 45px;
  cursor: pointer;
`;

export const MenuItems = styled.h2<{ fontMedium: boolean; isActive: boolean }>`
  margin: 1rem;
  font-size: 1.1rem;
  cursor: pointer;
  font-weight: ${({ fontMedium }) => (fontMedium ? 400 : 700)};
  color: ${({ isActive }) => (isActive ? '#000' : '#fff')};
  position: relative;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s all;
  text-transform: uppercase;

  &:hover {
    color: ${TEXT_COLOR_DARK_SECONDARY};
    text-shadow: 0px 0px 2px rgba(255, 255, 255, 0.2);
  }

  /* &:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    border-radius: 5px;
    height: 1px;
    bottom: -2px;
    left: 0;
    background: currentcolor;
    transform-origin: bottom right;
    transition: transform 0.15s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  } */

  .icon {
    // width: 35px;
    // height: 35px;
    box-sizing: border-box;
    background: ${PRIMARY_COLOR};
    padding: 10px;
    border-radius: 50%;
  }

  .icon-label {
    margin-left: 10px;
    text-transform: uppercase;
  }
`;

function MenuItemsContainer() {
  const router = useRouter();

  return (
    <NavBarItems>
      {NavigationItems.map((item: NavigationItemType, key: number) => (
        <Link key={key} href={item.url} passHref>
          <a
            style={{ textDecoration: 'none' }}
            target={item.newWindow ? `_blank` : ``}
          >
            <MenuItems isActive={item.url === router.pathname}>
              {getLang(`menu`, item.key)}
            </MenuItems>
          </a>
        </Link>
      ))}
    </NavBarItems>
  );
}

function ElevationScroll(props: any) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 1 : 0,
  });
}

export function MainMenu(props: any) {
  const router = useRouter();

  const homePage =
    router.route === `/` || router.route === `/${NavigationHome}`;

  return (
    <NavWrapper>
      <ElevationScroll {...props}>
        <AppBar
          position="fixed"
          color="secondary"
          elevation={0}
          style={{ zIndex: 300 }}
        >
          <Toolbar>
            <DrawerMenu />
            <Hidden mdDown>
              <MenuItemsContainer />
            </Hidden>

            {!homePage ? (
              <Link href="/">
                <AppLogoImage
                  height={45}
                  style={{ flexGrow: 1 }}
                  width={120}
                  src="/img/logo/logo-expanzo.svg"
                  alt="expanzo-logo"
                />
              </Link>
            ) : (
              <div style={{ flexGrow: 1 }} />
            )}
            <LocaleSelect light />
            <Hidden mdDown>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginLeft: '1rem',
                }}
              >
                <AccountBlock />
                <div>
                  <SettingMenu />
                </div>
              </div>
            </Hidden>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </NavWrapper>
  );
}
