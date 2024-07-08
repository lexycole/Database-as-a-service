import { ApiMethodsOld } from '../loader/ApiMethodsOld';
import { IQueryById } from '../DataLoaderProps';
import { CryptId, JsonApiResult } from '../DataType';
import { apiOld } from '../loader/ApiOld';

type ArticleQuery = IQueryById;

export const PRIVACY_POLICY_ID = `h~oVkdM4N7Pa`;
export const TERMS_AND_CONDITIONS_ID = `h~0BWbqMbQJD`;

export function articleLoader(article: CryptId) {
  const query: ArticleQuery = {
    id: article,
  };
  return apiOld.get<ArticleDetailResult>(ApiMethodsOld.articleDetail, {
    params: query,
  });
}

export type ArticleDetailResult = JsonApiResult & {
  id: CryptId;
  name: string;
  content: string;
};
