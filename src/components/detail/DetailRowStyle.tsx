import { BORDER_COLOR, BORDER_COLOR_DARK } from '@/../styles/BaseStyle';
import styled from 'styled-components';

export const BoxRow = styled.div`
  /* flex: 0 1 700px; */
  text-align: left;
  display: flex;
  /* align-items: center; */
  flex-wrap: wrap;
  line-height: 30px;
  /* vertical-align: 50%; */
  margin: 2px 10px;

  svg {
    font-size: 20px;
    padding-right: 20px;
    flex: 0 0 50px;
  }

  .label {
    // flex: 0 0 200px;
    // width: 200px;
    // display: inline-block;
  }

  .value {
    font-weight: bold;
    // flex: 1 500px;
    padding-left: 20px;
  }
`;

export const TableBodyRow = styled.div<{ t: boolean }>`
  padding: 15px 0px;
  border-bottom: 1px solid ${({ t }) => (t ? BORDER_COLOR : BORDER_COLOR_DARK)};

  &:first-child {
    margin-top: -20px;
  }

  &:last-child {
    border-bottom: none;
  }
`;
