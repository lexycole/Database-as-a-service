import { ApiMethodsOld } from '../loader/ApiMethodsOld';
import { IQueryByUid } from '../DataLoaderProps';
import { JsonApiResult } from '../DataType';
import { IAutocompleteResult } from '../SearchResultData';
import { apiOld } from '../loader/ApiOld';

type SimilarFirmQuery = IQueryByUid;

export function similarFirmLoader(uid: string) {
  const query: SimilarFirmQuery = {
    uid,
  };
  return apiOld.get<SimilarFirmResult>(ApiMethodsOld.similarFirmList, {
    params: query,
  });
}

export type SimilarFirmResult = JsonApiResult & IAutocompleteResult;
