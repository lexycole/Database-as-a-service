import * as React from 'react';
import { FirmListItemTile } from '../../firm/result/FirmListItemTile';
import { SearchCategories } from '../../../components/search/SearchProps';
import { PhoneListItemTile } from '../../phone/result/PhoneListItemTile';
import { SearchResultProps } from './SearhResultProps';

export function SearchListItemTile(props: SearchResultProps) {
  switch (props.category) {
    case SearchCategories.firm:
      return <FirmListItemTile {...props.data} uid={props?.data?.uid ?? ''} />;
    case SearchCategories.phone:
      return <PhoneListItemTile {...props.data} id={props?.data?.id ?? ''} />;
    // case SearchCategories.product:
    // 	return <ProductListItem { ...props.data } id={ props.data.id }/>
    default:
      return <></>;
  }
}
