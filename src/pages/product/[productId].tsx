import * as React from 'react';
import { useRouter } from 'next/router';
import { ProductWrapper } from '../../view/product/ProductWrapper';
import { parseProductId } from '../../components/link/ProductLink';
import { PageParamsError } from '../../error/PageParamsError';
import { CryptId } from '../../data/DataType';

function Product() {
  const router = useRouter();
  const { productId } = router.query;

  let encryptedId: CryptId | null = null;

  // server side - empty query
  if (productId !== undefined) {
    encryptedId = parseProductId(productId.toString());

    if (encryptedId === null) {
      return <PageParamsError />;
    }
  }

  return (
    <>
      {encryptedId && productId && (
        <ProductWrapper
          key={encryptedId}
          productId={encryptedId}
          originalUrl={encryptedId ? productId.toString() : ``}
        />
      )}
    </>
  );
}

export default Product;
