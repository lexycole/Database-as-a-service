import * as React from 'react';
import { ChangeEvent, Dispatch, useState } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import FormControl from '@material-ui/core/FormControl';
import { TextField } from '@material-ui/core';
import getLang from '../../../lang/Lang';

type PasswordFieldProps = {
  id: string;
  label: string;
  password: string;
  setPassword: Dispatch<string>;
  validField: boolean;
  validateField: () => void;
};

export function PasswordField(props: PasswordFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  return (
    <FormControl variant="outlined" margin="normal" fullWidth>
      <TextField
        label={props.label}
        id={props.id}
        type={showPassword ? `text` : `password`}
        value={props.password}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          props.setPassword(event.target.value);
          props.validField === false && props.validateField();
        }}
        error={props.validField === false}
        required
        onBlur={() => props.validateField()}
        variant="outlined"
        helperText={getLang(`form`, `passwordText`)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  );
}
