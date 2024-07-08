/* eslint-disable */
'use strict';

import {
  BACKGROUND_COLOR,
  BACKGROUND_COLOR_DARK,
  BORDER_RADIUS,
} from '../../../../styles/BaseStyle';
import styled from 'styled-components';
import { TILE_MARGIN } from '@/view/search/style/SearchStyle';

const TEXT_FONT_SIZE = `11px`;
const NAME_FONT_SIZE = `14px`;

export const ListItemTileSmallBox = styled.div<{ t: boolean; color: string }>`
  flex: 0 1 200px;
  padding: 10px;
  margin: ${TILE_MARGIN};
  font-size: ${TEXT_FONT_SIZE};
  border-radius: ${BORDER_RADIUS};
  background-color: ${({ t }) =>
    t ? BACKGROUND_COLOR : BACKGROUND_COLOR_DARK};
  border-top: solid 5px ${(props) => props.color || `transparent`};
  max-width: 200px;
`;
export const ListItemTileSmallName = styled.h3`
  position: relative;
  text-align: left;
  margin: 10px 0;

  a {
    font-size: ${NAME_FONT_SIZE};
    color: black;
    text-decoration: none;
  }

  img {
    position: absolute;
    right: 0;
    top: -5px;
  }
`;
