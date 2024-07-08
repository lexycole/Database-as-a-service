import * as React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import { PhoneLink } from '../../../components/link/PhoneLink';
import { RatingImage } from '../detail/RatingList';
import { PhoneBasic } from '../PhoneBasicProps';
import { DetailValue } from '../../../components/detail/DetailValue';

export function PhoneListItemRow(props: Partial<PhoneBasic>) {
  return (
    <TableRow>
      <TableCell>
        <RatingImage rating={props?.ratingAvg ?? ``} />
        <PhoneLink
          id={props.id}
          name={props?.phone ?? ``}
          title={props?.description ?? ``}
        />
      </TableCell>
      <TableCell>
        <DetailValue
          value={props.viewCount ? props.viewCount.toFixed() : null}
        />
      </TableCell>
      <TableCell>
        <DetailValue value={props.firmId ? props.firmId.name : null} />
      </TableCell>
    </TableRow>
  );
}
