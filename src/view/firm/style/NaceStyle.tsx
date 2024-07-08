import {
  BACKGROUND_COLOR,
  BACKGROUND_COLOR_DARK,
  FONT_WEIGHT,
  PRIMARY_ROW,
  PRIMARY_ROW_DARK,
  SECONDARY_BACKGROUND_COLOR,
  SECONDARY_BACKGROUND_COLOR_DARK,
  TEXT_COLOR,
  TEXT_COLOR_DARK,
} from '@/../styles/BaseStyle';
import styled from 'styled-components';

export const NaceRow = styled.div<{
  t: boolean;
  isMain: boolean;
  odd: boolean;
}>`
  flex: 0 1 100%;
  background-color: ${({ odd, t, isMain }) =>
    isMain
      ? t
        ? PRIMARY_ROW
        : PRIMARY_ROW_DARK
      : odd
      ? t
        ? SECONDARY_BACKGROUND_COLOR
        : SECONDARY_BACKGROUND_COLOR_DARK
      : t
      ? BACKGROUND_COLOR
      : BACKGROUND_COLOR_DARK};
  color: ${(props) => (props.t ? TEXT_COLOR : TEXT_COLOR_DARK)};
  order: ${(props) => (props.isMain ? `1` : `2`)};
  padding: ${(props) => (props.isMain ? `10px 2rem` : `10px 2rem`)};
  text-align: left;

  .label {
    width: 90px;
    display: inline-block;
  }

  .value {
    font-weight: ${FONT_WEIGHT};
  }
`;
