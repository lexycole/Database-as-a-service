import styled from 'styled-components';
import {
  FONT_SIZE,
  FONT_WEIGHT,
  PRIMARY_ROW,
  PRIMARY_ROW_DARK,
} from '../../../../styles/BaseStyle';

export const ShareRowsContainer = styled.div`
  width: 100%;
  .MuiTableCell-root {
    font-size: ${FONT_SIZE};
    font-weight: 500;

    &.value {
      font-weight: bold;
    }

    &.person-name {
      font-weight: ${FONT_WEIGHT};
    }
  }
`;

export const ShareRow = styled.tr<{
  borderBottom?: boolean;
  t: boolean;
}>`
  td {
    border-bottom: ${(props) =>
      props.borderBottom ? `1px solid #e0e0e0e ` : `none`};
  }
`;

export const ShareBasicRow = styled.tr<{ t: boolean }>`
  border-top: solid 1px ${(props) => (props.t ? PRIMARY_ROW : PRIMARY_ROW_DARK)};
`;

export const ShareStocksRow = styled.tr``;

export const CommonShareRow = styled.tr<{ t: boolean }>`
  td {
    border-top: solid 1px
      ${(props) => (props.t ? PRIMARY_ROW : PRIMARY_ROW_DARK)};
    border-bottom: none;
  }
`;
