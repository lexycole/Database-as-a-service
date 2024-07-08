import {
  FirmCountData,
  FirmCountSumProps,
} from '../../view/firmCount/FirmCountProps';
import { JsonApiResult } from '../DataType';
import { api } from '../loader/Api';
import { ApiMethods } from '../loader/ApiMethods';

export type FirmCountryCountResult = {
  firmCountryCount: FirmCountData[];
} & JsonApiResult &
  FirmCountSumProps;

export function firmCountryCountLoader() {
  return api.get<FirmCountryCountResult>(ApiMethods.firmCountryCount);
}
