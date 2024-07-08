import { FirmBasic } from '../firm/FirmBasicProps';
import { CryptId, OptionType } from '@/data/DataType';

export type CallTypeItem = {
  uid: number;
  name: string;
};

export type PhoneRatingList = {
  rating: string;
  comment: string;
  callType: CallTypeItem;
  tag: string[];
  date: string;
};

export type RatingSumItem = {
  rating: string;
  count: number;
};

export type CallTypeSumItem = {
  count: number;
} & OptionType;

export type PhoneData = {
  phone: string;
  id: CryptId;
  ratingList: PhoneRatingList[];
  ratingSumList?: RatingSumItem[];
  callTypeSumList?: CallTypeSumItem[];
  ratingAvg: string;
  viewCount: number;
  privateNumber: boolean;
  firmList?: FirmBasic[];
};

export enum PhoneRatings {
  useful = `useful`,
  normal = `normal`,
  annoying = `annoying`,
  dangerously = `dangerously`,
  not_rated = `not_rated`,
}

export type PhoneRatingType = keyof typeof PhoneRatings;

export const RatingImages = new Map<string, string>()
  .set(PhoneRatings.useful, `count1`)
  .set(PhoneRatings.normal, `count0`)
  .set(PhoneRatings.annoying, `count-1`)
  .set(PhoneRatings.dangerously, `count-2`)
  .set(PhoneRatings.not_rated, `not_rated`);
