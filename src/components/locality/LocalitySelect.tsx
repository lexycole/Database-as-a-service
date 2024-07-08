import * as React from 'react';
import { Dispatch, useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {
  CircularProgress,
  PropTypes,
  TextField,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core';
import {
  AutocompleteLocalityData,
  LocalityData,
  LocalityTypes,
} from './LocalityProps';
import { CountryData } from '../country/CountryProps';
import { localityLoader } from '../../data/locality/LocalityLoader';
import useDebounce from '../search/SearchDebounce';
import getLang from '../../lang/Lang';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { ICON_COLOR_LIGHT, ICON_COLOR_LIGHT_DARK } from '@/../styles/BaseStyle';
import { appTheme } from '@/storage/ThemeAtom';
import { useRecoilState } from 'recoil';

function getLocalityName(code: LocalityTypes): string {
  return getLang(`locality`, code);
}

function prepareOptions(
  localityResult: AutocompleteLocalityData,
): LocalityData[] {
  const options: LocalityData[] = [];
  const localityKeys = Object.keys(localityResult);
  localityKeys.map((type: string) => {
    localityResult[type].data.map((item: LocalityData) => {
      if (type in LocalityTypes) {
        item.type = LocalityTypes[type];
        item.typeName = getLocalityName(LocalityTypes[type]);
        options.push(item);
      }
    });
  });

  return options;
}

export function LocalityOption(props: LocalityData) {
  return (
    <span style={{ fontSize: '.9rem', fontWeight: 700 }}>
      {props.name +
        (props.district !== undefined ? ` (${props.district})` : ``)}
    </span>
  );
}

type LocalitySelectProps = {
  selectedCountry: CountryData | null;
  selectedLocality: LocalityData | null;
  setSelectedLocality: Dispatch<LocalityData>;
  localityOptions: LocalityData[];
  setLocalityOptions: Dispatch<LocalityData[]>;
  margin?: PropTypes.Margin;
  outlined?: boolean;
  onBlur?: () => void;
  onFocus?: () => void;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      minHeight: 60,
      width: 280,
      marginTop: '23px',
      marginLeft: '-3.5rem',
      borderRadius: '10px',
      boxShadow: '0px 2px 7px #0000002a',
      transform: 'translate(14px, 5px) scale(1)',
    },
    option: {
      display: 'flex',
      width: '100%',
      fontSize: '13px',
      borderTop:
        theme.palette.type === 'light' ? '1px solid #e8e8e8' : '1px solid #555',
    },
  }),
);

export default function LocalitySelect(props: LocalitySelectProps) {
  const classes = useStyles();
  const [theme] = useRecoilState(appTheme);
  const [localityTerm, setLocalityTerm] = useState(``);
  const [autocompleteOpen, setAutocompleteOpen] = useState(false);
  const [autocompleteLoading, setAutocompleteLoading] = useState(false);

  const debouncedSearchTerm = useDebounce(localityTerm);

  React.useEffect(() => {
    if (autocompleteLoading) {
      return;
    }

    if (debouncedSearchTerm) {
      setAutocompleteLoading(true);
      localityLoader(
        debouncedSearchTerm,
        props?.selectedCountry?.code.toLowerCase(),
      )
        .then(({ data }) => {
          setAutocompleteLoading(false);
          props.setLocalityOptions(prepareOptions(data));
        })
        .catch(() => {
          setAutocompleteLoading(false);
        });
    }
  }, [debouncedSearchTerm]);

  return (
    <Autocomplete
      id="locality-field"
      onBlur={props.onBlur}
      onFocus={props.onFocus}
      style={{ minWidth: 200, width: '100%' }}
      value={props.selectedLocality}
      onOpen={() => {
        setAutocompleteOpen(true);
      }}
      onClose={() => {
        setAutocompleteOpen(false);
      }}
      open={props.localityOptions.length > 0 && autocompleteOpen}
      inputValue={localityTerm}
      filterSelectedOptions={false}
      groupBy={(option: LocalityData) => option.typeName}
      onInputChange={(event, newInputValue: string) => {
        setLocalityTerm(newInputValue);
      }}
      classes={{ paper: classes.paper, option: classes.option }}
      // @ts-ignore
      onChange={(event, newValue: LocalityData | null) => {
        props.setSelectedLocality(newValue as LocalityData);
      }}
      getOptionSelected={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      options={props.localityOptions}
      fullWidth
      loading={autocompleteLoading}
      freeSolo
      renderOption={(option: LocalityData) => <LocalityOption {...option} />}
      renderInput={(params) =>
        props.outlined ? (
          <TextField
            {...params}
            fullWidth
            size="medium"
            variant="outlined"
            margin={props.margin}
            placeholder={getLang(`search`, `searchLocality`)}
            InputProps={{
              ...params.InputProps,
              className: 'search-field-text-input',
              // startAdornment: <FontAwesomeIcon icon={faMapMarkerAlt} />,
              startAdornment: (
                <LocationOnIcon
                  style={{
                    fontSize: '1.8rem',
                    color: theme ? ICON_COLOR_LIGHT : ICON_COLOR_LIGHT_DARK,
                  }}
                />
              ),
              endAdornment: (
                <>
                  {autocompleteLoading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        ) : (
          <TextField
            {...params}
            size="small"
            placeholder={getLang(`search`, `searchLocality`)}
            margin={props.margin}
            InputProps={{
              ...params.InputProps,
              className: 'search-field-text-input',
              // startAdornment: <FontAwesomeIcon icon={faMapMarkerAlt} />,
              startAdornment: (
                <LocationOnIcon
                  style={{
                    fontSize: '1.8rem',
                    color: theme ? ICON_COLOR_LIGHT : ICON_COLOR_LIGHT_DARK,
                  }}
                />
              ),
              endAdornment: (
                <>
                  {autocompleteLoading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              ),
              disableUnderline: true,
            }}
          />
        )
      }
    />
  );
}
