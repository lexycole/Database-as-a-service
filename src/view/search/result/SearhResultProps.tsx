import { SearchCategoryType } from '../../../components/search/SearchProps';
import { SearchResultData } from '../../../data/SearchResultData';

export type SearchResultProps = {
  category: SearchCategoryType | null;
  data: SearchResultData | null;
};
