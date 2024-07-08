import * as React from 'react';
import getLang from '../../lang/Lang';
import styled from 'styled-components';
import { FirmStatusTag } from '@/view/firm/detail/FirmTagWrapper';

const IdNumberSpan = styled.span`
  float: right;
  font-weight: bold;
`;

export function IdNumberWithStatus(props: {
  firmStatus: string;
  idNumber: string;
}) {
  return (
    <IdNumberSpan>
      <FirmStatusTag status={props.firmStatus} />
      {getLang(`firmDetail`, `registerIdNumber`)} :{` `}
      {props.idNumber}
    </IdNumberSpan>
  );
}
