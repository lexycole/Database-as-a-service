import * as React from 'react';
import { SearchCategories } from '../../../components/search/SearchProps';
import { SearchResultProps } from './SearhResultProps';
import { FirmListItemTileSmall } from '../../firm/result/FirmListItemTileSmall';
import { PhoneListItemTileSmall } from '../../phone/result/PhoneListItemTileSmall';

export function SearchListItemTileSmall(props: SearchResultProps) {
  switch (props.category) {
    case SearchCategories.firm:
      return (
        <FirmListItemTileSmall {...props.data} uid={props?.data?.uid ?? ''} />
      );
    case SearchCategories.phone:
      return (
        <PhoneListItemTileSmall {...props.data} id={props?.data?.id ?? ''} />
      );
    default:
      return <></>;
  }
}
