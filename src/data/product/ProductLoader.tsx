import { IQueryById } from '../DataLoaderProps';
import { ApiMethodsOld } from '../loader/ApiMethodsOld';
import { CryptId, JsonApiResult } from '../DataType';
import { ProductData } from '../../view/product/ProductProps';
import { apiOld } from '../loader/ApiOld';

type ProductQuery = IQueryById;

export function productLoader(id: CryptId) {
  const query: ProductQuery = {
    id,
  };
  return apiOld.get<ProductDetailResult>(ApiMethodsOld.productDetail, {
    params: query,
  });
}

export type ProductDetailResult = JsonApiResult & ProductData;
