import * as React from 'react';
import { SearchResultBoxRow } from '@/view/search/style/SearchResultStyle';

type SearchResultLabeledRowProps = {
  label?: string;
  value?: string | null;
};

type SearchResultRowProps = {
  value?: string | null;
};

export function SearchResultLabeledRow(props: SearchResultLabeledRowProps) {
  return props.value === null ? null : props.value ? (
    <SearchResultBoxRow>
      {props.label && <div className="label">{props.label} :</div>}
      <div className="value">{props.value ?? ``}</div>
    </SearchResultBoxRow>
  ) : (
    <></>
  );
}

export function SearchResultRow(props: SearchResultRowProps) {
  return props.value === null ? null : props.value ? (
    <SearchResultBoxRow>{props.value ?? ``}</SearchResultBoxRow>
  ) : (
    <></>
  );
}
