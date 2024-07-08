import * as React from 'react';
import { ReactElement } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { BoxRow } from './DetailRowStyle';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type DetailRowProps = {
  icon?: IconProp;
  label?: string;
  value?: string | null | ReactElement;
};

export function DetailRow(props: DetailRowProps) {
  return props.value === null ? null : props.value ? (
    <BoxRow>
      {props.icon && <FontAwesomeIcon icon={props.icon} />}
      {props.label && <span className="label">{props.label}: </span>}
      <span className="value">{props.value ?? ``}</span>
    </BoxRow>
  ) : (
    <></>
  );
}

export const TableRowDetail = styled.div`
  display: flex;
  font-size: 16px;

  .label {
    width: 200px;
  }

  .value {
    font-weight: bold;
  }
`;

export const TableRowDetailLabelBold = styled.div`
  display: flex;
  font-size: 16px;

  .label {
    width: 200px;
    font-weight: bold;
  }
`;
