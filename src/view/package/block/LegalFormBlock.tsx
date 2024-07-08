import * as React from 'react';
import { Dispatch } from 'react';

import { faStamp } from '@fortawesome/free-solid-svg-icons';
import {
  BlockContainer,
  FilterBlock,
  LegalFormCheckboxDiv,
  LegalFormTopBlock,
} from '../style/PackageStyle';
import getLang from '../../../lang/Lang';
import { FilterValues, LegalFormData } from '../props/PackageDataProps';
import { PackageBlockTitle } from '../component/PackageBlockTitle';
import { LegalFormCheckbox } from '../component/LegalFormCheckbox';
import { appTheme } from '@/storage/ThemeAtom';
import { useRecoilState } from 'recoil';
import LegalFormSkeleton from '@/components/utils/skeleton/LegalFormSkeleton';

import Autocomplete from '@material-ui/lab/Autocomplete';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

type LegalFormBlockProps = {
  legalFormData?: LegalFormData[];
  legalFormDataTop?: LegalFormData[];
  legalForm: FilterValues;
  setLegalForm: Dispatch<FilterValues>;
  packageCountryLoading?: boolean;
};

type LegalFormAccordionProps = {
  legalForm: FilterValues;
  setLegalForm: Dispatch<FilterValues>;
  legalFormOptions: LegalFormData[];
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 250,
      margin: '2rem 1rem',

      '& > * + *': {
        marginTop: theme.spacing(3),
      },
    },
  }),
);

export default function LegalFormMoreOptions(props: LegalFormAccordionProps) {
  const classes = useStyles();
  const { legalForm, setLegalForm, legalFormOptions } = props;

  return (
    <div className={classes.root}>
      <Autocomplete
        fullWidth
        multiple
        id="tags-outlined"
        value={legalForm.filter((l) => typeof l !== 'string') as any}
        onChange={(event: any, newValue: any) => {
          setLegalForm(newValue);
        }}
        options={legalFormOptions}
        getOptionLabel={(option) => option.name}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            fullWidth
            variant="outlined"
            placeholder={getLang('package', 'legalFormOther')}
            label={`${getLang('package', 'legalFormOther')} (${
              props.legalFormOptions.length
            })`}
          />
        )}
      />
    </div>
  );
}

export function LegalFormBlock(props: LegalFormBlockProps) {
  const [theme] = useRecoilState(appTheme);
  const { legalForm, setLegalForm } = props;

  return (
    <FilterBlock t={theme}>
      <PackageBlockTitle
        title={getLang(`package`, `legalForm`)}
        icon={faStamp}
      />
      <BlockContainer>
        {props.legalFormDataTop?.length &&
        props.legalFormDataTop &&
        !props.packageCountryLoading ? (
          <>
            <LegalFormTopBlock>
              {props.legalFormDataTop.map(
                (legalFormData: LegalFormData, key: number) => (
                  <LegalFormCheckboxDiv key={key}>
                    <LegalFormCheckbox
                      legalForm={legalForm}
                      legalFormOption={legalFormData}
                      setLegalForm={setLegalForm}
                    />
                  </LegalFormCheckboxDiv>
                ),
              )}
            </LegalFormTopBlock>

            {props.legalFormData && props.legalFormData.length > 0 && (
              <LegalFormMoreOptions
                legalForm={legalForm}
                setLegalForm={setLegalForm}
                legalFormOptions={props.legalFormData}
              />
            )}
          </>
        ) : (
          <LegalFormSkeleton />
        )}
      </BlockContainer>
    </FilterBlock>
  );
}
