import styled from 'styled-components';
import {
  CONTENT_WIDTH,
  DETAIL_ROW_PADDING,
} from '../../../../styles/BaseStyle';

export const PhoneContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: ${CONTENT_WIDTH};
  justify-content: center;
`;

export const PhoneDetailBox = styled.div`
  flex: 1 1;
  min-width: 300px;
  font-size: 17px;
`;

export const PhoneTitle = styled.div`
  display: flex;
  margin: 1rem 1rem;
  border-radius: 10px;
  align-items: center;
`;

export const PhoneBoxRow = styled.div`
  /* flex: 0 1 700px; */
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  line-height: 30px;
  vertical-align: 50%;
  margin: 2px 10px;
  align-items: center;

  svg {
    font-size: 20px;
    padding-right: 20px;
    flex: 0 0 50px;
  }

  .label {
    flex: 0 0 200px;
    width: 200px;
    display: inline-block;
    font-weight: 600;
  }

  .value {
    flex: 1 500px;
  }
`;

export const PhoneFirmRow = styled.span``;

export const PhoneNumber = styled.div`
  text-align: left;
  padding: 12px;
  margin-top: 5px;
  flex: 50%;
  align-self: flex-end;
  font-weight: bold;
  font-size: 1.9rem;
`;

export const PhoneRating = styled.div`
  flex: 50%;
  padding: 12px;
  font-size: 20px;
  text-align: right;

  span {
    margin-right: 20px;
  }
  img {
    display: inline-block;
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  flex: 25% 75%;
  align-items: center;
  margin: 10px 0;

  .label {
    text-align: left;
    margin-top: 0.5rem;
    width: 200px;
  }
  .form {
    margin-left: 2rem;
  }
`;

export const RatingListContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
`;

export const CallTypeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  align-items: center;
`;

export const ChipsRatingContainer = styled.div`
  margin-right: 1rem;
`;

export const RatingBox = styled.div`
  display: flex;
  /* flex: 0 1 auto;
  padding: ${DETAIL_ROW_PADDING}; */
  margin-right: 35px;

  img {
    /* padding: 0 8px; */
    width: 50px;
    margin-right: 20px;
  }

  span {
    vertical-align: 45%;
  }
  .times-text {
    font-weight: 700;
  }
`;
