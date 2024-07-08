import * as React from 'react';
import { Dispatch } from 'react';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { Checkbox, FormControlLabel, Grid } from '@material-ui/core';
import {
  BlockContainer,
  BlockHeaderTitle,
  FilterBlock,
} from '../style/PackageStyle';
import getLang from '../../../lang/Lang';
import {
  AddressTypes,
  FilterValues,
  LocalityTreeOptions,
} from '../props/PackageDataProps';
import { useRecoilState } from 'recoil';
import { appTheme } from '@/storage/ThemeAtom';
import { UcFirst } from '../../../formatter/Formatter';
import { modifyCheckboxValue } from '../PackageHelper';
import { TreeView } from '../../../components/tree/TreeView';
import { PackageBlockTitle } from '../component/PackageBlockTitle';
import { CountryData } from '../../../components/country/CountryProps';
import TreeViewSkeleton from '@/components/utils/skeleton/TreeViewSkeleton';

type LocalityBlockProps = {
  locality: FilterValues;
  setLocality: Dispatch<FilterValues>;
  localityOptions: LocalityTreeOptions[] | any;
  addressType: FilterValues;
  setAddressType: Dispatch<FilterValues>;
  selectedCountry: CountryData | null;
  packageCountryLoading: boolean;
};

type AddressTypeProps = {
  addressType: FilterValues;
  setAddressType: Dispatch<FilterValues>;
};

function AddressTypeBlock(props: AddressTypeProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checkbox = event.currentTarget;

    props.setAddressType(modifyCheckboxValue(checkbox, props.addressType));
  };

  return (
    <div>
      {Object.values(AddressTypes).map((value: string, key: number) => (
        <FormControlLabel
          key={key}
          value="start"
          control={
            <Checkbox
              checked={props.addressType.includes(value)}
              onChange={handleChange}
              value={value}
              color="primary"
              id={`address-type-${value}`}
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          }
          label={getLang('package', `addressType${UcFirst(value)}`)}
          labelPlacement="end"
        />
      ))}
    </div>
  );
}

export function LocalityBlock(props: LocalityBlockProps) {
  const [theme] = useRecoilState(appTheme);
  const { locality, setLocality } = props;

  const title: string =
    props.selectedCountry && props.selectedCountry.hasStates
      ? getLang('package', 'states')
      : getLang('package', 'locality');

  return (
    <FilterBlock t={theme}>
      <PackageBlockTitle title={title} icon={faMapMarkedAlt} />
      <BlockContainer>
        <Grid container justify="space-around">
          <Grid item xs={12}>
            {props.localityOptions?.length ||
            (props.localityOptions?.length < 0 &&
              props.localityOptions &&
              !props.packageCountryLoading) ? (
              <TreeView
                options={props.localityOptions}
                checked={locality}
                setChecked={setLocality}
              />
            ) : (
              <div style={{ margin: '2rem 0' }}>
                <TreeViewSkeleton rows={4} />
              </div>
            )}
          </Grid>

          {/*
          //todo vz should replace icons - expand all / collapse all
          */}

          {/* <Grid item xs={12} md={5}> */}
          {/*  <Button variant="outlined" style={{ margin: 10 }}> */}
          {/*    <AddCircleOutlineIcon /> */}
          {/*    Vise Moznosti */}
          {/*  </Button> */}
          {/*  <Button variant="outlined" style={{ margin: 10 }}> */}
          {/*    <RemoveCircleOutlineIcon /> */}
          {/*    Mene Monznosti */}
          {/*  </Button> */}
          {/* </Grid> */}
        </Grid>

        <BlockHeaderTitle>
          {getLang('package', 'addressTypeLabel')} :
        </BlockHeaderTitle>
        <AddressTypeBlock
          addressType={props.addressType}
          setAddressType={props.setAddressType}
        />
      </BlockContainer>
    </FilterBlock>
  );
}
