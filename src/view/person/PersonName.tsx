import * as React from 'react';
import { PersonLink } from '../../components/link/PersonLink';
import { BasePersonData } from './PersonProps';

export function PersonName(props: BasePersonData) {
  const name: string = props.name + (props.age ? ` (${props.age})` : ``);
  return (
    <>
      {props.id ? (
        <PersonLink name={props.name} id={props.id} title={name} />
      ) : (
        props.name
      )}
    </>
  );
}
