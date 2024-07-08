import React, { Dispatch } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AutocompleteLink } from '../link/AutocompleteLink';
import getLang from '../../lang/Lang';
import { UcFirst } from '../../formatter/Formatter';
import { ISearchValue } from './MainSearch';
import { SearchCategoryType } from './SearchProps';
import { LocalityData } from '../locality/LocalityProps';
import { SearchResultData } from '../../data/SearchResultData';
import { CountryData } from '../country/CountryProps';
import { AutocompleteItem } from '../../view/search/style/SearchStyle';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { appTheme } from '@/storage/ThemeAtom';
import { useRecoilState } from 'recoil';
import { faCity } from '@fortawesome/free-solid-svg-icons';
import { ICON_COLOR_LIGHT, ICON_COLOR_LIGHT_DARK } from '@/../styles/BaseStyle';

type SearchFieldProps = {
  setSearchValue: Dispatch<string>;
  searchFieldOpen: boolean;
  setSearchFieldOpen: Dispatch<boolean>;
  searchFieldLoading: boolean;
  setSearchFieldLoading: Dispatch<boolean>;
  selectedCountry: CountryData | null;
  selectedCategory: SearchCategoryType;
  selectedLocality: LocalityData | null;
  options: SearchResultData[];
  onBlur?: () => void;
  onFocus?: () => void;
} & ISearchValue;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)': {
        // Default transform is "translate(14px, 20px) scale(1)""
        // This lines up the label with the initial cursor position in the input
        // after changing its padding-left.
        transform: 'translate(34px, 20px) scale(1);',
      },
      '&:focus': {
        background: 'yellow',
      },
    },
    inputRoot: {
      color: 'purple',
      // This matches the specificity of the default styles at https://github.com/mui-org/material-ui/blob/v4.11.3/packages/material-ui-lab/src/Autocomplete/Autocomplete.js#L90
      '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child': {
        // Default left padding is 6px
        paddingLeft: 26,
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'green',
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'red',
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        background: 'yellow !important',
      },
    },
    paper: {
      minHeight: 60,
      minWidth: 300,
      marginTop: '20px',
      borderRadius: '10px',
      boxShadow: '0px 2px 7px #0000002a',
      transform: 'translate(14px, 5px) scale(1)',
    },
    option: {
      display: 'flex',
      padding: 0,
      width: '100%',
      minHeight: '60px',
      borderTop:
        theme.palette.type === 'light' ? '1px solid #e8e8e8' : '1px solid #555',
    },
  }),
);

export default function SearchField(props: SearchFieldProps) {
  const [theme] = useRecoilState(appTheme);
  const classes = useStyles();

  const handleSearch = (event, newInputValue: string) => {
    props.setSearchValue(newInputValue);
  };

  return (
    <>
      <Autocomplete
        id="search-field"
        onOpen={() => {
          props.setSearchFieldOpen(true);
        }}
        onClose={() => {
          props.setSearchFieldOpen(false);
        }}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        style={{ minWidth: 200, width: '100%' }}
        open={props.options.length > 0 && props.searchFieldOpen} // todo vz temporary 0, later if length 1, go to detail
        inputValue={props.searchValue}
        filterOptions={(options) => options}
        // @ts-ignore
        groupBy={(option) => option.categoryName}
        onInputChange={handleSearch}
        getOptionSelected={(option, value) => option.name === value.name}
        options={props.options}
        loading={props.searchFieldLoading}
        freeSolo
        classes={classes}
        renderOption={(option) => (
          <AutocompleteItem t={theme} style={{ padding: 0, width: '100%' }}>
            <AutocompleteLink {...option} />
          </AutocompleteItem>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            // label={getLang(`search`, `searchFieldLabel`)}
            autoFocus
            placeholder={getLang(
              `search`,
              `searchFieldPlaceholder${UcFirst(props.selectedCategory ?? '')}`,
            )}
            InputProps={{
              ...params.InputProps,
              className: 'search-field-text-input',
              startAdornment: (
                <FontAwesomeIcon
                  icon={faCity}
                  style={{
                    fontSize: '1.4rem',
                    color: theme ? ICON_COLOR_LIGHT : ICON_COLOR_LIGHT_DARK,
                  }}
                />
              ),
              endAdornment: (
                <>
                  {/* {props.searchFieldLoading ? ( */}
                  {/* <CircularProgress
                      size={35}
                      // disableShrink={true} 
                      thickness={4}
                      style={{
                        color: theme ? ICON_COLOR_LIGHT : ICON_COLOR_LIGHT_DARK,
                      }}
                    /> */}
                  {/* ) : null} */}
                  {!props.searchFieldLoading && params.InputProps.endAdornment}
                </>
              ),
              disableUnderline: true,
            }}
          />
        )}
      />
      {props.searchFieldLoading && (
        <CircularProgress
          size={20}
          thickness={4}
          style={{
            marginLeft: '-10px',
            color: theme ? ICON_COLOR_LIGHT : ICON_COLOR_LIGHT_DARK,
          }}
        />
      )}
    </>
  );
}
