import { IdentifierId } from '../../data/DataType';
import { AddressData } from '../../components/address/AddressProps';
import { FirmStatusType } from '../firm/FirmStatus';
import { FirmBasic } from '@/view/firm/FirmBasicProps';

export interface IPersonData {
  name: string;
  age: string;
  department: string;
}

export type BasePersonData = IPersonData & IdentifierId;

export type PersonProps = {
  name: string;
  age: string;
  dateBirth: string;
  descriptionList?: PersonDescriptionList;
  address: AddressData;
  relations: PersonRelations[];
} & IdentifierId;

export type PersonPosition = {
  dateFrom: string;
  department: string;
};

export type PersonRelations = {
  position: PersonPosition[];
  shareType: string;
  shareValue: string;
  shareValueRaw?: number; // raw value
  sharePaidPercent: string;
  firmStatus: FirmStatusType;
  visible: boolean;
  description: string;
  name: string;
  idNumber: string;
  address: AddressData;
};

export type PersonDescriptionList = {
  business: boolean;
  firmCount?: number;
  shareCount?: number;
  activity?: string;
  idNumber?: string;
  address?: AddressData;
  authorityList: PersonAuthority[];
};

export type PersonAuthority = {
  authorityName: string;
  firm: FirmBasic;
};
