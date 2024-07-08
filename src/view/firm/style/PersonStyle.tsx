/* eslint-disable */
'use strict';

import styled from 'styled-components';
import {
  BACKGROUND_COLOR,
  BACKGROUND_COLOR_DARK,
  DETAIL_ROW_PADDING,
  SECONDARY_SUB,
  SECONDARY_SUB_DARK,
} from '../../../../styles/BaseStyle';

export const PersonRow = styled.div<{ t: boolean; styleOdd: boolean }>`
  display: flex;
  flex: 0 1 100%;
  padding: ${DETAIL_ROW_PADDING};
  background: ${({ t, styleOdd }) =>
    styleOdd
      ? t
        ? SECONDARY_SUB
        : SECONDARY_SUB_DARK
      : t
      ? BACKGROUND_COLOR
      : BACKGROUND_COLOR_DARK};

  div {
    text-align: left;
    flex: 30%;
  }
  a {
    font-weight: 500;
  }
`;
