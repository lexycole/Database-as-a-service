import React from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { MainSearch } from './MainSearch';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import { appTheme } from '@/storage/ThemeAtom';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BACKGROUND_COLOR, BACKGROUND_COLOR_DARK } from '@/../styles/BaseStyle';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { NavigationHome } from '../navigation/NavigationProps';
import { MainSearchContainer } from '@/view/search/style/SearchStyle';
import { useWindowScrollPositions } from '@/hooks/useWindowScrollPositions';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export function MainSearchWrapper() {
  const [theme] = useRecoilState(appTheme);
  const router = useRouter();
  const { scrollY } = useWindowScrollPositions();

  const homePage =
    router.route === `/` || router.route === `/${NavigationHome}`;

  return (
    <>
      <CssBaseline />
      {homePage !== false ? (
        <MainSearchContainer t={theme}>
          {/* {!(homePage && scrollY < 370) && ( */}
          {/* <Collapse in={!(scrollY < 360)} collapsedSize={0} timeout={40000}> */}
          {/* <Collapse in={!(scrollY < 360)} > */}
          <Slide
            direction="down"
            in={!(scrollY < 360)}
            mountOnEnter
            unmountOnExit
          >
            {/* <HideOnScroll> */}
            <AppBar
              color="transparent"
              elevation={0}
              style={{
                marginTop: 60,
                padding: 20,
                zIndex: 210,
                boxShadow: '0 1px 10px rgba(0,0,0,0.12)',
                background: `${
                  theme ? BACKGROUND_COLOR : BACKGROUND_COLOR_DARK
                }`,
              }}
            >
              <Toolbar>
                <Container>
                  <MainSearch searchOnTop={!(scrollY < 360)} />
                </Container>
              </Toolbar>
            </AppBar>
            {/* </HideOnScroll> */}
          </Slide>
          {/* )} */}
        </MainSearchContainer>
      ) : (
        <HideOnScroll>
          <AppBar
            color="transparent"
            elevation={0}
            style={{
              marginTop: 55,
              paddingTop: 28,
              paddingBottom: 15,
              zIndex: 200,
              background: `${theme ? BACKGROUND_COLOR : BACKGROUND_COLOR_DARK}`,
            }}
          >
            <Toolbar>
              <Container>
                <MainSearch searchOnTop />
              </Container>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      )}
      {homePage === false && <div style={{ marginBottom: '160px' }} />}
    </>
  );
}
