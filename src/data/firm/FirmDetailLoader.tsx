import { ApiMethodsOld } from '../loader/ApiMethodsOld';
import { IQueryByUid } from '../DataLoaderProps';
import { JsonApiResult } from '../DataType';
import { FirmData } from '../../view/firm/FirmProps';
import { apiOld } from '../loader/ApiOld';

type FirmQuery = IQueryByUid;

export function firmDetailLoader(uid: string) {
  const query: FirmQuery = {
    uid,
  };
  return apiOld.get<FirmDetailResult>(ApiMethodsOld.firmDetail, {
    params: query,
  });
}

export type FirmDetailResult = JsonApiResult & FirmData;
