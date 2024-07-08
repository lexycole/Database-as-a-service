import { IBaseData, IdentifierUid } from '../../data/DataType';
import { AddressData } from '@/components/address/AddressProps';

export type FirmBasic = {
  idNumber?: string;
  legalForm?: string;
  visible?: boolean;
  countryCode?: string;
  firmStatus?: string;
  address?: AddressData;
} & IBaseData &
  IdentifierUid;
