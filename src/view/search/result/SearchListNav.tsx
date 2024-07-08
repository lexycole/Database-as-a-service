import * as React from 'react';
import { Dispatch } from 'react';
import { Breadcrumbs, Link } from '@material-ui/core';
import { IAutocompleteResult } from '../../../data/SearchResultData';
import {
  getCategoryName,
  SearchCategories,
} from '../../../components/search/SearchProps';
import { SearchNavContainer } from '../style/SearchStyle';
import { SearchCategoryCount } from './SearchList';
import { ListStyleEnum, ListStyleSwitch } from './ListStyleSwitch';

type SearchListNavProps = {
  data: IAutocompleteResult[];
  listStyle: ListStyleEnum;
  setListStyle: Dispatch<ListStyleEnum>;
};

export function SearchListNav(props: SearchListNavProps) {
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();
    const anchor = (
      (event.currentTarget as HTMLAnchorElement).ownerDocument || document
    ).querySelector(`#search-${event.currentTarget.id}`);

    if (anchor) {
      anchor.scrollIntoView({ behavior: `smooth`, block: `start` });
    }
  };

  let allRows = 0;
  props.data.map(
    (autocompleteResult: IAutocompleteResult) =>
      (allRows += autocompleteResult?.rows ?? 0),
  );

  return (
    <SearchNavContainer>
      <div style={{ flexGrow: 1, marginLeft: 'auto' }}>
        <Breadcrumbs aria-label="breadcrumb">
          {props.data.length > 1 && (
            <Link color="primary" id="result-category-all" href="#">
              {getCategoryName(SearchCategories.all)}
              <SearchCategoryCount rows={allRows} />
            </Link>
          )}
          {props.data.map(
            (autocompleteResult: IAutocompleteResult, key: number) => (
              <Link
                key={key}
                color="primary"
                id={`result-${autocompleteResult.category}`}
                href="#"
                onClick={handleClick}
              >
                {getCategoryName(autocompleteResult?.category ?? null)}
                <SearchCategoryCount rows={autocompleteResult.rows ?? 0} />
              </Link>
            ),
          )}
        </Breadcrumbs>
      </div>
      <ListStyleSwitch
        listStyle={props.listStyle}
        setListStyle={props.setListStyle}
      />
    </SearchNavContainer>
  );
}
