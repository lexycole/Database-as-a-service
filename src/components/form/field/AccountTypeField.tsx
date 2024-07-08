import * as React from 'react';
import { Dispatch } from 'react';
import {
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import getLang from '../../../lang/Lang';
import {
  PRIMARY_TEXT_COLOR,
  PRIMARY_TEXT_COLOR_DARK,
} from '../../../../styles/BaseStyle';
import { appTheme } from '@/storage/ThemeAtom';
import { useRecoilState } from 'recoil';

type AccountTypeFieldProps = {
  isCompany: boolean;
  setCompany: Dispatch<boolean>;
};

export function AccountTypeField(props: AccountTypeFieldProps) {
  const [theme] = useRecoilState(appTheme);

  const handleChange = (event: any) => {
    props.setCompany(event.target.value === `company`);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
      <FormControl style={{ display: `inline-block` }}>
        <FormLabel
          style={{
            marginRight: `20px`,
            display: `inline-block`,
            fontWeight: 800,
            color: theme ? PRIMARY_TEXT_COLOR : PRIMARY_TEXT_COLOR_DARK,
          }}
        >
          {getLang(`registration`, `accountType`)}
        </FormLabel>
        <RadioGroup
          row
          aria-label="position"
          name="position"
          defaultValue="top"
          style={{ display: `inline-block` }}
        >
          <FormControlLabel
            value="personal"
            control={<Radio color="primary" />}
            label={getLang(`registration`, `accountPersonal`)}
            labelPlacement="end"
            defaultChecked
            checked={!props.isCompany}
            onChange={handleChange}
          />
          <FormControlLabel
            value="company"
            control={<Radio color="primary" />}
            label={getLang(`registration`, `accountCompany`)}
            labelPlacement="end"
            checked={props.isCompany}
            onChange={handleChange}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
