/* eslint-disable */
'use strict';

import styled from 'styled-components';
import { FONT_SIZE, PRIMARY_COLOR } from '../../../../styles/BaseStyle';

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContactBlock = styled.div`
  flex: 0 250px;
  font-size: ${FONT_SIZE};
  text-align: left;
  margin-left: 50px;

  :last-child {
    margin-left: 100px;
  }
`;

export const ContactTitle = styled.h3`
  margin-bottom: 30px;

  svg {
    color: ${PRIMARY_COLOR};
    margin-right: 15px;
    font-size: 24px;
  }
`;
