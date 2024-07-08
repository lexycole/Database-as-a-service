import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { appTheme } from '@/storage/ThemeAtom';
import {
  BACKGROUND_COLOR,
  BACKGROUND_COLOR_DARK,
  BLUE_COLOR_HARD,
  BLUE_COLOR_HARD_DARK,
  BORDER_COLOR,
  BORDER_COLOR_DARK,
} from '@/../styles/BaseStyle';

export const RadioStyles = styled.div<{ t: boolean }>`
  display: inline-block;
  display: inline-block;
  margin: 5px;

  input[type='radio'] {
    display: none;
  }
  input[type='radio'] + label {
    padding: 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    border: ${(props) =>
      props.t ? `1px solid ${BORDER_COLOR}` : `1px solid ${BORDER_COLOR_DARK}`};
    background: ${(props) =>
      props.t ? BACKGROUND_COLOR : BACKGROUND_COLOR_DARK};
  }
  input[type='radio'] + label:hover {
    border: 1px solid red;
  }
  input[type='radio']:checked + label {
    border: ${(props) =>
      props.t
        ? `1px solid ${BLUE_COLOR_HARD}`
        : `1px solid ${BLUE_COLOR_HARD_DARK}`};
    color: WHITE;
    background: ${(props) =>
      props.t ? BLUE_COLOR_HARD : BLUE_COLOR_HARD_DARK};
  }
`;

interface Props {
  value: string;
  name: string;
  label: any;
  defaultChecked?: boolean;
  onChange?: any;
}

function RadioButton({ name, label, value, defaultChecked, onChange }: Props) {
  const [theme] = useRecoilState(appTheme);

  return (
    <RadioStyles t={theme}>
      <input
        type="radio"
        id={value}
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        onChange={onChange}
      />
      <label htmlFor={value}>{label}</label>
    </RadioStyles>
  );
}

export default RadioButton;
