import * as React from 'react';
import { ChangeEvent, Dispatch } from 'react';
import { TextField } from '@material-ui/core';
import getLang from '../../../lang/Lang';

type EmailFieldProps = {
  email: string;
  setEmail: Dispatch<string>;
  validField: boolean;
  validateField: () => void;
};

export function EmailField(props: EmailFieldProps) {
  const { email, setEmail, validField } = props;
  return (
    <TextField
      error={validField === false}
      helperText={validField === false ? getLang(`form`, `emailText`) : ``}
      label={getLang(`form`, `email`)}
      id="email"
      required
      margin="normal"
      variant="outlined"
      fullWidth
      value={email}
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value);
        validField === false && props.validateField();
      }}
      onBlur={() => {
        props.validateField();
      }}
    />
  );
}
