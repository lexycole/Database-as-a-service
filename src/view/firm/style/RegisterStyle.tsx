/* eslint-disable */
'use strict';

import styled from 'styled-components';
import {
  BACKGROUND_COLOR,
  BACKGROUND_COLOR_DARK,
  CONTAINER_PADDING_LEFT,
  FONT_SIZE,
  TEXT_COLOR,
  TEXT_COLOR_DARK,
} from '../../../../styles/BaseStyle';

export const BankAccountRow = styled.tr<{ t: boolean }>`
  color: ${({ t }) => (t ? TEXT_COLOR : TEXT_COLOR_DARK)};

  font-size: 16px;

  td.MuiTableCell-root {
    padding: 10px 0;
    :first-child {
      padding-left: ${CONTAINER_PADDING_LEFT};
    }

    border-bottom: none;
    font-size: ${FONT_SIZE};
  }
`;

export const StatutorySpacer = styled.div<{ t: boolean }>`
  display: flex;
  flex: 0 100%;
  height: 30px;
  background-color: ${BACKGROUND_COLOR};
  background-color: ${({ t }) =>
    t ? BACKGROUND_COLOR : BACKGROUND_COLOR_DARK};
`;
