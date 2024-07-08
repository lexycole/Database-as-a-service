import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBomb } from '@fortawesome/free-solid-svg-icons';

export function PageParamsError() {
  return (
    <>
      <FontAwesomeIcon icon={faBomb} size="4x" />
      <h2>Neplatne parametry stranky</h2>
    </>
  );
}
