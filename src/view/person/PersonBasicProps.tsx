import { IBaseData, IdentifierId } from '../../data/DataType';
import { AddressData } from '../../components/address/AddressProps';

export type PersonBasic = {
  age?: number;
  address?: AddressData;
  visible?: boolean;
} & IBaseData &
  IdentifierId;
