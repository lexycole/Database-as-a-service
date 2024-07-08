/* eslint-disable */
'use strict';

import styled from 'styled-components';
import {
  BORDER_COLOR,
  BORDER_COLOR_DARK,
  CARD_BACKGROUND,
  CARD_BACKGROUND_DARK,
  LIGHT_COLOR,
  TEXT_COLOR,
  TEXT_COLOR_DARK,
} from '../../../../styles/BaseStyle';

export const AccountBorderedCard = styled.div<{
  t: boolean;
}>`
  margin: 3rem 0;
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid ${(props) => (props.t ? BORDER_COLOR : BORDER_COLOR_DARK)};
`;

export const AccountInfoCard = styled.div<{
  t: boolean;
  h: number;
  titleSize: string;
  padding: string;
  titlePadding: string;
  headerBackground: string;
  backgroundColor: string;
}>`
  min-width: 300px;
  text-align: left;
  border-radius: 10px;
  min-height: ${(props) => `${props.h}px`};
  padding: ${(props) => (props.padding ? props.padding : '0')};
  background-color: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : props.t
      ? CARD_BACKGROUND
      : CARD_BACKGROUND_DARK};

  @media (max-width: 1200px) {
    margin: 1.4rem auto;
  }

  .header {
    font-weight: 800;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: ${(props) => (props.titlePadding ? props.titlePadding : '1rem')};
    font-size: ${(props) => (props.titleSize ? props.titleSize : '1.2rem')};
    background: ${(props) =>
      `${
        props.headerBackground ? `${props.headerBackground}` : `transparent`
      }`};
    color: ${(props) =>
      props.headerBackground
        ? LIGHT_COLOR
        : props.t
        ? TEXT_COLOR
        : TEXT_COLOR_DARK};
  }

  .content {
    padding: 1.5rem;
  }

  .detail {
    margin: 3px;
  }
  .icon-text {
    display: flex;
    align-items: center;
  }
`;

export const AccountManagement = styled.div`
  a {
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
`;
