import * as React from 'react';
import { Dispatch } from 'react';
import {
  AvailableCategory,
  CategoryItem,
  getCategoryName,
  SearchCategoryType,
} from './SearchProps';
import getLang from '@/lang/Lang';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles, createStyles, Theme } from '@material-ui/core';

export type SearchWrapperProps = {
  selectedCategory: SearchCategoryType;
  setSelectedCategory: Dispatch<SearchCategoryType>;
  onBlur?: () => void;
  onFocus?: () => void;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      minHeight: 60,
      marginTop: '20px',
      marginLeft: '-1.3rem',
      borderRadius: '10px',
      boxShadow: '0px 2px 7px #0000002a',
      transform: 'translate(14px, 5px) scale(1)',
    },
    option: {
      display: 'flex',
      width: '100%',
      padding: '10px',
      borderTop:
        theme.palette.type === 'light' ? '1px solid #e8e8e8' : '1px solid #555',
    },
  }),
);

export function CategorySearch({
  selectedCategory,
  setSelectedCategory,
  ...props
}: SearchWrapperProps) {
  const classes = useStyles();

  const availableCategories = AvailableCategory.filter(
    (item) => item.enabled,
  ).map((item: CategoryItem) => item.category);

  return (
    <Autocomplete
      id="category-search-field"
      fullWidth
      onBlur={props.onBlur}
      onFocus={props.onFocus}
      style={{ minWidth: 150, padding: '1px solid #333' }}
      options={availableCategories}
      value={selectedCategory as any}
      classes={{ paper: classes.paper, option: classes.option }}
      getOptionLabel={(option) => getCategoryName(option)}
      autoHighlight
      disableClearable
      popupIcon={
        <ExpandMoreIcon style={{ fontWeight: 900, fontSize: '2.3rem' }} />
      }
      renderOption={(option) => (
        <div
          style={{
            fontWeight: 800,
            fontSize: '14px',
            textTransform: 'capitalize',
          }}
        >
          {getCategoryName(option)}
        </div>
      )}
      onChange={(event, newValue: SearchCategoryType) => {
        if (newValue) {
          setSelectedCategory(newValue);
        }
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          size="small"
          placeholder={`${getLang('search', 'categoryLabel')}`}
          fullWidth
          InputProps={{
            ...params.InputProps,
            className: 'search-field-text-input',
            // startAdornment: <FontAwesomeIcon icon={faThList} size="1x" />,
            disableUnderline: true,
          }}
        />
      )}
    />
  );
}
