export type FilterValues = string[];

export enum AddressTypes {
  register = `register`,
  facility = `facility`,
}

export type AddressType = keyof typeof AddressTypes;

export interface ITreeOption {
  children: ITreeOption[];
  label: string;
  value: string;
}

export type LocalityTreeOptions = ITreeOption;

export interface IOptionData {
  code: string;
  name: string;
}

export type LegalFormData = IOptionData;

export type RevenueData = IOptionData;
export type WorkerCountData = IOptionData;
export type EconomicActivityData = ITreeOption;

export type PackageBaseDataProps = {
  locality: LocalityTreeOptions[];
  legalFormTop: LegalFormData[];
  legalForm: LegalFormData[];
  revenue: RevenueData[];
  workerCount: WorkerCountData[];
};

export type PackageEconomicDataProps = {
  economicActivity: EconomicActivityData[];
  economicActivityName: string;
};
