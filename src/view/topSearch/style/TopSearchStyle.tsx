/* eslint-disable */
'use strict';

import styled from 'styled-components';
import {
  BORDER_COLOR,
  BORDER_COLOR_DARK,
  CONTAINER_BACKGROUND,
  CONTAINER_BACKGROUND_DARK,
  FONT_WEIGHT,
  LIGHT_LINK_COLOR,
  LIGHT_LINK_COLOR_DARK,
  TWO_COLUMNS_MIN_WIDTH,
  TWO_COLUMNS_WIDTH,
} from '../../../../styles/BaseStyle';
import { CSSProperties } from 'react';

export const PHONE_ROW_STYLE: CSSProperties = {
  padding: '7px 16px 0 16px',
};

export const PHONE_ROW_RATING_STYLE: CSSProperties = {
  width: '70px',
};

export const TopSearchContainer = styled.div<{ t: boolean }>`
  display: flex;
  flex-wrap: wrap;

  .MuiTableContainer-root {
    margin: 30px 30px;
    flex: 1 ${TWO_COLUMNS_WIDTH};
    min-width: ${TWO_COLUMNS_MIN_WIDTH};
   
   .MuiTableCell-root {
    font-size: 16px;
    font-weight: 500;

    a {
      font-weight: ${FONT_WEIGHT}
      color: ${(props) => (props.t ? LIGHT_LINK_COLOR : LIGHT_LINK_COLOR_DARK)};
   }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  div:first-child {
    text-align: right;
  }

  div:last-child {
    text-align: left;
  }

  div {
    flex: 1;

    .MuiButton-root {
      margin: 10px 30px;
    }
  }
`;

export const TelephoneDescription = styled.div<{ t: boolean }>`
  margin: auto;
  text-align: left;
  width: 95%;
  border-radius: 10px;
  margin-bottom: 1rem;
  padding: 1.3rem 2rem;
  border: 2px dashed ${(props) => (props.t ? BORDER_COLOR : BORDER_COLOR_DARK)};
  background: ${(props) =>
    props.t ? CONTAINER_BACKGROUND : CONTAINER_BACKGROUND_DARK};
`;
