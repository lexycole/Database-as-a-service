import * as React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import { FirmLink } from '../../../components/link/FirmLink';
import { FirmBasic } from '../FirmBasicProps';
import { DetailValue } from '../../../components/detail/DetailValue';
import { AddressValue } from '@/components/address/AddressValue';
import { FirmStatuses, FirmStatusType } from '@/view/firm/FirmStatus';
import TruncateText from '@/utils/TruncateText';
import { FirmStatusTag } from '@/view/firm/detail/FirmTagWrapper';

export function FirmListItemRow(props: Partial<FirmBasic>) {
  const status: FirmStatusType =
    props.firmStatus && props.firmStatus in FirmStatuses
      ? FirmStatuses[props.firmStatus]
      : null;
  return (
    <TableRow>
      <TableCell style={{ maxWidth: '600px' }}>
        <TruncateText title={props.name}>
          {status && <FirmStatusTag status={status} />}
          <FirmLink {...(props as FirmBasic)} id={props.uid} />
        </TruncateText>
      </TableCell>
      <TableCell>
        <DetailValue value={props.idNumber} />
      </TableCell>
      <TableCell style={{ maxWidth: '400px' }}>
        <TruncateText title={props.legalForm}>
          <DetailValue value={props.legalForm} />
        </TruncateText>
      </TableCell>
      <TableCell>
        {props.address && <AddressValue addressData={props.address} />}
      </TableCell>
    </TableRow>
  );
}
