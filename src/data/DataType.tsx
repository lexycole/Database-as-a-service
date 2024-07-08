export type ApiErrors = {};

export type JsonApiResult = {
  errors: ApiErrors[];
  code?: number;
  reason?: string;
};

export type FormApiResult = {
  sent: string;
} & JsonApiResult;

export type CryptId = string;

export type IdentifierId = {
  id: CryptId;
};

export type IdentifierUid = {
  uid: string;
};

export type OptionType = {
  id: CryptId;
  code: string;
  name: string;
  description: string;
};

export type RelationType = {
  id: string;
  code: string;
  name: string;
  description: string;
};

export interface IBaseData {
  name: string;
  description?: string;
}
