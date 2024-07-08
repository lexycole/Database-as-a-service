/* eslint-disable */
'use strict';

import {
  BORDER_COLOR,
  BORDER_COLOR_DARK,
  BORDER_RADIUS,
  CARD_BOX_BACKGROUND,
  CARD_BOX_BACKGROUND_DARK,
  CONTAINER_ALIGN,
  CONTAINER_PADDING,
  CONTAINER_PADDING_LEFT,
  FONT_SIZE,
  PRIMARY_COLOR,
  PRIMARY_COLOR_DARK,
  SECONDARY_BACKGROUND_COLOR,
  SECONDARY_BACKGROUND_COLOR_DARK,
  SECONDARY_SUB,
  SECONDARY_SUB_DARK,
  TEXT_COLOR,
  TEXT_COLOR_DARK,
} from '../../../styles/BaseStyle';
import styled from 'styled-components';

export const BoxTitle = styled.h2<{
  t: boolean;
  bg: { light: string; dark: string };
}>`
  display: flex;
  align-items: center;
  text-align: left;
  font-size: 1.8rem;
  font-weight: 700;
  margin-top: 30px;
  margin-bottom: 0;
  padding: 16px 20px;
  border-top-right-radius: ${BORDER_RADIUS};
  border-top-left-radius: ${BORDER_RADIUS};
  /* color: ${({ t }) => (t ? TEXT_COLOR : TEXT_COLOR_DARK)}; */
  color: ${TEXT_COLOR_DARK};
  background: ${({ bg, t }) =>
    bg ? (t ? bg.light : bg.dark) : t ? PRIMARY_COLOR : PRIMARY_COLOR_DARK};

  svg {
    font-size: 1.62rem;
    margin: 5px 20px 0 5px;
  }

  img {
    font-size: 1.62rem;
    margin: 5px 20px 0 5px;
  }
`;
export const BoxSubTitle = styled.h3<{
  t: boolean;
  noMargin: boolean;
  smallFont: boolean;
  noBorderRadius: boolean;
}>`
  text-align: left;
  color: ${({ t }) => (t ? TEXT_COLOR : TEXT_COLOR_DARK)};
  background: ${({ t }) =>
    t ? SECONDARY_BACKGROUND_COLOR : SECONDARY_BACKGROUND_COLOR_DARK};
  padding: 13px 15px;
  font-weight: 700;
  font-size: ${({ smallFont }) => (smallFont ? '1.5rem' : '1.6rem')};
  border-top-right-radius: ${({ noBorderRadius }) =>
    noBorderRadius ? 'none' : BORDER_RADIUS};
  border-top-left-radius: ${({ noBorderRadius }) =>
    noBorderRadius ? 'none' : BORDER_RADIUS};
  margin-top: ${({ noMargin }) => (noMargin ? '0' : '30px')};
  margin-bottom: 0;

  svg {
    margin: 5px 20px 0 5px;
  }
`;
export const BoxRows = styled.div<{
  t: boolean;
  noPadding: boolean;
  padding: boolean;
}>`
  display: flex;
  padding: ${({ noPadding, padding }) =>
    noPadding ? '0' : padding ? '1rem' : '1rem 0'};
  flex-wrap: wrap;
  margin-bottom: 30px;
  justify-content: space-between;
  border-bottom-left-radius: ${BORDER_RADIUS};
  border-bottom-right-radius: ${BORDER_RADIUS};
  overflow: hidden;
  background: ${({ t }) => (t ? SECONDARY_SUB : SECONDARY_SUB_DARK)};
`;

export const ContactTitle = styled.h3`
  width: 100%;
  display: flex;
  margin-top: 0;
  /* padding: 5px; */
  font-size: 1.4rem;
  font-weight: 700;
  align-items: center;
  padding-bottom: 0.7rem;
  border-bottom: 1px solid #ddd;

  .icon {
    margin-right: 10px;
  }
`;

export const ImageContainer = styled.div<{ t: boolean }>`
  display: flex;
  align-items; center;
  justify-content: center;
  width: 300px;
  margin: auto;
  height: 200px;
  max-width: 360px;
  position: relative;
  background: ${({ t }) =>
    t ? CARD_BOX_BACKGROUND : CARD_BOX_BACKGROUND_DARK};
  border-radius: ${BORDER_RADIUS};
  overflow: hidden;
  /* box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3); */

  .img {
    width: 100%;
    height: 100%;
  }
  .link {
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 60px;
    color: #fff;
    display: flex;
    margin: auto;
    align-items: center;
    text-decoration: none;
    justify-content: center;
    transition: 0.3s ease-in-out;
    background: rgba(0, 0, 0, 0.6);
    border-bottom-left-radius: ${BORDER_RADIUS};
    border-bottom-right-radius: ${BORDER_RADIUS};
  }
  .link-text {
    color: #fff;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 500;
  }
  &:hover .link {
    height: 70px;
  }
`;

export const BoxRowsAccordion = styled.div`
  display: flex;
  font-size: ${FONT_SIZE};
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: ${CONTAINER_PADDING};
  border-bottom-left-radius: ${BORDER_RADIUS};
  border-bottom-right-radius: ${BORDER_RADIUS};
`;

export const BoxRowHeader = styled.div<{ t: boolean; noBorder: boolean }>`
  display: flex;
  font-weight: 800;
  text-align: ${CONTAINER_ALIGN};
  background-color: ${({ t }) => (t ? SECONDARY_SUB : SECONDARY_SUB_DARK)};
  padding: ${({ noPadding }) => (noPadding ? '0' : `${CONTAINER_PADDING} 0`)};
  border-bottom: 1px solid
    ${({ noBorder, t }) =>
      noBorder ? 'none' : t ? BORDER_COLOR : BORDER_COLOR_DARK};
`;

export const BoxHeaderCell = styled.div<{ flex: string }>`
  font-size: 1.2rem;
  font-weight: 700;
  flex: ${(props) => props.flex};

  :first-child {
    padding-left: ${CONTAINER_PADDING_LEFT};
  }
`;
