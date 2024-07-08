import * as React from 'react';
import { Grid } from '@material-ui/core';
import { FirmData } from '../FirmProps';
import {
  FirmAddressRow,
  FirmAddressValue,
  FirmBasicContainer,
  FirmDetailBox,
  FirmNameTitle,
  FirmTitleContainer,
  MapButtons,
  RegionAddressValue,
} from '../style/FirmStyle';
import {
  AddressValue,
  CountryValue,
} from '../../../components/address/AddressValue';
import { AddressData } from '../../../components/address/AddressProps';
import { MapButton } from '../../../components/address/MapButton';
import { RouteButton } from '../../../components/address/RouteButton';
import { appTheme } from '@/storage/ThemeAtom';
import { useRecoilState } from 'recoil';
import { FirmTagWrapper } from '@/view/firm/detail/FirmTagWrapper';
import { FirmIdNumberContainer } from '@/view/firm/detail/FirmIdNumberContainer';

export function AddressRow(props: { address: AddressData }) {
  const [theme] = useRecoilState(appTheme);

  return (
    <FirmAddressRow>
      <FirmAddressValue>
        <CountryValue addressData={props.address} />
        <RegionAddressValue> {props.address.region}</RegionAddressValue>
        <MapButtons>
          <MapButton theme={Boolean(theme)} addressData={props.address} />
          <RouteButton theme={Boolean(theme)} addressData={props.address} />
        </MapButtons>
      </FirmAddressValue>
      <FirmAddressValue style={{ marginTop: '1rem' }}>
        <AddressValue addressData={props.address} />
      </FirmAddressValue>
    </FirmAddressRow>
  );
}

export function FirmBasic(props: { firmData: FirmData }) {
  const [theme] = useRecoilState(appTheme);

  const { visible } = props.firmData;

  return (
    <FirmDetailBox id="firm-basic">
      <FirmTitleContainer>
        <Grid container>
          <Grid item xs={12} md={6}>
            <FirmBasicContainer>
              {/* <TruncateText title={props.firmData.name}>
              </TruncateText> */}
              <FirmNameTitle>{props.firmData.name}</FirmNameTitle>
            </FirmBasicContainer>
            <FirmTagWrapper firmData={props.firmData} />
            {props.firmData.address && visible && (
              <AddressRow address={props.firmData.address} />
            )}
          </Grid>
          <FirmIdNumberContainer firmData={props.firmData} />
        </Grid>
      </FirmTitleContainer>
    </FirmDetailBox>
  );
}
