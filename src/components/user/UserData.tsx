import { CryptId } from '../../data/DataType';

export type UserData = {
  id: CryptId;
  login: string;
  name: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  roles?: [];
};
