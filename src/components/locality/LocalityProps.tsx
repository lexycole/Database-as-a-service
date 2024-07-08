import { CryptId, IdentifierId, IBaseData } from '../../data/DataType';

export enum LocalityTypes {
  city = `city`,
  district = `district`,
  region = `region`,
}

export type LocalityType = keyof typeof LocalityTypes;

export type LocalityData = {
  region: string;
  regionId: CryptId;
  district: string;
  districtId: CryptId;
  type: LocalityType;
  typeName: string;
} & IBaseData &
  IdentifierId;

export type AutocompleteLocalityData = {
  city?: ILocalityResult;
  district?: ILocalityResult;
  region?: ILocalityResult;
};

export interface ILocalityResult {
  rows?: number;
  total?: number;
  data: LocalityData[];
}
