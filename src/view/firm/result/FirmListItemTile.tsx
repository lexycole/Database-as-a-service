import * as React from 'react';
import { FirmBasic } from '../FirmBasicProps';
import getLang from '../../../lang/Lang';
import {
  ListItemTileBox,
  ListItemTileName,
} from '../../search/style/ListTileStyle';
import { FirmLink } from '@/components/link/FirmLink';
import {
  SearchResultLabeledRow,
  SearchResultRow,
} from '@/view/search/result/SearchResultRow';
import { FirmRating } from '@/components/FirmRating';
import {
  COLOR_BACKGROUND_TRANSPARENT,
  SearchResultBoxRow,
} from '@/view/search/style/SearchResultStyle';
import { AddressValue } from '@/components/address/AddressValue';
import {
  FirmStatusColor,
  FirmStatuses,
  FirmStatusType,
} from '@/view/firm/FirmStatus';
import TruncateText from '@/utils/TruncateText';
import { appTheme } from '@/storage/ThemeAtom';
import { useRecoilState } from 'recoil';

export function FirmListItemTile(props: Partial<FirmBasic>) {
  const [theme] = useRecoilState(appTheme);
  const status: FirmStatusType =
    props.firmStatus && props.firmStatus in FirmStatuses
      ? FirmStatuses[props.firmStatus]
      : null;
  return (
    <ListItemTileBox
      t={theme}
      color={
        status ? FirmStatusColor.get(status) : COLOR_BACKGROUND_TRANSPARENT
      }
    >
      <ListItemTileName>
        <TruncateText title={props.name}>
          <FirmLink {...(props as FirmBasic)} id={props.uid} />
        </TruncateText>
      </ListItemTileName>
      <SearchResultLabeledRow
        value={props.idNumber}
        label={getLang(`firmDetail`, `registerIdNumber`)}
      />
      {props.legalForm && <SearchResultRow value={props.legalForm} />}
      {props.address && (
        <SearchResultBoxRow>
          <AddressValue addressData={props.address} includeCountry />
        </SearchResultBoxRow>
      )}
      {
        // todo vz for future use
      }
      <SearchResultBoxRow>
        <FirmRating rating={3} />
      </SearchResultBoxRow>
      {props.description && <SearchResultRow value={props.description} />}
    </ListItemTileBox>
  );
}
