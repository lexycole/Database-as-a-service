import styled from 'styled-components';
import {
  BACKGROUND_COLOR,
  BACKGROUND_COLOR_DARK,
  BORDER_RADIUS,
  FOOTER_BACKGROUND,
  FOOTER_BACKGROUND_DARK,
} from '../../../../styles/BaseStyle';

export const ContainerCard = styled.div<{ t: boolean }>`
  width: 100%;
  margin: 3rem auto;
  padding: 3rem 8%;
  border-radius: ${BORDER_RADIUS};
  background-color: ${(props) =>
    props.t ? FOOTER_BACKGROUND : FOOTER_BACKGROUND_DARK};

  .title {
    text-align: left;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 1rem 1rem 2.5rem;
  }
`;

export const ItemCards = styled.div<{ t: boolean }>`
  border-radius: ${BORDER_RADIUS};
  background-color: ${(props) =>
    props.t ? BACKGROUND_COLOR : BACKGROUND_COLOR_DARK};
  min-height: 300px;
  padding: 2rem 1rem;
  text-align: left;

  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;

    .item-card-image {
      width: 60%;
      margin: 'auto';
      border: '1px solid #333';
    }
  }

  .title {
    margin-left: 0;
    margin-bottom: 5px;
    margin: 1.3rem 1rem 5px 0;
    font-size: 1.4rem;
    font-weight: 700;
  }

  .description {
    margin: 1rem;
    margin-left: 0;
    font-size: 1rem;
    font-weight: 400;
  }

  .type-content {
    display: flex;
    .type {
      font-weight: 700;
      font-size: 1rem;
    }
    .type-value {
      margin-left: 10px;
    }
  }

  .country {
    display: flex;
    margin-top: 10px;
    .country-type-name {
      font-weight: bold;
      font-size: 1rem;
    }
  }

  .other-title {
    font-weight: bold;
  }
  .other-subTitle {
    font-size: 0.94rem;
  }
`;
