import * as React from 'react';
import { Dispatch } from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { FilterValues, LegalFormData } from '../props/PackageDataProps';
import { modifyCheckboxValue } from '../PackageHelper';

type LegalFormCheckboxProps = {
  legalForm: FilterValues;
  legalFormOption: LegalFormData;
  setLegalForm: Dispatch<FilterValues>;
};

export function LegalFormCheckbox(props: LegalFormCheckboxProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checkbox = event.currentTarget;

    props.setLegalForm(modifyCheckboxValue(checkbox, legalForm));
  };

  const { legalForm, legalFormOption } = props;
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={legalForm.includes(legalFormOption.code)}
          onChange={handleChange}
          id={`legal-form-${legalFormOption.code}`}
          color="primary"
          value={legalFormOption.code}
        />
      }
      label={legalFormOption.name}
      labelPlacement="end"
    />
  );
}
