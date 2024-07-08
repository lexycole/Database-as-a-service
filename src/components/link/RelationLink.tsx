import * as React from 'react';
import { FirmLink } from './FirmLink';
import { PersonLink } from './PersonLink';
import { CryptId } from '../../data/DataType';
import { AddressData } from '../address/AddressProps';

export interface IRelationLink {
  id?: CryptId;
  uid?: string;
  visible: boolean;
  name: string;
  title?: string;
  textAfter?: string;
  street?: string;
  address?: AddressData;
}

export function RelationLink(props: IRelationLink) {
  return props.visible === undefined ||
    props.visible === false ||
    !(props.id || props.uid) ? (
    <>{props.name}</>
  ) : (
    <>
      {props.uid ? (
        <FirmLink
          uid={props.uid}
          name={props.name}
          title={props.title}
          textAfter={props.textAfter}
          id={props.uid}
          visible={props.visible}
          address={props?.address}
        />
      ) : (
        <PersonLink
          id={props.id ?? ``}
          name={props.name}
          title={props.title}
          textAfter={props.textAfter}
        />
      )}
    </>
  );
}
