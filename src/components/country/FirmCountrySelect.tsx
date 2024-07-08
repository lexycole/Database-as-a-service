/* eslint-disable max-lines */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Dispatch, useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useRouter } from 'next/router';
import {
  CircularProgress,
  makeStyles,
  PropTypes,
  createStyles,
  Theme,
  Size,
  Paper,
} from '@material-ui/core';
import { useRecoilState } from 'recoil';
import getLang from '../../lang/Lang';
import { countryToFlag } from '../address/AddressValue';
import {
  CountryData,
  CountryOption,
  sortCountriesByContinent,
} from './CountryProps';
import { firmCountryLoader } from '../../data/country/FirmCountryLoader';
import { firmCountriesState } from '../../storage/SearchAtom';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { getCurrentLanguage } from '@/storage/LanguageStorage';
import { Languages } from '../locale/LocaleProps';

type FirmCountrySelectProps = {
  outlined?: boolean;
  dropDownWidth?: string;
  selectedCountry: CountryData | null;
  setSelectedCountry: Dispatch<CountryData>;
  margin?: PropTypes.Margin;
  onBlur?: () => void;
  onFocus?: () => void;
  searchOnTop?: boolean;
};

export function getDefaultCountries(): CountryData[] {
  const countryCZ: CountryData = {
    id: `h~L2AbXDLb0l`,
    code: `CZ`,
    name: `Česká republika`,
    nameUn: 'Czech Republic',
    continent: `EU`,
    hasStates: false,
  };
  const countrySK: CountryData = {
    id: `h~WDvdaLqN20`,
    code: `SK`,
    name: `Slovensko`,
    nameUn: 'Slovakia',
    continent: `EU`,
    hasStates: true,
  };
  return [countryCZ, countrySK];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      minHeight: 60,
      width: 300,
      marginTop: '20px',
      marginLeft: '-3.5rem',
      borderRadius: '10px',
      boxShadow: '0px 2px 7px #0000002a',
      transform: 'translate(14px, 5px) scale(1)',
    },
    option: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      fontSize: '13px',
      borderTop:
        theme.palette.type === 'light' ? '1px solid #e8e8e8' : '1px solid #555',
    },
  }),
);

export function FirmCountrySelect(props: FirmCountrySelectProps) {
  // fix for select language mutations
  const currentLang = (getCurrentLanguage() ?? Languages.cs) as Languages;

  // fix for select language mutations

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [countries, setCountries] = useRecoilState(firmCountriesState);
  const loading = countries === null;

  let currentCountry: string = useRouter().locale ?? ``;

  // country code correction
  if (currentCountry === `cs`) {
    currentCountry = `cz`;
  }

  useEffect(() => {
    if (countries !== null) {
      const defaultCountry: CountryData | undefined = countries.find(
        (item: CountryData) => item.code.toLowerCase() === currentCountry,
      );
      if (defaultCountry) {
        props.setSelectedCountry(defaultCountry);
      }
    } else {
      firmCountryLoader()
        .then(({ data }) => {
          const options: CountryData[] = sortCountriesByContinent(
            data.firmCountry,
          ).map((country) => ({
            ...country,
            continentName: getLang(
              `continent`,
              country.continent.toLowerCase(),
              Languages.cs,
            ),
            continentNameUn: getLang(
              `continent`,
              country.continent.toLowerCase(),
              Languages.en,
            ),
          }));

          setCountries(options);
        })
        .catch(() => {
          setCountries(
            sortCountriesByContinent(
              getDefaultCountries().map((country) => ({
                ...country,
                continentName: getLang(
                  `continent`,
                  country.continent.toLowerCase(),
                  Languages.cs,
                ),
                continentNameUn: getLang(
                  `continent`,
                  country.continent.toLowerCase(),
                  Languages.en,
                ),
              })),
            ),
          );
        });
    }
  }, [loading, currentLang]);

  return (
    <Autocomplete
      id="country-select"
      onBlur={props.onBlur}
      onFocus={props.onFocus}
      loading={loading}
      disabled={loading}
      value={props.selectedCountry ?? undefined}
      style={{
        minWidth: 200,
        width: '100%',
      }}
      // eslint-disable-next-line react/no-unstable-nested-components
      PaperComponent={({ children }) => (
        <Paper
          style={{
            // marginLeft: '-6px',
            marginTop: '29px',
            width: `${props.dropDownWidth || '113%'}`,
          }}
        >
          {children}
        </Paper>
      )}
      options={countries !== null ? countries : []}
      // disableClearable={props.selectedCountry !== null}
      disableClearable
      groupBy={(option) =>
        (currentLang === Languages.cs
          ? option.continentName
          : option.continentNameUn) ?? ``
      }
      classes={{ paper: classes.paper, option: classes.option }}
      fullWidth
      popupIcon={
        <ExpandMoreIcon style={{ fontWeight: 900, fontSize: '2.3rem' }} />
      }
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      onChange={(event, newValue: CountryData | null) => {
        if (newValue) {
          props.setSelectedCountry(newValue);
        }
      }}
      autoHighlight
      getOptionLabel={(option) =>
        props.searchOnTop
          ? `${countryToFlag(option.code)} ${option.code}`
          : `${countryToFlag(option.code)} ${
              currentLang === Languages.cs ? option.name : option.nameUn
            }`
      }
      renderOption={(option) =>
        props.searchOnTop
          ? `${countryToFlag(option.code)} ${option.code}`
          : CountryOption(option, currentLang)
      }
      getOptionSelected={(option: CountryData, value: CountryData) =>
        option.id === value.id
      }
      renderInput={(params) =>
        props.outlined ? (
          <TextField
            {...params}
            size={'large' as Size}
            label={getLang(`search`, `chooseCountry`)}
            margin={props.margin}
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              className: 'search-field-text-input',
            }}
          />
        ) : (
          <TextField
            {...params}
            placeholder={getLang(`search`, `chooseCountry`)}
            margin={props.margin}
            style={{ width: props.searchOnTop ? 120 : '100%' }}
            InputProps={{
              ...params.InputProps,
              className: 'search-field-text-input',
              endAdornment: (
                <>
                  {loading ? (
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
