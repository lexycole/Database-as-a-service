import * as React from 'react';
import { useState } from 'react';
import { Link } from '@material-ui/core';
import {
  IAutocompleteResult,
  SearchResultData,
} from '../../../data/SearchResultData';
import {
  getCategoryName,
  SearchCategoryType,
} from '../../../components/search/SearchProps';
import {
  CategoryCount,
  SearchCategoryContainer,
  ShowAllLink,
} from '../style/SearchStyle';
import { EmptyResult } from './EmptyResult';
import { FormatNumber } from '../../../formatter/Formatter';
import getLang from '../../../lang/Lang';
import { ListStyleEnum } from './ListStyleSwitch';
import { SearchListWrapper } from './SearchListWrapper';
import { SearchListContainer } from './SearchListContainer';
import { Title } from '../../../../styles/Style';
import { SearchListNav } from '@/view/search/result/SearchListNav';
import SearchListSkeleton from '@/components/utils/skeleton/SearchListSkeleton';
import { useRecoilState } from 'recoil';
import { appTheme } from '@/storage/ThemeAtom';

export type SearchListProps = {
  term: string;
  category?: SearchCategoryType;
  searchResult?: IAutocompleteResult[];
  loading: boolean;
};

export function SearchCategoryCount(props: { rows: number }) {
  const [theme] = useRecoilState(appTheme);

  return (
    <CategoryCount t={theme}>{`(${FormatNumber(props.rows)})`}</CategoryCount>
  );
}

export type SearchListByCategoryProps = {
  listStyle: ListStyleEnum;
  autocompleteResult: IAutocompleteResult;
};

function SearchListByCategory(props: SearchListByCategoryProps) {
  const [theme] = useRecoilState(appTheme);
  const { category, total, rows } = props.autocompleteResult;

  return (
    <SearchCategoryContainer
      id={`search-result-${category}`}
      t={theme}
      category={category}
    >
      <h2>
        {category && getCategoryName(category)}{' '}
        <SearchCategoryCount rows={rows ?? 0} />
      </h2>
      <SearchListContainer
        listStyle={props.listStyle}
        category={category ?? null}
      >
        {props?.autocompleteResult?.data.map(
          (item: SearchResultData, key: number) => (
            <SearchListWrapper
              key={key}
              category={props.autocompleteResult.category ?? null}
              data={item}
              listStyle={props.listStyle}
            />
          ),
        )}
      </SearchListContainer>
      {total && (
        <ShowAllLink>
          <Link>
            {getLang(`search`, `showAllRows`)}
            <SearchCategoryCount rows={total} />
          </Link>
        </ShowAllLink>
      )}
    </SearchCategoryContainer>
  );
}

export function SearchList(props: SearchListProps) {
  const [listStyle, setListStyle] = useState<ListStyleEnum>(ListStyleEnum.tile);

  // loading process
  if (props.loading) {
    return <SearchListSkeleton />;
  }

  // no result
  if (props.searchResult === undefined) {
    return null;
  }

  if (props.searchResult.length === 0) {
    return <EmptyResult />;
  }

  return (
    <>
      <Title>
        {getLang('search', 'searchResult')} &lsquo;{props.term}&lsquo;
      </Title>

      <SearchListNav
        data={props.searchResult}
        listStyle={listStyle}
        setListStyle={setListStyle}
      />

      {props?.searchResult?.map(
        (autocompleteResult: IAutocompleteResult, key: number) => (
          <SearchListByCategory
            key={key}
            listStyle={listStyle}
            autocompleteResult={autocompleteResult}
          />
        ),
      )}
    </>
  );
}
