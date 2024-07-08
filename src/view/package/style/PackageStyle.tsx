/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import {
  BACKGROUND_COLOR,
  BACKGROUND_COLOR_DARK,
  BORDER_RADIUS,
  PRIMARY_COLOR,
  PRIMARY_COLOR_DARK,
  PRIMARY_TEXT_COLOR,
  PRIMARY_TEXT_COLOR_DARK,
} from '@/../styles/BaseStyle';
import styled from 'styled-components';

export const LegalFormTopBlock = styled.div`
  display: flex;
  margin: 20px;
`;

export const LegalFormOptionsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const LegalFormCheckboxDiv = styled.div`
  flex: 1 33%;
  text-align: left;
`;

export const CountryContainer = styled.div`
  padding: 1rem;
  max-width: 500px;
`;

export const FilterBlock = styled.div<{ t: boolean }>`
  margin: 50px -30px;
  border-radius: 10px;
  border: ${(props) => (props.t ? '1px solid silver' : '1px solid #444')};
`;

export const PackageSubmitBlock = styled.div`
  margin: 20px;
  border-radius: 10px;
`;

export const BlockTitle = styled.div<{ t: boolean }>`
  color: #fff;
  padding: 1rem;
  background: ${({ t }) => (t ? PRIMARY_COLOR : PRIMARY_COLOR_DARK)};
  border-top-left-radius: ${BORDER_RADIUS};
  border-top-right-radius: ${BORDER_RADIUS};

  h3 {
    margin: 0;
    text-align: left;
    margin-left: 1rem;
    font-weight: 900;
    font-size: 1.3rem;
  }

  svg {
    float: left;
    margin-top: -3px;
    margin-right: 1rem;
  }
`;

export const BlockContainer = styled.div`
  padding: 1rem;
`;

export const ResultFirmCountSpan = styled.span<{ t: boolean }>`
  margin-left: 20px;
  display: inline-block;
  padding: 7px 11px;
  margin-top: -6px;
  margin-bottom: -6px;
  border-radius: ${BORDER_RADIUS};
  background-color: ${({ t }) =>
    t ? BACKGROUND_COLOR : BACKGROUND_COLOR_DARK};
  color: ${({ t }) => (t ? PRIMARY_TEXT_COLOR : PRIMARY_TEXT_COLOR_DARK)};
`;

export const PackageButtons = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: center;

  .MuiButton-root {
    margin: 20px;
  }
`;

export const BlockHeaderTitle = styled.div`
  font-size: 1.2rem;
  margin-bottom: 5px;
  font-weight: bolder;
`;
