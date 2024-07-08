/* eslint-disable */
'use strict';

import styled from 'styled-components';
import {
  CONTAINER_PADDING_LEFT,
  FONT_SIZE,
  FONT_WEIGHT,
} from '../../../../styles/BaseStyle';

export const TradeLicenseOfficeRow = styled.div`
  padding-left: ${CONTAINER_PADDING_LEFT};
  font-size: 20px;
  span {
    margin-left: 20px;
    font-weight: bold;
  }
`;
export const TradeLicenseName = styled.span`
  font-size: ${FONT_SIZE};
  font-weight: ${FONT_WEIGHT};
`;

export const TradeLicenseTypeName = styled.span`
  font-size: 16px;
  font-weight: ${FONT_WEIGHT};
  margin: 0 20px;
`;

export const TradeLicenseDate = styled.div`
  padding: 5px;

  span {
    padding-left: 10px;
    float: right;
  }
`;

export const BusinessTypeCount = styled.span`
  margin-left: 15px;
`;

export const TradeLicenseBox = styled.div`
  margin-top: 20px;
  flex: 0 1 100%;
  
  background-color ; red;

  .MuiTabPanel-root {
	border-top: solid 1px silver;
    padding: 20px 0;
  }
  
  .MuiTableCell-root {
    border-bottom: none;
  }
`;
