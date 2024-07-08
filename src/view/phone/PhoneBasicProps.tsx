import { IBaseData, IdentifierId } from '../../data/DataType';
import { FirmBasic } from '../firm/FirmBasicProps';

export type PhoneBasic = {
  ratingAvg?: string;
  viewCount?: number;
  phone?: string;
  firmId?: FirmBasic;
} & IBaseData &
  IdentifierId;
