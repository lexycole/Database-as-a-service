import * as React from 'react';
import { SearchCategories } from '../../../components/search/SearchProps';
import { FirmListItemRow } from '../../firm/result/FirmListItemRow';
import { PhoneListItemRow } from '../../phone/result/PhoneListItemRow';
import { SearchResultProps } from './SearhResultProps';

export function SearchListItemRows(props: SearchResultProps) {
  switch (props.category) {
    case SearchCategories.firm:
      return <FirmListItemRow {...props.data} uid={props?.data?.uid ?? ''} />;
    case SearchCategories.phone:
      return <PhoneListItemRow {...props.data} id={props?.data?.id ?? ''} />;
    default:
      return <></>;
  }
}
