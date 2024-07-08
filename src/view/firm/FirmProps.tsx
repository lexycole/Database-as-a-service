import { CryptId, IdentifierUid, OptionType } from '../../data/DataType';
import { PriceData } from '../product/ProductProps';
import { AddressData } from '../../components/address/AddressProps';
import { IRelationLink } from '../../components/link/RelationLink';
import { BasePersonData } from '../person/PersonProps';

export const MAX_LIST_ROWS = 10;

export type StatutoryList = {
  code: string;
  name: string;
  data: StatutoryData[];
};

export type StatutoryData = {
  id?: CryptId;
  uid?: string;
  name: string;
  department: string;
  address: AddressData;
  age: string;
  title: string;
  additional: string;
} & BasePersonData &
  IRelationLink;

export type FirmAddressData = {
  addressType: string;
  idNumber: string;
} & AddressData;

export type PersonData = BasePersonData;

export type ContactData = {
  contact: string;
  webImage?: string;
};

export type ContactList = {
  phone: ContactData[];
  email: ContactData[];
  www: ContactData[];
  fax: ContactData[];
};

export type EconomicActivityData = {
  code: string;
  name: string;
  mainActivity: boolean;
};

export type EvolutionData = {
  year: number;
  revenue: string;
  workerCount: string;
};

export type BusinessTypeData = {
  code: string;
  name: string;
};

export type CommonShareList = {
  commonShareId: string;
  commonShareList: CommonShareData[];
} & BaseShareData;

export type ShareList = {
  basic: ShareData[];
  stocks: ShareData[];
  partner: ShareData[];
  commonShare: CommonShareList[];
};

export type BaseShareData = {
  shareCode: string;
  shareType: string;
  shareTypeName: string;
  shareValue: string;
  shareValuePercent: string;
  sharePaidValue: string;
  sharePaidPercent: string;
  shareValueRaw: number; // docasne
  shareValuePercentRaw: number; // docasne
};

export type CommonShareData = {
  additional: string;
  address: AddressData;
} & BasePersonData;

export type ShareData = {
  address: FirmAddressData;
  additional: string;
  stocksCount: string;
} & BasePersonData &
  BaseShareData;

export type TradeLicenseList = {
  active: TradeLicenseData[];
  canceled: TradeLicenseData[];
  suspended: TradeLicenseData[];
  tradeLicenseOffice: string;
};

export type TradeLicenseData = {
  status: string;
  hasBusinessType?: boolean;
  name: string;
  type: boolean;
  licenseCreated: string;
  licenseCanceled: string;
  licenseSuspended: string;
};

export type OtherFactList = {
  code: string;
  name: string;
  data: string[];
};

export type BankAccountsList = {
  date: string;
  number: string;
};

export type RegisterList = {
  taxNumber: string;
  taxOffice?: OptionType;
  firmCreated?: string;
  firmClosed?: string;
  court?: OptionType;
  fileNumber?: string;
  firmRegistered: string;
  legalForm?: OptionType;
  bankAccounts?: BankAccountsList[];
  shareCapital?: PriceData;
  firmStatus?: string;
};

export type ContactGroup = {
  personList?: PersonData[];
  contactList?: ContactList;
  addressList?: FirmAddressData[];
};

export type BusinessGroup = {
  economicActivityList?: EconomicActivityData[];
  economicActivityName?: string;
  businessTypeList?: BusinessTypeData[];
  tradeLicenseList: TradeLicenseList;
};

export type AuthorityGroup = {
  statutoryList: StatutoryList[];
  shareList: ShareList;
};

export type OfferGroup = {};

export type FirmData = {
  name: string;
  description: string;
  idNumber: string;
  visible: boolean;
  address: AddressData;
  registerList: RegisterList;
  contact: ContactGroup;
  business: BusinessGroup;
  authority: AuthorityGroup;
  evolutionList: EvolutionData[];
  otherFactList: OtherFactList[];
  offer: OfferGroup;
} & IdentifierUid;
