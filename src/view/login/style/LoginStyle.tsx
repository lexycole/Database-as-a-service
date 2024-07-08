/* eslint-disable */
'use strict';

import styled from 'styled-components';
import {
  LINK_DECORATION,
  LINK_DECORATION_HOVER,
} from '../../../../styles/BaseStyle';

export const LoginLink = styled.div`
  margin-top: 10px;

  a {
    margin: 5px;
    text-decoration: ${LINK_DECORATION};

    &:hover {
      text-decoration: ${LINK_DECORATION_HOVER};
    }
  }
`;
