import * as React from 'react';
import styled from 'styled-components';
import { ProductData } from '../ProductProps';
import getLang from '../../../lang/Lang';
import { FormatPrice } from '../../../formatter/Formatter';
import { ProductDetailBox } from '../style/ProductStyle';
import { DetailRow } from '../../../components/detail/DetailRow';

const NameH1 = styled.h1`
  text-align: left;
`;

export function ProductBasic(props: { productData: ProductData }) {
  return (
    <ProductDetailBox>
      <NameH1>{props.productData.name}</NameH1>
      <DetailRow
        label={getLang(`productDetail`, `code`)}
        value={props.productData.code}
      />
      <DetailRow
        label={getLang(`productDetail`, `name`)}
        value={props.productData.name}
      />
      <DetailRow
        label={getLang(`productDetail`, `description`)}
        value={props.productData.description}
      />
      <DetailRow
        label={getLang(`productDetail`, `productCategory`)}
        value={
          props.productData.productCategoryId &&
          props.productData.productCategoryId.name
        }
      />
      <DetailRow
        label={getLang(`productDetail`, `measureUnit`)}
        value={
          props.productData.measureUnitId &&
          props.productData.measureUnitId.name
        }
      />
      <DetailRow
        label={getLang(`productDetail`, `vatRate`)}
        value={props.productData.vat_rate}
      />
      <DetailRow
        label={getLang(`productDetail`, `price`)}
        value={props.productData.price && FormatPrice(props.productData.price)}
      />
    </ProductDetailBox>
  );
}
