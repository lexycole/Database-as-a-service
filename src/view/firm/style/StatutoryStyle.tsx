import styled from 'styled-components';
import {
  BACKGROUND_COLOR,
  BACKGROUND_COLOR_DARK,
  CONTAINER_ALIGN,
  DETAIL_ROW_PADDING,
} from '../../../../styles/BaseStyle';

export const StatutoryRow = styled.div<{ t: boolean; styleOdd: boolean }>`
  display: flex;
  flex: 0 1 100%;
  padding: ${DETAIL_ROW_PADDING};
  background: ${({ t, styleOdd }) =>
    !styleOdd ? (t ? BACKGROUND_COLOR : BACKGROUND_COLOR_DARK) : 'transparent'};

  div {
    text-align: ${CONTAINER_ALIGN};
    flex: 25%;
  }
  a {
    font-weight: 500;
  }
`;
