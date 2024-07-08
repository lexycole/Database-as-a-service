import { ApiMethodsOld } from '../loader/ApiMethodsOld';
import { IQueryByPhone } from '../DataLoaderProps';
import { CryptId, JsonApiResult } from '../DataType';
import { PhoneData } from '../../view/phone/PhoneProps';
import { apiOld } from '../loader/ApiOld';
import { CountryData } from '@/components/country/CountryProps';

type PhoneQuery = {
  countryCode: string;
} & IQueryByPhone;
``;

export function phoneLoader(phone: CryptId, country: CountryData | null) {
  const query: PhoneQuery = {
    phone,
    countryCode: country?.code?.toLowerCase() ?? '',
  };
  return apiOld.get<PhoneDetailResult>(ApiMethodsOld.phoneDetail, {
    params: query,
  });
}

export type PhoneDetailResult = JsonApiResult & PhoneData;
