/* eslint-disable */
'use strict';

import {
  BACKGROUND_COLOR,
  BACKGROUND_COLOR_DARK,
  BORDER_RADIUS,
} from '../../../../styles/BaseStyle';
import styled from 'styled-components';
import { TILE_MARGIN } from '@/view/search/style/SearchStyle';

const FONT_SIZE = `13px`;
const NAME_FONT_SIZE = `20px`;

export const ListItemTileBox = styled.div<{ t: boolean; color: string }>`
  background-color: ${({ t }) =>
    t ? BACKGROUND_COLOR : BACKGROUND_COLOR_DARK};
  border-radius: ${BORDER_RADIUS};
  flex: 0 0 300px;
  padding: 15px;
  font-size: ${FONT_SIZE};
  margin: ${TILE_MARGIN};
  border-top: solid 5px ${(props) => props.color || `transparent`};
  max-width: 300px;
`;

export const ListItemTileName = styled.h3`
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
