/* eslint-disable */
import { SECONDARY_SUB, SECONDARY_SUB_DARK } from '@/../styles/BaseStyle';
import styled from 'styled-components';

export const CommentRow = styled.div`
  display: flex;
  padding: 12px;
  flex-wrap: wrap;
  text-align: left;
  margin: 15px 0px;
  align-items: center;
  border-radius: 10px;
  background-color: ${({ t }) => (t ? SECONDARY_SUB : SECONDARY_SUB_DARK)};

  .ratingImage {
    flex: 0 0 40px;
    margin: 0 10px 20px 10px;
  }

  .commentDate {
    float: right;
    font-size: 13px;
    text-align: right;
  }

  .callType {
    display: inline-block;
    text-align: left;
    font-weight: bold;
    line-height: 25px;
    font-size: 20px;
    margin-bottom: 10px;
  }

  p {
    flex: 100%;
  }
`;
export const CommentContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  margin-left: 1rem;
`;
