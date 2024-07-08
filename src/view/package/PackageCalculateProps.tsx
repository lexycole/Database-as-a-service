import { PriceData } from '../product/ProductProps';

export type PackageCalculateData = {
  total: number;
  phoneCount?: number;
  wwwCount?: number;
  emailCount?: number;
  phoneSum?: number;
  emailSum?: number;
  wwwSum?: number;
  price?: PriceData;
  time: string; // todo vz debug
};
