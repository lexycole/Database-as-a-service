import * as React from 'react';
import { useEffect, useState } from 'react';
import assert from 'assert';
import { ProductData } from './ProductProps';
import { ProductBasic } from './detail/ProductBasic';
import { productLoader } from '../../data/product/ProductLoader';
import { CryptId } from '../../data/DataType';
import { IOriginalUrl } from '../../components/link/LinkProps';
import { validateProductUrl } from '../../components/link/ProductLink';
import { ContentWrapper } from '../ContentWrapper';
import { DataPlaceholder } from '../../components/page/PageHelper';
import { isDevelopment } from '@/environment/Environment';

type ProductWrapperProps = {
  productId: CryptId;
} & IOriginalUrl;

export function ProductWrapper(props: ProductWrapperProps) {
  const [data, setData] = useState<ProductData>();
  const [isError, setError] = useState(false);

  useEffect(() => {
    productLoader(props.productId)
      .then(({ data }) => {
        setData(data);
        const validation = validateProductUrl(props.originalUrl, data.name);
        if (isDevelopment()) {
          // todo vz zobrazit uzivateli
          assert(validation, `Chyba validace url produktu`);
        }
      })
      .catch(() => {
        setError(true);
      });
  }, [props.productId]);

  return (
    <ContentWrapper isError={isError}>
      <ProductView productData={data} />
    </ContentWrapper>
  );
}

function ProductView(props: { productData: ProductData | undefined }) {
  return (
    <>
      {props.productData ? (
        <ProductBasic productData={props.productData} />
      ) : (
        <DataPlaceholder rows={20} />
      )}
    </>
  );
}
