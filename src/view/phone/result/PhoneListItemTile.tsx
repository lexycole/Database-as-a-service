import * as React from 'react';
import { PhoneLink } from '../../../components/link/PhoneLink';
import getLang from '../../../lang/Lang';
import { RatingImage } from '../detail/RatingList';
import { PhoneBasic } from '../PhoneBasicProps';
import {
  ListItemTileName,
  ListItemTileBox,
} from '../../search/style/ListTileStyle';
import { SearchResultLabeledRow } from '@/view/search/result/SearchResultRow';
import { SearchResultBoxRow } from '@/view/search/style/SearchResultStyle';
import { FirmLink } from '@/components/link/FirmLink';
import { FirmBasic } from '@/view/firm/FirmBasicProps';

export function PhoneListItemTile(props: Partial<PhoneBasic>) {
  return (
    <ListItemTileBox>
      <ListItemTileName>
        <PhoneLink
          id={props.id}
          name={props?.phone ?? ``}
          title={props?.description ?? ``}
        />
        <RatingImage rating={props?.ratingAvg ?? ``} />
      </ListItemTileName>
      <SearchResultLabeledRow
        label={getLang(`phoneDetail`, `viewCount`)}
        value={props.viewCount ? `${props.viewCount.toFixed()}x` : null}
      />
      {props.firmId && (
        <SearchResultBoxRow>
          <FirmLink {...(props.firmId as FirmBasic)} id={props.firmId.uid} />
        </SearchResultBoxRow>
      )}
      {
        // todo vz doplnim stitky
      }
    </ListItemTileBox>
  );
}
