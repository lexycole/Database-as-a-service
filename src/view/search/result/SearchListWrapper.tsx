import * as React from 'react';
import { SearchCategoryType } from '../../../components/search/SearchProps';
import { SearchResultData } from '../../../data/SearchResultData';
import { ListStyleEnum } from './ListStyleSwitch';
import { SearchListItemTile } from './SearchListItemTile';
import { SearchListItemRows } from './SearchListItemRows';
import { SearchListItemTileSmall } from './SearchListItemTileSmall';

type SearchListWrapperProps = {
  listStyle: ListStyleEnum;
  category: SearchCategoryType | null;
  data: SearchResultData;
};

export function SearchListWrapper(props: SearchListWrapperProps) {
  switch (props.listStyle) {
    case ListStyleEnum.tile:
      return <SearchListItemTile data={props.data} category={props.category} />;
    case ListStyleEnum.tileSmall:
      return (
        <SearchListItemTileSmall data={props.data} category={props.category} />
      );
    case ListStyleEnum.rows:
      return <SearchListItemRows category={props.category} data={props.data} />;
  }
}
