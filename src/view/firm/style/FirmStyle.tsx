/* eslint-disable */

import {
  BOX_BACKGROUND_COLOR,
  BOX_BORDER,
  CONTAINER_PADDING,
  CONTAINER_PADDING_LEFT,
  CONTENT_WIDTH,
  FONT_SIZE,
  FONT_WEIGHT,
  SECONDARY_BACKGROUND_COLOR,
  SECONDARY_BACKGROUND_COLOR_DARK,
  TEXT_COLOR,
  TEXT_COLOR_DARK,
} from '../../../../styles/BaseStyle';
import styled from 'styled-components';

export const FirmContainer = styled.div`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	max-width: ${CONTENT_WIDTH}
	justify-content: center;
  box-shadow: none !important;

	.firmAddressList {
    background: #fafafa;
		border-top: none;

    table {
    thead th {
      font-weight: bold;
    }

    tbody tr:nth-of-type(odd) {
      background-color: #eee;
    }
  }
/* 
		th {
			border-bottom: ${BOX_BORDER};
			font-weight: bold;
			font-size: ${FONT_SIZE};
			padding: ${CONTAINER_PADDING} 0;

			:first-child {
				padding-left: ${CONTAINER_PADDING_LEFT};
			}
		} */

		/* tr:nth-child(2n+3) td {
			background-color: ${BOX_BACKGROUND_COLOR};
		} */
	}
`;

export const FirmDetailBox = styled.div`
  min-width: 300px;
`;

export const FirmTitleContainer = styled.div`
  display: flex;
  flex: 1 100%;
  margin: auto;
`;

export const FirmAddressRow = styled.div`
  padding: 10px 0;
  text-align: left;
  margin: '20em 0 2rem';
`;

export const FirmAddressValue = styled.div`
  margin: '1rem auto';
  display: flex;
  align-items: center;
  font-size: 1.14rem;
  font-weight: 500;
  line-height: 0;
`;

export const RegionAddressValue = styled.div`
  margin-left: 1rem;
`;

export const MapButtons = styled.div`
  display: flex;
  flex: 0 110px;
  margin-left: 10px;

  a {
    border: ${BOX_BORDER};
  }

  svg {
    color: ${TEXT_COLOR};
  }
`;

export const FirmBasicContainer = styled.div`
  flex: 1 1 300px;
`;

export const FirmTagContainer = styled.div`
  margin-top: 10px;
  text-align: left;

  .MuiChip-root {
    margin-right: 20px;
    padding: 0 5px;

    .MuiChip-label {
      svg {
        margin-left: 15px;
        margin-top: 2px;
      }
    }
  }
`;

export const FirmLogoContainer = styled.div`
  margin-left: auto;
  height: 100%;
  display: flex;
  padding: 1rem;
  align-items: flex-start;
  flex: 0 0 100px;
`;

export const BankAccountsBox = styled.div`
  flex: 0 1 100%;
  text-align: left;
`;

export const FirmNameTitle = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  text-align: left;
  margin-bottom: 0;
`;
export const IdNumberDiv = styled.div`
  white-space: nowrap;
  font-size: 1.2rem;
  font-weight: ${FONT_WEIGHT};
  text-align: center;
  margin-bottom: 1rem;
`;
export const DescriptionDiv = styled.div<{ t: boolean }>`
  display: flex;
  min-height: 50px;
  padding: 25px;
  text-align: left;
  align-items: center;
  background: ${(props) =>
    props.t ? '#F2F2F2' : SECONDARY_BACKGROUND_COLOR_DARK};
  border-radius: 10px;
  margin-bottom: 15px;
  color: ${(props) => (props.t ? TEXT_COLOR : TEXT_COLOR_DARK)};
  font-size: ${FONT_SIZE};
  justify-content: space-between;
`;
