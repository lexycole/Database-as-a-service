/* eslint-disable */

import styled from 'styled-components';
import { DETAIL_ROW_PADDING } from '../../../../styles/BaseStyle';

export const EvolutionRow = styled.tr`
  padding: ${DETAIL_ROW_PADDING};

  .MuiTableCell-body:first-child {
    font-weight: 700;
  }

  div {
    text-align: left;
  }
`;

export const EvolutionTableContainer = styled.div`
  tr.MuiTableRow-head {
    borderbottom: none;
    border: none;

    th.MuiTableCell-head {
      width: 33%;
      font-size: 1.2rem;
      font-weight: 700;
      border: none;
    }
  }
`;
