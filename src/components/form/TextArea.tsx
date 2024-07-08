import styled from 'styled-components';
import {
  TEXT_COLOR,
  TEXT_COLOR_DARK,
  LIGHT_COLOR,
  DARK_COLOR,
  BORDER_COLOR,
  BORDER_COLOR_DARK,
  TEXT_COLOR_SECONDARY,
  TEXT_COLOR_DARK_SECONDARY,
} from '@/../styles/BaseStyle';

export const TextArea = styled.textarea<{ t: boolean }>`
  flex: 1;
  padding: 1rem 1.2rem;
  color: ${({ t }) => (t ? TEXT_COLOR : TEXT_COLOR_DARK)};
  background: ${({ t }) => (t ? LIGHT_COLOR : DARK_COLOR)};
  font-weight: 400;
  font-size: 1.2rem;
  border: 1px solid ${({ t }) => (t ? BORDER_COLOR : BORDER_COLOR_DARK)};

  &::placeholder {
    color: ${({ t }) => (t ? TEXT_COLOR_SECONDARY : TEXT_COLOR_DARK_SECONDARY)};
    opacity: 0.9;
  }
`;
