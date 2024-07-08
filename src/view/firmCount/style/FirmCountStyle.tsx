/* eslint-disable */
'use strict';

import styled from 'styled-components';
import {
  BACKGROUND_COLOR,
  BACKGROUND_COLOR_DARK,
  BORDER_RADIUS,
  FONT_SIZE,
  PRIMARY_TEXT_COLOR,
  PRIMARY_TEXT_COLOR_DARK,
  SECONDARY_BACKGROUND_COLOR,
  SECONDARY_BACKGROUND_COLOR_DARK,
  SECONDARY_SUB,
  SECONDARY_SUB_DARK,
} from '../../../../styles/BaseStyle';

export const FirmCountContainerStyled = styled.div<{ t: boolean }>`
  .tableContainer {
    width: 100%;
    border: none;
    border-radius : ${BORDER_RADIUS};
    background-color: ${({ t }) => (t ? SECONDARY_SUB : SECONDARY_SUB_DARK)};
    
    .MuiTableCell-root {
        font-weight: 400;
        font-size: ${FONT_SIZE};
        border: none;
    }
    
    table {
        thead{
          th {
            color: ${PRIMARY_TEXT_COLOR_DARK};
            }
        }
    
        tbody tr:nth-of-type(even) {
            border: none;
            background: ${({ t }) =>
              t ? BACKGROUND_COLOR : BACKGROUND_COLOR_DARK};
        }

        tbody tr:last-child {
            border-bottom: none;
        }
        
        tfoot td {
          background-color: ${({ t }) =>
            t ? SECONDARY_BACKGROUND_COLOR : SECONDARY_BACKGROUND_COLOR_DARK};
          color: ${({ t }) =>
            t ? PRIMARY_TEXT_COLOR : PRIMARY_TEXT_COLOR_DARK};
        }
        
  }
`;

export const FirmCountSumContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
`;

export const FirmCountSumBox = styled.div<{ t: boolean }>`
  margin: 20px;
  font-size: 16px;
  flex: 0 500px;

  .firm-count-title {
    padding: 1rem;
    font-size: 1rem;
    font-weight: 900;
  }

  div:first-child {
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    background-color: #013d61;
    color: white;
  }

  div:last-child {
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    border: ${({ t }) => (t ? '1px solid #ccc' : '1px solid #333')};
  }
`;

export const ContactInfoContainer = styled.div`
  padding: 10px;
  margin-bottom: 30px;

  & > span {
    font-size: ${FONT_SIZE};
    padding-right: 20px;
  }
`;

export const FirmCountSumRow = styled.div<{ t: boolean }>`
  padding: 1rem;
  color: ${({ t }) => (t ? '#333' : '##FFF')};

  span {
    font-size: 1rem;
    font-weight: 400;
    padding: 0 5px;
  }
`;
