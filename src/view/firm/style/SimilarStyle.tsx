/* eslint-disable */
'use strict';

import {
  BACKGROUND_COLOR,
  BACKGROUND_COLOR_DARK,
  BORDER_RADIUS,
  SECONDARY_SUB,
  SECONDARY_SUB_DARK,
} from '@/../styles/BaseStyle';
import styled from 'styled-components';

export const FirmSimilarContainer = styled.div`
  flex: 1 1;
  min-width: 300px;
  background: #fafafa;

  table {
    thead th {
      font-weight: bold;
    }

    tbody tr:nth-of-type(odd) {
      background-color: #fff;
    }
  }
`;

export const TableContainerStyled = styled.div<{
  t: boolean;
  rounded: boolean;
}>`
  .tableContainer {
    width: 100%;
    border: none;
    background-color: ${({ t }) => (t ? SECONDARY_SUB : SECONDARY_SUB_DARK)};
    /* border-bottom-left-radius: ${BORDER_RADIUS};
    border-bottom-right-radius: ${BORDER_RADIUS}; */
    border-radius:  ${BORDER_RADIUS};

    border-top-left-radius: ${({ rounded }) => (!rounded ? 0 : BORDER_RADIUS)};
    border-top-right-radius: ${({ rounded }) => (!rounded ? 0 : BORDER_RADIUS)};

    table {
    thead th {
      font-weight: bold;
      border: none;
    }

    tbody tr:nth-of-type(even) {
      border: none;
      background: ${({ t }) => (t ? BACKGROUND_COLOR : BACKGROUND_COLOR_DARK)};
    }

    tbody tr:last-child {
      border-bottom: none;
    }
  }
`;
