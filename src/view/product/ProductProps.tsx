import { IdentifierId, RelationType } from '../../data/DataType';

export type PriceData = {
  value: number;
  currency: string;
};

export type ProductData = {
  code: string;
  name: string;
  description: string;
  productCategoryId: RelationType;
  measureUnitId: RelationType;
  vat_rate: string;
  price: PriceData;
} & IdentifierId;
