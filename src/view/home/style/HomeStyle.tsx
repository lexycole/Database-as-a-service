/* eslint-disable */
'use strict';

import styled from 'styled-components';
import {
  BORDER_RADIUS,
  PRIMARY_TEXT_COLOR,
  TEXT_COLOR,
} from '../../../../styles/BaseStyle';

export const HomeTitle = styled.h2`
  text-align: center;
  font-weight: 700;F
  width: 100%;
  font-size: 2rem;
  padding-top: 2rem;
`;

export const FirmCountContainer = styled.div<{ t: boolean | string }>`
  border-radius: ${BORDER_RADIUS};
  position: fixed;
  top: 90px;
  right: 23px;
  z-index: 200;
  margin-top: -10px;
  transition: all 0.3s;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  background: ${(prop: any) =>
    prop.t ? 'rgba(255, 255, 255, 0.8)' : 'rgba(36, 36, 36, 0.8)'};

  svg {
    margin-bottom: -5px;
    color: ${TEXT_COLOR};
  }

  .MuiButton-root {
    margin-top: -10px;
    margin-right: 5px;
    border-radius: 50%;
    padding: 0 !important;
    margin: 0 !important;
    min-width: 50px;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    .MuiButton-startIcon {
      margin: 4px;
    }

    svg {
      color: ${PRIMARY_TEXT_COLOR};
    }
  }
`;

export const FirmContainerText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    button {
      background-color: #00876d;
    }
  }
`;

export const CountSpan = styled.span`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  font-weight: bold;
  font-size: 16px;
`;

export const CategoryBlock = styled.div<{ theme: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 2.5rem 2rem 1rem;
  width: 200px;
  height: 170px;
  margin-bottom: 2rem;
  border-radius: ${BORDER_RADIUS};
  transition: all 0.3s ease-in-out;
  box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.14);
  background-color: ${(props) => (props.theme === true ? '#FFF' : '#181818')};

  &:hover {
    box-shadow: 5px 17px 20px 4px rgba(0, 0, 0, 0.24);
  }

  a {
    text-decoration: none;
    color: ${(props) => (props.theme == true ? TEXT_COLOR : '#FFF')};
  }

  img {
    max-width: 60px;
  }

  h2 {
    text-align: center;
    font-size: 1.1rem;
  }
`;
