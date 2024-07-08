import * as React from 'react';
import { Dispatch, useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Paper } from '@material-ui/core';
import { useRecoilState } from 'recoil';
import getLang from '../../lang/Lang';
import { countryToFlag } from '../address/AddressValue';
import {
  CountryData,
  CountryOption,
  sortCountriesByContinent,
} from './CountryProps';
import { countryLoader } from '../../data/country/CountryLoader';
import { getDefaultCountries } from './FirmCountrySelect';
import { countriesState } from '../../storage/AppAtom';
import { getCurrentLanguage } from '@/storage/LanguageStorage';
import { Languages } from '../locale/LocaleProps';

type CountrySelectProps = {
  selectedCountry: CountryData | null;
  setSelectedCountry: Dispatch<CountryData | null>;
};

export function CountrySelect(props: CountrySelectProps) {
  // fix for select language mutations
  const currentLang = (getCurrentLanguage() ?? Languages.cs) as Languages;

  // fix for select language mutations
  const [open, setOpen] = useState(false);
  const [countries, setCountries] = useRecoilState(countriesState);
  const loading = countries === null;

  useEffect(() => {
    countryLoader()
      .then(({ data }) => {
        const options: CountryData[] = sortCountriesByContinent(
          data.localityCountry,
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
  }, [loading, currentLang]);

  return (
    <Autocomplete
      id="country-select"
      options={countries !== null ? countries : []}
      loading={loading}
      disabled={loading}
      value={props.selectedCountry}
      disableClearable={props.selectedCountry !== null}
      groupBy={(option) =>
        (currentLang === Languages.cs
          ? option.continentName
          : option.continentNameUn) ?? ``
      }
      open={open}
      fullWidth
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      onChange={(event, newValue: CountryData | null) => {
        props.setSelectedCountry(newValue);
      }}
      autoHighlight
      getOptionLabel={(option) =>
        `${countryToFlag(option.code)} ${
          currentLang === Languages.cs ? option.name : option.nameUn
        }`
      }
      // eslint-disable-next-line react/no-unstable-nested-components
      PaperComponent={({ children }) => (
        <Paper
          style={{
            // marginLeft: '-6px',
            marginTop: '29px',
            width: '100%',
          }}
        >
          {children}
        </Paper>
      )}
      renderOption={(option) => CountryOption(option, currentLang)}
      getOptionSelected={(option: CountryData, value: CountryData) =>
        option.id === value.id
      }
      renderInput={(params) => (
        <TextField
          {...params}
          label={getLang(`search`, `chooseCountry`)}
          variant="outlined"
          margin="normal"
          inputProps={{
            ...params.inputProps,
            autoComplete: `new-password`, // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}
