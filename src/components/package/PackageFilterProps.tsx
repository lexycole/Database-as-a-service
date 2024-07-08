import { ContactType } from '../contact/ContactType';
import { FilterValues } from '../../view/package/props/PackageDataProps';

export type PackageFilterData = {
  countryCode: string;
  locality?: FilterValues;
  district?: FilterValues;
  addressType?: FilterValues;
  contactType?: ContactType[];
  revenue?: FilterValues;
  workerCount?: FilterValues;
  legalForm?: FilterValues;
  economicActivity?: FilterValues;
};
