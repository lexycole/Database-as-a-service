import * as React from 'react';
import getLang from '../../../lang/Lang';

export function EmptyResult() {
  return <>{getLang(`search`, `emptyResult`)}</>;
}
