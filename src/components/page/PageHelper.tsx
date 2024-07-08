import * as React from 'react';
import ReactPlaceholder from 'react-placeholder';

export function DataPlaceholder(props: { rows: number }) {
  return (
    <ReactPlaceholder
      type="text"
      ready={false}
      rows={props.rows}
      showLoadingAnimation
    >
      <></>
    </ReactPlaceholder>
  );
}
