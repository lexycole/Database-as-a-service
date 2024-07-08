import * as React from 'react';
import { ChangeEvent, Dispatch } from 'react';
import { TextField } from '@material-ui/core';
import getLang from '../../../lang/Lang';

type SearchTermFieldProps = {
  name: string;
  setName: Dispatch<string>;
  label: string;
  validField: boolean;
  validateField: () => void;
};

export function SearchTermField(props: SearchTermFieldProps) {
  return (
    <TextField
      label={props.label}
      id="email"
      required
      margin="normal"
      variant="outlined"
      fullWidth
      value={props.name}
      error={props.validField === false}
      helperText={
        props.validField === false ? getLang(`form`, `searchTermText`) : ``
      }
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        props.setName(event.currentTarget.value);
        props.validField === false && props.validateField();
      }}
      onBlur={() => {
        props.validateField();
      }}
    />
  );
}
