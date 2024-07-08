import * as React from 'react';
import { MainMenu } from '../../components/menu/MainMenu';
import { Footer } from '../footer/Footer';
import { ScrollTop } from '../../components/scrollTop/ScrollTop';
import { CssBaseline, Fab, makeStyles } from '@material-ui/core';
import { ArrowUpward } from '@material-ui/icons';
import { LocaleWrapper } from '../../components/locale/LocaleWrapper';
import { ContentContainer } from '../../../styles/Style';
import { MainSearchWrapper } from '../../components/search/MainSearchWrapper';

const useStyles = makeStyles({
  root: {
    width: 45,
    height: 45,
    marginTop: -20,
    color: '#fff',
    borderRadius: 10,
    boxShadow: 'none',
  },
});

export function Layout(props: any) {
  const classes = useStyles();

  return (
    <LocaleWrapper>
      <div
        style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
      >
        <div style={{ flexGrow: 1 }}>
          <CssBaseline />
          <MainMenu />
          {/* <div id="content-start" /> */}
          <MainSearchWrapper />
          <ContentContainer>{props.children}</ContentContainer>
          {/* <SpeedDials/> */}
          <ScrollTop>
            <Fab
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              size="small"
              color="secondary"
              className={classes.root}
              aria-label="scroll back to top"
            >
              <ArrowUpward />
            </Fab>
          </ScrollTop>
        </div>
        <Footer />
      </div>
    </LocaleWrapper>
  );
}
