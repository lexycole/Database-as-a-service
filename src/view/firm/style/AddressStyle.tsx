/* eslint-disable */
'use strict';

import styled from 'styled-components';
import {
  CONTAINER_PADDING_LEFT,
  FONT_SIZE,
  PRIMARY_ROW,
  PRIMARY_ROW_DARK,
  TEXT_COLOR,
  TEXT_COLOR_DARK,
} from '../../../../styles/BaseStyle';

export const AddressRow = styled.tr<{ register: boolean; t: boolean }>`
  color: ${({ t }) => (t ? TEXT_COLOR : TEXT_COLOR_DARK)};
  background: ${(props) =>
    props.register ? (props.t ? PRIMARY_ROW : PRIMARY_ROW_DARK) : 'inherit'};

  td.MuiTableCell-root {
    padding: ${(props) => (props.register ? '15px' : '10px')} 0;
    :first-child {
      padding-left: ${CONTAINER_PADDING_LEFT};
    }

    :last-child {
      width: 120px;
    }

    border-bottom: none;
    font-size: ${FONT_SIZE};
  }
`;
