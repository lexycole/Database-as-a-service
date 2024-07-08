import * as React from 'react';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type SubmitFieldProps = {
  submitText: string;
  icon?: IconProp;
  disabled?: boolean;
  [key: string]: any;
};

export function SubmitField(props: SubmitFieldProps) {
  return (
    <Button
      variant="contained"
      size="large"
      color="primary"
      type="submit"
      fullWidth
      disableElevation
      style={{
        color: '#fff',
        maxWidth: 500,
        borderRadius: 10,
        marginTop: '2rem',
        padding: `1rem 2rem`,
        fontWeight: 700,
      }}
      startIcon={props.icon && <FontAwesomeIcon icon={props.icon} />}
      disabled={props.disabled}
      {...props}
    >
      {props.submitText}
    </Button>
  );
}
