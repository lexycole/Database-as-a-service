import * as React from 'react';
import { ChangeEvent, Dispatch } from 'react';
import { Grid, TextField } from '@material-ui/core';
import getLang from '../../../lang/Lang';
import { CountrySelect } from '../../country/CountrySelect';
import { CountryData } from '../../country/CountryProps';
import { CompanyFields } from './CompanyFields';

type AccountDataFieldsProps = {
  isCompany: boolean;
  selectedCountry: CountryData | null;
  setSelectedCountry: Dispatch<CountryData | null>;
  firstName: string;
  setFirstName: Dispatch<string>;
  lastName: string;
  setLastName: Dispatch<string>;
  phoneNumber: string;
  setPhoneNumber: Dispatch<string>;
  companyIdNumber: string;
  setCompanyIdNumber: Dispatch<string>;
  companyName: string;
  setCompanyName: Dispatch<string>;
  twoColLayout?: boolean;
};

export function AccountDataFields(props: AccountDataFieldsProps) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={props.twoColLayout ? 6 : 12}>
        <TextField
          label={getLang(`registration`, `firstName`)}
          id="first-name"
          margin="normal"
          variant="outlined"
          required
          fullWidth
          value={props.firstName}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            props.setFirstName(event.target.value);
          }}
        />
        <TextField
          label={getLang(`registration`, `lastName`)}
          id="last-name"
          margin="normal"
          variant="outlined"
          fullWidth
          value={props.lastName}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            props.setLastName(event.target.value);
          }}
        />
        <TextField
          label={getLang(`registration`, `phoneNumber`)}
          id="phone-number"
          margin="normal"
          variant="outlined"
          fullWidth
          value={props.phoneNumber}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            props.setPhoneNumber(event.target.value);
          }}
        />
      </Grid>
      <Grid item xs={12} md={props.twoColLayout ? 6 : 12}>
        <CountrySelect
          selectedCountry={props.selectedCountry}
          setSelectedCountry={props.setSelectedCountry}
        />
        <CompanyFields
          selectedCountry={props.selectedCountry}
          isCompany={props.isCompany}
          companyName={props.companyName}
          setCompanyName={props.setCompanyName}
          companyIdNumber={props.companyIdNumber}
          setCompanyIdNumber={props.setCompanyIdNumber}
        />
      </Grid>
    </Grid>
  );
}
