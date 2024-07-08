import { SearchCategoryType } from '../components/search/SearchProps';
import { CryptId, IBaseData } from './DataType';
import { AddressData } from '@/components/address/AddressProps';

export type AutocompleteResultMulti = {
  firm?: IAutocompleteResult;
  phone?: IAutocompleteResult;
  product?: IAutocompleteResult;
} & IAutocompleteResult;

export interface IAutocompleteResult {
  rows?: number;
  total?: number;
  data: SearchResultData[];
  category?: SearchCategoryType;
}

export type SearchResultData = {
  id?: CryptId;
  category?: SearchCategoryType;
  categoryName?: string;

  // firm
  uid?: string;
  visible: boolean;
  idNumber?: string;
  address?: AddressData;
  phone?: string;
  legalForm?: string;

  // phone
  ratingAvg?: string;
  viewCount?: number;

  // product
  code?: string;
  productCategoryId?: string;
} & IBaseData;
