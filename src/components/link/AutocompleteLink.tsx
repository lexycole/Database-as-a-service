import * as React from 'react';
import { SearchResultData } from '../../data/SearchResultData';
import { WebLink } from './WebLink';
import { FirmAutocompleteLink } from './FirmLink';
import { ProductAutocompleteLink } from './ProductLink';
import { PhoneAutocompleteLink } from './PhoneLink';
import { SearchCategories } from '../search/SearchProps';

export const AutocompleteLink = (props: SearchResultData) => {
  let element = <></>;
  const { name, id, description } = props;

  let url: string;
  switch (props.category) {
    case SearchCategories.firm:
      props.uid &&
        (element = (
          <FirmAutocompleteLink
            showIdNumber
            showCity
            name={name}
            uid={props.uid}
            description={description}
            idNumber={props.idNumber}
            address={props?.address}
            id={props.uid}
            visible={props.visible}
          />
        ));
      break;
    case SearchCategories.phone:
      props.phone &&
        id &&
        (element = (
          <PhoneAutocompleteLink
            name={props.phone}
            id={id}
            title={props.ratingAvg}
            viewCount={props.viewCount}
          />
        ));
      break;
    case SearchCategories.product:
      id &&
        (element = (
          <ProductAutocompleteLink
            name={name}
            id={id}
            title={description}
            productCategory={props.productCategoryId}
          />
        ));
      break;
    default: {
      url = ``;
      element = (
        <WebLink href={url} title={description}>
          [{`${id}] ${name}`}
        </WebLink>
      );
    }
  }

  return element;
};
