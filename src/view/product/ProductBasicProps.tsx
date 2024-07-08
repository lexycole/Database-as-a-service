import { PriceData } from './ProductProps';
import { IBaseData, IdentifierId } from '../../data/DataType';

export type ProductBasic = {
  price?: PriceData;
  productCategory?: string;
} & IBaseData &
  IdentifierId;
