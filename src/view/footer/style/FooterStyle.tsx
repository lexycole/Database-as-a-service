/* eslint-disable */
'use strict';

import styled from 'styled-components';
import {
  FOOTER_BACKGROUND,
  FOOTER_BACKGROUND_DARK,
  LINK_DECORATION,
  LINK_DECORATION_HOVER,
  TEXT_COLOR,
} from '../../../../styles/BaseStyle';

export const FooterContainer = styled.div<{ t: boolean }>`
  background-color: ${(props) =>
    props.t ? FOOTER_BACKGROUND : FOOTER_BACKGROUND_DARK};
  width: 100%;
  text-align: center;
  display: flex;
  padding: 50px 0;
  flex-wrap: wrap;

  .container {
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: space-between;
    padding: 50px 0;
    flex-wrap: wrap;
  }
`;

export const FooterLogo = styled.div`
  /* flex: 1 300px; */
`;

export const FooterNav = styled.div`
  margin-left: 'auto';
  flex: 0 500px;

  .MuiButton-root {
    font-weight: bold;
    /* color: ${TEXT_COLOR}; */
    margin: 0 20px;
  }

  margin: 20px 0;
  padding: 35px 0;
`;

export const ArticleContainer = styled.div`
  text-align: left;
  margin-top: 30px;

  a {
    font-size: 14px;
    text-decoration: ${LINK_DECORATION};
    /* color: ${TEXT_COLOR}; */

    &:hover {
      text-decoration: ${LINK_DECORATION_HOVER};
    }
  }
`;

export const ArticleContent = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  text-align: left;
`;
