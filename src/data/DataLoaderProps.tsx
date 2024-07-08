import { PackageFilterData } from '../components/package/PackageFilterProps';

type CryptId = string;

export type IQuery = {
  apiKey?: string;
};

export type IQueryByIdNumber = {
  idNumber: string;
};

export type IQueryByUid = {
  uid: string;
} & IQuery;

export type IQueryById = {
  id: CryptId;
} & IQuery;

export type IQueryByPhone = {
  phone: string;
} & IQuery;

export type IAutocompleteQuery = {
  term: string;
} & IQuery;

export type ICountryCodeQuery = {
  countryCode?: string;
} & IQuery;

export type PackageFilterQuery = {
  packageFilter?: PackageFilterData | null;
  calculateAllowed?: boolean;
};

export type IFormQuery = {
  formCode: string;
} & IQuery;

export type AccountFormQuery = {
  email: string;
  firstName: string;
  lastName: string;
  password?: string;
  phone: string;
  companyId?: string;
  companyName?: string;
  isCompany: boolean;
} & ICountryCodeQuery;
