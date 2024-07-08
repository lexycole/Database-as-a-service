import {
  BACKGROUND_COLOR,
  BACKGROUND_COLOR_DARK,
  PRIMARY_COLOR,
  PRIMARY_TEXT_COLOR,
  SECONDARY_SUB,
  SECONDARY_SUB_DARK,
} from '../../../../styles/BaseStyle';
import styled from 'styled-components';

export const RegistrationFormCardCard = styled.div<{ t: boolean }>`
  min-width: 300px;
  padding: -1rem 1rem 2rem;
  margin: 1.2rem auto;
  border-radius: 10px;
  background-color: ${(props) =>
    props.t ? BACKGROUND_COLOR : BACKGROUND_COLOR_DARK};
`;

export const RegistrationInfoCard = styled.div<{
  t: boolean;
  backgroundColor: string;
  headerBackground: string;
}>`
  width: 550px;
  min-width: 300px;
  text-align: left;
  margin: 1.4rem auto 1.4rem 1.4rem;
  border-radius: 10px;
  background-color: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : props.t
      ? SECONDARY_SUB
      : SECONDARY_SUB_DARK};

  @media (max-width: 1200px) {
    margin: 1.4rem auto;
  }

  .header {
    color: #fff;
    padding: 1rem;
    font-weight: 800;
    font-size: 1.2rem;
    background: ${(props) => `${props.headerBackground ?? PRIMARY_COLOR}`};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .content {
    padding-bottom: 0.5rem;
    color: ${PRIMARY_TEXT_COLOR};

    ul {
      list-style: none;
      padding: 1rem 2.2rem;
    }

    li {
      &:before {
        content: '\\2022';
        color: ${(props) => `${props.headerBackground ?? PRIMARY_COLOR}`};
        font-weight: bold;
        display: inline-block;
        width: 1em;
        margin-left: -1em;
      }
    }
  }
`;

export const FormOutlinedHelper = styled.div<{ outlined: boolean }>`
  flex: 1;
  width: 103%;
  display: flex;
  justify-content: flex-start;
  border-radius: ${(props) => (props.outlined ? `10px` : `0`)};
  padding: ${(props) => (props.outlined ? `5px 12px` : `1px 12px`)};
  border: ${(props) => (props.outlined ? `2px dashed #111` : `none`)};
`;

export const FieldExtendedAccount = styled.div`
  .MuiFormControlLabel-label {
    color: ${PRIMARY_TEXT_COLOR};
  }
  .MuiCheckbox-root {
    color: #0000008a;
  }
`;

export const RegistrationBackground = styled.div<{
  t: boolean;
  backgroundColor: string;
  outlined: boolean;
}>`
  padding: 30px;
  border-radius: 10px;
  border: ${(props) => (props.outlined ? `1px solid #fff` : `none`)};
  background-color: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : props.t
      ? SECONDARY_SUB
      : SECONDARY_SUB_DARK};
`;
