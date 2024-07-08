import * as React from 'react';
import { ChangeEvent, Dispatch, useState } from 'react';
import { TextField } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import getLang from '../../../lang/Lang';
import { firmNameLoader } from '../../../data/firm/FirmNameLoader';
import { CountryData } from '../../country/CountryProps';

type CompanyFieldsProps = {
  lgGrid?: boolean;
  isCompany: boolean;
  selectedCountry: CountryData | null;
  companyIdNumber: string;
  setCompanyIdNumber: Dispatch<string>;
  companyName: string;
  setCompanyName: Dispatch<string>;
};

export function CompanyFields(props: CompanyFieldsProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [loadedIdNumber, setLoadedIdNumber] = useState<string>('');

  function handleBlur(event) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const idNumber = event.target.value;
    if (
      idNumber &&
      loading === false &&
      loadedIdNumber !== idNumber &&
      props.selectedCountry
    ) {
      setLoading(true);
      firmNameLoader(idNumber, props.selectedCountry)
        .then(({ data }) => {
          setLoading(false);
          setLoadedIdNumber(idNumber);
          props.setCompanyName(data.firmName);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }

  return (
    <>
      {props.isCompany && (
        <>
          <TextField
            label={getLang(`registration`, `companyId`)}
            id="company-id"
            margin="normal"
            variant="outlined"
            onBlur={handleBlur}
            value={props.companyIdNumber}
            fullWidth
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              props.setCompanyIdNumber(event.target.value);
            }}
            InputProps={{
              endAdornment: (
                <>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                </>
              ),
            }}
          />
          <TextField
            label={getLang(`registration`, `companyName`)}
            id="company-name"
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: props.companyName !== null && props.companyName !== ``,
            }}
            fullWidth
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              props.setCompanyName(event.target.value);
            }}
            value={props.companyName}
          />
        </>
      )}
    </>
  );
}
