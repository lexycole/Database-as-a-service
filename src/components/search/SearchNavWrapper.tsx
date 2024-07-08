import * as React from 'react';
import { Dispatch } from 'react';

import { withStyles, Theme } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { CategoryNavContainer } from '../../view/search/style/SearchStyle';
import {
  AvailableCategory,
  CategoryItem,
  getCategoryName,
  SearchCategoryType,
} from './SearchProps';

export type SearchWrapperProps = {
  selectedCategory: SearchCategoryType;
  setSelectedCategory: Dispatch<SearchCategoryType>;
};

const CustomTab = withStyles((theme: Theme) => ({
  root: {
    fontSize: '1.263rem',
    fontWeight: 800,
    textTransform: 'none',
    margin: '0 1rem',
    color: theme.palette.type === 'dark' ? '#FFF' : '#111',
  },
}))(Tab);

export function SearchNavWrapper(props: SearchWrapperProps) {
  const handleChange = (
    event: React.ChangeEvent<{}>,
    newValue: SearchCategoryType,
  ) => {
    props.setSelectedCategory(newValue);
  };

  return (
    <CategoryNavContainer>
      <Tabs
        value={props.selectedCategory}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        {AvailableCategory.map(
          (item: CategoryItem, key: number) =>
            item.enabled && (
              <CustomTab
                key={key}
                label={getCategoryName(item.category)}
                value={item.category}
              />
            ),
        )}
      </Tabs>
    </CategoryNavContainer>
  );
}
