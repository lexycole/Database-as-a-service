import {
  FONT_WEIGHT,
  PRIMARY_TEXT_COLOR,
  PRIMARY_TEXT_COLOR_DARK,
} from '@/../styles/BaseStyle';
import styled from 'styled-components';

export const ContactRow = styled.div<{ t: boolean }>`
  margin-top: 5px;
  flex: 0 3 400px;
  text-align: left;

  .content {
    display: block;

    .content-text {
      font-size: 1.1rem;
      margin-bottom: 15px;
      font-weight: ${FONT_WEIGHT};
      color: ${({ t }) => (t ? PRIMARY_TEXT_COLOR : PRIMARY_TEXT_COLOR_DARK)};
    }
  }
  svg {
    margin-right: 10px;
  }
`;
