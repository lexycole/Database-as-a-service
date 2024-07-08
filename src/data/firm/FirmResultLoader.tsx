import { ApiMethodsOld } from '../loader/ApiMethodsOld';
import { JsonApiResult } from '../DataType';
import { FirmBasic } from '../../view/firm/FirmBasicProps';
import { apiOld } from '../loader/ApiOld';

export function firmResultLoader() {
  return apiOld.get<FirmListResult>(ApiMethodsOld.firmResult);
}

export type FirmListResult = JsonApiResult & {
  firm: FirmBasic[];
};
