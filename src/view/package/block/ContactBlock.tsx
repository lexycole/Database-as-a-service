import * as React from 'react';
import { Dispatch } from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import getLang from '../../../lang/Lang';
import { BlockContainer, FilterBlock } from '../style/PackageStyle';
import {
  ContactType,
  ContactTypes,
} from '../../../components/contact/ContactType';
import { PackageBlockTitle } from '../component/PackageBlockTitle';
import { modifyCheckboxValue } from '../PackageHelper';
import { appTheme } from '@/storage/ThemeAtom';
import { useRecoilState } from 'recoil';
import { faPhoneAlt } from '@fortawesome/pro-solid-svg-icons';

type ContactProps = {
  contactType: ContactType[];
  setContactType: Dispatch<ContactType[]>;
};

export function ContactBlock(props: ContactProps) {
  const [theme] = useRecoilState(appTheme);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checkbox = event.currentTarget;

    const values: ContactType[] = [...props.contactType];

    // @ts-ignore
    props.setContactType(modifyCheckboxValue(checkbox, values));
  };

  return (
    <FilterBlock t={theme}>
      <PackageBlockTitle
        icon={faPhoneAlt}
        title={getLang(`package`, `contact`)}
      />
      <BlockContainer>
        <div
          style={{
            maxWidth: 300,
            display: 'flex',
            marginRight: 'auto',
            justifyContent: 'flex-start',
          }}
        >
          {Object.values(ContactTypes).map(
            (contactType: ContactType, key: number) => (
              <FormControlLabel
                key={key}
                value="start"
                control={
                  <Checkbox
                    checked={props.contactType.includes(contactType)}
                    onChange={handleChange}
                    value={contactType}
                    color="primary"
                    id={`contact-type-${contactType}`}
                    inputProps={{ 'aria-label': `primary checkbox` }}
                  />
                }
                label={getLang(`package`, contactType)}
                labelPlacement="end"
              />
            ),
          )}
        </div>

        {/*
         //todo vz for future use - will not be used yet
        */}

        {/* <BlockHeaderTitle style={{ margin: '1rem auto', textAlign: 'left' }}> */}
        {/*  Vlastnosti www stranek */}
        {/* </BlockHeaderTitle> */}

        {/* <ContactBottomFormContainer> */}
        {/*  <FormControl variant="outlined" style={{ marginRight: '1.3rem' }}> */}
        {/*    <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
        {/*    <Select */}
        {/*      style={{ minWidth: 200 }} */}
        {/*      labelId="demo-simple-select-label" */}
        {/*      id="demo-simple-select" */}
        {/*      label="Age" */}
        {/*      // value={age} */}
        {/*      // onChange={handleChange} */}
        {/*    > */}
        {/*      <MenuItem value={10}>Ten</MenuItem> */}
        {/*      <MenuItem value={20}>Twenty</MenuItem> */}
        {/*      <MenuItem value={30}>Thirty</MenuItem> */}
        {/*    </Select> */}
        {/*  </FormControl> */}

        {/*  <FormControlLabel */}
        {/*    value="start" */}
        {/*    control={ */}
        {/*      <Checkbox */}
        {/*        // checked={props.addressType.includes(value)} */}
        {/*        // onChange={handleChange} */}
        {/*        // value={value} */}
        {/*        color="primary" */}
        {/*        // id={`address-type-${value}`} */}
        {/*        inputProps={{ 'aria-label': `primary checkbox` }} */}
        {/*      /> */}
        {/*    } */}
        {/*    label="E-shop" */}
        {/*    labelPlacement="end" */}
        {/*  /> */}

        {/*  <FormControl variant="outlined" style={{ marginRight: '1.3rem' }}> */}
        {/*    <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
        {/*    <Select */}
        {/*      style={{ minWidth: 250 }} */}
        {/*      labelId="demo-simple-select-label" */}
        {/*      id="demo-simple-select" */}
        {/*      label="Age" */}
        {/*      // value={age} */}
        {/*      // onChange={handleChange} */}
        {/*    > */}
        {/*      <MenuItem value={10}>Ten</MenuItem> */}
        {/*      <MenuItem value={20}>Twenty</MenuItem> */}
        {/*      <MenuItem value={30}>Thirty</MenuItem> */}
        {/*    </Select> */}
        {/*  </FormControl> */}
        {/* </ContactBottomFormContainer> */}
      </BlockContainer>
    </FilterBlock>
  );
}
