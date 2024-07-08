import styled from 'styled-components';
import { CONTENT_WIDTH } from '../../../../styles/BaseStyle';

export const ProductContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: ${CONTENT_WIDTH};
  justify-content: center;
`;

export const ProductDetailBox = styled.div`
  flex: 1 1;
  min-width: 300px;
  font-size: 17px;
`;

export const ProductRow = styled.div`
  flex: 0 1 500px;
  text-align: left;

  .label {
    width: 200px;
    display: inline-block;
  }

  .value {
    font-weight: bold;
  }
`;
