import styled from 'styled-components';
import {
  CONTENT_WIDTH,
  DETAIL_ROW_PADDING,
  BORDER_RADIUS,
  SECONDARY_SUB,
  SECONDARY_SUB_DARK,
  TEXT_COLOR,
  TEXT_COLOR_DARK,
  SECONDARY_BACKGROUND_COLOR,
  SECONDARY_BACKGROUND_COLOR_DARK,
} from '../../../../styles/BaseStyle';

export const PersonContainer = styled.div`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	max-width: ${CONTENT_WIDTH}
	justify-content: center;
`;

export const PersonDetailBox = styled.div`
  flex: 1 1;
  min-width: 300px;
`;

export const PersonRow = styled.div`
  flex: 0 1 100%;
  text-align: left;
  padding: ${DETAIL_ROW_PADDING};
  display: flex;
  gap: 10px;
  gap: 10px 10rem;
  .label {
    // width: 250px;
    display: inline-block;
  }

  .value {
    // font-weight: bold;
  }
`;
export const CompanyRow = styled.div`
  flex: 0 1 100%;
  text-align: left;
  padding: ${DETAIL_ROW_PADDING};
  .label {
    display: inline-block;
  }

  .value {
    font-weight: bold;
    padding-left: 20px;
  }
`;

export const FullDetailRow = styled.div`
  flex: 0 1 100%;
  text-align: left;
  padding: ${DETAIL_ROW_PADDING};
  background-color: ${({ t }) => (t ? SECONDARY_SUB : SECONDARY_SUB_DARK)};
  .label {
    display: inline-block;
  }

  .value {
    font-weight: bold;
    padding-left: 20px;
  }
`;

export const DateDepartmentBox = styled.div<{
  t: boolean;
  noPadding: boolean;
  padding: boolean;
}>`
  padding: ${({ noPadding }) => (noPadding ? '0' : '17px')};
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const SharedRows = styled.div<{
  t: boolean;
  noPadding: boolean;
  padding: boolean;
}>`
  padding: ${({ noPadding }) => (noPadding ? '0' : '17px')};
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 20px;
  background-color: ${({ t }) => (t ? SECONDARY_SUB : SECONDARY_SUB_DARK)};
`;

export const NameRowDescription = styled.div<{
  t: boolean;
}>`
  margin: 10px;
  background-color: #fafafa;
  border-radius: 10px;
  background-color: ${({ t }) => (t ? SECONDARY_SUB : SECONDARY_SUB_DARK)};
  color: ${({ t }) => (t ? TEXT_COLOR : TEXT_COLOR_DARK)};
`;

export const RelationLinkRow = styled.div<{
  t: boolean;
}>`
  text-align: left;
  position: relative;
  background-color: #ddd;
  padding: 15px;
  background-color: ${({ t }) =>
    t ? SECONDARY_BACKGROUND_COLOR : SECONDARY_BACKGROUND_COLOR_DARK};
  color: ${({ t }) => (t ? TEXT_COLOR : TEXT_COLOR_DARK)};
`;

export const PersonDivider = styled.div<{}>`
  margin: 0 10px;
  width: 98%;
  border: 1px solid #cdcdcd;
`;

export const PersonRelationContainer = styled.div`
  margin-top: 0 auto;
`;

export const DetailBoxContainer = styled.div<{
  t: boolean;
}>`
  background: ${({ t }) => (t ? SECONDARY_SUB : SECONDARY_SUB_DARK)};
  border-radius: ${BORDER_RADIUS};
`;
